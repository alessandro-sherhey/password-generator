import { useEffect, useState } from "react"
import { Button, ConfigProvider, theme } from "antd"
import Navbar from "./components/Navbar"
import OptionsWrapper from "./components/options/OptionsWrapper"
import { KeyOutlined } from "@ant-design/icons"
import { useAnimate, stagger } from "framer-motion"
import { useSelector, useDispatch } from "react-redux"
import PasswordsList from "./components/PasswordsList"
import QuickActions from "./components/actions/QuickActions"
import GenerateButton from "./components/actions/GenerateButton"

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

  const passwords = useSelector(state => state.passwords)

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
          overflow-x-hidden bg-[transparent]
          dark:text-[#fff]
        "
        ref={scope}
      >
        <OptionsWrapper />
        <GenerateButton
        />
        <QuickActions />
        <PasswordsList
          passwords={passwords}
        />
      </main>
    </ConfigProvider>
  )
}

export default App