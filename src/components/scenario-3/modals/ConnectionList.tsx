import { connectionList } from '@/constants/ListData';
import { Avatar, List, Modal } from 'antd';

interface IConnection {
    isModalOpen: boolean;
    handleCancel: (key?: string) => void;
    handleSuccess: (connection: string) => void;
}
const ConnectionList = ({ isModalOpen, handleCancel, handleSuccess }: IConnection) => {

    return (
        <Modal open={isModalOpen} footer={null} width={250} onCancel={() => { handleCancel('connectionList') }}>
            <List itemLayout="horizontal" dataSource={connectionList}
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={`https://source.unsplash.com/random/32x32/?img=1`} />}
                            title={<div className='connection-title' onClick={() => handleSuccess(item.title)}>{item.title}</div>}
                            description="Ant Design, a design"
                        />
                    </List.Item>
                )}
            />
        </Modal>
    )
}

export default ConnectionList;