import { Component } from 'react';
import PropTypes from 'prop-types';
import s from '../Form/Form.module.css';
import { nanoid } from 'nanoid';

class Form extends Component {
  state={
    name:'',
    number: '',
  }
  
  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };

  handleAddContact = event => {
    event.preventDefault();
    // const name = event.target[0].value;
    // const number = event.target[1].value;
    this.props.addContact({name: this.state.name, number: this.state.number, id:nanoid()})
    this.setState({name: '', number:''});
  };

  render() {
    console.log(this.state.name)
    return (
      <>
        <form onSubmit={this.handleAddContact} className={s.form}>
          <label htmlFor="name" className={s.label}>
            Name                                                                                                  
            </label>
             <input
             onChange={event => this.setState({name: event.target.value})}
              className={s.input}
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          
          <label htmlFor="number" className={s.label}>
            Number 
            </label>
             <input
             onChange={event => this.setState({number: event.target.value})}
              className={s.input}
              type="tel"
              name="number"
              value={this.state.number}
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
