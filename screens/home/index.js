import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { PricingCard, lightColors, Image, Card, Button, Icon } from '@rneui/themed';
const Home = props => {
  const { navigation } = props;

  return (

    <ScrollView>



      <Card>
        <Card.Title>Filmler</Card.Title>
        <Card.Divider />
        <Card.Image
          style={{ padding: 0, margin: 0, height: 200, width: '100%', borderRadius: 30 }}
          source={{
            uri:
              'http://fitifiti.com.tr/icons/film.jpg',

          }}
        />
        <Text style={{ marginBottom: 10, marginTop:10 }}>
          İzlediğimiz yada izlemek isteyeceğimiz filmleri buraya girebiliriz.
        </Text>
        <Button
          icon={
            <Icon
              name="movie"
              color="#ffffff"
              iconStyle={{ marginRight: 10 }}
            />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Görüntüle"

          onPress={() => navigation.navigate('Films')}

        />
        <Button
          icon={
            <Icon
              name="add-circle"
              color="#ffffff"
             
              iconStyle={{ marginRight: 10 }}
            />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            marginTop:10,
            backgroundColor:lightColors.secondary
          }}
          title="Yeni Ekle"
        />
      </Card>



      <Card>
        <Card.Title>Mekanlar</Card.Title>
        <Card.Divider />
        <Card.Image
          style={{ padding: 0, margin: 0, height: 200, width: '100%', borderRadius: 30 }}
          source={{
            uri:
              'http://fitifiti.com.tr/icons/mekan.jpg',

          }}
        />
        <Text style={{ marginBottom: 10, marginTop:10 }}>
          Gitmek İstediğin Mekanları Buraya Ekleyebilirsin.
        </Text>
        
        <Button
          icon={
            <Icon
              name="favorite"
              color="#ffffff"
              iconStyle={{ marginRight: 10 }}
            />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Görüntüle"
        />
        <Button
          icon={
            <Icon
              name="add-circle"
              color="#ffffff"
             
              iconStyle={{ marginRight: 10 }}
            />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            marginTop:10,
            backgroundColor:lightColors.secondary
          }}
          title="Yeni Ekle"
        />
      </Card>




      <Card>
        <Card.Title>Aktivite</Card.Title>
        <Card.Divider />
        <Card.Image
          style={{ padding: 0, margin: 0, height: 200, width: '100%', borderRadius: 30 }}
          source={{
            uri:
              'http://fitifiti.com.tr/icons/aktivite.jpg',

          }}
        />
        <Text style={{ marginBottom: 10, marginTop:10 }}>
          Gerçekleştirmek İstediğin Aktiviteleri Buraya Ekleyebilirsin.
        </Text>
        
        <Button
          icon={
            <Icon
              name="search"
              color="#ffffff"
              iconStyle={{ marginRight: 10 }}
            />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Görüntüle"
        />
        <Button
          icon={
            <Icon
              name="add-circle"
              color="#ffffff"
             
              iconStyle={{ marginRight: 10 }}
            />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            marginTop:10,
            backgroundColor:lightColors.secondary
          }}
          title="Yeni Ekle"
        />
      </Card>



    </ScrollView>

  );
};

export default Home;