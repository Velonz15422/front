import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddShoppingCart } from '@mui/icons-material';
import accounting from 'accounting'
import { actionTypes } from '../Reducer';
import { useStateValue } from '../StateProvider';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Producto({ producto: { id, nombre, tipo, precio, rating, imagen, descripcion }
 }) {
  const [expanded, setExpanded] = React.useState(false);
  const [{basket}, dispatch] = useStateValue()
  const handleExpandClick = () => {
    setExpanded(!expanded);
    
  };
  
  const agregarACarrito = () => {
   dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
         id,
        nombre,
        imagen,
        rating,
        tipo,
        precio,
        descripcion,
      }
    })
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography
            className='action'
            variant='h5'
            color='textSecondary'
          >
            {accounting.formatMoney(precio, "COP ")}
          </Typography>
        }
        title={nombre}
        subheader="Disponible"
      />
      <CardMedia
        component="img"
        height="220"
        image={imagen}
        alt={nombre}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {tipo}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Agregar" onClick={agregarACarrito}>
          <AddShoppingCart />
        </IconButton>
        <IconButton aria-label="share">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p> &#11088;</p>
            ))}

        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Descripcion</Typography>
          <Typography paragraph>
            {descripcion}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
