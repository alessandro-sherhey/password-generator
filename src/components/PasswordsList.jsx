import React, { useEffect } from 'react'
import PasswordBox from './PasswordBox'
import { useAnimate, stagger, AnimatePresence } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/styles'
import { EyeInvisibleOutlined } from '@ant-design/icons'

const PasswordsList = () => {
    const [scope, animate] = useAnimate();
    const hidden = useSelector(state => state.options.hidden)
    const passwords = useSelector(state => state.passwords)

    useEffect(() => {
        if (passwords.length > 0) {
            animate("*", {opacity: [0, 1]}, {delay: stagger(.05)})
        }
    }, [passwords, hidden])

    return (
        <section
            className='flex flex-col text-center px-8 my-7'
            ref={scope}
        >
            {   !hidden
                ?
                passwords.map(password => (
                    <PasswordBox password={password} key={crypto.randomUUID()} />
                ))
                :
                <EyeInvisibleOutlined
                    className='text-5xl sm:text-7xl text-[#bbb] dark:text-[#444]'
                />
            }
        </section>
    )
}

export default PasswordsList