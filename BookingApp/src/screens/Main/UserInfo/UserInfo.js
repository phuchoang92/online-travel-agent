import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const UserInfoScreen = ({navigation}) => {
  const handlePaymentPress = () => {
    navigation.navigate('PaymentScreen');
  };
  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>User Information</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.userInfoContainer}>
          <Image
            style={styles.avatar}
            source={require('../../../assets/images/onboarding1.png')}
          />
          <Text style={styles.username}>Long Pham</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>longphamk2kk@gmail.com</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Age:</Text>
            <Text style={styles.value}>25</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.value}>302 Lang.St</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.paymentContainer}
          onPress={handlePaymentPress}>
          <Text style={styles.paymentTitle}>Payment Method</Text>
          <Text style={styles.paymentText}>**** **** **** 1234</Text>
          <Text style={styles.paymentButton}>Update Payment</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default UserInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
  },
  userInfoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  value: {
    flex: 1,
  },
  paymentContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 20,
  },
  paymentTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  paymentText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  paymentButton: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logoutButton: {
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  logoutText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
