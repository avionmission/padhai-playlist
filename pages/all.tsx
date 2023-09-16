import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import CourseList from "@/components/CourseList";
import useCourseList from "@/hooks/useCourseList";

export async function getServerSideProps(context:NextPageContext) {
    const session = await getSession(context)

    if (!session) {
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

const AllCourses = () => {
    const router = useRouter();

    const {data: courses = []} = useCourseList();

    return (
        <div className="flex h-full justify-center">
                <Navbar/>

                <div className="mt-[6.5vw]">
                    <CourseList title='All Courses' data={courses}/>
                </div>
                
        </div>
    )
}

export default AllCourses;