import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Book = ({ book }) => {

    const { bookId, book_name, author, image, rating, category, tags } = book;

    return (

        <Link to={`/book/${bookId}`}>
            <div className="border border-[#13131326] rounded-xl p-6">

                <div className="bg-[#F3F3F3] rounded-xl p-6">
                    <img className="w-28 mx-auto" src={image} alt="" />
                </div>

                <div className="flex items-center gap-6 mt-6">
                    <span className="bg-[#23BE0A0D] text-[#23BE0A] font-medium px-3 py-1 rounded-full">{tags[0]}</span>

                    <span className="bg-[#23BE0A0D] text-[#23BE0A] font-medium px-3 py-1 rounded-full">{tags[1]}</span>
                </div>

                <div className="py-4 border-b-2 border-dashed">
                    <h3 className="text-[#131313] text-2xl font-bold mb-3">{book_name}</h3>

                    <h4 className="text-[#131313CC] font-medium">By: {author}</h4>
                </div>

                <div className="flex justify-between items-center text-[#131313CC] font-medium mt-4">

                    <div>
                        <h3>{category}</h3>
                    </div>

                    <div className="flex items-center gap-2">
                        <span>{rating}</span>
                        <span><FaRegStar /></span>
                    </div>
                </div>

            </div>
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.array.isRequired
};

export default Book;