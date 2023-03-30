interface IListData {
    id: number;
    name: string;
    description: string;
}

export interface ILoyaltyProgramProps {
    selectedMember: IListData;
    isAdd: boolean;
    isEdit: boolean;
    handleOnChnage: (data: any) => void;
    handleOnSubmit: () => void;
}