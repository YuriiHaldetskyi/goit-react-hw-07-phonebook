import PropTypes from 'prop-types';
import { List, Item } from 'components/contacts/contacts.styled';
import { deleteContact } from '../../redux/operations';
import { selectVisibleContacts } from '../../redux/selectiors';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../GlobalStyled';

export const Contacts = () => {
  const dispatch = useDispatch();

  const filtredContacts = useSelector(selectVisibleContacts);
  return (
    <>
      <List>
        {filtredContacts.map(contact => {
          return (
            <Item key={contact.id}>
              <p> {contact.name} :</p>
              <p> {contact.number} </p>
              <Button
                type="button"
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                Delete
              </Button>
            </Item>
          );
        })}
      </List>
    </>
  );
};

Contacts.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
