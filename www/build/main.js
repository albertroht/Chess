webpackJsonp([0],{

/***/ 186:
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
webpackEmptyAsyncContext.id = 186;

/***/ }),

/***/ 227:
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
webpackEmptyAsyncContext.id = 227;

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(274);
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

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
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
            selector: 'page-about',template:/*ion-inline-start:"/home/albert/Chess/src/pages/about/about.html"*/'<ion-content padding>\n  <chess-database-game></chess-database-game>\n</ion-content>'/*ion-inline-end:"/home/albert/Chess/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
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
            selector: 'page-home',template:/*ion-inline-start:"/home/albert/Chess/src/pages/home/home.html"*/'<ion-content padding>\n  <chess-database-new></chess-database-new>\n</ion-content>'/*ion-inline-end:"/home/albert/Chess/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(411);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_chess_database_game_chess_database_game__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_chess_database_new_chess_database_new__ = __webpack_require__(463);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
                __WEBPACK_IMPORTED_MODULE_11__components_chess_database_new_chess_database_new__["a" /* ChessDatabaseNewComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__components_chess_database_new_chess_database_new__["a" /* ChessDatabaseNewComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_chess_database_game_chess_database_game__["a" /* ChessDatabaseGameComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(271);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChessDatabaseGameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chess_js__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chess_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chess_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chessboardjs__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chessboardjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chessboardjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ChessDatabaseGameComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ChessDatabaseGameComponent = /** @class */ (function () {
    function ChessDatabaseGameComponent() {
        console.log('Hello ChessDatabaseGameComponent Component');
    }
    ChessDatabaseGameComponent.prototype.ngAfterViewInit = function () {
        var board, game = __WEBPACK_IMPORTED_MODULE_1_chess_js___default()(), fenEl = $('#fen_game');
        var zug = 0;
        var history;
        var repeat;
        var pgn = ['[Event "Casual Game"]',
            '[Site "Berlin GER"]',
            '[Date "1852.??.??"]',
            '[EventDate "?"]',
            '[Round "?"]',
            '[Result "1-0"]',
            '[White "Adolf Anderssen"]',
            '[Black "Jean Dufresne"]',
            '[ECO "C52"]',
            '[WhiteElo "?"]',
            '[BlackElo "?"]',
            '[PlyCount "47"]',
            '',
            '1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.b4 Bxb4 5.c3 Ba5 6.d4 exd4 7.O-O',
            'd3 8.Qb3 Qf6 9.e5 Qg6 10.Re1 Nge7 11.Ba3 b5 12.Qxb5 Rb8 13.Qa4',
            'Bb6 14.Nbd2 Bb7 15.Ne4 Qf5 16.Bxd3 Qh5 17.Nf6+ gxf6 18.exf6',
            'Rg8 19.Rad1 Qxf3 20.Rxe7+ Nxe7 21.Qxd7+ Kxd7 22.Bf5+ Ke8',
            '23.Bd7+ Kf8 24.Bxe7# 1-0'];
        // do not pick up pieces if the game is over
        // only pick up pieces for the side to move
        var highlight = function (zug_alt, zug_neu) {
            $('#' + zug_alt).removeClass('highlight');
            $('#' + zug_neu).addClass("highlight");
        };
        var updateStatus = function () {
            fenEl.html("");
            var turn = 'white';
            history = game.history();
            var _loop_1 = function (i) {
                if (turn == 'white') {
                    turn = 'black';
                    fenEl.append("<span id='" + i.toString() + "'> " + (i + 1).toString() + ".)" + history[i] + "</span>");
                }
                else {
                    turn = 'white';
                    fenEl.append("<span id='" + i.toString() + "'> " + history[i] + "</span>");
                }
                $('#' + i.toString()).click(function () {
                    game.reset();
                    for (var j = 0; j <= i; j++) {
                        game.move(history[j]);
                    }
                    board.position(game.fen());
                    highlight(zug, i);
                    zug = i;
                });
            };
            for (var i = 0; i < history.length; i++) {
                _loop_1(i);
            }
            highlight(zug, history.length - 1);
            zug = history.length - 1;
        };
        var cfg = {
            draggable: false,
            position: 'start',
        };
        board = __WEBPACK_IMPORTED_MODULE_2_chessboardjs___default()('chessDatabaseGame', cfg);
        game.load_pgn(pgn.join('\n'));
        updateStatus();
        board.position(game.fen());
        $("#back_game").click(function () {
            var zug_alt = zug;
            var zug_neu = zug - 1;
            if (zug > 0) {
                zug = zug_neu;
                game.undo();
                board.position(game.fen());
                highlight(zug_alt, zug_neu);
            }
        });
        $("#backback_game").click(function () {
            var zug_alt = zug;
            zug = -1;
            game.reset();
            board.position(game.fen());
            highlight(zug_alt, -1);
        });
        $("#vor_game").click(function () {
            var zug_alt = zug;
            var zug_neu = zug + 1;
            if (zug_neu < history.length) {
                zug = zug_neu;
                game.move(history[zug_neu]);
                board.position(game.fen());
                highlight(zug_alt, zug_neu);
            }
        });
        $("#vorvor_game").click(function () {
            var zug_alt = zug;
            zug = history.length - 1;
            game.load_pgn(pgn.join('\n'));
            board.position(game.fen());
            highlight(zug_alt, zug);
        });
        $("#play_game").click(function () {
            $("#stop_game").toggle();
            $("#play_game").toggle();
            repeat = true;
            window.setTimeout(makeMove, 400);
        });
        var makeMove = function () {
            if (repeat === true) {
                var zug_alt = zug;
                var zug_neu = zug + 1;
                if (zug_neu < history.length) {
                    zug = zug_neu;
                    game.move(history[zug_neu]);
                    board.position(game.fen());
                    highlight(zug_alt, zug_neu);
                }
                else {
                    repeat = false;
                    $("#stop_game").toggle();
                    $("#play_game").toggle();
                }
                window.setTimeout(makeMove, 500);
            }
        };
        $("#stop_game").click(function () {
            $("#stop_game").toggle();
            $("#play_game").toggle();
            repeat = false;
        });
        $("#stop_game").hide();
    };
    ChessDatabaseGameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'chess-database-game',template:/*ion-inline-start:"/home/albert/Chess/src/components/chess-database-game/chess-database-game.html"*/'<div id=\'chessDatabaseGame\' style="width: 400px"></div>\n<p><span id="fen_game"></span></p>\n\n<button ion-button id="backback_game">ganz zurück</button>\n<button ion-button id="back_game">zurück</button>\n<button ion-button id="vor_game">vor</button>\n<button ion-button id="vorvor_game">ganz vor</button>\n<button ion-button id="play_game">play</button>\n<button ion-button id="stop_game">stop</button>'/*ion-inline-end:"/home/albert/Chess/src/components/chess-database-game/chess-database-game.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ChessDatabaseGameComponent);
    return ChessDatabaseGameComponent;
}());

//# sourceMappingURL=chess-database-game.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChessDatabaseNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chess_js__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chess_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chess_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chessboardjs__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chessboardjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chessboardjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ChessDatabaseNewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ChessDatabaseNewComponent = /** @class */ (function () {
    function ChessDatabaseNewComponent() {
        console.log('Hello ChessDatabaseNewComponent Component');
        this.text = 'Hello World';
    }
    ChessDatabaseNewComponent.prototype.ngAfterViewInit = function () {
        var board, game = __WEBPACK_IMPORTED_MODULE_1_chess_js___default()(), statusEl = $('#status'), fenEl = $('#fen');
        var zug = 0;
        var history;
        // do not pick up pieces if the game is over
        // only pick up pieces for the side to move
        var onDragStart = function (source, piece, position, orientation) {
            if (game.game_over() === true ||
                (game.turn() === 'w' && piece.search(/^b/) !== -1) ||
                (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
                return false;
            }
        };
        var onDrop = function (source, target) {
            // see if the move is legal
            var move = game.move({
                from: source,
                to: target,
                promotion: 'q' // NOTE: always promote to a queen for example simplicity
            });
            // illegal move
            if (move === null)
                return 'snapback';
            updateStatus();
        };
        // update the board position after the piece snap 
        // for castling, en passant, pawn promotion
        var onSnapEnd = function () {
            board.position(game.fen());
        };
        var highlight = function (zug_alt, zug_neu) {
            $('#' + zug_alt).removeClass('highlight');
            $('#' + zug_neu).addClass("highlight");
        };
        var updateStatus = function () {
            var status = '';
            var moveColor = 'White';
            if (game.turn() === 'b') {
                moveColor = 'Black';
            }
            // checkmate?
            if (game.in_checkmate() === true) {
                status = 'Game over, ' + moveColor + ' is in checkmate.';
            }
            // draw?
            else if (game.in_draw() === true) {
                status = 'Game over, drawn position';
            }
            // game still on
            else {
                status = moveColor + ' to move';
                // check?
                if (game.in_check() === true) {
                    status += ', ' + moveColor + ' is in check';
                }
            }
            statusEl.html(status);
            fenEl.html("");
            var turn = 'white';
            history = game.history();
            var _loop_1 = function (i) {
                if (turn == 'white') {
                    turn = 'black';
                    fenEl.append("<span id='" + i.toString() + "'> " + (i + 1).toString() + ".)" + history[i] + "</span>");
                }
                else {
                    turn = 'white';
                    fenEl.append("<span id='" + i.toString() + "'> " + history[i] + "</span>");
                }
                $('#' + i.toString()).click(function () {
                    game.reset();
                    for (var j = 0; j <= i; j++) {
                        game.move(history[j]);
                    }
                    board.position(game.fen());
                    var zug_alt = zug;
                    highlight(zug_alt, i);
                    zug = i;
                });
            };
            for (var i = 0; i < history.length; i++) {
                _loop_1(i);
            }
            highlight(zug, history.length - 1);
            zug = history.length - 1;
        };
        var cfg = {
            draggable: true,
            position: 'start',
            onDragStart: onDragStart,
            onDrop: onDrop,
            onSnapEnd: onSnapEnd
        };
        board = __WEBPACK_IMPORTED_MODULE_2_chessboardjs___default()('board', cfg);
        updateStatus();
        board.position(game.fen());
        $("#back").click(function () {
            if (zug >= 0) {
                zug--;
                var zug_alt = zug + 1;
                var zug_neu = zug;
                game.undo();
                board.position(game.fen());
                highlight(zug_alt, zug_neu);
            }
        });
        $("#backback").click(function () {
            game.reset();
            board.position(game.fen());
            highlight(zug, -1);
            zug = -1;
        });
        $("#vor").click(function () {
            if (zug < history.length - 1) {
                zug++;
                var zug_alt = zug - 1;
                var zug_neu = zug;
                game.move(history[zug_neu]);
                board.position(game.fen());
                highlight(zug_alt, zug_neu);
            }
        });
        $("#vorvor").click(function () {
            var zug_alt = zug;
            var zug_neu = history.length - 1;
            while (zug < history.length - 1) {
                game.move(history[zug + 1]);
                zug++;
            }
            board.position(game.fen());
            highlight(zug_alt, zug_neu);
        });
    };
    ChessDatabaseNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'chess-database-new',template:/*ion-inline-start:"/home/albert/Chess/src/components/chess-database-new/chess-database-new.html"*/'<div id=\'board\' style="width: 400px"></div>\n<p>Status: <span id="status"></span></p>\n<p><span id="fen"></span></p>\n\n<button ion-button id="backback">ganz zurück</button>\n<button ion-button id="back">zurück</button>\n<button ion-button id="vor">vor</button>\n<button ion-button id="vorvor">ganz vor</button>'/*ion-inline-end:"/home/albert/Chess/src/components/chess-database-new/chess-database-new.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ChessDatabaseNewComponent);
    return ChessDatabaseNewComponent;
}());

//# sourceMappingURL=chess-database-new.js.map

/***/ })

},[277]);
//# sourceMappingURL=main.js.map