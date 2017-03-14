# react_base_static

Compiles all the scripts & styles from `src` path to `dist`.Generates source maps by default in development mode. for react app wepack compile and hot reload happens on page.For other static documents gulp watches and notify webpack of changes then browser sync updated the webpage automatically.

##Installation 

```bash
    $ npm install 
```

##Usage

To build on development mode, generates a minified version with source map.

```bash
    $ npm run build
```

To build on production mode

```bash
    $ NODE_ENV=production npm run build
```

To use webpack dev server & watch in one tab,

```bash
    $ npm start
```
and in another tab start gulp

```bash
    $ gulp
```

### Additional Info:

To see `react-hot-loader` in action, edit `app/src/js/reactapp/HelloWorld.jsx`

Cheers

