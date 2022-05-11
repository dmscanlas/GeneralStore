import {useLocation} from 'react-router-dom'
import Header from '../components/Header/Header'
import RItems from '../components/RItems/RItems'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const ReceiptInfo = () => {

  const location = useLocation()
  const { state } = location

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  return (
    <div>
    <Header/>
    <br/>
    <Typography
      variant="h3"
      align="center"
      color="black"
      gutterBottom
    >
      Receipt Information
    </Typography>
    <h3>
      <table className='container'>
        <tr>
          <th>Name</th>
          <th>Customer ID</th>
          <th>Order#</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
        <tr>
          <td>{state.CustomerName} </td>
          <td>{state.CustomerId} </td>
          <td>{state.OrderId} </td>
          <td>{new Date(state.Date).getMonth()}/
          {new Date(state.Date).getDate()}/
          {new Date(state.Date).getFullYear()}</td>
          <td>
          {new Date(state.Date).getHours()}:
          {new Date(state.Date).getMinutes()}
          </td>
        </tr>
      </table>
    </h3>
    <Container maxWidth="sm">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
      >
      {state.Items.map((item) => (
        <RItems key={item.Item} item={item}/>
      ))}
      <Item>
      <Typography
        variant="h2"
        align="center"
        color="success.main"
      >
      Total Cost: {state.Total}
      </Typography>
      </Item>
      </Stack>
    </Container>
    </div>
  );
}
export default ReceiptInfo
