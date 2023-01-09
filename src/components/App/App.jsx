import { Section } from 'components/Section/Section';
import { PhonebookForm } from 'components/PhonebookForm/PhonebookForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { FilterContacts } from 'components/FilterContacts/FilterContacts';
import { Box } from 'components/Box/Box';

export const App = () => {
  return (
    <Box as={'main'}>
      <Section title="Phonebook">
        <PhonebookForm />
      </Section>

      <Section title="Contacts">
        <FilterContacts />
        <ContactsList />
      </Section>
    </Box>
  );
};
