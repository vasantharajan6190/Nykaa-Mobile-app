import React, { useContext,useEffect, useState} from 'react'
import {Text,TouchableOpacity,View,Image,Button} from "react-native"
import {Context} from "../App"
import Navbar from "./navbar"
import { useHistory } from 'react-router';
function Endgame(){
    const main = useContext(Context)
    const history = useHistory()
    const [login,setlogin] = main.login
    const [url,seturl] = main.url
    const [clickedgame,setclickedgame] = main.clickedgame
    const [correct,setcorrect] = main.correct
    const [currentuser,setcurrentuser] = main.currentuser
    async function onpress(){
let  state = {}
    state["points"]=correct*clickedgame.points,
    state["gameid"]=clickedgame.pk,
    state["userid"]=currentuser.pk
    const response = await fetch(`${url}/addpoints/`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(state)   
       })
   const s = await response.json()
   if(s)
   history.push("/allgames")
    }
    return(
        <View style={{flex:1,backgroundColor:"#170926"}}>
        <Navbar/>
        <View style={{justifyContent:"center",marginTop:150,backgroundColor:"azure",width:300,marginLeft:50,paddingBottom:20,borderRadius:10}}>
        <View style={{alignItems:"center"}}>
        <Image style={{width:290,height:190}} source={require("../assets/confetti-3-x.png")}/>
        <Text style={{fontSize:27,fontWeight:"700",marginTop:-90,color:"#f1309b"}}>YOUR POINTS</Text>
        <Text style={{fontSize:24,fontWeight:"700",fontStyle:"italic",paddingTop:20}}>{(correct+1)*clickedgame.points}</Text>
        <Text style={{fontSize:22,fontWeight:"700",fontStyle:"italic",paddingTop:20}}>WELL PLAYED!!!</Text>
        </View>
        <TouchableOpacity onPress={onpress}><Text style={{textAlign:"center",fontWeight:"700",paddingTop:30,color:"#f1309b",fontSize:19}}>BACK</Text></TouchableOpacity>
      </View>
        </View>
    )
}

export default Endgame