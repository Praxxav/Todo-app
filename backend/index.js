const express = require("express");
const jwt = require("jsonwebtoken");
const { createtodo, updatetodo } = require("./types"); // Correct path
const { todo } = require("./db");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/todo", async function(req, res) {
    const createpayload = req.body;
    const parsedpayload = createtodo.safeParse(createpayload);
    if (!parsedpayload.success) {
        res.status(411).json({
            msg: "You sent the wrong input",
        });
        return;
    }
    // Put in MongoDB
    await todo.create({
        title: createpayload.title,
        description: createpayload.description,
        completed: false
    });

    res.json({
        msg: "Todo created!!"
    });
});

app.get("/todos", async function(req, res) {
    const todos = await todo.find({});

    res.json({
        todos
    });
});

app.put("/completed", async function(req, res) {
    const updatepayload = req.body;
    const parsedpayload = updatetodo.safeParse(updatepayload);
    if (!parsedpayload.success) {
        res.status(411).json({
            msg: "You sent the wrong input",
        });
        return;
    }
    await todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    });

    res.json({
        msg: "Todo marked completed"
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
