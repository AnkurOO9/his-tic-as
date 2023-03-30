import tableData, { tableColumns } from '@/constants/TableData'
import { Table } from 'antd'

const Preview = () => {
    return (
        <Table className='preview' columns={tableColumns} dataSource={tableData} pagination={false} />
    )
}

export default Preview