import React from 'react';
import styled from 'styled-components'


const StyledForm = styled.form`
background-color:${props => props.theme.black};
padding:${props => props.theme.paddingSmall};
color:${props => props.theme.primaryColor};
border:5px solid ${props => props.theme.secondaryColor};
border-radius:20px;

label{
    display:flex;
    flex-direction:column;
    margin:${props => props.theme.margins.small};
    align-items:center;
    
}
h4{
    color:${props => props.theme.secondaryColor};
}

`



export default function Form(props) {
    const {
        values,
        submit,
        inputChange,
        checkboxChange,
        disabled,
        errors,
    } = props

    const onSumbit = evt => {
        evt.preventDefault()
        submit()
    }

    const onCheckboxChange = evt => {
        const {name, checked} = evt.target
        checkboxChange(name, checked)
    }

    const onInputChange =evt => {
        const {name, value} = evt.target
        inputChange(name, value)
    }

    return(
        <StyledForm className='form container' onSubmit={onSumbit}>
            <div className='form-group submit'>
                <h2>Add a User</h2>
                <button disabled={disabled}>Submit</button>

                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.role}</div>
                </div>
            </div>

            <div className='form-group inputs'>
                <h4>General Information</h4>

                <label>First Name&nbsp;
                    <input
                    value= {values.first_name}
                    onChange={onInputChange}
                    name='first_name'
                    type='text'
                    />
                </label>

                <label>Last Name&nbsp;
                    <input
                    value= {values.last_name}
                    onChange={onInputChange}
                    name='last_name'
                    type='text'
                    />
                </label>

                <label>Email
                    <input
                    value= {values.email}
                    onChange={onInputChange}
                    name='email'
                    type='text'
                    />
                </label>

                <label>Password
                    <input
                    value= {values.password}
                    onChange={onInputChange}
                    name='password'
                    type='text'
                    />
                </label>

                <label>Role
                    <select
                    onChange={onInputChange}
                    value= {values.role}
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

            <div className='form-group checkboxes'>
                <h4>Terms of Service</h4>
                <label>Agree
                    <input
                    type='checkbox'
                    name='agree'
                    checked={values.terms.agree}
                    onChange={onCheckboxChange}
                    />
                </label>

                <label>Disagree
                    <input
                    type='checkbox'
                    name='disagree'
                    checked={values.terms.disagree}
                    onChange={onCheckboxChange}
                    />
                </label>
            </div>
        </StyledForm>
    )
}