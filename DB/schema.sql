CREATE DATABASE teamplayer;

USE teamplayer;

CREATE TABLE players(
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(20) DEFAULT NULL,
    last_name VARCHAR(20) DEFAULT NULL,
    team_name VARCHAR(30) DEFAULT NULL
);
SELECT*FROM teamplayer;

