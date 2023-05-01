import PropTypes from 'prop-types';
import s from '../ContactsList/ContactsList.module.css';

const ContactsList = ({ contacts, handleDeleteBtn }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <span>{name}: </span>
            <span>{number}</span>
            <button className={s.btn} type="button" onClick={() => handleDeleteBtn(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
ContactsList.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  handleDeleteBtn: PropTypes.func,
};

export default ContactsList;
