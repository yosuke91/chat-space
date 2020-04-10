# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

###Association
- belongs_to :groups
- belongs_to :users

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|user_name|string|null: false|
|email|integer|null: false|

###Association
- has_many :groups_users

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|group_name|string|null: false|

###Association
- has_many :groups_users

## commentsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|

###Association
- belongs_to :users
