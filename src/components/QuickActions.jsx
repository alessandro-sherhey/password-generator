import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'antd';
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
    
    return (
        <div className='flex flex-col sm:flex-row items-center'>
            <Button
                icon={<CopyOutlined />}
                className={`${styles.button} bg-bg-1 mr-0 mt-3 sm:mr-3`}
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