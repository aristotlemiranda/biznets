import {View, Text, StyleSheet, AppState} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import {Icon, IconButton} from 'react-native-paper';

export default function QRScanner(props: any) {
  const {hasPermission, requestPermission} = useCameraPermission();
  const [flashlightEnabled, setFlashlightEnabled] = useState<boolean>(false);
  const device = useCameraDevice('back');

  const cameraRef = useRef(null);
  const [isCameraActive, setCameraActive] = useState<boolean>(true);
  const appState = useRef(AppState.currentState);

  const codeScanner = useCodeScanner({
    codeTypes: ['qr'],
    onCodeScanned: codes => {
      console.log('onCodeScanned ', codes);
      console.log('onCodeScanned value', codes[0].value);
      props.onRead(codes[0].value);
    },
  });

  const toggleFlashlight = () => {
    setFlashlightEnabled(!flashlightEnabled);
  };

  useEffect(() => {
    const handleAppStateChange = async (nextAppState: any) => {
      if (appState.current.match(/active/) && nextAppState === 'background') {
        // App is going to the background; pause the camera
        setCameraActive(false);
      } else if (
        appState.current.match(/background/) &&
        nextAppState === 'active'
      ) {
        // App is coming to the foreground; resume the camera
        const cameraPermission = await Camera.getCameraPermissionStatus();
        if (cameraPermission === 'granted') {
          setCameraActive(true);
        } else {
          console.log('Camera permission is not granted');
        }
      }
      appState.current = nextAppState;
    };

    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    const requestCameraPermission = async () => {
      if (hasPermission) {
        return hasPermission;
      } else {
        return await requestPermission();
      }
    };

    requestCameraPermission();

    // setTimeout(() => {
    //   props.onRead(null);
    // }, 15 * 1000);
  }, [hasPermission, requestPermission, props]);

  // if (device == null || !hasPermission) {
  //   return (
  //     <View>
  //       <Text>Camera not available or not permitted</Text>
  //     </View>
  //   );
  // }

  return (
    <View className="flex-1 w-full">
      {device == null || !hasPermission ? (
        <View>
          <Text>Camera not available or not permitted</Text>
        </View>
      ) : (
        <>
          <View className="items-center flex-1">
            {isCameraActive ? (
              <>
                <Camera
                  ref={cameraRef}
                  codeScanner={codeScanner}
                  device={device}
                  isActive={isCameraActive}
                  torch={device.hasTorch && flashlightEnabled ? 'on' : 'off'}
                  style={StyleSheet.absoluteFill}
                />

                {/* <View className="flex-1 items-center justify-center w-full h-full"> */}
                {/* <View className="w-3/4 h-5/6 border-green-600 border-2 border-solid" /> */}
                {/* <Text className="mt-5 color-white text-lg text-pretty font-semibold">
                    Align QR Code within the frame
                  </Text> */}
                {/* </View> */}

                <View className="flex-1 flex-row h-full items-center">
                  <View className="self-end">
                    <IconButton
                      icon={flashlightEnabled ? 'flashlight-off' : 'flashlight'}
                      size={15}
                      animated={true}
                      onPress={toggleFlashlight}
                      mode="contained-tonal"
                    />
                  </View>

                  {/* <View className="self-end left-1/3 bottom-1">
                    <Icon
                      source={require('../../../assets/images/netsbiz_logo.png')}
                      size={40}
                    />
                  </View> */}
                </View>
              </>
            ) : (
              <View className="flex-1 items-center justify-center">
                <Text>Camera paused</Text>
              </View>
            )}
          </View>
          <View className="flex-1 bg-cyan-100">
            <Text>Text</Text>
          </View>
        </>
      )}
    </View>
  );
}
