import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Btn,
  FormInput,
  FormLabel,
  StyledForm,
  StyledFormTitle,
} from './PhonebookForm.styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

export const PhonebookForm = ({ title }) => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState('');

  const addContacts = contact => {
    const normalizedContact = contact.name.toLowerCase().trim();
    const normalizedNumber = contact.number.replaceAll(' ', '');

    if (
      contacts.some(el => el.name.toLowerCase().trim() === normalizedContact)
    ) {
      alert(`The contact name ${normalizedContact} is already exists!`);
      return;
    }

    if (
      contacts.some(el => el.number.replaceAll(' ', '') === normalizedNumber)
    ) {
      alert(`The contact number ${normalizedNumber} is already exists!`);
      return;
    }

    dispatch(addContact(contact));
  };

  const handleChange = e => {
    const { value, name } = e.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
    setId(nanoid());
  };

  const handleSubmit = e => {
    e.preventDefault();

    addContacts({ name, number, id });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
    setId('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFormTitle>{title}</StyledFormTitle>
      <FormLabel>
        <span>Name: </span>
        <FormInput
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <FormLabel>
        <span>Number: </span>
        <FormInput
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <Btn type="submit">Add contacts</Btn>
    </StyledForm>
  );
};

PhonebookForm.propTypes = {
  title: PropTypes.string.isRequired,
};
