import { PhonebookForm } from './PhonebookForm';
import { ContactsList } from './ContactsList';
import { Filter } from './ContactsFilter';
import { Title } from './Title';
import { Main } from './App.styled';

export const App = () => {
  return (
    <Main>
      <PhonebookForm title="Phonebook" />
      <Title title="Contacts"></Title>
      <Filter></Filter>
      <ContactsList title="Contacts" />
    </Main>
  );
};
