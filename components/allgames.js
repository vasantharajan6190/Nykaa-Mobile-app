import React, { useContext,useEffect, useState} from 'react'
import {Text,View,Image, TouchableOpacity,StyleSheet, Button,ScrollView,Animated} from "react-native"
import {Context} from "../App"
import Navbar from "./navbar"
import { useHistory } from 'react-router';
import CountDown from 'react-native-countdown-component';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
function Allgames(){
    const main = useContext(Context)
    const [login,setlogin] = main.login
    const [games,setgames] = main.games
    const history = useHistory()
    const [buttonclicked,setbuttonclicked] = useState(false)
    const [clickedgame,setclickedgame] = main.clickedgame
    const [correct,setcorrect] = main.correct
    useEffect(()=>{
    setcorrect(0)
    },[])
    return(
        <View style={{flex:1,backgroundColor:"#170926"}}>
        <Navbar/>
        {
            buttonclicked?
            <View style={{justifyContent:"center",marginTop:170,backgroundColor:"azure",width:300,marginLeft:50,paddingVertical:20,borderRadius:10}}>
            <View>
            <Text style={{textAlign:"center",paddingBottom:20,fontWeight:"700"}}>STARTS IN</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"center"}}>
            <CountdownCircleTimer
              isPlaying
              duration={5}
              colors='#f1309b'
              onComplete={()=>history.push("/game")}
              >
              {({ remainingTime, animatedColor }) => (
                  <View>
               <Text style={{fontSize:19,textAlign:"center",fontWeight:"700",color:"#f1309b"}}>{remainingTime}</Text>
               <Text style={{fontSize:15,fontWeight:"700",color:"#f1309b"}}>Seconds</Text>
               </View>
              )}
            </CountdownCircleTimer>
            </View>
            <Text style={{textAlign:"center",fontWeight:"700",paddingTop:30,color:"#f1309b",fontSize:16}}>{clickedgame.name}</Text>

          </View>
            :
            <ScrollView>
            <View>
            <Image style={{width:390,height:200}} source={require("../assets/confetti-3-x.png")}/>
            <View style={{position: 'absolute',left:100,top:90}}><Image style={{width:190,height:100}} source={require("../assets/beautyPuzzle.gif")}/></View>
            <Text style={{textAlign:"center",color:"white",fontSize:15,fontWeight:"bold",marginTop:10}}>Think you know it all?</Text>
            <Text style={{textAlign:"center",color:"white",fontSize:15,fontWeight:"bold",marginBottom:10}}>Test Your Skills Now!</Text>
            <View style={{marginHorizontal:15,marginVertical:16,paddingVertical:20,backgroundColor:"white"}}>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <Text style={{color:"black",fontSize:18,marginTop:20,marginLeft:10,fontWeight:"700"}}>Live Games</Text>
            <Image style={{width:70,height:70,marginRight:20,marginTop:-20}} source={require("../assets/gamejoy.png")} />
            </View>
            <View>
            {games.map((e,index)=>{
                let expired = false
                console.log("*******")
                let date = (new Date(e.enddate))
                let date1 = (new Date(Date.now()))
    var dif = date.getTime() - date1.getTime();
    var Seconds_from_T1_to_T2 = dif / 1000;
    var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);
    if(dif<0){
    return
    }
                return(
                <View key={index} style={{paddingHorizontal:10,marginVertical:20,elevation:5}}>
                <View style={{backgroundColor:"gold",paddingVertical:10}}>
                <CountDown
        until={Seconds_Between_Dates}
        digitStyle={{backgroundColor: '#FFF'}}
        digitTxtStyle={{color: '#1CC625'}}
        onFinish={() => alert('finished')}
        onPress={() => alert('hello')}
        size={20}
      />
                 <Image style={{borderTopRightRadius:10,borderTopLeftRadius:10,height:250,resizeMode:"stretch"}} source={{uri:e.image}}/>
                 </View>
                <View style={{marginTop:12}}><Button onPress={()=>{
                    setclickedgame(e)
                    setbuttonclicked(true)}} title="Play now" color="#f1309b"/></View>
                </View>
                )
            })
        }
            </View>
            </View>
            </View>
            </ScrollView>
        }
       
        </View>
    )
}
export default Allgames