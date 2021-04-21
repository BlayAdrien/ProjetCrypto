-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 21 avr. 2021 à 16:29
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `crypto`
--

-- --------------------------------------------------------

--
-- Structure de la table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
CREATE TABLE IF NOT EXISTS `transactions` (
  `ID_TRANSACTIONS` bigint(4) NOT NULL AUTO_INCREMENT,
  `ID_Crypto` varchar(20) COLLATE utf8_bin NOT NULL,
  `nomCrypto` varchar(20) COLLATE utf8_bin NOT NULL,
  `prixCrypto` varchar(20) COLLATE utf8_bin NOT NULL,
  `DateT` date NOT NULL,
  `NOMBRES_CRYPTOS` varchar(20) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`ID_TRANSACTIONS`),
  UNIQUE KEY `ID_TRANSACTIONS` (`ID_TRANSACTIONS`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `transactions`
--

INSERT INTO `transactions` (`ID_TRANSACTIONS`, `ID_Crypto`, `nomCrypto`, `prixCrypto`, `DateT`, `NOMBRES_CRYPTOS`) VALUES
(1, '1', 'Bitcoin', '50', '2021-04-01', '5'),
(2, '2', 'Ethereum', '25', '2021-03-01', '3'),
(3, '3', 'LiteCoin', '35', '2021-03-05', '3'),
(4, '4', 'PolkaDot', '35', '2021-04-03', '10');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
