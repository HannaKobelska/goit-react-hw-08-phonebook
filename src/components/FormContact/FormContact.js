import css from "./FormContact.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (event) => {
    
  const {name, value} = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (event) => {
   
        event.preventDefault();
        onSubmit(name, number);
        setName('');
        setNumber('');
  };
  
  // const reset = () => {
  //   setName('');
  //   setNumber('');
  //       // this.textInput.current.focus();
  //   }
  

    // constructor(props) {
    //     super(props);
    //     this.textInput = React.createRef();
    // }

    return (
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label} htmlFor="">
          Name
            <input
            // ref={this.textInput}
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={name}
            onChange={handleChange}
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={css.label} htmlFor="">
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            value={number}
            onChange={handleChange}
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

ContactForm.propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };
