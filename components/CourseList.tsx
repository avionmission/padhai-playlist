import React from 'react';

import CourseCard from './CourseCard';

import { isEmpty } from 'lodash';

interface CourseListProps {
    data: Record<string, any>[];
    title: string,
}

const CourseList: React.FC<CourseListProps> = ({data, title}) => {
    
    if (isEmpty(data)) {
        return null;
    }
    
    return (
        <div className='px-4 md:px-12 mt-4 space-y-8'>
            <div>
                <p className='text-white text-md md:text-xl lg:text-2xl font-semibold mb'>
                    {title}
                </p>
                <div className='grid grid-cols-4 gap-2 mt-4'>
                    {data.map((course) => (
                        <CourseCard key={course.id} data={course}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CourseList;