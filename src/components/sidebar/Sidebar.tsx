import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Sidebar = () => {
    const router = useRouter();
    const pathName = router.pathname;
    const [current, setCurrent] = useState(pathName);

    const menuItems: MenuProps['items'] = [
        {
            label: <Link href="/">Navigation One</Link>, key: '/', icon: <MailOutlined />,
        },
        {
            label: <Link href="scenario-2">Navigation Two</Link>, key: '/scenario-2', icon: <AppstoreOutlined />,
        },
        {
            label: <Link href="scenario-3">Navigation Three</Link>, key: '/scenario-3', icon: <SettingOutlined />,
        },
    ];
    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };
    return (
        <Menu onClick={onClick} className='h-100'
            mode="inline" items={menuItems} selectedKeys={[current]} />
    )
}

export default Sidebar