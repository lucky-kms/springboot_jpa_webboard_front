# Spring Boot + React 게시판

## 1. 프로젝트 소개

Spring Boot + JPA + MySQL + React를 활용한
게시판 프로젝트입니다.

## 2. 주요 기능

- 회원가입
- 로그인
- 게시글 CRUD
- 검색
- 페이징
- REST API
- React 연동
- 예외 처리

## 3. 기술 스택

### Backend
- Java
- Spring Boot
- Spring Data JPA
- MySQL

### Frontend
- React
- TypeScript
- Vite
- Axios

## 4. 프로젝트 구조

backend/
frontend/

## 5. 실행 방법 *****************

### MySQL

boarddb 데이터베이스 생성

create DATABASE boardDbTest;

USE boardDbTest;

### boarddb
CREATE TABLE boarddb (
id int auto_increment primary key,
title varchar(100) NOT NULL,
content text,
created_date timestamp default current_timestamp
);

### member
CREATE TABLE member (
id INT AUTO_INCREMENT PRIMARY KEY,
userId VARCHAR(30) NOT NULL UNIQUE,
password VARCHAR(100) NOT NULL,
name VARCHAR(30) NOT NULL
);

### Backend

Spring Boot 실행

### Frontend

npm install
npm run dev

## 6. 접속 *****************
백엔드 Spring boot + jpa + thymeleaf
http://localhost:8080/board/login

프론트 REST + React
http://localhost:5173

## 7. 테스트 계정

ID: kms1
PW: 1234

## 8. REST API

GET /api/boards
GET /api/boards/{id}
POST /api/boards
PUT /api/boards/{id}
DELETE /api/boards/{id}
