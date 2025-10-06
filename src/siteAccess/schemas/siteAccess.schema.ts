import mongoose from "mongoose";

export const siteAccessSchema = new mongoose.Schema({

    dateSiteAccess: String,
    countSiteAccess: Number

})