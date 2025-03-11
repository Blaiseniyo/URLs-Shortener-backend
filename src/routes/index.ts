/*
 file: index.ts
 description: This file contains the routes for the API
 author: Blaise Niyonkuru
*/

import express from "express";

import authRoutes from "../features/auth";
import shortenURLRoutes from "../features/urlShorten";
// import { getShortCodeUrlLongUrlController } from "../features/urlShorten/controllers";

const routes = express.Router();

// routes.get("/:short_code", getShortCodeUrlLongUrlController);
routes.use("/auth", authRoutes);
routes.use("/", shortenURLRoutes);

export default routes;
