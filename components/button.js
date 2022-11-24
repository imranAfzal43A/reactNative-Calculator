import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styling';

class Butt extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <TouchableOpacity style={styles.button} onPress={()=>this.props.onClick()}>
                <Text style={styles.butText}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}

export default Butt;