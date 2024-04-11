export default function Hero(){
    return(
        <div className="min-h-screen bg-[#D7D7D7] w-full flex-col md:flex-row items-center pt-6 md:pt-0 lg:px-8 lg:py-8 xl:px-28 xl:py-28 flex relative">
            <img src="/heroimage.png" className="absolute hidden md:block lg:h-[32rem] xl:w-auto lg:right-36 2xl:top-20 2xl:right-52 z-0" />
            <div className="bg-white flex flex-col font-Inter border-[1px] px-7 py-3 z-0 border-black w-[23rem] h-[40rem] md:w-[31.9rem] md:h-[27rem] xl:h-[28.6rem] xl:w-[30rem] 2xl:h-[30rem] 2xl:w-[50rem]">
                <h1 className="text-5xl p-2"> Create. Process. Seize. </h1>
                <h2 className="text-sm 2xl:text-2xl mt-4"> From shared workspaces, private offices, event spaces and virtual offices, we create an atmosphere that promotes productivity in a collaborative environment. </h2>
                <div className="flex flex-col mt-8">
                    <h3 className="font-Inter text-black font-semibold text-base"> Where do you need your workspace? </h3>
                    <select className="border-2 border-black font-Inter px-4 py-2 text-black">
                        <option value="location1">Location 1</option>
                        <option value="location2">Location 2</option>
                        <option value="location3">Location 3</option>
                    </select>
                </div>
                <div className=" mt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-col">
                    <h3 className="font-Inter text-black font-semibold text-base">Number of seats? </h3>
                    <select className="border-2 w-56 border-black font-Inter px-4 py-2 text-black">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    </div>
                    <button className="w-36 h-14 mt-10 md:mt-4 hover:scale-110 transition-all rounded-sm p-2 bg-[#F66E1A] text-white ">
                        GET STARTED
                    </button>
                </div>
            </div>
        </div>
    )
}
