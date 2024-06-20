import React, { useState } from "react";

export function Createtodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleAddTodo = async () => {
        if (!title || !description) {
            alert("Title and description cannot be empty");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/todo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: title,
                    description: description
                })
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const json = await response.json();
            alert("Todo added successfully");
            setTitle("");
            setDescription("");
        } catch (error) {
            console.error("Error adding todo:", error);
            alert("Failed to add todo");
        }
    };

    return (
        <div>
            <style>
                {`
                .container {
                    max-width: 550px;
                    margin: 80px auto;
                    padding: 20px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    border-radius: 8px;
                    background-color: black;
                    font-family: 'Arial', sans-serif;
                    text-align: center; /* Center align the content */
                }

                .container h2 {
                    margin-bottom: 20px;
                    color: white; /* Set the font color to white */
                }

                .input-field {
                    width: calc(100% - 20px);
                    padding: 10px;
                    margin: 10px 0;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    font-size: 16px;
                }

                .button {
                    width: 25%;
                    padding: 10px;
                    margin: 10px 0;
                    background-color: #007BFF;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    font-size: 16px;
                    cursor: pointer;
                }

                .button:hover {
                    background-color: #0056b3;
                }
                `}
            </style>
            <div className="container">
                <h2>Create a Todo</h2>
                <input
                    id="title"
                    className="input-field"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={handleTitleChange}
                />
                <br />
                <input
                    id="desc"
                    className="input-field"
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={handleDescriptionChange}
                />
                <br />
                <button
                    className="button"
                    onClick={handleAddTodo}
                >
                    Add a Todo
                </button>
            </div>
        </div>
    );
}
