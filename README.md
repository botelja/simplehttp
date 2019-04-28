# SimpleHttp

Simplest way to make http requests

```javascript
const http = new SimpleHttp();
```

#GET request all

```javascript
http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});
```

#GET request single

```javascript
http.get('https://jsonplaceholder.typicode.com/posts/' + id, function(
  err,
  posts
) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});
```

#POST request

```javascript
const data = {
  title: 'My new title',
  body: 'This is my new post'
};

http.post('https://jsonplaceholder.typicode.com/posts', data, function(
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});
```

#PUT request

```javascript
const data = {
  title: 'My new title',
  body: 'This is my new post'
};

http.post('https://jsonplaceholder.typicode.com/posts' + id, data, function(
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});
```

#DELETE request

```javascript
http.delete('https://jsonplaceholder.typicode.com/posts/' + id, function(
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});
```
