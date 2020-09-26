Sample project for react & express

- React-Redux
- Express
- MongoDB
- Docker

## Bulid Application
1. Copy .env file
    ```code
    $ cp .env.docker .env
    ```
2. Build the project.
    ```code
    $ docker-compose up -d --build
    ```
3. Build the project for Production : This is NOT REAL PRODUCTION. For test.
    ```code
    $ docker-compose -f docker-compose.prod.yml up -d --build
    ```
