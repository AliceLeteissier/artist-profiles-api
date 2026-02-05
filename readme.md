
# Artist Profiles API

Artist Profiles API is a RESTful API built with Node.js, Express, and MongoDB atlas that allows users to create, read, update, and delete profiles of contemporary artists. Each profile stores personal information, artistic practice details (mediums, artworks, exhibitions), education, residencies, and distinctions, enabling galleries, curators, and institutions to explore and connect with artists. The application connects to a cloud database hosted on AWS and demonstrates CRUD operations using Mongoose.

---

#  Technologies Used

- Node.js
- Express.js
- MongoDB Atlas (Cloud Database)
- Mongoose
- dotenv
- morgan

---

#  How to Run the Project

## 1. Clone the repository

bash
git clone https://github.com/AliceLeteissier/artist-profiles-api.git
cd artist-profiles-api

---

## 2. Install dependencies

Make sure **Node.js (v18 or later)** is installed on your machine.

bash
npm install


---

## 3. Create the environment variables file

Create a file named `config.env` in the  folder "config" and add the following:

NODE_ENV=development

PORT=8000 

MONGO_URI= **SECRET URI PROVIDED SEPARATELY**


---

## 4. Start the server

bash
npm start


For development mode (if nodemon is installed):

bash
npm run dev


The server will start on:


http://localhost:8000


---

#  Database Seeding (Optional)

A seeder script is included to populate the database with sample data.

### Import sample data

bash
node seeder.js -i

### Delete all seeded data

bash
node seeder.js -d


Note: The MongoDB Atlas database is already populated with sample data for evaluation, so running the seeder is optional.

---

# MongoDB Atlas Configuration

* The project uses **MongoDB Atlas (cloud database hosted on AWS)**.
* A dedicated database user has been created for evaluation purposes:


Username: examiner

Password: **SECRET PASSWORD PROVIDED SEPARATELY**


* The IP access list allows connections from any IP for examination purposes.


---


# Notes for Examiner

* The API connects to MongoDB Atlas; no local MongoDB installation is required.
* Sample data is already stored in the cloud database.
* Any REST client (Postman, Insomnia, curl, etc.) can be used to test the API.




