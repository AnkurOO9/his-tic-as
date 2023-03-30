import { IExportDataType } from '@/constants/TableData';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import styles from './ExportsTable.module.scss';

interface IExportTableProps {
    exportData: IExportDataType[];
}
const ExportsTable = ({ exportData }: IExportTableProps) => {

    const exportColumns: ColumnsType<IExportDataType> = [
        {
            title: 'DisplayName',
            dataIndex: 'DisplayName',
            key: 'DisplayName',
        },
        {
            title: 'Type',
            key: 'Type',
            dataIndex: 'Type',
        },
        {
            title: 'Status',
            key: 'Status',
            dataIndex: 'Status',
            render: (status: string) => (
                <>
                    <CheckCircleOutlined /> {status}
                </>
            )
        },
        {
            title: 'Refreshed',
            key: 'Refreshed',
            dataIndex: 'Refreshed',
        },
        {
            title: 'Schedule',
            key: 'Schedule',
            dataIndex: 'Schedule',
        },
    ];
    return (
        <div className={styles.scenarioThreeBody}>
            <h1>Exports</h1>
            <div className={styles.tableContainer}>
                <Table columns={exportColumns} dataSource={exportData} pagination={false} />
            </div>
        </div>
    )
}

export default ExportsTable