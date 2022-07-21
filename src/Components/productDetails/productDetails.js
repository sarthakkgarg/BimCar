import React, { Component } from 'react'
import Header from '../header/header';
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext } from '@material-ui/lab';
import { TabList } from '@material-ui/lab';
import { TabPanel } from '@material-ui/lab';



export default function ProductDetails()  {
    
    const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <>
<Header/>
        <div style={{ display: "flex"}}>

      <div>
      </div>

     <div className='left-cont'>
     <Card style={{ width:"633px", marginTop:"30px", height:"400px",}}>
    
    <CardMedia style={{ width:"100%", height:"100%"}}
      component="img"
      height="140"
      image="/images/car1.jpeg"
    />
   
  </Card>

     </div>

     <div className='right-cont'>
     <Card style={{ width:"803px", marginTop:"30px", height:"100vh",}}>
    
     <CardContent>
     <Typography gutterBottom variant="h5" component="div">
     Ford - Aspire - Ambiente 1.2 ti-vct
     </Typography>
     <Typography style={{ color:"#dc3545"}}variant="body2" color="text.secondary">
     ASPIRE AMBIENTE 1.2 TI-VCT
     </Typography>
   </CardContent>
   <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
      </TabContext>
    </Box>
  </Card>
    
     </div>
        </div>
    </>
    )
}
