import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import CustomTextInput from '../../components/CustomTextInput';

const BookingScreen = ({route, navigation}) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const {searchParams} = route.params;
  const {hotel} = route.params;
  console.log('alo', route);

  const handleBooking = () => {
    console.log('Booking details:', {
      name,
      phoneNumber,
      email,
    });
    navigation.navigate('SuccessScreen', {
      name,
      phoneNumber,
      email,
      searchParams,
      hotel,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Thông tin đặt phòng</Text>
      <View>
        <Text>Ho va ten</Text>
        <CustomTextInput
          placeholder="Họ và tên"
          value={name}
          onChangeText={setName}
          onTextChange={setName}
        />
      </View>
      <View>
        <Text>So dien thoai</Text>
        <CustomTextInput
          placeholder="Số điện thoại"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          onTextChange={setPhoneNumber}
          keyboardType="phone-pad"
        />
      </View>
      <View>
        <Text>Email</Text>
        <CustomTextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          onTextChange={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.bookingInfo}>
        <Text style={styles.bookingInfoText}>
          Ngày check-in: {searchParams.departureDate}
        </Text>
        <Text style={styles.bookingInfoText}>
          Số đêm nghỉ: {searchParams.nights} đêm
        </Text>
        <Text style={styles.bookingInfoText}>
          Số phòng: {searchParams.rooms} phòng
        </Text>
        <Text style={styles.bookingInfoText}>
          Số khách: {searchParams.adults} người
        </Text>
        <Text style={styles.bookingInfoText}>
          Tổng giá tiền: {hotel.price} VND
        </Text>
      </View>

      <TouchableOpacity style={styles.bookingButton} onPress={handleBooking}>
        <Text style={styles.bookingButtonText}>Xác nhận</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bookingInfo: {
    marginTop: 20,
    marginBottom: 30,
  },
  bookingInfoText: {
    fontSize: 16,
    marginBottom: 10,
  },
  bookingButton: {
    backgroundColor: '#0099FF',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  bookingButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BookingScreen;
