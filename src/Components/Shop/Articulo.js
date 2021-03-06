import React, {useState, useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import styled from 'styled-components'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'

import  {ContextProductos } from '../Context'

const Imagen = styled.img`
    height: 50%;
    float: center;
`

const useStyles = makeStyles((theme) => ({
  root: {
    
    
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
  const [color, setColor] = useState('')
  const [cantidad, setCantidad] = useState(0)
  const { carrito, setState, setBadgeItems } = useContext(ContextProductos)
  const handleChange = (e) => {
    setCantidad(cantidad+1)
  }


  const handleChange2 = (e) => {
    if (cantidad !== 0 ) setCantidad(cantidad-1)
  }
  
//optimizar...
const handleBotton = () => {
  if (cantidad !== 0) {carrito.push(cantidad+' '+props.titulo)}
  console.log(carrito)
  setColor('secondary')
  setBadgeItems(carrito.lenght)
  setState({'bottom':true})
  setState({'bottom':false})
}
  return (
    
    <Card className={classes.root}>
       <CardHeader 
            subheader={props.titulo}  
        />
       <CardActions disableSpacing>
         <Button variant="outlined" color={color} onClick={handleBotton}> Agregar </Button>
          <IconButton aria-label="eliminar del carrito"onClick={handleChange2}>
            <RemoveIcon />
           </IconButton>
          <p> {cantidad} </p>
          <IconButton aria-label="agregar al carrito" onClick={handleChange}>
            <AddIcon />
          </IconButton>
        </CardActions>
        <CardContent className={classes.media}>
           <Imagen src={`http://18.228.4.19:1337${props.foto}`} alt='sin foto' />
        </CardContent>
    </Card>
    
  );
}



