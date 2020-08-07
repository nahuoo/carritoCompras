import React, {useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import styled from 'styled-components'
import CardActions from '@material-ui/core/CardActions'
import  {ContextProductos } from './Context'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Badge from '@material-ui/core/Badge'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CardActionArea from '@material-ui/core/CardActionArea'

const Div = styled.div`
    position: fixed;
    bottom: 0;
    left: 40%;
    
`

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
  },
}));

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);

export const CarritoCompras = () => {
  const classes = useStyles();

  const { carrito, setState, state } = useContext(ContextProductos)


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Div>
    <Card className={classes.root}>
       <CardActionArea onClick={toggleDrawer('bottom', true)}>
           <CardActions  disableSpacing>
            <Typography variant="body2" color="textSecondary" component="p">
                Ver carrito                      
            </Typography>
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={carrito.length} color="primary">
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
            </CardActions>
        </CardActionArea>
    </Card>
    </Div>
  );
}



