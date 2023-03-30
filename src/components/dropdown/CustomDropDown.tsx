import { SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import Link from 'next/link';
import { CSVLink } from "react-csv";
import tableData from '../../constants/TableData';

const CustomDropDown = () => {

    const csvDataHeaders: { label: string, key: string }[] = [
        { label: 'CustomerId', key: 'CustomerId' },
        { label: 'StartTime', key: 'StartTime' },
        { label: 'EndTime', key: 'EndTime' },
        { label: 'Duration', key: 'Duration' },
        { label: 'DurationUnit', key: 'DurationUnit' },
    ]

    const items: MenuProps['items'] = [
        { key: '1', label: (<Link href="/preview" >Preview</Link>) },
        {
            key: '2', label: (<a target="_blank" href="#">menu item</a>),
            icon: <SmileOutlined />, disabled: true,
        },
        {
            key: '3',
            label: (
                <CSVLink data={tableData} headers={csvDataHeaders} filename="Member">Download</CSVLink>
            ),
        },
        { key: '4', danger: true, label: 'Clear all' },
    ];
    return (
        <Dropdown menu={{ items }} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()}>Actions</a>
        </Dropdown>
    )
}

export default CustomDropDown