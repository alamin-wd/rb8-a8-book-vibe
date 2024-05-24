// Read Btn
// Get Stored Read Books

const getStoredReadBooks = () => {
    const storedReadBook = localStorage.getItem('read-books');

    if (storedReadBook) {
        return JSON.parse(storedReadBook);
    }
    return [];
}

// Save the Read Book
const saveReadBooks = id => {
    const storedReadBooks = getStoredReadBooks();

    const exists = storedReadBooks.find(bookId => bookId === id);

    if (!exists) {
        storedReadBooks.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedReadBooks));

        return true;
    }
    else {
        return false;
    }
}
// Check if a book is in the Read list
const isReadBook = id => {
    const storedReadBooks = getStoredReadBooks();
    return storedReadBooks.includes(id);
}

export { getStoredReadBooks, saveReadBooks, isReadBook };

// Wishlist Btn
// Get Wishlist Books

const getStoredWishlistBooks = () => {
    const storedWishlistBook = localStorage.getItem('wishlist-books');

    if (storedWishlistBook) {
        return JSON.parse(storedWishlistBook);
    }
    return [];
}

// Set the Wishlist Book

const saveWishlistBooks = id => {
    const storedWishlistBooks = getStoredWishlistBooks();

    const exists = storedWishlistBooks.find(bookId => bookId === id);

    if (!exists) {
        storedWishlistBooks.push(id);
        localStorage.setItem('wishlist-books', JSON.stringify(storedWishlistBooks));

        return true;
    }
    else{
        return false;
    }
}

// Check if a book is in the Wishlist list
const isWishlistBook = id =>{
    const storedWishlistBooks = getStoredWishlistBooks();

    return storedWishlistBooks.includes(id);
}

export { getStoredWishlistBooks, saveWishlistBooks, isWishlistBook };