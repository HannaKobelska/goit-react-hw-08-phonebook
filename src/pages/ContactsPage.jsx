import ContactsList from '../components/ContactsList/ContactsList';
import { NavLink, Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid;
  border-color: #ff4400;
  text-decoration: none;
  color: #ff4400;
 
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  text-align: center;
  &.active {
    color: white;
    background-color: #ff4400;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }
    &:hover {
    color: white;
    background-color: rgb(178, 47, 0);
  }
`;

export const TextBox = styled.div`
  background-color: rgba(255, 255, 255, 0.8);

  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  overflow: hidden;
  padding-bottom: 50px;
  padding-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;


const ContactsPage = () => {
  return (
    <Box sx={{ pt: "20px" }}>
      
    <TextBox>
        <ul style={{ display: 'flex', justifyContent: 'center', gap: '50px', padding: "0", listStyle: "none", alignItems: "center"}}>
              <li><Link to="add">
                  <AddCircleOutlineIcon sx={{ fontSize: 22, mr: "10px" }} />
                  <div>ADD</div></Link></li>
              <li><Link to="search">
                  <SearchIcon sx={{ fontSize: 22, mr: "10px" }} />
                <div>SEARCH</div></Link></li>
        </ul>

        <Outlet />
          
        <div>
            <ContactsList />
        </div>
    
      </TextBox>
      </Box>
  );
};

export default ContactsPage;