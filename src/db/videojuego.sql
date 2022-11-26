CREATE DATABASE `plataforma`;

USE `plataforma`;

-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-11-2022 a las 00:13:36
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `plataforma`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historial`
--

CREATE TABLE `historial` (
  `idHistorial` int(11) NOT NULL,
  `idNivel` int(11) NOT NULL,
  `idJuego` int(11) NOT NULL,
  `puntajeTotal` int(11) NOT NULL,
  `fecha` date DEFAULT NULL,
  `matricula` varchar(255) NOT NULL,
  `equipo` varchar(255) NOT NULL,
  `sala` varchar(255) NOT NULL,
  `correctas` int(11) NOT NULL,
  `incorrectas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `historial`
--

INSERT INTO `historial` (`idHistorial`, `idNivel`, `idJuego`, `puntajeTotal`, `fecha`, `matricula`, `equipo`, `sala`, `correctas`, `incorrectas`) VALUES
(181, 1, 1, 140, '2022-11-25', 'UTTI192017', 'Levi', 'rodo', 4, 5),
(186, 2, 2, 12, '2022-11-25', 'UTTI192017', 'Levi', 'xdxd', 2, 2),
(187, 3, 3, 123, '2022-11-25', 'UTTI192017', 'Levi', 'a6ac-dcdc', 10, 1),
(188, 1, 1, 88, '2022-11-26', 'UTTI192017', 'Levi', 'a6ac-dcdc', 4, 0),
(190, 1, 1, 50, '2022-11-26', 'UTTI192017', 'Levi', 'rodo', 0, 0),
(191, 1, 1, 0, '2022-11-26', 'UTTI192017', 'Leviatan', '833f-043b', 0, 0),
(192, 1, 1, 0, '2022-11-26', 'UTTI192017', 'Leviatan', '08e6-b383', 0, 0),
(193, 1, 1, 0, '2022-11-26', 'UTTI192017', 'Levi', '', 0, 0),
(194, 1, 1, 0, '2022-11-26', 'UTTI192017', 'Levi', 'cf', 0, 0),
(195, 1, 1, 0, '2022-11-26', 'UTTI192017', 'Levi', '37bf-394f-9c7a-44f7', 0, 0),
(196, 1, 1, 0, '2022-11-26', 'UTTI192017', 'Roman', 'xdxd', 0, 0),
(197, 1, 1, 0, '2022-11-26', 'UTTI192018', 'Roman', 'xdxd', 0, 0),
(198, 1, 1, 0, '2022-11-26', 'UTTI192010', 'Roman', 'xdxd', 0, 0),
(199, 1, 1, 0, '2022-11-26', 'UTTI192016', 'Roman', 'xdxd', 0, 0),
(200, 1, 1, 0, '2022-11-26', 'Integrante1', 'Leviatan', '71d6-e609', 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juegos`
--

CREATE TABLE `juegos` (
  `idJuego` int(11) NOT NULL,
  `idNivel` int(11) NOT NULL,
  `juego` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `juegos`
--

INSERT INTO `juegos` (`idJuego`, `idNivel`, `juego`) VALUES
(1, 1, 'Conceptos de farmacología'),
(2, 2, 'Farmacología familiar'),
(3, 3, 'Farmacología psiquiátrica');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `niveles`
--

CREATE TABLE `niveles` (
  `idNivel` int(11) NOT NULL,
  `nivel` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `niveles`
--

INSERT INTO `niveles` (`idNivel`, `nivel`) VALUES
(1, 'Primer semestre'),
(2, 'Segundo semestre'),
(3, 'Tercer semestre');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas`
--

CREATE TABLE `preguntas` (
  `idPregunta` int(11) NOT NULL,
  `idJuego` int(11) NOT NULL,
  `pregunta` varchar(255) NOT NULL,
  `tiempo` int(11) NOT NULL,
  `puntaje` varchar(11) NOT NULL,
  `respuesta1` varchar(255) NOT NULL,
  `respuesta2` varchar(255) NOT NULL,
  `respuesta3` varchar(255) NOT NULL,
  `respuesta4` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `preguntas`
--

INSERT INTO `preguntas` (`idPregunta`, `idJuego`, `pregunta`, `tiempo`, `puntaje`, `respuesta1`, `respuesta2`, `respuesta3`, `respuesta4`) VALUES
(1, 1, '¿Qué es la farmacología?', 20, '500', 'Ciencia que se ocupa del estudio integral de los medicamentos', 'Estadisticas de las farmacias xd', 'Unión de las Farmacias y de la Ecología xd', 'Farmacologietes'),
(2, 1, '¿Cuantos años dura la carrera Farmacología?', 10, '200', '3', '4', '5', '6'),
(3, 1, '¿Pregunta de ejemplo?', 15, '40', 'Prueba 1', 'Prueba 2', 'Prueba 3', 'Prueba 4');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipousuario`
--

CREATE TABLE `tipousuario` (
  `idTipo` int(11) NOT NULL,
  `tipo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipousuario`
--

INSERT INTO `tipousuario` (`idTipo`, `tipo`) VALUES
(1, 'administrador'),
(2, 'estudiante');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuario` int(11) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `nombres` varchar(255) NOT NULL,
  `apellidos` varchar(255) NOT NULL,
  `matricula` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `tipoUsuario` int(11) NOT NULL,
  `codigo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `correo`, `nombres`, `apellidos`, `matricula`, `password`, `img`, `tipoUsuario`, `codigo`) VALUES
(20, 'edgarbraquetes@gmail.com', 'Edgar Rodolfo', 'Braquetes López', 'UTTI192017', '1379461902', 'http://localhost/videojuego/subidas/7f8d261fc36abbf9eff37dbc01c10330.jpeg', 2, '3UXGIL'),
(21, 'braquetesss@gmail.com', 'Edgar Rodolfo', 'Braquetes López', 'UTTI192018', '1379461902', 'http://localhost/videojuego/subidas/logo.png', 2, ''),
(27, 'farmacogame@braquetes.mx', 'Farmaco', 'Game', 'No aplica', '1379461902', 'http://localhost/videojuego/subidas/logo.png', 1, 'RLYWF7');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `historial`
--
ALTER TABLE `historial`
  ADD PRIMARY KEY (`idHistorial`),
  ADD KEY `idJuego` (`idJuego`),
  ADD KEY `idNivel` (`idNivel`);

--
-- Indices de la tabla `juegos`
--
ALTER TABLE `juegos`
  ADD PRIMARY KEY (`idJuego`),
  ADD KEY `idNivel` (`idNivel`);

--
-- Indices de la tabla `niveles`
--
ALTER TABLE `niveles`
  ADD PRIMARY KEY (`idNivel`);

--
-- Indices de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  ADD PRIMARY KEY (`idPregunta`),
  ADD KEY `idJuego` (`idJuego`);

--
-- Indices de la tabla `tipousuario`
--
ALTER TABLE `tipousuario`
  ADD PRIMARY KEY (`idTipo`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuario`),
  ADD KEY `tipoUsuario` (`tipoUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `historial`
--
ALTER TABLE `historial`
  MODIFY `idHistorial` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=201;

--
-- AUTO_INCREMENT de la tabla `juegos`
--
ALTER TABLE `juegos`
  MODIFY `idJuego` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `niveles`
--
ALTER TABLE `niveles`
  MODIFY `idNivel` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  MODIFY `idPregunta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tipousuario`
--
ALTER TABLE `tipousuario`
  MODIFY `idTipo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `historial`
--
ALTER TABLE `historial`
  ADD CONSTRAINT `historial_ibfk_1` FOREIGN KEY (`idJuego`) REFERENCES `juegos` (`idJuego`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `historial_ibfk_2` FOREIGN KEY (`idNivel`) REFERENCES `niveles` (`idNivel`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `juegos`
--
ALTER TABLE `juegos`
  ADD CONSTRAINT `juegos_ibfk_1` FOREIGN KEY (`idNivel`) REFERENCES `niveles` (`idNivel`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `preguntas`
--
ALTER TABLE `preguntas`
  ADD CONSTRAINT `preguntas_ibfk_1` FOREIGN KEY (`idJuego`) REFERENCES `juegos` (`idJuego`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`tipoUsuario`) REFERENCES `tipousuario` (`idTipo`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
