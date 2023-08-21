import { Contents, State } from '../../../../models';

export interface DashTableProps {
    tableHeaders: Contents.TableHeadersProps[];
    users: State.UserProps[]
    handleAddModal: () => void;
    handleEraseUser: (user: State.UserProps) => void;
}