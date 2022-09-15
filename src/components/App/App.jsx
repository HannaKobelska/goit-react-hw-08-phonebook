import "./App.module.css";
import { nanoid } from 'nanoid';
import FormContact from "../FormContact/FormContact";
import ContactsList from "../ContactsList/ContactsList";
import Filter from "../Filter/Filter";
import { useState, useEffect } from "react";


export default function App() {
  const [contacts, setContacts] = useState(() => {
    return localStorage.getItem("contacts")
      ? JSON.parse(localStorage.getItem("contacts"))
      : [
    { id: "id-111", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-211", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-311", name: "Eden Clements", number: "645-17-79" },
    { id: "id-411", name: "Annie Copeland", number: "227-91-26" },
  ];
  
});
 
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    if (contacts.find((contact) => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    setContacts([newContact, ...contacts]);
  };

   

  const changeFilter = (event) => {
    setFilter(event.currentTarget.value);
  };


  
  const deleteContact = (contactId) => {
    setContacts(
      contacts.filter((contact) => contact.id !== contactId));
  };


  const getVisibleContacts = () => {
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };
  
  const visibleContacts = getVisibleContacts();


  useEffect(() => {
       localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

    return (
      <>
        <h1>Phonebook</h1>

         <FormContact onSubmit={addContact} />
        
        <h2>Contants</h2>
        
        <Filter value={filter} onChange={changeFilter} />

        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        ></ContactsList>

       
      </>
    );
}
