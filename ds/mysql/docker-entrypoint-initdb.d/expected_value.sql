CREATE DATABASE IF NOT EXISTS `expected_value` COLLATE 'utf8_general_ci';
GRANT ALL ON `expected_value`.* TO 'default'@'%';

/*
test db
*/
CREATE DATABASE IF NOT EXISTS `expected_value_test` COLLATE 'utf8_general_ci';
GRANT ALL ON `expected_value_test`.* TO 'default'@'%';