# Fullstack NestJS + Angular Monorepo

![TypeScript](https://img.shields.io/badge/TypeScript-4A4A55?style=flat&logo=typescript)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=nestjs)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=flat&logo=angular)

A modern fullstack monorepo with **NestJS backend** and **Angular 20 frontend** using standalone components, featuring shared types between both layers.

## 🚀 Features

- **Backend**: NestJS with TypeScript
- **Frontend**: Angular 20 (standalone components)
- **Shared Code**: Types, interfaces and validations
- **REST API**: Ready-to-use Todo example
- **Optimized**: Pre-configured for development

## ⚡ Quick Start

```bash
# 1. Install dependencies
cd backend && npm install
cd ../frontend && npm install

# 2. Start both servers (in separate terminals)
cd backend && npm run start:dev  # http://localhost:3000
cd ../frontend && ng serve      # http://localhost:4200
```

## Project Structure

```
fullstack-app/
├── backend/      # NestJS API
├── frontend/     # Angular 20 app
└── shared/       # Shared types (npm linked)
```


## 🔧 Key Components

Location	Description

```
shared/src/	        Shared TS types & validations
backend/src/todo/	Example REST API (CRUD operations)
frontend/src/app/	Angular standalone components
```
