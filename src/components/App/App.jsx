import "./App.module.css";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import PrivateRoute from '../Routes/PrivateRoute';
import PublicRoute from '../Routes/PublicRoute';
import HomePage from "../../pages/HomePage";
import RegistrationPage from "../../pages/RegistrationPage";
import LoginPage from "../../pages/LoginPage";
import ContactsPage from "../../pages/ContactsPage";
import AppBarStyled from "../AppBar/AppBarStyled"
import FormContact from "../FormContact/FormContact";
import Filter from "../Filter/Filter";
import NotFound from "../../pages/NotFound";
import { getRefresh } from '../../redux/auth/auth-operations';
import { getStatusFetch, getToken } from '../../redux/auth/auth-selectors';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export const themeMy = createTheme({
  palette: {
    primary: {
      main: '#ff4400',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
    custom: {
      light: '#ffa726',
      main: '#f57c00',
      dark: '#ef6c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});


function App() {
  const dispatch = useDispatch();
  const accountToken = useSelector(getToken);
  const isFetching = useSelector(getStatusFetch);


  useEffect(() => {
    dispatch(getRefresh());
  }, [dispatch, accountToken]);


  return (
    
      <ThemeProvider theme={themeMy}>
      {isFetching ? (
        <ThreeDots
          height="100"
          width="250"
          radius="10"
          color="rgb(255, 121, 62)"
          ariaLabel="three-dots-loading"
          wrapperStyle={{
            margin: '500px auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          wrapperClassName=""
          visible={true}
        />
      ) : (
        <div>
        
          <Routes>
            <Route path="/" element={<AppBarStyled />}>
              <Route index element={<HomePage />} />
              <Route path="register" element={<PublicRoute> <RegistrationPage /> </PublicRoute>} />
              <Route path="login" element={<PublicRoute> <LoginPage /> </PublicRoute>}></Route>
              <Route path="contacts" element={<PrivateRoute> <ContactsPage /> </PrivateRoute>}>
                <Route path="add" element={<FormContact title="Add contact" />}></Route>
                <Route path="search" element={<Filter />}></Route>
              </Route>
            </Route>

            <Route path="*" element={<NotFound />}></Route>
          </Routes>
              
        </div>
      )}
      </ThemeProvider>
    );
    
}

export default App;    
             



       

       
  