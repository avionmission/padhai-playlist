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

                <div className="mt-[6.5vw] ml-5 mr-5 text-left">
                    <p className="text-2xl text-yellow-500">About Us</p>
                    <div className="text-md mt-3 text-white">
                        
                    <p>Welcome to PadhaiPlaylist, the premier online video course management platform designed to revolutionize the way you learn and organize educational content.</p>
                    <br />
                    <p>At PadhaiPlaylist, we understand the importance of efficient and personalized learning experiences. We believe that education should be accessible, engaging, and tailored to individual needs. With this vision in mind, we have created a user-friendly platform that empowers learners to take control of their educational journey.</p>
                    <br />
                    <p>Our platform offers a range of features and functionalities that make learning a seamless and enjoyable process. Curate your own personalized playlists by handpicking courses, tutorials, and videos from various sources. Whether you're interested in academic subjects, professional skills, or personal growth, PadhaiPlaylist provides a diverse library of content to choose from.</p>
                    <br />
                    <p>We have seamlessly integrated with top video hosting platforms, allowing you to consolidate your favorite courses and videos in one convenient location. Say goodbye to scattered bookmarks and endless searching. With PadhaiPlaylist, your curated content is just a few clicks away.</p>
                    <br />
                    <p>Track your progress, take notes, and collaborate with other learners through our interactive features. Stay organized, motivated, and engaged with your learning journey. Our progress tracking tool helps you monitor your achievements and stay on top of your learning goals. Take notes directly within the platform to consolidate key concepts and ideas. Engage with a community of learners through our discussion forums, share insights, and gain valuable perspectives.</p>
                    <br />
                    <p>At PadhaiPlaylist, accessibility is a priority. Our platform is designed to work seamlessly across devices, allowing you to learn whenever and wherever suits you best. Switch between your laptop, tablet, or smartphone without missing a beat. Learning should be flexible, and we're here to ensure you have the freedom to learn on your terms.</p>
                    <br />
                    <p>We are committed to providing an exceptional learning experience and continuous improvement. Our dedicated team works tirelessly to enhance the platform, expand the content library, and implement new features based on user feedback and emerging trends. We strive to stay at the forefront of online education, offering you the best tools and resources for your learning journey.</p>
                    <br />
                    <p>Join us at PadhaiPlaylist and embark on a personalized, organized, and collaborative learning experience. Unlock your potential, expand your knowledge horizons, and discover the joy of education at your fingertips. Start curating your own learning playlists today and see the difference PadhaiPlaylist can make in your educational pursuits.</p>
                    <br />
                    <p>We are excited to have you on this journey with us. Together, let's embrace the power of learning and create a brighter future through knowledge.</p>
                    <br />
                    <p>Happy learning!</p>
                    <br />
                    <p>The PadhaiPlaylist Team</p>

                    </div>
                </div>
        </div>
    )
}

export default About;