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
    }
}

export { getStoredReadBooks, saveReadBooks };

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
    }
}

export { getStoredWishlistBooks, saveWishlistBooks };