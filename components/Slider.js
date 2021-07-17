import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
 
import { SliderBox } from "react-native-image-slider-box";
import offer1 from '../images/offer1.jpg'
import offer2 from '../images/offer2.jpg'
import offer3 from '../images/offer3.png'
import offer4 from '../images/offer4.jpg'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        offer4,
        offer2,
        offer3
      ]
    };
  }
 
  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          images={this.state.images}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
          resizeMethod={'resize'}
          resizeMode={'cover'}
          ImageComponentStyle={{borderRadius: 25, marginTop: 5, width:375, marginRight:30}}
          sliderBoxHeight={250}
          inactiveDotColor="#90A4AE"
          dotColor="orange"

        />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation:8
  }
});