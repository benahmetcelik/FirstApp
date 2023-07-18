// LoginPage.js

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {  Text, TextInput, View,ImageBackground  } from 'react-native';
import { styles } from '../styles';
import LoginController from '../../controllers/LoginController';
import { Redirect, customAlert } from '../../helper';
import ButtonSpinner from 'react-native-spinner-button'

import Icon from 'react-native-vector-icons/AntDesign';

export default function LoginPage({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [defaultLoading, setDefaultLoading] = useState(false);

  const loginController = LoginController();
  const handleLogin = async () => {
    setDefaultLoading(true);
    

    try {
      const tryLogin = await loginController.login(username, password);
      if (tryLogin === true) {
        Redirect(navigation, 'Home', tryLogin.data);
      } else {
        setTimeout(() => {
        setDefaultLoading(false);
        customAlert('Şifre veya Kullanıcı Adı Hatalı');
        }, 1000);
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <ImageBackground
    style={styles.login}
    source={{ uri: 'http://fitifiti.com.tr/uploads/1689443722.jpg' }}
    resizeMode="stretch"
  >
    <View style={styles.login}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <ButtonSpinner
        positionSpinner={'centered-without-text'}
        onPress={handleLogin}
        buttonStyle={styles.button}
        isLoading={defaultLoading}
        indicatorCount={10}
      >
        
        <Text style={[styles.CenterText, styles.TextBold]}><Icon name="hearto" size={20} color="#900" /> Login</Text>

      </ButtonSpinner>

    </View>
    </ImageBackground>
  );
}
