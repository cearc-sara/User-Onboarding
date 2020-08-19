import React from 'react'
import styled from 'styled-components'


const StyledUser = styled.div`
background-color:${props => props.theme.black};
padding:${props => props.theme.paddingSmall};
color:${props => props.theme.primaryColor};
`


function User({details}) {
    if (!details) {
        return <h3>Working fetching your user&apos;s details...</h3>
    }

    return(
        <StyledUser className='user container'>
            <h2>{details.first_name} {details.last_name}</h2>
            <p>Email:{details.email}</p>
            <p>Role:{details.role}</p>
        </StyledUser>
    )
}

export default User