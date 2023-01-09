import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { Contact } from 'components/Contact/Contact';
import {
  ContactsListSTyle,
  Notification,
} from 'components/ContactsList/ContactsList.styled';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const findVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = findVisibleContacts();

  return (
    <>
      {visibleContacts.length === 0 && (
        <Notification>Sorry,there no contact!</Notification>
      )}
      <ContactsListSTyle>
        {visibleContacts.map(contact => {
          return <Contact key={contact.id} id={contact.id} contact={contact} />;
        })}
      </ContactsListSTyle>
    </>
  );
};
