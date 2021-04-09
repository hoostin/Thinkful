select 
artists.artist_name as artist,
songs.song_name,
songs.album_name as album
from 
songs 
full join
artists
on artists.artist_id = songs.artist;