import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

const Imagen = styled.img`
    height: 50%;
    float: center;
`

const useStyles = makeStyles((theme) => ({
  root: {
    
    width: 200,
    height:300,
    marginTop: 10,
    display: 'block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
  },
  media: {
    height: '100%',
    paddingBottom: '20',
    marginLeft: 10,
  },
  
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));

export const Articulo = (props) => {
  const classes = useStyles();

  return (
    
    <Card className={classes.root}>
       <CardHeader 
            subheader={props.titulo}  
        />
       <CardActions disableSpacing>
          <IconButton aria-label="eliminar del carrito">
            <RemoveIcon />
          </IconButton>
          <TextField
          id={`cantidad${props.key}`}
          label="Cantidad"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          />
          <IconButton aria-label="agregar al carrito">
            <AddIcon />
          </IconButton>
        </CardActions>
        <CardContent className={classes.media}>
           <Imagen src={`http://18.228.4.19:1337${props.foto}`} alt='sin foto' />
        </CardContent>
     
    </Card>
    
  );
}



