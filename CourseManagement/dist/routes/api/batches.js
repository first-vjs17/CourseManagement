"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../../db");
const route = express_1.Router();
route.get("/", (req, res) => {
    db_1.Batch.findAll()
        .then((batches) => {
        res.status(200).send(batches);
    })
        .catch((error) => {
        res.status(500).send({
            error: "Could not retrieve batches"
        });
    });
});
exports.default = route;
