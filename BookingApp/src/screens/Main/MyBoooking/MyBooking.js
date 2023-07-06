import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from "react";

const MyBooking = ({route}) => {
  const [bookingList, setBookingList] = useState([]);


  useEffect(()=>{

  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách đặt phòng của bạn</Text>
      {bookingList.map((booking, index) => (
        <View key={index} style={styles.bookingItem}>
          <Text style={styles.bookingText}>{booking.hotelName}</Text>
          <Text style={styles.bookingText}>Giá tiền: {booking.price} VND</Text>
          <Text style={styles.bookingText}>
            Ngày check-in: {booking.checkInDate}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default MyBooking;

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
  bookingItem: {
    marginBottom: 20,
  },
  bookingText: {
    fontSize: 16,
  },
});
