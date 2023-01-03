import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AllForm,
  Label,
  Input,
  AddBtn,
} from 'components/PhonebookForm/PhonebookForm.styled';

export function PhonebookForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

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

  const handleSubmit = e => {
    e.preventDefault();

    const { name, number } = e.target.elements;

    if (onSubmit(name.value, number.value)) {
      setName(name.value);
      setNumber(number.value);
    }
  };

  return (
    <AllForm action="submit" onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Name
        <Input
          type="text"
          name="name"
          value={name}
          placeholder="Kate Tart"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </Label>
      <Label htmlFor="number">
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          placeholder="111-11-11"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </Label>
      <AddBtn type="submit" aria-label="add contact">
        Add contact
      </AddBtn>
    </AllForm>
  );
}

PhonebookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
