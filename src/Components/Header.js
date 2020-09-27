//React
import React,{useContext} from 'react'

//Material UI
import {AppBar, Toolbar, Typography,IconButton, Button} from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons';

//Context
import {AuthContext} from '../Tools/Auth';

//**Principal */
const Header = props =>{
    
    const {currentUser} = useContext(AuthContext);

    return(
        <AppBar position="static">
            <Toolbar style={{backgroundColor:'darkblue',display:'flex',justifyContent:'space-between'}}>
                <Typography variant="h6">
                    <b>FullRoom</b>
                </Typography>
                {!!currentUser ? <Button color='inherit' onClick={props.logout}>{currentUser.email}</Button>
                : <IconButton color="inherit" onClick={()=>window.location.replace('/acceder')}><AccountCircle/></IconButton>}
            </Toolbar>
        </AppBar>
    )
}
    

export default Header