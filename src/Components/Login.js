//React
import React from 'react';

//Material UI
import {Avatar,Button,CssBaseline,TextField,Link,Box,Typography,Container, makeStyles} from '@material-ui/core';

//Material UI Icons
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        COLEGIO DE LAS ESCLAVAS DEL SAGRADO CORAZÓN DE JESÚS
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

//Inline Styles
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

//**Principal **/
const Login = props => {

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Iniciar Sesión
            </Typography>
            <Box className={classes.form}>
                <TextField variant="outlined" margin="normal" required fullWidth label="Correo Electrónico" autoComplete="email" autoFocus value={props.email} onChange={props.onEmailChange}/>
                <TextField variant="outlined" margin="normal" required fullWidth label="Contraseña" type="password" autoComplete="current-password" value={props.password} onChange={props.onPasswordChange}/>
                <Button fullWidth variant="contained" color="primary" className={classes.submit} onClick={props.acceder}>
                    Acceder
                </Button>
            </Box>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>

    </Container>
  );
}

export default Login