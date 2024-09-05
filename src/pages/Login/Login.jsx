import { useNavigate } from 'react-router-dom'

import Cat from "../../assets/cat.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faLock
} from '@fortawesome/free-solid-svg-icons';
const Login = () => {
    let navigate = useNavigate();

    const handleLoginClick = (event) => {
        event.preventDefault();
        navigate('/dashboard');
    };
    return (
        <div className='flex'>
            <div className="w-1/2 bg-black text-white h-dvh flex flex-col justify-center items-center">
                <h1 className="text-4xl mb-2">Hello <span className="font-bold">Digital Fortress</span></h1>
                <p className="mb-16 text-gray-400">Log in to platform to start creating magic.</p>
                <div className="form w-3/5" >
                    <form onSubmit={handleLoginClick}>
                        <div className="form-email w-full relative mb-3 p-[1px] bg-gradient-to-r from-[#82DBF7] to-[#B6F09C] bg-custom-black rounded-md">
                            <input required type="email" placeholder="Email" className="w-full px-9 py-2 bg-black border-none rounded-md text-white focus:outline-none" />
                            <FontAwesomeIcon icon={faEnvelope} className='absolute top-3 left-3  ' />
                        </div>
                        <div className="form-password w-full relative mb-3 p-[1px] bg-gradient-to-r from-[#82DBF7] to-[#B6F09C] bg-custom-black ounded-md">
                            <input required type="password" placeholder="Password" className="w-full px-9 py-2 bg-black border-none rounded-md text-white focus:outline-none" />
                            <FontAwesomeIcon icon={faLock} className='absolute top-3 left-3  ' />

                        </div>
                        <div className="form-remember-forgot flex justify-between mb-5">
                            <div className="form-forgot flex items-center">
                                <input type="checkbox" name="Remember" id="" value="Remember me" />
                                <label htmlFor="Remember" className='ml-1'>Remember me</label>
                            </div>
                            <p className='text-transparent bg-clip-text bg-[linear-gradient(45deg,#82DBF7,#B6F09C)]'>
                                Forgot Password
                            </p>
                        </div>
                        <div className="form-button mb-2">
                            <input type="submit" value="Log in" className="w-full text-black bg-custom-green py-1 rounded-md" />
                        </div>
                        <div className="form-sign-up text-center">
                            <p>Don&apos;t have an account? <span className='text-transparent bg-clip-text bg-[linear-gradient(45deg,#82DBF7,#B6F09C)]'>Sign up</span></p>
                        </div>
                    </form>
                </div>

            </div>
            <div style={{ backgroundImage: `url(${Cat})` }} className="w-1/2 h-dvh bg-cover bg-center pt-[300px] pr-[100px] pl-[50px]">
                <div className="text-3xl text-white font-semibold mb-5">
                    Digital Fortress has been a game-changer for our content creation process.
                </div>
                <div className="text-3xl text-white font-semibold">
                    The AI-powered tools are incredibly user-friendly and have saved us countless hours of work.
                </div>
                <div className="mt-16">
                    <p className="text-white">Lily Allison</p>
                    <p className="text-custom-green">CMO at Digital Fortress</p>
                </div>
            </div>
        </div >
    )
}

export default Login