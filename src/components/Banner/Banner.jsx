
const Banner = () => {

    return (

        <div className="flex flex-col-reverse md:flex-row md:justify-around md:items-center bg-[#1313130D] mb-10 p-6 md:p-10 rounded-2xl">

            <div className="mt-4 md:mt-0 text-center md:text-left">

                <h2 className="text-[#131313] text-3xl md:text-6xl font-bold md:leading-tight">Books to freshen up <br /> your bookshelf</h2>

                <button className=" bg-[#23BE0A] hover:bg-[#188906] mt-6 px-5 py-3 rounded-lg text-white md:text-lg font-medium md:font-semibold">
                    View The List
                </button>

            </div>

            <div className="w-60 md:w-80 ps-16 md:ps-0">
                <img src="https://i.ibb.co/MgXBBt2/pngegg.png" alt="" />
            </div>

        </div>
    );
};

export default Banner;