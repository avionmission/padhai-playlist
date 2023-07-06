import useSwr from 'swr'
import fetcher from '@/lib/fetcher';

const useCourse = (id?: string) => {
  const { data, error, isLoading } = useSwr(id ? `/api/courses/${id}` : null, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading
  }
};

export default useCourse;