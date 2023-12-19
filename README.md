# Flexmoney-internship
# Yoga Admission Form

This project is a simple admission form for monthly yoga classes. It includes a frontend built with React and a backend using Node.js with Express. Users can submit their details and choose a batch for yoga classes.

## Features

- User-friendly form for admission to yoga classes.
- Validation of user details on the frontend.
- Backend API for handling form submissions, validation, and payment simulation.

## Technologies Used

- **Frontend:** React
- **Backend:** Node.js, Express
- **Database:** In-memory storage (for demonstration purposes)
- **HTTP Client:** Axios
- **Hosting:** [Heroku](https://www.heroku.com/)

## Getting Started

### Frontend

1. Navigate to the `yoga-admission-form` directory.
2. Install dependencies: `npm install`
3. Run the app: `npm start`
4. Access the app at `http://localhost:3000`

### Backend

1. Navigate to the `backend` directory.
2. Install dependencies: `npm install`
3. Run the server: `node server.js`
4. The backend will be accessible at `http://localhost:5000`

## Backend API Endpoint

- **POST /submit-form:** Endpoint to submit the admission form data.

## Database Schema (ER Diagram)

- Users Table:

id: Primary key, unique identifier for each user.
name: User's name.
age: User's age.
selected_batch: The batch selected by the user.
payment_status: Indicates whether the user has paid for the current month.
created_at: Timestamp indicating when the user record was created.
updated_at: Timestamp indicating when the user record was last updated.
Batches Table:
id: Primary key, unique identifier for each batch.
start_time: The start time of the batch.
end_time: The end time of the batch.

+---------------------+        +---------------------+
|        Users        |        |       Batches       |
+---------------------+        +---------------------+
| id (PK)             |        | id (PK)             |
| name                |        | start_time          |
| age                 |        | end_time            |
| selected_batch      |        +---------------------+
| payment_status      |
| created_at          |
| updated_at          |
+---------------------+

In this schema:

The Users table stores information about each user, including their name, age, selected batch, payment status, and timestamps for when the record was created or last updated.
The Batches table stores information about each batch, including the batch's start time and end time.
The id column in each table serves as the primary key, ensuring a unique identifier for each record. Relationships between the tables can be established using foreign keys, but for simplicity, I've kept this ER diagram without explicitly showing those relationships.

## Deployment

- Frontend hosted on [Netlify](https://www.netlify.com/)
- Backend hosted on [Heroku](https://www.heroku.com/)

## Additional Notes

- Describe any additional details, assumptions, or considerations made during the project.

## Future Improvements

- Outline potential improvements or features that could be added in the future.

## Author

S Mahesh
