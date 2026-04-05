# 💰 Finance Dashboard

A clean and interactive **Finance Dashboard UI** built using React and Redux Toolkit.
This project helps users track financial activity, visualize spending patterns, and manage transactions with a simple role-based interface.

---

## 📂 Repository

👉 https://github.com/suryasekhardhal/financialDashboard

---

## 📌 Features

### 📊 Dashboard Overview

* Summary cards for:

  * Total Balance
  * Total Income
  * Total Expenses
* Time-based visualization (Line Chart)
* Clean and minimal UI

---

### 💳 Transactions Management

* View all transactions with:

  * Date
  * Amount
  * Category
  * Type (Income / Expense)
* Search functionality (by category/type)
* Delete transactions (Admin only)

---

### 🔐 Role-Based UI (Frontend Simulation)

* **Viewer**

  * Can view data only
* **Admin**

  * Can add and delete transactions

---

### 🧠 Insights

* Highest spending category
* Total expense calculation
* Simple financial observations

---

### 🌙 Dark Mode

* Toggle between light and dark theme
* Theme persists using localStorage

---

### 💾 Data Persistence

* Transactions stored in localStorage
* Data remains after page refresh

---

## 🛠 Tech Stack

* **Frontend:** React (Vite)
* **State Management:** Redux Toolkit
* **Styling:** Tailwind CSS
* **Charts:** Recharts
* **Persistence:** localStorage

---

## 🧠 Approach

* Used **Redux Toolkit** as a single source of truth for:

  * Transactions
  * Role
  * Search term
  * Theme
* Derived data (balance, insights) computed inside components
* Clean separation of concerns:

  * UI → handles interaction & validation
  * Redux → manages state only

---

## 📁 Project Structure

```
src/
 ├── components/
 │   ├── Navbar.jsx
 │   ├── SummaryCards.jsx
 │   ├── TransactionsTable.jsx
 │   ├── AddTransactionForm.jsx
 │   ├── Insights.jsx
 │   ├── Chart.jsx
 |   |__Sidebar.jsx
 |   |  
 │
 ├── pages/
 │   ├── Dashboard.jsx
 │
 ├── features/
 │   ├── financeSlice.js
 |   ├── themeSlice.js
 │
 ├── App.jsx
```

---

## ⚙️ Installation & Setup

```bash
git clone https://github.com/your-username/finance-dashboard.git
cd finance-dashboard
npm install
npm run dev
```

---

## 🎯 Key Design Decisions

* Kept state minimal to avoid overengineering
* Used derived calculations instead of storing redundant data
* Implemented role-based UI without backend complexity
* Focused on clean UI and usability over excessive features

---

## ⚠️ Assumptions

* Role-based access is simulated on frontend only
* Data is not persisted in a backend (localStorage used instead)
* Categories are user-defined and not restricted

---

## ✨ Future Improvements

* Backend integration (authentication & database)
* Advanced filtering and sorting
* Export data (CSV/JSON)
* Notifications and analytics

---

## 📸 Screenshots

(Add screenshots here if needed)

---

## 🙌 Acknowledgement

This project was built as part of a frontend evaluation assignment to demonstrate UI design, state management, and component architecture skills.

---
