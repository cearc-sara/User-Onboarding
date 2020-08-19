import React from 'react';

export default function Form(props) {
    const {
        values,
        submit,
        inputChange,
        // checkboxChange,
        disabled,
        errors,
    } = props

    const onSumbit = evt => {
        evt.preventDefault()
        submit()
    }

    // const onCheckboxChange = evt => {
    //     const {name, checked} = evt.target
    //     onCheckboxChange(name,checked)
    // }

    const onInputChange =evt => {
        const {name, value} = evt.target
        inputChange(name, value)
    }

    return(
        <form className='form container' onSubmit={onSumbit}>
            <div className='form-group submit'>
                <h2>Add a User</h2>
                <button disabled={disabled}>Submit</button>

                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                </div>
            </div>
        </form>
    )
}