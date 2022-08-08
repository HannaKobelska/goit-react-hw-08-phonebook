import css from "./ContactListItem.module.css";
import React from "react";
import PropTypes from "prop-types";

const ContactListItem = ({
    contactName,
    contactNumber,
    onClickDeleteContact, }) => {
    
    return (
        <li className={css.listItem}>
            <span className={css.listItemText}>{contactName}:</span>
            <span className={css.listItemText}>{contactNumber}</span>
            <button className={css.button} type="button" onClick={onClickDeleteContact}>Delete</button>
        </li>
  );
};

ContactListItem.propTypes = {
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  onClickDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;