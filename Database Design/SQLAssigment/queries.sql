-- Query 1

SELECT COUNT(*) FROM players;

-- Query 2

SELECT Name, Nationality, Overall FROM players
ORDER BY Overall ASC
LIMIT 10;

-- Query 3

SELECT Name, Nationality, Overall FROM Players 
WHERE Overall > 80
ORDER BY Name DESC;

-- Query 4

SELECT Nationality, AVG(Overall) as national_average FROM players
GROUP BY Nationality 
ORDER BY national_average;

-- Query 5

SELECT Nationality, AVG(Overall) FROM players
GROUP BY Nationality
HAVING AVG(Overall) > 70;

-- Query 6 

SELECT Name || “ from “ || Nationality || “ with an overall rating of: “ || Overall FROM players
ORDER BY Name 
LIMIT 15;

-- Query 7 (Finding the best player in the game)

SELECT Name, Nationality, MAX(Overall) FROM players;

-- Query 8 (Finding the player with the lowest sprint speed)

SELECT Name, Nationality, MIN(SprintSpeed) FROM players;

-- Query 9 (Shows all players with a sprint speed above 80)

SELECT * FROM players WHERE SprintSpeed > 80
AND ShotPower > 80
ORDER BY Name;

-- Query 10 (Finds the best player from each team)

SELECT Name, Club, MAX(Overall) FROM players
GROUP BY CLUB
ORDER BY MAX(Overall);

-- Query 11 (Finds the best 5 teams based on their player average)

SELECT Club, AVG(Overall) FROM players
GROUP BY Club
ORDER BY AVG(Overall) DESC
LIMIT 5;

-- Query 12 (Finds the first 10 players that can "improve" the most)

SELECT Name, Nationality, Club, Potential - Overall as potential_difference FROM players
ORDER BY potential_difference DESC
LIMIT 10;