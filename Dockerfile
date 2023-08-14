ARG ENVOY_VERSION=v1.26.1

FROM envoyproxy/envoy:${ENVOY_VERSION} as envoy

FROM node:20.5.1 as base

RUN apt-get update && apt-get install -y \
    curl \
    wget \
    netcat \
    net-tools \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./

RUN ["npm", "install", "--omit=dev"]

COPY bin/run.sh .

RUN ["chmod", "+x", "/app/run.sh"]

COPY src ./src

COPY --from=envoy /usr/local/bin/envoy /usr/local/bin/envoy

CMD ["/app/run.sh"]
