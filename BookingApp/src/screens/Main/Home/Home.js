import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CustomTextInput from '../../../components/CustomTextInput';
const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <CustomTextInput
          placeholder={'Search hotel,place,...'}
          imageSource={require('../../../assets/icons/icon_search.png')}
          style={styles.textInputView}
        />
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require('../../../assets/icons/icon_bell.png')}
          />
          <View>
            <Text>aaa</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require('../../../assets/icons/icon_chat.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0099FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
  },
  textInputView: {
    backgroundColor: 'white',
    width: 330,
    margin: 10,
  },
  icon: {
    tintColor: 'white',
    height: 30,
    width: 30,
    marginRight: 5,
  },
});
