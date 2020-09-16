import React,{useState,useContext} from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Link } from "react-router-native";
import { useHistory } from "react-router-dom"
import {Context} from "../App"
function Navbar(){
    const main = useContext(Context)
    const history = useHistory()
    const [login,setlogin] = main.login
    return(
      <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:10,paddingHorizontal:2,backgroundColor:"white"}}>
      <Link to="/index"><Image style={styles.imageedit} source={{uri:"https://thoughtoverdesign.com/wp-content/uploads/2017/12/nykaa_section4.gif"}} /></Link>
      {
       login?
       <Text onPress={()=> {
        setlogin(false)   
        history.push("/index")}} style={{paddingVertical:8,paddingHorizontal:12,fontWeight:"bold",fontSize:17}}>
       LOGOUT
       </Text>
       :
       <Text onPress={()=> history.push("/login")} style={{paddingVertical:8,paddingHorizontal:12,fontWeight:"bold",fontSize:17}}>
       LOGIN
       </Text>
      }
     </View>
    )
}
const styles = StyleSheet.create({
  imageedit:{
  width:110,
  height:40,
  
  },
})

export default Navbar