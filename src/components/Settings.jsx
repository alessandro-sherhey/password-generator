import { Modal, Button, Space } from "antd"
import { Link } from "react-router-dom"

const Settings = ({ open, closeSettings }) => {

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
                <Button>English</Button>
                <Button>Italian</Button>
            </Space.Compact>
            <h3 className="text-lg mt-3 mb-1">UI sections</h3>
            <Space.Compact className="mb-2">
                <Button>Include</Button>
                <Button disabled>Exclude</Button>
                <Button disabled>Strength Meter</Button>
            </Space.Compact>
            <p className="opacity-50 mt-4">v0.9</p>
            <p className="opacity-30">This web app is usable but it has some features that need to be finished or added. Its content could change at any moment.</p>
        </Modal>
    )
}

export default Settings