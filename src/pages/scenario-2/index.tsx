import Header from '@/components/scenario-2/header/Header';
import LoyaltyPrograms from '@/components/scenario-2/lotyalty-programs/LoyaltyPrograms';
import SubMenu from '@/components/scenario-2/sub-menu/SubMenu';
import SubSidebar from '@/components/scenario-2/sub-sidebar/SubSidebar';
import { ListData } from '@/constants/ListData';
import styles from '@/styles/Scenario2.module.scss';
import { useState } from 'react';

interface IListData {
    id: number;
    name: string;
    description: string;
}

const Scenario2 = () => {

    const [selectedMember, setSelectedMember] = useState<IListData>(ListData[0]);
    const [isEdit, setIsEdit] = useState(false);
    const [isAdd, setIsAdd] = useState(false);
    const [memberList, setMemberList] = useState(ListData);

    const addNewMember = () => {
        setIsAdd(true);
        setSelectedMember({ id: 0, name: '', description: '' });
        setIsEdit(false);
    }

    const deleteMember = () => {
        setMemberList(memberList.filter((item: IListData) => item.id !== selectedMember.id));
        setSelectedMember({ id: 0, name: '', description: '' });
    }

    const handleSelectedMember = (member: IListData) => {
        if (isAdd) {
            setIsAdd(false);
        }
        setSelectedMember(member);
    }

    const handleOnChnage = (event: any) => {
        setSelectedMember({
            ...selectedMember,
            [event.name]: event.value
        });
    }

    const handleOnSubmit = () => {
        if (selectedMember && selectedMember?.id) {
            setMemberList(memberList.map((item) => {
                if (item.id === selectedMember?.id) {
                    return selectedMember
                }
                return item;
            }));
        } else {
            setMemberList([...memberList, { ...selectedMember, id: memberList.length + 1 }]);
        }
        setSelectedMember({ id: 0, name: '', description: '' });
        setIsEdit(false);
        setIsAdd(false);
    }

    return (
        <div className={styles.scenarioTwoContainer}>
            <Header
                selectedMember={selectedMember}
                handleIsEdit={() => setIsEdit(true)}
                addNewMember={addNewMember}
                deleteMember={deleteMember} />
            <div className={styles.scenarioTwoBody}>
                <SubMenu />
                <SubSidebar
                    selectedMember={selectedMember}
                    memberList={memberList}
                    handleSelectedMember={handleSelectedMember} />
                <LoyaltyPrograms
                    selectedMember={selectedMember}
                    isAdd={isAdd}
                    isEdit={isEdit}
                    handleOnChnage={handleOnChnage}
                    handleOnSubmit={handleOnSubmit}
                />
            </div>
        </div>
    )
}

export default Scenario2