import React from 'react'

const PasswordBox = ({ password, copyPassword }) => {
    return (
        <div
            className='px-3 py-1 w-[90vw] overflow-auto hover:font-bold hover:cursor-pointer active:scale-90 transition-all'
            onClick={() => copyPassword(password)}
        >
            { password }
        </div>
    )
}

export default PasswordBox