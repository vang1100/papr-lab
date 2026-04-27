CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (30) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
    );
 
 	
 CREATE TABLE "blog" (
 	"id" SERIAL PRIMARY KEY,
 	"title" VARCHAR (200) NOT NULL, 
 	"text" VARCHAR (3000) NOT NULL,
 	"date" TIMESTAMP,
 	"photo" VARCHAR (100) NOT NULL,
 	"is_liked" BOOLEAN DEFAULT FALSE
 );
 
 CREATE TABLE "admin" (
 	"id" SERIAL PRIMARY KEY,
 	"name" VARCHAR (200) NOT NULL,
 	"info" VARCHAR (200) NOT NULL,
 	"email" VARCHAR (100) NOT NULL,
 	"admin_photo" VARCHAR (100) NOT NULL
 );
 
 CREATE TABLE "gallery" (
 	"id" SERIAL PRIMARY KEY,
 	"blog_id" INT REFERENCES "blog" (id)
 );