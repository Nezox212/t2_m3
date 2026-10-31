export const books_API = 'https://6ae33f0c933120ae20f88528.mockapi.io/books';

const request = async (url, method = 'GET', body) => {
    const options = { method };

    if (body !== undefined) {
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);

    if (!response.ok) {
        const error = new Error(`Ошибка ${response.status}`);
        error.status = response.status;
        throw error;
    }

    return response.json();
};

export const getBooks = (query = '') => request(`${books_API}?${query}`);
export const createBook = (book) => request(books_API, 'POST', book);
export const updateBook = (id, book) => request(`${books_API}/${id}`, 'PUT', book);
export const deleteBook = (id) => request(`${books_API}/${id}`, 'DELETE');
