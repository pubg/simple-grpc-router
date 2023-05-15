FROM node:20.1.0

RUN apt-get update && apt-get install -y \
    curl \
    wget \
    netcat \
    net-tools \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY --from=envoyproxy/envoy:v1.26.1 /usr/local/bin/envoy /usr/local/bin/envoy

COPY package*.json ./

RUN ["npm", "install", "--only=production"]

COPY bin/run.sh .

RUN ["chmod", "+x", "/app/run.sh"]

COPY src ./src

CMD ["/app/run.sh"]
