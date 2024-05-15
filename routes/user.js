import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import authorize from "../middleware/auth.js";
import "dotenv/config"
import express from "express";
import myknex from 'knex';
import knexfile from '../knexfile.js';
const router = express.Router();
const knex = myknex(knexfile); 

router.post("/register", async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
        return res.status(400).send("Please enter the required fields");
    }
    const newUser = {
        firstName,
        lastName,
        email,
        password:bcrypt.hashSync(password),
    };
    try {
        await knex("user").insert(newUser);
        res.status(201).send("Registered successfully");
    } catch (err) {
        console.log(err);
        res.status(400).send("Failed registration");
    }
}); 
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send("PLease enter ther required fields");
    }
    const user = await knex("user").where({ email: email }).first();
    if (!user) {
        return res.status(400).send("Invalid email");
    }
    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (!isPasswordCorrect) {
        return res.status(400).send("Invalid password");
    }
    const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_KEY,
        { expiresIn: "24h" }
    );
    res.json({ token: token });
    res.status(200);
});

router.get("/current", async (req, res) => {
    if (!req.headers.authorization) {
        return res.status(401).send("Please login");
    }
    console.log(req.headers.authorization);
    const authHeader = req.headers.authorization;
    const authToken = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(authToken, process.env.JWT_KEY);
        console.log(decoded);
        const user = await knex("user").where({ id: decoded.id }).first();
        delete user.password;
        res.json(user);
    } catch (err) {
        console.log(err);
        return res.status(401).send("Invalid auth token: ", err);
    }
});
router.get("/", authorize, async (_req, res) => {
    try {
        const users = await knex.select("*").from("user");
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: "Unable to retrieve users data" });
    }
});
router.get("/info", async (_req, res) => {
    try {
        const users = await knex.select("*").from("user");
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: "Unable to retrieve users data" });
    }
});

router.post('/info', async (req, res) => {
    const {firstName,lastName,email} = req.body;
    try {
        const [info] = await knex('traveller').insert({
            firstName,
            lastName,
            email,
            destination:"USA"
        });
        const inform = await knex('traveller')
        return res.status(201).json(inform);
    } catch (error) {
        console.error('Error adding new info:', error);
        return res.status(500).json({ error: 'Error' });
    }
})
export default router;
