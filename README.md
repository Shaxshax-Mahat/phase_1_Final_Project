Personal Budget Tracker

Overview

Description
A simple Single Page Application (SPA) to track income and expenses, calculate balance, and manage financial transactions.

It helps users manage their finances.
It allows you to:

Add income and expenses
Edit or Delete transactions
View a summary of total income, expenses, and balance
Search for specific transactions
Filter by transaction type (income/expense)

This project uses HTML, CSS, and JavaScript for the frontend and `json-server` for local data storage (CRUD operations).


Features

✅ Create Transaction – Add income or expense transactions
✅ Read Transactions – View a list of all your financial records
✅ Update Transaction – Edit existing records
✅ Delete Transaction – Remove unwanted transactions
✅ Search – Find transactions by description
✅ Filter – View only income, expenses, or all
✅ Summary – Automatically calculate total income, expenses, and balance



User Stories

As a user, I want to add my daily income and expenses so that I can track my financial activity.
As a user, I want to edit or delete a transaction if I made a mistake.
As a user, I want to filter and search my transactions so I can easily find specific records.
As a user, I want to see a summary of my finances so I know my balance.


Tech Stack

| Technology  | Usage                                |
| ----------- | ------------------------------------ |
| HTML5       | Structure and layout                 |
| CSS3        | Styling                              |
| JavaScript  | Functionality (CRUD, Event Handling) |
| json-server | Mock REST API for data persistence   |


Setup Instructions

Install `json-server`

Make sure you have **Node.js** installed.
Install `json-server` globally:

```bash
npm install -g json-server

Setup `db.json`

Create a `db.json` file in your project root:

json
{
  "transactions": []
}


 Run the server

bash
json-server --watch db.json


Server will run at:
`http://localhost:3000/transactions`



Open the project*

Open the `index.html` file in your browser.
Make sure your `json-server` is running while using the app.


Folder Structure


├── index.html        # Frontend UI
├── style.css          # Styling
├── app.js             # JavaScript logic (CRUD operations)
├── db.json            # Mock API database (json-server)
└── README.md          # Project documentation




Project Requirements Met

| Requirement                                       | Implemented |
| ------------------------------------------------- | ----------- |
| SPA (Single Page App)                             | ✅           |
| Uses `json-server`                                | ✅           |
| CRUD operations                                   | ✅           |
| 3+ Event Listeners (submit, input, change, click) | ✅           |
| Array iteration (filter, map)                     | ✅           |
| Clean & DRY code                                  | ✅           |



Challenges Faced

 Handling form state when switching between **Add** and **Edit** mode
 Managing local array updates after server calls to avoid re-fetching data
 Keeping the UI and the API data synchronized



Future Improvements

 Add user authentication (multi-user support)
 Add data visualization (charts for expenses vs income)
 Export reports as PDF or CSV


Author

Abdirahman Mahat Hussein
This project was built as part of Phase 1 JavaScript learning.


License

This project is for educational purposes only.





