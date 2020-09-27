//React
import React from 'react'

//Material UI
import {List, ListItem, ListItemText, ListItemAvatar, Avatar, TextField, Box, Typography} from '@material-ui/core'

const Admin = props =>
    <List>
        {Object.values(props.lugares).map(lugar =>
            lugar.edit === props.rol ?
                <ListItem key={lugar.nombre} divider button onClick={()=>props.seleccionar(lugar)}>
                    <ListItemText secondary={'Capacidad Máxima: '+ lugar.capacidadMaxima}>{lugar.nombre}</ListItemText>
                    <ListItemAvatar><Avatar style={{backgroundColor: lugar.enSitio >= lugar.capacidadMaxima ? 'red' : 'green'}}>{lugar.enSitio}</Avatar></ListItemAvatar>
                </ListItem>  
            : null
        )}
        {props.seleccionado ? 
            <Box className="LugarSeleccionado">
                <Typography variant="h3">{props.seleccionado.nombre}</Typography>
                <Typography variant="h5">{'Capacidad Máxima: '+props.seleccionado.capacidadMaxima}</Typography>
                <TextField value={props.seleccionado.enSitio} label="En Sitio" variant="outlined" type="number" inputProps={{min:0}} onChange={props.mover}/>
            </Box>
        : null
        }
    </List>

export default Admin