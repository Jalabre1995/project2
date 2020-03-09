CREATE DATABASE teamplayer;

USE teamplayer;

CREATE TABLE players(
    id INT NOT NULL PRIMARY KEY,
    first_name VARCHAR(20) DEFAULT NULL,
    last_name VARCHAR(20) DEFAULT NULL,
    position VARCHAR(30) DEFAULT NULL
);
SELECT*FROM teamplayer;

