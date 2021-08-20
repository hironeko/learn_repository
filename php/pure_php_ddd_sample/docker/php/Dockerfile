FROM php:7.2.11-fpm-alpine

COPY php.ini /usr/local/etc/php/

RUN apk update \
    && apk add --no-cache libmcrypt-dev \
    mysql-client \
    zip \
    unzip \
    vim \
    zsh \
    autoconf \
    libtool \
    g++ \
    git \
    make \
    && pecl install redis \
    && docker-php-ext-install pdo_mysql \
    && docker-php-ext-enable redis \
    && curl -sS https://getcomposer.org/installer | php \
    && mv composer.phar /usr/local/bin/composer

WORKDIR /var/www/

EXPOSE 9000