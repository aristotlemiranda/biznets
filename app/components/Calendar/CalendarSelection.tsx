import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

const CalendarSelection = () => {
  const [selectedDate, setSelectedDate] = useState(moment().format('DD/MM/YYYY'));
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  const todayISO = moment().format('YYYY-MM-DD');
  const sixMonthsAgo = moment().subtract(6, 'months').format('YYYY-MM-DD');

  interface DayPress {
    dateString: string;
    day: number;
    month: number;
    year: number;
    timestamp: number;
  }

  const formatDisplayDate = useCallback((dateString: string) => {
    const selectedMoment = moment(dateString, 'YYYY-MM-DD');
    const formattedDate = selectedMoment.format('DD/MM/YYYY');

    if (selectedMoment.isSame(moment(), 'day')) {
      return `Today ${formattedDate}`;
    } else {
      const dayName = selectedMoment.format('dddd'); // Gets full day name (Monday, Tuesday, etc.)
      return `${dayName}, ${formattedDate}`;
    }
  }, []);

  const onDateSelect = useCallback((date: DayPress) => {
    const selectedISO = date.dateString;
    const displayDate = formatDisplayDate(selectedISO);
    setSelectedDate(displayDate);
    setIsCalendarVisible(false);
  }, [formatDisplayDate]);

  return (
    <View>
      <TouchableOpacity 
        onPress={() => setIsCalendarVisible(true)}
        className="w-full" // Added full width
      >
     <Text className="text-base text-[#05598d] text-left underline">
        {selectedDate}
        </Text>
      </TouchableOpacity>

      <Modal
        visible={isCalendarVisible}
        transparent={true}
        animationType="fade"
        statusBarTranslucent={true}
        onRequestClose={() => setIsCalendarVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setIsCalendarVisible(false)}>
          <View className="flex-1 justify-center items-center bg-black/50">
            <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
              <View className="w-[90%] bg-white rounded-xl p-4 shadow-xl">
                {/* X Button */}
                <TouchableOpacity 
                  onPress={() => setIsCalendarVisible(false)}
                  className="absolute right-2 top-2 z-10 p-2"
                >
                  <Text className="text-gray-500 text-lg">✕</Text>
                </TouchableOpacity>

                <Calendar
                  markingType="custom"
                  markedDates={{
                    [moment(selectedDate, 'DD/MM/YYYY').format('YYYY-MM-DD')]: {
                      selected: true,
                      selectedColor: '#00adf5',
                    },
                    [todayISO]: {
                      marked: true,
                      dotColor: '#00adf5',
                    }
                  }}
                  minDate={sixMonthsAgo}
                  maxDate={todayISO}
                  onDayPress={onDateSelect}
                  theme={{
                    todayTextColor: '#00adf5',
                    selectedDayBackgroundColor: '#00adf5',
                    selectedDayTextColor: '#ffffff',
                    textDayFontSize: 14,
                    textMonthFontSize: 16,
                    textDayHeaderFontSize: 14,
                  }}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default CalendarSelection;
