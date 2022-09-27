import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getIsLogin, getUserName } from '../../src/redux/auth/auth-selectors';
import styled from 'styled-components';
import { Typography } from '@mui/material';


export const TextBox = styled.div`
  background-color: rgba(255, 255, 255, 0.7);

  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 50px;
  padding-top: 50px;
  margin-left: auto;
  margin-right: auto;
`;


export default function HomePage() {


  const navigate = useNavigate();
  const isLoggedIn = useSelector(getIsLogin);
  const userName = useSelector(getUserName);



  const onGettingStarted = () => {
    isLoggedIn && navigate('/contacts');
  };

  return (
      <>
      <Box sx={{ pt: "50px" }}>
        <TextBox>
          {isLoggedIn ? (
          <>
            <Typography sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 'h2.fontSize',
                color: "#ff4400",
                pb: "50px",
              }}>
                {`Welcome ${userName.toUpperCase()}!`}</Typography>
            <Button variant="contained" onClick={onGettingStarted}>Getting Started!</Button>
          </>
        ) : (
          <>
            <Typography sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 'h2.fontSize',
              color: "#ff4400",
                }}>
                  {`Welcome!`}</Typography>
            <Typography sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 'h3.fontSize',
                color: "#ff4400",
                pb: "50px",
                }}>
                  {`Sign up or Log in!`}</Typography>

          </>
        )}
      </TextBox>

       </Box>
    </>
  );
}
 