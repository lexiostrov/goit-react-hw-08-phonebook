import { fetchDelContacts } from 'redux/option';
import { ContactContainer, ContactEl } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
export const ContactsList = () => {
  const { items: contacts } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filters);
  const dispatch = useDispatch();
  const lowCaseFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(lowCaseFilter)
  );
  return (
    <ContactContainer>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <ContactEl key={id}>
            <p>-{name}:</p>
            <p>{number}</p>
            <button
              onClick={() => dispatch(fetchDelContacts(id))}
              type="button"
            >
              Delete
            </button>
          </ContactEl>
        );
      })}
    </ContactContainer>
  );
};
