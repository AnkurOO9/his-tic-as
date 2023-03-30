import { tierRuleColumns } from '@/constants/TableData';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import { Button, Card, Form, Input, Table } from 'antd';
import type { FormInstance } from 'antd/es/form';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Confirmation from '../confirmation/Confirmation';
import { DataType, EditableCellProps, EditableRowProps, propsType, TablePaginationPosition } from './TierRules.interface';
import styles from './TierRules.module.scss';

const EditableContext = React.createContext<FormInstance<any> | null>(null);

const TierRules = (props: propsType) => {
    const { title, tierId, memberId } = props;
    const [dataSource, setDataSource] = useState<DataType[]>([]);
    const [count, setCount] = useState(0);
    const [selectedRow, setSelectedRow] = useState<any>();
    const [filteredData, setFilteredData] = useState<DataType[]>([]);
    const top: TablePaginationPosition | 'none' = 'none';
    const bottom: TablePaginationPosition | 'none' = 'none';
    const [isDelete, setIsDelete] = useState(false);

    useEffect(() => {
        const filter = dataSource.filter((item) => item.tierId === tierId && item.memberId === memberId)
        setFilteredData(filter);
    }, [tierId, dataSource, memberId]);

    const EditableCell: React.FC<EditableCellProps> = ({
        title,
        editable,
        children,
        dataIndex,
        record,
        handleSave,
        ...restProps
    }) => {
        const [editing, setEditing] = useState(false);
        const inputRef = useRef<InputRef>(null);
        const form = useContext(EditableContext)!;

        useEffect(() => {
            if (editing) {
                inputRef.current!.focus();
            }
        }, [editing]);

        const toggleEdit = () => {
            setEditing(!editing);
            form.setFieldsValue({ [dataIndex]: record[dataIndex] });
        };

        const save = async () => {
            try {
                const values = await form.validateFields();
                toggleEdit();
                handleSave({ ...record, ...values });
            } catch (errInfo) {
                console.log('Save failed:', errInfo);
            }
        };

        let childNode = children;

        if (editable) {
            childNode = editing ? (
                <Form.Item
                    className='m-0'
                    name={dataIndex}
                    rules={[
                        {
                            required: true,
                            message: `${title} is required.`,
                        },
                    ]}
                >
                    <Input ref={inputRef} onPressEnter={save} onBlur={save} />
                </Form.Item>
            ) : (
                <div className={styles.editableCellValueWrap} onClick={toggleEdit}>
                    {children}
                </div>
            );
        }

        return <td {...restProps}>{childNode}</td>;
    };

    const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
        const [form] = Form.useForm();
        return (
            <Form form={form} component={false}>
                <EditableContext.Provider value={form}>
                    <tr {...props} />
                </EditableContext.Provider>
            </Form>
        );
    };

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            setSelectedRow(selectedRows[0]);
        }
    };

    const handleDelete = () => {
        const newData = dataSource.filter((item) => {
            return item?.key !== selectedRow?.key
        })
        setDataSource(newData);
        setSelectedRow('');
    };

    const handleAdd = () => {
        let ruleId = dataSource.filter((item) => item.tierId === tierId).length;
        const newData: DataType = {
            key: count,
            rule: `Rule ${ruleId}`,
            tierId: tierId,
            memberId: memberId,
            description: 'Description',
        };
        setDataSource([...dataSource, newData]);
        setCount(count + 1);
    };

    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };

    const handleSave = (row: DataType) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => row?.key === item?.key);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        setDataSource(newData);
    };

    const columns = tierRuleColumns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: DataType) => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave,
            }),
        };
    });

    return (
        <>
            <Card className={styles.tierRulesContainer} title={title}>
                <div className={styles.tableHeader}>
                    <Button type="text" disabled={tierId === undefined} onClick={handleAdd} icon={<PlusOutlined className='pColor' />}>Add Rule</Button>
                    <Button type="text" danger disabled={!selectedRow} onClick={() => setIsDelete(true)} icon={<DeleteOutlined />}>Remove</Button>
                </div>
                <Table
                    rowSelection={{
                        type: 'radio',
                        ...rowSelection,
                    }}
                    pagination={{ position: [top as TablePaginationPosition, bottom as TablePaginationPosition] }}
                    components={components}
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={filteredData}
                    columns={columns as any}
                />
            </Card>
            <Confirmation title="Rule" name={selectedRow?.rule} isModalOpen={isDelete} handleOk={() => {
                setIsDelete(false);
                handleDelete();
            }} handleCancel={() => { setIsDelete(false) }} />
        </>
    )
}

export default TierRules;