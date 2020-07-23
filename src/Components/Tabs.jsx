import React, { useContext } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Productos} from './Productos'
import {Catalogo} from './Catalogo'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import  {ContextProductos} from './Context'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
//epic recursividad:
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const { indiceTabs, setIndiceTabs } = useContext(ContextProductos)

  const handleChange = () => {
    if (indiceTabs === 1) {setIndiceTabs(0)}
    else { setIndiceTabs(1)}
    
  };

  const handleChangeIndex = (index) => {
    setIndiceTabs(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={indiceTabs}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Equipos" {...a11yProps(0)} />
          <Tab label="Productos" {...a11yProps(1)} />
         
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={indiceTabs}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={indiceTabs} index={0} dir={theme.direction}>
           <Catalogo />
        </TabPanel>
        <TabPanel value={indiceTabs} index={1} dir={theme.direction}>
          <Productos />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}


// aslñkdmalksdmaksdlaksdjalksdjalskdjlas

