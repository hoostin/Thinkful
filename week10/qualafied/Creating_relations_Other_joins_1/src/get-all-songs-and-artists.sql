select 
artists.artist_name,
songs.song_name,
songs.album_name
from 
songs 
left join
artists
on artists.artist_id = songs.artist;