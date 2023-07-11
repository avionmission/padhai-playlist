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

const About = () => {
    const router = useRouter();

    const {data: courses = []} = useCourseList();

    return (
        <div className="flex h-full">
                <Navbar/>

                <div className="mt-24 ml-10 text-left">
                    <p className="text-2xl bold text-white">About Us</p>
                    <p className="text-md mt-3 text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, iusto deserunt. Omnis provident, facilis voluptatibus placeat vero fuga. Voluptatibus dolorem magnam magni repudiandae fugit enim ducimus explicabo minima corporis commodi!</p>
                </div>
        </div>
    )
}

export default About;