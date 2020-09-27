//React
import React,{useContext, useState, useEffect} from 'react';

//React Router
import { Route, Redirect } from 'react-router-dom';

//Context
import {AuthContext} from './Auth';

//Material UI
import {CircularProgress} from '@material-ui/core'

//Firebase
import firebase from './firebase'

const AdminRoute = ({component: Component, permiso, ...rest}) => {

    const [pending,setPending] = useState(true);
    const [RolState,setRolState] = useState(null)

    const {currentUser} = useContext(AuthContext);
    const uid = !!currentUser ? currentUser.uid : null 

    const db = firebase.database()

    useEffect(()=>{
        if(uid){
            const ref = db.ref(); 
            const dbUsuarios = ref.child('usuarios');
        
            dbUsuarios.child(uid).once('value', snapshot=>{
                setRolState(snapshot.val().rol)
                setPending(false)
            })
        }
        else{
            setPending(false)
        }
    },[db,uid])


    if(pending){
        return <CircularProgress/>
    }

    return (
            <Route {...rest} render={props => (
                !!currentUser && RolState.includes(permiso) ?
                    <Component {...props} {...rest}/>
                : <Redirect to="/acceder" />
            )} />
    );
};

export default AdminRoute;