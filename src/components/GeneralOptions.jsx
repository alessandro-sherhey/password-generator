import { Input } from "antd"
import { useSelector, useDispatch } from "react-redux"

const GeneralOptions = () => {
    const dispatch = useDispatch();
    const {quantity, length} = useSelector(state => state.options.general)

    const changeQuantity = e => {
        dispatch({
            type: 'options/setQuantity',
            payload: e.target.value
        })
    }

    const changeLength = e => {
        dispatch({
            type: 'options/setLength',
            payload: e.target.value
        })
    }

    return (
        <section className="flex flex-col items-center justify-center text-center w-[300px] my-6">
            <h2 className="text-2xl font-semibold">General</h2>

            <div className="mt-3" />

            <p>Quantity</p>
            <Input
                type="number"
                value={quantity}
                onChange={changeQuantity}
                max={100}
                className="mt-1 max-w-[100px] text-lg text-center"
            />

            <div className="mt-3" />

            <p>Length</p>
            <Input 
                type="number"
                value={length}
                onChange={changeLength}
                max={150}
                className="mt-1 max-w-[100px] text-lg text-center"
            />
        </section>
    )
}

export default GeneralOptions