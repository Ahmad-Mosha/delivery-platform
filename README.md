# Delivery Platform

A backend microservices project using:
- NestJS (Auth, Users)
- Django (Restaurants & Menus)
- Go (Orders & Delivery)
- GraphQL Gateway (NestJS)

## Services
- Auth Service (JWT based)
- User Service
- Restaurant & Menu Service
- Order Service
- Delivery Service

Each service runs in Docker and is orchestrated via `docker-compose`.

## Run Project

```bash
docker-compose up --build