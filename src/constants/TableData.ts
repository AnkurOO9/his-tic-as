import type { ColumnsType } from 'antd/es/table';
import { Table } from 'antd';

type EditableTableProps = Parameters<typeof Table>[0];
type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

export interface ITableDataType {
    [key: string]: string | number | boolean;
}

export const columns = [
    'CustomerId',
    'StartTime',
    'EndTime',
    'Duration',
    'DurationUnit',
];

export const tableColumns: ColumnsType<ITableDataType> = [
    {
        title: 'CustomerId',
        dataIndex: 'CustomerId',
        key: 'CustomerId',
    },
    {
        title: 'StartTime',
        dataIndex: 'StartTime',
        key: 'StartTime',
    },
    {
        title: 'EndTime',
        dataIndex: 'EndTime',
        key: 'EndTime',
    },
    {
        title: 'Duration',
        key: 'Duration',
        dataIndex: 'Duration',
    },
    {
        title: 'DurationUnit',
        key: 'DurationUnit',
        dataIndex: 'DurationUnit',
    },
];

const tableData: ITableDataType[] = [
    {
        CustomerId: '0002zr5ys29xxoexdlv',
        StartTime: '10/5/2019, 7:00:23 AM', // MM/DD/YYYY HH:MM:SS AM/PM
        EndTime: '10/5/2019, 7:10:23 AM',
        Duration: "600",
        DurationUnit: "Seconds",
    },
    {
        CustomerId: '000iulo5xvr42ixeifn',
        StartTime: '4/30/2019, 4:41:23 PM',
        EndTime: '4/30/2019, 4:47:23 PM',
        Duration: "360",
        DurationUnit: "Seconds",
    },
    {
        CustomerId: '000p0fgmtpalybplez6',
        StartTime: '8/2/2019, 8:20:10 AM',
        EndTime: '8/2/2019, 8:30:10 AM',
        Duration: "600",
        DurationUnit: "Seconds",
    },
    {
        CustomerId: '000658ytyjss3571jto',
        StartTime: '10/5/2019, 7:01:23 AM',
        EndTime: '10/5/2019, 7:06:23 AM',
        Duration: "300",
        DurationUnit: "Seconds",
    },
    {
        CustomerId: '000d12g03dkz8zq9on7',
        StartTime: '7/14/2019, 8:50:30 AM',
        EndTime: '7/14/2019, 9:00:30 AM',
        Duration: "3600",
        DurationUnit: "Seconds",
    },
    {
        CustomerId: '000u6wzhz73fdt8pkhp',
        StartTime: '5/31/2019, 7:47:25 PM',
        EndTime: '5/31/2019, 7:50:25 PM',
        Duration: "180",
        DurationUnit: "Seconds",
    },
    {
        CustomerId: '0001bqho41lm9nrwpbh',
        StartTime: '9/9/2019, 2:04:10 AM',
        EndTime: '9/9/2019, 2:11:10 AM',
        Duration: "420",
        DurationUnit: "Seconds",
    },
    {
        CustomerId: '000hgk05av43ehjdu50',
        StartTime: '3/22/2019, 2:21:32 AM',
        EndTime: '3/22/2019, 2:36:32 AM',
        Duration: "900",
        DurationUnit: "Seconds",
    },
    {
        CustomerId: '000pcescfomaj11kqzi',
        StartTime: '4/8/2019, 1:01:43 PM',
        EndTime: '4/8/2019, 1:03:43 PM',
        Duration: "120",
        DurationUnit: "Seconds",
    },
    {
        CustomerId: '000whyasaierfvkrvs0',
        StartTime: '9/12/2019, 7:21:15 AM',
        EndTime: '9/12/2019, 7:43:15 AM',
        Duration: "1320",
        DurationUnit: "Seconds",
    },
];

//Export

export interface IExportDataType {
    DisplayName: string;
    Type: string;
    Status: string;
    Refreshed: string;
    Schedule: string;
}

export const exportColumns: ColumnsType<IExportDataType> = [
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

export const exportData = [
]

export const programTierColumns: (ColumnTypes[number] & { editable?: boolean; dataIndex: string })[] = [
    {
        title: 'Level Tier',
        dataIndex: 'levelTier',
        width: '30%',
        editable: true,
    },
    {
        title: 'Description',
        dataIndex: 'description',
        editable: true,
    },
    {
        title: 'Date interval',
        dataIndex: 'dateInterval',
        editable: true,
    },
];

export const tierRuleColumns: (ColumnTypes[number] & { editable?: boolean; dataIndex: string })[] = [
    {
        title: 'Rule',
        dataIndex: 'rule',
        width: '30%',
        editable: true,
    },
    {
        title: 'Description',
        dataIndex: 'description',
        editable: true,
    },
];

export default tableData;