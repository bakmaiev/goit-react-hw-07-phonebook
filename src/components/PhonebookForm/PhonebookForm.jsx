import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Btn,
  FormInput,
  FormLabel,
  StyledForm,
  StyledFormTitle,
} from './PhonebookForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

export const PhonebookForm = ({ title }) => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { value, name } = e.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      name: name,
      phone: number,
    };
    const normalizedContact = newContact.name.toLowerCase().trim();
    const normalizedNumber = newContact.phone.replaceAll(' ', '');

    if (
      contacts.some(el => el.name.toLowerCase().trim() === normalizedContact)
    ) {
      alert(`The contact name ${normalizedContact} is already exists!`);
      return;
    }

    if (
      contacts.some(el => el.phone.replaceAll(' ', '') === normalizedNumber)
    ) {
      alert(`The contact number ${normalizedNumber} is already exists!`);
      return;
    }

    dispatch(addContact(newContact));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
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
