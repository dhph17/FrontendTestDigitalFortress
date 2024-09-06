import Ava from '../../assets/avatar-cat.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faEnvelope,
    faBell
} from '@fortawesome/free-solid-svg-icons';

import Sidebar from '../../layout/Sidebar/Sidebar';
import Table from '../../layout/Table/Table';
const Dashboard = () => {
    return (
        <div className='flex bg-custom-black box-border p-1 h-screen'>
            <Sidebar />
            <div className="w-full">
                <div className="header bg-black h-[100px] flex justify-between items-center">
                    <div className="header-search ml-16">
                        <div className="search relative">
                            <input type="text" placeholder='Search anything' className='bg-custom-black py-2 pl-9 w-[300px] text-white' />
                            <FontAwesomeIcon className="text-white absolute left-3 top-3" icon={faMagnifyingGlass} />
                        </div>
                    </div>
                    <div className='header-profile flex items-center mr-16'>
                        <FontAwesomeIcon className="text-custom-nav ml-8 " icon={faEnvelope} />
                        <FontAwesomeIcon className="text-custom-nav ml-8 " icon={faBell} />
                        <div style={{ backgroundImage: `url(${Ava})` }} className=' ml-8 w-12 h-12 bg-cover bg-center rounded-full'></div>
                    </div>
                </div>
                <div className='p-6'>
                    <p className='text-white font-bold text-2xl mb-5'>Dashboard</p>
                    <div className="table w-full">
                        <Table />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard