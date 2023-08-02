import React, { useEffect } from 'react'
import PasswordBox from './PasswordBox'
import { useAnimate, stagger } from 'framer-motion'
import { useSelector } from 'react-redux'
import { EyeInvisibleOutlined } from '@ant-design/icons'
import { message } from 'antd'

const PasswordsList = () => {
    const [scope, animate] = useAnimate();

    const hidden = useSelector(state => state.options.hidden)
    const passwords = useSelector(state => state.passwords)
    useEffect(() => {
        if (passwords.length > 0) {
            animate("*", {opacity: [0, 1]}, {delay: stagger(.05)})
        }
    }, [passwords, hidden])

    const [messageApi, contextHolder] = message.useMessage();
    const copyPassword = (pwd) => {
        try {
            navigator.clipboard.writeText(pwd)
            messageApi.success('Password copied!')
        } catch (e) {
            messageApi.error('An error occured.')
        }
    }

    return (
        <section
            className='flex flex-col text-center px-8 my-7'
            ref={scope}
        >   
            { contextHolder }
            {   !hidden
                ?
                passwords.map(password => (
                    <PasswordBox password={password} copyPassword={copyPassword} key={crypto.randomUUID()} />
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