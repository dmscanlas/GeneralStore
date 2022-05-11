import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const RItems = ({item}) => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return(

      <Item>
        <Typography
          variant="h5"
          align="center"
          color="black"
        >
          Item: {item.Item}<br/>
          Price: {item.ItemPrice}<br/>
          Quantity: {item.Quantity}
        </Typography>
      </Item>


  )
}

export default RItems
