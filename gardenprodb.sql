DROP DATABASE IF EXISTS gardenprodb;

CREATE DATABASE gardenprodb;

USE gardenprodb;

CREATE TABLE `user` (
   `id` int(11) AUTO_INCREMENT NOT NULL,
   `username` varchar(60) NOT NULL,
   `password` varchar(1024) NOT NULL,
   `zone` varchar(5) NOT NULL,
   `frost_date` date NOT NULL,

   primary key(`id`)
);

CREATE TABLE `reminder` (
   `id` int(11) AUTO_INCREMENT NOT NULL,
   `planting_id` int(11),
   `user_id` int(11) NOT NULL,
   `date` date NOT NULL,
   `title` varchar(128) NOT NULL,
   `category` int(11) NOT NULL default 1,
   `description` varchar(2024) NOT NULL,
   `plant_id` int(11) NOT NULL,
   `complete` boolean NOT NULL DEFAULT false,

   primary key(`id`)
);

CREATE TABLE `planting` (
   `id` int(11) AUTO_INCREMENT NOT NULL,
   `user_id` int(11) NOT NULL,
   `plant_id` int(11) NOT NULL,
   `qty` int(11) NOT NULL default 1,
   `stage` int(1) NOT NULL default 0,
   `started` date,
   `planted` date,
   `harvest` date,

   primary key(`id`)
);

CREATE TABLE `user_planting` (
  `id` int(11) AUTO_INCREMENT NOT NULL,
  `user_id` int(11) NOT NULL,
  `planting_id` int(11) NOT NULL,

  primary key(`id`)
);

CREATE TABLE `user_plant` (
  `id` int(11) AUTO_INCREMENT NOT NULL,
  `user_id` int(11) NOT NULL,
  `plant_id` int(11) NOT NULL,

  primary key(`id`)
);

create table `plant` (
   `id` int(11)  AUTO_INCREMENT NOT NULL,
   `common_name` varchar(128) NOT NULL,
   `botanical_name` varchar(128) NOT NULL,
   `variety` varchar(128),
   `type` enum('orn', 'veg', 'herb', 'vine', 'tree', 'shrub', 'grass'),
   `method_num` int(5),
   `sowing_method` varchar(256),
   `last_frost` int(5) NOT NULL,
   `depth` enum('covr', 'thin', 'surf'),
   `space` int(5),
   `life` varchar(128),
   `transplant` enum('fsun', 'psun', 'psha', 'fsha', 'dsha'),
   `img` varchar(1048),
   `comment` varchar(1048),

   primary key(`id`)
);


alter table reminder
  ADD CONSTRAINT reminder_user_id_fk
  FOREIGN KEY(user_id)
  REFERENCES user(id);

alter table reminder
  ADD CONSTRAINT reminder_planting_id_fk
  FOREIGN KEY(planting_id)
  REFERENCES planting(id);

alter table reminder
  ADD CONSTRAINT reminder_plant_id_fk
  FOREIGN KEY(plant_id)
  REFERENCES plant(id);


alter table user_planting
  ADD CONSTRAINT user_planting_user_id_fk
  FOREIGN KEY(user_id)
  REFERENCES user(id);

alter table user_planting
  ADD CONSTRAINT user_planting_planting_id_fk
  FOREIGN KEY(planting_id)
  REFERENCES planting(id);


alter table user_plant
  ADD CONSTRAINT user_plant_user_id_fk
  FOREIGN KEY(user_id)
  REFERENCES user(id);

alter table user_plant
  ADD CONSTRAINT user_plant_plant_id_fk
  FOREIGN KEY(plant_id)
  REFERENCES plant(id);


alter table planting
  ADD CONSTRAINT planting_plant_id_fk
  FOREIGN KEY(plant_id)
  REFERENCES plant(id);

GRANT ALL PRIVILEGES ON gardenprodb.* TO `student`@`localhost`;
