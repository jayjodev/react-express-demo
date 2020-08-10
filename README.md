// Solidware Project

Let's randomly divide people for lunch time.

## Requirements

### Tasks
  - Show current people
  - ADD/DELETE a person to people
      - A person has only one property: name
      - Prevent adding an existing name
  - MAKE random groups with options
      - Options (Please implement options together, not separately)
          - The Number of groups
          - Minimum member size (of a group)
      - Show error if you can't make groups
  - Example
      - 6people
      - Minimum member size : 2, The number of groups: 2
      - Group cases : (2, 4), (3, 3), (4, 2)
      - members must be randomly assigned to each groups.


Tech Stack

- React-Redux
- Express
- MongoDB

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