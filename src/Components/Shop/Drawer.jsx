import React, { useContext } from 'react'
import  {ContextProductos } from '../Context'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import BackspaceIcon from '@material-ui/icons/Backspace'
import MailIcon from '@material-ui/icons/Mail'
import EditAttributesIcon from '@material-ui/icons/EditAttributes'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import Button from '@material-ui/core/Button'




const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  boton: {
    color: 'red',
}
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const { state, setState, carrito, setCarrito, setOpenModal, setIndiceTabs } = useContext(ContextProductos)

  const toggleDrawer = (anchor, open) => (event) => {
  
    setState({ ...state, [anchor]: open });
  };

  const vaciar = () => setCarrito([])
    
  const handleClickOpen = () => {
    setState(false)
    setIndiceTabs(1)
    setOpenModal(true);
  }; 
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
      <Button className={classes.boton} onClick={handleClickOpen}>
      <ListItemIcon> <MailIcon /> </ListItemIcon>
              Enviar pedido </Button>
     {/* <List>
        {[''].map((text, index) => (
          <ListItem  key={text} >
            <ListItemIcon> <MailIcon /> </ListItemIcon>
            <A  href={`https://wa.me/5492235633653/?text=${encoded}`}> Enviar pedido </A>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
     

        */ }
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


