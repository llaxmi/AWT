
# SQL and NoSQL databases

#### SQL (SQLite):

- Data Model: Relational. Data is stored in tables with rows and columns, and relationships are defined between tables using foreign keys.
- Schema: Strict. Requires a predefined schema, meaning you must define the structure of your data (columns, data types) before storing it.
- Query Language: SQL (Structured Query Language).

` Examples: MySQL, PostgreSQL, SQLite. `
```
CREATE TABLE Users (
  id INTEGER PRIMARY KEY,
  name TEXT,
  age INTEGER
);

```
- Use Cases: Applications requiring data integrity, complex relationships, and ACID properties (Atomicity, Consistency, Isolation, Durability) 

#### NoSQL (MongoDB):

- Data Model: Document-oriented. Data is stored in JSON-like documents within collections.
- Schema: Flexible (schema-less). Documents in a collection can have different structures.
- Query Language: MongoDB Query Language (based on JavaScript).

` Examples: MongoDB, Cassandra `
``` 
Each document is a JSON-like object

{
  "name": "Alice",
  "age": 25
}

```
- Use Cases: Applications with rapidly changing data structures, high read/write loads, and the need for horizontal scalability, such as social media platforms, content management systems, or IoT applications.
 ---

# Prisma
Prisma is a modern ORM (Object-Relational Mapping) tool for Node.js and TypeScript.
- It acts like a bridge between our code and our database, making it easier to read/write data. That means it simplifies database interaction.


#### Without Prisma, we have to:

- Write raw SQL queries manually
- Handle database connections yourself
- Deal with inconsistent data manually

#### With Prisma, we can: 
- Use JavaScript/TypeScript code to interact with our database
- ensure type safety, autocompletion, and easy migrations

### Working with prisma 

Before starting working with prisma, I installed Prisma CLI and Client

``` 
npm install prisma --save-dev 

npm install @prisma/client 
```

I added the Prisma CLI as a dev dependency (--save-dev) because it’s only needed during development and build time, not in the production environment. The @prisma/client package is a runtime dependency used by the application to query the database.



1.   I defined schema/ database structure in a ` schema.prisma ` file. 

for example:
```
model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
}
```


2. I configured the database connection by setting the DATABASE_URL in the .env file, telling Prisma where my database is located.

3. I ran Prisma migrations to create the database and tables based on the schema:
`npx prisma migrate dev`
then named migration


### How it simplified my work
- I only needed to define my data models once in the schema.prisma file. Prisma took care of translating that into database tables.
- Instead of writing SQL migration scripts manually, Prisma generates and applies them automatically, saving time and reducing errors.


## Revison

### Routing

Routing defines how your application responds to different URLs and HTTP methods.It directs incoming requests to the right code.

 ```
 // Respond to GET requests at /users

app.get('/users', (req, res) => {
  res.send('Retrieve all users')
})

// Respond to POST requests at /users

app.post('/users', (req, res) => {
  res.send('Create a new user')
})
 ```

### ORM 
ORM (Object Relational Mapping) lets you interact with your database using familiar programming objects instead of raw SQL.

```
// Create a new user

const newUser = await prisma.user.create({
  data: {
    name: 'Laxmi',
    email: 'laxmi@example.com',
  },
})

// Fetch all users
const allUsers = await prisma.user.findMany()
```
 Prisma automatically translates these commands into efficient SQL queries.

 ### Middleware 
 Is software that sits between a request and a response, performing tasks like logging, authentication, or modifying requests.

 ```
 app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`)
  next() // Pass control to the next handler
})

 ```
### JSON APIs 
JSON APIs send and receive data in JSON format, which is widely supported and easy to use.
```
app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
})
// this endpoint returns a JSON array of users
```

### Git basics
Git tracks changes to your code, enabling collaboration and version control.
```
git init                 // Start a new Git repository
git add .                // Stage changes for commit
git commit -m "meaningful message"  //Save changes with a descriptive message
git push origin main     // Upload your changes to GitHub
```