export interface Item {
    key: string;
    rule: string;
    description: string;
    tierId: number;
    memberId: number;
}
export interface DataType {
    key: React.Key;
    rule: string;
    description: string;
    tierId: number;
    memberId: number;
}
export interface EditableRowProps {
    index: number;
}
export interface EditableCellProps {
    title: React.ReactNode;
    editable: boolean;
    children: React.ReactNode;
    dataIndex: keyof Item;
    record: Item;
    handleSave: (record: Item) => void;
}

export type TablePaginationPosition =
    | 'topLeft'
    | 'topCenter'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomCenter'
    | 'bottomRight';

export type propsType = {
    title: string
    tierId: number
    memberId: number
}