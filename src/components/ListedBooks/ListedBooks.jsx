import { FaChevronDown } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { getStoredReadBooks, getStoredWishlistBooks } from "../../utility/localStorage";
import ReadBooks from "../ReadBooks/ReadBooks";
import WishlistBooks from "../WishlistBooks/WishlistBooks";

const ListedBooks = () => {

    const [books, setBooks] = useState([]);
    const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);


    useEffect(() => {
        fetch('/books.json')
            .then(res => res.json())
            .then(data => { setBooks(data) });
    }, []);

    useEffect(() => {
        if (books.length > 0) {
            const storedReadBookIds = getStoredReadBooks();
            const storedWishlistBookIds = getStoredWishlistBooks();

            const readBooks = books.filter(book => storedReadBookIds.includes(book.bookId));

            const wishlistBooks = books.filter(book => storedWishlistBookIds.includes(book.bookId));

            setReadBooks(readBooks);
            setWishlistBooks(wishlistBooks);
        }
    }, [books]);

    return (

        <div>
            <div className="bg-[#1313130D] rounded-xl py-6 md:py-10 text-center">
                <h2 className="text-[#131313] text-2xl md:text-4xl font-bold">My Listed Books { }</h2>
            </div>

            <div className="my-6 text-center">
                <details className="dropdown ">
                    <summary className="m-1 btn bg-[#23BE0A] hover:bg-[#59C6D2] text-white">Sort By <FaChevronDown /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-lg w-40">
                        <li><a>All</a></li>
                        <li><a>Rating</a></li>
                        <li><a>Number of Pages</a></li>
                        <li><a>Published year</a></li>
                        {/* <li onClick={() => handleFilterJobs('onsite')}><a>Onsite</a></li> */}
                    </ul>
                </details>
            </div>

            {/* Read Books & Wishlist Books Tab */}

            <div role="tablist" className="tabs tabs-lifted">

                <input type="radio" name="my_tabs_2" role="tab" className="tab text-[#131313CC] text-lg font-medium" aria-label="Read Books " checked />

                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-xl p-6">
                    {
                        <ReadBooks books={readBooks}></ReadBooks>
                    }
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab text-[#131313CC] text-lg font-medium" aria-label="Wishlist Books" />

                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-xl p-6">
                    {
                        <WishlistBooks books={wishlistBooks}></WishlistBooks>
                    }
                </div>

            </div>

        </div>


    );
};

export default ListedBooks;
