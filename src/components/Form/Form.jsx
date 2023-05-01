import { Component } from 'react';
import PropTypes from 'prop-types';
import s from '../Form/Form.module.css';

class Form extends Component {
  
  static propTypes = {
    handleAddContact: PropTypes.func.isRequired,
  };

  render() {
    return (
      <>
        <form onSubmit={this.props.handleAddContact} className={s.form}>
          <label htmlFor="name" className={s.label}>
            Name                                                                                                  
            </label>
             <input
              className={s.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          
          <label htmlFor="number" className={s.label}>
            Number 
            </label>
             <input
            className={s.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          
          <button type="submit" className={s.btn}>Add to contacts</button>
        </form>
      </>
    );
  }
}

export default Form;
