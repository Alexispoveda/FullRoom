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

  const [LugaresState, setLugaresState] = useState({})

  const db = firebase.database()

  useEffect(()=>{ 
    const ref = db.ref(); 
    const dbLugares = ref.child('lugares');

    dbLugares.on('value', snapshot=>{
      setLugaresState(snapshot.val())
    })
  },[db])
  
  return (
    <Box>
      <Header/>
      <List>
        {Object.values(LugaresState).map(lugar =>
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