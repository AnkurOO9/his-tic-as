import { SearchOutlined } from '@ant-design/icons';
import { Input, List } from 'antd';
import { useEffect, useState } from 'react';
import { ISubSidebarProps } from './SubSidebar.interface';
import styles from './SubSidebar.module.scss';

const SubSidebar = ({ selectedMember, memberList, handleSelectedMember }: ISubSidebarProps) => {
    const [searchText, setSearchText] = useState('');
    const [members, setMembers] = useState(memberList);

    useEffect(() => {
        setMembers(memberList);
    }, [memberList]);

    const handleOnChange = (value: string) => {
        setSearchText(value);
        if (value) {
            setMembers(memberList.filter(m => m.name.toLocaleLowerCase().startsWith(value)));
        } else {
            setMembers(memberList);
        }
    }

    return (
        <div className={styles.subSidebar}>
            <Input placeholder="Filter" value={searchText} prefix={<SearchOutlined />}
                onChange={(e) => { handleOnChange(e.target.value) }} />
            <div className={styles.list}>
                <List dataSource={members}
                    renderItem={(item) => (
                        <List.Item className={item.id === selectedMember.id ? styles.selected : styles.items}
                            onClick={() => { handleSelectedMember(item) }}>
                            <List.Item.Meta className={styles.itemsTitle}
                                title={item.name}
                                description={item.description} />
                        </List.Item>
                    )} />
            </div>
        </div>
    )
}

export default SubSidebar