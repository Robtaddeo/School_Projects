-- Inner Joins: 
SELECT a.title, b.stageName FROM songs a INNER JOIN artists b ON a.artistID = b.ID;
SELECT a.title, b.stageName FROM albums a INNER JOIN artists b on a.artistID = b.ID;

-- Left Joins: 
SELECT * FROM artists a LEFT JOIN songs b on a.ID = b.artistID;
SELECT a.title, b.title FROM songs a LEFT JOIN albums b ON a.artistID = b.artistID WHERE b.title IS NOT NULL;

-- Sub Queries
SELECT * FROM artists  WHERE age IN (SELECT age FROM artists WHERE hometown = "Houston");
SELECT * FROM songs  WHERE genre IN (SELECT genre FROM songs WHERE yearReleased = 2016);

-- More than one inner join:
SELECT s.title, a.title, b.stageName FROM songs s INNER JOIN artists b on s.artistID = b.ID INNER JOIN albums a ON b.ID = a.artistID;

-- Last Query:
SELECT a.realName, b.title FROM artists a INNER JOIN songs b on a.ID = b.artistID;

