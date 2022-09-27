import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../redux/auth/auth-operations';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


export default function RegistrationPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(signIn({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
      <>
    <Box sx={{ pt: "50px" }}>
        
    
          <Box sx={{
            pt: "50px",
            pb: "50px",
            borderRadius: "4px",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "inherit",
            width: "600px",
            ml: "auto",
            mr: "auto",
            backgroundColor: "rgba(255,255,255, 0.3)",    
        }}>
          
          <Box sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 'h5.fontSize',
              fontFamily: 'Monospace',
              letterSpacing: 10,
          }}>Registration Page</Box>
          
          <Box
              component="form"
              sx={{
                  '& .MuiTextField-root': { m: 2, width: '40ch' },
                  display: 'flex',
                  flexDirection: "column",
                  width: "500px",
                  justifyContent: "center",
                  alignItems: "center",
                  ml: "auto",
                  mr: "auto",
                  
              }}
              noValidate
              onSubmit={handleSubmit}
              autoComplete="off"
          >
              <TextField
                  required
                  fullWidth
                  label="Email"
                  type="email"
                  name="email"
                  value={name}
                  onChange={handleChange}
              />
              <TextField
                    required
                    fullWidth
                    label="Name"
                    type="text"
                    name="name"
                    value={email}
                    onChange={handleChange}
                />
              <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
              />
              
              <Button variant="contained" size="large" width="500px" type="submit">REGISTER</Button>
            
              </Box>
              </Box>
      </Box>
      </>
  );
}