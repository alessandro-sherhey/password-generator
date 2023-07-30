import { useEffect } from "react"
import { Button } from "antd"
import Navbar from "./components/Navbar"
import Options from "./components/Options"
import { KeyOutlined } from "@ant-design/icons"
import { useAnimate, stagger } from "framer-motion"

const App = () => {
  const [scope, animate] = useAnimate();

    useEffect(() => {
        animate("*:not(input[type='checkbox'])", {opacity: [0, 1]}, {delay: stagger(.032)})
    }, [animate])

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center w-full" ref={scope}>
        <Options />
        <Button
          type="primary"
          icon={<KeyOutlined className="text-lg"/>}
          className="flex items-center bg-primary"
        >Generate passwords</Button>
      </main>
    </>
  )
}

export default App