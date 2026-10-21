CREATE DATABASE IF NOT EXISTS catalogo_shadow;
CREATE USER IF NOT EXISTS 'catalogo_user'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON catalogo.* TO 'catalogo_user'@'localhost';
GRANT ALL PRIVILEGES ON catalogo_shadow.* TO 'catalogo_user'@'localhost';
GRANT ALL PRIVILEGES ON catalogo_shadow.* TO 'catalogo_user'@'%';
FLUSH PRIVILEGES;
