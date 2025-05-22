---

````markdown
# 🧊 SILUP – Sistema de Inventario en Linea de Uso Personal

Full-stack inventory tracker with per-user categories (fridge, freezer, groceries, produce), item history, and JWT-based authentication.

---

## 📦 Tech Stack

- 🔧 **API**: Express.js + MongoDB + JWT + bcrypt
- 💡 **Frontend**: React (Vite or CRA)
- 🐳 **Database**: MongoDB via Docker
- 🧪 **Dev runner**: `concurrently` (API + frontend)

---

## 🚀 Quick Start

### 1. Clone the repo

```bash
git clone https://github.com/cisdenali12/SILUP.git
cd SILUP
````

---

### 2. Add environment variables

Create `./api/.env`:

```env
MONGO_URI=mongodb://localhost:27017/silup
JWT_SECRET=your_secret
PORT=3000
```

---

### 3. Start MongoDB (via Docker Compose)

```bash
docker-compose up -d mongo
```

If you don’t have Docker Compose: [Install Docker Compose →](https://docs.docker.com/compose/install/)

> 💡 **Dev Tip:** To reset MongoDB:

```bash
docker-compose down -v
```

---

### 4. Run the app (API + frontend via npm)

From the root:

```bash
npm install
npm run start
```

This will:

* Start Express API → [http://localhost:3000](http://localhost:3000)
* Start React frontend → [http://localhost:5173](http://localhost:5173)

> Uses `concurrently` to run both at once.

---

## 📁 Project Structure

```
/api         ← Express backend (auth, routes, db)
/frontend    ← React frontend (inventory UI)
/docker-compose.yml
```

---

## 🧪 API Overview

| Endpoint                     | Method | Auth | Description          |
| ---------------------------- | ------ | ---- | -------------------- |
| `/register`                  | POST   | ❌    | Create user          |
| `/login`                     | POST   | ❌    | Get JWT + user       |
| `/category/items`            | POST   | ✅    | Get category items   |
| `/category/amounts-by-unit`  | POST   | ✅    | Get totals by unit   |
| `/category/item`             | POST   | ✅    | Add item             |
| `/category/item`             | DELETE | ✅    | Remove item          |
| `/category/item/transaction` | POST   | ✅    | Add item transaction |

```

