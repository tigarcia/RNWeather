import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ScrollView,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

export default class WeatherMock extends Component {
  render() {
    const icons = this.props.weekForecast.map((i, id) => (
      <View key={id} style={{flexDirection: 'row', marginTop: 4, justifyContent: 'space-between', width: "90%"}}>
        <View style={{width: "30%"}}>
          <Text style={[styles.textColor]}>{i.day}</Text>
        </View>
        <Icon name={i.icon} color={i.color} size={27} />
        <Text style={[styles.textColor]}>{i.high} {i.low}</Text>
      </View>
      )
    );

    const hourly = this.props.hourlyForecast.map((hour, id) => (
      <View key={id} style={{flexDirection: 'column',
                             justifyContent: 'space-between',
                             alignItems: 'center',
                             margin: 5,
                             width: 45,
                             height: 10}}>
        <Text style={[styles.textColor]}>{hour.textTop}</Text>
        <Icon name={hour.icon} color={hour.color} size={25} />
        <Text style={[styles.textColor]}>{hour.textBottom}</Text>
      </View>
      )
    );

    return (
      <Image style={styles.image} source={require('../images/sunset-background.jpg')}>
        <LinearGradient colors={['rgba(90,0,128,0)', 'rgba(90,0,128,1)']} style={{flex:1}}>
          <View style={styles.transparentBackground}>
            <View style={styles.tempHeading} >
              <Text style={[styles.textColor, {fontSize: 40, fontWeight: '200'}]}>San Francisco</Text>
              <Text style={[styles.textColor, {fontSize: 15, fontWeight: '200'}]}>Mostly Cloudy</Text>
              <Text style={[styles.textColor, {fontSize: 70, fontWeight: '100'}]}>55°</Text>
            </View>
            <View style={styles.tempDetails} >
              <View style={styles.todayDetails}>
                <Text style={[styles.textColor]}>Tuesday Today</Text>
                <Text style={[styles.textColor]}>58 48</Text>
              </View>
              <View style={{width:"100%", height: 75, justifyContent: "center" }}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                {hourly}
              </ScrollView>
              </View>
              <View>
                {icons}
              </View>
            </View>
          </View>
        </LinearGradient>
      </Image>
    );
  }
}
WeatherMock.defaultProps = {weekForecast: [
    {day: "Wednesday", icon: 'ios-sunny', color: 'yellow', high: '63', low: '50'},
    {day: "Thursday ",  icon: 'ios-sunny', color: 'yellow', high: '63', low: '50'},
    {day: "Friday   ",  icon: 'ios-sunny', color: 'yellow', high: '63', low: '50'},
    {day: "Saturday ",  icon: 'ios-sunny', color: 'yellow', high: '63', low: '50'},
    {day: "Sunday   ",  icon: 'ios-sunny', color: 'yellow', high: '63', low: '50'},
    {day: "Monday   ",  icon: 'ios-sunny', color: 'yellow', high: '63', low: '50'},
    {day: "Tuesday  ",  icon: 'ios-sunny', color: 'yellow', high: '63', low: '50'},
  ],
  hourlyForecast: [
    {textTop: "Now", icon: 'ios-sunny', textBottom: '80', color: 'yellow'},
    {textTop: "11AM", icon: 'ios-sunny', textBottom: '80', color: 'yellow'},
    {textTop: "12PM", icon: 'ios-sunny', textBottom: '80', color: 'yellow'},
    {textTop: "1PM", icon: 'ios-sunny', textBottom: '80', color: 'yellow'},
    {textTop: "2PM", icon: 'ios-sunny', textBottom: '80', color: 'yellow'},
    {textTop: "3PM", icon: 'ios-sunny', textBottom: '80', color: 'yellow'},
    {textTop: "4PM", icon: 'ios-sunny', textBottom: '80', color: 'yellow'},
    {textTop: "5PM", icon: 'ios-sunny', textBottom: '80', color: 'yellow'},
    {textTop: "6PM", icon: 'ios-sunny', textBottom: '80', color: 'yellow'},
    {textTop: "7PM", icon: 'ios-sunny', textBottom: '80', color: 'yellow'},
    {textTop: "8PM", icon: 'ios-sunny', textBottom: '80', color: 'yellow'}
  ]

};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: 'stretch',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  transparentBackground: {
    width: "100%",
    height: "100%",
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  textColor: {
    color: 'white'
  },
  tempHeading: {
    flex: .45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempDetails: {
    flex: 0.55,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  todayDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "90%",
  },
  horizontalScroll: {
    flex: 1,
    width: "100%",
    paddingLeft: 5,
    paddingRight: 5,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "white"
  }
});
