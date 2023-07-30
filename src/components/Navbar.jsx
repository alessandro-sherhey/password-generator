import { Link } from "react-router-dom"
import styles from "../styles/styles"
import { Button } from "antd"
import { CopyOutlined, EyeOutlined, EyeInvisibleOutlined, KeyOutlined, SettingOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"
import { useSelector, useDispatch } from "react-redux"

const Navbar = () => {
  const dispatch = useDispatch();
  const hidden = useSelector(state => state.options.hidden);
  const toggleHidden = e => {
    dispatch({
      type: 'options/setHidden',
      payload: !hidden
    })
  }

  return (
    <motion.div
      animate={{
        y: [0, 62]
      }}
      transition={{
        duration: .5,
        ease: 'easeInOut'
      }}
    >
      <nav 
        className={`
          ${styles.paddingX} 
          py-[15px] w-full flex flex-col justify-between align-middle bg-bg-2 relative top-[-62px]
          lg:flex-row
        `}
      >
          <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">Password Generator</h1>
          </div>
          <div className="flex">
              <Button
                icon={<CopyOutlined />}
                className={`${styles.button} bg-bg-1 mr-3`}
              >Copy Passwords</Button>
              <Button
                icon={ !hidden ?
                  <EyeInvisibleOutlined /> :
                  <EyeOutlined />
                }
                className={`${styles.button} bg-bg-1 mr-3`}
                onClick={toggleHidden}
              >
                { !hidden ?
                  'Hide Passwords' :
                  'Show Passwords'
                }
              </Button>

              <Link
                to="/#/settings"
                className="flex items-center"
              >
                <Button
                  icon={<SettingOutlined />}
                  className={`${styles.button} bg-bg-1`}
                >Settings</Button>
              </Link>
          </div>
      </nav>
    </motion.div>
  )
}

export default Navbar