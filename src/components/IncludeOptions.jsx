import { Checkbox } from "antd"
import { useSelector, useDispatch } from "react-redux"


const IncludeOptions = () => {
    const dispatch = useDispatch();
    const { uppercase, lowercase, numbers, symbols, separators } = useSelector(state => state.options.include);

    return (
        <section className="flex flex-col items-center justify-center text-center w-[300px] my-6">
            <h2 className="text-2xl font-semibold">Include</h2>
            <div className="mt-3" />
            <Checkbox
                checked={uppercase}
                onChange={e => { dispatch({
                    type: 'options/setUppercase',
                    payload: e.target.checked
                })}}
            >Uppercase</Checkbox>
            <Checkbox
                checked={lowercase}
                onChange={e => { dispatch({
                    type: 'options/setLowercase',
                    payload: e.target.checked
                })}}
            >Lowercase</Checkbox>
            <Checkbox
                checked={numbers}
                onChange={e => { dispatch({
                    type: 'options/setNumbers',
                    payload: e.target.checked
                })}}
            >Numbers</Checkbox>
            <Checkbox
                checked={symbols}
                onChange={e => { dispatch({
                    type: 'options/setSymbols',
                    payload: e.target.checked
                })}}
            >Symbols</Checkbox>
            <Checkbox
                checked={separators}
                onChange={e => { dispatch({
                    type: 'options/setSeparators',
                    payload: e.target.checked
                })}}
            >Separators</Checkbox>
        </section>
    )
}

export default IncludeOptions