import mongoose from 'mongoose';
import gradeModel from './gradeModel.js';

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGO_URL;
db.grades = gradeModel(mongoose);

export { db };
