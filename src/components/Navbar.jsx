import { Link } from "react-router-dom"
import styles from "../styles/styles"
import { Button } from "antd"
import { KeyOutlined, SettingOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <motion.div
      initial="hidden"
      animate={{
        y: [0, 70]
      }}
      transition={{
        duration: .5,
        ease: 'easeInOut'
      }}
    >
      <nav 
        className={`
          ${styles.paddingX} 
          py-[15px] w-full flex justify-between align-middle bg-bg-2 relative top-[-70px]
        `}
      >
          <div className="flex items-center">
              <h1 className="text-2xl font-bold blue-text-gradient">Password Generator</h1>
          </div>
          <div>
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