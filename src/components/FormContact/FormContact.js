import React, { Component } from "react";
import css from "./FormContact.module.css";
import PropTypes from "prop-types";

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    state = {
        name: "",
        number: "",
    };
    
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };
    
    handleChange = (event) => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
    };
    
    handleSubmit = (event) => {
        const { name, number } = this.state;
        event.preventDefault();
        this.props.onSubmit(name, number);
        this.reset();
    };
    
    reset() {
        this.setState({
            name: "",
            number: "",
        });
        this.textInput.current.focus();
    }


  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.label} htmlFor={this.nameInputId}>
          Name
            <input
            ref={this.textInput}
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={this.state.name}
            onChange={this.handleChange}
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={css.label} htmlFor={this.numberInputId}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            value={this.state.number}
            onChange={this.handleChange}
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button className={css.button} type="submit">
          <span>Add contact</span>
        </button>
      </form>
    );
  }
}

export default ContactForm;