# FSPP Project

PERN Stack Project

## Important Links

- [Deployed API Server](https://fspp-project-api.herokuapp.com)
- [Deployed Frontend](https://herokuapp.com)
- [Trello Board](https://trello.com/b/Bcj7uhR4/pern-stack-project)
- [ERD](https://github.com/anvaron/FSPP-Project/blob/main/assets/fspp_project_erd.png)
- [Wireframes](https://)

## Local Setup

If you would like to run this project locally, please read the following steps:

### Frontend Setup

```
# Proceed to clone this repository to your machine
git clone https://github.com/anvaron/FSPP-Project.git

# Navigate to the frontend directory
cd fspp-project/front-end

# Create a .env file
REACT_APP_API_URL=http://localhost:3000

# In front-end root, run npm install
npm install

# Then proceed to start the react server
npm run start
```

### Backend Setup

```
# Navigate to backend directory
cd fspp-project/backend

# Proceed to create the .env file on /back-end root
touch .env

# Edit the /back-end .env file with the Postgres database connection data
PORT = 3345
PG_HOST = localhost
PG_PORT = 5432
PG_DATABASE = ecommerce_dev
PG_USER = postgres

# On the back-end root
# Run npm install in CLI
npm install

# To create the Postgres database, run the schema.sql script
npm run db:init
# To seed the database with some data, run the seed.sql script
npm run db:seed

# To start the node server
npm start or nodemon server.js
```
