FROM node:20.1.0

RUN apt-get update && apt-get install -y \
    curl \
    wget \
    netcat \
    net-tools \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

CMD ["echo", "Hello World!"]
