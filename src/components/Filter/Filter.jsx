import { Component } from 'react';
import s from '../Filter/Filter.module.css';

import PropTypes from 'prop-types';

class Filter extends Component {
  static propTypes = {
    handelFilter: PropTypes.func,
  };
  render() {
    return (
      <>
        <label htmlFor="filter">
          <input
          className={s.input}
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            //   value={this.props.filter}
            onChange={this.props.handelFilter}
            required
          />
        </label>
      </>
    );
  }
}
export default Filter;
