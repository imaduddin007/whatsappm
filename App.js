import React, { useState, useEffect, Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { AppLoading } from 'expo';
import { Container, List, Badge, ListItem, View, Thumbnail, Header, Fab, Tab, Tabs, TabHeading, Icon, Text, Left, Body, Right, Button, Title, ScrollableTab } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
 
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }
 
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
 
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
 
    return (
      <Container>
        <Header style={{backgroundColor:"#075E54"}} androidStatusBarColor="#03260d">

          <Body>
           <Title>WhatsApp</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
 

        
        <Tabs tabContainerStyle={{elevation:0}}>
        <Tab heading={ <TabHeading style={{backgroundColor:"#075E54"}}><Icon name="camera" style={{color:'white'}}/></TabHeading>}>

          <Text/>
        </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor:"#075E54"}}><Text style={{color:"white"}}>Chat</Text></TabHeading>}>
            <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQgBiw1md6hKE_Yi7OKDwqnbnl74w4TII1zq40fGNcjYw1GFmN&s' }} />
              </Left>
              <Body>
                <Text>Ojat</Text>
                <Text note>Tolong Mtk Di kumpulin ............... . .</Text>
              </Body>
              <Right>
                <Text note>6:43 am</Text>
              </Right>
            </ListItem>
               <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQgBiw1md6hKE_Yi7OKDwqnbnl74w4TII1zq40fGNcjYw1GFmN&s' }} />
              </Left>
              <Body>
                <Text>Pranowo</Text>
                <Text note>Besok Ulangan Listening Harap Hadir . .</Text>
              </Body>
              <Right>
                <Text note>10:43 am</Text>
              </Right>
            </ListItem>
               <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQgBiw1md6hKE_Yi7OKDwqnbnl74w4TII1zq40fGNcjYw1GFmN&s' }} />
              </Left>
              <Body>
                <Text>Andrea </Text>
                <Text note>DHarap Tugas PKN besok di kumpulin !!!!!!</Text>
              </Body>
              <Right>
                <Text note>08:43 pm</Text>
              </Right>
            </ListItem>
               <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQgBiw1md6hKE_Yi7OKDwqnbnl74w4TII1zq40fGNcjYw1GFmN&s' }} />
              </Left>
              <Body>
                <Text>Oasas</Text>
                <Text note>PROYEKTOR DI KEMBALIKAN JANGAN DI BAWA PULANG</Text>
              </Body>
              <Right>
                <Text note>03:43 pm</Text>
              </Right>
            </ListItem>
               <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQgBiw1md6hKE_Yi7OKDwqnbnl74w4TII1zq40fGNcjYw1GFmN&s' }} />
              </Left>
              <Body>
                <Text>BANG Kampret</Text>
                <Text note>Lorem Ipsum dolor shit amte meta tmasdmac .cx.,c.a </Text>
              </Body>
              <Right>
                <Text note>03:43 pm</Text>
              </Right>
            </ListItem>
          </List>
             <View style={{ flex: 1 }}>
          <Fab
            style={{ backgroundColor: '#51e302' }}
            position="bottomRight">
            <Icon name="text" />
          </Fab>
        </View>

          </Tab>  


          <Tab heading={ <TabHeading style={{backgroundColor:"#075E54"}}><Text style={{color:"white"}}>Status</Text></TabHeading>}>
          <List>
            <ListItem avatar noBorder>
              <Left>

                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQgBiw1md6hKE_Yi7OKDwqnbnl74w4TII1zq40fGNcjYw1GFmN&s' }}  />
                <Badge success style={{width:21, height:21,position:"absolute", bottom:0, right:0}}><Icon name="add" style={{color:"white", fontSize:17, marginRight: -1}}/></Badge>
              </Left>

              <Body>
                <Text>Status Saya</Text>
                <Text note>Klik untuk melakukan pembaruan status saya . .</Text>
              </Body>
            </ListItem>
          </List>
          <List>
          <ListItem itemDivider>
              <Text note>Pembaruan Terkini</Text>
            </ListItem> 
            </List>
          <List>
            <ListItem avatar noBorder>
              <Left>
                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQgBiw1md6hKE_Yi7OKDwqnbnl74w4TII1zq40fGNcjYw1GFmN&s' }} style={{borderRadius: 50, borderColor: '#075E54' , borderWidth:2}} />
              </Left>
              <Body>
                <Text>Annisah</Text>
                <Text note>Kemarin 12.55</Text>
              </Body>
            </ListItem>
          </List>
           <List>
          <ListItem itemDivider>
              <Text note>Pembaruan yang telah dilihat</Text>
            </ListItem> 
            </List>
          <List>
            <ListItem avatar noBorder>
              <Left>
                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQgBiw1md6hKE_Yi7OKDwqnbnl74w4TII1zq40fGNcjYw1GFmN&s' }}  style={{borderRadius: 50, borderColor: 'grey' , borderWidth:2}}/>
              </Left>
              <Body>
                <Text>Alnursan</Text>
                <Text note>Sekarang 09.00</Text>
              </Body>
            </ListItem>
          </List>
            <View style={{ flex: 1 }}>
          <Fab
            containerStyle={{ }}
            style={{ backgroundColor: '#51e302' }}
            position="bottomRight">
            <Icon name="camera" />
           
            <Button disabled style={{ backgroundColor: 'grey' }}>
              <Icon name="create" />
            </Button>
          </Fab>
        </View>
          </Tab>





          <Tab heading={ <TabHeading style={{backgroundColor:"#075E54"}}><Text style={{color:"white"}}>Calls</Text></TabHeading>}>
             <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQgBiw1md6hKE_Yi7OKDwqnbnl74w4TII1zq40fGNcjYw1GFmN&s' }} style={{borderRadius: 50}} />
              </Left>
              <Body>
                <Text>Setya</Text>
                <Text note numberOfLines={1}><Icon name='redo' style={{color:'green'}}/>&nbsp;&nbsp;Sekarang 20.00</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name='call' style={{color:"#075354"}}/>
                </Button>
              </Right>
            </ListItem>
          </List>
           <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQgBiw1md6hKE_Yi7OKDwqnbnl74w4TII1zq40fGNcjYw1GFmN&s' }} style={{borderRadius: 50}}/>
              </Left>
              <Body>
                <Text>Claten</Text>
                <Text note numberOfLines={1}><Icon note name='undo' style={{color:'red'}}/>&nbsp;&nbsp;&nbsp;Kemarin 15.20</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name='videocam' style={{color:"#075354"}}/>
                </Button>
              </Right>
            </ListItem>
          </List>
                  <View style={{ flex: 1 }}>
          <Fab
            style={{ backgroundColor: '#51e302' }}
            position="bottomRight">
            <Icon name="call" />
          </Fab>
              </View>
          </Tab>
        </Tabs>

 
      </Container>
    );
  }
}