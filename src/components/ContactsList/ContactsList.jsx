import React from 'react';
import { ContactsItem, StyledWrapper } from './ContactsList.styled';
import { Btn } from 'components/PhonebookForm/PhonebookForm.styled';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

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
                  {contact.name}: {contact.phone}
                </span>
                <Btn
                  type="button"
                  onClick={() => dispatch(deleteContact(contact.id))}
                >
                  Delete
                </Btn>
              </ContactsItem>
            );
          })}
      </ul>
    </StyledWrapper>
  );
};
