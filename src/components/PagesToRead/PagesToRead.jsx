
import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getStoredReadBooks } from '../../utility/localStorage';


const PagesToRead = () => {
    const [books, setBooks] = useState([]);
    const [readLists, setReadLists] = useState([]);
    const [chartData, setChartData] = useState([]);

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

    useEffect(() => {
        if (readLists.length > 0) {

            const chartData = readLists.map(book => ({

                name: book.book_name,
                pages: book.totalPages,
            }));

            setChartData(chartData);
        }

    }, [readLists]);

    return (

        <div className='w-9/12 mx-auto'>

            <ResponsiveContainer width="100%" height={500}>

                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>

                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" fill='#59C6D2' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pages" fill="#23BE0A" />

                </BarChart>

            </ResponsiveContainer>

        </div>
    );
};

export default PagesToRead;