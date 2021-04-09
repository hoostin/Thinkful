select 
artists.artist_name,
songs.song_name,
songs.album_name
from 
artists
left join
songs 
on artists.artist_id = songs.artist;