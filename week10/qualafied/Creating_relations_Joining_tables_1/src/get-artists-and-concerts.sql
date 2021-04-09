select 
artists.artist_name,
concerts.concert_name,
concerts.concert_date,
artists_concerts.scheduled_start_at,
artists_concerts.scheduled_end_at
from 
artists 
inner join
artists_concerts
on artists_concerts.artist_id = artists.artist_id
inner join
concerts
on concerts.concert_id = artists_concerts.concert_id;