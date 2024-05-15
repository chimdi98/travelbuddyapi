import express from "express";
const trips = express.Router();
import knex from 'knex';
import knexfile from '../knexfile.js';
const myknex = knex(knexfile);

trips.get('/trips', async (req,res) => {
    try {
        const tripDetails = await myknex('details');
        res.status(200).json(tripDetails);
    } catch (error) {
        console.error('Error fetching trips', error)
        res.status(500).json({error: 'Internal server error'})
    }
})

trips.get('/travellers', async (req,res) => {
    try {
        const traveller = await myknex('traveller');
        res.status(200).json(traveller);
    } catch (error) {
        console.error('Error fetching travellers', error)
        res.status(500).json({error: 'Internal server error'})
    }
})

trips.get('/trips', async (req,res) => {
    try {
        const tripDetails = await myknex('details');
        res.status(200).json(tripDetails);
    } catch (error) {
        console.error('Error fetching trips', error)
        res.status(500).json({error: 'Internal server error'})
    }
})

trips.get('/trips', async (req,res) => {
    try {
        const tripDetails = await myknex('details');
        res.status(200).json(tripDetails);
    } catch (error) {
        console.error('Error fetching trips', error)
        res.status(500).json({error: 'Internal server error'})
    }
})

export default trips;