import { Contents, State } from '../../../../models';

export interface DashTableProps {
    tableHeaders: Contents.TableHeadersProps[];
    users: State.UserProps[]
    handleAddModal: () => void;
}