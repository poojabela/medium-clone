const Aside = () => {

    const topics = ["Programming", "Data Science", "Technology", "Self Improvement", "Writing",  "Relationships", "Machine Learning", "Productivity", "Politics"];

    return ( 
        <aside className="hidden md:block">
            <div className="sticky top-[107px]">
                <div className="top pb-[24px] border-b-[1px]">
                    <h2 className="text-[16px] font-semibold">Discover more of what matters to you</h2>
                    <div className="grid grid-cols-2 gap-2 mt-3 xl:grid-cols-3">
                        {topics.map((topic, i) => (
                            <div className="p-[5px] border-[1px] text-center " key={i}>
                                <p className="text-[13px] text-[#757575]">{topic}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bottom pt-6 text-[#757575] text-[13px] font-semibold">
                    <ul className="flex justify-between flex-wrap ">
                        <li><a href="/">Help</a></li>
                        <li><a href="/">Status</a></li>
                        <li><a href="/">Writers</a></li>
                        <li><a href="/">BLog</a></li>
                        <li><a href="/">Careers</a></li>
                    </ul>

                    <ul className="flex gap-6 pt-2">
                    <li><a href="/">About</a></li>
                        <li><a href="/">Text to speech</a></li>
                    </ul>
                </div>
            </div>
        </aside>
     );
}
 
export default Aside;