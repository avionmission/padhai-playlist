import { useRouter } from 'next/router';
import React from 'react';

interface MobileMenuProp {
    visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProp> = ({visible}) => {
    if (!visible) {
        return null;
    }

    const router = useRouter();

    return (
        <div className='bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex'>
            <div className="flex flex-col gap-4">
                <div className="px-3 text-center text-white hover:underline" onClick={() => {router.push('/')}}>
                    Home
                </div>
                <div className="px-3 text-center text-white hover:underline" onClick={() => {router.push('/all')}}>
                    Courses
                </div>
                <div className="px-3 text-center text-white hover:underline" onClick={() => {router.push('/about')}}>
                    About Us
                </div>
            </div>
        </div>
    )
};

export default MobileMenu;