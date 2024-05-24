import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineContactPage } from "react-icons/md";
import PropTypes from 'prop-types';


const ReadBooks = ({ books }) => {

    return (
            <div>



                {
                    books && books.length > 0 ? (
                        books.map(book => {

                            return (
                                <div key={book.id}
                                    className="flex flex-col md:flex-row md:justify-between items-center border md:px-20 md:py-6 mx-6 mt-6 rounded-lg">

                                    <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 md:gap-10">

                                        <div className="w-44 bg-[#1313130D] mt-10 md:mt-0 p-6 rounded-lg">
                                            <img className="w-full" src={book.image} alt="" />
                                        </div>

                                        <div className="px-10">
                                            <h2 className="text-[#131313] text-2xl md:text-4xl font-bold">{book.book_name}</h2>

                                            <h4 className="text-[#131313CC] font-medium my-3">By: {book.author}</h4>

                                            <div className="flex items-center justify-center md:justify-start gap-4 my-3">
                                                <span className="text-[#131313] font-bold">Tags: </span>

                                                <span className="bg-[#23BE0A0D] text-[#23BE0A] font-medium px-3 py-1 rounded-full">{book.tags[0]}</span>

                                                <span className="bg-[#23BE0A0D] text-[#23BE0A] font-medium px-3 py-1 rounded-full">{book.tags[1]}</span>

                                                <div className="flex items-center gap-2 text-[#131313CC]">
                                                    <span><IoLocationOutline /></span>
                                                    <span>Year of Publishing: {book.year_of_publishing}</span>
                                                </div>
                                            </div>

                                            {/* Publisher & Pages */}
                                            <div className="flex items-center gap-6">

                                                <div className="flex items-center gap-2 text-[#13131399]">
                                                    <span><HiOutlineUsers /></span>
                                                    <span>Publisher: {book.publisher}</span>
                                                </div>

                                                <div className="flex items-center gap-2 text-[#13131399]">
                                                    <span><MdOutlineContactPage /></span>
                                                    <span>Pages: {book.totalPages}</span>
                                                </div>
                                            </div>

                                            <hr className="my-3" />

                                            {/* Category, Ratings, Btn */}
                                            <div className="flex items-center gap-4 my-2">

                                                <div className="bg-[#328EFF26] px-4 py-2 text-[#328EFF] font-medium rounded-full">
                                                    <h4>{book.category}</h4>
                                                </div>

                                                <div className="bg-[#FFAC3326] px-4 py-2 text-[#FFAC33] font-medium rounded-full">
                                                    <h4 className="w-14 text-center">{book.rating}</h4>
                                                </div>

                                                <Link to={`/book/${book.bookId}`}>
                                                    <button className="bg-[#23BE0A] px-4 py-2 rounded-full text-white text-lg font-medium">
                                                        View Details
                                                    </button>
                                                </Link>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p>No Read Books to Display</p>
                    )
                }
            </div>
    );
};

ReadBooks.propTypes = {
    books: PropTypes.array.isRequired
};

export default ReadBooks;


