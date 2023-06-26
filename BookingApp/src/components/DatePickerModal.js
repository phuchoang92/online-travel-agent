import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import {Calendar} from 'react-native-calendars';

const DatePickerModal = ({isVisible, onClose, onDateSelect}) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const windowHeight = Dimensions.get('window').height;
  const modalHeight = windowHeight * 0.5;

  const handleModalClose = () => {
    setSelectedDate(null);
    onClose();
  };

  const handleDateSelect = date => {
    setSelectedDate(date.dateString);
    onDateSelect(date.dateString);
    onClose();
  };

  return (
    <Modal visible={isVisible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={[styles.modalContainer, {height: modalHeight}]}>
          <View style={styles.headerContainer}>
            <Text style={styles.titleText}>Chọn ngày</Text>
            <TouchableOpacity
              onPress={handleModalClose}
              style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Đóng</Text>
            </TouchableOpacity>
          </View>
          <Calendar
            onDayPress={handleDateSelect}
            markedDates={{
              [selectedDate]: {
                selected: true,
                selectedColor: 'blue',
              },
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = {
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 8,
  },
  closeButtonText: {
    color: 'blue',
    fontSize: 16,
  },
};

export default DatePickerModal;
