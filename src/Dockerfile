# FROM ops-harbor.staryuntech.com/sre/node:16.16.0-private AS builder
FROM ops-harbor.staryuntech.com/sre/node:16.16.0-aliyun AS builder

#FROM ops-harbor.staryuntech.com/sre/node:16.16.0-20230725 AS builder
ARG ENV_ARG
WORKDIR /opt/build/
COPY . /opt/build/
RUN npm i --force --loglevel verbose  \
    && npm run build:${ENV_ARG} 

FROM ops-harbor.staryuntech.com/sre/nginx:1.25-20230725
COPY nginx.conf  /etc/nginx/conf.d
COPY --from=builder /opt/build/dist  /usr/share/nginx/html/