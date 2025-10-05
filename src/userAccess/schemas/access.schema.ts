import mongoose from "mongoose";

export const AccessSchema = new mongoose.Schema({

    userID: String,
    dateAccess: String

})