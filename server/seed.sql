CREATE TABLE users (
  user_id VARCHAR PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_username VARCHAR UNIQUE NOT NULL,
  user_email VARCHAR,
  user_hashedPassword VARCHAR UNIQUE NOT NULL,
  user_createdAt TIMESTAMP NOT NULL DEFAULT NOW(), 
  user_bio VARCHAR DEFAULT 'Hello there, welcome to my profile',
  user_profileImage VARCHAR DEFAULT 'https://www.flaticon.com/svg/vstatic/svg/1738/1738691.svg?token=exp=1619870671~hmac=dc0a48e4f2ead0b3a23560a41a46740e'
);