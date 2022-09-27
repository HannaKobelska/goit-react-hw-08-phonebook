import { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from '../../redux/contacts/contacts-actions';
import { itemsSelector } from '../../redux/contacts/contacts-selectors';
import { Notify } from "notiflix";
import { NavLink } from 'react-router-dom';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import styled from 'styled-components';


const Link = styled(NavLink)`
  text-decoration: none;
  margin-left: auto;
  margin-right: auto;
  color: #ff4400;
    &:hover {
    color: rgb(178, 47, 0);

  }
`;



function FormContact() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(itemsSelector);
  const dispatch = useDispatch();


 const handlerChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };


    const handlerSubmit = event => {
      event.preventDefault();
      
      const id = nanoid();
      
    if (!name || !number) {
      Notify.warning("Some field is empty!", { position: 'right-bottom'});
      return;
      }
      
    const inContacts = contacts.some(
      item => item.name.toLowerCase() === name.toLowerCase()
    );

    if (inContacts) {
      Notify.failure("Contact is already exist!", { position: 'right-bottom'});
      return;
    }

      dispatch(addContact({ name, number, id }));
      setName('');
      setNumber('');
  };


  return (
    <>
      <Box
              component="form"
              sx={{
                  '& .MuiTextField-root': { m: 2, width: '40ch' },
                  display: 'flex',
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  ml: "auto",
                  mr: "auto",
                  
              }}
              noValidate
              onSubmit={handlerSubmit}
          >
              <TextField
                  required
                  fullWidth
                  label="Name"
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  value={name}
                  onChange={handlerChange}
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              />
        
              <TextField
                  required
                  fullWidth
                  label="Number"
                  type="tel"
                  name="number"
                  placeholder="Enter phone number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  value={number}
                  onChange={handlerChange}
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              />
      
            <Button variant="contained" size="large" type="submit" startIcon={<AddCircleOutlineIcon />}>Add contact</Button>
      </Box>
      

      <div style={{ display: "flex", justifyContent: "center"}}>
         <Link to="/contacts" >
            <KeyboardDoubleArrowUpIcon sx={{ fontSize: 40 }}/>
        </Link>
      </div>
    </>
  ); 
}

export default FormContact;
