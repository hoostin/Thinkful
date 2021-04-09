select
artists.artist_name,
songs.song_name,
songs.album_name
from
artists
inner join
songs 
on artists.artist_id = songs.artist
where songs.song_name like 'The%';