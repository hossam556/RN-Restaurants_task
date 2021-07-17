import React from 'react'
import {View , Text , StyleSheet , Image, ScrollView } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'
import profile from '../images/profile.png'
import Slider from '../components/Slider'
import Category from '../components/Category'
import {categories} from '../categoriesData'
import Restaurant from '../components/Restaurant'
import macSand from '../images/macSand.jpg'
import panera from '../images/panera.jpg'
import { Ionicons } from '@expo/vector-icons'; 


const MealsScreen = () => {
    return(
        <ScrollView style={styles.container}>
            <View >
                <Text style={styles.title}>Discover</Text>
                <Slider/>
                <Text style={styles.title2}>Categories</Text>
                <View style={styles.categoriesWrapper}>
                  {categories.map((item , index) =>
                  <View key={index} style={styles.category}>
                    <Category name={item.name} image={item.image}/>
                  </View> 
                  )}
                </View>
                <Text style={styles.title3}>Featured Restaurants</Text>
                <Restaurant image={macSand} name={"Macdonald's"}/>
                <Restaurant image={panera} name={"Panera bread"}/>
            </View> 
        </ScrollView>
    )
}


export const MealsOptions = navData => {
    return{
        headerTitle : '',
        headerLeft : () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
            title="Menu"
            iconName={Platform.OS === 'android' ? 'menu-outline' : 'menu-outline'}
            />
            <View style={styles.loaction}>
                <Ionicons name="location-outline" size={20} color="white" />
                <Text style={{color:'white'}}>Oxford Street</Text>
            </View>
        </HeaderButtons>
        ),
        headerRight : () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                title="notifi"
                iconName='notifications'
                />
                <Image
                  source={profile}
                />
            </HeaderButtons>
            )
    }
}

export default MealsScreen

const styles = StyleSheet.create({
    container :{
        backgroundColor: '#fff',
        flex: 1,
        paddingVertical:10  ,
        paddingHorizontal:15
    }, 
    title :{
        fontSize: 34 ,
        fontWeight: 'bold' ,
        color: '#474746',
        letterSpacing:1
    },
    slider : {
        borderRadius:10,
        overflow: 'hidden',
    },
    title2:{
        fontSize:24,
        fontWeight:"bold",
        marginTop:20,
        letterSpacing:1

    },
    title3:{
        fontSize:24,
        fontWeight:"bold",
        marginTop:20,
        letterSpacing:1
    },
    categoriesWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap'
    },
    category:{
        width:'22%'
    },
    loaction:{
        backgroundColor:'#d80073',
        borderRadius:20,
        flexDirection: 'row',
        alignItems:'center',
        paddingHorizontal:10,
        color: 'white',
    }

})
