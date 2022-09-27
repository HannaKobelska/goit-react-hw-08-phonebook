
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { filterContact } from '../../redux/contacts/contacts-actions';
import { filterSelector } from '../../redux/contacts/contacts-selectors';
import { NavLink } from 'react-router-dom';
import { Box } from "@mui/material";
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';


const Link = styled(NavLink)`
  text-decoration: none;
  margin-left: auto;
  margin-right: auto;
  color: #ff4400;
    &:hover {
    color: rgb(178, 47, 0);

  }
`;

function Filter() {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const onClickCloseFilter = () => {
    dispatch(filterContact(""));

  }

  return (
    <>
      <Box>
          <Box sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 'h6.fontSize',
              fontFamily: 'Monospace',
              letterSpacing: 10,
              mt: "20px",
              font: "inherit"
          }}>
              Find contacts by Name
          </Box>
        
        <TextField
          sx={{
              display: "flex",
              justifyContent: "center",
              width: "400px",
              ml: "auto",
              mr: "auto",
              mt: "12px",
              mb: "7px",
            }}
              
              label="Filter"
              type="text"
              name="name"
              placeholder="Enter name for Search"
              value={filter}
              onChange={event => dispatch(filterContact(event.target.value))}
              />


        <div style={{ display: "flex", justifyContent: "center"}}>
              <Link to="/contacts" onClick={onClickCloseFilter}>
                  <KeyboardDoubleArrowUpIcon sx={{ fontSize: 40 }}/>
              </Link>
        </div>
        
      </Box>
    </>
  );
 
}

export default Filter;