import { useState } from 'react';

import Ava from '../../assets/avatar-cat.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTrash,
    faPen
} from '@fortawesome/free-solid-svg-icons';
import ReactPaginate from 'react-paginate';

import './styles.scss'
const Table = () => {

    const dataLists = [
        { id: 1, name: 'Sisyphus', url: 'sisyphus.com', lastAssessed: '22 Jan 2022' },
        { id: 2, name: 'Sisyphus', url: 'sisyphus.com', lastAssessed: '22 Jan 2022' },
        { id: 3, name: 'Sisyphus', url: 'sisyphus.com', lastAssessed: '22 Jan 2022' },
        { id: 4, name: 'Sisyphus', url: 'sisyphus.com', lastAssessed: '22 Jan 2022' },
        { id: 5, name: 'Sisyphus', url: 'sisyphus.com', lastAssessed: '22 Jan 2022' },
        { id: 6, name: 'Sisyphus', url: 'sisyphus.com', lastAssessed: '22 Jan 2022' },
        { id: 7, name: 'Sisyphus', url: 'sisyphus.com', lastAssessed: '22 Jan 2022' }
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3;

    const offset = currentPage * itemsPerPage;
    const currentData = dataLists.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(dataLists.length / itemsPerPage);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    return (
        <>
            <table className='text-white w-full'>
                <thead>
                    <tr className='border-b border-slate-100'>
                        <th className='text-left p-2'>
                            <input type="checkbox" name="project" id="" />
                            <label htmlFor="project">Project</label>
                        </th>
                        <th className='text-left p-2'>Last assessed</th>
                        <th className='text-left p-2'>License use</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((item) => (
                        <tr key={item.id} className='border-b border-slate-100'>
                            <td className='flex items-center p-2'>
                                <input type="checkbox" name="checked" id="checked" />
                                <label htmlFor="checked" className='flex'>
                                    <div style={{ backgroundImage: `url(${Ava})` }} className='ml-2 mr-3 w-12 h-12 bg-cover bg-center rounded-full'></div>
                                    <div>
                                        <p className='font-bold'>{item.name}</p>
                                        <p className='text-custom-nav'>{item.url}</p>
                                    </div>
                                </label>
                            </td>
                            <td className='text-custom-nav p-2'>
                                {item.lastAssessed}
                            </td>
                            <td className='flex justify-between p-2'>
                                <div className="license flex">
                                    <div className='bg-custom-active px-2 py-1 mr-2 rounded-xl'>
                                        <p className='text-custom-active'>Active</p>
                                    </div>
                                    <div className="bg-custom-customer px-2 py-1 mr-2 rounded-xl">
                                        <p className='text-custom-customer'>Customer data</p>
                                    </div>
                                    <div className="bg-custom-admin px-2 py-1 mr-2 rounded-xl">
                                        <p className='text-custom-admin'>Admin</p>
                                    </div>
                                </div>
                                <div className="function">
                                    <FontAwesomeIcon className="ml-7" icon={faTrash} />
                                    <FontAwesomeIcon className="ml-7" icon={faPen} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination flex justify-center mt-4">
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName={"flex space-x-4"}
                    previousLinkClassName={"px-3 py-1 bg-gray-700 text-white rounded"}
                    nextLinkClassName={"px-3 py-1 bg-gray-700 text-white rounded"}
                    disabledClassName={"opacity-50 cursor-not-allowed"}
                    activeClassName={"active"}
                    pageLinkClassName={"item-pagination"}
                />
            </div>
        </>



    )
}

export default Table