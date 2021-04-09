create table books_genres 
(

    book_id integer references books(book_id) not null,
    genre_id integer references genres(genre_id) not null,
        primary key (book_id, genre_id)
);