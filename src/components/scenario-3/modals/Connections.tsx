import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal } from 'antd';

interface IConnection {
    isModalOpen: boolean;
    handleCancel: (key: string) => void;
    handleSuccess: (displayName: string) => void;
}

const Connections = ({ isModalOpen, handleCancel, handleSuccess }: IConnection) => {

    const [form] = Form.useForm();

    const handleSubmit = (values: any) => {
        handleSuccess(values.name);
        form.resetFields();
    };

    return (
        <Modal title="Add Connection" open={isModalOpen} footer={null} className="list-modal" onCancel={() => handleCancel('connection')}>
            <Form form={form} onFinish={handleSubmit} layout="vertical"
                initialValues={{ requiredMarkValue: false }} requiredMark={true}>
                <Form.Item label="Name" name="name" required tooltip="This is a required field" rules={[{ required: true }]}>
                    <Input placeholder="Name" />
                </Form.Item>
                <Form.Item label="Field B" name="fieldB"
                    tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}>
                    <Input placeholder="Field b" />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" type="primary" >Submit</Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default Connections;