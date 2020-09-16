import React, { useContext,useEffect} from 'react'
import {Text,View,Image,TouchableOpacity,ScrollView} from "react-native"
import {Context} from "../App"
import { useHistory } from "react-router-dom"
import Navbar from "./navbar"
function Index(){
    const main = useContext(Context)
    const [login,setlogin] = main.login
    const [currentuser,setcurrentuser] = main.currentuser
    const [games,setgames] = main.games
    const [url,seturl] = main.url
    const  history = useHistory()
    //from here***********
    async function ssample(){
        const res = await fetch(`${url}/allgames/`)
        const sss = await res.json()
        setgames(sss)
    }
    useEffect(()=>{
       ssample()
    },[])
    //to here delete after completion**********
    function checklogin(){
        if(login){
            history.push("/allgames")
        }
        else{
            history.push("/login")
        }
    }
    return(
        <View style={{backgroundColor:"#efefef",flex:1}}>
        <Navbar/>
        <ScrollView>
        <View>
        <TouchableOpacity onPress={checklogin}>
        <Image  style={{height:170}} source={{uri:"https://image.freepik.com/free-vector/let-s-play-neon-sign_104045-80.jpg"}}/>
        </TouchableOpacity>
        <Image style={{width:400,height:160,resizeMode:"cover"}} source={{uri:"https://images-static.nykaa.com/tr:w-1140,c-at_max/uploads/cc24d927-81a4-4258-b9ad-6ea5661e83be.jpg"}}/>
        <View style={{paddingHorizontal:10,marginTop:10}}>
        <Text style={{fontWeight:"700",fontSize:20,fontStyle:"italic",textAlign:"center",marginTop:6,marginBottom:18}}>TOP PRODUCTS</Text>
       <View style={{flexDirection:"row",justifyContent:"space-around",marginBottom:10}}>
        <View style={{flexDirection:"column",alignItems:"center"}}>
       <Image style={{width:70,height:80,borderRadius:50}} source={{uri:"https://images-static.nykaa.com/media/catalog/product/n/a/naughty-nude-11_new_2.jpg?tr=w-500,pr-true"}}/>
       <Text style={{fontWeight:"700"}}>Lipstick</Text>
       </View>
       <View style={{flexDirection:"column",alignItems:"center",marginBottom:13}}>
       <Image style={{width:70,height:80,borderRadius:50}} source={{uri:"https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/0/1/01_15_2.jpg"}}/>
       <Text style={{fontWeight:"700"}}>Eyeliner</Text>
       </View>
       <View style={{flexDirection:"column",alignItems:"center"}}>
       <Image style={{width:70,height:80,borderRadius:50}} source={{uri:"https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/m/i/mink-muffin---261_new.jpg"}}/>
       <Text style={{fontWeight:"700"}}>Nail Polish</Text>
       </View>
       </View>
       <View style={{flexDirection:"row",justifyContent:"space-around",marginBottom:10}}>
       <View style={{flexDirection:"column",alignItems:"center"}}>
      <Image style={{width:70,height:80,borderRadius:50}} source={{uri:"https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/s/c/screenshot_1_31_1.jpg"}}/>
      <Text style={{fontWeight:"700"}}>Lipbalm</Text>
      </View>
      <View style={{flexDirection:"column",alignItems:"center"}}>
      <Image style={{width:70,height:80,borderRadius:50}} source={{uri:"https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/1/7/17336_h_2.jpg"}}/>
      <Text style={{fontWeight:"700"}}>Soap</Text>
      </View>
      <View style={{flexDirection:"column",alignItems:"center"}}>
      <Image style={{width:70,height:80,borderRadius:50}} source={{uri:"https://images-static.nykaa.com/media/catalog/product/tr:w-276,h-276,cm-pad_resize/8/2/82294119_olay_regenerist_whip_day_cream_uv_spf_30_50_ml_1.jpg"}}/>
      <Text style={{fontWeight:"700"}}>Facecream</Text>
      </View>
      </View>
        </View>
        <Image  style={{width:390,height:110,marginTop:10,resizeMode:"cover"}} source={{uri:"https://images-static.nykaa.com/tr:w-1140,c-at_max/uploads/58277113-250c-4426-b8cf-1f89dc7da389.jpg"}}/>
        <View style={{paddingHorizontal:10,backgroundColor:"white",marginTop:10,marginBottom:20}}>
        <Text style={{fontWeight:"700",fontSize:20,fontStyle:"italic",textAlign:"center",marginVertical:12,borderBottomWidth:1,paddingBottom:10}}>TOP BRANDS</Text>
       <View style={{flexDirection:"row",justifyContent:"space-around",marginBottom:10}}>
        <View style={{flexDirection:"column",alignItems:"center"}}>
       <Image style={{width:100,height:50}} source={{uri:"https://adn-static2.nykaa.com/media/wysiwyg/lakme_mega_menu_header.png"}}/>
       </View>
       <View style={{flexDirection:"column",alignItems:"center"}}>
       <Image style={{width:100,height:50}} source={{uri:"https://adn-static2.nykaa.com/media/wysiwyg/2019/lorealparis.png"}}/>
       </View>
       <View style={{flexDirection:"column",alignItems:"center"}}>
       <Image style={{width:100,height:50}} source={{uri:"https://adn-static2.nykaa.com/media/wysiwyg/2019/Maybelline1211.png"}}/>
       </View>
       </View>
       <View style={{flexDirection:"row",justifyContent:"space-around",marginBottom:10}}>
       <View style={{flexDirection:"column",alignItems:"center"}}>
       <Image style={{width:90,height:50}} source={{uri:"https://adn-static2.nykaa.com/media/wysiwyg/2018/Brandslogo/LOTUS-HERBALS.png"}}/>
       </View>
       <View style={{flexDirection:"column",alignItems:"center"}}>
       <Image style={{width:100,height:50}} source={{uri:"https://adn-static2.nykaa.com/media/wysiwyg/2020/Olay_logos.png"}}/>
       </View>
       <View style={{flexDirection:"column",alignItems:"center"}}>
       <Image style={{width:100,height:50}} source={{uri:"https://adn-static2.nykaa.com/media/wysiwyg/2019/niveaa.png"}}/>
       </View>
      </View>
        </View>
        </View>
        </ScrollView>
        </View>
    )
}

export default Index