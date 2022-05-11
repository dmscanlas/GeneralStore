import * as React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


const Receipt = ({receipt}) => {

  return (
    <div  data-testid="rcpt-1">
    <Card>
    <CardActionArea>
    <CardMedia
        component="img"
        height="260"
        image={require("../receipt.jpg")}
        alt="profile picture"
      />
      <CardContent>
        <Typography variant="h5" component="div" >
        Order#: {receipt.OrderId}<br/>
        CustomerID: {receipt.CustomerId}
        </Typography>
        <Typography sx={{ fontSize: 20}} color="text.secondary" gutterBottom>
        <br/>
        Date: {new Date(receipt.Date).getMonth()+1}/{new Date(receipt.Date).getDate()}/{new Date(receipt.Date).getFullYear()}
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}

export default Receipt
