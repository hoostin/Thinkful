select 
artists.artist_id,
artists.artist_name,
songs.song_name
from 
artists
inner join
songs
on artists.artist_id = songs.artist;