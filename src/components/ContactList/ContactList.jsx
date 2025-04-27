import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import Loader from '../../components/Loader/Loader';
import { selectNameFilter } from '../../redux/filtersSlice.js';
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from '../../redux/contactsSlice.js';
import s from './ContactList.module.css';

const ContactList = () => {
  const filteredUserData = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectNameFilter);

  return (
    <>
      {isLoading && <Loader />}
      {error && <h2>Something went wrong...</h2>}
      {filteredUserData.length === 0 && filter ? (
        <h2>We couldn't find any {filter}</h2>
      ) : (
        <ul className={s.list}>
          {filteredUserData.map(user => (
            <Contact key={user.id} user={user} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
