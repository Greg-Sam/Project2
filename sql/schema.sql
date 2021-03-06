CREATE DATABASE codebook_db;

USE codebook_db;

CREATE TABLE users (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
first_name VARCHAR(100) NOT NULL,
last_name VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL UNIQUE,
user_name VARCHAR(100) NOT NULL UNIQUE,
password VARCHAR(64) NOT NULL,
pfp VARCHAR(512)
);

USE codebook_db;

CREATE TABLE posts (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
post LONGTEXT NOT NULL,
user_id INT NOT NULL, 
userId INT NULL,
FOREIGN KEY(user_id) REFERENCES users(id)
);

USE codebook_db;

CREATE TABLE comments (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
comment LONGTEXT NOT NULL,
user_id INT NOT NULL,
userId INT NULL,
post_id INT NOT NULL,
FOREIGN KEY(user_id) REFERENCES users(id),
FOREIGN KEY(post_id) REFERENCES posts(id)
);
