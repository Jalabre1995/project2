CREATE DATABASE teamplayer;

USE teamplayer;

CREATE TABLE players(
    id INT(3), NOT NULL, PRIMARY KEY;
    first_name VARCHAR(20) DEFAULT NULL,
    last_name VARCHAR(20) DEFAULT NULL,
);
