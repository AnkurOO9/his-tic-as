interface IListData {
    id: number;
    name: string;
    description: string;
}
export interface ISubSidebarProps {
    memberList: IListData[];
    selectedMember: IListData,
    handleSelectedMember: (item: IListData) => void;
}