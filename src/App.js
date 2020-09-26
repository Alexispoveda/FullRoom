import React,{useState} from 'react';
import './App.css';

import {Box, AppBar, Toolbar, IconButton, Typography, Button, List, ListItem, ListItemText} from '@material-ui/core'

const App = () => {

  const [LugaresState, setLugaresState] = useState([
    {
      nombre: "Gimnasio",
      capacidadMaxima: 50
    },
    {
      nombre: "Capilla Grande",
      capacidadMaxima: 49
    },
    {
      nombre: "Capilla Pequeña",
      capacidadMaxima: 5
    },
    {
      nombre: "Baño Pabellón A",
      capacidadMaxima: 7
    },
    {
      nombre: "Baño Pabellón B",
      capacidadMaxima: 7
    },
    {
      nombre: "Baño Pabellón C",
      capacidadMaxima: 7
    },
    {
      nombre: "Salón Audiovisuales",
      capacidadMaxima: 40
    },
    {
      nombre: "Biblioteca",
      capacidadMaxima: 64
    }
  ])
  
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            C
          </IconButton>
          <Typography variant="h6">
            Nombre de la aplicación
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <List>
        {LugaresState.map(lugar =>
        <ListItem key={lugar.nombre} divider>
          <ListItemText secondary={'0/'+lugar.capacidadMaxima}>{lugar.nombre}</ListItemText>
        </ListItem>  
        )}
      </List>
    </Box>
  );
}

export default App;
