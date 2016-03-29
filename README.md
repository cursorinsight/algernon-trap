# ci-trap

`ci-trap` is a lightweight mouse movement tracker library for browsers.

## Using the module

TBD

## Installation (for further development purposes)

Install dependencies with [NPM](https://www.npmjs.org):

```
npm install
```

## Example 

The `/examples` directory contains a working mini application that demonstrates
ci-trap's core functions.  After installing development dependencies, the
project defines several gulp tasks for your convenience:

- You may (re)bundle the mini-app with ci-trap's code with:

  ```
  ./node_modules/.bin/gulp scripts
  ```

- Listener task that serves compiled and static example content:

  ```
  ./node_modules/.bin/gulp serve
  ```

  ...which will be accessible at: [localhost:8100](http://localhost:8100/)


## License

ci-trap is released under the [MIT license](https://github.com/cursorinsight/ci-trap/blob/master/LICENSE.md).

<!---

## Installation

Install with [Bower](http://bower.io):


```
bower install -/-save ci-trap
```

The component can be used as a Common JS module, an AMD module, or a global.


## API

### ci-trap()


## Testing

Install [Node](http://nodejs.org) (comes with npm) and Bower.

From the repo root, install the project's development dependencies:

```
npm install
bower install
```

Testing relies on the Karma test-runner. If you'd like to use Karma to
automatically watch and re-run the test file during development, it's easiest
to globally install Karma and run it from the CLI.

```
npm install -g karma
karma start
```

To run the tests in Firefox, just once, as CI would:

```
npm test
```


## Browser support

* Google Chrome (latest)
* Opera (latest)
* Firefox 4+
* Safari 5+
* Internet Explorer 8+

-->
