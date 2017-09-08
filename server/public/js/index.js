/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class_lesson13__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class_lesson13___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__class_lesson13__);
// import 'babel-polyfill';


/***/ }),
/* 2 */
/***/ (function(module, exports) {

{
	// 基本定义
	let ajax=function(callback){
		console.log("执行");
		setTimeout(function(){
			callback&&callback.call()
		},1000)
	};
	ajax(function(){
		console.log('timeout1')
	})
}

{
	let ajax=function(){
		console.log('执行2');
		return new Promise(function(resolve,reject){
			setTimeout(function(){
				resolve();
			},1000)
		})
	};

	ajax().then(function(){
		console.log('Promise','timeout2');
	})
}

{
	let ajax=function(){
		console.log('执行3');
		return new Promise(function(resolve,reject){
			setTimeout(function(){
				resolve();
			},1000)
		})
	};

	ajax().then(function(){
		return new Promise(function(resolve,reject){
			setTimeout(function(){
				resolve()
			},2000)
		})
	}).then(function(){
		console.log('timeout3')
	})
}

{
	let ajax=function(num){
		console.log('执行4');
		return  new Promise(function(resolve,reject){
			if(num>5){
				resolve()
			}else{
				throw new Error('出错了')
			}
		})
	}

	ajax(6).then(function(){
		console.log('log',6)
	}).catch(function(err){
		console.log('catch',err);
	})

	ajax(4).then(function(){
		console.log('log',4)
	}).catch(function(err){
		console.log('catch',err);
	})
}

{
	// 所以图片加载完再添加到页面
	function loadImg(src){
		return new Promise((resolve,reject)=>{
			let img=document.createElement('img');
			img.src=src;
			img.onload=function(){
				resolve(img);
			}
			img.onerror=function(imgs){
				reject(err);
			}
		})
	}

	function showImgs(imgs){
		imgs.forEach(function(img){
			document.body.appendChild(img);
		})
	}

	// Promise.all({
	// 	loadImg()
	// })
}

/***/ })
/******/ ]);