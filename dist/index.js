(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["chrome-bookmark-share"] = factory();
	else
		root["chrome-bookmark-share"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./src/Bookmark.js":
/*!*************************!*\
  !*** ./src/Bookmark.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);



function Bookmark(data) {
  this.dateAdded = new Date(data.dateAdded);
  this.id = data.id;
  this.index = data.index;
  this.parentId = data.parentId;
  this.title = data.title;
  this.url = data.url;
}
/**
 * Instatiate a Bookmark from raw server data
 * Currently this can be achieved by returning a new Bookmark
 * @param {{}}
 */


Bookmark.parse = function (raw) {
  return new Bookmark(raw);
};
/**
 * Creates a bookmark in the browser
 * @param {string} title
 * @param {string} parentId
 * @param {string} url
 * @returns {Bookmark}
 */


Bookmark.create = function (title, parentId, url) {
  return new Promise(function (resolve, reject) {
    try {
      chrome.bookmarks.create({
        title: title,
        parentId: parentId,
        url: url
      }, function (result) {
        resolve(new Bookmark(result));
      });
    } catch (err) {
      reject(err);
    }
  });
};
/**
 * Remove a bookmark from Chrome
 */


Bookmark.prototype.remove = function () {
  var _this = this;

  return new Promise(function (resolve, reject) {
    try {
      chrome.bookmarks.remove(_this.id, function () {
        return resolve();
      });
    } catch (err) {
      reject(err);
    }
  });
};
/**
 * Create a bookmark on Chrome
 * Update the current instances ids with the created ones
 * @param {string} parentId
 */


Bookmark.prototype.toChrome = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(parentId) {
    var readyBookmark;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Bookmark.create(this.title, parentId, this.url);

          case 2:
            readyBookmark = _context.sent;
            this.dateAdded = readyBookmark.dateAdded;
            this.parentId = parentId;
            this.id = readyBookmark.id;
            this.index = readyBookmark.index;

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Compares relevant info form bookmarks
 * @param {Bookmark} other
 * @returns {boolean}
 */


Bookmark.prototype.equal = function (other) {
  if (this.title !== other.title) {
    return false;
  }

  if (this.url !== other.url) {
    return false;
  }

  return true;
};

/* harmony default export */ __webpack_exports__["default"] = (Bookmark);

/***/ }),

/***/ "./src/Folder.js":
/*!***********************!*\
  !*** ./src/Folder.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Bookmark__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Bookmark */ "./src/Bookmark.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api */ "./src/api.js");







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function Folder(data) {
  if (!Folder.isFolder(data)) {
    throw new Error('Missing argument data.dateGroupModified');
  }

  this.dateAdded = new Date(data.dateAdded);
  this.dateGroupModified = new Date(data.dateGroupModified);
  this.id = data.id;
  this.index = data.index;
  this.parentId = data.parentId;
  this.title = data.title;
  this.children = [];
  this.meta = _objectSpread({
    listening: false,
    updating: false
  }, Folder.DEFAULT_CONFIG);
}

Folder.BOOKMARK_BAR_ID = '1';
Folder.DEFAULT_CONFIG = {
  syncURL: null,
  backup: {
    enabled: true,
    length: 3
  }
};

Folder.init = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(_ref2) {
    var title, _ref2$parentId, parentId, syncURL, onAuth, _ref2$onError, onError, _ref3, _ref4, folder, res;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            title = _ref2.title, _ref2$parentId = _ref2.parentId, parentId = _ref2$parentId === void 0 ? Folder.BOOKMARK_BAR_ID : _ref2$parentId, syncURL = _ref2.syncURL, onAuth = _ref2.onAuth, _ref2$onError = _ref2.onError, onError = _ref2$onError === void 0 ? function () {
              return 0;
            } : _ref2$onError;

            if (title) {
              _context.next = 3;
              break;
            }

            throw new Error('Missing title.');

          case 3:
            if (syncURL) {
              _context.next = 5;
              break;
            }

            throw new Error('Missing syncURL.');

          case 5:
            if (onAuth) {
              _context.next = 7;
              break;
            }

            throw new Error('Missing onAuth callback.');

          case 7:
            _context.next = 9;
            return Folder.find(title, parentId);

          case 9:
            _ref3 = _context.sent;
            _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_ref3, 1);
            folder = _ref4[0];

            if (!folder) {
              _context.next = 18;
              break;
            }

            _context.next = 15;
            return folder.fromChrome();

          case 15:
            folder.meta.root = true;
            _context.next = 21;
            break;

          case 18:
            _context.next = 20;
            return Folder.createRoot(title, parentId);

          case 20:
            folder = _context.sent;

          case 21:
            // Config meta
            folder.meta.syncURL = syncURL;
            folder.meta.onAuth = onAuth;
            folder.meta.onError = onError; // Init listeners to capture changes on Chrome

            folder.startListeners(); // Initial data sync

            _context.next = 27;
            return folder.sync();

          case 27:
            res = _context.sent;
            return _context.abrupt("return", {
              folder: folder,
              syncResult: res
            });

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * @param {any} candidate
 * @returns {boolean}
 */


Folder.isFolder = function (candidate) {
  return !!candidate.dateGroupModified;
};
/**
 * Find all folders that match a given title
 * and optionally a given parent.
 * @param {string} title
 * @param {string} parentId?
 * @returns {Folder[]}
 */


Folder.find = function (title, parentId) {
  return new Promise(function (resolve, reject) {
    try {
      chrome.bookmarks.search({
        title: title
      }, function (results) {
        if (parentId) {
          resolve(results.filter(function (res) {
            return res.parentId === parentId && Folder.isFolder(res);
          }).map(function (res) {
            return new Folder(res);
          }));
          return;
        }

        resolve(results.filter(function (res) {
          return !!Folder.isFolder(res);
        }).map(function (res) {
          return new Folder(res);
        }));
      });
    } catch (err) {
      reject(err);
    }
  });
};
/**
 * Creates a folder in Chrome.
 * @param {string} title
 * @param {string} parentId
 * @returns {Folder}
 */


Folder.create = function (title, parentId) {
  return new Promise(function (resolve, reject) {
    try {
      chrome.bookmarks.create({
        title: title,
        parentId: parentId
      }, function (result) {
        var folder = new Folder(result);
        resolve(folder);
      });
    } catch (err) {
      reject(err);
    }
  });
};
/**
 * Creates a folder in Chrome and sets it internally as root.
 * Sets local version of the Folder.
 * @param {string} title
 * @param {string} parentId
 * @returns {Folder}
 */


Folder.createRoot = function (title, parentId) {
  return new Promise( /*#__PURE__*/function () {
    var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(resolve, reject) {
      var folder;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return Folder.create(title, parentId);

            case 3:
              folder = _context2.sent;
              folder.meta.root = true;
              folder.local = folder.raw;
              resolve(folder);
              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              reject(_context2.t0);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 9]]);
    }));

    return function (_x2, _x3) {
      return _ref5.apply(this, arguments);
    };
  }());
};
/**
 * Recursively instatiate Folder and Bookmarks from raw server data.
 * @param {{}} data
 */


Folder.parse = function (data) {
  var children = data.children,
      raw = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(data, ["children"]);

  var folder = new Folder(raw);
  folder.children = children.map(function (item) {
    if (Folder.isFolder(item)) {
      return Folder.parse(item);
    }

    return _Bookmark__WEBPACK_IMPORTED_MODULE_6__["default"].parse(item);
  });
  return folder;
};

Folder.backup = function (folder) {
  if (!(folder instanceof Folder)) {
    throw new TypeError("Cannot backup type ".concat(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(folder), ". Expected Folder."));
  }

  try {
    var body = {
      folder: folder.raw,
      edited: {
        date: new Date(),
        user: ''
      }
    };
    window.localStorage.setItem("BACKUP_".concat(folder.key), JSON.stringify(body));
  } catch (err) {
    this.errorHandler(err);
  }
};
/**
 * Cast classes to plain objects and remove meta.
 * @returns {{}}
 */


Object.defineProperty(Folder.prototype, 'raw', {
  get: function get() {
    /**
     * #####       ####
     *   #    ###  #   #  ###
     *   #   #   # #   # #   #
     *   #   #   # #   # #   #
     *   #    ###  ####   ###
     *
     * ToDo: maybe optimize
     */
    var raw = JSON.parse(JSON.stringify(this));
    delete raw.meta;
    return raw;
  }
});
/**
 * Cast classes to plain objects and remove meta.
 * @returns {string}
 */

Object.defineProperty(Folder.prototype, 'key', {
  get: function get() {
    return "BOOKMARK_".concat(this.title.replace(/\s/g, '_').toUpperCase());
  }
});

Folder.prototype.getLocal = function () {
  try {
    var stored = window.localStorage.getItem(this.key);

    if (stored) {
      return JSON.parse(stored);
    }

    return null;
  } catch (err) {
    this.errorHandler(err);
    return null;
  }
};
/**
 * Stores local data
 * @param {{}} rawFolder
 * @param {Date} date?
 */


Folder.prototype.setLocal = function (rawFolder, date) {
  if (!(rawFolder instanceof Object)) {
    throw new TypeError("Cannot store type ".concat(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(rawFolder), ". Expected object."));
  }

  if (!this.meta.root) {
    // Only root folder should be stored
    return;
  }

  try {
    var body = {
      folder: rawFolder,
      edited: {
        date: date || new Date(),
        user: ''
      }
    };
    window.localStorage.setItem(this.key, JSON.stringify(body));
  } catch (err) {
    this.errorHandler(err);
  }
};
/**
 * Unifies error handling
 */


Folder.prototype.errorHandler = function (error) {
  /**
   * #####       ####
   *   #    ###  #   #  ###
   *   #   #   # #   # #   #
   *   #   #   # #   # #   #
   *   #    ###  ####   ###
   *
   * ToDo: maybe return a standardized error
   */
  this.onError(error);
};
/**
 * Synchronize server and local folder to last modified.
 */


Folder.prototype.sync = function () {
  var _this = this;

  // Request data from server
  return _api__WEBPACK_IMPORTED_MODULE_7__["default"].pull(this.meta.syncURL, this).then(function (serverData) {
    // Request local data
    var localData = _this.getLocal();

    if (localData && serverData) {
      // Common case
      var localFolder = Folder.parse(localData.folder);
      var serverFolder = Folder.parse(serverData.folder); // Check equality

      if (!localFolder.equal(serverFolder)) {
        // Compare dates
        var localDate = new Date(localData.edited.date);
        var serverDate = new Date(serverData.edited.date);

        if (localDate > serverDate) {
          return _api__WEBPACK_IMPORTED_MODULE_7__["default"].push(_this.meta.syncURL, _this.raw);
        }

        if (localDate < serverDate) {
          return _this.update(serverData.folder, serverDate);
        }
      }
    } else if (localData && !serverData) {
      // No server data, first use for a given syncURL
      return _api__WEBPACK_IMPORTED_MODULE_7__["default"].push(_this.meta.syncURL, _this.raw);
    } else if (!localData && serverData) {
      // No local data, installation on browser or reset
      var _serverDate = new Date(serverData.edited.date);

      return _this.update(serverData.folder, _serverDate);
    }

    return Promise.resolve('SYNC_SUCCESS_NO_CHANGES');
  }).then(function (res) {
    if (res === 'SUCCESS_FOLDER_UPDATE') {
      return Promise.resolve('SYNC_SUCCESS_SERVER_PULL');
    }

    if (res === 'SUCCESS_API_PUSH') {
      return Promise.resolve('SYNC_SUCCESS_SERVER_PUSH');
    }

    return Promise.resolve(res);
  })["catch"](function (error) {
    _this.errorHandler(error);
  });
};
/**
 * Compares relevant info form folders
 * @param {Folder} other
 * @returns {boolean}
 */


Folder.prototype.equal = function (other) {
  if (this.title !== other.title) {
    return false;
  }

  if (this.children.length !== other.children.length) {
    return false;
  }

  var res = true;

  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];
    var otherChild = other.children[i];

    if (child instanceof Object.getPrototypeOf(otherChild).constructor) {
      res = res && child.equal(otherChild);
    } else {
      return false;
    }
  }

  return res;
};
/**
 * Update folder's properties with raw data and pushes to Chrome.
 * Sets local version of the Folder.
 * @param {{}} raw
 * @param {Date} date
 */


Folder.prototype.update = function (raw, date) {
  var _this2 = this;

  return this.remove().then(function () {
    var folder = Folder.parse(raw);
    _this2.children = folder.children;
    _this2.meta.updating = true;
    return _this2.toChrome(_this2.parentId);
  }).then(function () {
    _this2.setLocal(_this2.raw, date);

    _this2.meta.updating = false;
    return 'SUCCESS_FOLDER_UPDATE';
  });
};
/**
 * Remove a folder's children from Chrome.
 * @returns {Promise}
 */


Folder.prototype.removeChildren = function () {
  var deleteChildren = this.children.map(function (child) {
    return child.remove();
  });
  return Promise.all(deleteChildren);
};
/**
 * Recursively fill folder's children from Chrome.
 * Update local data.
 * @returns {Folder}
 */


Folder.prototype.fromChrome = function () {
  var _this3 = this;

  // Shallow search for children in Chrome
  return this.getChildren().then(function (children) {
    var _classify = classify(children),
        bookmarks = _classify.bookmarks,
        subFolders = _classify.subFolders;

    _this3.children = [];

    if (bookmarks.length) {
      _this3.children = _this3.children.concat(bookmarks);
    }

    if (subFolders.length) {
      // Recursive promise for child folders
      var subFoldersFromChrome = subFolders.map(function (subFolder) {
        return subFolder.fromChrome();
      });
      return Promise.all(subFoldersFromChrome);
    }

    return Promise.resolve(null);
  }).then(function (readySubFolders) {
    if (readySubFolders) {
      _this3.children = _this3.children.concat(readySubFolders);
    }

    _this3.setLocal(_this3.raw);

    return _this3;
  });
};
/**
 * Create on Chrome and update instance.
 * Recursively do the same for the children.
 * Note: chrome.bookmarks events won't be fired
 * @param {string} parentId
 * @returns {Promise}
 */


Folder.prototype.toChrome = function (parentId) {
  var _this4 = this;

  /**
   * #####       ####
   *   #    ###  #   #  ###
   *   #   #   # #   # #   #
   *   #   #   # #   # #   #
   *   #    ###  ####   ###
   *
   * ToDo: remove event listeners and set them again when finish
   */
  return Folder.create(this.title, parentId, this.meta.root).then(function (readyFolder) {
    _this4.id = readyFolder.id;
    _this4.parentId = readyFolder.parentId;
    _this4.dateAdded = readyFolder.dateAdded;
    _this4.dateGroupModified = readyFolder.dateGroupModified;
    _this4.index = readyFolder.index;
    _this4.title = readyFolder.title;

    if (_this4.children.length) {
      var childrenToChrome = _this4.children.map(function (item) {
        return item.toChrome(_this4.id);
      });

      return Promise.all(childrenToChrome);
    }

    return Promise.resolve();
  });
};
/**
 * Remove a folder from Chrome.
 */


Folder.prototype.remove = function () {
  var _this5 = this;

  return new Promise(function (resolve, reject) {
    try {
      chrome.bookmarks.removeTree(_this5.id, function () {
        return resolve();
      });
    } catch (err) {
      reject(err);
    }
  });
};
/**
 * Get folder's direct children from Chrome.
 * Intiantiate a Folder or Bookmar for each child.
 */


Folder.prototype.getChildren = function () {
  var _this6 = this;

  return new Promise(function (resolve, reject) {
    try {
      chrome.bookmarks.getChildren(_this6.id, function (children) {
        if (children) {
          resolve(children.map(function (child) {
            if (Folder.isFolder(child)) {
              return new Folder(child);
            }

            return new _Bookmark__WEBPACK_IMPORTED_MODULE_6__["default"](child);
          }));
        } else {
          resolve([]);
        }
      });
    } catch (err) {
      reject(err);
    }
  });
};
/**
 * Start listeners for events fired by Chrome.
 * Immediately push changes to server.
 */


Folder.prototype.startListeners = function () {
  if (!this.meta.listening) {
    chrome.bookmarks.onCreated.addListener(this._handleEvent.bind(this, 'onCreated'));
    chrome.bookmarks.onRemoved.addListener(this._handleEvent.bind(this, 'onRemoved'));
    chrome.bookmarks.onChanged.addListener(this._handleEvent.bind(this, 'onChanged'));
    chrome.bookmarks.onMoved.addListener(this._handleEvent.bind(this, 'onMoved'));
    chrome.bookmarks.onChildrenReordered.addListener(this._handleEvent.bind(this, 'onChildrenReordered'));
    this.meta.listening = true;
  }
};
/**
 * Hooks to Chrome bookmarks events.
 * Takes data from Chrome
 * @param {String} eventName
 * @returns {Promise<Folder>}
 */


Folder.prototype._handleEvent = function (eventName) {
  var _this7 = this;

  if (this.meta.updating) return;
  this.fromChrome().then(function () {
    return _api__WEBPACK_IMPORTED_MODULE_7__["default"].push(_this7.meta.syncURL, _this7.raw);
  }).then(function (result) {
    return console.log({
      eventName: eventName,
      result: result
    });
  })["catch"](this.errorHandler);
};

/* harmony default export */ __webpack_exports__["default"] = (Folder);
/**
 * Separates plain objects as folders or bookmarks
 * @param {Array<Object>} items 
 * @returns {{ bookmarks: [], subFolders: [] }}
 */

function classify(items) {
  return items.reduce(function (classified, item) {
    if (Folder.isFolder(item)) {
      classified.subFolders.push(item);
    } else {
      classified.bookmarks.push(item);
    }

    return classified;
  }, {
    bookmarks: [],
    subFolders: []
  });
}

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);


var BOOKMARK_SYNC_AUTH_TOKEN = 'BOOKMARK_SYNC_AUTH_TOKEN';
/**
 * Get raw folder from server
 * @param {string} url
 * @param {{}} folder
 * @returns {Promise<{}>}
 */

function pull(url, folder) {
  return new Promise( /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(resolve, reject) {
      var headers, jwt, response, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              headers = {
                'Content-Type': 'application/json'
              };
              jwt = localStorage.getItem(BOOKMARK_SYNC_AUTH_TOKEN);

              if (jwt) {
                headers.Authorization = "Bearer ".concat(jwt);
              }

              _context.next = 6;
              return fetch(url, {
                method: 'GET',
                cache: 'no-cache',
                headers: headers
              });

            case 6:
              response = _context.sent;

              if (response.ok) {
                _context.next = 10;
                break;
              }

              handleResponseError(response, folder);
              return _context.abrupt("return");

            case 10:
              _context.next = 12;
              return response.json();

            case 12:
              data = _context.sent;

              if (!data) {
                _context.next = 15;
                break;
              }

              return _context.abrupt("return", resolve(data));

            case 15:
              resolve(null);
              _context.next = 21;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](0);
              reject(_context.t0);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 18]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
}
/**
 * Put raw folder on server
 * @param {string} url
 * @param {{}} folder
 * @returns {Promise<string>}
 */


function push(url, folder) {
  return new Promise( /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(resolve, reject) {
      var headers, jwt, body, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              headers = {
                'Content-Type': 'application/json'
              };
              jwt = localStorage.getItem(BOOKMARK_SYNC_AUTH_TOKEN);

              if (jwt) {
                headers.Authorization = "Bearer ".concat(jwt);
              }

              body = {
                folder: folder,
                edited: {
                  date: new Date(),
                  user: ''
                }
              };
              _context2.next = 7;
              return fetch(url, {
                method: 'PUT',
                cache: 'no-cache',
                headers: headers,
                body: JSON.stringify(body)
              });

            case 7:
              response = _context2.sent;

              if (response.ok) {
                resolve('SUCCESS_API_PUSH');
              } else {
                handleResponseError(response, folder);
              }

              _context2.next = 14;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](0);
              reject(_context2.t0);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 11]]);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
}
/**
 * Login
 * @param {string} url
 * @param {string} userName
 * @param {string} password
 * @returns {Promise}
 */


function auth(url, userName, password) {
  return new Promise( /*#__PURE__*/function () {
    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(resolve, reject) {
      var body, response, _jwt;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              body = {
                userName: userName,
                password: password
              };
              _context3.next = 4;
              return fetch("".concat(url, "/login"), {
                method: 'POST',
                cache: 'no-cache',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
              });

            case 4:
              response = _context3.sent;

              if (!response.ok) {
                _context3.next = 13;
                break;
              }

              _context3.next = 8;
              return response.json();

            case 8:
              _jwt = _context3.sent;
              localStorage.setItem(BOOKMARK_SYNC_AUTH_TOKEN, _jwt.jwt);
              resolve('SUCCESS_API_AUTH');
              _context3.next = 14;
              break;

            case 13:
              throw Error(response.statusText);

            case 14:
              _context3.next = 19;
              break;

            case 16:
              _context3.prev = 16;
              _context3.t0 = _context3["catch"](0);
              reject(_context3.t0);

            case 19:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 16]]);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
}

function handleResponseError(response, folder) {
  if (response.status === 401) {
    folder.meta.onAuth(function (userName, password) {
      return auth(folder.meta.syncURL, userName, password);
    });
  } else {
    throw Error(response.statusText);
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  pull: pull,
  push: push
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Folder, Bookmark, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Folder", function() { return Folder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bookmark", function() { return Bookmark; });
/* harmony import */ var _Folder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Folder */ "./src/Folder.js");
/* harmony import */ var _Bookmark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bookmark */ "./src/Bookmark.js");


var Folder = _Folder__WEBPACK_IMPORTED_MODULE_0__["default"];
var Bookmark = _Bookmark__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = ({
  Folder: Folder,
  Bookmark: Bookmark
});

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJvbWUtYm9va21hcmstc2hhcmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2Nocm9tZS1ib29rbWFyay1zaGFyZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaHJvbWUtYm9va21hcmstc2hhcmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYm9va21hcmstc2hhcmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL2Nocm9tZS1ib29rbWFyay1zaGFyZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL2Nocm9tZS1ib29rbWFyay1zaGFyZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL2Nocm9tZS1ib29rbWFyay1zaGFyZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYm9va21hcmstc2hhcmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYm9va21hcmstc2hhcmUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL2Nocm9tZS1ib29rbWFyay1zaGFyZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWJvb2ttYXJrLXNoYXJlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL2Nocm9tZS1ib29rbWFyay1zaGFyZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYm9va21hcmstc2hhcmUvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL2Nocm9tZS1ib29rbWFyay1zaGFyZS8uL3NyYy9Cb29rbWFyay5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYm9va21hcmstc2hhcmUvLi9zcmMvRm9sZGVyLmpzIiwid2VicGFjazovL2Nocm9tZS1ib29rbWFyay1zaGFyZS8uL3NyYy9hcGkuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWJvb2ttYXJrLXNoYXJlLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJvb2ttYXJrIiwiZGF0YSIsImRhdGVBZGRlZCIsIkRhdGUiLCJpZCIsImluZGV4IiwicGFyZW50SWQiLCJ0aXRsZSIsInVybCIsInBhcnNlIiwicmF3IiwiY3JlYXRlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjaHJvbWUiLCJib29rbWFya3MiLCJyZXN1bHQiLCJlcnIiLCJwcm90b3R5cGUiLCJyZW1vdmUiLCJ0b0Nocm9tZSIsInJlYWR5Qm9va21hcmsiLCJlcXVhbCIsIm90aGVyIiwiRm9sZGVyIiwiaXNGb2xkZXIiLCJFcnJvciIsImRhdGVHcm91cE1vZGlmaWVkIiwiY2hpbGRyZW4iLCJtZXRhIiwibGlzdGVuaW5nIiwidXBkYXRpbmciLCJERUZBVUxUX0NPTkZJRyIsIkJPT0tNQVJLX0JBUl9JRCIsInN5bmNVUkwiLCJiYWNrdXAiLCJlbmFibGVkIiwibGVuZ3RoIiwiaW5pdCIsIm9uQXV0aCIsIm9uRXJyb3IiLCJmaW5kIiwiZm9sZGVyIiwiZnJvbUNocm9tZSIsInJvb3QiLCJjcmVhdGVSb290Iiwic3RhcnRMaXN0ZW5lcnMiLCJzeW5jIiwicmVzIiwic3luY1Jlc3VsdCIsImNhbmRpZGF0ZSIsInNlYXJjaCIsInJlc3VsdHMiLCJmaWx0ZXIiLCJtYXAiLCJsb2NhbCIsIml0ZW0iLCJUeXBlRXJyb3IiLCJib2R5IiwiZWRpdGVkIiwiZGF0ZSIsInVzZXIiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwia2V5IiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9ySGFuZGxlciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwicmVwbGFjZSIsInRvVXBwZXJDYXNlIiwiZ2V0TG9jYWwiLCJzdG9yZWQiLCJnZXRJdGVtIiwic2V0TG9jYWwiLCJyYXdGb2xkZXIiLCJlcnJvciIsImFwaSIsInB1bGwiLCJ0aGVuIiwic2VydmVyRGF0YSIsImxvY2FsRGF0YSIsImxvY2FsRm9sZGVyIiwic2VydmVyRm9sZGVyIiwibG9jYWxEYXRlIiwic2VydmVyRGF0ZSIsInB1c2giLCJ1cGRhdGUiLCJpIiwiY2hpbGQiLCJvdGhlckNoaWxkIiwiZ2V0UHJvdG90eXBlT2YiLCJjb25zdHJ1Y3RvciIsInJlbW92ZUNoaWxkcmVuIiwiZGVsZXRlQ2hpbGRyZW4iLCJhbGwiLCJnZXRDaGlsZHJlbiIsImNsYXNzaWZ5Iiwic3ViRm9sZGVycyIsImNvbmNhdCIsInN1YkZvbGRlcnNGcm9tQ2hyb21lIiwic3ViRm9sZGVyIiwicmVhZHlTdWJGb2xkZXJzIiwicmVhZHlGb2xkZXIiLCJjaGlsZHJlblRvQ2hyb21lIiwicmVtb3ZlVHJlZSIsIm9uQ3JlYXRlZCIsImFkZExpc3RlbmVyIiwiX2hhbmRsZUV2ZW50IiwiYmluZCIsIm9uUmVtb3ZlZCIsIm9uQ2hhbmdlZCIsIm9uTW92ZWQiLCJvbkNoaWxkcmVuUmVvcmRlcmVkIiwiZXZlbnROYW1lIiwiY29uc29sZSIsImxvZyIsIml0ZW1zIiwicmVkdWNlIiwiY2xhc3NpZmllZCIsIkJPT0tNQVJLX1NZTkNfQVVUSF9UT0tFTiIsImhlYWRlcnMiLCJqd3QiLCJBdXRob3JpemF0aW9uIiwiZmV0Y2giLCJtZXRob2QiLCJjYWNoZSIsInJlc3BvbnNlIiwib2siLCJoYW5kbGVSZXNwb25zZUVycm9yIiwianNvbiIsImF1dGgiLCJ1c2VyTmFtZSIsInBhc3N3b3JkIiwiX2p3dCIsInN0YXR1c1RleHQiLCJzdGF0dXMiLCJfRm9sZGVyIiwiX0Jvb2ttYXJrIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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O0FBQ2J6RCxNQUFJLEVBQUpBLElBRGE7QUFFYlEsTUFBSSxFQUFKQTtBQUZhLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDM0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sSUFBTWpFLE1BQU0sR0FBR29ILCtDQUFmO0FBQ0EsSUFBTTdJLFFBQVEsR0FBRzhJLGlEQUFqQjtBQUVRO0FBQ2JySCxRQUFNLEVBQU5BLE1BRGE7QUFFYnpCLFVBQVEsRUFBUkE7QUFGYSxDQUFmLEUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjaHJvbWUtYm9va21hcmstc2hhcmVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiY2hyb21lLWJvb2ttYXJrLXNoYXJlXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXM7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKCEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcnIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQ7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDsiLCJ2YXIgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSA9IHJlcXVpcmUoXCIuL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXM7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwidmFyIGFycmF5V2l0aEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRoSG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXlMaW1pdCA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0XCIpO1xuXG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0XCIpO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2xpY2VkVG9BcnJheTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCJmdW5jdGlvbiBCb29rbWFyayhkYXRhKSB7XG4gIHRoaXMuZGF0ZUFkZGVkID0gbmV3IERhdGUoZGF0YS5kYXRlQWRkZWQpO1xuICB0aGlzLmlkID0gZGF0YS5pZDtcbiAgdGhpcy5pbmRleCA9IGRhdGEuaW5kZXg7XG4gIHRoaXMucGFyZW50SWQgPSBkYXRhLnBhcmVudElkO1xuICB0aGlzLnRpdGxlID0gZGF0YS50aXRsZTtcbiAgdGhpcy51cmwgPSBkYXRhLnVybDtcbn1cblxuLyoqXG4gKiBJbnN0YXRpYXRlIGEgQm9va21hcmsgZnJvbSByYXcgc2VydmVyIGRhdGFcbiAqIEN1cnJlbnRseSB0aGlzIGNhbiBiZSBhY2hpZXZlZCBieSByZXR1cm5pbmcgYSBuZXcgQm9va21hcmtcbiAqIEBwYXJhbSB7e319XG4gKi9cbkJvb2ttYXJrLnBhcnNlID0gZnVuY3Rpb24gKHJhdykge1xuICByZXR1cm4gbmV3IEJvb2ttYXJrKHJhdyk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBib29rbWFyayBpbiB0aGUgYnJvd3NlclxuICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyZW50SWRcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtCb29rbWFya31cbiAqL1xuQm9va21hcmsuY3JlYXRlID0gZnVuY3Rpb24gKHRpdGxlLCBwYXJlbnRJZCwgdXJsKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNocm9tZS5ib29rbWFya3MuY3JlYXRlKHsgdGl0bGUsIHBhcmVudElkLCB1cmwgfSwgcmVzdWx0ID0+IHtcbiAgICAgICAgcmVzb2x2ZShuZXcgQm9va21hcmsocmVzdWx0KSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgcmVqZWN0KGVycik7XG4gICAgfVxuICB9KTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGEgYm9va21hcmsgZnJvbSBDaHJvbWVcbiAqL1xuQm9va21hcmsucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICB0cnkge1xuICAgICAgY2hyb21lLmJvb2ttYXJrcy5yZW1vdmUodGhpcy5pZCwgKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgcmVqZWN0KGVycik7XG4gICAgfVxuICB9KTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgYm9va21hcmsgb24gQ2hyb21lXG4gKiBVcGRhdGUgdGhlIGN1cnJlbnQgaW5zdGFuY2VzIGlkcyB3aXRoIHRoZSBjcmVhdGVkIG9uZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJlbnRJZFxuICovXG5Cb29rbWFyay5wcm90b3R5cGUudG9DaHJvbWUgPSBhc3luYyBmdW5jdGlvbiAocGFyZW50SWQpIHtcbiAgY29uc3QgcmVhZHlCb29rbWFyayA9IGF3YWl0IEJvb2ttYXJrLmNyZWF0ZSh0aGlzLnRpdGxlLCBwYXJlbnRJZCwgdGhpcy51cmwpO1xuICB0aGlzLmRhdGVBZGRlZCA9IHJlYWR5Qm9va21hcmsuZGF0ZUFkZGVkO1xuICB0aGlzLnBhcmVudElkID0gcGFyZW50SWQ7XG4gIHRoaXMuaWQgPSByZWFkeUJvb2ttYXJrLmlkO1xuICB0aGlzLmluZGV4ID0gcmVhZHlCb29rbWFyay5pbmRleDtcbn07XG5cbi8qKlxuICogQ29tcGFyZXMgcmVsZXZhbnQgaW5mbyBmb3JtIGJvb2ttYXJrc1xuICogQHBhcmFtIHtCb29rbWFya30gb3RoZXJcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5Cb29rbWFyay5wcm90b3R5cGUuZXF1YWwgPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgaWYgKHRoaXMudGl0bGUgIT09IG90aGVyLnRpdGxlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh0aGlzLnVybCAhPT0gb3RoZXIudXJsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9va21hcms7XG4iLCJpbXBvcnQgQm9va21hcmsgZnJvbSAnLi9Cb29rbWFyayc7XG5pbXBvcnQgYXBpIGZyb20gJy4vYXBpJztcblxuZnVuY3Rpb24gRm9sZGVyKGRhdGEpIHtcblxuICBpZiAoIUZvbGRlci5pc0ZvbGRlcihkYXRhKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBhcmd1bWVudCBkYXRhLmRhdGVHcm91cE1vZGlmaWVkJyk7XG4gIH1cblxuICB0aGlzLmRhdGVBZGRlZCA9IG5ldyBEYXRlKGRhdGEuZGF0ZUFkZGVkKTtcbiAgdGhpcy5kYXRlR3JvdXBNb2RpZmllZCA9IG5ldyBEYXRlKGRhdGEuZGF0ZUdyb3VwTW9kaWZpZWQpO1xuICB0aGlzLmlkID0gZGF0YS5pZDtcbiAgdGhpcy5pbmRleCA9IGRhdGEuaW5kZXg7XG4gIHRoaXMucGFyZW50SWQgPSBkYXRhLnBhcmVudElkO1xuICB0aGlzLnRpdGxlID0gZGF0YS50aXRsZTtcblxuICB0aGlzLmNoaWxkcmVuID0gW107XG4gIHRoaXMubWV0YSA9IHtcbiAgICBsaXN0ZW5pbmc6IGZhbHNlLFxuICAgIHVwZGF0aW5nOiBmYWxzZSxcbiAgICAuLi5Gb2xkZXIuREVGQVVMVF9DT05GSUcsXG4gIH07XG59XG5cbkZvbGRlci5CT09LTUFSS19CQVJfSUQgPSAnMSc7XG5cbkZvbGRlci5ERUZBVUxUX0NPTkZJRyA9IHtcbiAgc3luY1VSTDogbnVsbCxcbiAgYmFja3VwOiB7XG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBsZW5ndGg6IDMsXG4gIH0sXG59O1xuXG5Gb2xkZXIuaW5pdCA9IGFzeW5jIGZ1bmN0aW9uICh7XG4gIHRpdGxlLFxuICBwYXJlbnRJZCA9IEZvbGRlci5CT09LTUFSS19CQVJfSUQsXG4gIHN5bmNVUkwsXG4gIG9uQXV0aCxcbiAgb25FcnJvciA9ICgpID0+IDAsXG59KSB7XG4gIC8vIE9wdGlvbnMgY2hlY2tcbiAgaWYgKCF0aXRsZSkgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHRpdGxlLicpO1xuICBpZiAoIXN5bmNVUkwpIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBzeW5jVVJMLicpO1xuICBpZiAoIW9uQXV0aCkgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIG9uQXV0aCBjYWxsYmFjay4nKTtcbiAgLy8gU2VhcmNoIHJvb3QgZm9sZGVyIG9uIENocm9tZVxuICBsZXQgW2ZvbGRlcl0gPSBhd2FpdCBGb2xkZXIuZmluZCh0aXRsZSwgcGFyZW50SWQpO1xuICBpZiAoZm9sZGVyKSB7XG4gICAgLy8gTG9hZCByb290IGZvbGRlcidzIGNoaWxkcmVuIGZyb20gQ2hyb21lXG4gICAgLy8gVXBkYXRlIGxvY2FsIGRhdGFcbiAgICBhd2FpdCBmb2xkZXIuZnJvbUNocm9tZSgpO1xuICAgIGZvbGRlci5tZXRhLnJvb3QgPSB0cnVlO1xuICB9XG4gIGVsc2Uge1xuICAgIC8vIENyZWF0ZSByb290IGZvbGRlciBvbiBDaHJvbWVcbiAgICBmb2xkZXIgPSBhd2FpdCBGb2xkZXIuY3JlYXRlUm9vdCh0aXRsZSwgcGFyZW50SWQpO1xuICB9XG4gIC8vIENvbmZpZyBtZXRhXG4gIGZvbGRlci5tZXRhLnN5bmNVUkwgPSBzeW5jVVJMO1xuICBmb2xkZXIubWV0YS5vbkF1dGggPSBvbkF1dGg7XG4gIGZvbGRlci5tZXRhLm9uRXJyb3IgPSBvbkVycm9yO1xuXG4gIC8vIEluaXQgbGlzdGVuZXJzIHRvIGNhcHR1cmUgY2hhbmdlcyBvbiBDaHJvbWVcbiAgZm9sZGVyLnN0YXJ0TGlzdGVuZXJzKCk7XG4gIC8vIEluaXRpYWwgZGF0YSBzeW5jXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZvbGRlci5zeW5jKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBmb2xkZXIsXG4gICAgc3luY1Jlc3VsdDogcmVzLFxuICB9O1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gY2FuZGlkYXRlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuRm9sZGVyLmlzRm9sZGVyID0gZnVuY3Rpb24gKGNhbmRpZGF0ZSkge1xuICByZXR1cm4gISFjYW5kaWRhdGUuZGF0ZUdyb3VwTW9kaWZpZWQ7XG59O1xuXG4vKipcbiAqIEZpbmQgYWxsIGZvbGRlcnMgdGhhdCBtYXRjaCBhIGdpdmVuIHRpdGxlXG4gKiBhbmQgb3B0aW9uYWxseSBhIGdpdmVuIHBhcmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZVxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmVudElkP1xuICogQHJldHVybnMge0ZvbGRlcltdfVxuICovXG5Gb2xkZXIuZmluZCA9IGZ1bmN0aW9uICh0aXRsZSwgcGFyZW50SWQpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICB0cnkge1xuICAgICAgY2hyb21lLmJvb2ttYXJrcy5zZWFyY2goeyB0aXRsZSB9LCByZXN1bHRzID0+IHtcbiAgICAgICAgaWYgKHBhcmVudElkKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHRzXG4gICAgICAgICAgICAuZmlsdGVyKHJlcyA9PiByZXMucGFyZW50SWQgPT09IHBhcmVudElkICYmIEZvbGRlci5pc0ZvbGRlcihyZXMpKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gbmV3IEZvbGRlcihyZXMpKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocmVzdWx0c1xuICAgICAgICAgIC5maWx0ZXIocmVzID0+ICEhRm9sZGVyLmlzRm9sZGVyKHJlcykpXG4gICAgICAgICAgLm1hcChyZXMgPT4gbmV3IEZvbGRlcihyZXMpKVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmb2xkZXIgaW4gQ2hyb21lLlxuICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyZW50SWRcbiAqIEByZXR1cm5zIHtGb2xkZXJ9XG4gKi9cbkZvbGRlci5jcmVhdGUgPSBmdW5jdGlvbiAodGl0bGUsIHBhcmVudElkKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNocm9tZS5ib29rbWFya3MuY3JlYXRlKHsgdGl0bGUsIHBhcmVudElkIH0sIHJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnN0IGZvbGRlciA9IG5ldyBGb2xkZXIocmVzdWx0KTtcbiAgICAgICAgcmVzb2x2ZShmb2xkZXIpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmb2xkZXIgaW4gQ2hyb21lIGFuZCBzZXRzIGl0IGludGVybmFsbHkgYXMgcm9vdC5cbiAqIFNldHMgbG9jYWwgdmVyc2lvbiBvZiB0aGUgRm9sZGVyLlxuICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyZW50SWRcbiAqIEByZXR1cm5zIHtGb2xkZXJ9XG4gKi9cbkZvbGRlci5jcmVhdGVSb290ID0gZnVuY3Rpb24gKHRpdGxlLCBwYXJlbnRJZCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBmb2xkZXIgPSBhd2FpdCBGb2xkZXIuY3JlYXRlKHRpdGxlLCBwYXJlbnRJZCk7XG4gICAgICBmb2xkZXIubWV0YS5yb290ID0gdHJ1ZTtcbiAgICAgIGZvbGRlci5sb2NhbCA9IGZvbGRlci5yYXc7XG4gICAgICByZXNvbHZlKGZvbGRlcik7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vKipcbiAqIFJlY3Vyc2l2ZWx5IGluc3RhdGlhdGUgRm9sZGVyIGFuZCBCb29rbWFya3MgZnJvbSByYXcgc2VydmVyIGRhdGEuXG4gKiBAcGFyYW0ge3t9fSBkYXRhXG4gKi9cbkZvbGRlci5wYXJzZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIC4uLnJhdyB9ID0gZGF0YTtcbiAgY29uc3QgZm9sZGVyID0gbmV3IEZvbGRlcihyYXcpO1xuICBmb2xkZXIuY2hpbGRyZW4gPSBjaGlsZHJlbi5tYXAoaXRlbSA9PiB7XG4gICAgaWYgKEZvbGRlci5pc0ZvbGRlcihpdGVtKSkge1xuICAgICAgcmV0dXJuIEZvbGRlci5wYXJzZShpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIEJvb2ttYXJrLnBhcnNlKGl0ZW0pO1xuICB9KTtcbiAgcmV0dXJuIGZvbGRlcjtcbn07XG5cbkZvbGRlci5iYWNrdXAgPSBmdW5jdGlvbiAoZm9sZGVyKSB7XG4gIGlmICghKGZvbGRlciBpbnN0YW5jZW9mIEZvbGRlcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBDYW5ub3QgYmFja3VwIHR5cGUgJHt0eXBlb2YgZm9sZGVyfS4gRXhwZWN0ZWQgRm9sZGVyLmApO1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgYm9keSA9IHtcbiAgICAgIGZvbGRlcjogZm9sZGVyLnJhdyxcbiAgICAgIGVkaXRlZDoge1xuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgICB1c2VyOiAnJyxcbiAgICAgIH0sXG4gICAgfTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oYEJBQ0tVUF8ke2ZvbGRlci5rZXl9YCwgSlNPTi5zdHJpbmdpZnkoYm9keSkpO1xuICB9XG4gIGNhdGNoIChlcnIpIHtcbiAgICB0aGlzLmVycm9ySGFuZGxlcihlcnIpO1xuICB9XG59O1xuXG4vKipcbiAqIENhc3QgY2xhc3NlcyB0byBwbGFpbiBvYmplY3RzIGFuZCByZW1vdmUgbWV0YS5cbiAqIEByZXR1cm5zIHt7fX1cbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvbGRlci5wcm90b3R5cGUsICdyYXcnLCB7XG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqICMjIyMjICAgICAgICMjIyNcbiAgICAgKiAgICMgICAgIyMjICAjICAgIyAgIyMjXG4gICAgICogICAjICAgIyAgICMgIyAgICMgIyAgICNcbiAgICAgKiAgICMgICAjICAgIyAjICAgIyAjICAgI1xuICAgICAqICAgIyAgICAjIyMgICMjIyMgICAjIyNcbiAgICAgKlxuICAgICAqIFRvRG86IG1heWJlIG9wdGltaXplXG4gICAgICovXG4gICAgY29uc3QgcmF3ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzKSk7XG4gICAgZGVsZXRlIHJhdy5tZXRhO1xuICAgIHJldHVybiByYXc7XG4gIH1cbn0pO1xuXG4vKipcbiAqIENhc3QgY2xhc3NlcyB0byBwbGFpbiBvYmplY3RzIGFuZCByZW1vdmUgbWV0YS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb2xkZXIucHJvdG90eXBlLCAna2V5Jywge1xuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYEJPT0tNQVJLXyR7dGhpcy50aXRsZS5yZXBsYWNlKC9cXHMvZywgJ18nKS50b1VwcGVyQ2FzZSgpfWA7XG4gIH0sXG59KTtcblxuRm9sZGVyLnByb3RvdHlwZS5nZXRMb2NhbCA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzdG9yZWQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5rZXkpO1xuICAgIGlmIChzdG9yZWQpIHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHN0b3JlZCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNhdGNoIChlcnIpIHtcbiAgICB0aGlzLmVycm9ySGFuZGxlcihlcnIpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIFN0b3JlcyBsb2NhbCBkYXRhXG4gKiBAcGFyYW0ge3t9fSByYXdGb2xkZXJcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZT9cbiAqL1xuRm9sZGVyLnByb3RvdHlwZS5zZXRMb2NhbCA9IGZ1bmN0aW9uIChyYXdGb2xkZXIsIGRhdGUpIHtcbiAgaWYgKCEocmF3Rm9sZGVyIGluc3RhbmNlb2YgT2JqZWN0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYENhbm5vdCBzdG9yZSB0eXBlICR7dHlwZW9mIHJhd0ZvbGRlcn0uIEV4cGVjdGVkIG9iamVjdC5gKTtcbiAgfVxuICBpZiAoIXRoaXMubWV0YS5yb290KSB7XG4gICAgLy8gT25seSByb290IGZvbGRlciBzaG91bGQgYmUgc3RvcmVkXG4gICAgcmV0dXJuO1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgYm9keSA9IHtcbiAgICAgIGZvbGRlcjogcmF3Rm9sZGVyLFxuICAgICAgZWRpdGVkOiB7XG4gICAgICAgIGRhdGU6IGRhdGUgfHwgbmV3IERhdGUoKSxcbiAgICAgICAgdXNlcjogJycsXG4gICAgICB9LFxuICAgIH07XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMua2V5LCBKU09OLnN0cmluZ2lmeShib2R5KSk7XG4gIH1cbiAgY2F0Y2ggKGVycikge1xuICAgIHRoaXMuZXJyb3JIYW5kbGVyKGVycik7XG4gIH1cbn07XG5cbi8qKlxuICogVW5pZmllcyBlcnJvciBoYW5kbGluZ1xuICovXG5Gb2xkZXIucHJvdG90eXBlLmVycm9ySGFuZGxlciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAvKipcbiAgICogIyMjIyMgICAgICAgIyMjI1xuICAgKiAgICMgICAgIyMjICAjICAgIyAgIyMjXG4gICAqICAgIyAgICMgICAjICMgICAjICMgICAjXG4gICAqICAgIyAgICMgICAjICMgICAjICMgICAjXG4gICAqICAgIyAgICAjIyMgICMjIyMgICAjIyNcbiAgICpcbiAgICogVG9EbzogbWF5YmUgcmV0dXJuIGEgc3RhbmRhcmRpemVkIGVycm9yXG4gICAqL1xuICB0aGlzLm9uRXJyb3IoZXJyb3IpO1xufTtcblxuLyoqXG4gKiBTeW5jaHJvbml6ZSBzZXJ2ZXIgYW5kIGxvY2FsIGZvbGRlciB0byBsYXN0IG1vZGlmaWVkLlxuICovXG5Gb2xkZXIucHJvdG90eXBlLnN5bmMgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFJlcXVlc3QgZGF0YSBmcm9tIHNlcnZlclxuICByZXR1cm4gYXBpLnB1bGwodGhpcy5tZXRhLnN5bmNVUkwsIHRoaXMpXG4gICAgLnRoZW4oc2VydmVyRGF0YSA9PiB7XG4gICAgICAvLyBSZXF1ZXN0IGxvY2FsIGRhdGFcbiAgICAgIGNvbnN0IGxvY2FsRGF0YSA9IHRoaXMuZ2V0TG9jYWwoKTtcbiAgICAgIGlmIChsb2NhbERhdGEgJiYgc2VydmVyRGF0YSkge1xuICAgICAgICAvLyBDb21tb24gY2FzZVxuICAgICAgICBjb25zdCBsb2NhbEZvbGRlciA9IEZvbGRlci5wYXJzZShsb2NhbERhdGEuZm9sZGVyKTtcbiAgICAgICAgY29uc3Qgc2VydmVyRm9sZGVyID0gRm9sZGVyLnBhcnNlKHNlcnZlckRhdGEuZm9sZGVyKTtcbiAgICAgICAgLy8gQ2hlY2sgZXF1YWxpdHlcbiAgICAgICAgaWYgKCFsb2NhbEZvbGRlci5lcXVhbChzZXJ2ZXJGb2xkZXIpKSB7XG4gICAgICAgICAgLy8gQ29tcGFyZSBkYXRlc1xuICAgICAgICAgIGNvbnN0IGxvY2FsRGF0ZSA9IG5ldyBEYXRlKGxvY2FsRGF0YS5lZGl0ZWQuZGF0ZSk7XG4gICAgICAgICAgY29uc3Qgc2VydmVyRGF0ZSA9IG5ldyBEYXRlKHNlcnZlckRhdGEuZWRpdGVkLmRhdGUpO1xuICAgICAgICAgIGlmIChsb2NhbERhdGUgPiBzZXJ2ZXJEYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gYXBpLnB1c2godGhpcy5tZXRhLnN5bmNVUkwsIHRoaXMucmF3KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGxvY2FsRGF0ZSA8IHNlcnZlckRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZShzZXJ2ZXJEYXRhLmZvbGRlciwgc2VydmVyRGF0ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChsb2NhbERhdGEgJiYgIXNlcnZlckRhdGEpIHtcbiAgICAgICAgLy8gTm8gc2VydmVyIGRhdGEsIGZpcnN0IHVzZSBmb3IgYSBnaXZlbiBzeW5jVVJMXG4gICAgICAgIHJldHVybiBhcGkucHVzaCh0aGlzLm1ldGEuc3luY1VSTCwgdGhpcy5yYXcpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIWxvY2FsRGF0YSAmJiBzZXJ2ZXJEYXRhKSB7XG4gICAgICAgIC8vIE5vIGxvY2FsIGRhdGEsIGluc3RhbGxhdGlvbiBvbiBicm93c2VyIG9yIHJlc2V0XG4gICAgICAgIGNvbnN0IHNlcnZlckRhdGUgPSBuZXcgRGF0ZShzZXJ2ZXJEYXRhLmVkaXRlZC5kYXRlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlKHNlcnZlckRhdGEuZm9sZGVyLCBzZXJ2ZXJEYXRlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoJ1NZTkNfU1VDQ0VTU19OT19DSEFOR0VTJyk7XG4gICAgfSlcbiAgICAudGhlbihyZXMgPT4ge1xuICAgICAgaWYgKHJlcyA9PT0gJ1NVQ0NFU1NfRk9MREVSX1VQREFURScpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgnU1lOQ19TVUNDRVNTX1NFUlZFUl9QVUxMJyk7XG4gICAgICB9XG4gICAgICBpZiAocmVzID09PSAnU1VDQ0VTU19BUElfUFVTSCcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgnU1lOQ19TVUNDRVNTX1NFUlZFUl9QVVNIJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcyk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgdGhpcy5lcnJvckhhbmRsZXIoZXJyb3IpO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBDb21wYXJlcyByZWxldmFudCBpbmZvIGZvcm0gZm9sZGVyc1xuICogQHBhcmFtIHtGb2xkZXJ9IG90aGVyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuRm9sZGVyLnByb3RvdHlwZS5lcXVhbCA9IGZ1bmN0aW9uIChvdGhlcikge1xuICBpZiAodGhpcy50aXRsZSAhPT0gb3RoZXIudGl0bGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHRoaXMuY2hpbGRyZW4ubGVuZ3RoICE9PSBvdGhlci5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgbGV0IHJlcyA9IHRydWU7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICBjb25zdCBvdGhlckNoaWxkID0gb3RoZXIuY2hpbGRyZW5baV07XG4gICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgT2JqZWN0LmdldFByb3RvdHlwZU9mKG90aGVyQ2hpbGQpLmNvbnN0cnVjdG9yKSB7XG4gICAgICByZXMgPSByZXMgJiYgY2hpbGQuZXF1YWwob3RoZXJDaGlsZCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBVcGRhdGUgZm9sZGVyJ3MgcHJvcGVydGllcyB3aXRoIHJhdyBkYXRhIGFuZCBwdXNoZXMgdG8gQ2hyb21lLlxuICogU2V0cyBsb2NhbCB2ZXJzaW9uIG9mIHRoZSBGb2xkZXIuXG4gKiBAcGFyYW0ge3t9fSByYXdcbiAqIEBwYXJhbSB7RGF0ZX0gZGF0ZVxuICovXG5Gb2xkZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChyYXcsIGRhdGUpIHtcbiAgcmV0dXJuIHRoaXMucmVtb3ZlKClcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBmb2xkZXIgPSBGb2xkZXIucGFyc2UocmF3KTtcbiAgICAgIHRoaXMuY2hpbGRyZW4gPSBmb2xkZXIuY2hpbGRyZW47XG4gICAgICB0aGlzLm1ldGEudXBkYXRpbmcgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRoaXMudG9DaHJvbWUodGhpcy5wYXJlbnRJZCk7XG4gICAgfSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnNldExvY2FsKHRoaXMucmF3LCBkYXRlKTtcbiAgICAgIHRoaXMubWV0YS51cGRhdGluZyA9IGZhbHNlO1xuICAgICAgcmV0dXJuICdTVUNDRVNTX0ZPTERFUl9VUERBVEUnO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYSBmb2xkZXIncyBjaGlsZHJlbiBmcm9tIENocm9tZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5Gb2xkZXIucHJvdG90eXBlLnJlbW92ZUNoaWxkcmVuID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBkZWxldGVDaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4ubWFwKGNoaWxkID0+IGNoaWxkLnJlbW92ZSgpKTtcbiAgcmV0dXJuIFByb21pc2UuYWxsKGRlbGV0ZUNoaWxkcmVuKTtcbn07XG5cbi8qKlxuICogUmVjdXJzaXZlbHkgZmlsbCBmb2xkZXIncyBjaGlsZHJlbiBmcm9tIENocm9tZS5cbiAqIFVwZGF0ZSBsb2NhbCBkYXRhLlxuICogQHJldHVybnMge0ZvbGRlcn1cbiAqL1xuRm9sZGVyLnByb3RvdHlwZS5mcm9tQ2hyb21lID0gZnVuY3Rpb24gKCkge1xuICAvLyBTaGFsbG93IHNlYXJjaCBmb3IgY2hpbGRyZW4gaW4gQ2hyb21lXG4gIHJldHVybiB0aGlzLmdldENoaWxkcmVuKClcbiAgICAudGhlbihjaGlsZHJlbiA9PiB7XG4gICAgICBjb25zdCB7IGJvb2ttYXJrcywgc3ViRm9sZGVycyB9ID0gY2xhc3NpZnkoY2hpbGRyZW4pO1xuICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgICAgaWYgKGJvb2ttYXJrcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4uY29uY2F0KGJvb2ttYXJrcyk7XG4gICAgICB9XG4gICAgICBpZiAoc3ViRm9sZGVycy5sZW5ndGgpIHtcbiAgICAgICAgLy8gUmVjdXJzaXZlIHByb21pc2UgZm9yIGNoaWxkIGZvbGRlcnNcbiAgICAgICAgY29uc3Qgc3ViRm9sZGVyc0Zyb21DaHJvbWUgPSBzdWJGb2xkZXJzLm1hcChzdWJGb2xkZXIgPT4gc3ViRm9sZGVyLmZyb21DaHJvbWUoKSk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChzdWJGb2xkZXJzRnJvbUNocm9tZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICAgIH0pXG4gICAgLnRoZW4ocmVhZHlTdWJGb2xkZXJzID0+IHtcbiAgICAgIGlmIChyZWFkeVN1YkZvbGRlcnMpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4uY29uY2F0KHJlYWR5U3ViRm9sZGVycyk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldExvY2FsKHRoaXMucmF3KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgb24gQ2hyb21lIGFuZCB1cGRhdGUgaW5zdGFuY2UuXG4gKiBSZWN1cnNpdmVseSBkbyB0aGUgc2FtZSBmb3IgdGhlIGNoaWxkcmVuLlxuICogTm90ZTogY2hyb21lLmJvb2ttYXJrcyBldmVudHMgd29uJ3QgYmUgZmlyZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJlbnRJZFxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbkZvbGRlci5wcm90b3R5cGUudG9DaHJvbWUgPSBmdW5jdGlvbiAocGFyZW50SWQpIHtcbiAgLyoqXG4gICAqICMjIyMjICAgICAgICMjIyNcbiAgICogICAjICAgICMjIyAgIyAgICMgICMjI1xuICAgKiAgICMgICAjICAgIyAjICAgIyAjICAgI1xuICAgKiAgICMgICAjICAgIyAjICAgIyAjICAgI1xuICAgKiAgICMgICAgIyMjICAjIyMjICAgIyMjXG4gICAqXG4gICAqIFRvRG86IHJlbW92ZSBldmVudCBsaXN0ZW5lcnMgYW5kIHNldCB0aGVtIGFnYWluIHdoZW4gZmluaXNoXG4gICAqL1xuICByZXR1cm4gRm9sZGVyLmNyZWF0ZSh0aGlzLnRpdGxlLCBwYXJlbnRJZCwgdGhpcy5tZXRhLnJvb3QpXG4gICAgLnRoZW4ocmVhZHlGb2xkZXIgPT4ge1xuICAgICAgdGhpcy5pZCA9IHJlYWR5Rm9sZGVyLmlkO1xuICAgICAgdGhpcy5wYXJlbnRJZCA9IHJlYWR5Rm9sZGVyLnBhcmVudElkO1xuICAgICAgdGhpcy5kYXRlQWRkZWQgPSByZWFkeUZvbGRlci5kYXRlQWRkZWQ7XG4gICAgICB0aGlzLmRhdGVHcm91cE1vZGlmaWVkID0gcmVhZHlGb2xkZXIuZGF0ZUdyb3VwTW9kaWZpZWQ7XG4gICAgICB0aGlzLmluZGV4ID0gcmVhZHlGb2xkZXIuaW5kZXg7XG4gICAgICB0aGlzLnRpdGxlID0gcmVhZHlGb2xkZXIudGl0bGU7XG4gICAgICBpZiAodGhpcy5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW5Ub0Nocm9tZSA9IHRoaXMuY2hpbGRyZW4ubWFwKGl0ZW0gPT4gaXRlbS50b0Nocm9tZSh0aGlzLmlkKSk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChjaGlsZHJlblRvQ2hyb21lKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGEgZm9sZGVyIGZyb20gQ2hyb21lLlxuICovXG5Gb2xkZXIucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICB0cnkge1xuICAgICAgY2hyb21lLmJvb2ttYXJrcy5yZW1vdmVUcmVlKHRoaXMuaWQsICgpID0+IHJlc29sdmUoKSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vKipcbiAqIEdldCBmb2xkZXIncyBkaXJlY3QgY2hpbGRyZW4gZnJvbSBDaHJvbWUuXG4gKiBJbnRpYW50aWF0ZSBhIEZvbGRlciBvciBCb29rbWFyIGZvciBlYWNoIGNoaWxkLlxuICovXG5Gb2xkZXIucHJvdG90eXBlLmdldENoaWxkcmVuID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjaHJvbWUuYm9va21hcmtzLmdldENoaWxkcmVuKHRoaXMuaWQsIGNoaWxkcmVuID0+IHtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgcmVzb2x2ZShjaGlsZHJlbi5tYXAoY2hpbGQgPT4ge1xuICAgICAgICAgICAgaWYgKEZvbGRlci5pc0ZvbGRlcihjaGlsZCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBGb2xkZXIoY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCb29rbWFyayhjaGlsZCk7XG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoW10pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgcmVqZWN0KGVycik7XG4gICAgfVxuICB9KTtcbn07XG5cbi8qKlxuICogU3RhcnQgbGlzdGVuZXJzIGZvciBldmVudHMgZmlyZWQgYnkgQ2hyb21lLlxuICogSW1tZWRpYXRlbHkgcHVzaCBjaGFuZ2VzIHRvIHNlcnZlci5cbiAqL1xuRm9sZGVyLnByb3RvdHlwZS5zdGFydExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLm1ldGEubGlzdGVuaW5nKSB7XG4gICAgY2hyb21lLmJvb2ttYXJrcy5vbkNyZWF0ZWQuYWRkTGlzdGVuZXIodGhpcy5faGFuZGxlRXZlbnQuYmluZCh0aGlzLCAnb25DcmVhdGVkJykpO1xuICAgIGNocm9tZS5ib29rbWFya3Mub25SZW1vdmVkLmFkZExpc3RlbmVyKHRoaXMuX2hhbmRsZUV2ZW50LmJpbmQodGhpcywgJ29uUmVtb3ZlZCcpKTtcbiAgICBjaHJvbWUuYm9va21hcmtzLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcih0aGlzLl9oYW5kbGVFdmVudC5iaW5kKHRoaXMsICdvbkNoYW5nZWQnKSk7XG4gICAgY2hyb21lLmJvb2ttYXJrcy5vbk1vdmVkLmFkZExpc3RlbmVyKHRoaXMuX2hhbmRsZUV2ZW50LmJpbmQodGhpcywgJ29uTW92ZWQnKSk7XG4gICAgY2hyb21lLmJvb2ttYXJrcy5vbkNoaWxkcmVuUmVvcmRlcmVkLmFkZExpc3RlbmVyKHRoaXMuX2hhbmRsZUV2ZW50LmJpbmQodGhpcywgJ29uQ2hpbGRyZW5SZW9yZGVyZWQnKSk7XG4gICAgdGhpcy5tZXRhLmxpc3RlbmluZyA9IHRydWU7XG4gIH1cbn07XG5cbi8qKlxuICogSG9va3MgdG8gQ2hyb21lIGJvb2ttYXJrcyBldmVudHMuXG4gKiBUYWtlcyBkYXRhIGZyb20gQ2hyb21lXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnROYW1lXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxGb2xkZXI+fVxuICovXG5Gb2xkZXIucHJvdG90eXBlLl9oYW5kbGVFdmVudCA9IGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgaWYgKHRoaXMubWV0YS51cGRhdGluZykgcmV0dXJuO1xuXG4gIHRoaXMuZnJvbUNocm9tZSgpXG4gICAgLnRoZW4oKCkgPT4gYXBpLnB1c2godGhpcy5tZXRhLnN5bmNVUkwsIHRoaXMucmF3KSlcbiAgICAudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2coe1xuICAgICAgZXZlbnROYW1lLFxuICAgICAgcmVzdWx0LFxuICAgIH0pKVxuICAgIC5jYXRjaCh0aGlzLmVycm9ySGFuZGxlcik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb2xkZXI7XG5cbi8qKlxuICogU2VwYXJhdGVzIHBsYWluIG9iamVjdHMgYXMgZm9sZGVycyBvciBib29rbWFya3NcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gaXRlbXMgXG4gKiBAcmV0dXJucyB7eyBib29rbWFya3M6IFtdLCBzdWJGb2xkZXJzOiBbXSB9fVxuICovXG5mdW5jdGlvbiBjbGFzc2lmeShpdGVtcykge1xuICByZXR1cm4gaXRlbXMucmVkdWNlKChjbGFzc2lmaWVkLCBpdGVtKSA9PiB7XG4gICAgaWYgKEZvbGRlci5pc0ZvbGRlcihpdGVtKSkge1xuICAgICAgY2xhc3NpZmllZC5zdWJGb2xkZXJzLnB1c2goaXRlbSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY2xhc3NpZmllZC5ib29rbWFya3MucHVzaChpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzaWZpZWQ7XG4gIH0sIHsgYm9va21hcmtzOiBbXSwgc3ViRm9sZGVyczogW10gfSk7XG59XG4iLCJjb25zdCBCT09LTUFSS19TWU5DX0FVVEhfVE9LRU4gPSAnQk9PS01BUktfU1lOQ19BVVRIX1RPS0VOJztcblxuLyoqXG4gKiBHZXQgcmF3IGZvbGRlciBmcm9tIHNlcnZlclxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHBhcmFtIHt7fX0gZm9sZGVyXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7fT59XG4gKi9cbmZ1bmN0aW9uIHB1bGwodXJsLCBmb2xkZXIpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgaGVhZGVycyA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9O1xuICAgICAgY29uc3Qgand0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oQk9PS01BUktfU1lOQ19BVVRIX1RPS0VOKTtcbiAgICAgIGlmIChqd3QpIHtcbiAgICAgICAgaGVhZGVycy5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke2p3dH1gO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgICAgIGhlYWRlcnMsXG4gICAgICB9KTtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgaGFuZGxlUmVzcG9uc2VFcnJvcihyZXNwb25zZSwgZm9sZGVyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKGRhdGEpO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgcmVqZWN0KGVycik7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBQdXQgcmF3IGZvbGRlciBvbiBzZXJ2ZXJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7e319IGZvbGRlclxuICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cbiAqL1xuZnVuY3Rpb24gcHVzaCh1cmwsIGZvbGRlcikge1xuICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBoZWFkZXJzID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH07XG4gICAgICBjb25zdCBqd3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShCT09LTUFSS19TWU5DX0FVVEhfVE9LRU4pO1xuICAgICAgaWYgKGp3dCkge1xuICAgICAgICBoZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7and0fWA7XG4gICAgICB9XG4gICAgICBjb25zdCBib2R5ID0ge1xuICAgICAgICBmb2xkZXIsXG4gICAgICAgIGVkaXRlZDoge1xuICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXG4gICAgICAgICAgdXNlcjogJycsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgICAgIGhlYWRlcnMsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgICAgfSk7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmVzb2x2ZSgnU1VDQ0VTU19BUElfUFVTSCcpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGhhbmRsZVJlc3BvbnNlRXJyb3IocmVzcG9uc2UsIGZvbGRlcik7XG4gICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogTG9naW5cbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7c3RyaW5nfSB1c2VyTmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IHBhc3N3b3JkXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuZnVuY3Rpb24gYXV0aCh1cmwsIHVzZXJOYW1lLCBwYXNzd29yZCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBib2R5ID0ge1xuICAgICAgICB1c2VyTmFtZSxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9O1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1cmx9L2xvZ2luYCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgIH0pO1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNvbnN0IF9qd3QgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKEJPT0tNQVJLX1NZTkNfQVVUSF9UT0tFTiwgX2p3dC5qd3QpO1xuICAgICAgICByZXNvbHZlKCdTVUNDRVNTX0FQSV9BVVRIJyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlRXJyb3IocmVzcG9uc2UsIGZvbGRlcikge1xuICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICBmb2xkZXIubWV0YS5vbkF1dGgoKHVzZXJOYW1lLCBwYXNzd29yZCkgPT4gYXV0aChmb2xkZXIubWV0YS5zeW5jVVJMLCB1c2VyTmFtZSwgcGFzc3dvcmQpKTtcbiAgfVxuICBlbHNlIHtcbiAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHB1bGwsXG4gIHB1c2gsXG59O1xuIiwiaW1wb3J0IF9Gb2xkZXIgZnJvbSAnLi9Gb2xkZXInO1xuaW1wb3J0IF9Cb29rbWFyayBmcm9tICcuL0Jvb2ttYXJrJztcblxuZXhwb3J0IGNvbnN0IEZvbGRlciA9IF9Gb2xkZXI7XG5leHBvcnQgY29uc3QgQm9va21hcmsgPSBfQm9va21hcms7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgRm9sZGVyLFxuICBCb29rbWFyayxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9