import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
import defaultAvatar from '../../images/Avatar-Profile-Vector-PNG-Pic.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />

      <Box  sx={{
                  display: 'flex',
                  alignItems: "center",
                  
              }}>
      <Typography
        variant="h6"
        gutterBottom
        component="p"
          sx={{ m: 2, color: 'white', width: "100%" }}
      >
        WELCOME, {name}!
      </Typography>


      <Button variant="contained" size="medium" type="button" onClick={() => dispatch(logOut())}>LOGOUT</Button>
      </Box>
    </div>
  );
}

