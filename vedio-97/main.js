import express from "express";
import mongoose from "mongoose";
import Company from "./models/company.js";

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/company", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected");
}).catch(err => console.error(err));

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle data generation
app.get('/generate', async (req, res) => {
    try {
        // Clear existing records
        await Company.deleteMany({});

        // Generate new dummy data
        const dummyData = [
            {
                name: "Harry",
                salary: 45000000,
                language: "Python",
                city: "New York",
                isManager: true
            },
            {
                name: "John",
                salary: 55000000,
                language: "Java",
                city: "San Francisco",
                isManager: false
            },
            
            {
                name: "Emma",
                salary: 60000000,
                language: "JavaScript",
                city: "Los Angeles",
                isManager: true
            }
        ];

        // Insert dummy data
        await Company.insertMany(dummyData);

        res.status(200).send("Data generated successfully.");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error generating data.");
    }
});

// Serve static HTML file
app.use(express.static('public'));

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
