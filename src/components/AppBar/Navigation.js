import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLogin } from '../../redux/auth/auth-selectors';
import Typography from '@mui/material/Typography';


const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
};

export default function Navigation() {
  const isLoggedIn = useSelector(getIsLogin);
  
    return (
      <nav>
        <NavLink to="/" style={styles.link}>
          <Typography
            variant="h6"
            gutterBottom
            component="p"
            sx={{ m: 2, color: 'white' }}
          >
            HOMEPAGE
          </Typography>
        </NavLink>

        {isLoggedIn && (
          <NavLink to="/contacts" style={styles.link}>
            <Typography
              variant="h6"
              gutterBottom
              component="p"
              sx={{ m: 2, color: 'white' }}
            >
              CONTACTS
            </Typography>
          </NavLink>
        )}
        
      </nav>
    );

}

