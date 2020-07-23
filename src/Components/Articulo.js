import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import styled from 'styled-components'

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
    paddingTop: '0',
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
                      title={props.titulo}
                
                    />
                    <CardContent className={classes.media}>
     <Imagen src={`http://18.228.4.19:1337${props.foto}`} alt='sin foto' />
     </CardContent>
    </Card>
    
  );
}



