import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Butt from "./button";
import styles from "./styling";

class CalcScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          display:"",
          numerator:"",
          denominator:"",
          operator:"",
          switchFractionSection:false
          }
      }
    
      clear(){
        this.setState((state, props) => ({ display:""}));  
      }
    
      evaluate(x,y,operator){
        if(operator == "+" ){
          this.setState((state, props) => ({ display: parseInt(x) + parseInt(y) }))
          this.setState((state, props) => ({ switchFractionSection: false }))
        }else if(operator == "-"){
          this.setState((state, props) => ({ display: parseInt(x) - parseInt(y) }))
          this.setState((state, props) => ({ switchFractionSection: false }))        
        }else if(operator == "x"){
          this.setState((state, props) => ({ display: parseInt(x) * parseInt(y) }))
          this.setState((state, props) => ({ switchFractionSection: false }))         
        }else {
          this.setState((state, props) => ({ display: parseInt(x) / parseInt(y) }))
          this.setState((state, props) => ({ switchFractionSection: false }))         
        }
          
        //Clear state for next operation
        this.setState((prevState) =>({denominator:""}))
        this.setState((prevState) =>({numerator:""}))
      }
    
      numberHandler(x){
        //show the number clicked on the display. IF this is the first number saved it is save as the denominator If this is the second number enter, it is saved as the numerator.  
        this.setState((state, props) => ({ display: state.display + x }))    
        if(this.state.switchFractionSection ==true){
          this.setState((state, props) =>({denominator:state.denominator + x}))
        }else{
          this.setState((state, props) => ({numerator:state.numerator + x}))
        }
      }
    
      operatorHandler(x){
        
        //If display already have a number and the user press a operator button, then the current display number is save as the numerator
        if(this.state.numerator == "" && this.state.switchFractionSection == false){
            this.setState((state, props) => ({numerator:this.state.display}))
        }
          
        this.setState((state, props)=>({display:state.display + x}))
        this.setState((state, props) => ({ operator: x }))
        this.setState((state, props) => ({switchFractionSection:true }))
      }
  render() {
    return (
      <View>
        <View style={styles.clScreen}>
          <View>
            <Text style={styles.butText}>{this.state.display}</Text>
          </View>
          <View style={{flexDirection:'row',}}>
            <TouchableOpacity
              onPress={() => this.clear()}
              style={styles.crosbtn}
            >
              <Text style={styles.crsT}>x</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginVertical: 6 }} />
        <View style={styles.row}>
          <Butt
            title="1"
            onClick={() => {
              this.numberHandler("1");
            }}
          />
          <Butt
            title="2"
            onClick={() => {
              this.numberHandler("2");
            }}
          />
          <Butt
            title="3"
            onClick={() => {
              this.numberHandler("3");
            }}
          />
          <Butt
            title="C"
            onClick={() => {
              this.clear();
            }}
          />
        </View>
        <View style={styles.row}>
          <Butt
            title="4"
            onClick={() => {
              this.numberHandler("4");
            }}
          />
          <Butt
            title="5"
            onClick={() => {
              this.numberHandler("5");
            }}
          />
          <Butt
            title="6"
            onClick={() => {
              this.numberHandler("6");
            }}
          />
          <Butt
            title="+"
            onClick={() => {
              this.operatorHandler("+");
            }}
          />
        </View>
        <View style={styles.row}>
          <Butt
            title="7"
            onClick={() => {
              this.numberHandler("7");
            }}
          />
          <Butt
            title="8"
            onClick={() => {
              this.numberHandler("8");
            }}
          />
          <Butt
            title="9"
            onClick={() => {
              this.numberHandler("9");
            }}
          />
          <Butt
            title="-"
            onClick={() => {
              this.operatorHandler("-");
            }}
          />
        </View>
        <View style={styles.row}>
          <Butt
            title="0"
            onClick={() => {
              this.numberHandler("0");
            }}
          />
          <Butt
            title="="
            onClick={() => {
              this.evaluate(this.state.numerator, this.state.denominator, this.state.operator);
            }}
          />
          <Butt
            title="/"
            onClick={() => {
              this.operatorHandler("/");
            }}
          />
          <Butt
            title="x"
            onClick={() => {
              this.operatorHandler("x");
            }}
          />
        </View>
      </View>
    );
  }
}
export default CalcScreen;
