import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const SuccessScreen = ({route, navigation}) => {
  const {name, phoneNumber, email, searchParams, hotel} = route.params;
  console.log('1', searchParams);
  console.log(route);
  const handleComplete = () => {
    const booking = {
      hotelName: hotel.name,
      price: hotel.price,
      checkInDate: searchParams.departureDate,
    };

    const updatedBookings = [...route.params.bookings, booking];

    navigation.navigate('MyBooking', {bookings: updatedBookings});
  };
  console.log(route.params);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đặt phòng thành công!</Text>
      <View>
        <Text>Họ và tên: {name}</Text>
        <Text>Số điện thoại: {phoneNumber}</Text>
        <Text>Email: {email}</Text>
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

      <TouchableOpacity style={styles.completeButton} onPress={handleComplete}>
        <Text style={styles.completeButtonText}>Hoàn thành</Text>
      </TouchableOpacity>
    </View>
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
  completeButton: {
    backgroundColor: '#0099FF',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 30,
  },
  completeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SuccessScreen;
