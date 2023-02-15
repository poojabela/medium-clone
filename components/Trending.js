const Trending = () => {

    const trendings = ([
        {
            id: '01',
            image: "trending1.png",
            alt: "trending1",
            name: "Michael Burnett",
            blog: "The age of Agile must end",
            date: "Feb 12",
            time: "8 min read"
        },
        {
            id: '02',
            image: "trending2.png",
            alt: "trending2",
            name: "Mehmet Bektas",
            blog: "Introducing the new JupyterLab Desktop",
            date: "Feb 9",
            time: "7 min read"
        },
        {
            id: '03',
            image: "trending3.jpeg",
            alt: "trending3",
            name: "Tom Cooper",
            blog: "Ukraine War, 10 February 2023",
            date: "Feb 12",
            time: "8 min read"
        },
        {
            id: '04',
            image: "trending1.png",
            alt: "trending4",
            name: "Michael Burnett",
            blog: "The age of Agile must end",
            date: "Feb 12",
            time: "8 min read"
        },
        {
            id: '05',
            image: "trending2.png",
            alt: "trending5",
            name: "Mehmet Bektas",
            blog: "Introducing the new JupyterLab Desktop",
            date: "Feb 9",
            time: "7 min read"
        },
        {
            id: '06',
            image: "trending3.jpeg",
            alt: "trending6",
            name: "Michael Burnett",
            blog: "The age of Agile must end",
            date: "Feb 12",
            time: "8 min read"
        }
    ])

    return ( 
        <section className="p-[40px_0_16px] border-b-[1px] ">
            <div className="w-[min(490px,_100%)] mx-auto md:w-[min(800px,_100%)] 2xl:w-[min(1192px,_100%)] px-3">
                <div className="heading  mb-[16px] flex items-center gap-3">
                    <svg width="28" height="29" viewBox="0 0 28 29" fill="none" class="ih y"><path fill="#fff" d="M0 .8h28v28H0z"></path><g opacity="0.8" clip-path="url(#trending_svg__clip0)"><path fill="#fff" d="M4 4.8h20v20H4z"></path><circle cx="14" cy="14.79" r="9.5" stroke="#000"></circle><path d="M5.46 18.36l4.47-4.48M9.97 13.87l3.67 3.66M13.67 17.53l5.1-5.09M16.62 11.6h3M19.62 11.6v3" stroke="#000" stroke-linecap="round"></path></g><defs><clipPath id="trending_svg__clip0"><path fill="#fff" transform="translate(4 4.8)" d="M0 0h20v20H0z"></path></clipPath></defs></svg>
                    <h2 className="font-semibold">Trending on Medium</h2>
                </div>
                <div className="content grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 ">
                   {trendings.map((trending, i) => (
                    <div className="flex items-start mb-[24px]" key={i}>
                        <div className="mr-[16px]">
                            <span className="text-[30px] text-[#e6e6e6] font-semibold">{trending.id}</span>
                        </div>
                        <div className="box flex flex-col mt-4 gap-1">
                            <div className="name flex gap-3">
                                <img src={trending.image} alt={trending.alt} className="rounded" />
                                <h4 className="text-[12px] font-semibold">{trending.name}</h4>
                            </div>
                            <div className="blog-name">
                                <h2 className="text-[16px] font-bold">{trending.blog}</h2>
                            </div>
                            <div className="blog-time-date flex items-center gap-2 text-[#757575]">
                                <span className="text-[13px]">{trending.date}</span>
                                <span className="text-[13px] mb-2">.</span>
                                <span className="text-[13px]">{trending.time}</span>
                            </div>
                        </div>
                    </div>
                   ))} 
                </div>
            </div>
        </section>
     );
}
 
export default Trending;