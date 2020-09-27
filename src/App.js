//React
import React,{useState, useEffect} from 'react';

//Componentes
import Header from './Components/Header'
import Feed from './Components/Feed'
import Admin from './Components/Admin'
import Login from './Components/Login'

//React Router
import {Switch, Route} from 'react-router-dom'

//Routes
import AdminRoute from './Tools/AdminRoute'

//Material UI
import {Box} from '@material-ui/core'

//Firebase
import firebase from './Tools/firebase'

//**Principal**
const App = () => {

  const [LugaresState, setLugaresState] = useState({})
  const [LugarSeleccionadoState, setLugarSeleccionadoState] = useState(null)
  const [EmailState, setEmailState] = useState(null)
  const [PasswordState, setPasswordState] = useState(null)

//Datos
  const db = firebase.database()

//Feed (Traer los lugares)
  useEffect(()=>{

    const ref = db.ref(); 
    const dbLugares = ref.child('lugares');

    dbLugares.on('value', snapshot=>{
      setLugaresState(snapshot.val())
    })
  },[db])

//Administrador
  const moverPersonas = event =>{
    const ref = db.ref()
    const dbLugares = ref.child('lugares')
    const dbLugar = dbLugares.child(LugarSeleccionadoState.nombre)

    dbLugar.set({
      ...LugarSeleccionadoState,
      enSitio:parseInt(event.target.value) ? parseInt(event.target.value) : 0
    })

    setLugarSeleccionadoState({
      ...LugarSeleccionadoState,
      enSitio:parseInt(event.target.value) ? parseInt(event.target.value) : 0
    })
  }

//Inicio de sesión
  const iniciarSesion = () =>{
    const auth = firebase.auth()

    auth.signInWithEmailAndPassword(EmailState,PasswordState).then((response)=>{
        const ref = db.ref(); 
        const dbUsuarios = ref.child('usuarios');
    
        dbUsuarios.child(response.user.uid).once('value', snapshot=>{
          window.location.replace('/'+snapshot.val().rol.toLowerCase()) 
        })

        }).catch(error=>{
          console.log(error)
        })
  }

  const cerrarSesion = () =>{
    firebase.auth().signOut().then(window.location.replace('/'))
  }

  const handleEmailChange = event =>{
    setEmailState(event.target.value)
  }

  const handlePasswordChange = event =>{
    setPasswordState(event.target.value)
  }

  return (
    <Box>
      <Header logout={cerrarSesion}/>
      <Switch>
        <Route path="/" exact>
          <Feed lugares={LugaresState}/>
        </Route>
        <Route path="/acceder">
          <Login acceder={iniciarSesion} email={EmailState} password={PasswordState} onEmailChange={handleEmailChange} onPasswordChange={handlePasswordChange}/>
        </Route>
        <AdminRoute path="/secretaria" component={Admin} permiso="Secretaria" lugares={LugaresState} seleccionar={setLugarSeleccionadoState} seleccionado={LugarSeleccionadoState} mover={moverPersonas} rol="Secretaria"/>
        <AdminRoute path="/profesor" component={Admin} permiso="Profesor" lugares={LugaresState} seleccionar={setLugarSeleccionadoState} seleccionado={LugarSeleccionadoState} mover={moverPersonas} rol="Profesor"/>
      </Switch>
    </Box>
  );
}

export default App;