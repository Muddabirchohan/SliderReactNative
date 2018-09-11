import React from 'react';
import { Text, View, StyleSheet, Image, FlatList, Button, ScrollView ,DrawerLayoutAndroid} from 'react-native';
import { TabNavigator, createDrawerNavigator } from 'react-navigation';
import { Avatar, Card, Header, SocialIcon } from 'react-native-elements';


class HomeScreen extends React.Component {
  render() {
    return (

      <ScrollView>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Home', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />

        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 50 }}>
          {/* <Image source={require('./Images/img.gif')} /> */}
          <Avatar
            small
            rounded
            source={require('./Images/img.gif')}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
          <Text> Muddabir Chohan </Text>
        </View>

        <View style={styles.card}>
          <Card >
            <Image
              height='200'
              width='400'
              source={require('./Images/img.gif')} />
            <Text> login as Muddabir Chohan ? </Text>
            <Button title="Login"/> 
          </Card>
         
        </View>


         <Avatar
            small
            rounded
            source={require('./Images/img.jpeg')}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
          <Text> Rashaad Chohan </Text>
        

        <View style={styles.card}>
          <Card >
            <Image
              source={require('./Images/ec5.jpg')} />
            <Text> login as Rashaad Chohan ? </Text>
            <Button title="Login"/> 
          </Card>
         
        </View>


        {/* <View style={{ flex: 1, marginTop: 100, flexDirection: 'row', marginLeft: 30 }}>

          <View>
            <Text style={{ fontSize: 20, color: 'black' }}> name: </Text>
            <Text style={{ fontSize: 20, color: 'black' }}> Age: </Text>
            <Text style={{ fontSize: 20, color: 'black' }}> Gender: </Text>
            <Text style={{ fontSize: 20, color: 'black' }}> Color: </Text>
          </View>

          <View>
            <Text style={{ fontSize: 20, color: 'black' }}> muddabir Chohan </Text>
            <Text style={{ fontSize: 20, color: 'black' }}> 21 </Text>
            <Text style={{ fontSize: 20, color: 'black' }}> male </Text>
            <Text style={{ fontSize: 20, color: 'black' }}> dark </Text>
          </View>


        </View> */}


      </ScrollView>

    );
  }
}

class SettingsScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      Images: [
        {
          type: "Party",
          image: require("./Images/ec3.jpg")
        },
        {
          type: "Wedding",
          image: require("./Images/ec2.jpg")
        },
        {
          type: "Architecture",
          image: require("./Images/ec3.jpg")
        },
        {
          type: "Christening",
          image: require("./Images/ec4.jpg")
        },
        {
          type: "work",
          image: require("./Images/ec5.jpg")
        }

      ]
    }
  }

  render() {
    return (
      <ScrollView>

        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'NEWS FEED', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
 
 <Text> Discount Offers </Text>

        <View style={{ flex: 1,alignContent: 'center',alignItems: 'center' }}>


          {this.state.Images.map( obj => {
            return (
              <Card title={obj.type}>
                <View style={styles.card2}>
                  <Image
                    source={obj.image}
                  />
                </View>
              </Card>
            )
          })}


        </View>

      </ScrollView>
    );
  }
}

class Details extends React.Component {
  render() {

    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
      </View>
    );

    return (
      <ScrollView>

        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'SETTINGS', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />

    <DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => navigationView}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
      </View>
    </DrawerLayoutAndroid>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        </View>
      </ScrollView>
    )
  }

}



export default TabNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen },
  details: { screen: Details },

});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  card: {
    width: 200,
    height: 250,
    marginLeft: 100
  },
  card2: {
    width: 150,
    height: 150,
    marginLeft: 100
  }
})