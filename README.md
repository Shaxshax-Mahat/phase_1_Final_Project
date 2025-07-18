Personal Budget Tracker

Description
A simple Single Page Application (SPA) to track income and expenses, calculate balance, and manage financial transactions.

Features
- Add income and expenses
- Filter by type (income/expense)
- Search by description
- Calculate total income, expenses, and balance
- Persist data using json-server

Installation
1. Run `json-server --watch db.json`
2. Open `index.html` in your browser

Technologies
- HTML
- CSS
- JavaScript
- json-server

simple User Guide
How a user should use your Personal Budget Tracker:

How to Use the Personal Budget Tracker

Step 1: Open the Application

      Open `index.html` in your browser (e.g., Chrome, Firefox).
      Make sure `json-server` is running if you are using `db.json`.

      bash
        json-server --watch db.json


Step 2: Add a Transaction

  1.Fill in the form at the top:

| Field       | What to Enter                                         |
| ----------- | ----------------------------------------------------- |
| Description | What the transaction is (e.g., "Salary", "Groceries") |
| Amount      | The amount of money (e.g., 200 or 50)                 |
| Type        | Choose Income or Expense                      |
| Category    | Category name (e.g., Job, Food, Rent)                 |
| Date        | Pick the date of the transaction                      |

  2.Click "Add Transaction"

    The transaction will appear in the list below.
    The totals (Income, Expenses, Balance) will update automatically.


Step 3: View Your Transactions**

 All transactions will show in the 'list'.
 Each item shows:
  `Date - Description - Category - Amount`
* **Income** appears in **green**.
* **Expenses** appear in **red**.

---

### **Step 4: Filter or Search**

* **Filter by Type:**
  Use the dropdown to show only **Income**, **Expense**, or **All**.

* **Search by Description:**
  Use the search box to find a transaction by name.

---

### **Step 5: Understand the Summary**

* **Total Income:** Shows all the money you've earned.
* **Total Expenses:** Shows all the money you've spent.
* **Balance:** The difference between income and expenses.



Example Usage:

| Action                     | Result                            |
| -------------------------- | --------------------------------- |
| Add "Salary" as Income     | Total Income increases            |
| Add "Groceries" as Expense | Total Expenses increases          |
| Filter by Expense          | Only expenses show                |
| Search for "Groceries"     | Only groceries appear in the list |


Step 6 (Optional): Run JSON-Server

If you want data to persist when refreshing the page:

1.Make sure you have json-server installed:

    bash
    npm install -g json-server


2.Start the server:

bash
json-server --watch db.json




Important Notes:

 All calculations are automatic.
 No need to reload the page; it’s a Single Page Application (SPA).
 Your data will be saved in json-server if it's running.


If you'd like, I can help you:

 Add this to your GitHub repo’s README.md
* Create a **video script** for explaining this live or in a demo

Would you like that?


Author
Abdirahman Mahat Hussein

Here’s a **professional and clear `README.md`** template for your **Personal Budget Tracker** Phase 1 Project:

---

# 🧾 Personal Budget Tracker

## **Overview**

**Personal Budget Tracker** is a simple Single Page Application (SPA) that helps users manage their finances.
It allows you to:

* **Add** income and expenses
* **Edit** or **Delete** transactions
* **View a summary** of total income, expenses, and balance
* **Search** for specific transactions
* **Filter** by transaction type (income/expense)

This project uses **HTML**, **CSS**, and **JavaScript** for the frontend and `json-server` for local data storage (CRUD operations).

---

## **Features**

✅ **Create Transaction** – Add income or expense transactions
✅ **Read Transactions** – View a list of all your financial records
✅ **Update Transaction** – Edit existing records
✅ **Delete Transaction** – Remove unwanted transactions
✅ **Search** – Find transactions by description
✅ **Filter** – View only income, expenses, or all
✅ **Summary** – Automatically calculate total income, expenses, and balance

---

## **User Stories**

* **As a user**, I want to add my daily income and expenses so that I can track my financial activity.
* **As a user**, I want to edit or delete a transaction if I made a mistake.
* **As a user**, I want to filter and search my transactions so I can easily find specific records.
* **As a user**, I want to see a summary of my finances so I know my balance.

---

## **Tech Stack**

| Technology      | Usage                                |
| --------------- | ------------------------------------ |
| **HTML5**       | Structure and layout                 |
| **CSS3**        | Styling                              |
| **JavaScript**  | Functionality (CRUD, Event Handling) |
| **json-server** | Mock REST API for data persistence   |

---

## **Setup Instructions**

### **1️⃣ Install `json-server`**

Make sure you have **Node.js** installed.
Install `json-server` globally:

```bash
npm install -g json-server
```

---

### **2️⃣ Setup `db.json`**

Create a `db.json` file in your project root:

```json
{
  "transactions": []
}
```

---

### **3️⃣ Run the server**

```bash
json-server --watch db.json
```

Server will run at:
`http://localhost:3000/transactions`

---

### **4️⃣ Open the project**

Open the `index.html` file in your browser.
Make sure your `json-server` is running while using the app.

---

## **Folder Structure**

```
├── index.html        # Frontend UI
├── style.css          # Styling
├── app.js             # JavaScript logic (CRUD operations)
├── db.json            # Mock API database (json-server)
└── README.md          # Project documentation
```

---

## **Demo Screenshots (Optional)**

> *(Add screenshots here if you want)*

---

## **Project Requirements Met**

| Requirement                                       | Implemented |
| ------------------------------------------------- | ----------- |
| SPA (Single Page App)                             | ✅           |
| Uses `json-server`                                | ✅           |
| CRUD operations                                   | ✅           |
| 3+ Event Listeners (submit, input, change, click) | ✅           |
| Array iteration (filter, map)                     | ✅           |
| Clean & DRY code                                  | ✅           |

---

## **Challenges Faced**

* Handling form state when switching between **Add** and **Edit** mode
* Managing local array updates after server calls to avoid re-fetching data
* Keeping the UI and the API data **synchronized**

---

## **Future Improvements**

* Add user authentication (multi-user support)
* Add data visualization (charts for expenses vs income)
* Export reports as PDF or CSV

---

## **Author**

**Abdirahman Mahat Hussein**
*This project was built as part of Phase 1 JavaScript learning.*

---

## **License**

This project is for **educational purposes only**.





