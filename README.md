# MTRPZ-lab3-Nodejs
# TODO API (Node.js + MongoDB)

Цей проєкт — простий RESTful API для керування завданнями (TODO), реалізований за допомогою Express.js і MongoDB.

## Технології

- **Node.js + Express.js** — вебсервер
- **MongoDB (через mongoose)** — збереження завдань
- **dotenv** — налаштування змінних середовища
- **Docker** — контейнеризація
- **Postman** — для тестування API

## Встановлення (локально без Docker)

1. **Встановіть залежності**
```bash
npm install
```

2. **Запустіть MongoDB** (локально або через MongoDB Atlas).

3. **Створіть `.env` файл**
```dotenv
MONGO_URI=mongodb://localhost:27017/todos
PORT=3000
```

4. **Запуск**
```bash
node src/index.js
```

## Приклади запитів

| Метод | Шлях            | Опис                |
|-------|------------------|---------------------|
| GET   | `/api/todos`     | Отримати всі TODO |
| POST  | `/api/todos`     | Додати TODO        |
| PUT   | `/api/todos/:id` | Оновити TODO       |
| DELETE| `/api/todos/:id` | Видалити TODO      |

### Тестування в Postman

- **GET** `/api/todos`

- **POST** `/api/todos`
    - Body (JSON):
      ```json
      {
        "text": "Зробити лабу"
      }
      ```

- **PUT** `/api/todos/ID`
    - Body (JSON):
      ```json
      {
        "completed": "True"
      }
      ```
- **DELETE** `/api/todos/ID`

## Запуск у Docker

### Побудова образу
```bash
docker build -t todo-app .
```

### Запуск контейнера:
```bash
docker run -p 3000:3000 --env MONGODB_URI="mongodb://<your-mongo-host>:27017/todos" todo-app
```