# Этап сборки
FROM node:20.11.1-alpine as build

WORKDIR /app

# Копируем package.json и package-lock.json
COPY package.json .
COPY package-lock.json .

# Проверяем наличие файлов
RUN ls -l /app

# Устанавливаем зависимости с логированием
RUN npm ci --loglevel verbose

# Копируем остальные файлы проекта
COPY . .

# Проверяем содержимое директории перед сборкой
RUN ls -l /app

# Запускаем сборку проекта
RUN npm run build 

# Проверяем содержимое директории после сборки
RUN ls -l /app/build

# Этап запуска
FROM nginx:stable-alpine

# Копируем собранные файлы в директорию Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Проверяем, что файлы скопированы корректно
RUN ls -l /usr/share/nginx/html

# Копируем конфигурацию Nginx
COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Проверяем конфигурацию Nginx
RUN cat /ect/nginx/conf.d/default.conf

# Открываем порт 80
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]