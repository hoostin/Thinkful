select *
from books 
join authors
on authors.author_id = books.author_id
where books.publication_year < 2005 and authors.nationality != 'United States of America';
