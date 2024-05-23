import { useEffect, useState } from "react";
import Book from "../Book/Book";
 
const Books = () => {

    const [books, setBooks] = useState([]);
    const [dataLength, setDataLength] = useState([6]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])

    return (

        <div>
            <h2 className="text-[#131313] text-3xl md:text-5xl font-bold text-center my-6 md:my-10" >
                Books
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {
                    books.slice(0, dataLength).map(book => <Book
                        key={book.id}
                        book={book}
                    ></Book>)
                }
            </div>

            <div className="my-10 text-center">
                <div className={dataLength === books.length && "hidden"}>

                    <button onClick={() => setDataLength(books.length)}
                        className="bg-[#23BE0A] hover:bg-[#188906] px-4 py-3 rounded-lg text-white text-lg font-semibold">
                        Show All Books
                    </button>

                </div>
            </div>

        </div>
    );
};

export default Books;