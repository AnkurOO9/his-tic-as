import ExportsTable from '@/components/scenario-3/exports/ExportsTable';
import Header from '@/components/scenario-3/header/Header';
import ConnectionList from '@/components/scenario-3/modals/ConnectionList';
import Connections from '@/components/scenario-3/modals/Connections';
import Export from '@/components/scenario-3/modals/Export';
import { IExports } from '@/constants/ListData';
import { IExportDataType } from '@/constants/TableData';
import styles from '@/styles/Scenario3.module.scss';
import { useState } from 'react';

const Scenario3 = () => {

    const [isAdd, setIsAdd] = useState(false);
    const [isConnectionList, setIsConnectionList] = useState(false);
    const [isConnection, setIsConnection] = useState(false);
    const [exportData, setExportData] = useState<IExportDataType[]>([]);
    const [selectedConnection, setSelectedConnection] = useState('');
    const [exports, setExports] = useState<IExports[]>([]);

    const handleIsAdd = () => {
        setIsAdd(true);
    }
    const handleModalClose = (key?: string) => {
        if (key === 'add') {
            setIsConnectionList(true);
        } else if (key === 'connectionList') {
            setIsConnectionList(false);
        } else if (key === 'connection') {
            setIsConnection(false);
        } else {
            setIsAdd(false);
        }
    }

    const addConnection = (DisplayName: string, Type: string) => {
        setExportData([...exportData, {
            DisplayName,
            Type,
            Refreshed: '5 months ago',
            Schedule: 'System refresh',
            Status: 'Successful'
        }]);
        setIsAdd(false);
        setSelectedConnection('');
    }

    const openConnectionList = () => {
        setIsConnectionList(true);
    }

    const handleSelectedConnection = (connection: string) => {
        setSelectedConnection(connection);
        setIsConnection(true);
        setIsConnectionList(false);
    }
    const handleDisplayName = (name: string) => {
        let findConnection = exports.find((item) => item.label === selectedConnection);
        if (findConnection) {
            setExports(exports.map((item: IExports) => {
                if (item.label === selectedConnection) {
                    return { ...item, options: [...item.options, { label: name, value: name }] }
                }
                return item;
            }));
        } else {
            setExports([...exports, { label: selectedConnection, options: [{ label: name, value: name }] }]);
        }
        setIsConnection(false);
    }

    return (
        <div className={styles.scenarioThreeContainer}>
            <Header handleIsAdd={handleIsAdd} />
            <ExportsTable exportData={exportData} />
            <Export isModalOpen={isAdd} exports={exports} handleCancel={handleModalClose}
                openConnectionList={openConnectionList}
                handleSuccess={addConnection} />
            <ConnectionList isModalOpen={isConnectionList} handleCancel={handleModalClose}
                handleSuccess={handleSelectedConnection} />
            <Connections isModalOpen={isConnection} handleCancel={handleModalClose}
                handleSuccess={handleDisplayName} />
        </div>
    )
}

export default Scenario3