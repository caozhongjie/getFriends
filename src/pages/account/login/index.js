import React, {useState} from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import {pxToDp} from '../../../utils/styleKits'
import { Input } from 'react-native-elements';
import {validatePhone} from '../../../utils/validate'
const Index = () => {
 const [phone, setPhone] = useState('')
 const phoneNumberChange = (phone) => {
     setPhone(phone)
  }
  const phoneNumberSubmitEditing = () => {
    console.log('手机号码点击完成')
  }
  return (
    <View>
        {/*手机状态栏组件*/}
      <StatusBar backgroundColor="transparent" translucent={true} />
      <Image style={{width: '100%', height: pxToDp(200)}} source={require('../../../res/profileBackground.jpg')}></Image>
      <View style={{padding: pxToDp(20)}}>
          <View>
              <View>
                  <Text style={{fontSize: pxToDp(25), color: '#888', fontWeight: 'bold'}}>手机号登录注册</Text>
              </View>
              <View style={{marginTop: pxToDp(30)}}>
                  <Input
                      placeholder='请输入手机号码'
                      maxLength={11}
                      keyboardType={"phone-pad"}
                      value={phone}
                      inputStyle={{color: "#333"}}
                      onChangeText={phoneNumberChange}
                      onSubmitEditing={phoneNumberSubmitEditing}
                      errorMessage={validatePhone(phone) ? '': "号码格式不正确"}
                      leftIcon={{ type: 'font-awesome', name: 'phone', color: '#ccc', size: pxToDp(20) }}
                  />
              </View>
          </View>
      </View>
    </View>
  );
};

export default Index;
