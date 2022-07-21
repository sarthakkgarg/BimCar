import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: 9,
  height: 375,
  borderRadius: 13,
  backgroundColor: "#6a0dad",
}));


function CardComponent() {
  
  return (
    // <Card
    //   className="card-container"
    // >
    //   <div >
    //     <img  alt="img" src='/images/car1.jpeg' />
    //   </div>

      
    // </Card>
    <div>
    <div style={{ display: "flex", gap:"30px"}}>

    <Card style={{ width:"400px", marginTop:"30px"}}>
    <CardMedia
      component="img"
      height="140"
      image="/images/car1.jpeg"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      Ford - Aspire - Ambiente 1.2 ti-vct
      </Typography>
      <Typography style={{ color:"#dc3545"}}variant="body2" color="text.secondary">
      ₹ 15,883 / Month
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Sedan</Button>
      <Button size="small">Manual</Button>
      <Button size="small">Petrol</Button>

    </CardActions>
  </Card>

   <Card  style={{ width:"400px", marginTop:"30px"}}>
   <CardMedia
     component="img"
     height="140"
     image="/images/car1.jpeg"
   />
   <CardContent>
     <Typography gutterBottom variant="h5" component="div">
     Ford - Aspire - Ambiente 1.2 ti-vct
     </Typography>
     <Typography style={{ color:"#dc3545"}}variant="body2" color="text.secondary">
     ₹ 15,883 / Month
     </Typography>
   </CardContent>
   <CardActions>
     <Button size="small">Sedan</Button>
     <Button size="small">Manual</Button>
     <Button size="small">Petrol</Button>

   </CardActions>
 </Card>

 <Card style={{ width:"400px", marginTop:"30px"}}>
   <CardMedia
     component="img"
     height="140"
     image="/images/car1.jpeg"
   />
   <CardContent>
     <Typography gutterBottom variant="h5" component="div">
     Ford - Aspire - Ambiente 1.2 ti-vct
     </Typography>
     <Typography style={{ color:"#dc3545"}}variant="body2" color="text.secondary">
     ₹ 15,883 / Month
     </Typography>
   </CardContent>
   <CardActions>
     <Button size="small">Sedan</Button>
     <Button size="small">Manual</Button>
     <Button size="small">Petrol</Button>

   </CardActions>
 </Card>
    </div>


<div style={{ display: "flex", gap:"30px"}}>

<Card style={{ width:"400px", marginTop:"30px"}}>
<CardMedia
  component="img"
  height="140"
  image="/images/car1.jpeg"
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
  Ford - Aspire - Ambiente 1.2 ti-vct
  </Typography>
  <Typography style={{ color:"#dc3545"}}variant="body2" color="text.secondary">
  ₹ 15,883 / Month
  </Typography>
</CardContent>
<CardActions>
  <Button size="small">Sedan</Button>
  <Button size="small">Manual</Button>
  <Button size="small">Petrol</Button>

</CardActions>
</Card>

<Card style={{ width:"400px", marginTop:"30px"}}>
<CardMedia
 component="img"
 height="140"
 image="/images/car1.jpeg"
/>
<CardContent>
 <Typography gutterBottom variant="h5" component="div">
 Ford - Aspire - Ambiente 1.2 ti-vct
 </Typography>
 <Typography style={{ color:"#dc3545"}}variant="body2" color="text.secondary">
 ₹ 15,883 / Month
 </Typography>
</CardContent>
<CardActions>
 <Button size="small">Sedan</Button>
 <Button size="small">Manual</Button>
 <Button size="small">Petrol</Button>

</CardActions>
</Card>

<Card style={{ width:"400px", marginTop:"30px"}}>
<CardMedia
 component="img"
 height="140"
 image="/images/car1.jpeg"
/>
<CardContent>
 <Typography gutterBottom variant="h5" component="div">
 Ford - Aspire - Ambiente 1.2 ti-vct
 </Typography>
 <Typography style={{ color:"#dc3545"}}variant="body2" color="text.secondary">
 ₹ 15,883 / Month
 </Typography>
</CardContent>
<CardActions>
 <Button size="small">Sedan</Button>
 <Button size="small">Manual</Button>
 <Button size="small">Petrol</Button>

</CardActions>
</Card>
</div>

    </div>

  

  
  );
}



export default CardComponent;
