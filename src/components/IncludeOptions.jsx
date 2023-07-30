import { Checkbox } from "antd"

const IncludeOptions = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center w-full max-w-[500px]">
        <h2 className="text-2xl font-semibold">Include</h2>
        <Checkbox>Uppercase</Checkbox>
        <Checkbox>Lowercase</Checkbox>
        <Checkbox>Numbers</Checkbox>
        <Checkbox>Symbols</Checkbox>
        <Checkbox>Separators</Checkbox>
    </section>
  )
}

export default IncludeOptions