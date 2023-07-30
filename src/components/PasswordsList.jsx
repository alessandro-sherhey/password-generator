import React from 'react'
import PasswordBox from './PasswordBox'

const PasswordsList = ({ passwords }) => {
    return (
        <section>
            {
                passwords.map(password => (
                    <PasswordBox password={password} />
                )) 
            }
        </section>
    )
}

export default PasswordsList