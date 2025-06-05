# 🤖 Chatbot IA — Backend

Backend para una aplicación tipo chatbot que se conecta a una API de inteligencia artificial (como OpenAI) y a una base de datos MySQL para almacenar el historial de conversaciones. Construido con Node.js y Express.

---

## 🚀 Tech Stack

- **Backend:** Node.js + Express + axios + cors + dotenv + express-rate-limit + mysql2 + swagger-jsdoc
- **Base de datos:** MySQL
- **IA:** API externa 

---

## 🧪 Instalación

### 1. Clonar el repositorio

git clone https://github.com/camilolondonot/chat-test-server.git
#cd chat-test-server/server


### 2. Instalar dependencias
npm install

### 3. Ejecutar en desarrollo
npm run dev

# Configuración de la base de datos
#DB_HOST=localhost
#DB_PORT=puerto
#DB_USER=root
#DB_PASSWORD=tu_password
#DB_NAME=nombre_base_datos


### 4. 📁 Estructura del Proyecto
```
├── 📁server
    └── 📁src
        └── 📁config
            └── db.js
        └── 📁controllers
            └── index.js
        └── index.js
        └── 📁routes
            └── index.js
        └── swagger.js
    └── .env
    └── .gitignore
    └── package-lock.json
    └── package.json
    └── README.md
```


👨‍💻 Autor
Desarrollado por Milo desde Medellín, Colombia 🇨🇴
GitHub: @camilolondonot