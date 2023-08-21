import { DashTableProps } from './index.interfaces';
import './index.css';

const DashTable = (dashTableProps: DashTableProps) => {
    const { tableHeaders, users, handleAddModal } = dashTableProps;
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
                                    <td>c</td>
                                </tr>
                            ))
                        }
                </tbody>
            </table>
        </div>
    );
};

export default DashTable;