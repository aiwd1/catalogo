CREATE DATABASE catalogo;
CREATE DATABASE catalogo_shadow;

CREATE USER 'catalogo_user'@'localhost' IDENTIFIED BY 'password';

GRANT ALL PRIVILEGES ON catalogo.* TO 'catalogo_user'@'localhost';
GRANT ALL PRIVILEGES ON catalogo_shadow.* TO 'catalogo_user'@'localhost';

