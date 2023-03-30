import { ArrowRightOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Divider } from 'antd';
import styles from './Header.module.scss';

interface IHeaderProps {
    handleIsAdd: () => void;
}
const Header = ({ handleIsAdd }: IHeaderProps) => {
    return (
        <div className={styles.header}>
            <Button type="text" icon={<PlusOutlined className='pColor' />} onClick={handleIsAdd}>Add Export</Button>
            <Divider type="vertical" />
            <Button type="text" disabled icon={<ArrowRightOutlined />}>Run all</Button>
        </div>
    )
}

export default Header