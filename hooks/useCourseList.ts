import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useCourseList = () => {
    const {data, error, isLoading} = useSWR('/api/courses', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    return {
        data,
        error,
        isLoading,
    }
};

export default useCourseList;