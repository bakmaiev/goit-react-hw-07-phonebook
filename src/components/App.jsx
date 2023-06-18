import { PhonebookForm } from './PhonebookForm';
import { ContactsList } from './ContactsList';
import { Filter } from './ContactsFilter';
import { Title } from './Title';
import { Main } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Main>
      <PhonebookForm title="Phonebook" />
      <Title title="Contacts"></Title>
      {isLoading && !error && <b>Request in progress...</b>}
      <Filter></Filter>
      <ContactsList title="Contacts" />
    </Main>
  );
};
