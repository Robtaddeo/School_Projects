-- phpMyAdmin SQL Dump
-- version 4.0.10.9
-- http://www.phpmyadmin.net
--
-- Host: warehouse.cims.nyu.edu
-- Generation Time: Apr 23, 2019 at 05:07 PM
-- Server version: 5.1.73
-- PHP Version: 5.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `rt1727_db1`
--

-- --------------------------------------------------------

--
-- Table structure for table `albums`
--

CREATE TABLE IF NOT EXISTS `albums` (
  `ID` int(11) NOT NULL,
  `title` varchar(40) NOT NULL,
  `yearReleased` int(11) NOT NULL,
  `genre` varchar(40) NOT NULL,
  `artistID` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `albums`
--

INSERT INTO `albums` (`ID`, `title`, `yearReleased`, `genre`, `artistID`) VALUES
(1, 'Astroworld', 2018, 'Rap/Hip-Hop', 2),
(2, 'LUV IS RAGE 2', 2017, 'Rap/Hip-Hop', 1),
(3, 'Take Care', 2011, 'Rap/Hip-Hop', 3),
(4, 'Tarzan', 1999, 'Pop Rock', 5),
(5, 'Lemonade', 2016, 'Pop', 8),
(6, 'Anti', 2016, 'Pop', 9),
(7, 'Thriller', 1982, 'Pop', NULL),
(8, 'Graceland', 1986, 'Rock', 7),
(9, 'Scorpion', 2018, 'Rap/Hip-Hop', 3),
(10, 'Dangerous Woman', 2016, 'Pop', 10);

-- --------------------------------------------------------

--
-- Table structure for table `artists`
--

CREATE TABLE IF NOT EXISTS `artists` (
  `ID` int(11) NOT NULL,
  `stageName` varchar(40) NOT NULL,
  `realName` varchar(40) NOT NULL,
  `hometown` varchar(40) NOT NULL,
  `age` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `artists`
--

INSERT INTO `artists` (`ID`, `stageName`, `realName`, `hometown`, `age`) VALUES
(1, 'Lil Uzi Vert', 'Symere Woods', 'Philadelphia', 24),
(2, 'Travis Scott', 'Jacques Berman Webster', 'Houston', 26),
(3, 'Drake', 'Aubrey Drake Graham', 'Toronto', 32),
(4, 'Juice WRLD', 'Jarad Higgins', 'Chicago', 20),
(5, 'Phil Collins', 'Philip Collins', 'Chiswick', 68),
(6, 'Eric Clapton', 'Eric Clapton', 'Ripley', 74),
(7, 'Paul Simon', 'Paul Simon', 'Newark', 77),
(8, 'Beyonce', 'Beyonce Knowles', 'Houston', 37),
(9, 'Rihanna', 'Robyn Rihanna Fenty', 'Saint Michael', 31),
(10, 'Ariana Grande', 'Ariana Grande-Butera', 'Boca Raton', 25);

-- --------------------------------------------------------

--
-- Table structure for table `songs`
--

CREATE TABLE IF NOT EXISTS `songs` (
  `ID` int(11) NOT NULL,
  `title` varchar(40) NOT NULL,
  `yearReleased` varchar(40) NOT NULL,
  `genre` varchar(40) NOT NULL,
  `artistID` int(11) DEFAULT NULL,
  `albumID` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `songs`
--

INSERT INTO `songs` (`ID`, `title`, `yearReleased`, `genre`, `artistID`, `albumID`) VALUES
(1, 'Marvins Room', '2011', 'Rap/Hip-Hop', 3, 3),
(2, '20 Mins', '2017', 'Rap/Hip-Hop', 1, 2),
(2, '20 Mins', '2017', 'Rap/Hip-Hop', 1, 2),
(3, 'Sicko Mode', '2018', 'Rap/Hip-Hop', 2, 1),
(4, 'Lucid Dreams', '2018', 'Rap/Hip-Hop', 4, NULL),
(5, 'Fast', '2019', 'Rap/Hip-Hop', 4, NULL),
(6, 'God''s Plan', '2018', 'Rap/Hip-Hop', 9, 3),
(6, 'God''s Plan', '2018', 'Rap/Hip-Hop', 9, 3),
(7, 'Bad', '1987', 'Rock', NULL, NULL),
(8, 'Beat It', '1982', 'Rock', NULL, 7),
(9, 'Thank you, Next', '2019', 'Pop', 10, NULL),
(10, 'Lemonade', '2016', 'Pop', 8, 5),
(11, 'Hips Don''t Lie', '2005', 'Pop', NULL, NULL),
(12, 'Ronda', '2016', 'Rap/Hip-Hop', 1, NULL),
(13, 'Son Of Man', '1999', 'Rock', 5, 4),
(14, 'Diamonds on the Soles of her Shoes', '1986', 'Rock', 7, 8),
(15, 'I shot the Sheriff', '1974', 'Rock', 6, NULL);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
