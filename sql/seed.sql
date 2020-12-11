INSERT INTO users (first_name, last_name, email, user_name, password, pfp) 
VALUES ('Darth', 'Vader', 'darth@email.com', 'DarkSide', 'password', 'https://upload.wikimedia.org/wikipedia/en/7/76/Darth_Vader.jpg');
INSERT INTO users (first_name, last_name, email, user_name, password) 
VALUES ('Elisabeth', 'Windsor', 'ewindsor@email.com', 'Queen', 'password');
INSERT INTO users (first_name, last_name, email, user_name, password) 
VALUES ('Luke', 'Skywalker', 'lukee@email.com', 'Light Side', 'password');
INSERT INTO users (first_name, last_name, email, user_name, password) 
VALUES ('Harry', 'Potter', 'harry@email.com', 'ChosenOne', 'password');

INSERT INTO posts (post, user_id) VALUES ('I am your father, Luke!', 1);
INSERT INTO posts (post, user_id) VALUES ('They are not ROYAL, they just happen to have me as their aunt! ', 2);
INSERT INTO posts (post, user_id) VALUES ('I have a very bad feelings about it!', 3);
INSERT INTO posts (post, user_id) VALUES ('Time will not slow down when something unpleasent lies ahead!', 4);