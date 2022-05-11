import PropTypes from 'prop-types'
import Receipt from '../Receipt/Receipt'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { Link } from 'react-router-dom';

const Receipts = ({ receipts }) => {
  return(
    <div data-testid="rec101">
    <Container maxWidth="lg">
    <Grid container spacing={4} className='gridContainer'>
      {receipts.map((receipt) => (
        <Grid item xs={12} sm={7} md={3}>
        <Link
            style={{ display: "block", margin: "1rem 0", textDecoration: 'none'}}
            to={`/receiptinfo/${receipt.OrderId}`}
            state={ receipt }
            key={receipt.OrderId}
          >
        <Receipt key={receipt.OrderId} receipt={receipt}/>
        </Link>
        </Grid>
      ))}
    </Grid>
    </Container>
    </div>
  )
}

Receipts.propTypes = {
  receipts: PropTypes.array,
}

export default Receipts
