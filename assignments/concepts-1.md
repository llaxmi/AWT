
## Review

#### HTTP Methods 

`GET – Retrieve data (e.g. get a user).`

`POST – Send data to the server (e.g. create a new user.`

`PUT – Update data completely (e.g. update an entire user record).`

`PATCH – Update data partially (e.g. update a user’s email).`

`DELETE – Remove data (e.g. delete a user).`


#### Status code

`200 OK`

`201 Created`

`202 Accepted`

`204 No content`

`206 Partial Content`
###
`300	Multiple Choices`

`301	Moved Permanently`

`303	See Other	Redirect to another resource using GET.`

`304	Not Modified`	

`307	Temporary Redirect`

`308	Permanent Redirect`
###
`400	Bad Request`

`401	Unauthorized`

`403	Forbidden	Access denied even if authenticated.`

`404	Not Found`

`405	Method Not Allowed`	

`408	Request Timeout` 

`410	Gone`

`415	Unsupported Media`

`429	Too Many Requests	Rate limit exceeded.`
###

`500	Internal Server Error`

`501	Not Implemented`	

`502	Bad Gateway`

`503	Service Unavailable`	

`504	Gateway Timeout`	

`505	HTTP Version Not Supported`


### CSS selectors
#### By elements
 ``` 
 p {
  color: blue;
} 
```

#### By id
```
#header {
  background-color: lightgray;
}
```

#### By class="button" 
```
.button {
  padding: 10px;
}
```

#### Select all <li> elements inside a <ul>
```
ul li {
  list-style: square;
}
```

## Git basics

` 1. Initialize a git repo`  :  `git init `

`2. Add files/file to staging area` : `git add .` or  `git add file.js`

`3. Commit changes` : `git commit -m "commit msg"`

`4. Push to a remote repo` : `git push origin main`

`5. Pull latest changes from remote`: `git pull origin main`

`6. Clone a repo from GitHub`: `git clone https://github.com/llaxmi/repo.git`

`7. Create a new branch` : `git branch new-feature`

## Callback fns & High order fns

Callback – A function passed into another function to be executed later.


```
function onClickCallback() {
  console.log("Button clicked!");
}
````

````
function simulateButtonClick(callback) {
  console.log("Simulating button click...");
  callback(); // Call the function passed in
}
````

``simulateButtonClick(onClickCallback); ``

```
// Output:
// Simulating button click...
// Button clicked!
```

Higher-order function – A function that takes another function as a parameter or returns a function.

``` 
function doMath(operation, x, y) {
  return operation(x, y);
}
```

```
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}
```

` console.log(doMath(add, 3, 4));      // Output: 7 `
` console.log(doMath(multiply, 3, 4)); // Output: 12 `



## Array methods
`const numbers = [1, 2, 3, 4, 5, 6];`

```
// forEach
const result = numbers.forEach((num) => console.log(num + 1));


// map
const squares = numbers.map(num => num * num);


// filter 
const even = numbers.filter(num => num % 4 === 0);


// push
numbers.push(6); // [1,2,3,4,5,6]


// pop 
numbers.pop(); // [1,2,3,4,5]

```

