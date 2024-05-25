# Используем официальный образ Node.js в качестве базового
FROM node:20.11.1

# Создаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json (если он есть)
COPY package.json . 
COPY package-lock.json .

# Устанавливаем зависимости
RUN npm ci

# Копируем остальные файлы приложения в рабочую директорию
COPY index.js .

# Указываем порт, который будет использоваться приложением 
EXPOSE 8080

# Указываем команду по умолчанию
CMD ["node", "index.js"]