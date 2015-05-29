-- phpMyAdmin SQL Dump
-- version 3.4.10.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2015 年 05 月 29 日 13:09
-- 服务器版本: 5.5.20
-- PHP 版本: 5.3.10

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `ecjtu_oa`
--

-- --------------------------------------------------------

--
-- 表的结构 `message`
--

CREATE TABLE IF NOT EXISTS `message` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ToName` varchar(20) DEFAULT NULL,
  `ByName` varchar(20) DEFAULT NULL,
  `message` text,
  `time` datetime DEFAULT NULL,
  `read` int(11) NOT NULL COMMENT '是否阅读？',
  `mid` int(11) NOT NULL COMMENT '留言id',
  `backmes` text NOT NULL COMMENT '回复留言',
  `backtime` datetime NOT NULL COMMENT '回复时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=16 ;

--
-- 转存表中的数据 `message`
--

INSERT INTO `message` (`id`, `ToName`, `ByName`, `message`, `time`, `read`, `mid`, `backmes`, `backtime`) VALUES
(1, 'ddd', 'admin', '测试第一条留言', '2015-05-18 12:01:21', 0, 2, '', '0000-00-00 00:00:00'),
(2, 'ddd', 'admin', '测试第二条留言', '2015-05-18 12:02:42', 0, 2, '', '0000-00-00 00:00:00'),
(3, 'admin', 'wwww', 'cecwevergvrtbbtwvergwegegerg天围观好好运用经济vbrhtrhhrtrth也将有机会给你个广告他会突然很痛很痛很痛回复vthrthtt过热谔谔谔谔会有今天已经一天', '2015-05-29 00:00:00', 1, 1, '然很痛很痛很痛回复vthrthtt过热谔谔谔谔会有今天已经一天', '0000-00-00 00:00:00'),
(4, 'admin', 'admin', 'hhhhhh', '2015-05-22 06:49:20', 1, 2, 'vs大大方方', '2015-05-27 20:45:47'),
(5, 'admin', 'admin', 'FFSFS啊感觉就开始个人jk；手段更加快乐', '2015-05-27 11:09:35', 1, 2, '2015-5-27 20：44', '2015-05-27 20:44:31'),
(6, 'admin', 'admin', '共同话题任何人提高人体', '2015-05-27 11:10:41', 1, 2, 'efewfwewe', '2015-05-27 12:42:05'),
(7, 'admin', 'admin', '还提供文工团哥特', '2015-05-27 11:11:27', 1, 2, 'dasdasdsdasdsad', '0000-00-00 00:00:00'),
(8, 'admin', 'admin', '给你留言', '2015-05-27 11:26:50', 1, 2, 'dasdasdsdasdsad', '0000-00-00 00:00:00'),
(9, 'admin', 'admin', '范围划分为服务为非法赌球', '2015-05-27 15:10:19', 1, 2, '', '0000-00-00 00:00:00'),
(10, 'admin', 'admin', 'fdsdfdsfsdfsdfwefewfwefewfwefwef', '2015-05-28 07:30:15', 1, 2, '的方式的是是非非第三方调查', '2015-05-28 15:45:55'),
(11, 'admin', 'admin', 'gtggggg', '2015-05-29 11:21:35', 1, 2, 'fefewfef', '2015-05-29 19:40:54'),
(12, 'admin', 'admin', 'fddf', '2015-05-29 12:30:34', 0, 0, '', '0000-00-00 00:00:00'),
(13, 'admin', 'admin', 'gfdsgdfgdfg', '2015-05-29 12:37:02', 0, 0, '', '0000-00-00 00:00:00'),
(14, '王五', 'admin', 'dadasdsdsa', '2015-05-29 12:37:20', 0, 0, '', '0000-00-00 00:00:00'),
(15, 'admin', 'admin', '对方是否', '2015-05-29 13:05:22', 0, 0, '', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- 表的结构 `task`
--

CREATE TABLE IF NOT EXISTS `task` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `writer` varchar(20) DEFAULT NULL,
  `depart` varchar(50) DEFAULT NULL,
  `center` varchar(255) NOT NULL COMMENT '中心',
  `des` varchar(6550) DEFAULT NULL,
  `details` text,
  `timelong` varchar(100) NOT NULL COMMENT '期限',
  `status` int(11) NOT NULL COMMENT '任务状态0/1/2',
  `getman` varchar(50) NOT NULL COMMENT '任务接受人',
  `overtime` date NOT NULL COMMENT '任务结束时间',
  `time` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=365 ;

--
-- 转存表中的数据 `task`
--

INSERT INTO `task` (`id`, `title`, `writer`, `depart`, `center`, `des`, `details`, `timelong`, `status`, `getman`, `overtime`, `time`) VALUES
(1, '打发打发', '非官方的', '网建组', '技术研发中心', 'des', '打算大苏打实打实的大多数的收到收到收到收到收到广泛大锅饭广东话的复活复活特人让他有广泛士大夫地方傅海峰能否恢复', '20', 0, '第三方', '2015-05-26', '2015-05-19'),
(20, 'dsdsds', 'dsds', '管理员', '管理员', 'des', 'sdfgfsarfasa', '14', 1, 'admin', '0000-00-00', '2015-05-16'),
(21, 'feewr', 'wewer', '管理员', '管理员', 'des', 'grwqerrweq', '14', 0, '', '0000-00-00', '2015-05-16'),
(22, 'hgdfge', 'ge', '管理员', '管理员', 'des', 'rthruyj6tjertjhethqgwergwesddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd', '12', 0, '', '0000-00-00', '2015-05-08'),
(23, '疯狗似的士大夫', '大师傅士大夫但是', '管理员', '管理员', 'des', '反对和凤凰大酒店大家都放假放假放假大幅加分加分加分经济法加分加分加分加分就放假放假放假加分加分加分放假放假时间的；的纠纷双方均为风格和人物ifhregheruigh；拍黄瓜更加客观的说f；看来j；的', '23', 0, '', '0000-00-00', '2015-05-15'),
(24, 'gfdsfsadf', 'gsdfgsd', '管理员', '管理员', 'des', '过得不好的说法更是豆腐干豆腐干的方式告诉对方', '12', 0, '', '0000-00-00', '2015-05-30'),
(25, 'gfdsfsadf', 'gsdfgsd', '管理员', '管理员', 'des', '过得不好的说法更是豆腐干豆腐干的方式告诉对方', '12', 0, '', '0000-00-00', '2015-05-30'),
(26, '大苏打撒', '啊实打实的', '管理员', '管理员', 'des', '啊豆腐干大师傅个的身份广东省分公司的', '23', 0, '', '0000-00-00', '2015-05-01'),
(27, '犯得上发射点', 'gsdfgsd', '管理员', '管理员', 'des', '分vvvvvvjfhd会突然很认同和肉体和肉体和', '50', 0, '', '0000-00-00', '2015-05-14'),
(28, 'vcvvvvvvv', 'fds', '管理员', '管理员', 'des', 'vs发放大使地方撒旦发送对方vdfsaf', '42', 0, '', '0000-00-00', '2015-05-31'),
(364, 'dasdasd', 'fgsdfdf', '管理员', '管理员', 'des', '梵蒂冈地方官士大夫敢死队风格的色鬼', '10', 0, '', '0000-00-00', '2015-05-04');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `pwd` varchar(500) DEFAULT NULL,
  `sex` varchar(8) DEFAULT NULL,
  `birth` varchar(255) NOT NULL COMMENT '生日',
  `posit` varchar(50) DEFAULT NULL,
  `depart` varchar(50) DEFAULT NULL,
  `center` varchar(50) DEFAULT NULL,
  `college` varchar(50) DEFAULT NULL,
  `power` varchar(4) DEFAULT NULL,
  `tel` varchar(15) DEFAULT NULL,
  `qq` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=22 ;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `name`, `pwd`, `sex`, `birth`, `posit`, `depart`, `center`, `college`, `power`, `tel`, `qq`) VALUES
(1, 'admin', 'c6078f161ac8821895a73dc54f5317e0', '男', '1995-03-04', '管理员', '管理员', '管理员', NULL, '0', '18111111111', '980519349'),
(13, '王五', 'c99243dc1bb895430a3f5a1de10df7fd', '男', '1995-03-04', '技术研发员', '管理员', '技术研发中心', '信息工程学院', '1', '18111111111', '980519349'),
(14, 'dd', 'c99243dc1bb895430a3f5a1de10df7fd', '男', '1993-04-26', '技术研发员', '管理员', '技术研发中心', '机电学院', '1', '18111111111', '980519349'),
(16, 'ddd', 'c99243dc1bb895430a3f5a1de10df7fd', '男', '', '技术研发员', '网建组', '管理员', '信息学院', '2', '18111111111', '980519349'),
(17, '长的萨满你', 'c99243dc1bb895430a3f5a1de10df7fd', '男', '', '技术员', '驻外办', '行政管理中心', '的撒大苏打', '2', '18111111111', '980519349'),
(18, 'zhangsan ', 'c99243dc1bb895430a3f5a1de10df7fd', '男', '', '技术员', '市场部', '行政管理中心', '信息工程学院', '4', '18111111111', '980519349'),
(21, 'zhangsan ', 'c99243dc1bb895430a3f5a1de10df7fd', '男', '', '技术研发员', '网建组', '技术研发中心', '信息工程学院', '2', '18111111111', '980519349');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
