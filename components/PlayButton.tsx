import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { useRouter } from 'next/router';

interface PlayButtonProps {
    courseId: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({courseId}) => {
    const router = useRouter();

    return (
        <button 
            onClick={() => router.push(`/watch/${courseId}`)}
            className='
            bg-white
            rounded-md
            py-3 md:py-2
            px-2 md:px-4
            w-auto
            text-xs lg:text-lg
            font-semibold
            flex
            flex-row
            items-center
            hover:bg-neutral-300
            transition
            '>
            <BsFillPlayFill size={25} className='mr-1'/>
            Play
        </button>
    )
};

export default PlayButton; 