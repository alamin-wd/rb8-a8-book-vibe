
import { useEffect, useState } from "react";
import { getStoredReadBooks, getStoredWishlistBooks } from "../../utility/localStorage";
import ReadBooks from "../ReadBooks/ReadBooks";
import WishlistBooks from "../WishlistBooks/WishlistBooks";


const ListedBooks = () => {

    const [books, setBooks] = useState([]);

    const [readBooks, setReadBooks] = useState([]);

    const [wishlistBooks, setWishlistBooks] = useState([]);

    // const handleFilterBooks = filter => {

    //     if(filter === 'all'){
    //         setDisplayJobs(appliedJobs);
    //     }
    //     else if(filter === 'remote'){
    //         const remoteJobs = appliedJobs.filter(appliedJob => appliedJob.remote_or_onsite === 'Remote');

    //         setDisplayJobs(remoteJobs);
    //     }
    //     else if(filter === 'onsite'){
    //         const onsiteJobs = appliedJobs.filter(appliedJob => appliedJob.remote_or_onsite === 'Onsite');

    //         setDisplayJobs(onsiteJobs);
    //     }

    // }


    useEffect(() => {
        fetch('/books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
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

            {/* Read Books & Wishlist Books Tab */}

            <div role="tablist" className="tabs-sm md:tabs tabs-lifted">

                <input type="radio" name="my_tabs_2" role="tab" className="tab text-[#131313CC] text-lg font-medium" aria-label="Read Books " checked />

                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-xl ">
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
