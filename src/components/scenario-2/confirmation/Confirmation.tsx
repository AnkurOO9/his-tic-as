import { Button, Modal } from 'antd';
import styles from './Confirmation.module.scss';

interface IConfirmationProps {
    title: string;
    name: string;
    isModalOpen: boolean;
    handleOk: () => void;
    handleCancel: () => void;
}

const Confirmation = ({ title, name, isModalOpen, handleOk, handleCancel }: IConfirmationProps) => {
    return (
        <Modal title={`Delete ${title}`} open={isModalOpen} onCancel={handleCancel}
            footer={[
                <Button key="submit" danger type="primary" onClick={() => handleOk()}>Delete</Button>,
                <Button key="back" onClick={() => handleCancel()}>Cancel</Button>
            ]}>
            <div className={styles.modalBody}>
                <span>Are you sure you want to delete {title} <b>{name}</b> ?</span>
            </div>
        </Modal>
    )
}

export default Confirmation