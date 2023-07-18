import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView ,ActivityIndicator } from 'react-native';
import { Card, Button, Icon,  } from '@rneui/themed';
import axios from 'axios';
import configs from '../../env'
import { SendRequest } from '../../helper';
import { styles } from '../styles';

const FilmsPage = (
  { navigation, route } // 'navigation' ve 'route' parametrelerini alın

) => {
  console.log('FilmsPage içinde');
  console.log(route);
  const [loading, setLoading] = useState(false);
  const [films, setFilms] = useState([]);
  const [filmCount, setFilmCount] = useState(0);
  const [paginate, setPaginate] = useState({
    next_page: null,
    prev_page_url: null,
    limit: 10,
    current_page: 1,
    last_page: 1,
  });


  if(route.params?.request_url){
    explode = route.params.request_url.split(configs.development.API_URL);
    if(explode.length>1){
      request_url = explode[1];
    }else{
      request_url = 'films';
    }
  }else{
    request_url = 'films';
  }
  
  useEffect(() => {
    const getFilms = async () => {
      setLoading(true);
      
      
      const result = await SendRequest(request_url, 'GET');
      console.log('Filmler geldi');

        if(result.data.length>0){
          setFilms(result.data);
          setFilmCount(result.total);
          console.log(result);
          setPaginate({
            next_page_url: result.next_page_url,
            prev_page_url: result.prev_page_url,
            current_page: result.current_page,
            last_page: result.last_page,
            limit: 10,
          });
          setLoading(false);
      }else{
        alert('Filmler getirilemedi');
      }
     
      
    };
    getFilms();
  }, 
  [request_url] // 'request_url' değiştiğinde 'useEffect' çalışır
  );


  if (loading) {
    return (
      <ActivityIndicator size="large" color="#00ff00" />
    )
   
  }else{
    return (
      <ScrollView>
        {films.map((film) => (

     
        <Card>
          <Card.Title>{film.name}</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0, margin: 0, height: 200, width: '100%', borderRadius: 30 }}
            source={{
              uri: 'http://fitifiti.com.tr/uploads/'+film.image,
            }}
          />
          <Text style={{ marginBottom: 10, marginTop: 10 }}>
            {film.description}
          </Text>
          <Button
            icon={
              <Icon name="movie" color="#ffffff" iconStyle={{ marginRight: 10 }} />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="Görüntüle"
          />
          
        </Card>
           ))}

            <Text style={[
              styles.CenterText,
              styles.TextBold,
              styles.button
            ]}>
            Bulunduğun Sayfa: {paginate.current_page} / {paginate.last_page}
          </Text>
          
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Button
            onPress={() => navigation.navigate('Films',{request_url: paginate.prev_page_url})}

              icon={
                <Icon name="arrow-left" color="#ffffff" iconStyle={{ marginRight: 10 }} />
              }
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="Önceki"
              disabled={paginate.prev_page_url == null ? true : false}
            />
            <Button
            onPress={() => navigation.navigate('Films',{
              request_url: paginate.next_page_url
            })}
              icon={
                <Icon name="arrow-right" color="#ffffff" iconStyle={{ marginRight: 10 }} />
              }
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
              }}
              title="Sonraki"
              disabled={paginate.next_page_url == null ? true : false}
            />
          </View>


      </ScrollView>
    );
  }



};

export default FilmsPage;
