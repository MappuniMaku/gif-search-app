(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _images_images_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/images.component */ "./src/app/images/images.component.ts");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-images");
    } }, directives: [_images_images_component__WEBPACK_IMPORTED_MODULE_1__["ImagesComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _images_images_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/images.component */ "./src/app/images/images.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _images_images_component__WEBPACK_IMPORTED_MODULE_4__["ImagesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _images_images_component__WEBPACK_IMPORTED_MODULE_4__["ImagesComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/image.service.ts":
/*!**********************************!*\
  !*** ./src/app/image.service.ts ***!
  \**********************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class ImageService {
    constructor(http) {
        this.http = http;
    }
    getGifJSON(tag) {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=biXysln47XZ03gvbYk2z9BYMT7eaHT5R&tag=${tag}`;
        return this.http.get(url).pipe(
        // tap(_ => console.log('GIF загружена успешно')),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getGif', [])));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error);
            alert('Произошла http ошибка');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    }
}
ImageService.ɵfac = function ImageService_Factory(t) { return new (t || ImageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ImageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ImageService, factory: ImageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/images/images.component.ts":
/*!********************************************!*\
  !*** ./src/app/images/images.component.ts ***!
  \********************************************/
/*! exports provided: ImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesComponent", function() { return ImagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image.service */ "./src/app/image.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ImagesComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImagesComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.searchTag(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ImagesComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ImagesComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImagesComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.groupImages(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0413\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ImagesComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImagesComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.ungroupImages(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0420\u0430\u0437\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ImagesComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gif_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", gif_r13.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ImagesComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImagesComponent_div_9_div_1_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.gifsArray);
} }
function ImagesComponent_div_10_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gif_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", gif_r16.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ImagesComponent_div_10_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImagesComponent_div_10_div_3_div_1_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gif_r16 = ctx.$implicit;
    const tag_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", gif_r16.tag === tag_r14);
} }
function ImagesComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ImagesComponent_div_10_div_3_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r14 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.gifsArray);
} }
class ImagesComponent {
    constructor(imageService) {
        this.imageService = imageService;
        this.userInputTag = '';
        this.queryInProgress = false;
        this.gifsArray = [];
        this.isGrouped = false;
        this.uniqueTagsArray = [];
    }
    ngOnInit() {
    }
    searchTag() {
        if (this.userInputTag) {
            this.queryInProgress = true;
            this.getGifJSON(this.userInputTag);
        }
        else {
            alert('Заполните поле "тег"');
        }
    }
    handleResponse(serverResponse) {
        this.queryInProgress = false;
        if (serverResponse.data.image_url) {
            let gif = {
                tag: this.userInputTag,
                url: serverResponse.data.image_url
            };
            this.gifsArray.push(gif);
            if (this.isGrouped) {
                this.fillUniqueTagsArray();
            }
            ;
        }
        else {
            alert('По тегу ничего не найдено');
        }
    }
    clear() {
        this.gifsArray = [];
        this.userInputTag = '';
        this.uniqueTagsArray = [];
    }
    groupImages() {
        this.isGrouped = true;
        this.fillUniqueTagsArray();
    }
    ungroupImages() {
        this.isGrouped = false;
        this.uniqueTagsArray = [];
    }
    fillUniqueTagsArray() {
        for (let gif of this.gifsArray) {
            if (!this.uniqueTagsArray.includes(gif.tag)) {
                this.uniqueTagsArray.push(gif.tag);
            }
            ;
        }
        ;
    }
    getGifJSON(tag) {
        this.imageService.getGifJSON(tag).subscribe(serverResponse => {
            this.handleResponse(serverResponse);
        });
    }
}
ImagesComponent.ɵfac = function ImagesComponent_Factory(t) { return new (t || ImagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"])); };
ImagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImagesComponent, selectors: [["app-images"]], decls: 11, vars: 7, consts: [[1, "wrapper"], [1, "controls"], ["type", "text", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u0433", 1, "controls__item", "controls__input", 3, "ngModel", "ngModelChange"], ["class", "controls__item controls__button-load", 3, "click", 4, "ngIf"], ["class", "controls__item controls__button-load", "disabled", "", 4, "ngIf"], [1, "controls__item", "controls__button-clear", 3, "click"], ["class", "controls__item controls__button-group", 3, "click", 4, "ngIf"], ["class", "gallery", 4, "ngIf"], ["class", "gallery gallery_tagged", 4, "ngFor", "ngForOf"], [1, "controls__item", "controls__button-load", 3, "click"], ["disabled", "", 1, "controls__item", "controls__button-load"], [1, "controls__item", "controls__button-group", 3, "click"], [1, "gallery"], ["class", "gallery__item", 4, "ngFor", "ngForOf"], [1, "gallery__item"], [1, "gallery__image", 3, "src"], [1, "gallery", "gallery_tagged"], [1, "gallery__tag-name"], [4, "ngFor", "ngForOf"], ["class", "gallery__item", 4, "ngIf"]], template: function ImagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ImagesComponent_Template_input_ngModelChange_2_listener($event) { return ctx.userInputTag = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ImagesComponent_button_3_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ImagesComponent_button_4_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImagesComponent_Template_button_click_5_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ImagesComponent_button_7_Template, 2, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ImagesComponent_button_8_Template, 2, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ImagesComponent_div_9_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ImagesComponent_div_10_Template, 4, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userInputTag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.queryInProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.queryInProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isGrouped);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isGrouped);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isGrouped);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.uniqueTagsArray);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 0 40px 0;\n}\n\n.controls__item[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.controls__input[_ngcontent-%COMP%] {\n  height: 35px;\n  border: 1px solid silver;\n  border-radius: 3px;\n  padding: 0 10px;\n  box-sizing: border-box;\n  width: 200px;\n  cursor: default;\n}\n\n.controls__button-load[_ngcontent-%COMP%] {\n  background-color: #58D68D;\n  border: none;\n  border-radius: 4px;\n  padding: 10px;\n  color: #F2F3F4;\n  width: 80px;\n}\n\n.controls__button-load[_ngcontent-%COMP%]:hover {\n  background-color: #2ECC71;\n}\n\n.controls__button-load[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n\n.controls__button-clear[_ngcontent-%COMP%] {\n  background-color: #EC7063;\n  border: none;\n  border-radius: 4px;\n  padding: 10px;\n  color: #F2F3F4;\n}\n\n.controls__button-clear[_ngcontent-%COMP%]:hover {\n  background-color: #E74C3C;\n}\n\n.controls__button-group[_ngcontent-%COMP%] {\n  background-color: #5DADE2;\n  border: none;\n  border-radius: 4px;\n  padding: 10px;\n  color: #F2F3F4;\n  margin-right: 0;\n}\n\n.controls__button-group[_ngcontent-%COMP%]:hover {\n  background-color: #3498DB;\n}\n\n.gallery[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  width: 850px;\n}\n\n.gallery__item[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 250px;\n  border: 1px solid silver;\n  padding: 5px;\n  border-radius: 4px;\n  margin-right: 25px;\n  margin-bottom: 20px;\n  box-sizing: border-box;\n}\n\n.gallery__item[_ngcontent-%COMP%]:nth-of-type(3n) {\n  margin-right: 0;\n}\n\n.gallery__image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.gallery_tagged[_ngcontent-%COMP%] {\n  padding: 50px 10px 10px 10px;\n  position: relative;\n  border: 1px solid silver;\n  border-radius: 4px;\n  margin-bottom: 10px;\n}\n\n.gallery__tag-name[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n}\n\n@media screen and (max-width: 900px) {\n  .gallery[_ngcontent-%COMP%] {\n    width: 600px;\n  }\n  .gallery__item[_ngcontent-%COMP%]:nth-of-type(3n) {\n    margin-right: 25px;\n  }\n  .gallery__item[_ngcontent-%COMP%]:nth-of-type(2n) {\n    margin-right: 0;\n  }\n}\n\n@media screen and (max-width: 650px) {\n  .controls[_ngcontent-%COMP%] {\n    width: 300px;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  .controls__item[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  .controls__button-load[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n\n  .gallery[_ngcontent-%COMP%] {\n    width: 250px;\n  }\n  .gallery__item[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n  .gallery__item[_ngcontent-%COMP%]:nth-of-type(3n) {\n    margin-right: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1hZ2VzL2ltYWdlcy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQUVSOztBQUFJO0VBQ0ksWUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUVSOztBQUFJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFFUjs7QUFBUTtFQUNJLHlCQUFBO0FBRVo7O0FBQVE7RUFDSSxZQUFBO0FBRVo7O0FBQUk7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBRVI7O0FBQVE7RUFDSSx5QkFBQTtBQUVaOztBQUFJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFFUjs7QUFBUTtFQUNJLHlCQUFBO0FBRVo7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBRVI7O0FBQVE7RUFDSSxlQUFBO0FBRVo7O0FBQ0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFDUjs7QUFDSTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDUjs7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtBQUNSOztBQUNBO0VBQ0k7SUFDSSxZQUFBO0VBRU47RUFFVTtJQUNJLGtCQUFBO0VBQWQ7RUFFVTtJQUNJLGVBQUE7RUFBZDtBQUNGOztBQUNBO0VBQ0k7SUFDSSxZQUFBO0lBQ0EsZUFBQTtJQUNBLHVCQUFBO0VBQ047RUFDTTtJQUNJLG1CQUFBO0VBQ1Y7RUFDTTtJQUNJLGVBQUE7RUFDVjs7RUFDRTtJQUNJLFlBQUE7RUFFTjtFQUFNO0lBQ0ksZUFBQTtFQUVWO0VBQVU7SUFDSSxlQUFBO0VBRWQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlcy9pbWFnZXMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlclxyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcblxyXG4uY29udHJvbHNcclxuICAgIGRpc3BsYXk6IGZsZXhcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3dcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydFxyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50XHJcbiAgICBtYXJnaW46IDAgMCA0MHB4IDBcclxuXHJcbiAgICAmX19pdGVtXHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyXHJcblxyXG4gICAgJl9faW5wdXRcclxuICAgICAgICBoZWlnaHQ6IDM1cHhcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBzaWx2ZXJcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHhcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHhcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4XHJcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0XHJcblxyXG4gICAgJl9fYnV0dG9uLWxvYWRcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNThENjhEXHJcbiAgICAgICAgYm9yZGVyOiBub25lXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4XHJcbiAgICAgICAgcGFkZGluZzogMTBweFxyXG4gICAgICAgIGNvbG9yOiAjRjJGM0Y0XHJcbiAgICAgICAgd2lkdGg6IDgwcHhcclxuXHJcbiAgICAgICAgJjpob3ZlclxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkVDQzcxXHJcblxyXG4gICAgICAgICY6ZGlzYWJsZWRcclxuICAgICAgICAgICAgb3BhY2l0eTogMC41XHJcblxyXG4gICAgJl9fYnV0dG9uLWNsZWFyXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VDNzA2M1xyXG4gICAgICAgIGJvcmRlcjogbm9uZVxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweFxyXG4gICAgICAgIHBhZGRpbmc6IDEwcHhcclxuICAgICAgICBjb2xvcjogI0YyRjNGNFxyXG5cclxuICAgICAgICAmOmhvdmVyXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFNzRDM0NcclxuXHJcbiAgICAmX19idXR0b24tZ3JvdXBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNURBREUyXHJcbiAgICAgICAgYm9yZGVyOiBub25lXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4XHJcbiAgICAgICAgcGFkZGluZzogMTBweFxyXG4gICAgICAgIGNvbG9yOiAjRjJGM0Y0XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwXHJcblxyXG4gICAgICAgICY6aG92ZXJcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThEQlxyXG5cclxuXHJcbi5nYWxsZXJ5XHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnRcclxuICAgIGZsZXgtd3JhcDogd3JhcFxyXG4gICAgd2lkdGg6IDg1MHB4XHJcbiAgICBcclxuICAgICZfX2l0ZW1cclxuICAgICAgICB3aWR0aDogMjUwcHhcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgc2lsdmVyXHJcbiAgICAgICAgcGFkZGluZzogNXB4XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweFxyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3hcclxuXHJcbiAgICAgICAgJjpudGgtb2YtdHlwZSgzbilcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICZfX2ltYWdlXHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlXHJcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJVxyXG5cclxuICAgICZfdGFnZ2VkXHJcbiAgICAgICAgcGFkZGluZzogNTBweCAxMHB4IDEwcHggMTBweFxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHNpbHZlclxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweFxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHhcclxuXHJcbiAgICAmX190YWctbmFtZVxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gICAgICAgIHRvcDogMFxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKCBtYXgtd2lkdGg6IDkwMHB4IClcclxuICAgIC5nYWxsZXJ5XHJcbiAgICAgICAgd2lkdGg6IDYwMHB4XHJcblxyXG4gICAgICAgICZfX2l0ZW1cclxuXHJcbiAgICAgICAgICAgICY6bnRoLW9mLXR5cGUoM24pXHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1cHhcclxuXHJcbiAgICAgICAgICAgICY6bnRoLW9mLXR5cGUoMm4pXHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBcclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kICggbWF4LXdpZHRoOiA2NTBweCApXHJcbiAgICAuY29udHJvbHNcclxuICAgICAgICB3aWR0aDogMzAwcHhcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXBcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG5cclxuICAgICAgICAmX19pdGVtXHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHhcclxuXHJcbiAgICAgICAgJl9fYnV0dG9uLWxvYWRcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwXHJcbiAgICBcclxuICAgIC5nYWxsZXJ5XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4XHJcblxyXG4gICAgICAgICZfX2l0ZW1cclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwXHJcblxyXG4gICAgICAgICAgICAmOm50aC1vZi10eXBlKDNuKVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-images',
                templateUrl: './images.component.html',
                styleUrls: ['./images.component.sass']
            }]
    }], function () { return [{ type: _image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ПК\Desktop\gif-search-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map