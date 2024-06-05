# Этап сборки
FROM node:20.11.1-alpine as build

WORKDIR /app

# Копируем package.json и package-lock.json
COPY package.json .
COPY package-lock.json .

# Устанавливаем зависимости
RUN npm ci

# Копируем остальные файлы проекта
COPY . .

# Строим проект
RUN npm run build

# Этап сервера
FROM nginx:stable-alpine

# Копируем скомпилированные файлы
COPY --from=build /app/build /usr/share/nginx/html

# Копируем конфигурацию nginx
COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт
EXPOSE 80

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]