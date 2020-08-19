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

            <div className='form-group inputs'>
                <h4>General Information</h4>

                <label>First Name&nbsp;
                    <input
                    value={values.first_name}
                    onChange={onInputChange}
                    name='first_name'
                    type='text'
                    />
                </label>

                <label>Last Name&nbsp;
                    <input
                    value={values.last_name}
                    onChange={onInputChange}
                    name='last_name'
                    type='text'
                    />
                </label>

                <label>Email
                    <input
                    value={values.email}
                    onChange={onInputChange}
                    name='email'
                    type='text'
                    />
                </label>

                <label>Password
                    <input
                    value={values.password}
                    onChange={onInputChange}
                    name='password'
                    type='text'
                    />
                </label>

                <label>Role
                    <select
                    onChange={onInputChange}
                    value={values.role}
                    name='role'
                    >
                        <option value=''>--Select a Role--</option>
                        <option value='student'>Student</option>
                        <option value='alumni'>Alumni</option>
                        <option value='instructor'>Instructor</option>
                        <option value='tl'>Team Lead</option>
                    </select>
                </label>
            </div>
        </form>
    )
}