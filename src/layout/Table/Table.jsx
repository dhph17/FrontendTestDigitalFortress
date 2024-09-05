import Ava from '../../assets/avatar-cat.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTrash,
    faPen
} from '@fortawesome/free-solid-svg-icons';
const Table = () => {
    return (
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
                <tr className='border-b border-slate-100'>
                    <td className='flex items-center p-2'>
                        <input type="checkbox" name="checked" id="checked" />
                        <label htmlFor="checked" className='flex'>
                            <div style={{ backgroundImage: `url(${Ava})` }} className='ml-2 mr-3 w-12 h-12 bg-cover bg-center rounded-full'></div>
                            <div>
                                <p className='font-bold'>Sisyphus</p>
                                <p className='text-custom-nav'>sisyphus.com</p>
                            </div>
                        </label>
                    </td>
                    <td className='text-custom-nav p-2'>
                        22 Jan 2022
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
                <tr className='border-b border-slate-100'>
                    <td className='flex items-center p-2'>
                        <input type="checkbox" name="checked" id="checked" />
                        <label htmlFor="checked" className='flex'>
                            <div style={{ backgroundImage: `url(${Ava})` }} className='ml-2 mr-3 w-12 h-12 bg-cover bg-center rounded-full'></div>
                            <div>
                                <p className='font-bold'>Sisyphus</p>
                                <p className='text-custom-nav'>sisyphus.com</p>
                            </div>
                        </label>
                    </td>
                    <td className='text-custom-nav p-2'>
                        22 Jan 2022
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
                <tr className='border-b border-slate-100'>
                    <td className='flex items-center p-2'>
                        <input type="checkbox" name="checked" id="checked" />
                        <label htmlFor="checked" className='flex'>
                            <div style={{ backgroundImage: `url(${Ava})` }} className='ml-2 mr-3 w-12 h-12 bg-cover bg-center rounded-full'></div>
                            <div>
                                <p className='font-bold'>Sisyphus</p>
                                <p className='text-custom-nav'>sisyphus.com</p>
                            </div>
                        </label>
                    </td>
                    <td className='text-custom-nav p-2'>
                        22 Jan 2022
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
                <tr className='border-b border-slate-100'>
                    <td className='flex items-center p-2'>
                        <input type="checkbox" name="checked" id="checked" />
                        <label htmlFor="checked" className='flex'>
                            <div style={{ backgroundImage: `url(${Ava})` }} className='ml-2 mr-3 w-12 h-12 bg-cover bg-center rounded-full'></div>
                            <div>
                                <p className='font-bold'>Sisyphus</p>
                                <p className='text-custom-nav'>sisyphus.com</p>
                            </div>
                        </label>
                    </td>
                    <td className='text-custom-nav p-2'>
                        22 Jan 2022
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
                <tr className='border-b border-slate-100'>
                    <td className='flex items-center p-2'>
                        <input type="checkbox" name="checked" id="checked" />
                        <label htmlFor="checked" className='flex'>
                            <div style={{ backgroundImage: `url(${Ava})` }} className='ml-2 mr-3 w-12 h-12 bg-cover bg-center rounded-full'></div>
                            <div>
                                <p className='font-bold'>Sisyphus</p>
                                <p className='text-custom-nav'>sisyphus.com</p>
                            </div>
                        </label>
                    </td>
                    <td className='text-custom-nav p-2'>
                        22 Jan 2022
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
                <tr className='border-b border-slate-100'>
                    <td className='flex items-center p-2'>
                        <input type="checkbox" name="checked" id="checked" />
                        <label htmlFor="checked" className='flex'>
                            <div style={{ backgroundImage: `url(${Ava})` }} className='ml-2 mr-3 w-12 h-12 bg-cover bg-center rounded-full'></div>
                            <div>
                                <p className='font-bold'>Sisyphus</p>
                                <p className='text-custom-nav'>sisyphus.com</p>
                            </div>
                        </label>
                    </td>
                    <td className='text-custom-nav p-2'>
                        22 Jan 2022
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
            </tbody>
        </table>
    )
}

export default Table