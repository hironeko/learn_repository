FROM nginx:1.13.9-alpine

RUN apk update \
    && apk add --no-cache zsh

RUN rm /etc/nginx/conf.d/default.conf 

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80