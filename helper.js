import axios from 'axios';
import configs from './env';



export const customAlert = function (title = '', message = '') {
  alert(title + ' ' + message);
  console.log(title + ' ' + message);
};

export const Redirect = function (navigation, screenName, params = {}) {
  navigation.navigate(screenName);
};


export const SendRequest = async (url, method, body) => {
  console.log('helpers sendRequest içinde');
  url = configs.development.API_URL + url;
  result = {}; // 'result' değişkeni let olarak tanımlanmalıdır.



  const formData = new FormData();
for (const key in body) {
  formData.append(key, body[key]);
}
console.log('sendRequest formDataya çevrildi');
const requestOptions = {
  method: method,
  headers: { 'Content-Type': 'multipart/form-data' },
  body: formData
};

  console.log('istek göndermeye hazır');
  console.log(requestOptions);

  try {
    console.log('istek göndermeye başladı'+url);

    if(method=='GET'){
      fetchOptions = {
        method: method,
        headers: { 'Content-Type': 'multipart/form-data' },
      };
    }else{
      fetchOptions = requestOptions;
    }

    const response = await fetch(url, fetchOptions); // 'await' kullanarak 'fetch' işlemini bekleyin
    console.log('istek gönderildi');
    console.log(response);
    console.log('istek sonucu bekleniyor');

    const data = await response.json();
    console.log('istek sonucu alındı');
    console.log(data);
    result = data; // 'result' değerini 'data' olarak güncelleyin
  } catch (error) {
    console.log('istek başarısız oldu');

    console.error(error);
  }

  return result;
};

export default {
  customAlert,
  SendRequest,
  Redirect
};


