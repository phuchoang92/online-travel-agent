import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import SearchModal from './SearchModal';
import DatePickerModal from './DatePickerModal';
const CustomSort = ({placeholder, style}) => {
  const [text, setText] = useState('');
  const handleTextChange = newText => {
    setText(newText);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };
  const [selectedLocation, setSelectedLocation] = useState('');
  const handleLocationSelect = location => {
    setSelectedLocation(location);
    setIsModalVisible(false);
  };
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const showDatePickerModal = () => {
    setIsDatePickerVisible(true);
  };

  const hideDatePickerModal = () => {
    setIsDatePickerVisible(false);
  };
  // const formatDate = date => {
  //   const day = date.getDate().toString().padStart(2, '0');
  //   const month = (date.getMonth() + 1).toString().padStart(2, '0');
  //   const year = date.getFullYear().toString().slice(-2);

  //   return `${day}/${month}/${year}`;
  // };

  const [selectedDate, setSelectedDate] = useState(null); // Thêm state selectedDate và khởi tạo ban đầu là null
  const handleDateSelect = date => {
    setSelectedDate(date);
    setIsModalVisible(false);
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 15,
        width: 400,
      }}>
      <View style={styles.placeView}>
        <View>
          <View style={styles.container0}>
            <TouchableOpacity onPress={showModal}>
              <Image
                source={require('../assets/icons/icon_location.png')}
                style={styles.iconLocation}
              />
            </TouchableOpacity>
            <SearchModal
              isVisible={isModalVisible}
              onClose={hideModal}
              onLocationSelect={handleLocationSelect}
            />

            <Text style={styles.text}>Điểm đến, Khách sạn</Text>
          </View>
          <View style={styles.container2}>
            <Text style={styles.dayText}>
              {selectedLocation ? selectedLocation : 'Điểm đến, Khách sạn'}
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image
            style={styles.iconGPS}
            source={require('../assets/icons/icon_gps.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.dayView}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <View style={styles.container}>
              <TouchableOpacity onPress={showDatePickerModal}>
                <Image
                  source={require('../assets/icons/icon_calendar.png')}
                  style={styles.iconCalendear}
                />
              </TouchableOpacity>
              {isDatePickerVisible && (
                <DatePickerModal
                  isVisible={isDatePickerVisible}
                  onClose={hideDatePickerModal}
                  onDateSelect={handleDateSelect}
                />
              )}
              <Text style={styles.text}>Ngày Nhận Phòng</Text>
            </View>
            <View style={styles.bookingDay}>
              <Text style={styles.dayText}>
                {selectedDate ? selectedDate : 'Ngày nhận phòng'}
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.container3}>
              <TouchableOpacity>
                <Image
                  source={require('../assets/icons/icon_night.png')}
                  style={styles.iconCalendear}
                />
              </TouchableOpacity>
              <Text style={styles.text}>Số đêm nghỉ</Text>
            </View>
            <View style={styles.nightRelax}>
              <Text style={styles.dayText}>aa</Text>
            </View>
          </View>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 30}}>
          <Text>Ngay tra phong: </Text>
          <Text>aaa</Text>
        </View>
      </View>
      <View style={styles.roomNumberView}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={{height: 30, width: 30}}>
            <Image
              source={require('../assets/icons/icon_room_booking.png')}
              style={styles.iconRoomBooking}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Số người và số khách</Text>
        </View>
        <View style={styles.roomBooking}>
          <Text style={styles.dayText}>aa</Text>
        </View>
      </View>
      <View style={styles.sortTypeView}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity>
            <Image
              source={require('../assets/icons/icon_sort.png')}
              style={styles.iconCalendear}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Bộ lọc</Text>
        </View>
        <View style={styles.bookingDay}>
          <Text style={styles.sortText}>Chọn bộ lọc</Text>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#0099FF',
            height: 40,
            width: 250,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Text style={styles.findText}>Tim kiem</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomSort;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container0: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 320,
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30,
  },
  iconLocation: {
    height: 30,
    width: 30,
    tintColor: 'grey',
  },
  iconGPS: {
    height: 30,
    width: 30,
    tintColor: 'grey',
    marginLeft: 15,
    marginBottom: 10,
  },
  iconCalendear: {
    height: 30,
    width: 30,
    tintColor: 'grey',
  },
  text: {
    fontSize: 17,
  },
  inputText: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    // borderColor: 'grey',
    // borderWidth: 1,
    fontSize: 15,
    fontWeight: 'bold',
  },
  placeView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'grey',
    height: 90,
    margin: 5,
  },
  dayView: {
    borderBottomWidth: 1,
    borderColor: 'grey',
    height: 75,
    margin: 5,
  },
  dayText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  bookingDay: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30,
  },
  nightRelax: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 30,
  },
  container3: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  roomNumberView: {
    borderBottomWidth: 1,
    borderColor: 'grey',
    height: 60,
    margin: 5,
  },
  iconRoomBooking: {
    height: 140,
    width: 140,
    tintColor: 'grey',
    bottom: 57,
    right: 48,
  },
  roomBooking: {
    marginLeft: 30,
  },
  sortTypeView: {
    height: 60,
    margin: 5,
  },
  sortText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'grey',
  },
  findText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
});
