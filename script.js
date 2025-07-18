// Base URL for the json-server API endpoint
const baseUrl = "http://localhost:3000/transactions";

// Get references to DOM elements
const form = document.getElementById('transaction-form');
const list = document.getElementById('transaction-list'); // This is <tbody>
const searchInput = document.getElementById('search');
const filterType = document.getElementById('filter-type');

// Local storage for transactions data
let transactions = [];

// On page load, fetch all transactions
document.addEventListener('DOMContentLoaded', fetchTransactions);

// Add event listeners
form.addEventListener('submit', handleAddTransaction);
searchInput.addEventListener('input', handleSearch);
filterType.addEventListener('change', handleFilter);

/***********************
 * 1. READ (Fetch & Display)
 ***********************/
function fetchTransactions() {
    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            transactions = data; // Save data to local array
            renderTransactions(transactions); // Display in table
            calculateSummary(); // Update totals
        });
}

// Render transactions in a table
function renderTransactions(data) {
    list.innerHTML = ""; // Clear existing rows

    data.forEach(tx => {
        const tr = document.createElement('tr');
        tr.className = tx.type; // Apply 'income' or 'expense' for styling

        // Fill table row with transaction data and action buttons
        tr.innerHTML = `
            <td>${tx.date}</td>
            <td>${tx.description}</td>
            <td>${tx.category}</td>
            <td>$${tx.amount}</td>
            <td>${tx.type}</td>
            <td>
                <button data-id="${tx.id}" class="edit-btn">Edit</button>
                <button data-id="${tx.id}" class="delete-btn">Delete</button>
            </td>
        `;

        list.appendChild(tr);
    });

    // Attach button event listeners
    document.querySelectorAll('.delete-btn').forEach(btn =>
        btn.addEventListener('click', handleDelete)
    );

    document.querySelectorAll('.edit-btn').forEach(btn =>
        btn.addEventListener('click', handleEdit)
    );
}

/***********************
 * 2. CREATE (Add Transaction)
 ***********************/
function handleAddTransaction(e) {
    e.preventDefault();

    const newTransaction = {
        description: document.getElementById('description').value,
        amount: parseFloat(document.getElementById('amount').value),
        type: document.getElementById('type').value,
        category: document.getElementById('category').value,
        date: document.getElementById('date').value
    };

    fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTransaction)
    })
    .then(res => res.json())
    .then(data => {
        transactions.push(data);
        renderTransactions(transactions);
        calculateSummary();
        form.reset();
    });
}

/***********************
 * 3. UPDATE (Edit Transaction)
 ***********************/
function handleEdit(e) {
    const id = e.target.dataset.id;
    const tx = transactions.find(t => t.id == id);

    document.getElementById('description').value = tx.description;
    document.getElementById('amount').value = tx.amount;
    document.getElementById('type').value = tx.type;
    document.getElementById('category').value = tx.category;
    document.getElementById('date').value = tx.date;

    form.removeEventListener('submit', handleAddTransaction);

    form.addEventListener('submit', function updateTransaction(e) {
        e.preventDefault();

        const updatedTx = {
            description: document.getElementById('description').value,
            amount: parseFloat(document.getElementById('amount').value),
            type: document.getElementById('type').value,
            category: document.getElementById('category').value,
            date: document.getElementById('date').value
        };

        fetch(`${baseUrl}/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedTx)
        })
        .then(res => res.json())
        .then(data => {
            transactions = transactions.map(t => t.id == id ? data : t);
            renderTransactions(transactions);
            calculateSummary();
            form.reset();

            form.removeEventListener('submit', updateTransaction);
            form.addEventListener('submit', handleAddTransaction);
        });
    });
}

/***********************
 * 4. DELETE (Remove Transaction)
 ***********************/
function handleDelete(e) {
    const id = e.target.dataset.id;

    fetch(`${baseUrl}/${id}`, { method: 'DELETE' })
    .then(() => {
        transactions = transactions.filter(tx => tx.id != id);
        renderTransactions(transactions);
        calculateSummary();
    });
}

/***********************
 * 5. EXTRAS: Search, Filter, Summary
 ***********************/

// Search by description
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = transactions.filter(t =>
        t.description.toLowerCase().includes(searchTerm)
    );
    renderTransactions(filtered);
}

// Filter by type
function handleFilter(e) {
    const filterValue = e.target.value;
    if (filterValue === 'all') {
        renderTransactions(transactions);
    } else {
        const filtered = transactions.filter(t => t.type === filterValue);
        renderTransactions(filtered);
    }
}

// Calculate income, expenses, and balance
function calculateSummary() {
    const income = transactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0);

    const expenses = transactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0);

    document.getElementById('total-income').textContent = income;
    document.getElementById('total-expenses').textContent = expenses;
    document.getElementById('balance').textContent = income - expenses;
}

