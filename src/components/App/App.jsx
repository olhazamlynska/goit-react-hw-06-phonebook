import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

import { Section } from 'components/Section/Section';
import { PhonebookForm } from 'components/PhonebookForm/PhonebookForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { FilterContacts } from 'components/FilterContacts/FilterContacts';
import { Box } from 'components/Box/Box';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      const parcedContacts = JSON.parse(savedContacts);
      return parcedContacts;
    }
    const intitialContacts = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    ];
    return intitialContacts;
  });

  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const isAddedName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const isAddedNunber = contacts.some(contact => contact.number === number);

    if (isAddedName) {
      Notify.failure(`We have already had contact with name ${name}`);
      return false;
    } else if (isAddedNunber) {
      Notify.failure(`We have already had contact with number ${number}`);
      return false;
    }

    setContacts(prevState => [...prevState, newContact]);

    return true;
  };

  const onChangeFilter = e => {
    setFilter(e.target.value);
  };

  const findVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };
  const visible = findVisibleContacts();

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Box as={'main'}>
      <Section title="Phonebook">
        <PhonebookForm onSubmit={addContact} />
      </Section>

      <Section title="Contacts">
        <FilterContacts value={filter} onChange={onChangeFilter} />
        <ContactsList contacts={visible} onDelete={deleteContact} />
      </Section>
    </Box>
  );
};
