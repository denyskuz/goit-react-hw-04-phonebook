import React from 'react'
import { func } from 'prop-types';
import classes from './Filter.module.css';

const Filter = ({ onHandleFilter }) => {
    const setFilterValue = e => {
        onHandleFilter(e.currentTarget.value.toUpperCase());
    };
    return (
        <div className={classes.container}>
            <p  className={classes.title }>Filter contact</p>
            <input
                className={classes.input}
                name="search"
                placeholder="Search ..."
                onChange={setFilterValue}
            />
        </div>
    )
    
}
Filter.propsTypes = {
    onHandleFilter: func.isRequired
}
export default Filter;