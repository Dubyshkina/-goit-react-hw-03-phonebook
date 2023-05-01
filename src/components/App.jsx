import { Component } from 'react';
import { nanoid } from 'nanoid';
import s from 'components/App.module.css';

import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const contactList = JSON.parse(localStorage.getItem('contacts'));
    if (contactList) this.setState({contacts: contactList});
  }
  componentDidUpdate(_, prevState) {
 if(this.state.contacts !== prevState.contacts) localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }
  handleAddContact = event => {
    event.preventDefault();
    const name = event.target[0].value;
    const number = event.target[1].value;
    if(this.state.contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())){
      return alert(`${name} is already in contacts`);
    }else{
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, { name, number, id: nanoid() }],
        };
      });
    }
  };
  

  handelFilter = event => {
    this.setState({ filter: event.target.value });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter?.toLowerCase())
    );
  };

  handleDeleteBtn = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    return (
      <div className={s.container}>
        <div className={s.section}>
        <h2>Phonebook</h2>
        <Form
          handleAddContact={this.handleAddContact}
        />
        </div>
        <div className={s.section}>
        <h2>Contacts</h2>
        <Filter handelFilter={this.handelFilter} />
        <ContactsList
          contacts={this.filteredContacts()}
          handleDeleteBtn={this.handleDeleteBtn}
        ></ContactsList>
        </div>
      </div>
    );
  }
}

export default App;