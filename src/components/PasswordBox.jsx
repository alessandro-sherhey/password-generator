import React from 'react'

const PasswordBox = ({ password }) => {
    return (
        <div className='px-3 py-1 w-[90vw] overflow-auto'>
            { password }
        </div>
    )
}

export default PasswordBox