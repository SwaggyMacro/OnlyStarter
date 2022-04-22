module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./src/forum/components/OnlyStarter.js":
/*!*********************************************!*\
  !*** ./src/forum/components/OnlyStarter.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/DiscussionPage */ "flarum/components/DiscussionPage");
/* harmony import */ var flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_PostUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/PostUser */ "flarum/components/PostUser");
/* harmony import */ var flarum_components_PostUser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_PostUser__WEBPACK_IMPORTED_MODULE_4__);





var onlyStarter = false;

function checkFP(post) {
  var firstPost = post.discussion().firstPost();

  if (firstPost) {
    return firstPost.id() !== post.id();
  } else {
    return true;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var textOnlyStarter = flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('swaggymacro.forum.only_starter');
  var textNotOnlyStarter = flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('swaggymacro.forum.not_only_starter');
  $(function () {
    $("body").delegate(".OnlyStarter", "click", function () {
      if (!onlyStarter) {
        $(".CommentPost").each(function () {
          try {
            $(this).find('.PostUser .topicStarter')[0].className;
          } catch (e) {
            $(this).css("display", "none");
          }
        });
        onlyStarter = true;
        $(".OnlyStarter span").text(textNotOnlyStarter);
      } else {
        $(".CommentPost").each(function () {
          $(this).css("display", "block");
        });
        onlyStarter = false;
        $(".OnlyStarter span").text(textOnlyStarter);
      }

      console.log(onlyStarter);
    });
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_PostUser__WEBPACK_IMPORTED_MODULE_4___default.a.prototype, 'view', function (vnode) {
    if (flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.forum.attribute('showTopicStarter') == 0) return;
    var routeName = flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.current.get('routeName');

    if (routeName === 'discussion' || routeName === 'discussion.near' || routeName === 'blogArticle') {
      var labelText = routeName === 'blogArticle' ? flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('swaggymacro.forum.blog_article_author') : flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('swaggymacro.forum.topic_starter');
      var post = this.attrs.post;
      if (!post.user().id) return;
      var postAuthor = post.user().id();
      if (!post.discussion().user().id) return;
      var discussionAuthor = post.discussion().user().id();

      if (!discussionAuthor && !postAuthor) {
        return;
      }

      if (postAuthor === discussionAuthor && checkFP(post)) {
        vnode.children.push(m("span", {
          className: "topicStarter"
        }, labelText));
      } else {
        if (onlyStarter) {
          $(".CommentPost").each(function () {
            try {
              $(this).find('.PostUser .topicStarter')[0].className;
            } catch (e) {
              $(this).css("display", "none");
            }
          });
        }
      }
    }
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'sidebarItems', function (items) {
    if (flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.forum.attribute('onlyStarter') == 0) return;
    items.add('OnlyStarter', flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      icon: 'fas fa-user',
      className: 'Button OnlyStarter',
      type: 'button'
    }, textOnlyStarter));
  });
});

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_OnlyStarter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/OnlyStarter */ "./src/forum/components/OnlyStarter.js");

app.initializers.add('swaggymacro', function () {
  console.log('[swaggymacro/only-starter] Hello, forum!');
  Object(_components_OnlyStarter__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/DiscussionPage":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionPage']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionPage'];

/***/ }),

/***/ "flarum/components/PostUser":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/PostUser']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/PostUser'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map