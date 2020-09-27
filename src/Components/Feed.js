//React
import React from 'react'

//Material UI
import {List, ListItem, ListItemText, ListItemAvatar, Avatar} from '@material-ui/core'

//**Principal**/
const Feed = props =>
    <List>
        {Object.values(props.lugares).map(lugar =>
            <ListItem key={lugar.nombre} divider>
                <ListItemText secondary={'Capacidad Máxima: '+ lugar.capacidadMaxima}>{lugar.nombre}</ListItemText>
                <ListItemAvatar><Avatar style={{backgroundColor: lugar.enSitio >= lugar.capacidadMaxima ? 'red' : 'green'}}>{lugar.enSitio}</Avatar></ListItemAvatar>
            </ListItem>  
        )}
    </List>

export default Feed