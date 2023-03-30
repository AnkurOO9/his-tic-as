import React, { useState } from 'react'
import { Button, Modal, Select, Divider, Input } from 'antd';
import styles from './Export.module.scss';
import { PlusOutlined, FilterOutlined, SearchOutlined, RightOutlined, DownOutlined } from '@ant-design/icons';
import { IExports } from '@/constants/ListData';

interface IExport {
    isModalOpen: boolean;
    exports: IExports[];
    handleCancel: (key?: string) => void;
    openConnectionList?: () => void;
    handleSuccess: (displayName: string, type: string) => void;
}
const Export = ({ isModalOpen, exports, handleCancel, openConnectionList, handleSuccess }: IExport) => {

    const [selectedExport, setSelectedExport] = useState('');
    const [displayName, setDisplayName] = useState('');

    const onChange = (value: string) => {
        setSelectedExport(value);
    };

    const handleOnSave = () => {
        handleSuccess(displayName, selectedExport);
        setSelectedExport('');
        setDisplayName('');
    }

    return (
        <Modal title="Set up export" className={styles.exportContainer} open={isModalOpen} onCancel={() => handleCancel()}
            footer={[
                <Button disabled={!displayName || !selectedExport} key="submit" type="primary" onClick={() => handleOnSave()}>
                    Save
                </Button>,
                <Button key="back" onClick={() => handleCancel()}>Cancel</Button>
            ]}>
            <div>
                <h4>Connection</h4>
                <Select
                    className={styles.selectConnection}
                    value={selectedExport}
                    onChange={onChange}
                    options={exports}
                />
                <Button className={styles.btnConnection} type="link" icon={<PlusOutlined />} onClick={openConnectionList}>Add Connection</Button>
                {selectedExport && <>
                    <Divider />
                    <div className={styles.display}>
                        <label className={styles.label}>Display Name : </label>
                        <Input placeholder="DisplayName" value={displayName} className={styles.inputContainer} onChange={(e) => {
                            setDisplayName(e.target.value);
                        }} />
                    </div>
                    <Divider />
                    <h4>Select entities to export</h4>
                    <div className={styles.entitiesConatiner}>
                        <p>No entities selected</p>
                        <div className={styles.entitiesHeader}>
                            <Button type="text" icon={<FilterOutlined />}>Filter</Button>
                            <Input placeholder="Search" prefix={<SearchOutlined />} />
                        </div>
                    </div>
                    <div className={styles.entitiesBody}>
                        <div><DownOutlined /> <span className={styles.fwBold}>Entities</span></div>
                        <div><RightOutlined /> <span>SurveySystem (2)</span></div>
                        <div><RightOutlined /> <span>TicketingSystem (2)</span></div>
                        <div><RightOutlined /> <span>RetailSystem (8)</span></div>
                    </div>
                </>}
            </div>
        </Modal>
    )
}

export default Export