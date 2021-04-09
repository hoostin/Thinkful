select count(*)
from books 
join authors 
on authors.author_id = books.author_id
where authors.author_name = 'Leo Tolstoy';