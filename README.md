# For AOT compile

## AOT compile need config/entrance files from this sample
a new `tsconfig-aot.json`
a new `rollup-config.js`
edit `main.ts` and copy the old one to `main-jit.ts`
the new scripts in this `package.json`
edit `src/index.html` to load the bundle `build.js` after the `</body>` tag.
a `copy-dist-files.js` to copy libraries, style sheets, fonts to the serve position.
a `bs-config.aot.json` config for lite-server

## AOT compile need Install these libraries

`npm install -g lite-server`
`npm install @angular/compiler-cli @angular/platform-server --save`
`npm install rollup rollup-plugin-node-resolve rollup-plugin-commonjs rollup-plugin-uglify --save-dev`

## To Build
Run `npm run build:aot`

## To serve
Run `node copy-dist-files.js` only once.

Run `npm run serve:aot` to serve.
or 
Run `npm run build:aot & npm run serve:aot` to build and serve.

## After AOT compile, only following files are for distribution
 `index.html`
 `everything that index.html included`
 `everything in fonts folder`
