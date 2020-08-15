# Development and Main Thread

## Techniques

The nameless site was built by these techniques currently:

- React.js
- Material UI
- Node.js
- Prism.js

## Code Time

Some core coded by me and what I want to show:

```javascript

  const post = posts.find((p) => p.id === postId);

  const readTextFile = (file) => {
    let rawFile = new XMLHttpRequest();
    let allText;
    //false for string
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = () => {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status === 0) {
          allText = rawFile.responseText;
        }
      }
    };
    rawFile.send(null);
    return allText;
  };

  let filepath = "/articles/".concat(postId).concat(".md");
  post.markdown = readTextFile(filepath);

```

The code above has read a markdown file and transform it to json.
