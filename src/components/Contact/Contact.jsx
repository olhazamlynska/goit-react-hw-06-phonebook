import {
  ContactsItem,
  ContactsName,
  DeleteBtn,
} from 'components/Contact/Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <ContactsItem>
      <ContactsName>{contact.name}:</ContactsName>
      <span>{contact.number}</span>
      <DeleteBtn onClick={handleDelete} aria-label="delete">
        Delete
      </DeleteBtn>
    </ContactsItem>
  );
};
