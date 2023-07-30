import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, message } from 'antd';
import { CopyOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import styles from '../styles/styles';

const QuickActions = () => {
    const dispatch = useDispatch();
    const hidden = useSelector(state => state.options.hidden)
        const toggleHidden = e => {
        dispatch({
            type: 'options/setHidden',
            payload: !hidden
        })
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
    
    return (
        <div className='flex flex-col sm:flex-row items-center'>
            {contextHolder}
            <Button
                icon={<CopyOutlined />}
                className={`${styles.button} bg-bg-1 mr-0 mt-3 sm:mr-3`}
                onClick={copyPasswords}
              >Copy Passwords</Button>
              <Button
                icon={ !hidden ?
                  <EyeInvisibleOutlined /> :
                  <EyeOutlined />
                }
                className={`${styles.button} bg-bg-1 mr-0 mt-3 sm:mr-3`}
                onClick={toggleHidden}
              >
                { !hidden ?
                  'Hide Passwords' :
                  'Show Passwords'
                }
              </Button>
        </div>
    )
}

export default QuickActions