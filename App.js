import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';



let timer = null;
let ss = 0
let mm = 0
let hh = 0

export default function App() {
  const [number, setNumber] = useState(0);
  const [button, setButton] = useState('Iniciar');
  const [last, setLast] = useState(null)

  function go(){
    if(timer !== null){
      clearInterval(timer)
      timer = null
      setButton('Iniciar')
    }else{
      timer = setInterval(()=>{
        ss++

        if(ss == 60){
          ss = 0
          mm++
        }

        if(mm == 60){
          mm = 0
          hh++
        }

        let format = (hh < 10 ? '0' + hh : hh) + ':'+ (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss)

        setNumber(format)
      }, 1000)

      setButton('Pausar')
    }
  }

  function clear(){
    if(timer !== null){
    
      clearInterval(timer)
      timer = null


    }

    setLast(number)
    setNumber(0);
    ss = 0;
    mm = 0;
    hh = 0;
    setButton('Iniciar')
  }








  return (
    <View style={styles.container}>
      <Image source={require('./src/crono.png')}/>
      <Text style={styles.timer}> {number} </Text>

      <View style={styles.btnArea}>
      <TouchableOpacity style={styles.btn} onPress={go}>
        <Text style={styles.btnText}>
          {button}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={clear}>
        <Text style={styles.btnText}>
          Marcar
        </Text>
      </TouchableOpacity>
      
    </View>
    <View style={styles.lastArea}>
    <Text style={styles.textRun}> {last ? 'Ultimo tempo: ' + last : '  '} </Text>
    </View>
    </View>

    

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aaef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer:{
    marginTop: -150,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff'
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 195,
    height: 40,
  },
  btn:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 10
    
  },
  btnText:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00aaef'
  },
  lastArea:{
    marginTop: 40
  },
  textRun:{
    fontSize:25,
    fontStyle:'italic',
    color: '#fff'
  }
});


