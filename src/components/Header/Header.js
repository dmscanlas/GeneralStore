import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom';
const Header = ({title}) => {

  return (
    <div data-testid="header-1">
    <Link
        style={{textDecoration: 'none'}}
        to={`/`}
      >
    <Typography
      component="h1"
      variant="h2"
      className='header'
    >
      {title}
    </Typography>
    </Link>
    </div>
  )
}

Header.defaultProps = {
  title: 'Strider General Store',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
