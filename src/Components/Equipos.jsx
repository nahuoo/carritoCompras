import React, { useContext } from 'react'
import  {ContextProductos } from './Context'
import { Spinner } from './Spinner'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
    marginTop: 10,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export const Equipos = (props) => {

    const { isFetching, setFiltro, setIndiceTabs, setEquipoNombre } = useContext(ContextProductos)
    const [expanded, setExpanded] = React.useState(false);
    const handleClick = () => {
        setFiltro(props.productos)
        setIndiceTabs(1)
        setEquipoNombre(props.nombre)
    }
const classes = useStyles();
const handleExpandClick = () => {
  setExpanded(!expanded);
};

if ( isFetching ) { return(<div><Spinner /></div>) }
        return (
<Card className={classes.root} key={props.id} >
                    <CardActionArea  onClick={handleClick}>
                     
                    <CardHeader
                      title={props.nombre}
                      subheader="Equipamiento"
                    />
                    <CardMedia
                     className={classes.media}
                    image={`http://18.228.4.19:1337${props.foto.url}`}
                    title={props.nombre}
                    />
                    <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">                     
                      </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions disableSpacing>
                      Descripción
                      <IconButton
                      className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                      })}
                      onClick={handleExpandClick}
                       ria-expanded={expanded}
                      aria-label="show more"
        >
                     <ExpandMoreIcon />
                       </IconButton>
                  </CardActions>
                     <Collapse in={expanded} timeout="auto" unmountOnExit>
                     <CardContent> 
                     <Typography paragraph>
                     {props.descripcion}
                   </Typography>
      
                    </CardContent>
                    </Collapse>
                  </Card>
                  )}
                     