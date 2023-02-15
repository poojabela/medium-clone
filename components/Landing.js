import Link from "next/link";

const Landing = () => {
    return ( 
        <section className="landing bg-primary  border-b-ternary border-b-[1px] overflow-hidden relative p-2">
            <div className="flex justify-between w-[min(490px,_100%)] mx-auto md:w-[min(800px,_100%)] 2xl:w-[min(1192px,_100%)]">
                <div className="content flex flex-col justify-center p-[93px_0_92px] max-w-[1192px] ">
                    <h2 className="text-[65px] mb-[15px] font-semibold md:text-[85px]">Stay curious.</h2>
                    <h3 className="text-[24px] leading-6 text-ternary font-medium mb-[45px] w-[min(500px,_100%)]">Discover stories, thinking, and expertise from writers on any topic.</h3>
                    <div className="">
                        <Link href="/" className="px-[70px] py-[14px] bg-secondary text-white rounded-3xl font-bold">Start reading</Link>   
                    </div>
                </div>
                <div className="banner-image w-[420px] absolute hidden md:block md:w-[585px] md:left-[920px]">
                    <img src="banner.svg" alt="bamner-image"/>
                </div>
            </div>
        </section>
     );
}
 
export default Landing;