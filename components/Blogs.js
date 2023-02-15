import Aside from "./Aside";

const Blogs = () => {

    const blogs = ([
        {
            name: "Selam G.",
            blogName: "The Third First World",
            subHeading: "We all live on one round rock.",
            date: "Jan 24",
            time: "7 min read",
            profileImg: "selena.png",
            blogImg: "selenaBlog.jpeg"
        },
        {
            name: "Liza Donnelly",
            blogName: "Earthquake Drawing",
            subHeading: "My heart goes out to the people of Turkey and Syria",
            date: "Feb 7",
            time: "1 min read",
            profileImg: "liza.jpeg",
            blogImg: "lizaBlog.jpeg"
        },
        {
            name: "Michelle Wiles",
            blogName: "Anatomy of a good Super Bowl ad",
            subHeading: "Themes and takeaways from SB 2023",
            date: "Jan 28",
            time: "39 min read",
            profileImg: "michelle.jpeg",
            blogImg: "michBlog.jpeg"
        },
        {
            name: "Selam G.",
            blogName: "The Third First World",
            subHeading: "We all live on one round rock.",
            date: "Jan 24",
            time: "7 min read",
            profileImg: "selena.png",
            blogImg: "selenaBlog.jpeg"
        },
        {
            name: "Liza Donnelly",
            blogName: "Earthquake Drawing",
            subHeading: "My heart goes out to the people of Turkey and Syria",
            date: "Feb 7",
            time: "1 min read",
            profileImg: "liza.jpeg",
            blogImg: "lizaBlog.jpeg"
        },
        {
            name: "Michelle Wiles",
            blogName: "Anatomy of a good Super Bowl ad",
            subHeading: "Themes and takeaways from SB 2023",
            date: "Jan 28",
            time: "39 min read",
            profileImg: "michelle.jpeg",
            blogImg: "michBlog.jpeg"
        }
    ])

    return ( 
        <section className="blogs pt-[20px] md:pt-[56px]">
            <div className="flex flex-col content-center max-w-[1192px] mx-auto my-[48px] px-3 md:flex-row">
                <div className="pr-4">
                    {blogs.map((blog, i) => (
                        <div className="flex justify-between items-center w-full " key={i}>
                            <div className="content mr-[20px] w-full mb-[48px]">
                                <div className="name flex items-center gap-3 pb-[5px] md:pb-[8px]">
                                    <img src={blog.profileImg} className="rounded"/>
                                    <h4 className="text-[10px] font-semibold">{blog.name}</h4>
                                </div>
                                <div className="heading pb-[5px] md:pb-[8px]">
                                    <h2 className="text-[14px] font-bold md:[22px]">{blog.blogName}</h2>
                                </div>
                                <div className="sub-heading pb-[5px] md:pb-[8px]">
                                    <h3 className="text-[#757575] text-[16px] hidden md:block">{blog.subHeading}</h3>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="date-time flex gap-2 text-[10px] text-[#757575] md:text-[12px]">
                                        <span>{blog.date}</span>
                                        <span>.</span>
                                        <span>{blog.time}</span>
                                    </div>
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" class="mf"><path d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z" fill="#292929"></path></svg>
                                </div>
                            </div>
                            <div className="image">
                                <img src={blog.blogImg} width={200} height={200} />
                            </div>
                        </div>
                    ))}
                </div>
                <Aside />
            </div>
        </section>
     );
}
 
export default Blogs;