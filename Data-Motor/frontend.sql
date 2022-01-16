-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 09, 2021 at 05:31 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `frontend`
--

-- --------------------------------------------------------

--
-- Table structure for table `data_motor`
--

CREATE TABLE `data_motor` (
  `id_motor` varchar(50) NOT NULL,
  `nama_motor` varchar(50) NOT NULL,
  `harga` int(50) NOT NULL,
  `tahun` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `data_motor`
--

INSERT INTO `data_motor` (`id_motor`, `nama_motor`, `harga`, `tahun`) VALUES
('H001', 'Vario', 15000000, '2021'),
('H002', 'SupraX', 10000000, '2020'),
('Y001', 'Mio', 7000000, '2019');

-- --------------------------------------------------------

--
-- Table structure for table `hitung_harga_motor`
--

CREATE TABLE `hitung_harga_motor` (
  `nama_motor` varchar(255) NOT NULL,
  `harga_motor` varchar(255) NOT NULL,
  `jumlah` varchar(255) NOT NULL,
  `total` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `data_motor`
--
ALTER TABLE `data_motor`
  ADD PRIMARY KEY (`id_motor`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
