# WebPlode

## Used Technologies

### JavaScript and Frontend Frameworks

* [TypeScript](https://www.typescriptlang.org/index.html)
* [AngularJS](https://angularjs.org/)
* [Bootstrap](http://getbootstrap.com/)

### Build Tools and Package Manager

* [WebPack](https://webpack.js.org/)
* [NPM](https://www.npmjs.com/)

## NPM Usage

Install all packages from the _package.json_   

    npm install

Installing a new package and adding a corresponding entry to the _package.json_

    npm install <package-name> --save

Listing the locally (in the _node_modules_-directory) installed packages. Limiting the amount of dependencies shown using the "--depth" option.

    npm list          
    npm list --depth=0

## WebPack Usage

Running the build from the _webpack.config.js_. I have installed _webpack_ globally in addition to have the command available from the command-line.

    webpack
