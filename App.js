import React,{useState,createContext,useEffect} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { NativeRouter, Route,Link } from "react-router-native";
import Index from "./components/index"
import Homepage from "./components/homepage"
import Game from "./components/game"
import Endgame from "./components/endgame"
import Signup from "./components/signup"
import Login from "./components/login"
import Allgames from "./components/allgames" 
export const Context = createContext()
export const Contextvariables = props =>{
  const [login,setlogin] = useState(false)
  const [currentuser,setcurrentuser] = useState()
  const [games,setgames] = useState([])
  const [players,setplayers] = useState([])
  const [clickedgame,setclickedgame] = useState({})
  const [correct,setcorrect] = useState(0)
  const [url,seturl] = useState("http://73234217f699.ngrok.io")
  return(
    <Context.Provider value={{
      login : [login,setlogin],
      currentuser:[currentuser,setcurrentuser],
      games:[games,setgames],
      players:[players,setplayers],
      clickedgame:[clickedgame,setclickedgame],
      url:[url,seturl],
      correct:[correct,setcorrect]
    }}>
    {props.children}
    </Context.Provider>
  )
}
export default function App() {
  return (
    <NativeRouter>
    <Contextvariables>
   <View style={{marginTop:22,flex:1}}>
    <Route path="/" exact component={Homepage} />
    <Route path="/allgames" exact component={Allgames}/>
    <Route path="/game" exact component={Game}/>
    <Route path="/index" exact component={Index}/>
    <Route path="/login" exact component={Login}/>
    <Route path="/signup" exact component={Signup}/>
    <Route path="/endgame" exact component={Endgame}/>
    </View>
    </Contextvariables>
    </NativeRouter>
  );
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
