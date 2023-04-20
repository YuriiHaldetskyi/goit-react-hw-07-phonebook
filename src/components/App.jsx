import { Contacts } from './contacts/Contacts';
import { Filter } from './filter/Filter';
import { Phonebook } from './phonebook/Phonebook';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/operations';
import { selectIsLoading, selectError } from './redux/selectiors';
import Loader from './loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Phonebook />
      <Filter />

      {isLoading ? <Loader /> : error ? `${error}` : <Contacts />}
    </div>
  );
};
