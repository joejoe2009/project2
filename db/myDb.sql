CREATE TABLE books (
     id SERIAL PRIMARY KEY NOT NULL,
     title VARCHAR(30)

);

INSERT INTO books (title) VALUES ('History');
INSERT INTO books (title) VALUES ('Science');
INSERT INTO books (title) VALUES ('Math');