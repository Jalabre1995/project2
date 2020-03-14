
CREATE DATABASE teamplayer;

USE teamplayer;

CREATE TABLE players(
    firstName VARCHAR(20) DEFAULT NULL,
    lastName VARCHAR(20) DEFAULT NULL,
    teamName VARCHAR(30) DEFAULT NULL,
    createdAT TIMESTAMP NOT NULL
);
SELECT*FROM players;


