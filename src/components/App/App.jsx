import React, { Component } from "react";
import "./App.module.css";
import { nanoid } from 'nanoid';
import FormContact from "../FormContact/FormContact";
import ContactsList from "../ContactsList/ContactsList";
import Filter from "../Filter/Filter";


class App extends Component {
  state = {
    contacts: [
      { id: "id-111", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-211", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-311", name: "Eden Clements", number: "645-17-79" },
      { id: "id-411", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };


    addContact = (name, number) => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    if (contacts.find((contact) => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };
  

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId),}));
  };
  
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };



  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };



  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <h1>Phonebook</h1>

         <FormContact onSubmit={this.addContact} />
        
        <h2>Contants</h2>
        
        <Filter value={filter} onChange={this.changeFilter} />

        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        ></ContactsList>

       
      </>
    );
  }
}

export default App;