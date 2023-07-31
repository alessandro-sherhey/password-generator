import { Modal, Button, Space } from "antd"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"

const Settings = ({ open, closeSettings }) => {
    const dispatch = useDispatch()

    const language = useSelector(state => state.settings.language)
    const setEnglish = () => {
        dispatch({
            type: "settings/setLanguage",
            payload: "english"
        })
    }
    const setItalian = () => {
        dispatch({
            type: "settings/setLanguage",
            payload: "italian"
        })
    }

    const { include, exclude, strength } = useSelector(state => state.settings.sections)
    const setInclude = () => {
        dispatch({
            type: "settings/setIncludeSection",
            payload: !include
        })
    }
    const setExclude = () => {
        dispatch({
            type: "settings/setExcludeSection",
            payload: !exclude
        })
    }
    const setStrength = () => {
        dispatch({
            type: "settings/setStrengthSection",
            payload: !strength
        })
    }

    return (
        <Modal 
            title="" 
            open={open}
            onOk={closeSettings}
            footer={[
                <Link to="/">
                    <Button
                        key="close"
                        type="primary"
                        onClick={closeSettings}
                        className="bg-primary"
                    >
                        Close
                    </Button>
                </Link>
            ]}
        >
            <h2 className="text-2xl font-bold">Settings</h2>
            <h3 className="text-lg mt-3 mb-1">Language</h3>
            <Space.Compact className="mb-2">
                <Button
                    type={language === 'english' ? 'primary' : 'default'}
                    className={language === 'english' ? 'bg-primary' : ''}
                    onClick={setEnglish}
                >English</Button>
                <Button
                    type={language === 'italian' ? 'primary' : 'default'}
                    className={language === 'italian' ? 'bg-primary' : ''}
                    onClick={setItalian}
                    disabled
                >Italian</Button>
            </Space.Compact>
            <h3 className="text-lg mt-3 mb-1">UI sections</h3>
            <Space.Compact className="mb-2" size="middle">
                <Button
                    type={include ? 'primary' : 'default'}
                    className={include ? 'bg-primary' : ''}
                    onClick={setInclude}
                >Include</Button>
                <Button
                    type={exclude ? 'primary' : 'default'}
                    className={exclude ? 'bg-primary' : ''}
                    onClick={setExclude}
                    disabled
                >Exclude</Button>
                <Button
                    type={strength ? 'primary' : 'default'}
                    className={strength ? 'bg-primary' : ''}
                    onClick={setStrength}
                    disabled
                >Strength Meter</Button>
            </Space.Compact>
            <p className="opacity-50 mt-4">v0.9</p>
            <p className="opacity-30">This web app is usable but it has some features that need to be finished or added. Its content could change at any moment.</p>
        </Modal>
    )
}

export default Settings