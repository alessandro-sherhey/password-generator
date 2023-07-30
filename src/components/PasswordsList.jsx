import React, { useEffect } from 'react'
import PasswordBox from './PasswordBox'
import { useAnimate, stagger, AnimatePresence } from 'framer-motion'
import { useDispatch } from 'react-redux'
import styles from '../styles/styles'

const PasswordsList = ({ passwords }) => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        if (passwords.length > 0) {
            animate("*", {opacity: [0, 1]}, {delay: stagger(.05)})
        }
    }, [passwords])

    return (
        <section
            className='flex justify-around flex-wrap px-8 mt-7'
            ref={scope}
        >
            {
                passwords.map(password => (
                    <PasswordBox password={password} />
                )) 
            }
        </section>
    )
}

export default PasswordsList