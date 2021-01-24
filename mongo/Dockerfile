FROM mongo:latest
# ENV MONGO_INITDB_ROOT_USERNAME=admin
# ENV MONGO_INITDB_ROOT_PASSWORD=password
RUN mkdir -p data/db
# COPY setup.js /docker-entrypoint-initdb.d/
EXPOSE 27017
VOLUME  /data/db /data/db 
CMD ["mongod"]