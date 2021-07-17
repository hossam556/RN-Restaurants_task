import React from 'react'
import {View , Text , StyleSheet , Image} from 'react-native'

const Category = props => {
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
               <Image source={props.image} style={styles.image} resizeMode='contain' />
            </View>
            <Text style={styles.name}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
     container:{
         justifyContent:'center'
     },
     name : {
         fontSize:13 ,
         textAlign:'center'
     },
     imageContainer:{
        
     },
     image:{
         width: 80
     }
})

export default Category