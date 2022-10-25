import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import accounting from 'accounting'
import DeleteIcon from '@mui/icons-material/Delete';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../Reducer';


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

export default function CardCheckout({ producto: { id, nombre, tipo, precio, rating, imagen, descripcion } }) {
    const [expanded, setExpanded] = React.useState(false);
    const [{ basket }, dispatch] = useStateValue()

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const eliminarArticulo = () => dispatch({
        type: actionTypes.REMOVE_ITEM,
        id: id
    })
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
            <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between', textAlign: 'center' }}>
                <IconButton aria-label="share">
                    <div className='cardRating'></div>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p> &#11088;</p>
                        ))}

                </IconButton>
                <IconButton onClick={eliminarArticulo}>
                    <DeleteIcon fontSize='large' />
                </IconButton>

            </CardActions>

        </Card>
    );
}