import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from "../assets/six.png"
import { ShoppingCart } from '@mui/icons-material';
import { Badge, makeStyles } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { spacing } from '@mui/system';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';
import { actionTypes } from '../Reducer';
import { useNavigate } from 'react-router-dom';
import { reducer } from "../Reducer";


const Navbar = () => {
    const [{ basket, user, dispatch }] = useStateValue()
    console.log(basket.len)
    const history = useNavigate();
    const handleAuth = () => {
        if (user) {
            auth.signOut();
            dispatch({
                type: actionTypes.EMPTY_BASKET,
                basket: [],
            });
            dispatch({
                type: actionTypes.SET_USER,
                user: null,
            });
            history("/")
        }
    }
    return (

        <Box sx={{ flexGrow: 1, marginBottom: "7rem" }}>

            <AppBar position="fixed" sx={{ backgroundColor: 'whitesmoke', boxShadow: 'none' }}  >
                <Toolbar >
                    <Link to="/">
                        <IconButton

                            size="large"
                            edge="start"
                            color="inherit"
                            sx={{ mr: 2 }}
                        >
                            <img width={100} alt="logo" src={logo} sx={{ marginRight: "10px" }} />
                        </IconButton>
                    </Link>

                    <div sx={{ flexGrow: 3 }} />
                    <Typography variant="h6" component="p" color="textPrimary" sx={{ flexGrow: 1 }}>
                        Hola {user ? user.email : ""}
                    </Typography >
                    <Link to='login'>
                        <Button variant='filled' onClick={handleAuth} >
                            <strong style={{ color: "black" }}> {user ? "Salir" : "Iniciar sesion"}</strong>
                        </Button>
                    </Link>

                    <Link to='/pagina-pago'>
                        <IconButton aria-label='show cart items' sx={{ color: "black" }}>
                            <Badge badgeContent={basket?.lenght} color="secondary">

                                <ShoppingCart fontSize='large' />
                            </Badge>
                        </IconButton>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>

    );
}
export default Navbar