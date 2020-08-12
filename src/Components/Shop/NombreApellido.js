import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import  {ContextProductos } from '../Context'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));


export const NombreApellido = () => {
  const classes = useStyles();
  const { openModal, setOpenModal, carrito } = useContext(ContextProductos)
  

  const handleSubmit = () => { 
  
    let mensaje = document.getElementById('nombre').value+carrito.map(item => '%0A'+encodeURI(item))
    
    
    window.location.assign(`https://wa.me/5492235633653/?text=${mensaje}`)
  }
 
  const handleClose = () => {
    setOpenModal(false)
  }


  return (
    <div>
          
      <Dialog disableBackdropClick disableEscapeKeyDown open={openModal} onClose={handleClose}>
        <DialogTitle>Complete con su nombre completo u organización</DialogTitle>
        <DialogContent>
          <form className={classes.container} noValidate autoComplete="on" >
            <TextField className={classes.formControl} id="nombre" label="Nombre y Apellido" />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit}> Enviar pedido </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}