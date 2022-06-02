# MOVIE API (graphql)

## OVERVIEW
Movie API with Graphql

### Copy Problem Occured
- prev
```
"scripts": {
    "dev": "nodemon --exec babel-node src/index.js",
    "prebuild": "rm -rf dist",
    "build": "babel src --out-dir dist",
    "postbuild": "cd src/graphql && copy ./schema.graphql ../../dist/graphql",
    "start": "node --inspect dist/index.js"
  },
```
- current
```
"scripts": {
    "dev": "nodemon --exec babel-node src/index.js",
    "prebuild": "rm -rf dist",
    "build": "babel src --out-dir dist",
    "start": "node --inspect dist/index.js"
  },
```

so you should do manually. postbuild script.