import { useState, useEffect } from "react";
import { Button } from "antd"
import { KeyOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import generatePassword from "../../utils/generatePassword"

const GenerateButton = () => {
    const dispatch = useDispatch();
    const { uppercase, lowercase, numbers, symbols, separators } = useSelector(state => state.options.include);
    const { quantity, length } = useSelector(state => state.options.general);

    const addPasswords = () => {
        const passwords = generatePassword({
        quantity, length, uppercase, lowercase, numbers, symbols, separators
        })

        dispatch({
        type: 'passwords/add',
        payload: passwords,
        })
    }
  
    const [disableGenerateBtn, setDisableGenerateBtn] = useState(false);
    useEffect(() => {
        if (
        (quantity < 1 || quantity > 100) ||
        (length < 4 || length > 150) ||
        (!uppercase && !lowercase && !numbers && !symbols)
        ) {
        setDisableGenerateBtn(true)
        } else {
        setDisableGenerateBtn(false)
        }
    }, [quantity, length, uppercase, lowercase, numbers, symbols])

    return (
        <Button
          type="primary"
          icon={<KeyOutlined className="text-lg"/>}
          className="flex items-center bg-primary"
          onClick={addPasswords}
          disabled={disableGenerateBtn}
        >Generate Passwords</Button>
    )
}

export default GenerateButton