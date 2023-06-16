import React from 'react';
import { ContactsItem, StyledWrapper } from './ContactsList.styled';
import { Btn } from 'components/PhonebookForm/PhonebookForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const deleteContacts = contactId => {
    dispatch(deleteContact(contactId));
  };

  const getVisibleContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const visibleContacts = getVisibleContacts();

  return (
    <StyledWrapper>
      <ul>
        {Array.isArray(visibleContacts) &&
          visibleContacts.map(contact => {
            return (
              <ContactsItem key={contact.id}>
                <span>
                  {contact.name}: {contact.number}
                </span>
                <Btn type="button" onClick={() => deleteContacts(contact.id)}>
                  Delete
                </Btn>
              </ContactsItem>
            );
          })}
      </ul>
    </StyledWrapper>
  );
};
