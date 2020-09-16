import React, { useContext,useEffect, useState} from 'react'
import {Text,TouchableOpacity,View,Image,Button} from "react-native"
import {Context} from "../App"
import Navbar from "./navbar"
import { AntDesign } from '@expo/vector-icons'; 
import CountDown from 'react-native-countdown-component';
import { useHistory } from 'react-router';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

function Game(){
    const main = useContext(Context)
    const history = useHistory()
    const [login,setlogin] = main.login
    const [url,seturl] = main.url
    const [clickedgame,setclickedgame] = main.clickedgame
    const [topbox,settopbox] = useState([])
    const [downbox,setdownbox] = useState([])
    const [removed,setremoved] = useState([])
    const  [interval,setinterval] = useState(15)
    const [topboxindex,settopboxindex] = useState(0)
    const [total,settotal] = useState(0)
    const [questionindex,setquestionindex] = useState(1)
    const [card,setcard] = useState(false) 
    const [answer,setanswer] = useState()
    const [correct,setcorrect] = main.correct
    const [k,setk] = useState(0)
    let h=0
    function some(){
        settopbox([])
        setdownbox([])
    for(var i =0;i<clickedgame.answers[h].answer.length;i++){
        settopbox(prev=>[...prev,""])
        let some = clickedgame.answers[h].answer[i]
        setdownbox(prev=>[...prev,some])
    }
}
async function checkanswer(){
    let state={}
    settopbox(topbox.map(e=>e))
    state["answer"] = topbox.join("")
    const response = await fetch(`${url}/checkanswer/${clickedgame.questions[h].pk}`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(state)   
       })
   const s = await response.json()
   if(s==="correct"){
    setanswer(true)
    setcorrect(prev=>prev+1)
   }
   else{
setanswer(false)
   }
}
let ss 
function calll(){
    clearInterval(ss)
    setinterval(15)
}
useEffect(()=>{
 setinterval(interval)
},[interval])
// useEffect(()=>{
//     // setTimeout(()=>{
//     //     setk(prev=>prev+1)
//     //     if(h!==0){
//     //         h+=1
//     //       }
//     //       setquestionindex(prev=>prev+1)
//     //       if(questionindex>=clickedgame.questionscount)
//     //       {
//     //           checkanswer()
//     //               history.push("/endgame")
              
//     //       return console.log("gamefinished")
//     //       }
//     //       else{
//     //          checkanswer()
//     //           setcard(true)
//     //     console.log("Move to next question")
//     //     if(h===0){
//     //         h+=1
//     //     }
//     //     settopboxindex(0)
//     //     settotal(0)
//     //     setremoved([])
//     //     some()
//     // }
//     //     },15000)
// },[interval])

async function downboxclick(e,index){
    if(e){
        removed.push(index)
        setdownbox(downbox.map((a,i)=>{
          if(i===index)
          return ""
          else
          return a
        }))
        settopbox(topbox.map((value,ind)=>{
            if(ind===topboxindex){
            return e
            }
            else
            return value
        }))
            settopboxindex(prev=>prev+1)
            settotal(prev=>prev+1)
        if((total+1)===topbox.length){
            topbox[topbox.length-1] = e
            if(h!==0){
              h+=1
            }
            setquestionindex(prev=>prev+1)
            if(questionindex>=clickedgame.questionscount)
            {
                checkanswer()
                    history.push("/endgame")
                
            return console.log("gamefinished")
            }
            else{
               checkanswer()
                setcard(true)
          console.log("Move to next question")
          if(h===0){
              h+=1
          }
          settopboxindex(0)
          settotal(0)
          setremoved([])
          some()
        }}
    }
}
function deleteprev(){
    if(removed.length>0){
    let todelete=topbox[topboxindex-1]
    let lastindex = removed.pop()
    settopbox(topbox.map((e,index)=>{
      if(index===topboxindex-1)
      return ""
      else
      return e
    }))
    setdownbox(downbox.map((s,ind)=>{
        if(ind===lastindex)
        return todelete
        else
        return s
    }))
    settopboxindex(prev=>prev-1)
    settotal(prev=>prev-1)
}
}
   
useEffect(()=>{
    some()
    settopboxindex(0)
    settotal(0)
},[])
    return(
        <View style={{flex:1,backgroundColor:"#170926"}}>
        <Navbar/>
        {
            card?
            <View style={{justifyContent:"center",marginTop:120,backgroundColor:"azure",width:300,marginLeft:50,paddingVertical:20,borderRadius:10}}>
            <View style={{flexDirection:"row",justifyContent:"center",alignContent:"center",alignItems:"center",marginVertical:20}}>
          {
              answer?
              <View>
              <Image style={{width:70,height:70}} source={require("../assets/correct.png")} />
              <Text style={{marginVertical:10,fontWeight:"700",textAlign:"center"}}>Correct</Text>
              </View>
              :
              <View>
              <Image style={{width:70,height:70}} source={require("../assets/wrong.png")} />
              <Text style={{marginVertical:10,fontWeight:"700",textAlign:"center"}}>Wrong</Text>
              </View>
            }
            </View>
            <View style={{flexDirection:"row",justifyContent:"center"}}>
            <CountdownCircleTimer
              isPlaying
              duration={3}
              colors='#f1309b'
              onComplete={()=>setcard(false)}
              >
              {({ remainingTime, animatedColor }) => (
                  <View>
               <Text style={{fontSize:19,textAlign:"center",fontWeight:"700",color:"#f1309b"}}>{remainingTime}</Text>
               <Text style={{fontSize:15,fontWeight:"700",color:"#f1309b"}}>Seconds</Text>
               </View>
              )}
            </CountdownCircleTimer>
            </View>
            <Text style={{textAlign:"center",fontWeight:"700",paddingTop:30,color:"#f1309b",fontSize:16}}>NEXT</Text>

          </View>
            :
            <View>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <View style={{flexDirection:"row"}}>
            <TouchableOpacity onPress={()=>history.push("/allgames")}><AntDesign name="arrowleft" style={{backgroundColor:"white",width:40,marginLeft:20,marginTop:15,padding:4,flexDirection:"row",borderRadius:50}} size={30} color="black"/></TouchableOpacity>
            <Text style={{color:"white",paddingTop:20,marginLeft:15,fontWeight:"700",fontSize:18}}>Question {questionindex} of {clickedgame.questionscount}</Text>
            </View>
            <View style={{marginRight:10,borderRadius:10,marginTop:10,}}>
            <CountDown
        until={15}
        size={18}
        onFinish={() => {
            if(h!==0){
                h+=1
              }
              setquestionindex(prev=>prev+1)
              if(questionindex>=clickedgame.questionscount)
              {
                  checkanswer()
                      history.push("/endgame")
              return console.log("gamefinished")
              }
              else{
                 checkanswer()
                  setcard(true)
            console.log("Move to next question")
            if(h===0){
                h+=1
            }
            settopboxindex(0)
            settotal(0)
            setremoved([])
            some()
          }
        }}
        digitStyle={{backgroundColor: 'gold'}}
        digitTxtStyle={{color: 'black'}}
        timeToShow={['S']}
      />
            </View>
            </View>
            <View style={{alignItems:"center",marginTop:20,marginBottom:10}}><Image style={{borderRadius:50,width:"200%",height:200,resizeMode:"contain"}} source={{uri:`${url}${clickedgame.questions[questionindex-1].question.slice(21)}`}} /></View>
            <View style={{flexWrap:"wrap",justifyContent:"center",flexDirection:"row",marginVertical:10,marginHorizontal:40}} >
            {
                topbox.map((e,index)=>{
                  return(
                      <View style={{marginLeft:10,marginVertical:10}} key={index}>
                      <Text  style={{width:40,paddingVertical:7,paddingHorizontal:12,borderWidth:2,borderColor:"#f1309b",backgroundColor:"azure",elevation:5,borderRadius:10,fontWeight:"bold",fontSize:17}}>{e.toUpperCase()}</Text>
                      </View> 
                    )
                })
            }
        </View>
        <View style={{backgroundColor:"white",marginTop:46}}>
            <View style={{flexWrap:"wrap",justifyContent:"center",flexDirection:"row",marginVertical:20,marginHorizontal:40}} >
            {
                downbox.map((e,index)=>{
                  return(
                      <TouchableOpacity onPress={()=>downboxclick(e,index)} style={{marginLeft:20,marginTop:7}} key={index}>
                    <Text  style={{width:40,paddingVertical:7,paddingHorizontal:12,backgroundColor:"azure",elevation:5,borderRadius:10,fontWeight:"bold",fontSize:17}}>{e.toUpperCase()}</Text>
                    </TouchableOpacity> 
                    )
                })
            }
        </View>
        <View style={{paddingHorizontal:30,paddingBottom:15,flexDirection:"row",justifyContent:"space-between"}}>
        <TouchableOpacity onPress={deleteprev} ><Text style={{color:"#f1309b",borderColor:"#f1309b",fontWeight:"700",paddingVertical:7,paddingHorizontal:29,borderWidth:2}}>DELETE</Text></TouchableOpacity>
        <TouchableOpacity><Text style={{backgroundColor:"#f1309b",color:"white",fontWeight:"700",borderColor:"#f1309b",paddingVertical:7,paddingHorizontal:29,borderWidth:2}}>SUBMIT</Text></TouchableOpacity>
        </View>
        </View>
            </View>
        }
      
        </View>
    )
}

export default Game