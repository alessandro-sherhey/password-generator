import { useEffect } from "react"
import { Button } from "antd"
import Navbar from "./components/Navbar"
import Options from "./components/Options"
import { KeyOutlined } from "@ant-design/icons"
import { useAnimate, stagger } from "framer-motion"
import { useSelector, useDispatch } from "react-redux"
import generatePassword from "./utils/generatePassword"
import PasswordsList from "./components/PasswordsList"

const App = () => {
  const dispatch = useDispatch();
  const [scope, animate] = useAnimate();

  const passwords = useSelector(state => state.passwords)
  const { quantity, length } = useSelector(state => state.options.general);
  const { uppercase, lowercase, numbers, symbols, separators } = useSelector(state => state.options.include);

  useEffect(() => {
      animate("*:not(input[type='checkbox'])", {opacity: [0, 1]}, {delay: stagger(.032)})
  }, [animate])

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
    <>
      <Navbar />
      <main className="flex flex-col items-center w-full" ref={scope}>
        <Options />
        <Button
          type="primary"
          icon={<KeyOutlined className="text-lg"/>}
          className="flex items-center bg-primary"
          onClick={addPasswords}
        >Generate passwords</Button>
        <PasswordsList
          passwords={passwords}
        />
      </main>
    </>
  )
}

export default App