
// import { useEffect } from 'react';
// import { useLoaderData } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getStoredReadBooks } from '../../utility/localStorage';
// import { getStoredReadBooks } from '../../utility/localStorage';


const data = [
    { name: 'January', pages: 65 },
    { name: 'February', pages: 59 },
    { name: 'March', pages: 80 },
    { name: 'April', pages: 81 },
    { name: 'May', pages: 56 },
];

const PagesToRead = () => {
    const [books, setBooks] = useState([]);
    const [readLists, setReadLists] = useState([]);

    useEffect(() => {
        fetch('/books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    useEffect(() => {
        if (books.length > 0) {
            const storedReadListIds = getStoredReadBooks();

            const readLists = books.filter(book => storedReadListIds.includes(book.bookId));

            setReadLists(readLists);

        }
    }, [books]);

    return (

        <div className='w-9/12 mx-auto'>

            {
                readLists.map(readList => <div key={readList.id}>
                </div>)
            }

            <ResponsiveContainer width="100%" height={600}>

                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>

                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pages" fill="#8884d8" />

                </BarChart>

            </ResponsiveContainer>

        </div>
    );
};

export default PagesToRead;