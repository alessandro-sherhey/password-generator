import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, message } from 'antd';
import { CopyOutlined, EyeOutlined, EyeInvisibleOutlined, DeleteOutlined } from '@ant-design/icons';
import styles from '../styles/styles';

const QuickActions = () => {
    const dispatch = useDispatch();
    const hidden = useSelector(state => state.options.hidden)
        const toggleHidden = e => {
            if (passwords.length > 0) {
            dispatch({
                type: 'options/setHidden',
                payload: !hidden
            })
        } else {
            message.info('No passwords to hide.')
        }
    }

    const [messageApi, contextHolder] = message.useMessage();
    const passwords = useSelector(state => state.passwords)
    const copyPasswords = () => {
        if (passwords.length > 0) {
            navigator.clipboard.writeText(passwords.join(" "))
            try {
                messageApi.success('Passwords copied!')
            } catch (e) {
                messageApi.error('An error occured.')
            }
        } else {
            messageApi.warning('There aren\'t any passwords!')
        }
    }

    const clearPasswords = () => {
        if (passwords.length > 0) {
            dispatch({
                type: 'passwords/add',
                payload: []
            })
            messageApi.info('Passwords cleared!')
        } else {
            messageApi.info('There already are no passwords.')
        }
    }
    
    return (
        <div className='flex flex-col sm:flex-row items-center'>
            { contextHolder }
            <Button
                icon={<CopyOutlined />}
                className={`${styles.button} bg-bg-1 mr-0 mt-3 sm:mr-3 dark:bg-[#141414]`}
                onClick={copyPasswords}
              >Copy Passwords</Button>
              <Button
                icon={ !hidden ?
                  <EyeInvisibleOutlined /> :
                  <EyeOutlined />
                }
                className={`${styles.button} bg-bg-1 mr-0 mt-3 sm:mr-3 dark:bg-[#141414]`}
                onClick={toggleHidden}
              >
                { !hidden ?
                  'Hide Passwords' :
                  'Show Passwords'
                }
              </Button>
              <Button
                icon={<DeleteOutlined />}
                className={`${styles.button} bg-bg-1 mr-0 mt-3 sm:mr-3 dark:bg-[#141414]`}
                onClick={clearPasswords}
            >Clear Passwords</Button>
        </div>
    )
}

export default QuickActions