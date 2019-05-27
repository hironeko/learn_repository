/*
test db
*/
CREATE DATABASE IF NOT EXISTS `todo_test` COLLATE 'utf8_general_ci';
GRANT ALL ON `todo_test`.* TO 'default'@'%';

drop table if exists 'todos';
create table 'todos' (
    'id' int(10) unsigned not null AUTO_INCREMENT,
    'title' varchar(55) default null,
    'text' varchar(255) default null,
    `created_at` datetime NOT NULL DEFAULT current_timestamp(),
    `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
) ENGINE=InnoDB DEFAULT CHARSET=utf8;