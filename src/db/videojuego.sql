CREATE DATABASE `plataforma`;

USE `plataforma`;

CREATE TABLE `niveles`(
    idNivel int(11) PRIMARY KEY AUTO_INCREMENT,
    nivel varchar(255) NOT NULL
);

CREATE TABLE `juegos`(
    idJuego int(11) PRIMARY KEY AUTO_INCREMENT,
    juego varchar(255) NOT NULL
);

CREATE TABLE `preguntas` (
    idPregunta int(11) PRIMARY KEY AUTO_INCREMENT,
    pregunta varchar(255) NOT NULL,
    tiempo int(11) NOT NULL,
    puntaje varchar(11) NOT NULL,
    respuesta1 varchar(255) NOT NULL,
    respuesta2 varchar(255) NOT NULL,
    respuesta3 varchar(255) NOT NULL,
    respuesta4 varchar(255) NOT NULL
);