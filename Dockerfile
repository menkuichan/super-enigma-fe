FROM nginx:alpine

WORKDIR /app

COPY ./build /app/

COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
