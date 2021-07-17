import React from 'react'
import {View , Text , StyleSheet , Image, ImageBackground} from 'react-native'
import macCover from '../images/macCover.png'
import macSand from '../images/macSand.jpg'
import mac from '../images/mac.png'
import { FontAwesome } from '@expo/vector-icons'; 

const Category = props => {
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
               <ImageBackground source={props.image} style={styles.image}  resizeMode='cover' />
            </View>
            <View style={styles.DetailContainer}>
            <Image source={mac} style={styles.icon}/>

                <View style={styles.details}>
                    <Text style={{fontWeight:'bold', fontSize:15}}>{props.name}</Text>
                    <Text style={{fontWeight:'500'}}>Middle eastern, Halal</Text>
                    <Text>Delivery $12</Text>
                </View>
                <View style={styles.details2}>
                    <View>  
                           <Text><FontAwesome name="star" size={18} color="#e9d023" /><Text style={{color:'#e9d023'}}> (5.0) </Text> <Text style={{color:'green' , fontWeight:'bold'}}>Open</Text> </Text>
                    </View>
                    <Text>Avg. $20 / person</Text>
                    <Text>9220.1 km</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
     container:{
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 20,
        height: 300,
        width: '100%',
        backgroundColor: '#f5f5f5',
        marginVertical:20,
        overflow: 'hidden'
     },
     name : {
         fontSize:13 ,
         textAlign:'center'
     },
     imageContainer:{
        height: '60%',
        borderRadius: 30, 
        position: 'relative',
        overflow: 'hidden'
     },
     image:{
        width:'100%',
        borderRadius: 20,
        height: '100%',
     },
     DetailContainer:{
         flexDirection:'row',
         justifyContent:'space-between',
         paddingHorizontal:30,
         height: "40%",
         paddingVertical:20,
         fontSize:13,
         position: 'relative'
     },
     details:{
         justifyContent:'space-between',
     },
     details2:{
        justifyContent:'space-between',
        alignItems:'flex-end'

    },
    icon:{
        position: 'absolute',
        zIndex:10 ,
        top: -25,
        left: 25,
        borderRadius: 8
    }
})

export default Category