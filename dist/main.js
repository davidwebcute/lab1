(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./api/json_data/taxrates.json":
/*!*************************************!*\
  !*** ./api/json_data/taxrates.json ***!
  \*************************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = [{"fyear":2018,"txRates":[{"min":0,"max":18200,"rate":0,"baseSubTotalTax":null},{"min":18200,"max":37000,"rate":0.19,"baseSubTotalTax":null},{"min":37000,"max":87000,"rate":0.325,"baseSubTotalTax":3572},{"min":87000,"max":180000,"rate":0.37,"baseSubTotalTax":19822},{"min":180000,"max":null,"rate":0.45,"baseSubTotalTax":54232}]},{"fyear":2017,"txRates":[{"min":0,"max":18200,"rate":0,"baseSubTotalTax":null},{"min":18200,"max":37000,"rate":0.19,"baseSubTotalTax":null},{"min":37000,"max":87000,"rate":0.325,"baseSubTotalTax":3572},{"min":87000,"max":180000,"rate":0.37,"baseSubTotalTax":19822},{"min":180000,"max":null,"rate":0.45,"baseSubTotalTax":54232}]},{"fyear":2016,"txRates":[{"min":0,"max":18200,"rate":0,"baseSubTotalTax":null},{"min":18200,"max":37000,"rate":0.19,"baseSubTotalTax":null},{"min":37000,"max":87000,"rate":0.325,"baseSubTotalTax":3572},{"min":87000,"max":180000,"rate":0.37,"baseSubTotalTax":19822},{"min":180000,"max":null,"rate":0.45,"baseSubTotalTax":54232}]}];

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default\">\n    <div class=\"container\">\n      <div id=\"navbar-main\">\n        <ul class=\"nav navbar-nav\">\n          <li><a routerLink=\"/\">Home</a></li>\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li *ngIf=\"!auth.isLoggedIn()\"><a routerLink=\"/login\">Sign in</a></li>\n          <li *ngIf=\"auth.isLoggedIn()\"><a routerLink=\"/profile\">{{ auth.getUserDetails()?.name }}</a></li>\n          <li *ngIf=\"auth.isLoggedIn()\"><a (click)=\"auth.logout()\">Logout</a></li>\n          <li *ngIf=\"auth.isLoggedIn()\"><a routerLink=\"/taxcalcrecords\">My tax calculations</a></li>\n          <li *ngIf=\"auth.isLoggedIn()\"><a routerLink=\"/taxcalcrecord-create\">Calculate tax again</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n<router-outlet></router-outlet>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'TaxCalculator';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _taxcalculate_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./taxcalculate.service */ "./src/app/taxcalculate.service.ts");
/* harmony import */ var _taxcalcrecord_taxcalcrecord_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./taxcalcrecord/taxcalcrecord.component */ "./src/app/taxcalcrecord/taxcalcrecord.component.ts");
/* harmony import */ var _taxcalcrecord_detail_taxcalcrecord_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./taxcalcrecord-detail/taxcalcrecord-detail.component */ "./src/app/taxcalcrecord-detail/taxcalcrecord-detail.component.ts");
/* harmony import */ var _taxcalcrecord_create_taxcalcrecord_create_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./taxcalcrecord-create/taxcalcrecord-create.component */ "./src/app/taxcalcrecord-create/taxcalcrecord-create.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"]] },
    {
        path: 'taxcalcrecords',
        component: _taxcalcrecord_taxcalcrecord_component__WEBPACK_IMPORTED_MODULE_13__["TaxcalcrecordComponent"],
        data: { title: 'Taxc calc record List' }
    },
    {
        path: 'taxcalcrecord-details/:id',
        component: _taxcalcrecord_detail_taxcalcrecord_detail_component__WEBPACK_IMPORTED_MODULE_14__["TaxcalcrecordDetailComponent"],
        data: { title: 'Tax calc record Details' }
    },
    {
        path: 'taxcalcrecord-create',
        component: _taxcalcrecord_create_taxcalcrecord_create_component__WEBPACK_IMPORTED_MODULE_15__["TaxcalcrecordCreateComponent"],
        data: { title: 'Create Tax calc record' }
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _taxcalcrecord_taxcalcrecord_component__WEBPACK_IMPORTED_MODULE_13__["TaxcalcrecordComponent"],
                _taxcalcrecord_detail_taxcalcrecord_detail_component__WEBPACK_IMPORTED_MODULE_14__["TaxcalcrecordDetailComponent"],
                _taxcalcrecord_create_taxcalcrecord_create_component__WEBPACK_IMPORTED_MODULE_15__["TaxcalcrecordCreateComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [
                _authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"],
                _auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"],
                _taxcalculate_service__WEBPACK_IMPORTED_MODULE_12__["TaxcalculateService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/');
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/authentication.service.ts":
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators/map */ "./node_modules/rxjs-compat/_esm5/operators/map.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthenticationService.prototype.saveToken = function (token) {
        localStorage.setItem('taxcalc-token', token);
        this.token = token;
    };
    AuthenticationService.prototype.getToken = function () {
        if (!this.token) {
            this.token = localStorage.getItem('taxcalc-token');
        }
        return this.token;
    };
    AuthenticationService.prototype.getUserDetails = function () {
        var token = this.getToken();
        var payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var user = this.getUserDetails();
        if (user) {
            return user.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.request = function (method, type, user) {
        var _this = this;
        var base;
        if (method === 'post') {
            base = this.http.post("/api/" + type, user);
        }
        else {
            base = this.http.get("/api/" + type, { headers: { Authorization: "Bearer " + this.getToken() } });
        }
        var request = base.pipe(Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            if (data.token) {
                _this.saveToken(data.token);
            }
            return data;
        }));
        return request;
    };
    AuthenticationService.prototype.register = function (user) {
        return this.request('post', 'register', user);
    };
    AuthenticationService.prototype.login = function (user) {
        return this.request('post', 'login', user);
    };
    AuthenticationService.prototype.profile = function () {
        return this.request('get', 'profile');
    };
    AuthenticationService.prototype.logout = function () {
        this.token = '';
        window.localStorage.removeItem('taxcalc-token');
        this.router.navigateByUrl('/');
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  \n  <h1>Hello there, welcome to use tax calclator!</h1>\n\n  <p *ngIf=\"!auth.isLoggedIn()\" >Won't you please <a routerLink=\"/login\">sign in</a> or <a routerLink=\"/register\">register</a>?</p>\n  \n  <p *ngIf=\"auth.isLoggedIn()\" ><a routerLink=\"/taxcalcrecord-create\">Calculate tax</a></p>\n   \n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(auth) {
        this.auth = auth;
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html")
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h1 class=\"form-signin-heading\">Sign in</h1>\n      <p class=\"lead\">Do dot have an account? Please <a routerLink=\"/register\">register</a> instead.</p>\n      <form (submit)=\"login()\">\n        <div class=\"form-group\">\n          <label for=\"email\">Email address</label>\n          <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"credentials.email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Sign in</button>\n      </form>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.credentials).subscribe(function () {
            _this.router.navigateByUrl('/profile');
        }, function (err) {
            console.error(err);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html")
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n     <div class=\"col-md-6\">\n      <h1>Your profile</h1>\n      <div class=\"form-horizontal\">\n        <div class=\"form-group\">\n          <label class=\"col-md-3 control-label\">Your Full name</label>\n          <p class=\"form-control-static\">{{ details?.name }}</p>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-md-3 control-label\">Your Email</label>\n          <p class=\"form-control-static\">{{ details?.email }}</p>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth) {
        this.auth = auth;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.profile().subscribe(function (user) {
            _this.details = user;
        }, function (err) {
            console.error(err);
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html")
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h1>Register</h1>\n      <p class=\"lead\">Already have an account? Please <a routerLink=\"/login\">log in</a> instead.</p>\n      <form (submit)=\"register()\">\n        <div class=\"form-group\">\n          <label for=\"name\">Full name</label>\n          <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Enter your name\" [(ngModel)]=\"credentials.name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"email\">Email address</label>\n          <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"credentials.email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Register</button>\n      </form>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {
            email: '',
            name: '',
            password: ''
        };
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.auth.register(this.credentials).subscribe(function () {
            _this.router.navigateByUrl('/profile');
        }, function (err) {
            console.error(err);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html")
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/taxcalcrecord-create/taxcalcrecord-create.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/taxcalcrecord-create/taxcalcrecord-create.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/taxcalcrecord-create/taxcalcrecord-create.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/taxcalcrecord-create/taxcalcrecord-create.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Calculate Tax</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"calSaveTaxcalcrecord()\" #taxcalcrecordForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"user_email\">User Email</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"record.user_email\" name=\"user_email\" [readonly]=\"true\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"financial_year\">FY Year</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"record.financial_year\" name=\"financial_year\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"annual_income\">Annual Income</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"record.annual_income\" name=\"annual_income\" required>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"super_rate\">Super rate(eg: 0.095, 9.5%)</label>\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"record.super_rate\" name=\"super_rate\" required>\n        </div>\n        \n        <div class=\"form-group\">\n          <label for=\"is_include_super\">Is super included</label>\n          <input type=\"checkbox\" class=\"form-control\" [(ngModel)]=\"record.is_include_super\" name=\"is_include_super\" >\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"superannuation\">Superannuation</label>\n          <input type=\"number\" class=\"form-control\" [ngModel]=\"record.superannuation\" [readonly]=\"true\" name=\"superannuation\" >\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"gross_amount\">Gross amount</label>\n          <input type=\"number\" class=\"form-control\" [ngModel]=\"record.gross_amount\" [readonly]=\"true\" name=\"gross_amount\" >\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"gross_super_amount\">Gross amount(Inc. Super)</label>\n          <input type=\"number\" class=\"form-control\" [ngModel]=\"record.gross_super_amount\" [readonly]=\"true\" name=\"gross_super_amount\" >\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"tax_amount\">Tax amount</label>\n          <input type=\"number\" class=\"form-control\" [ngModel]=\"record.tax_amount\" [readonly]=\"true\" name=\"tax_amount\" >\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"net_amount\">Net amount</label>\n          <input type=\"number\" class=\"form-control\" [ngModel]=\"record.net_amount\" [readonly]=\"true\" name=\"net_amount\" >\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"net_super_amount\">Net amount(Inc. Super)</label>\n          <input type=\"number\" class=\"form-control\" [ngModel]=\"record.net_super_amount\" [readonly]=\"true\" name=\"net_super_amount\" >\n        </div>\n       \n\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!taxcalcrecordForm.form.valid\">Calculate & Save</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/taxcalcrecord-create/taxcalcrecord-create.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/taxcalcrecord-create/taxcalcrecord-create.component.ts ***!
  \************************************************************************/
/*! exports provided: TaxcalcrecordCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxcalcrecordCreateComponent", function() { return TaxcalcrecordCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _taxcalculate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../taxcalculate.service */ "./src/app/taxcalculate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TaxcalcrecordCreateComponent = /** @class */ (function () {
    function TaxcalcrecordCreateComponent(http, router, auth, taxCalService) {
        this.http = http;
        this.router = router;
        this.auth = auth;
        this.taxCalService = taxCalService;
        this.record = { 'financial_year': 2018 };
    }
    TaxcalcrecordCreateComponent.prototype.ngOnInit = function () {
        var email = this.auth.getUserDetails().email;
        this.record['user_email'] = email;
    };
    TaxcalcrecordCreateComponent.prototype.calSaveTaxcalcrecord = function () {
        this.calTax();
        this.saveTaxcalcrecord();
    };
    TaxcalcrecordCreateComponent.prototype.saveTaxcalcrecord = function () {
        this.taxCalService.saveTaxcalcrecords(this.record)
            .subscribe(function (res) {
            var id = res['_id'];
            //this.router.navigate(['/taxcalcrecord-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    TaxcalcrecordCreateComponent.prototype.calTax = function () {
        var tRateObj = this.taxCalService.getTaxRateMeta(this.record['financial_year']);
        if (tRateObj == undefined || tRateObj == null) {
            return;
        }
        if (this.record['is_include_super']) {
            this.record['superannuation'] = this.record['super_rate'] * this.record['annual_income'];
            this.record['gross_amount'] = this.record['annual_income'] - this.record['superannuation'];
        }
        else {
            this.record['superannuation'] = this.record['super_rate'] * this.record['annual_income'];
            this.record['gross_amount'] = this.record['annual_income'];
        }
        this.record['gross_super_amount'] = this.record['gross_amount'] * 1 + this.record['superannuation'];
        var taxableIncome = this.record['gross_amount'];
        var baseSubTotalTax = 0;
        var taxRateItemProjected = null;
        var txRates = tRateObj['txRates'].filter(function (rateInfo) { return taxableIncome <= rateInfo['max']; });
        if (txRates.length > 0) {
            taxRateItemProjected = txRates[0];
        }
        if (taxRateItemProjected != null) {
            this.record['tax_amount'] = taxRateItemProjected.baseSubTotalTax + (taxableIncome - taxRateItemProjected.min) * taxRateItemProjected.rate;
            this.record['net_amount'] = taxableIncome - this.record['tax_amount'];
            this.record['net_super_amount'] = this.record['net_amount'] + this.record['superannuation'];
        }
    };
    TaxcalcrecordCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-taxcalcrecord-create',
            template: __webpack_require__(/*! ./taxcalcrecord-create.component.html */ "./src/app/taxcalcrecord-create/taxcalcrecord-create.component.html"),
            styles: [__webpack_require__(/*! ./taxcalcrecord-create.component.css */ "./src/app/taxcalcrecord-create/taxcalcrecord-create.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _taxcalculate_service__WEBPACK_IMPORTED_MODULE_4__["TaxcalculateService"]])
    ], TaxcalcrecordCreateComponent);
    return TaxcalcrecordCreateComponent;
}());



/***/ }),

/***/ "./src/app/taxcalcrecord-detail/taxcalcrecord-detail.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/taxcalcrecord-detail/taxcalcrecord-detail.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/taxcalcrecord-detail/taxcalcrecord-detail.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/taxcalcrecord-detail/taxcalcrecord-detail.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>{{ record.user_email }}</h1>\n  <dl class=\"list\">\n  \n    <dt>FY Year</dt>\n    <dd>{{ record.financial_year }}</dd>\n    <dt>Annual Income</dt>\n    <dd>{{ record.annual_income }}</dd>\n    <dt>Super rate</dt>\n    <dd>{{ record.super_rate }}</dd>\n    <dt>Is super included</dt>\n    <dd>{{ record.is_include_super }}</dd>\n    <dt>Superannuation</dt>\n    <dd>{{ record.superannuation }}</dd>\n\t\n\t<dt>Gross amount</dt>\n    <dd>{{ record.gross_amount }}</dd>\n    <dt>Gross amount(Inc. Super)</dt>\n    <dd>{{ record.gross_super_amount }}</dd>\n    <dt>Tax amount</dt>\n    <dd>{{ record.tax_amount }}</dd>\n    <dt>Net amount</dt>\n    <dd>{{ record.net_amount }}</dd>\n    <dt>Net amount(Inc. Super)</dt>\n    <dd>{{ record.net_super_amount }}</dd>\n\t<dt>Created date</dt>\n    <dd>{{ record.created_date }}</dd>\n\n  </dl>\n</div>"

/***/ }),

/***/ "./src/app/taxcalcrecord-detail/taxcalcrecord-detail.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/taxcalcrecord-detail/taxcalcrecord-detail.component.ts ***!
  \************************************************************************/
/*! exports provided: TaxcalcrecordDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxcalcrecordDetailComponent", function() { return TaxcalcrecordDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _taxcalculate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../taxcalculate.service */ "./src/app/taxcalculate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaxcalcrecordDetailComponent = /** @class */ (function () {
    function TaxcalcrecordDetailComponent(route, http, taxCalService) {
        this.route = route;
        this.http = http;
        this.taxCalService = taxCalService;
        this.record = {};
    }
    TaxcalcrecordDetailComponent.prototype.ngOnInit = function () {
        this.getTaxcalcrecordDetail(this.route.snapshot.params['id']);
    };
    TaxcalcrecordDetailComponent.prototype.getTaxcalcrecordDetail = function (id) {
        var _this = this;
        // this.http.get('/api/taxcalcrecord/'+id).subscribe(data => {
        //   this.record = data;
        // });
        this.taxCalService.getTaxcalcrecordDetail(id).subscribe(function (data) {
            _this.record = data;
        });
    };
    TaxcalcrecordDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-taxcalcrecord-detail',
            template: __webpack_require__(/*! ./taxcalcrecord-detail.component.html */ "./src/app/taxcalcrecord-detail/taxcalcrecord-detail.component.html"),
            styles: [__webpack_require__(/*! ./taxcalcrecord-detail.component.css */ "./src/app/taxcalcrecord-detail/taxcalcrecord-detail.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _taxcalculate_service__WEBPACK_IMPORTED_MODULE_3__["TaxcalculateService"]])
    ], TaxcalcrecordDetailComponent);
    return TaxcalcrecordDetailComponent;
}());



/***/ }),

/***/ "./src/app/taxcalcrecord/taxcalcrecord.component.css":
/*!***********************************************************!*\
  !*** ./src/app/taxcalcrecord/taxcalcrecord.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/taxcalcrecord/taxcalcrecord.component.html":
/*!************************************************************!*\
  !*** ./src/app/taxcalcrecord/taxcalcrecord.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Tax Calculation Record List\n    <a [routerLink]=\"['/taxcalcrecord-create']\" class=\"btn btn-default btn-lg\">\n      <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\">+</span>\n    </a>\n  </h1>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>FY Year</th>\n        <th>Annual Income</th>\n        <th>Super rate</th>\n        <th>Tax amount</th>\n        <th>Created date</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let record of taxCalcRecords\">\n        <td>{{ record.financial_year }}</td>\n        <td>{{ record.annual_income }}</td>\n        <td>{{ record.super_rate }}</td>\n        <td>{{ record.tax_amount }}</td>\n        <td>{{ record.created_date }}</td>\n        <td>\n          <a [routerLink]=\"['/taxcalcrecord-details',record._id]\" class=\"btn btn-default btn-lg\">\n            <span class=\"glyphicon glyphicons-note\" aria-hidden=\"true\">Details</span>\n          </a>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/taxcalcrecord/taxcalcrecord.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/taxcalcrecord/taxcalcrecord.component.ts ***!
  \**********************************************************/
/*! exports provided: TaxcalcrecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxcalcrecordComponent", function() { return TaxcalcrecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _taxcalculate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../taxcalculate.service */ "./src/app/taxcalculate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaxcalcrecordComponent = /** @class */ (function () {
    function TaxcalcrecordComponent(http, auth, taxCalService) {
        this.http = http;
        this.auth = auth;
        this.taxCalService = taxCalService;
    }
    TaxcalcrecordComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.http.get('/api/taxcalcrecords').subscribe(data => {
        //   this.taxCalcRecords = data;
        // });
        var email = this.auth.getUserDetails().email;
        this.taxCalService.getTaxcalcrecordsByEmail(email).subscribe(function (data) {
            _this.taxCalcRecords = data;
        });
    };
    TaxcalcrecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-taxcalcrecord',
            template: __webpack_require__(/*! ./taxcalcrecord.component.html */ "./src/app/taxcalcrecord/taxcalcrecord.component.html"),
            styles: [__webpack_require__(/*! ./taxcalcrecord.component.css */ "./src/app/taxcalcrecord/taxcalcrecord.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _taxcalculate_service__WEBPACK_IMPORTED_MODULE_3__["TaxcalculateService"]])
    ], TaxcalcrecordComponent);
    return TaxcalcrecordComponent;
}());



/***/ }),

/***/ "./src/app/taxcalculate.service.ts":
/*!*****************************************!*\
  !*** ./src/app/taxcalculate.service.ts ***!
  \*****************************************/
/*! exports provided: TaxcalculateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxcalculateService", function() { return TaxcalculateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaxcalculateService = /** @class */ (function () {
    function TaxcalculateService(http, router, authService) {
        this.http = http;
        this.router = router;
        this.authService = authService;
    }
    TaxcalculateService.prototype.getTaxcalcrecordsByEmail = function (email) {
        return this.http.get('/api/taxcalcrecordsbyemail/' + email, { headers: { Authorization: "Bearer " + this.authService.getToken() } });
    };
    TaxcalculateService.prototype.getTaxcalcrecords = function () {
        return this.http.get('/api/taxcalcrecords', { headers: { Authorization: "Bearer " + this.authService.getToken() } });
    };
    TaxcalculateService.prototype.saveTaxcalcrecords = function (record) {
        return this.http.post('/api/taxcalcrecord', record, { headers: { Authorization: "Bearer " + this.authService.getToken() } });
    };
    TaxcalculateService.prototype.getTaxcalcrecordDetail = function (id) {
        return this.http.get('/api/taxcalcrecord/' + id, { headers: { Authorization: "Bearer " + this.authService.getToken() } });
    };
    //TO be moved to separated service
    TaxcalculateService.prototype.getTaxRateMeta = function (fyear) {
        var txRateData = __webpack_require__(/*! ../../api/json_data/taxrates.json */ "./api/json_data/taxrates.json");
        if (txRateData) {
            var rds = txRateData.filter(function (rd) { return fyear == rd.fyear; });
            if (rds.length > 0) {
                return rds[0];
            }
        }
        return null;
    };
    TaxcalculateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], TaxcalculateService);
    return TaxcalculateService;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\IT\TaxCalculatorApp\TaxCalculator\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map