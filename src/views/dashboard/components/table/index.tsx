import { DashTableProps } from './index.interfaces';
import { Contents } from '../../../../models';
import './index.css';

const DashTable = (dashTableProps: DashTableProps) => {
    const { tableHeaders, users, handleAddModal, handleEraseUser } = dashTableProps;
    const { DashboardContent } = Contents;
    const { trashIcon } = DashboardContent;
    return (
        <div className="dash-table-container">
            <button onClick={handleAddModal}>Nuevo</button>
            <table className="dash-table-component">
                <thead className='dash-table-t-head'>
                    <tr>
                        {
                            tableHeaders.map((header, index) => (
                                <th key={index}>{header.title}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                        {
                            users.map((user: any, index: number): any => (
                                <tr className='h-12 text-sm text-gray-900 font-normal border-b-[1px] border-gray-100' key={index}>
                                    <td>{user.name + ' ' + user.lastName}</td>
                                    <td>{user.genre}</td>
                                    <td>{user.country}</td>
                                    <td>{user.state}</td>
                                    <td className='pr-4'>
                                        <button onClick={() => handleEraseUser(user)}>
                                            <img src={trashIcon} alt="delete" />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                </tbody>
            </table>
        </div>
    );
};

export default DashTable;