import { useEffect, useState } from "react"
import { Button, ConfigProvider, theme } from "antd"
import Navbar from "./components/Navbar"
import Options from "./components/Options"
import { KeyOutlined } from "@ant-design/icons"
import { useAnimate, stagger } from "framer-motion"
import { useSelector, useDispatch } from "react-redux"
import generatePassword from "./utils/generatePassword"
import PasswordsList from "./components/PasswordsList"
import QuickActions from "./components/QuickActions"

const App = () => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate("*:not(input[type='checkbox'])", {opacity: [0, 1]}, {delay: stagger(.025)})
  }, [animate])

  const [isDark, setIsDark] = useState();
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const checkQuery = () => {
      const matches = mediaQuery.matches;
      setIsDark(matches)
    }
    checkQuery();

    mediaQuery.addEventListener("change", checkQuery)

    return () => {
      mediaQuery.removeEventListener("change", checkQuery)
    }
  })

  const dispatch = useDispatch();
  const passwords = useSelector(state => state.passwords)
  const { quantity, length } = useSelector(state => state.options.general);
  const { uppercase, lowercase, numbers, symbols, separators } = useSelector(state => state.options.include);

  const addPasswords = () => {
    const passwords = generatePassword({
      quantity, length, uppercase, lowercase, numbers, symbols, separators
    })

    dispatch({
      type: 'passwords/add',
      payload: passwords,
    })
  }

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : null
      }}
    >
      <Navbar />
      <main 
        className="
          flex flex-col items-center w-[100vw]
          dark:bg-dark-bg-1
          dark:text-[#fff]
        "
        ref={scope}
      >
        <Options />
        <Button
          type="primary"
          icon={<KeyOutlined className="text-lg"/>}
          className="flex items-center bg-primary"
          onClick={addPasswords}
        >Generate passwords</Button>
        <QuickActions />
        <PasswordsList
          passwords={passwords}
        />
      </main>
    </ConfigProvider>
  )
}

export default App