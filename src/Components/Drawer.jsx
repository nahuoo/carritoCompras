import React, { useContext } from 'react'
import  {ContextProductos } from './Context'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BackspaceIcon from '@material-ui/icons/Backspace';
import MailIcon from '@material-ui/icons/Mail';
import EditAttributesIcon from '@material-ui/icons/EditAttributes';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const A = styled.a`
  text-decoration: none;
  color: red;

`

export default function TemporaryDrawer() {
  const classes = useStyles();
  const { state, setState, carrito, setCarrito } = useContext(ContextProductos)

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const vaciar = () => setCarrito([])

  var encoded = carrito.map(item => '%0A'+encodeURI(item))
    
 
  //toggleDrawer(anchor, false)
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {carrito.map((text,index) => (
          <ListItem key={index} >
            <ListItemIcon> <EditAttributesIcon /> </ListItemIcon>
            <ListItemText primary={text} />
            <Button onClick={ () => {
                              carrito.splice(carrito.indexOf(index))
                              setState(false)
                            } }
            ><ListItemIcon> <BackspaceIcon /> </ListItemIcon>Quitar</Button>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[''].map((text, index) => (
          <ListItem  key={text} >
            <ListItemIcon> <MailIcon /> </ListItemIcon>
            <A  href={`https://wa.me/5492235633653/?text=${encoded}`}> Enviar pedido </A>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <ListItem button onClick={vaciar} >
            <ListItemIcon><DeleteForeverIcon /></ListItemIcon>
            <ListItemText primary={'vaciar carrito'} />
       </ListItem>
    </div>
  );

  return (
    <div>
          <Drawer anchor={'bottom'} open={state['bottom']} onClose={toggleDrawer('bottom', false)}>
            {list('bottom')}
          </Drawer> 
    </div>

    
  );
  
}


