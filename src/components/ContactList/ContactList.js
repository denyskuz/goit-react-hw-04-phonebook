import React from 'react'
import { arrayOf, shape, string, number, func } from 'prop-types';
import classes from './ContactList.module.css';

const ContactList = ({ contacts, onDelete })=>  {
    return (
        <ul className={classes.items}>
            {contacts && contacts.map(({name, number, id }) => (
                <li
                    key={id}
                    className={classes.item}
                >
                    {`${name}: ${number}`}
                    <button
                        className={classes.deleteBtn}
                        type="button"
                        onClick={() => onDelete(id)}
                        title="Delete"
                    >
                    &#10006;
                    </button>
                </li>
            ))}
        </ul>
    )
}
ContactList.propsTypes = {
    contacts: arrayOf(shape({
        id: string.isRequired,
        name: string.isRequired,
        number: number.isRequired
    })).isRequired,
    onDelete: func.isRequired
}
export default ContactList;