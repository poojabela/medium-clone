const Discover = () => {

    const topics = ["Programming", "Data Science", "Technology", "Self Improvement", "Writing",  "Relationships", "Machine Learning", "Productivity", "Politics"];


    return ( 
        <div className="top py-[24px] text-center w-[min(490px,_100%)] mx-auto md:w-[min(800px,_100%)] 2xl:w-[min(1192px,_100%)] border-b-[1px] block md:hidden px-3">
            <h2 className="text-[16px] font-semibold">Discover more of what matters to you</h2>
            <div className="grid grid-cols-3 gap-2 mt-3">
                {topics.map((topic, i) => (
                    <div className="p-[5px] border-[1px] text-center " key={i}>
                        <p className="text-[13px] text-[#757575]">{topic}</p>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Discover;