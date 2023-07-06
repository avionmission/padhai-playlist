import { NextPageContext } from 'next'
import {getSession,signOut} from 'next-auth/react'

import Navbar from '@/components/Navbar';

import Billboard from '@/components/Billboard';

import CourseList from '@/components/CourseList';

import useCourseList from '@/hooks/useCourseList';
import userFavorites from '@/hooks/useFavorites';

export async function getServerSideProps(context:NextPageContext) {
  const session = await getSession(context);

  if(!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {
  const { data: courses = [] } = useCourseList();
  const { data: favorites = [] } = userFavorites();

  return (
    <>
      <Navbar />
      <Billboard />
      <div className='pb-40'>
        <CourseList title='Trending Now' data={courses}/>
        <CourseList title='My List' data={favorites}/>  
      </div>
      
    </>
  )
}
