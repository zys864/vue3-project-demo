FROM node:lts-alpine3.16 AS builder
WORKDIR /app
COPY . .
RUN npm config set registry https://repo.huaweicloud.com/repository/npm/\
    && npm install --location=global pnpm\
    && pnpm install\
    && pnpm build

FROM nginx:stable-alpine
ARG USERNAME=app
ARG USERGROUP=${USERNAME}
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# Create the user
RUN addgroup -g ${USER_GID} ${USERGROUP} \
    && adduser --disabled-password --gecos "" --ingroup ${USERGROUP} \
    --no-create-home --uid ${USER_UID} ${USERNAME}

WORKDIR /app
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist ${WORKDIR}
RUN chown -R ${USERNAME}:${USERGROUP} /app && chmod -R 755 /app && \
    chown -R ${USERNAME}:${USERGROUP} /var/cache/nginx && \
    chown -R ${USERNAME}:${USERGROUP} /var/log/nginx && \
    chown -R ${USERNAME}:${USERGROUP} /etc/nginx/conf.d
RUN touch /var/run/nginx.pid && \
    chown -R ${USERNAME}:${USERGROUP} /var/run/nginx.pid

USER ${USERNAME}

ENTRYPOINT ["nginx", "-g", "daemon off;"]
