FROM cypress/base:20.18.0

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN npm install

RUN $(npm bin)/cypress verify

RUN ["npm", "run", "cy:e2e"]
