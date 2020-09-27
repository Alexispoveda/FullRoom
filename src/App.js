//React
import React,{useState, useEffect} from 'react';

//Estilos
import './App.css';

//Componentes
import Header from './Header'

//Material UI
import {Box, List, ListItem, ListItemText, ListItemAvatar,Avatar} from '@material-ui/core'

//Firebase
import firebase from './firebase'

const App = () => {

  const [LugaresState, setLugaresState] = useState([
    {
      nombre: "Baño Pabellón A",
      capacidadMaxima: 7,
      enSitio:0
    },
    {
      nombre: "Baño Pabellón B",
      capacidadMaxima: 7,
      enSitio:0
    },
    {
      nombre: "Baño Pabellón C",
      capacidadMaxima: 7,
      enSitio:0
    },
    {
      nombre: "Biblioteca",
      capacidadMaxima: 64,
      enSitio:0
    },
    {
      nombre: "Capilla Grande",
      capacidadMaxima: 49,
      enSitio:0
    },
    {
      nombre: "Capilla Pequeña",
      capacidadMaxima: 5,
      enSitio:0
    },
    {
      nombre: "Gimnasio",
      capacidadMaxima: 50,
      enSitio:0
    },
    {
      nombre: "Salón Audiovisuales",
      capacidadMaxima: 40,
      enSitio:0
    }
  ])
  
  useEffect(()=>{ 
    const lugares = [...LugaresState]
    const db = firebase.database().ref(); 
    const dbLugares = db.child('lugares');

    dbLugares.on('value', snapshot=>{
      Object.values(snapshot.val()).forEach((personasEnSito,index)=>{
        lugares[index].enSitio = personasEnSito
      })
    })

    setLugaresState(lugares)

    console.log('Alexis')
  },[])
  
  return (
    <Box>
      <Header/>
      <List>
        {LugaresState.map(lugar =>
        <ListItem key={lugar.nombre} divider>
          <ListItemText secondary={'Capacidad Máxima: '+ lugar.capacidadMaxima}>{lugar.nombre}</ListItemText>
          <ListItemAvatar><Avatar style={{backgroundColor: lugar.enSitio === lugar.capacidadMaxima ? 'red' : 'green'}}>{lugar.enSitio}</Avatar></ListItemAvatar>
        </ListItem>  
        )}
      </List>
    </Box>
  );
}

export default App;


//TODO Hacer la pantalla de admin y la de profesores