import Image from 'next/image'
import bm from "@/public/bm.png"
import marketsize from "@/public/marketsize.png"
export default function Hero() {
    return (
        <div className=" md:px-16  flex flex-col mt-10 items-center justify-center  ">
            <div className="flex flex-col items-center justify-center md:items-start">
                <h1 className="font-sans text-5xl xl:text-7xl font-semibold text-black border-b-4 border-[#DB6440]"> The Problem:  </h1>
                <h2 className="text-xl  md:text-4xl mt-10 ">
                    In the quest for flexible workspaces, professionals encounter barriers: high costs, limited variety, and the underuse of potential venues like cafes and homes. Current solutions fail to fully harness these spaces, leaving a gap for a service that can offer diversity and convenience. Convidat addresses this by seamlessly connecting users with an array of co-working options, revolutionizing how and where we work.
                </h2>
            </div>
            <div className="flex flex-col items-center justify-center md:items-start mt-20">
                <h1 className="font-sans text-5xl xl:text-7xl font-semibold text-black border-b-4 border-[#DB6440]"> Our Solution:  </h1>
                <h2 className="text-xl  md:text-4xl mt-10 ">
                    Convidat's solution to transforming the co-working space landscape is multi-faceted, focusing on accessibility, flexibility, and community.
                </h2>
                <ul className="mt-5 list-disc text-2xl ml-6 flex flex-col gap-5">
                    <li> <b>Diverse Workspace Options:</b> Offering access to a wide range of co-working environments, including cafes, residential spaces, WeWork locations, and more, to meet various preferences and needs. </li>
                    <li> <b>Easy Booking and Management:</b> A streamlined platform that allows users to find, book, and manage workspace reservations effortlessly, with real-time updates on availability.</li>
                    <li> <b>Venue Onboarding and Utilization:</b> Enabling space providers, from cafe owners to residential landlords, to easily onboard their venues, manage bookings, and optimize space utilization with the power of AI and advanced analytics tools</li>
                    <li> <b>Community and Networking:</b> Fostering a vibrant community of professionals through Convidat, facilitating networking opportunities, events, and collaborations within the ecosystem.</li>
                    <li> <b>Event Hosting and Booking:</b> Venues can organize and list events, workshops, or meetups, with users able to sign up or book spaces for their own events, fostering a sense of community and collaboration.</li>
                    <li> <b>Customizable Venue Profiles:</b> Venue owners can now fully customize their profiles, highlighting unique amenities, photos, and special features like exclusive events or facilities like on-the-pay Wifi and food or meal booking</li>

                </ul>

            </div>
            <div className="flex flex-col mt-20">
                <Image src={marketsize} alt="marketsize" />
                <Image src={bm} alt="business model" />
            </div>
            <div className="flex flex-col items-center justify-center md:items-start">
                <h1 className="font-sans text-4xl xl:text-7xl font-semibold  border-b-4 border-[#954AB1] text-black"> Go-To-<span className=' text-[#DB6440]'>Market Strategy:</span> </h1>
                <h2 className="text-xl  md:text-4xl mt-10 ">
                    A strategic approach, combining a focused city launch, targeted startup engagement, and robust social media marketing, positions Convidat for success in the competitive co-working market. By closely aligning with the needs and preferences of our target demographics, we aim to quickly establish a loyal user base and lay the foundation for future expansion.
                </h2>
            </div>
            <div className="flex flex-col items-center justify-center md:items-start mt-20">
                <h1 className="font-sans text-5xl xl:text-7xl font-semibold text-black border-b-4 border-[#DB6440] "> Convidat's Progress Highlights: </h1>
                <ul className="mt-5 list-disc text-2xl ml-6 flex flex-col gap-5">
                    <li> <b>MVP Development: </b> We've developed a Minimum Viable Product (MVP) focused on essential features like booking, venue onboarding, and community engagement, laying the groundwork for our platform.</li>
                    <li> <b>Testing Phase:</b>  Our MVP is currently undergoing thorough testing to refine user experience and functionality, incorporating feedback from early users to ensure readiness for launch.</li>
                    <li> <b>Venue Onboarding and Utilization:</b> We're actively conducting research over diverse co-working spaces, including cafes and homes, guided by market research to select potential venues that align with our mission.</li>
                    <li> <b>Market Research: </b> Ongoing market research helps us identify expansion opportunities and tailor our services to the evolving needs of freelancers, startups, and remote workers.</li>
                    <li> <b>Event Hosting and Booking:</b> Venues can organize and list events, workshops, or meetups, with users able to sign up or book spaces for their own events, fostering a sense of community and collaboration.</li>
                    <li> <b>Customizable Venue Profiles:</b> Venue owners can now fully customize their profiles, highlighting unique amenities, photos, and special features like exclusive events or facilities like on-the-pay Wifi and food or meal booking</li>

                </ul>
            </div>
        </div>
    )
}