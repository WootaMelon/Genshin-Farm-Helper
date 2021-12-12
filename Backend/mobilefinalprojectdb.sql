-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 12, 2021 at 02:04 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mobilefinalprojectdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `Tips`
--

CREATE TABLE `Tips` (
  `id` int(11) NOT NULL,
  `tip_text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Tips`
--

INSERT INTO `Tips` (`id`, `tip_text`) VALUES
(1, 'While travelling with Electrograna, you can use the Thunder Sphere to pass through dimensions in a flash.'),
(2, 'Artifacts derive power from their original bearers\' ambitions and memories. It follows that they must consume other artifacts to increase their power.'),
(3, 'You can use the Character Archive to view information on characters who have yet to join your team, yet are brimming with potential all the same...'),
(7, 'Cocogoat: The legendary adeptibeast.');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `resin_count` text NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `resin_count`) VALUES
(41, 'WootaMelon', 'f5fbc6fe84c365315f491d4275c2f2e5d3c60f25684e1d62e7e9fe63abf8d0d8', '123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Tips`
--
ALTER TABLE `Tips`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Tips`
--
ALTER TABLE `Tips`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
