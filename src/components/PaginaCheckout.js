import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import CardCheckout from './CardCheckout';
import Total from './Total';
import { useStateValue } from '../StateProvider';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const PaginaCheckout = () => {
    const [{ basket }, dispatch] = useStateValue()
    function FormRow() {
        return (
            <React.Fragment>
                {
                    basket?.map((item) => (
                        <Grid item xs={12} sm={8} md={6} lg={4}>
                            <CardCheckout key={item.id} producto={item} />
                        </Grid>
                    ))

                }
            </React.Fragment>
        );
    }

    return (
        <div sx={{ flexGrow: 1, padding: "2rem" }} >
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography align='center' gutterBottom variant='h4'>
                        Carrito
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={9} container spacing={2}>
                    <FormRow />
                </Grid>
                <Grid item xs={12} sm={4} md={3} >
                    <Typography align='center' gutterBottom variant='h4'>
                        <Total />
                    </Typography>
                </Grid>
            </Grid>

        </div>
    );
}
export default PaginaCheckout;