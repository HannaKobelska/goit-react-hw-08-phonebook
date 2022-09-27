import React from 'react';
import { NavLink } from 'react-router-dom';
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

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register" style={styles.link}>
         <Typography
            variant="h6"
            gutterBottom
            component="p"
            sx={{ m: 2, color: 'white' }}
          >
           REGISTRATION
          </Typography>
      </NavLink>
      <NavLink to="/login" style={styles.link}>
        <Typography
            variant="h6"
            gutterBottom
            component="p"
            sx={{ m: 2, color: 'white' }}
          >
           LOGIN
          </Typography>
      </NavLink>
    </div>
  );
}