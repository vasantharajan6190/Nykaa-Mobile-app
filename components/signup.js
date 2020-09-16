import React, { useContext,useEffect, useState} from 'react'
import {Text,View,TextInput, Button, TouchableOpacity,ScrollView} from "react-native"
import {Context} from "../App"
import { useHistory } from "react-router-dom"
import axios from "axios"
import { LinearGradient } from 'expo-linear-gradient';
import Navbar from "./navbar"
function Signup(){
    const main = useContext(Context)
    const history = useHistory()
    const [login,setlogin] = main.login
    const [currentuser,setcurrentuser] = main.currentuser
    const [games,setgames] = main.games
    const [url,seturl] = main.url
    const [disable,setdisable] = useState(true)
    const [user,setuser] = useState(false)
    const [state,setstate] = useState({
        name:"",
        password:"",
        mobile:"",
        email:""
    })
    useEffect(()=>{
        if(state.name.length>0 && state.password.length>0 && state.mobile.length===10 && state.email.length>12){
            setdisable(false)
        }
        else{
            setdisable(true)
        }
    },[state])
    function onchange(name,date){
      setstate({...state,[name]:date})
    }
    async function onpress(){
        const response = await fetch(`${url}/signupplayer/`,{
         method:"POST",
         headers:{"Content-Type":"application/json"},
         body:JSON.stringify(state)   
        })
    const s = await response.json()
    if(s==="User"){
      setuser(true
)    }
    else{
        setuser(false)
        let fromback = {
            pk:s[0].pk,
            ...s[0].fields
        }
        setcurrentuser(fromback)
        setcurrentuser(state)
        setlogin(true)
        history.push("/index")
    }
    }
    return(
        <View style={{flex:1,backgroundColor:"#170926"}}>
        <Navbar/>
        {user?
            <Text style={{textAlign:"center",backgroundColor:"coral",paddingVertical:6,fontWeight:"700",fontSize:17}}>Already User Exists...</Text>
    :null}
    <ScrollView>
        <Text style={{textAlign:"center",marginTop:90,color:"white",fontSize:25,fontWeight:"700",fontStyle:"italic"}}>SIGNUP</Text>

        <View style={{flexDirection:"row",justifyContent:"center"}}>
        <View style={{width:250,padding:25,elevation:5,backgroundColor:"white",marginTop:15}}>
        <TextInput
        value={state.name}
        placeholder="Name"
        onChange={e=>onchange("name",e.nativeEvent.text)}
        style={{borderBottomWidth:1,
            padding:5,
            marginVertical:18,
        borderColor:"gray"}}
        />
        <TextInput
        value={state.password}
        placeholder="Password"
        secureTextEntry={true}
        onChange={e=>onchange("password",e.nativeEvent.text)}
        style={{borderBottomWidth:1,
            padding:5,
            marginVertical:16,
        borderColor:"gray"}}
        />
        <TextInput
        value={state.mobile}
        placeholder="Mobile"
        onChange={e=>onchange("mobile",e.nativeEvent.text)}
        style={{borderBottomWidth:1,
            padding:5,
            marginVertical:16,
        borderColor:"gray"}}
        />
        <TextInput
        value={state.email}
        placeholder="Email"
        onChange={e=>onchange("email",e.nativeEvent.text)}
        style={{borderBottomWidth:1,
            padding:5,
            marginVertical:16,
        borderColor:"gray"}}
        />
        <View style={{marginVertical:10}}><Button onPress={onpress} disabled={disable?true:false} title="signup" /></View>
       <TouchableOpacity>
       <Text onPress={()=>history.push("/login")} style={{textAlign:"center",fontWeight:"700"}}>Already a User Login?</Text>
       </TouchableOpacity>
        </View>
        </View>
        </ScrollView>
        </View>
    )
}

export default Signup