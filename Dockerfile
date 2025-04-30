# Usamos una imagen ligera de Nginx
FROM nginx:alpine

# Eliminamos la página por defecto de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiamos nuestros archivos de la Pokédex al contenedor
COPY . /usr/share/nginx/html

# Exponemos el puerto 80 (donde corre Nginx)
EXPOSE 80
