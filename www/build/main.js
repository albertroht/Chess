webpackJsonp([0],{

/***/ 194:
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
webpackEmptyAsyncContext.id = 194;

/***/ }),

/***/ 235:
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
webpackEmptyAsyncContext.id = 235;

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(282);
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

/***/ 280:
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
            selector: 'page-about',template:/*ion-inline-start:"/home/albert/Chess/src/pages/about/about.html"*/'<ion-content padding>\n    <chess-database-new></chess-database-new>\n</ion-content>'/*ion-inline-end:"/home/albert/Chess/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 281:
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

/***/ 282:
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

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(426);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_chess_database_game_chess_database_game__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_chess_database_new_chess_database_new__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_firestore__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_storage__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angularfire2_storage__);
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
                __WEBPACK_IMPORTED_MODULE_11__components_chess_database_new_chess_database_new__["a" /* ChessDatabaseNewComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["AngularFireModule"].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_firestore__["AngularFirestoreModule"],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_storage__["AngularFireStorageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
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
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(279);
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

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChessDatabaseGameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chess_js__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chess_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chess_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chessboardjs__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chessboardjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chessboardjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chess_fu_pgn_parser__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chess_fu_pgn_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__chess_fu_pgn_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(152);
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
        this.white = "Albert Roht";
        this.black = "Magnus Carlsen";
        console.log('Hello ChessDatabaseGameComponent Component');
        db.collection('chess').doc('gameCollection1').valueChanges().subscribe(function (data) {
            _this.games = data;
        });
    }
    ChessDatabaseGameComponent.prototype.presentAlert = function (key) {
        var alert = this.alertCtrl.create({
            title: 'Spielinformationen',
            message: this.games[key].pgn,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    ChessDatabaseGameComponent.prototype.ngAfterViewInit = function () {
        var board, game = __WEBPACK_IMPORTED_MODULE_1_chess_js___default()(), fenEl = $('#fen_game'), notation = $('#notation');
        var zug = 0;
        var history = [];
        var repeat = false;
        var create = 0;
        //jquery has it's own this context, so self is used to call ionic context in jquery functions
        var self = this;
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
            highlight(zug, history.length - 1);
            zug = history.length - 1;
            check_database();
        };
        // update the board position after the piece snap 
        // for castling, en passant, pawn promotion
        var onSnapEnd = function () {
            board.position(game.fen());
        };
        var parser = new __WEBPACK_IMPORTED_MODULE_3__chess_fu_pgn_parser__["PgnParser"]();
        // do not pick up pieces if the game is over
        // only pick up pieces for the side to move
        var highlight = function (zug_alt, zug_neu) {
            $('#' + zug_alt).removeClass('highlight');
            $('#' + zug_neu).addClass("highlight");
        };
        var scrollIntoView = function (zug) {
            if (zug != -1) {
                document.getElementById(zug).scrollIntoView(true);
            }
            else {
                document.getElementById("0").scrollIntoView(true);
            }
        };
        var updateStatus = function () {
            notation.html("");
            fenEl.html("");
            var turn = 'white';
            history = game.history();
            var _loop_1 = function (i) {
                if (turn == 'white') {
                    turn = 'black';
                    notation.append("<ion-row class='row' id='row" + i.toString() + "'><ion-col class='col' col-2>" + (i / 2).toString() + "</ion-col> <ion-col class='col' col-5 id='" + i.toString() + "'> " + history[i] + "</ion-row>");
                }
                else {
                    turn = 'white';
                    $('#row' + (i - 1).toString()).append("<ion-col class='col' col-5 id='" + i.toString() + "'> " + history[i] + "</ion-col>");
                }
                $('#' + i.toString()).click(function () {
                    game.reset();
                    for (var j = 0; j <= i; j++) {
                        game.move(history[j]);
                    }
                    board.position(game.fen());
                    highlight(zug, i);
                    //scrollIntoView(i)
                    zug = i;
                });
            };
            for (var i = 0; i < history.length; i++) {
                _loop_1(i);
            }
            //highlight(zug, -1);
            zug = -1;
        };
        var check_database = function () {
            console.time("iteration_speed:");
            if (zug >= 0) {
                var iterations = 0;
                var games_played = [];
                for (var key in self.games) {
                    var tmp = self.games[key]["positions"][zug];
                    if (tmp.toString() == game.fen()) {
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
            draggable: false,
            position: 'start',
        };
        board = __WEBPACK_IMPORTED_MODULE_2_chessboardjs___default()('chessDatabaseGame', cfg);
        //game.load_pgn(pgn2.join('\n'));
        //game.load_pgn(pgn.join('\n'));
        //const [test] = parser.parse(game.pgn());
        //console.log(JSON.stringify(test.moves()));
        updateStatus();
        game.reset();
        $("#back").click(function () {
            var zug_alt = zug;
            var zug_neu = zug - 1;
            if (zug >= 0) {
                zug = zug_neu;
                game.undo();
                board.position(game.fen());
                highlight(zug_alt, zug_neu);
            }
            repeat = false;
            check_database();
        });
        $("#backback").click(function () {
            var zug_alt = zug;
            zug = -1;
            game.reset();
            board.position(game.fen());
            highlight(zug_alt, -1);
            repeat = false;
        });
        $("#vor").click(function () {
            var zug_alt = zug;
            var zug_neu = zug + 1;
            if (zug_neu < history.length) {
                zug = zug_neu;
                game.move(history[zug_neu]);
                board.position(game.fen());
                highlight(zug_alt, zug_neu);
            }
            repeat = false;
            check_database();
        });
        $("#vorvor").click(function () {
            var zug_alt = zug;
            for (var i = zug; i < history.length - 1; i++) {
                game.move(history[i + 1]);
            }
            zug = history.length - 1;
            //game.load_pgn(pgn.join('\n'));
            board.position(game.fen());
            highlight(zug_alt, zug);
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
            board.flip();
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
        $("#black_input").hide();
        $("#white_input").hide();
        var uniqueId = function () {
            return 'id-' + Math.random().toString(36).substr(2, 16);
        };
        $("#edit").click(function () {
            if (create == 0) {
                var cfg_edit = {
                    draggable: true,
                    position: board.fen(),
                    onDragStart: onDragStart,
                    onDrop: onDrop,
                    onSnapEnd: onSnapEnd
                };
                board = __WEBPACK_IMPORTED_MODULE_2_chessboardjs___default()('chessDatabaseGame', cfg_edit);
                $("#checkmark_icon").toggle();
                $("#create_icon").toggle();
                $("#black_input").toggle();
                $("#white_input").toggle();
                $("#black_name").toggle();
                $("#white_name").toggle();
                create = 1;
            }
            else {
                $("#checkmark_icon").toggle();
                $("#create_icon").toggle();
                $("#black_input").toggle();
                $("#white_input").toggle();
                $("#black_name").toggle();
                $("#white_name").toggle();
                create = 0;
            }
        });
        $("#save_database").click(function () {
            var data = {};
            var positions = [];
            game.header("white", self.white, "black", self.black);
            game.reset();
            for (var i = 0; i < 10; i++) {
                game.move(history[i]);
                positions[i] = game.fen();
            }
            if (history.length > 9) {
                for (var i = 10; i < history.length; i++) {
                    game.move(history[i]);
                }
            }
            self.key = uniqueId();
            data[self.key] = {
                white: self.white,
                black: self.black,
                pgn: game.pgn(),
                positions: positions
            };
            self.db.collection('chess').doc('gameCollection1').update(data).then(function () {
                console.log("document updated");
            });
        });
    };
    var _a, _b;
    ChessDatabaseGameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'chess-database-game',template:/*ion-inline-start:"/home/albert/Chess/src/components/chess-database-game/chess-database-game.html"*/'<div id=\'chessDatabaseGame\' style="width: 100%"></div>\n<p><span id="fen_game"></span></p>\n<br>\n<ion-grid>\n    <ion-row>\n        <ion-col class="notation" id="information" col-7 style="height:75px;">\n            <ion-list>\n                <ion-item item-left>\n                    <ion-label>\n                        <ion-icon><img src="imgs/white_knight.svg" style="max-height: 30px"></ion-icon>\n                    </ion-label>\n                    <div id="white_name" item-content>{{white}}</div>\n                    <ion-input id="white_input" placeholder="{{white}}" [(ngModel)]="white"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>\n                        <ion-icon><img src="imgs/black_knight.svg" style="max-height: 30px"></ion-icon>\n                    </ion-label>\n                    <div id="black_name" item-content>{{black}}</div>\n                    <ion-input id="black_input" placeholder="{{black}}" [(ngModel)]="black"></ion-input>\n                </ion-item>\n            </ion-list>\n        </ion-col>\n        <ion-col id="notation" class="notation" col-5 style="height:75px;overflow:auto;display:block">\n        </ion-col>\n    </ion-row>\n</ion-grid>\n<br>\n<ion-grid>\n    <ion-row>\n\n        <ion-col col-3>\n            <button ion-button id="backback">\n                <ion-icon name="rewind"></ion-icon>\n            </button>\n        </ion-col>\n        <ion-col col-3>\n            <button ion-button id="back">\n                <ion-icon name="arrow-back"></ion-icon>\n            </button>\n        </ion-col>\n        <ion-col col-3>\n            <button ion-button id="vor">\n                <ion-icon name="arrow-forward"></ion-icon>\n            </button>\n        </ion-col>\n        <ion-col col-3>\n            <button ion-button id="vorvor">\n                <ion-icon name="fastforward"></ion-icon>\n            </button>\n        </ion-col>\n\n\n    </ion-row>\n    <ion-row>\n        <ion-col col-2>\n            <button ion-button id="flip">\n                <ion-icon style="transform: rotate(90deg)" name="repeat"></ion-icon>\n            </button>\n        </ion-col>\n        <ion-col col-2>\n            <button ion-button id="play">\n                <ion-icon id="play_icon" name="play"></ion-icon>\n                <ion-icon id="stop_icon" name="pause"></ion-icon>\n            </button>\n        </ion-col>\n        <ion-col col-2>\n            <button ion-button id="edit">\n                <ion-icon name="create" id="create_icon"></ion-icon>\n                <ion-icon name="checkmark" id="checkmark_icon"></ion-icon>\n            </button>\n        </ion-col>\n        <ion-col col-3>\n            <button ion-button id="save_database">\n                <ion-icon name="checkmark"></ion-icon>\n            </button>\n        </ion-col>\n        <ion-col col-3>\n            <button ion-button id="check_database">\n                <ion-icon name="search"></ion-icon>\n            </button>\n        </ion-col>\n    </ion-row>\n\n</ion-grid>\n<br>\n\n<ion-list id="games_played">\n    <div>\n        <button ion-item item-left *ngFor="let key of games_played" (click)=\'presentAlert(key)\'>\n            <ion-label>\n                <ion-icon><img src="imgs/white_knight.svg" style="max-height: 30px"></ion-icon>\n            </ion-label>\n            <div id="white_name" item-content>{{games[key].white}} vs {{games[key].black}}</div>\n\n        </button>\n    </div>\n</ion-list>'/*ion-inline-end:"/home/albert/Chess/src/components/chess-database-game/chess-database-game.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["AngularFirestore"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["AngularFirestore"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object])
    ], ChessDatabaseGameComponent);
    return ChessDatabaseGameComponent;
}());

//# sourceMappingURL=chess-database-game.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChessDatabaseNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chess_js__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chess_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chess_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chessboardjs__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chessboardjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chessboardjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
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
    function ChessDatabaseNewComponent(db) {
        this.db = db;
        console.log('Hello ChessDatabaseNewComponent Component');
        this.games = db.collection('chess').doc('gameCollection1');
    }
    ChessDatabaseNewComponent.prototype.ngAfterViewInit = function () {
        var board, game = __WEBPACK_IMPORTED_MODULE_1_chess_js___default()();
        var zug = 0;
        var history;
        var cfg = {
            draggable: true,
            position: 'start',
        };
        board = __WEBPACK_IMPORTED_MODULE_2_chessboardjs___default()('board', cfg);
    };
    ChessDatabaseNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'chess-database-new',template:/*ion-inline-start:"/home/albert/Chess/src/components/chess-database-new/chess-database-new.html"*/'<div id=\'board\' style="width: 400px"></div>\n'/*ion-inline-end:"/home/albert/Chess/src/components/chess-database-new/chess-database-new.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"]])
    ], ChessDatabaseNewComponent);
    return ChessDatabaseNewComponent;
}());

//# sourceMappingURL=chess-database-new.js.map

/***/ })

},[293]);
//# sourceMappingURL=main.js.map