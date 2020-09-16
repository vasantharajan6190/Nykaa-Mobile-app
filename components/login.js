import React, { useContext,useEffect, useState} from 'react'
import {Text,View,TextInput, Button, TouchableOpacity} from "react-native"
import {Context} from "../App"
import { useHistory } from "react-router-dom"
import Navbar from "./navbar"
function Login(){
    const main = useContext(Context)
    const history = useHistory()
    const [login,setlogin] = main.login
    const [currentuser,setcurrentuser] = main.currentuser
    const [url,seturl] = main.url
    const [disable,setdisable] = useState(true)
    const [user,setuser] = useState(false)
    const [password,setpassword] = useState(false)
    const [state,setstate] = useState({
        email:"",
        password:""
    })
    useEffect(()=>{
        if(state.email.length>1 && state.password.length>0){
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
        console.log("onpress")
        const response = await fetch(`${url}/loginplayer/`,{
         method:"POST",
         headers:{"Content-Type":"application/json"},
         body:JSON.stringify(state)   
        })
    const s = await response.json()
    if(s==="User"){
      setuser(true)
      setpassword(false)
    }
    else if(s==="Password"){
        setuser(false)
        setpassword(true)
    }
    else{
        setuser(false)
        setpassword(false)
        let fromback = {
            pk:s[0].pk,
            ...s[0].fields
        }
        setcurrentuser(fromback)
        setlogin(true)
        history.push("/index")   
}
    }
    return(
        <View style={{flex:1,backgroundColor:"#170926"}}>
        <Navbar/>
        {user?
            <Text style={{textAlign:"center",backgroundColor:"coral",paddingVertical:6,fontWeight:"700",fontSize:17}}>User doesn't exist</Text>
    :null}
    {password?
        <Text style={{textAlign:"center",backgroundColor:"coral",paddingVertical:6,fontWeight:"700",fontSize:17}}>Password incorrect</Text>
:null}
        <View style={{flexDirection:"row",justifyContent:"center"}}>
        <View style={{width:250,padding:25,elevation:5,backgroundColor:"white",marginTop:170}}>
        <Text style={{textAlign:"center",marginBottom:15,fontSize:20,fontWeight:"700",fontStyle:"italic"}}>LOGIN</Text>
        <TextInput
        value={state.email}
        placeholder="Email"
        onChange={e=>onchange("email",e.nativeEvent.text)}
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
        <View style={{marginVertical:10}}><Button onPress={onpress} disabled={disable?true:false} title="Login" /></View>
       <TouchableOpacity>
       <Text onPress={()=>history.push("/signup")} style={{textAlign:"center",fontWeight:"700"}}>New User Signup?</Text>
       </TouchableOpacity>
        </View>
        </View>
        </View>
    )
}

export default Login