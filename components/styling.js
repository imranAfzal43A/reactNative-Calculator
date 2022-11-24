import { Dimensions, StyleSheet } from "react-native";

const scr=Dimensions.get('window')
const btw=scr.width/4
const styles=StyleSheet.create(
    {
        button:{
            flex:1,
            backgroundColor:'orange',
            width:btw,
            height:Math.floor(btw-10),
            borderRadius:Math.floor(btw),
            margin:10,
            alignItems:"center",
            justifyContent:"center",

        },
        butText:{
            fontSize:24,
            fontWeight:'bold'
        },
        row:{
            flexDirection:'row'
        },
        clScreen:{
            backgroundColor:'white',
            borderRadius:10,
            borderColor:'red',
            borderWidth:2,
            width:scr.width/1.2,
            height:scr.height/8,
        },
        crosbtn:{
            width:30,height:27,
            backgroundColor:'black',
            alignItems:"center",
            borderRadius:20,
            marginLeft:260,
        },
        crsT:{
            color:'white',
            fontSize:20,
            fontWeight:'bold'
        }
    }
)
export default styles;