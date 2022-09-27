import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { getIsLogin } from '../../redux/auth/auth-selectors';
import { Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


export default function AppBarStyled() {
    const isLoggedIn = useSelector(getIsLogin);
    
  return (
    <>
   
        <AppBar sx={{ width: '100%', height: '64px', top: 0, left: 0, position: "sticky", }}>
          <Toolbar sx={{ display: 'flex', flexDirection: "row", justifyContent: "space-between", }}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
           
          </Toolbar>
        </AppBar>
         <Outlet />
     
   
    </>
  );
}