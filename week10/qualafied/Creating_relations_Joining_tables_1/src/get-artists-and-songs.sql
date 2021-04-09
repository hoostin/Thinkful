select *
from 
artists
inner join
songs
on artists.artist_id = songs.artist;