import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { func } from 'prop-types';
import { nanoid } from 'nanoid';
import { validateUsername, validateNumber } from 'utils';
import classes from './ContactForm.module.css';


const ContactForm = ({ onSubmit }) => {
    const handleFormSubmit = ({name, number}) => {
        onSubmit({ id: nanoid(10), name: name, number: number });
  };

return (
    <Formik
        initialValues={{
            name: '',
            number: ''
        }}
        onSubmit={(values, {resetForm }) => {
            handleFormSubmit(values);
            resetForm();                
        }}
    >
        {(props) => (
            <Form className={classes.form}>
                <Field
                    className={classes.input}
                    type="text"
                    name="name"
                    placeholder="John"
                    validate={validateUsername}
                    required
                />
                <ErrorMessage name="name" component="p" className={classes.error}/>
                <Field
                    className={classes.input}
                    name="number"
                    placeholder="+380..."
                    validate={validateNumber}
                    required
            
                />
                <ErrorMessage name="number" component="p" className={classes.error} />
                <button
                    className={classes.btn}
                    type="submit"
                >
                    Submit
                </button>
            </Form>
        )}
    </Formik>
)

}
ContactForm.propsTypes = {
    onSubmit: func.isRequired
}
export default ContactForm;