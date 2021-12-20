drop table users, service_opportunities, saved_so;

create table users(
user_id serial primary key,
first_name varchar(20),
last_name varchar(20),
email varchar(20),
phone varchar(10),
password varchar(200),
profile_pic text,
saved_so integer
);

create table service_opportunities(
so_id serial primary Key,
user_id integer,
full_name varchar(20),
service_needed varchar(1000),
email varchar(20),
phone varchar(10)
);

create table saved_so(
saved_so_id serial primary key,
user_id integer,
so_id integer 
);

alter table users add foreign key (saved_so) references saved_so (saved_so_id);

alter table saved_so add foreign key (so_id) references service_opportunities (so_id);

alter table saved_so add foreign key (user_id) references users (user_id);

alter table service_opportunities add foreign key (user_id) references users (user_id);

insert into users (first_name, last_name, email, phone, password) values ('John', 'Smith', 'john@mail.com', 1234567890, '123');