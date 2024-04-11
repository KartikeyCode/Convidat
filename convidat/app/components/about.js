export default function About(){
    return(
        <div className="min-h-[32rem] bg-white font-Inter justify-between items-center flex flex-col md:flex-row px-4 py-4 xl:px-16 xl:py-8 2xl:px-28 2xl:py-16">
                <div className="flex flex-col 2xl:w-[40rem] md:w-[32rem]">
                <h1 className="text-black text-4xl mb-5 font-semibold border-b-2 border-[#F66E1A] w-56"> ABOUT US </h1>
                <h2 className="text-black lg:text-xl xl:text-2xl  "> Convidat transforms co-working by connecting freelancers, startups, and remote workers with diverse workspaces, including cafes, homes, and co-working brands like WeWork. Leveraging underused spaces, it offers flexible solutions and helps venue owners optimize their potential. Features like easy booking, availability tracking, and a focus on community collaboration position Convidat as a future leader in workspace innovation. </h2>
                </div>
                <div className="image">
                    <img className="rounded-md lg:w-[35rem] xl:w-[60rem]" src="/coworking.jpg" />
                </div>
        </div>
    )
}