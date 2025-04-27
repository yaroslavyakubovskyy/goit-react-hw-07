import ContactForm from './components/ContactForm/ContactForm.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import s from './App.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from './redux/contactsOps.js';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
