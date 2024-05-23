import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveReadBooks, saveWishlistBooks } from "../../utility/localStorage";

const BookDetails = () => {

    const books = useLoaderData();
    const { bookId } = useParams();

    const idInt = parseInt(bookId);

    const book = books.find(book => book.bookId === idInt);

    const { book_name, author, image, category, rating, tags, review, totalPages, publisher, year_of_publishing } = book;

    // Read Btn Handler
    const handleRead = () => {

        saveReadBooks(idInt);

        toast('You Have Successfully Added The Book As Read!');

        // if (!saveReadBooks(idInt)) {
        //     saveReadBooks(idInt);
        //     toast('You Have Successfully Added The Book As Read!');

        // } else if (saveReadBooks(idInt)) {
        //     toast('You Have Already Added The Book As Read!');
        // }

    }

    // Wishlist Btn Handler
    const wishList = () => {

        saveWishlistBooks(idInt);

        toast('You Have Successfully Added The Book to Wishlist!');
    }


    return (

        <div className="flex flex-col md:flex-row gap-10 mb-10">

            {/* Left Side */}
            <div className="md:w-2/5 bg-[#1313130D] p-6 md:px-20 md:py-16 rounded-xl">
                <img className="md:w-full mx-auto my-auto" src={image} alt="" />
            </div>

            {/* Right Side */}
            <div className="md:w-3/5">

                <h2 className="text-[#131313] text-2xl md:text-4xl font-bold">{book_name}</h2>

                <h4 className="text-[#131313CC] font-medium my-4">By: {author}</h4>

                <hr />

                <h3 className="text-[#131313CC] my-2 font-medium">{category}</h3>

                <hr />

                <p className="my-4"><span className="text-[#131313] font-bold">Review:</span> {review}</p>

                <div className="flex items-center justify-center md:justify-start gap-4 my-4">
                    <span className="text-[#131313] font-bold">Tags:</span>

                    <span className="bg-[#23BE0A0D] text-[#23BE0A] font-medium px-3 py-1 rounded-full">{tags[0]}</span>

                    <span className="bg-[#23BE0A0D] text-[#23BE0A] font-medium px-3 py-1 rounded-full">{tags[1]}</span>
                </div>

                <hr />

                <div className="md:w-1/2">
                    <table className="table-md">
                        <tbody>

                            <tr>
                                <td><span className="text-[#131313B3]">Number of Pages:</span></td>
                                <td><span className="text-[#131313] font-medium text-left">{totalPages}</span></td>
                            </tr>

                            <tr>
                                <td><span className="text-[#131313B3]">Publisher:</span></td>
                                <td><span className="text-[#131313] font-medium">{publisher}</span></td>
                            </tr>

                            <tr>
                                <td><span className="text-[#131313B3]">Year of Publishing:</span></td>
                                <td><span className="text-[#131313] font-medium">{year_of_publishing}</span></td>
                            </tr>

                            <tr>
                                <td><span className="text-[#131313B3]">Rating:</span></td>
                                <td><span className="text-[#131313] font-medium">{rating}</span></td>
                            </tr>
                        </tbody>

                    </table>

                </div>

                {/* Buttons */}
                <div className="flex gap-6 mt-2 justify-center md:justify-start">
                    <button onClick={handleRead}
                        className=" bg-white border-2 border-[#59C6D2] hover:bg-[#59C6D2] px-2 py-1 md:px-5 md:py-2 rounded-md md:rounded-lg text-black hover:text-white md:text-lg font-medium md:font-semibold">
                        Read
                    </button>

                    <button onClick={wishList}
                        className=" bg-[#50B1C9] hover:bg-white hover:border-2 hover:border-[#50B1C9] hover:text-black px-2 py-1 md:px-4 md:py-2 rounded-md md:rounded-lg text-white md:text-lg font-medium md:font-semibold">
                        Wishlist
                    </button>
                </div>

                {/* Toast */}
                <div>
                    <ToastContainer />
                </div>

            </div>

        </div>
    );
};

export default BookDetails;