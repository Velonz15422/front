import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Producto from './Producto';
import productos from "../dato-producto"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Productos() {
  return (
      <Grid container spacing={2} >
        {
            productos.map(producto =>(
                <Grid item xs={12} md={4} sm={6} lg={3}>
                    <Producto key={producto.id} producto={producto}/>
                </Grid>
            ))
        }
      </Grid>
  );
}
