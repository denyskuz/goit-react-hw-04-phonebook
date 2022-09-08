import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import classes from "./App.module.css"
import Filter from "./Filter";

export const App = () => {
   const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = values => {
    if (contacts.find(contact => contact.name === values.name)) {
      alert(`${values.name} is already in contacts !!!`);
      return;
    }
    setContacts([values, ...contacts]);
  };

  const handlerDelete = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const handleFilter = value => {
    setFilter(value); 
  };

  const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
      <div className={classes.wrapper}>
        <div className={classes.container}>
            <h1 className={classes.title}>PhoneBook</h1>
            <ContactForm onSubmit={handleSubmit} />
        </div>
        <div className={classes.container}>
          <h2 className={classes.title}>Contacts</h2>
          <Filter onHandleFilter={handleFilter} />
          <ContactList
            contacts={filterContacts}
            onDelete={handlerDelete}
            />
        </div>
      </div>
  )
}
