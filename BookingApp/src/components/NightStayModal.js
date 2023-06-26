import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';

const NightStayModal = ({isVisible, onClose, onNightStaySelect}) => {
  const [selectedNightStay, setSelectedNightStay] = useState(1);

  const handleNightStaySelect = nightStay => {
    setSelectedNightStay(nightStay);
    onNightStaySelect(nightStay);
  };

  const renderNightStayOptions = () => {
    const options = [];
    for (let i = 1; i <= 30; i++) {
      options.push(
        <TouchableOpacity
          key={i}
          style={[
            styles.nightStayOption,
            selectedNightStay === i && styles.selectedNightStayOption,
          ]}
          onPress={() => handleNightStaySelect(i)}>
          <Text
            style={[
              styles.nightStayOptionText,
              selectedNightStay === i && styles.selectedNightStayOptionText,
            ]}>
            {i} đêm
          </Text>
        </TouchableOpacity>,
      );
    }
    return options;
  };

  const calculateCheckOutDate = () => {
    const checkInDate = new Date();
    const checkOutDate = new Date(checkInDate);
    checkOutDate.setDate(checkOutDate.getDate() + selectedNightStay);
    const day = checkOutDate.getDate().toString().padStart(2, '0');
    const month = (checkOutDate.getMonth() + 1).toString().padStart(2, '0');
    const year = checkOutDate.getFullYear().toString().slice(-2);
    return `${day}/${month}/${year}`;
  };

  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Chọn số đêm nghỉ</Text>
          {renderNightStayOptions()}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Đóng</Text>
          </TouchableOpacity>
          <Text style={styles.checkOutText}>
            Thời gian trả phòng: {calculateCheckOutDate()}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default NightStayModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 300,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  nightStayOption: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  selectedNightStayOption: {
    backgroundColor: '#eee',
  },
  nightStayOptionText: {
    fontSize: 16,
  },
  selectedNightStayOptionText: {
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#0099FF',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  checkOutText: {
    marginTop: 10,
    fontSize: 16,
  },
});
