webpackJsonp([0],{

/***/ 193:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 193;

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 234;

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/albert/Chess/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/albert/Chess/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/albert/Chess/src/pages/about/about.html"*/'<ion-content padding>\n</ion-content>'/*ion-inline-end:"/home/albert/Chess/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/albert/Chess/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/albert/Chess/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/albert/Chess/src/pages/home/home.html"*/'<ion-content padding>\n  <chess-database-game></chess-database-game>\n</ion-content>'/*ion-inline-end:"/home/albert/Chess/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(424);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_chess_database_game_chess_database_game__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_firestore__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_storage__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angularfire2_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var config = {
    apiKey: "AIzaSyBljQAnmKh_jsvfddi8pECxNWafNSbMZSU",
    authDomain: "studionicapp.firebaseapp.com",
    databaseURL: "https://studionicapp.firebaseio.com",
    projectId: "studionicapp",
    storageBucket: "studionicapp.appspot.com",
    messagingSenderId: "1029970822461"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__components_chess_database_game_chess_database_game__["a" /* ChessDatabaseGameComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["AngularFireModule"].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_firestore__["AngularFirestoreModule"],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_storage__["AngularFireStorageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__components_chess_database_game_chess_database_game__["a" /* ChessDatabaseGameComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/albert/Chess/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/albert/Chess/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChessDatabaseGameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chess_js__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chess_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chess_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chessboardjs__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chessboardjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chessboardjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chess_fu_pgn_parser__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chess_fu_pgn_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__chess_fu_pgn_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the ChessDatabaseGameComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ChessDatabaseGameComponent = /** @class */ (function () {
    function ChessDatabaseGameComponent(db, alertCtrl) {
        var _this = this;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.white = "";
        this.black = "";
        this.game = __WEBPACK_IMPORTED_MODULE_1_chess_js___default()();
        this.moves = [];
        this.zug = 0;
        this.history = [];
        console.log('Hello ChessDatabaseGameComponent Component');
        db.collection('chess').doc('gameCollection').valueChanges().subscribe(function (data) {
            _this.games = data;
        });
    }
    ChessDatabaseGameComponent.prototype.presentAlert = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                alert = this.alertCtrl.create({
                    title: 'Spielinformationen',
                    message: this.games[key].pgn,
                    buttons: [
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            handler: function () {
                                console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'Nachspielen',
                            handler: function () {
                                _this.white = _this.games[key].white;
                                _this.black = _this.games[key].black;
                                var new_game = __WEBPACK_IMPORTED_MODULE_1_chess_js___default()();
                                new_game.load_pgn(_this.games[key].pgn);
                                _this.history = new_game.history();
                                _this.update();
                            }
                        }
                    ]
                });
                alert.present();
                return [2 /*return*/];
            });
        });
    };
    ChessDatabaseGameComponent.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            var turn, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        turn = 'white';
                        for (i = 0; i < this.history.length; i++) {
                            if (turn == 'white') {
                                this.moves[i / 2] = {};
                                this.moves[i / 2]['white'] = this.history[i];
                                turn = 'black';
                            }
                            else {
                                this.moves[(i - 1) / 2]['black'] = this.history[i];
                                turn = 'white';
                            }
                        }
                        return [4 /*yield*/, this.delay(10)];
                    case 1:
                        _a.sent();
                        document.getElementById((this.zug).toString()).scrollIntoView(false);
                        $('#' + this.zug).addClass("highlight");
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    ChessDatabaseGameComponent.prototype.delay = function (ms) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return setTimeout(resolve, ms); })];
            });
        });
    };
    ChessDatabaseGameComponent.prototype.position = function (pos) {
        this.game.reset();
        for (var j = 0; j <= pos; j++) {
            this.game.move(this.history[j]);
        }
        this.board.position(this.game.fen());
        $('#' + this.zug).removeClass('highlight');
        $('#' + pos).addClass("highlight");
        this.zug = pos;
        document.getElementById((pos.toString())).scrollIntoView(false);
    };
    ChessDatabaseGameComponent.prototype.ngAfterViewInit = function () {
        var repeat = false;
        var create = 0;
        //jquery has it's own this context, so self is used to call ionic context in jquery functions
        var self = this;
        var onDragStart = function (source, piece, position, orientation) {
            if (self.game.game_over() === true ||
                (self.game.turn() === 'w' && piece.search(/^b/) !== -1) ||
                (self.game.turn() === 'b' && piece.search(/^w/) !== -1)) {
                return false;
            }
        };
        var onDrop = function (source, target) {
            return __awaiter(this, void 0, void 0, function () {
                var move;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            move = self.game.move({
                                from: source,
                                to: target,
                                promotion: 'q' // NOTE: always promote to a queen for example simplicity
                            });
                            // illegal move
                            if (move === null)
                                return [2 /*return*/, 'snapback'];
                            updateStatus();
                            return [4 /*yield*/, self.delay(1)];
                        case 1:
                            _a.sent();
                            highlight(self.zug, self.history.length - 1);
                            self.zug = self.history.length - 1;
                            check_database();
                            return [2 /*return*/];
                    }
                });
            });
        };
        // update the board position after the piece snap 
        // for castling, en passant, pawn promotion
        var onSnapEnd = function () {
            self.board.position(self.game.fen());
        };
        var parser = new __WEBPACK_IMPORTED_MODULE_3__chess_fu_pgn_parser__["PgnParser"]();
        // do not pick up pieces if the game is over
        // only pick up pieces for the side to move
        var highlight = function (zug_alt, zug_neu) {
            $('#' + zug_alt).removeClass('highlight');
            $('#' + zug_neu).addClass("highlight");
        };
        var updateStatus = function () {
            var turn = 'white';
            self.history = self.game.history();
            for (var i = 0; i < self.history.length; i++) {
                if (turn == 'white') {
                    self.moves[i / 2] = {};
                    self.moves[i / 2]['white'] = self.history[i];
                    turn = 'black';
                }
                else {
                    self.moves[(i - 1) / 2]['black'] = self.history[i];
                    turn = 'white';
                }
            }
            //highlight(zug, -1);
            self.zug = -1;
        };
        var check_database = function () {
            console.time("iteration_speed:");
            if (self.zug >= 0 && self.zug < 10) {
                var iterations = 0;
                var games_played = [];
                for (var key in self.games) {
                    var tmp = self.games[key]["positions"][self.zug];
                    if (tmp.toString() == self.game.fen()) {
                        console.log("game found");
                        games_played.push(key);
                    }
                    iterations++;
                }
                self.games_played = games_played;
                console.log("iterations:", iterations);
            }
            console.timeEnd("iteration_speed:");
        };
        var cfg = {
            draggable: true,
            position: "start",
            onDragStart: onDragStart,
            onDrop: onDrop,
            onSnapEnd: onSnapEnd
        };
        self.board = __WEBPACK_IMPORTED_MODULE_2_chessboardjs___default()('chessDatabaseGame', cfg);
        //game.load_pgn(pgn2.join('\n'));
        //game.load_pgn(pgn.join('\n'));
        //const [test] = parser.parse(game.pgn());
        //console.log(JSON.stringify(test.moves()));
        updateStatus();
        self.game.reset();
        $("#back").click(function () {
            var zug_alt = self.zug;
            var zug_neu = self.zug - 1;
            if (self.zug >= 0) {
                self.zug = zug_neu;
                self.game.undo();
                self.board.position(self.game.fen());
                highlight(zug_alt, zug_neu);
                check_database();
            }
            repeat = false;
        });
        $("#backback").click(function () {
            var zug_alt = self.zug;
            self.zug = -1;
            self.game.reset();
            self.board.position(self.game.fen());
            highlight(zug_alt, -1);
            repeat = false;
        });
        $("#vor").click(function () {
            var zug_alt = self.zug;
            var zug_neu = self.zug + 1;
            if (zug_neu < self.history.length) {
                self.zug = zug_neu;
                self.game.move(self.history[zug_neu]);
                console.log(self.history[zug_neu]);
                self.board.position(self.game.fen());
                highlight(zug_alt, zug_neu);
                check_database();
            }
            repeat = false;
        });
        $("#vorvor").click(function () {
            var zug_alt = self.zug;
            for (var i = self.zug; i < self.history.length - 1; i++) {
                self.game.move(self.history[i + 1]);
            }
            self.zug = self.history.length - 1;
            //game.load_pgn(pgn.join('\n'));
            self.board.position(self.game.fen());
            highlight(zug_alt, self.zug);
            repeat = false;
            check_database();
        });
        $("#play").click(function () {
            if (repeat == false) {
                repeat = true;
                window.setTimeout(makeMove, 400);
                $("#stop_icon").toggle();
                $("#play_icon").toggle();
            }
            else {
                repeat = false;
            }
        });
        $("#flip").click(function () {
            self.board.flip();
        });
        var makeMove = function () {
            if (repeat === true) {
                var zug_alt = self.zug;
                var zug_neu = self.zug + 1;
                if (zug_neu < self.history.length) {
                    self.zug = zug_neu;
                    self.game.move(self.history[zug_neu]);
                    self.board.position(self.game.fen());
                    highlight(zug_alt, zug_neu);
                    document.getElementById((zug_neu.toString())).scrollIntoView(false);
                }
                else {
                    repeat = false;
                }
                window.setTimeout(makeMove, 500);
            }
            else {
                $("#stop_icon").toggle();
                $("#play_icon").toggle();
            }
        };
        $("#stop_icon").hide();
        $("#checkmark_icon").hide();
        $("#black_name").hide();
        $("#white_name").hide();
        var uniqueId = function () {
            return 'id-' + Math.random().toString(36).substr(2, 16);
        };
        $("#save_database").click(function () {
            var save_game = __WEBPACK_IMPORTED_MODULE_1_chess_js___default()();
            var data = {};
            var positions = [];
            save_game.header("white", self.white, "black", self.black);
            save_game.reset();
            for (var i = 0; i < 10; i++) {
                save_game.move(self.history[i]);
                positions[i] = save_game.fen();
            }
            if (self.history.length > 9) {
                for (var i = 10; i < self.history.length; i++) {
                    save_game.move(self.history[i]);
                }
            }
            self.key = uniqueId();
            data[self.key] = {
                white: self.white,
                black: self.black,
                pgn: save_game.pgn(),
                positions: positions
            };
            self.db.collection('chess').doc('gameCollection').update(data).then(function () {
                console.log("document updated");
            });
        });
    };
    ChessDatabaseGameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'chess-database-game',template:/*ion-inline-start:"/home/albert/Chess/src/components/chess-database-game/chess-database-game.html"*/'<div id=\'chessDatabaseGame\' style="width: 100%"></div>\n<p><span id="fen_game"></span></p>\n<br>\n<ion-grid>\n    <ion-row>\n        <ion-col class="notation" id="information" col-7 style="height:75px;">\n            <ion-list>\n                <ion-item item-left>\n                    <ion-label>\n                        <ion-icon><img src="imgs/white_knight.svg" style="max-height: 30px"></ion-icon>\n                    </ion-label>\n                    <div id="white_name" item-content>{{white}}</div>\n                    <ion-input id="white_input" placeholder="{{white}}" [(ngModel)]="white"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>\n                        <ion-icon><img src="imgs/black_knight.svg" style="max-height: 30px"></ion-icon>\n                    </ion-label>\n                    <div id="black_name" item-content>{{black}}</div>\n                    <ion-input id="black_input" placeholder="{{black}}" [(ngModel)]="black"></ion-input>\n                </ion-item>\n            </ion-list>\n        </ion-col>\n        <ion-col class="notation" col-5 style="height:75px;overflow:auto;display:block">\n            <ion-row *ngFor="let move of moves;let i = index">\n                <ion-col col-2>\n                    {{i}}\n                </ion-col>\n                <ion-col col-5 id="{{i*2}}" (click)=position(i*2)>\n                    {{move.white}}\n                </ion-col>\n                <ion-col col-5 id="{{i*2+1}}" (click)=position(i*2)>\n                    {{move.black}}\n                </ion-col>\n\n            </ion-row>\n        </ion-col>\n\n    </ion-row>\n</ion-grid>\n<br>\n<ion-grid>\n    <ion-row>\n\n        <ion-col col-3>\n            <button ion-button id="backback">\n                <ion-icon name="rewind"></ion-icon>\n            </button>\n        </ion-col>\n        <ion-col col-3>\n            <button ion-button id="back">\n                <ion-icon name="arrow-back"></ion-icon>\n            </button>\n        </ion-col>\n        <ion-col col-3>\n            <button ion-button id="vor">\n                <ion-icon name="arrow-forward"></ion-icon>\n            </button>\n        </ion-col>\n        <ion-col col-3>\n            <button ion-button id="vorvor">\n                <ion-icon name="fastforward"></ion-icon>\n            </button>\n        </ion-col>\n\n\n    </ion-row>\n    <ion-row>\n        <ion-col col-4>\n            <button ion-button id="flip">\n                <ion-icon style="transform: rotate(90deg)" name="repeat"></ion-icon>\n            </button>\n        </ion-col>\n        <ion-col col-4>\n            <button ion-button id="play">\n                <ion-icon id="play_icon" name="play"></ion-icon>\n                <ion-icon id="stop_icon" name="pause"></ion-icon>\n            </button>\n        </ion-col>\n        <ion-col col-4>\n            <button ion-button id="save_database">\n                <ion-icon name="checkmark"></ion-icon>\n            </button>\n        </ion-col>\n    </ion-row>\n\n</ion-grid>\n<br>\n\n<ion-list id="games_played">\n    <div>\n        <button ion-item item-left *ngFor="let key of games_played" (click)=\'presentAlert(key)\'>\n            <ion-label>\n                <ion-icon><img src="imgs/chess-board.png" style="max-height: 30px"></ion-icon>\n            </ion-label>\n            <div id="white_name" item-content>{{games[key].white}} vs {{games[key].black}}</div>\n        </button>\n    </div>\n</ion-list>'/*ion-inline-end:"/home/albert/Chess/src/components/chess-database-game/chess-database-game.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["AngularFirestore"], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */]])
    ], ChessDatabaseGameComponent);
    return ChessDatabaseGameComponent;
}());

//# sourceMappingURL=chess-database-game.js.map

/***/ })

},[291]);
//# sourceMappingURL=main.js.map