import React, { useContext,useEffect} from 'react'
import { useHistory } from "react-router-dom"
import {Text,View,StyleSheet,ImageBackground,Image} from "react-native"
import {Context} from "../App"
function Homepage(){
    const main = useContext(Context)
    const [login,setlogin] = main.login
     const history = useHistory()
  setTimeout(function(){ 
      history.push("/index")
   }, 5000)
    return(
        <View style={{flex:1,backgroundColor:"#ff69aa"}}>
        <View style={styles.center}>
        <Image style={{width:270,height:190}} source={require("../assets/nykaa-1200x600-removebg-preview.png")}/>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    center:{
      flex:1,
      justifyContent:"center",
      alignContent:"center",
      alignItems:"center"
  },
    tinyLogo: {
      width: 200,
      height: 100,
      marginTop:25,
    }
  });

export default Homepage