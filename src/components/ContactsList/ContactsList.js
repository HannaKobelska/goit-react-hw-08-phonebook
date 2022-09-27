
import React from "react";
import ContactListItem from "../ContactListItem/ContactListItem";
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from '../../redux/contacts/contacts-actions';
import { filterSelector, itemsSelector } from '../../redux/contacts/contacts-selectors';
import { useEffect } from 'react';
import { getIsLogin } from '../../redux/auth/auth-selectors';
import List from '@mui/material/List';


function ContactsList() {
 
  const items = useSelector(itemsSelector);
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const isLogin = useSelector(getIsLogin);
  const contacts = items?.filter(({ name }) =>
    name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );


  useEffect(() => {
    isLogin && dispatch(getContacts());
  }, [dispatch, isLogin]);

  const deleteContactItem = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
       <List sx={{width: '100%', display: "flex", flexWrap: "wrap", gap: "40px", justifyContent: "center"}} >
       {contacts.map(({ id, name, number }) => (
              <ContactListItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDelete={deleteContactItem}
              />
          ))}
    </List>
      

  
    </>
         
      );
}


export default ContactsList;