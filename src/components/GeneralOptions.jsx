import { Input } from "antd"

const GeneralOptions = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center w-full max-w-[500px]">
        <h2 className="text-2xl font-semibold">General</h2>

        <p>Quantity</p>
        <Input
            type="number"
            className="max-w-[100px]"
        />

        <p>Length</p>
        <Input 
            type="number"
            className="max-w-[100px]"
        />
    </section>
  )
}

export default GeneralOptions