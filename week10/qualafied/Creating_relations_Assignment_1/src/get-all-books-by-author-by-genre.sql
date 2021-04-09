select *
from books 
join books_genres
on books.book_id = books_genres.book_id
join genres
on genres.genre_id = books_genres.genre_id
join authors
on authors.author_id = books.author_id
where authors.author_name = 'Leo Tolstoy' 
and genres.genre_name in('autobiography','history') ;