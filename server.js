// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const users = []; // In-memory database

// Validation function for user data
const validateUserData = (data) => {
  const { name, age, selectedBatch } = data;

  if (!name || !age || !selectedBatch) {
    return false;
  }

  // Additional validation (e.g., age between 18 and 65)

  return true;
};

// Endpoint to receive form data
app.post('/submit-form', (req, res) => {
  const formData = req.body;

  // Validate user data
  if (!validateUserData(formData)) {
    return res.status(400).json({ error: 'Invalid form data' });
  }

  // Simulate payment processing
  // You can replace this with a real payment processing function
  const paymentResult = simulatePaymentProcessing(formData);

  if (!paymentResult.success) {
    return res.status(500).json({ error: 'Payment failed' });
  }

  // Store user data in the database
  users.push(formData);

  // Send a success response to the frontend
  res.json({ success: true, message: 'Form submitted successfully' });
});

// Simulate payment processing
const simulatePaymentProcessing = (formData) => {
  // Implement your payment processing logic here
  // This is a placeholder; replace it with your actual payment processing code
  return { success: true, message: 'Payment processed successfully' };
};
