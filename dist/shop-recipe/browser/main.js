"use strict";
(self["webpackChunkshop_recipe"] = self["webpackChunkshop_recipe"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const appRoutes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./recipe/recipe.module */ 1373)).then((m) => m.RecipeModule),
    },
    {
        path: 'shopping-list',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./shopping-list/shopping-list.module */ 6673)).then((m) => m.ShoppingListModule),
    },
    {
        path: 'auth',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./auth/auth.module */ 1674)).then((m) => m.AuthModule),
    },
    {
        path: '**',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./auth/auth.module */ 1674)).then((m) => m.AuthModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(appRoutes, {
            preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__.PreloadAllModules,
            initialNavigation: 'enabledBlocking',
        }), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/store/auth.actions */ 8379);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 3482);







class AppComponent {
    constructor(store, platformId) {
        this.store = store;
        this.platformId = platformId;
    }
    ngOnInit() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
            this.store.dispatch(_auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_0__.autoLogin());
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-md-12"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _recipe_store_recipe_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe/store/recipe.effects */ 3987);
/* harmony import */ var _store_root_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store-root/index */ 194);
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core.module */ 1538);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.module */ 1674);
/* harmony import */ var _shopping_list_shopping_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopping-list/shopping-list.module */ 6673);
/* harmony import */ var _recipe_recipe_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipe/recipe.module */ 1373);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _auth_store_auth_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/store/auth.effects */ 2416);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store-devtools */ 5242);
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/router-store */ 1611);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
        _recipe_recipe_module__WEBPACK_IMPORTED_MODULE_5__.RecipeModule,
        _shopping_list_shopping_list_module__WEBPACK_IMPORTED_MODULE_4__.ShoppingListModule,
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_3__.AuthModule,
        _core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModules,
        _ngrx_store__WEBPACK_IMPORTED_MODULE_14__.StoreModule.forRoot(_store_root_index__WEBPACK_IMPORTED_MODULE_1__.reducers),
        _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__.EffectsModule.forRoot([_auth_store_auth_effects__WEBPACK_IMPORTED_MODULE_9__.AuthEffects, _recipe_store_recipe_effects__WEBPACK_IMPORTED_MODULE_0__.RecipeEffects]),
        _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_16__.StoreDevtoolsModule.instrument({ logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_10__.environment.production }),
        _ngrx_router_store__WEBPACK_IMPORTED_MODULE_17__.StoreRouterConnectingModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__.AppComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_8__.HeaderComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_6__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
        _recipe_recipe_module__WEBPACK_IMPORTED_MODULE_5__.RecipeModule,
        _shopping_list_shopping_list_module__WEBPACK_IMPORTED_MODULE_4__.ShoppingListModule,
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_3__.AuthModule,
        _core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModules, _ngrx_store__WEBPACK_IMPORTED_MODULE_14__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__.EffectsRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_16__.StoreDevtoolsModule, _ngrx_router_store__WEBPACK_IMPORTED_MODULE_17__.StoreRouterConnectingModule] }); })();


/***/ }),

/***/ 2458:
/*!**************************************************!*\
  !*** ./src/app/auth/auth-interceptor.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptorService": () => (/* binding */ AuthInterceptorService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 7368);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 384);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 3488);





class AuthInterceptorService {
    constructor(authService, store) {
        this.authService = authService;
        this.store = store;
    }
    intercept(req, next) {
        return this.store.select('auth').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((authState) => authState.user), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.exhaustMap)((user) => {
            if (!user) {
                return next.handle(req);
            }
            if (user.token) {
                const modifiedReq = req.clone({
                    params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams().set('auth', user.token),
                });
                return next.handle(modifiedReq);
            }
            return next.handle(req);
        }));
    }
}
AuthInterceptorService.ɵfac = function AuthInterceptorService_Factory(t) { return new (t || AuthInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store)); };
AuthInterceptorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AuthInterceptorService, factory: AuthInterceptorService.ɵfac });


/***/ }),

/***/ 431:
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRouteModule": () => (/* binding */ AuthRouteModule)
/* harmony export */ });
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.component */ 980);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




class AuthRouteModule {
}
AuthRouteModule.ɵfac = function AuthRouteModule_Factory(t) { return new (t || AuthRouteModule)(); };
AuthRouteModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AuthRouteModule });
AuthRouteModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{ path: '', component: _auth_component__WEBPACK_IMPORTED_MODULE_0__.AuthComponent }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthRouteModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 980:
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthComponent": () => (/* binding */ AuthComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/auth.actions */ 8379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/loading-spinner/loading-spinner.component */ 2152);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/alert/alert.component */ 8549);








function AuthComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AuthComponent_app_alert_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-alert", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("close", function AuthComponent_app_alert_3_Template_app_alert_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.onHandleError()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("message", ctx_r1.error);
} }
function AuthComponent_form_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function AuthComponent_form_4_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.onSubmit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 8)(2, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " E-mail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 8)(6, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 13)(10, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AuthComponent_form_4_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.onSwitchMode()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r2.authForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r2.authForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.isLoginMode ? "Login" : "Sign Up", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Switch to ", ctx_r2.isLoginMode ? "Sign Up" : "Login", " ");
} }
class AuthComponent {
    constructor(store) {
        this.store = store;
        this.isLoginMode = true;
        this.isLoading = false;
        this.error = null;
    }
    ngOnInit() {
        this.initForm();
        this.storeSub = this.store.select('auth').subscribe((authState) => {
            (this.isLoading = authState.loading), (this.error = authState.authError);
        });
    }
    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }
    onSubmit() {
        if (!this.authForm.valid)
            return;
        const { email, password } = this.authForm.value;
        if (this.isLoginMode) {
            this.isLoading = true;
            //this.store.dispatch(new AuthActions.LoginStart({ email, password }));
            this.store.dispatch(_store_auth_actions__WEBPACK_IMPORTED_MODULE_0__.loginStart({ email, password }));
        }
        else {
            this.isLoading = true;
            //this.store.dispatch(new AuthActions.SignupStart({ email, password }));
            this.store.dispatch(_store_auth_actions__WEBPACK_IMPORTED_MODULE_0__.signupStart({ email, password }));
        }
        this.authForm.reset();
    }
    onHandleError() {
        //this.store.dispatch(new AuthActions.ClearError());
        this.store.dispatch(_store_auth_actions__WEBPACK_IMPORTED_MODULE_0__.clearError());
    }
    initForm() {
        this.authForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6),
            ]),
        });
    }
    ngOnDestroy() {
        this.storeSub?.unsubscribe();
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store)); };
AuthComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 5, vars: 3, consts: [[1, "row", "justify-content-md-center", "mt-3"], [1, "col-xs-12", "col-md-6"], ["class", "text-center", 4, "ngIf"], [3, "message", "close", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "text-center"], [3, "message", "close"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "email"], ["type", "email", "formControlName", "email", 1, "form-control"], ["for", "password"], ["type", "password", "formControlName", "password", 1, "form-control"], [1, "mt-2"], ["type", "submit", 1, "btn", "btn-primary", "me-2", 3, "disabled"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AuthComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AuthComponent_app_alert_3_Template, 1, 1, "app-alert", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AuthComponent_form_4_Template, 14, 4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_1__.LoadingSpinnerComponent, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__.AlertComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 3870:
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/auth.actions */ 8379);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 3488);








class AuthGuard {
    constructor(router, store, platformId) {
        this.router = router;
        this.store = store;
        this.platformId = platformId;
    }
    canActivate(route, state) {
        //return this.store.select(selectAuthUser).pipe(
        //  map((user) => {
        //    this.user = user;
        //    if (!this.user) {
        //      console.log('invalid');
        //      console.log(this.user);
        //      return this.router.createUrlTree(['/auth']);
        //    }
        //    console.log('valid');
        //    console.log(this.user);
        //    return true;
        //  })
        //);
        //if (!this.user) {
        //  console.log(this.user);
        //  console.log('invalid');
        //  return this.router.createUrlTree(['/auth']);
        //}
        //console.log('valid');
        //console.log(this.user);
        //console.log(selectAuthUser);
        //return true;
        //  return this.store.select('auth').pipe(
        //    take(1),
        //    map((authState) => authState.user),
        //    map((user) => {
        //      const isAuth = !!user;
        //      if (isAuth) {
        //        console.log('valid');
        //        console.log(user);
        //        return true;
        //      }
        //      console.log('invalid');
        //      console.log(user);
        //      return this.router.createUrlTree(['/auth']);
        //    })
        //  );
        return this.store.select('auth').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.tap)(() => {
            if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
                //this.store.dispatch(new AuthActions.AutoLogin());
                this.store.dispatch(_store_auth_actions__WEBPACK_IMPORTED_MODULE_0__.autoLogin());
            }
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((authState) => {
            return authState.user;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((user) => {
            const isAuth = !!user;
            if (isAuth) {
                return true;
            }
            return this.router.createUrlTree(['/auth']);
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/shared.module */ 4466);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-routing.module */ 431);
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.component */ 980);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__.AuthRouteModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_2__.AuthComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__.AuthRouteModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ }),

/***/ 384:
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/auth.actions */ 8379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 3488);



class AuthService {
    constructor(store) {
        this.store = store;
    }
    setLogoutTimer(expirationDuration) {
        this.timer = setTimeout(() => {
            //this.store.dispatch(new AuthActions.Logout());
            this.store.dispatch(_store_auth_actions__WEBPACK_IMPORTED_MODULE_0__.logout());
        }, expirationDuration);
    }
    clearLogoutTimer() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8379:
/*!********************************************!*\
  !*** ./src/app/auth/store/auth.actions.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authenticationFail": () => (/* binding */ authenticationFail),
/* harmony export */   "authenticationSuccess": () => (/* binding */ authenticationSuccess),
/* harmony export */   "autoLogin": () => (/* binding */ autoLogin),
/* harmony export */   "clearError": () => (/* binding */ clearError),
/* harmony export */   "loginStart": () => (/* binding */ loginStart),
/* harmony export */   "logout": () => (/* binding */ logout),
/* harmony export */   "signupStart": () => (/* binding */ signupStart)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

//export const LOGOUT = '[Auth] Logout';
//export const LOGIN_START = '[Auth] Login Start';
//export const AUTHENTICATION_FAIL = '[Auth] Login fail';
//export const SIGNUP_START = '[Auth] Signup Start';
//export const CLEAR_ERROR = '[Auth] Clear Error';
//export const AUTO_LOGIN = '[Auth] auto login';
//export class AuthenticationSuccess implements Action {
//  readonly type = AUTHENTICATION_SUCCESS;
//  constructor(
//    public payload: {
//email: string;
//token: string;
//userId: string;
//expirationDate: Date;
//redirect: boolean;
//    }
//  ) {}
//}
//export class Logout implements Action {
//  readonly type = LOGOUT;
//}
//export class LoginStart implements Action {
//  readonly type = LOGIN_START;
//  constructor(public payload: { email: string; password: string }) {}
//}
//export class AuthenticationFail implements Action {
//  readonly type = AUTHENTICATION_FAIL;
//  constructor(public payload: string) {}
//}
//export class SignupStart implements Action {
//  readonly type = SIGNUP_START;
//  constructor(public payload: { email: string; password: string }) {}
//}
//export class ClearError implements Action {
//  readonly type = CLEAR_ERROR;
//}
//export class AutoLogin implements Action {
//  readonly type = AUTO_LOGIN;
//}
//export type AuthActions =
//  | AuthenticationSuccess
//  | Logout
//  | LoginStart
//  | AuthenticationFail
//  | SignupStart
//  | ClearError
//  | AutoLogin;
const authenticationSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Login', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const authenticationFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Login fail', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const logout = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Logout');
const loginStart = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Login start', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const signupStart = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Signup start', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const clearError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Clear Error');
const autoLogin = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Auto Login');
//export const AUTHENTICATION_SUCCESS = '[Auth] Login';
//export const LOGOUT = '[Auth] Logout';
//export const LOGIN_START = '[Auth] Login Start';
//export const AUTHENTICATION_FAIL = '[Auth] Login fail';
//export const SIGNUP_START = '[Auth] Signup Start';
//export const CLEAR_ERROR = '[Auth] Clear Error';
//export const AUTO_LOGIN = '[Auth] Auto login';
//export class AuthenticationSuccess implements Action {
//  readonly type = AUTHENTICATION_SUCCESS;
//  constructor(
//    public payload: {
//      email: string;
//      token: string;
//      userId: string;
//      expirationDate: Date;
//      redirect: boolean;
//    }
//  ) {}
//}
//export class Logout implements Action {
//  readonly type = LOGOUT;
//}
//export class LoginStart implements Action {
//  readonly type = LOGIN_START;
//  constructor(public payload: { email: string; password: string }) {}
//}
//export class AuthenticationFail implements Action {
//  readonly type = AUTHENTICATION_FAIL;
//  constructor(public payload: string) {}
//}
//export class SignupStart implements Action {
//  readonly type = SIGNUP_START;
//  constructor(public payload: { email: string; password: string }) {}
//}
//export class ClearError implements Action {
//  readonly type = CLEAR_ERROR;
//}
//export class AutoLogin implements Action {
//  readonly type = AUTO_LOGIN;
//}
//export type AuthActions =
//  | AuthenticationSuccess
//  | Logout
//  | LoginStart
//  | SignupStart
//  | AuthenticationFail
//  | ClearError
//  | AutoLogin;


/***/ }),

/***/ 2416:
/*!********************************************!*\
  !*** ./src/app/auth/store/auth.effects.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthEffects": () => (/* binding */ AuthEffects)
/* harmony export */ });
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../user.model */ 3935);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.actions */ 8379);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../auth.service */ 384);










const handleAuthentication = (resData) => {
    const expirationDate = new Date(new Date().getTime() + +resData.expiresIn * 1000);
    const user = new _user_model__WEBPACK_IMPORTED_MODULE_0__.User(resData.email, resData.localId, resData.idToken, expirationDate);
    localStorage.setItem('userData', JSON.stringify(user));
    return _auth_actions__WEBPACK_IMPORTED_MODULE_1__.authenticationSuccess({
        email: resData.email,
        userId: resData.localId,
        token: resData.idToken,
        expirationDate: expirationDate,
        redirect: true,
    });
};
const handleError = (errorRes) => {
    let errorMsg = 'An Unknown Error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
        //return of(new AuthActions.AuthenticationFail(errorMsg));
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.authenticationFail({ error: errorMsg }));
    }
    switch (errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
            errorMsg = 'This email exists already!';
            break;
        case 'INVALID_PASSWORD':
            errorMsg = 'Credentials are incorrect!';
            break;
        case 'USER_DISABLED':
            errorMsg = 'Invalid account: account has been deleted!';
            break;
    }
    //return of(new AuthActions.AuthenticationFail(errorMsg));
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.authenticationFail({ error: errorMsg }));
};
class AuthEffects {
    constructor(actions$, http, router, authService) {
        this.actions$ = actions$;
        this.http = http;
        this.router = router;
        this.authService = authService;
        this.authSignUp$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => {
            return this.actions$.pipe(
            //ofType(AuthActions.SIGNUP_START),
            (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.signupStart), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)((signupAction) => {
                return this.http
                    .post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.api}`, {
                    email: signupAction.email,
                    password: signupAction.password,
                    returnSecureToken: true,
                })
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)((resData) => {
                    this.authService.setLogoutTimer(+resData.expiresIn * 1000);
                }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)((resData) => {
                    return handleAuthentication(resData);
                }), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.catchError)((errorRes) => {
                    return handleError(errorRes);
                }));
            }));
        });
        this.authLogin$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => {
            return this.actions$.pipe(
            //ofType(AuthActions.LOGIN_START),
            (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.loginStart), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)((authData) => {
                return this.http
                    .post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.api}`, {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true,
                })
                    .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)((resData) => {
                    this.authService.setLogoutTimer(+resData.expiresIn * 1000);
                }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)((resData) => {
                    return handleAuthentication(resData);
                }), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.catchError)((errorRes) => {
                    return handleError(errorRes);
                }));
            }));
        });
        this.authRedirect$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => {
            return this.actions$.pipe(
            //ofType(AuthActions.AUTHENTICATION_SUCCESS),
            (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.authenticationSuccess), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)((authSuccessAction) => {
                if (authSuccessAction.redirect) {
                    this.router.navigate(['/']);
                }
            }));
        }, { dispatch: false });
        this.autoLogin$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => {
            return this.actions$.pipe(
            //ofType(AuthActions.AUTO_LOGIN),
            (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.autoLogin), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(() => {
                const userStringData = localStorage.getItem('userData');
                if (!userStringData) {
                    return { type: 'DUMMY' };
                }
                const userData = JSON.parse(userStringData);
                const loadedUser = new _user_model__WEBPACK_IMPORTED_MODULE_0__.User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
                if (loadedUser.token) {
                    const expirationDuration = new Date(userData._tokenExpirationDate).getTime() -
                        new Date().getTime();
                    this.authService.setLogoutTimer(expirationDuration);
                    return _auth_actions__WEBPACK_IMPORTED_MODULE_1__.authenticationSuccess({
                        email: loadedUser.email,
                        userId: loadedUser.id,
                        token: loadedUser.token,
                        expirationDate: new Date(userData._tokenExpirationDate),
                        redirect: false,
                    });
                }
                return { type: 'DUMMY' };
            }));
        });
        this.authLogout$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => {
            return this.actions$.pipe(
            //ofType(AuthActions.LOGOUT),
            (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.logout), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.tap)(() => {
                localStorage.removeItem('userData');
                this.authService.clearLogoutTimer();
                this.router.navigate(['/auth']);
            }));
        }, { dispatch: false });
    }
}
AuthEffects.ɵfac = function AuthEffects_Factory(t) { return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService)); };
AuthEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({ token: AuthEffects, factory: AuthEffects.ɵfac });


/***/ }),

/***/ 8030:
/*!********************************************!*\
  !*** ./src/app/auth/store/auth.reducer.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authReducer": () => (/* binding */ authReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user.model */ 3935);
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.actions */ 8379);



const initialState = {
    user: null,
    authError: null,
    loading: false,
};
const authReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.authenticationSuccess, (state, { email, userId, token, expirationDate }) => {
    const user = new _user_model__WEBPACK_IMPORTED_MODULE_0__.User(email, userId, token, expirationDate);
    return {
        ...state,
        authError: null,
        user,
        loading: false,
    };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.logout, (state) => ({ ...state, user: null })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.loginStart, (state) => ({
    ...state,
    authError: null,
    loading: true,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.signupStart, (state) => ({
    ...state,
    authError: null,
    loading: true,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.authenticationFail, (state, { error }) => ({
    ...state,
    user: null,
    authError: error,
    loading: false,
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.clearError, (state) => ({ ...state, authError: null })));
//export function authReducer(
//  state = initialState,
//  action: AuthActions.AuthActions
//) {
//  switch (action.type) {
//    case AuthActions.AUTHENTICATION_SUCCESS:
//      const user = new User(
//        action.payload.email,
//        action.payload.userId,
//        action.payload.token,
//        action.payload.expirationDate
//      );
//      return {
//        ...state,
//        authError: null,
//        user: user,
//        loading: false,
//      };
//    case AuthActions.LOGOUT:
//      return {
//        ...state,
//        user: null,
//      };
//    case AuthActions.LOGIN_START:
//    case AuthActions.SIGNUP_START:
//      return {
//        ...state,
//        authError: null,
//        loading: true,
//      };
//    case AuthActions.AUTHENTICATION_FAIL:
//      return {
//        ...state,
//        user: null,
//        authError: action.payload,
//        loading: false,
//      };
//    case AuthActions.CLEAR_ERROR:
//      return {
//        ...state,
//        authError: null,
//      };
//    default:
//      return state;
//  }
//}


/***/ }),

/***/ 3935:
/*!************************************!*\
  !*** ./src/app/auth/user.model.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
    constructor(email, id, _token, _tokenExpirationDate) {
        this.email = email;
        this.id = id;
        this._token = _token;
        this._tokenExpirationDate = _tokenExpirationDate;
    }
    get token() {
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
        }
        return this._token;
    }
}


/***/ }),

/***/ 1538:
/*!********************************!*\
  !*** ./src/app/core.module.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModules": () => (/* binding */ CoreModules)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth-interceptor.service */ 2458);
/* harmony import */ var _recipe_recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe/recipe.service */ 4668);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class CoreModules {
}
CoreModules.ɵfac = function CoreModules_Factory(t) { return new (t || CoreModules)(); };
CoreModules.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CoreModules });
CoreModules.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [
        _recipe_recipe_service__WEBPACK_IMPORTED_MODULE_1__.RecipeService,
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HTTP_INTERCEPTORS,
            useClass: _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_0__.AuthInterceptorService,
            multi: true,
        },
    ] });


/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../auth/store/auth.actions */ 8379);
/* harmony import */ var _recipe_store_recipe_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../recipe/store/recipe.action */ 5260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);







const _c0 = function () { return ["recipes"]; };
function HeaderComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 8)(1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Recipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["auth"]; };
function HeaderComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 8)(1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Authentication");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c1));
} }
function HeaderComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_a_15_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.onLogout()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 16)(1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Manage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul", 18)(4, "li", 19)(5, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_li_16_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.onSaveData()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Save Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li")(8, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_li_16_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.onFetchData()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Fetch Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} }
class HeaderComponent {
    constructor(store) {
        this.store = store;
        this.isAuth = false;
    }
    ngOnInit() {
        this.userSub = this.store
            .select('auth')
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((authState) => authState.user))
            .subscribe((user) => {
            this.isAuth = !!user;
        });
    }
    onSaveData() {
        this.store.dispatch(_recipe_store_recipe_action__WEBPACK_IMPORTED_MODULE_1__.storeRecipes());
    }
    onFetchData() {
        this.store.dispatch(_recipe_store_recipe_action__WEBPACK_IMPORTED_MODULE_1__.fetchRecipes());
    }
    onLogout() {
        //this.store.dispatch(new AuthActions.Logout());
        this.store.dispatch(_auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_0__.logout());
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 17, vars: 4, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container-fluid"], [1, "navbar-brand", "mb-0", "h1", 2, "cursor", "pointer"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0", "me-auto", "mb-2", "mb-lg-0"], ["class", "nav-item", "routerLinkActive", "active", 4, "ngIf"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/shopping-list", 1, "nav-link"], [1, "nav", "navbar-nav", "navbar-right"], [1, "nav-item"], ["class", "nav-link", "style", "cursor: pointer", 3, "click", 4, "ngIf"], ["class", "dropdown", 4, "ngIf"], [1, "nav-link", 3, "routerLink"], [1, "nav-link", 2, "cursor", "pointer", 3, "click"], [1, "dropdown"], ["id", "navbarDropdown", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", 2, "cursor", "pointer"], ["aria-labelledby", "navbarDropdown ", 1, "dropdown-menu", "w-50", "p-2"], [1, "border-bottom"], [1, "dropdown-item", "nav-link", 2, "cursor", "pointer", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Recipe Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, HeaderComponent_li_8_Template, 3, 2, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, HeaderComponent_li_9_Template, 3, 2, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 8)(11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Shopping List");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ul", 10)(14, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, HeaderComponent_a_15_Template, 2, 0, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, HeaderComponent_li_16_Template, 10, 0, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isAuth);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isAuth);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isAuth);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isAuth);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 1259:
/*!*****************************************************************!*\
  !*** ./src/app/recipe/recipe-detail/recipe-detail.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeDetailComponent": () => (/* binding */ RecipeDetailComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _store_recipe_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../store/recipe.action */ 5260);
/* harmony import */ var _shopping_list_store_shopping_list_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shopping-list/store/shopping-list.action */ 4836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);







function RecipeDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", ctx_r0.recipe.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.recipe.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function RecipeDetailComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.recipe.name);
} }
function RecipeDetailComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.recipe.description);
} }
function RecipeDetailComponent_ul_21_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ingredient_r5.name, " - ", ingredient_r5.amount, " ");
} }
function RecipeDetailComponent_ul_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RecipeDetailComponent_ul_21_li_1_Template, 2, 2, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.recipe.ingredients);
} }
class RecipeDetailComponent {
    constructor(route, router, store) {
        this.route = route;
        this.router = router;
        this.store = store;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.id = +params['id'];
            this.store
                .select('recipes')
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((recipeState) => recipeState.recipes.find((recipe, index) => index === this.id)), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)((recipe) => {
                if (!recipe) {
                    this.router.navigate(['recipes']);
                }
            }))
                .subscribe((recipe) => {
                this.recipe = recipe;
            });
        });
    }
    onAddToShoppingList() {
        if (this.recipe) {
            this.store.dispatch(_shopping_list_store_shopping_list_action__WEBPACK_IMPORTED_MODULE_1__.addIngredients({
                ingredients: this.recipe.ingredients,
            }));
        }
    }
    onAddRecipe() {
        this.router.navigate(['edit'], { relativeTo: this.route });
        //if (this.recipe) {
        //  console.log('recipe added');
        //  this.store.dispatch(new RecipeActions.AddRecipe(this.recipe));
        //}
    }
    onDeleteRecipe() {
        this.store.dispatch(_store_recipe_action__WEBPACK_IMPORTED_MODULE_0__.deleteRecipe({ selectedIndex: this.id }));
        this.router.navigate(['/recipes']);
    }
}
RecipeDetailComponent.ɵfac = function RecipeDetailComponent_Factory(t) { return new (t || RecipeDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store)); };
RecipeDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RecipeDetailComponent, selectors: [["app-recipe-detail"]], decls: 22, vars: 4, consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "col-xs-12"], [1, "btn-group"], ["type", "button", "data-bs-toggle", "dropdown", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], ["aria-labelledby", "dropdownMenuButton1", 1, "dropdown-menu"], [1, "dropdown-item", 2, "cursor", "pointer", 3, "click"], ["class", "list-group", 4, "ngIf"], [1, "image-fluid", 2, "max-height", "300px", 3, "src", "alt"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"]], template: function RecipeDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, RecipeDetailComponent_div_0_Template, 3, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RecipeDetailComponent_div_1_Template, 4, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " > Manage Recipe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ul", 6)(9, "li")(10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecipeDetailComponent_Template_a_click_10_listener() { return ctx.onAddToShoppingList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "To Shopping list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li")(13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecipeDetailComponent_Template_a_click_13_listener() { return ctx.onAddRecipe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Edit Recipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "li")(16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecipeDetailComponent_Template_a_click_16_listener() { return ctx.onDeleteRecipe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Delete Recipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, RecipeDetailComponent_div_18_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 1)(20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, RecipeDetailComponent_ul_21_Template, 2, 1, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.recipe);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.recipe);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.recipe);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.recipe);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 6507:
/*!*************************************************************!*\
  !*** ./src/app/recipe/recipe-edit/recipe-edit.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeEditComponent": () => (/* binding */ RecipeEditComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _store_recipe_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../store/recipe.action */ 5260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../recipe.service */ 4668);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);









function RecipeEditComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18)(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 21)(6, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecipeEditComponent_div_33_Template_button_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const i_r3 = restoredCtx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.onDeleteIngredient(i_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " X ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r3);
} }
class RecipeEditComponent {
    constructor(route, recipeService, router, store) {
        this.route = route;
        this.recipeService = recipeService;
        this.router = router;
        this.store = store;
        this.editMode = false;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.id = +params['id'];
            this.editMode = params['id'] != null;
            this.initForm();
            this.store
                .select('recipes')
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)((recipeState) => {
                if (this.id >= recipeState.recipes.length) {
                    this.router.navigate(['recipes']);
                }
            }))
                .subscribe();
        });
    }
    get recipeFormGroup() {
        return this.recipeForm?.get('ingredients');
    }
    onSubmit() {
        if (this.editMode) {
            //this.recipeService.updateRecipe(this.id, this.recipeForm?.value);
            this.store.dispatch(_store_recipe_action__WEBPACK_IMPORTED_MODULE_0__.updateRecipe({
                index: this.id,
                newRecipe: this.recipeForm.value,
            }));
        }
        else {
            //this.recipeService.addRecipe(this.recipeForm?.value);
            this.store.dispatch(_store_recipe_action__WEBPACK_IMPORTED_MODULE_0__.addRecipe({ recipe: this.recipeForm.value }));
        }
        this.onCancel();
    }
    onAddIngredient() {
        this.recipeFormGroup.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^[1-9]+[0-9]*$/),
            ]),
        }));
    }
    initForm() {
        let recipeName = '';
        let recipeImagePath = '';
        let recipeDescription = '';
        let recipeIngredients = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArray([]);
        if (this.editMode) {
            //const recipe = this.recipeService.getRecipeById(this.id);
            this.storeSub = this.store
                .select('recipes')
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)((recipeState) => recipeState.recipes.find((recipe, index) => index === this.id)))
                .subscribe((recipe) => {
                if (recipe) {
                    recipeName = recipe.name;
                    recipeImagePath = recipe.imagePath;
                    recipeDescription = recipe.description;
                    if (recipe['ingredients']) {
                        for (let ingredient of recipe.ingredients) {
                            recipeIngredients.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
                                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(ingredient.name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
                                amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(ingredient.amount, [
                                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^[1-9]+[0-9]*$/),
                                ]),
                            }));
                        }
                    }
                }
            });
        }
        this.recipeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(recipeName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            imagePath: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(recipeImagePath, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(recipeDescription, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            ingredients: recipeIngredients,
        });
    }
    onCancel() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }
    onDeleteIngredient(index) {
        this.recipeFormGroup.removeAt(index);
    }
    ngOnDestroy() {
        if (this.storeSub)
            this.storeSub.unsubscribe();
    }
}
RecipeEditComponent.ɵfac = function RecipeEditComponent_Factory(t) { return new (t || RecipeEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_recipe_service__WEBPACK_IMPORTED_MODULE_1__.RecipeService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store)); };
RecipeEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RecipeEditComponent, selectors: [["app-recipe-edit"]], decls: 38, vars: 4, consts: [[1, "row"], [1, "col-xs-12"], [3, "formGroup", "ngSubmit"], ["type", "submit", 1, "btn", "btn-success", "m-1", 3, "disabled"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "form-group"], ["for", "name", 1, "form-label"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control"], ["for", "imagePath", 1, "form-label"], ["type", "text", "id", "imagePath", "formControlName", "imagePath", 1, "form-control"], ["imagePath", ""], ["alt", "", 1, "img-fluid", 3, "src"], ["for", "description", 1, "form-label"], ["type", "text", "id", "description", "rows", "6", "formControlName", "description", 1, "form-control"], [1, "row", "mt-3"], ["formArrayName", "ingredients", 1, "col-xs-12"], ["class", "row g-4 mb-2", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "row", "g-4", "mb-2", 3, "formGroupName"], [1, "col-md-8"], ["type", "text", "formControlName", "name", 1, "form-control"], [1, "col", "col-md-2"], ["type", "number", "formControlName", "amount", 1, "form-control"]], template: function RecipeEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RecipeEditComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecipeEditComponent_Template_button_click_7_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 0)(10, "div", 1)(11, "div", 5)(12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 0)(16, "div", 1)(17, "div", 5)(18, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Image URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 0)(23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 0)(26, "div", 1)(27, "div", 5)(28, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 14)(32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, RecipeEditComponent_div_33_Template, 8, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 0)(35, "div", 1)(36, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecipeEditComponent_Template_button_click_36_listener() { return ctx.onAddIngredient(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " Add Ingredient ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.recipeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.recipeForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _r0.value, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.recipeFormGroup.controls);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArrayName], styles: ["input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\r\n  border: 1px solid red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoicmVjaXBlLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 4754:
/*!*************************************************************************!*\
  !*** ./src/app/recipe/recipe-list/recipe-item/recipe-item.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeItemComponent": () => (/* binding */ RecipeItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


const _c0 = function (a0) { return [a0]; };
class RecipeItemComponent {
    ngOnInit() { }
}
RecipeItemComponent.ɵfac = function RecipeItemComponent_Factory(t) { return new (t || RecipeItemComponent)(); };
RecipeItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecipeItemComponent, selectors: [["app-recipe-item"]], inputs: { recipe: "recipe", index: "index" }, decls: 8, vars: 7, consts: [["routerLinkActive", "active", 1, "list-group-item", "list-group", "list-group-item-action", "clearfix", "p-2", "mt-1", "border", 2, "cursor", "pointer", 3, "routerLink"], [1, "float-start"], [1, "list-group-item-heading"], [1, "list-group-item-text"], [1, "float-end"], [1, "img-fluid", "rounded", "float-start", 2, "max-width", "70px", 3, "src", "alt"]], template: function RecipeItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0)(1, "div", 1)(2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.index));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recipe == null ? null : ctx.recipe.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recipe == null ? null : ctx.recipe.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.recipe == null ? null : ctx.recipe.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.recipe == null ? null : ctx.recipe.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGUtaXRlbS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 7879:
/*!*************************************************************!*\
  !*** ./src/app/recipe/recipe-list/recipe-list.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeListComponent": () => (/* binding */ RecipeListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../recipe.service */ 4668);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-item/recipe-item.component */ 4754);







function RecipeListComponent_app_recipe_item_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-recipe-item", 5);
} if (rf & 2) {
    const recipeItem_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("recipe", recipeItem_r1)("index", i_r2);
} }
class RecipeListComponent {
    constructor(recipeService, route, router, store) {
        this.recipeService = recipeService;
        this.route = route;
        this.router = router;
        this.store = store;
    }
    ngOnInit() {
        this.subscription = this.store
            .select('recipes')
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((recipeState) => recipeState.recipes))
            .subscribe((recipes) => {
            this.recipes = recipes;
        });
    }
    onNewRecipe() {
        this.router.navigate(['new'], { relativeTo: this.route });
    }
    ngOnDestroy() {
        this.subscription?.unsubscribe();
    }
}
RecipeListComponent.ɵfac = function RecipeListComponent_Factory(t) { return new (t || RecipeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_recipe_service__WEBPACK_IMPORTED_MODULE_0__.RecipeService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store)); };
RecipeListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RecipeListComponent, selectors: [["app-recipe-list"]], decls: 7, vars: 1, consts: [[1, "row", "mt-3"], [1, "col-xs-12"], [1, "btn", "btn-success", 3, "click"], [1, "row"], [3, "recipe", "index", 4, "ngFor", "ngForOf"], [3, "recipe", "index"]], template: function RecipeListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RecipeListComponent_Template_button_click_2_listener() { return ctx.onNewRecipe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "New Recipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, RecipeListComponent_app_recipe_item_6_Template, 1, 2, "app-recipe-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.recipes);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_1__.RecipeItemComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGUtbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 4359:
/*!***************************************************!*\
  !*** ./src/app/recipe/recipe-resolver.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeResolverService": () => (/* binding */ RecipeResolverService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _store_recipe_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/recipe.action */ 5260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8987);








class RecipeResolverService {
    constructor(store, action$, http) {
        this.store = store;
        this.action$ = action$;
        this.http = http;
    }
    resolve(route, state) {
        return this.store.select('recipes').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((recipeState) => {
            return recipeState.recipes;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)((recipes) => {
            if (recipes.length === 0) {
                this.store.dispatch(_store_recipe_action__WEBPACK_IMPORTED_MODULE_0__.fetchRecipes());
                return this.action$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_store_recipe_action__WEBPACK_IMPORTED_MODULE_0__.setRecipes), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((action) => {
                    return action.recipes;
                }));
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(recipes);
            }
        }));
        //  return this.store.select('recipes').pipe(
        //    take(1),
        //    map((recipeState) => recipeState.recipes),
        //    switchMap((recipes) => {
        //      if (recipes.length === 0) {
        //        this.store.dispatch(new RecipesActions.FetchRecipes());
        //        return this.action$.pipe(ofType(RecipesActions.SET_RECIPES), take(1));
        //      } else {
        //        return of(recipes);
        //      }
        //    })
        //  );
    }
}
RecipeResolverService.ɵfac = function RecipeResolverService_Factory(t) { return new (t || RecipeResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient)); };
RecipeResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: RecipeResolverService, factory: RecipeResolverService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2080:
/*!*************************************************!*\
  !*** ./src/app/recipe/recipe-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeRoutingModule": () => (/* binding */ RecipeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.guard */ 3870);
/* harmony import */ var _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-detail/recipe-detail.component */ 1259);
/* harmony import */ var _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipe-edit/recipe-edit.component */ 6507);
/* harmony import */ var _recipe_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe-resolver.service */ 4359);
/* harmony import */ var _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipe-start/recipe-start.component */ 1814);
/* harmony import */ var _recipe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipe.component */ 4174);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);









const recipeRoutes = [
    {
        path: '',
        component: _recipe_component__WEBPACK_IMPORTED_MODULE_5__.RecipeComponent,
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        children: [
            {
                path: '',
                component: _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_4__.RecipeStartComponent,
            },
            {
                path: 'new',
                component: _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_2__.RecipeEditComponent,
            },
            {
                path: ':id',
                component: _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_1__.RecipeDetailComponent,
                resolve: [_recipe_resolver_service__WEBPACK_IMPORTED_MODULE_3__.RecipeResolverService],
            },
            {
                path: ':id/edit',
                resolve: [_recipe_resolver_service__WEBPACK_IMPORTED_MODULE_3__.RecipeResolverService],
                component: _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_2__.RecipeEditComponent,
            },
        ],
    },
];
class RecipeRoutingModule {
}
RecipeRoutingModule.ɵfac = function RecipeRoutingModule_Factory(t) { return new (t || RecipeRoutingModule)(); };
RecipeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: RecipeRoutingModule });
RecipeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(recipeRoutes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](RecipeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 1814:
/*!***************************************************************!*\
  !*** ./src/app/recipe/recipe-start/recipe-start.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeStartComponent": () => (/* binding */ RecipeStartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class RecipeStartComponent {
    constructor() { }
    ngOnInit() {
    }
}
RecipeStartComponent.ɵfac = function RecipeStartComponent_Factory(t) { return new (t || RecipeStartComponent)(); };
RecipeStartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecipeStartComponent, selectors: [["app-recipe-start"]], decls: 2, vars: 0, template: function RecipeStartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please select a Recipe!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGUtc3RhcnQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 4174:
/*!********************************************!*\
  !*** ./src/app/recipe/recipe.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeComponent": () => (/* binding */ RecipeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe-list/recipe-list.component */ 7879);



class RecipeComponent {
    ngOnInit() { }
}
RecipeComponent.ɵfac = function RecipeComponent_Factory(t) { return new (t || RecipeComponent)(); };
RecipeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RecipeComponent, selectors: [["app-recipe"]], decls: 5, vars: 0, consts: [[1, "row"], [1, "col-md-12", "col-lg-6", "mb-md-2"], [1, "col-md-12", "col-lg-6", "mt-2"]], template: function RecipeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-recipe-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_0__.RecipeListComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 1373:
/*!*****************************************!*\
  !*** ./src/app/recipe/recipe.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeModule": () => (/* binding */ RecipeModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/shared.module */ 4466);
/* harmony import */ var _recipe_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-routing.module */ 2080);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipe-detail/recipe-detail.component */ 1259);
/* harmony import */ var _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe-edit/recipe-edit.component */ 6507);
/* harmony import */ var _recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipe-list/recipe-item/recipe-item.component */ 4754);
/* harmony import */ var _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipe-list/recipe-list.component */ 7879);
/* harmony import */ var _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipe-start/recipe-start.component */ 1814);
/* harmony import */ var _recipe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipe.component */ 4174);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);










class RecipeModule {
}
RecipeModule.ɵfac = function RecipeModule_Factory(t) { return new (t || RecipeModule)(); };
RecipeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: RecipeModule });
RecipeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _recipe_routing_module__WEBPACK_IMPORTED_MODULE_1__.RecipeRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](RecipeModule, { declarations: [_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_2__.RecipeDetailComponent,
        _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_6__.RecipeStartComponent,
        _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_3__.RecipeEditComponent,
        _recipe_component__WEBPACK_IMPORTED_MODULE_7__.RecipeComponent,
        _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_5__.RecipeListComponent,
        _recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_4__.RecipeItemComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _recipe_routing_module__WEBPACK_IMPORTED_MODULE_1__.RecipeRoutingModule] }); })();


/***/ }),

/***/ 4668:
/*!******************************************!*\
  !*** ./src/app/recipe/recipe.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeService": () => (/* binding */ RecipeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _shopping_list_store_shopping_list_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shopping-list/store/shopping-list.action */ 4836);
/* harmony import */ var _store_recipe_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/recipe.action */ 5260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 3488);





class RecipeService {
    constructor(store) {
        this.store = store;
        this.recipesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.recipes = [];
    }
    setRecipe(recipes) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
    getRecipe() {
        this.store.dispatch(_store_recipe_action__WEBPACK_IMPORTED_MODULE_1__.fetchRecipes());
    }
    addIngredientsToShoppingList(ingredients) {
        this.store.dispatch(_shopping_list_store_shopping_list_action__WEBPACK_IMPORTED_MODULE_0__.addIngredients({ ingredients }));
    }
    getRecipeById(index) {
        return this.recipes[index];
    }
}
RecipeService.ɵfac = function RecipeService_Factory(t) { return new (t || RecipeService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store)); };
RecipeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: RecipeService, factory: RecipeService.ɵfac });


/***/ }),

/***/ 5260:
/*!***********************************************!*\
  !*** ./src/app/recipe/store/recipe.action.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addRecipe": () => (/* binding */ addRecipe),
/* harmony export */   "deleteRecipe": () => (/* binding */ deleteRecipe),
/* harmony export */   "fetchRecipes": () => (/* binding */ fetchRecipes),
/* harmony export */   "setRecipes": () => (/* binding */ setRecipes),
/* harmony export */   "storeRecipes": () => (/* binding */ storeRecipes),
/* harmony export */   "updateRecipe": () => (/* binding */ updateRecipe)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const setRecipes = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Recipes] Set recipes', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const fetchRecipes = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Recipes] Fetch recipes');
const addRecipe = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Recipes] Add recipe', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateRecipe = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Recipes] Update recipes', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteRecipe = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Recipes] Delete Recipe', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const storeRecipes = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Recipes] Store Recipes');
//export const LOGIN = '[Auth] Login';
//export const AUTHENTICATE_SUCCESS = '[Auth] Login';
//export const LOGOUT = '[Auth] Logout';
//export const LOGIN_START = '[Auth] Login Start';
//export const LOGIN_FAIL = '[Auth] Login fail';
//export const AUTHENTICATE_FAIL = '[Auth] Login fail';
//export const SIGNUP_START = '[Auth] Signup Start';
//export const UPDATE_RECIPE = '[recipe] update recipe';
//export const ADD_RECIPE = '[recipe] add recipe';
//export const DELETE_RECIPE = '[recipe] delete recipe';
//export const STORE_RECIPES = '[recipe] store recipes';
//export const SET_RECIPES = '[recipe] set recipes';
//export const FETCH_RECIPES = '[recipe] fetch recipes';
//export class AddRecipe implements Action {
//  readonly type = ADD_RECIPE;
//  constructor(public payload: RecipeModel) {}
//}
//export class UpdateRecipe implements Action {
//  readonly type = UPDATE_RECIPE;
//  constructor(public payload: { index: number; newRecipe: RecipeModel }) {}
//}
//export class StoreRecipes implements Action {
//  readonly type = STORE_RECIPES;
//}
//export class DeleteRecipe implements Action {
//  readonly type = DELETE_RECIPE;
//  constructor(public payload: number) {}
//}
//export class SetRecipes implements Action {
//  readonly type = SET_RECIPES;
//  constructor(public payload: RecipeModel[]) {}
//}
//export class FetchRecipes implements Action {
//  readonly type = FETCH_RECIPES;
//}
//export type RecipeActions =
//  | SetRecipes
//  | FetchRecipes
//  | DeleteRecipe
//  | UpdateRecipe
//  | AddRecipe
//  | StoreRecipes;


/***/ }),

/***/ 3987:
/*!************************************************!*\
  !*** ./src/app/recipe/store/recipe.effects.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeEffects": () => (/* binding */ RecipeEffects)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 538);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _recipe_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe.action */ 5260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 3488);







class RecipeEffects {
    constructor(action$, http, store) {
        this.action$ = action$;
        this.http = http;
        this.store = store;
        this.storeRecipe$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => {
            return this.action$.pipe(
            //ofType(RecipesActions.STORE_RECIPES),
            (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_recipe_action__WEBPACK_IMPORTED_MODULE_0__.storeRecipes), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.withLatestFrom)(this.store.select('recipes')), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(([actionData, recipeState]) => {
                console.log(recipeState);
                return this.http.put('https://ng-shop-recipe-90217-default-rtdb.firebaseio.com/recipes.json', recipeState.recipes);
            }));
        }, { dispatch: false });
        this.fetchRecipes$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => {
            return this.action$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_recipe_action__WEBPACK_IMPORTED_MODULE_0__.fetchRecipes), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(() => {
                return this.http.get('https://ng-shop-recipe-90217-default-rtdb.firebaseio.com/recipes.json');
            }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)((recipes) => {
                return recipes.map((recipe) => {
                    return {
                        ...recipe,
                        ingredients: recipe.ingredients ? recipe.ingredients : [],
                    };
                });
            }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)((recipes) => {
                return _recipe_action__WEBPACK_IMPORTED_MODULE_0__.setRecipes({ recipes });
            }));
        });
    }
}
RecipeEffects.ɵfac = function RecipeEffects_Factory(t) { return new (t || RecipeEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store)); };
RecipeEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: RecipeEffects, factory: RecipeEffects.ɵfac });


/***/ }),

/***/ 6233:
/*!************************************************!*\
  !*** ./src/app/recipe/store/recipe.reducer.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "recipeReducer": () => (/* binding */ recipeReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _recipe_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe.action */ 5260);


const initialState = {
    recipes: [],
};
//export function recipeReducer(
//  state = initialState,
//  action: RecipeActions.RecipeActions
//) {
//  switch (action.type) {
//    case RecipeActions.SET_RECIPES:
//return {
//  ...state,
//  recipes: [...action.payload],
//};
//    case RecipeActions.ADD_RECIPE:
//return {
//  ...state,
//  recipes: [...state.recipes, action.payload],
//};
//    case RecipeActions.UPDATE_RECIPE:
//const updatedRecipe = {
//  ...state.recipes[action.payload.index],
//  ...action.payload.newRecipe,
//};
//const updatedRecipes = [...state.recipes];
//updatedRecipes[action.payload.index] = updatedRecipe;
//return {
//  ...state,
//  recipes: [...updatedRecipes],
//};
//    case RecipeActions.DELETE_RECIPE:
//return {
//  ...state,
//  recipes: state.recipes.filter((_, index) => {
//    return index !== action.payload;
//  }),
//};
//    default:
//      return state;
//  }
//}
//export function recipeReducer(
//  state = initialState,
//  action: RecipeActions.RecipeActions
//) {
//  switch (action.type) {
//    case RecipeActions.SET_RECIPES:
//      return {
//        ...state,
//        recipes: [...action.payload],
//      };
//    case RecipeActions.ADD_RECIPE:
//      return {
//        ...state,
//        recipes: [...state.recipes, action.payload],
//      };
//    case RecipeActions.UPDATE_RECIPE:
//      const updatedRecipe = {
//        ...state.recipes[action.payload.index],
//        ...action.payload.newRecipe,
//      };
//      const updatedRecipes = [...state.recipes];
//      updatedRecipes[action.payload.index] = updatedRecipe;
//      return {
//        ...state,
//        recipes: [...updatedRecipes],
//      };
//    case RecipeActions.DELETE_RECIPE:
//      return {
//        ...state,
//        recipes: state.recipes.filter((_, index) => {
//          return index !== action.payload;
//        }),
//      };
//    default:
//      return state;
//  }
//}
const recipeReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_recipe_action__WEBPACK_IMPORTED_MODULE_0__.setRecipes, (state, { recipes }) => {
    return {
        ...state,
        recipes: [...recipes],
    };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_recipe_action__WEBPACK_IMPORTED_MODULE_0__.addRecipe, (state, { recipe }) => {
    return {
        ...state,
        recipes: [...state.recipes, recipe],
    };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_recipe_action__WEBPACK_IMPORTED_MODULE_0__.updateRecipe, (state, { index, newRecipe }) => {
    const updatedRecipe = {
        ...state.recipes[index],
        ...newRecipe,
    };
    const updatedRecipes = [...state.recipes];
    updatedRecipes[index] = updatedRecipe;
    return {
        ...state,
        recipes: [...updatedRecipes],
    };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_recipe_action__WEBPACK_IMPORTED_MODULE_0__.deleteRecipe, (state, { selectedIndex }) => {
    return {
        ...state,
        recipes: state.recipes.filter((_, index) => {
            return index !== selectedIndex;
        }),
    };
}));


/***/ }),

/***/ 8549:
/*!*************************************************!*\
  !*** ./src/app/shared/alert/alert.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": () => (/* binding */ AlertComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class AlertComponent {
    constructor() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    onClose() {
        this.close.emit();
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(); };
AlertComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["app-alert"]], inputs: { message: "message" }, outputs: { close: "close" }, decls: 7, vars: 1, consts: [[1, "backdrop", 3, "click"], [1, "alert-box"], [1, "alert-box-actions"], [1, "btn", "btn-primary", 3, "click"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_Template_div_click_0_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_Template_button_click_5_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    } }, styles: [".backdrop[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.75);\r\n  z-index: 50;\r\n}\r\n\r\n.alert-box[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 30vh;\r\n  left: 20vw;\r\n  width: 60vw;\r\n  padding: 16px;\r\n  z-index: 100;\r\n  background-color: white;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);\r\n}\r\n\r\n.alert-box-actions[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtFQUNiLCtCQUErQjtFQUMvQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImFsZXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2Ryb3Age1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIHotaW5kZXg6IDUwO1xyXG59XHJcblxyXG4uYWxlcnQtYm94IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAzMHZoO1xyXG4gIGxlZnQ6IDIwdnc7XHJcbiAgd2lkdGg6IDYwdnc7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yNik7XHJcbn1cclxuXHJcbi5hbGVydC1ib3gtYWN0aW9ucyB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 6238:
/*!*********************************************!*\
  !*** ./src/app/shared/ingredients.model.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngredientsModel": () => (/* binding */ IngredientsModel)
/* harmony export */ });
class IngredientsModel {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
}


/***/ }),

/***/ 2152:
/*!*********************************************************************!*\
  !*** ./src/app/shared/loading-spinner/loading-spinner.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingSpinnerComponent": () => (/* binding */ LoadingSpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LoadingSpinnerComponent {
}
LoadingSpinnerComponent.ɵfac = function LoadingSpinnerComponent_Factory(t) { return new (t || LoadingSpinnerComponent)(); };
LoadingSpinnerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingSpinnerComponent, selectors: [["app-loading-spinner"]], decls: 13, vars: 0, consts: [[1, "lds-spinner"]], template: function LoadingSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div")(2, "div")(3, "div")(4, "div")(5, "div")(6, "div")(7, "div")(8, "div")(9, "div")(10, "div")(11, "div")(12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".lds-spinner[_ngcontent-%COMP%] {\r\n  color: official;\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 80px;\r\n  height: 80px;\r\n}\r\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  transform-origin: 40px 40px;\r\n  animation: lds-spinner 1.2s linear infinite;\r\n}\r\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\r\n  content: \" \";\r\n  display: block;\r\n  position: absolute;\r\n  top: 3px;\r\n  left: 37px;\r\n  width: 6px;\r\n  height: 18px;\r\n  border-radius: 20%;\r\n  background: rgb(20, 18, 18);\r\n}\r\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\r\n  transform: rotate(0deg);\r\n  animation-delay: -1.1s;\r\n}\r\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\r\n  transform: rotate(30deg);\r\n  animation-delay: -1s;\r\n}\r\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\r\n  transform: rotate(60deg);\r\n  animation-delay: -0.9s;\r\n}\r\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\r\n  transform: rotate(90deg);\r\n  animation-delay: -0.8s;\r\n}\r\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5) {\r\n  transform: rotate(120deg);\r\n  animation-delay: -0.7s;\r\n}\r\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6) {\r\n  transform: rotate(150deg);\r\n  animation-delay: -0.6s;\r\n}\r\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7) {\r\n  transform: rotate(180deg);\r\n  animation-delay: -0.5s;\r\n}\r\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8) {\r\n  transform: rotate(210deg);\r\n  animation-delay: -0.4s;\r\n}\r\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(9) {\r\n  transform: rotate(240deg);\r\n  animation-delay: -0.3s;\r\n}\r\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(10) {\r\n  transform: rotate(270deg);\r\n  animation-delay: -0.2s;\r\n}\r\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(11) {\r\n  transform: rotate(300deg);\r\n  animation-delay: -0.1s;\r\n}\r\n.lds-spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(12) {\r\n  transform: rotate(330deg);\r\n  animation-delay: 0s;\r\n}\r\n@keyframes lds-spinner {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmctc3Bpbm5lci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSwyQkFBMkI7RUFDM0IsMkNBQTJDO0FBQzdDO0FBQ0E7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6ImxvYWRpbmctc3Bpbm5lci5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGRzLXNwaW5uZXIge1xyXG4gIGNvbG9yOiBvZmZpY2lhbDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxufVxyXG4ubGRzLXNwaW5uZXIgZGl2IHtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiA0MHB4IDQwcHg7XHJcbiAgYW5pbWF0aW9uOiBsZHMtc3Bpbm5lciAxLjJzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG4ubGRzLXNwaW5uZXIgZGl2OmFmdGVyIHtcclxuICBjb250ZW50OiBcIiBcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzcHg7XHJcbiAgbGVmdDogMzdweDtcclxuICB3aWR0aDogNnB4O1xyXG4gIGhlaWdodDogMThweDtcclxuICBib3JkZXItcmFkaXVzOiAyMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiKDIwLCAxOCwgMTgpO1xyXG59XHJcbi5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICBhbmltYXRpb24tZGVsYXk6IC0xLjFzO1xyXG59XHJcbi5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7XHJcbn1cclxuLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoMykge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjlzO1xyXG59XHJcbi5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDQpIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC44cztcclxufVxyXG4ubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCg1KSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjdzO1xyXG59XHJcbi5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDYpIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNnM7XHJcbn1cclxuLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoNykge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcclxufVxyXG4ubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCg4KSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjRzO1xyXG59XHJcbi5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDkpIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XHJcbn1cclxuLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoMTApIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMnM7XHJcbn1cclxuLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoMTEpIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMXM7XHJcbn1cclxuLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoMTIpIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XHJcbn1cclxuQGtleWZyYW1lcyBsZHMtc3Bpbm5lciB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert/alert.component */ 8549);
/* harmony import */ var _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading-spinner/loading-spinner.component */ 2152);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_1__.LoadingSpinnerComponent, _alert_alert_component__WEBPACK_IMPORTED_MODULE_0__.AlertComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule], exports: [_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_1__.LoadingSpinnerComponent, _alert_alert_component__WEBPACK_IMPORTED_MODULE_0__.AlertComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule] }); })();


/***/ }),

/***/ 51:
/*!************************************************************************!*\
  !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShoppingEditComponent": () => (/* binding */ ShoppingEditComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_ingredients_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/ingredients.model */ 6238);
/* harmony import */ var _store_shopping_list_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/shopping-list.action */ 4836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);






const _c0 = ["f"];
function ShoppingEditComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShoppingEditComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.onDelete()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ShoppingEditComponent {
    constructor(store) {
        this.store = store;
        this.editMode = false;
        this.editedItem = null;
    }
    ngOnInit() {
        this.subscription = this.store
            .select('shoppingList')
            .subscribe((stateData) => {
            if (stateData.editedItemsIndex > -1) {
                this.editMode = true;
                this.editedItem = stateData.editedIngredient;
                this.slForm.setValue({
                    name: this.editedItem.name,
                    amount: this.editedItem.amount,
                });
            }
            else {
                this.editMode = false;
            }
        });
    }
    onSubmit(form) {
        const value = form.value;
        const newIngredient = new src_app_shared_ingredients_model__WEBPACK_IMPORTED_MODULE_0__.IngredientsModel(value.name, value.amount);
        if (this.editMode) {
            this.store.dispatch(_store_shopping_list_action__WEBPACK_IMPORTED_MODULE_1__.updateIngredient({ ingredient: newIngredient }));
        }
        else {
            this.store.dispatch(_store_shopping_list_action__WEBPACK_IMPORTED_MODULE_1__.addIngredient({ ingredient: newIngredient }));
        }
        form.reset();
        this.editMode = false;
    }
    onClear() {
        this.slForm.reset();
        this.editMode = false;
        this.store.dispatch(_store_shopping_list_action__WEBPACK_IMPORTED_MODULE_1__.stopEdit());
    }
    onDelete() {
        this.store.dispatch(_store_shopping_list_action__WEBPACK_IMPORTED_MODULE_1__.deleteIngredient());
        this.onClear();
    }
    ngOnDestroy() {
        this.subscription?.unsubscribe();
        this.store.dispatch(_store_shopping_list_action__WEBPACK_IMPORTED_MODULE_1__.stopEdit());
    }
}
ShoppingEditComponent.ɵfac = function ShoppingEditComponent_Factory(t) { return new (t || ShoppingEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store)); };
ShoppingEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ShoppingEditComponent, selectors: [["app-shopping-edit"]], viewQuery: function ShoppingEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.slForm = _t.first);
    } }, decls: 19, vars: 3, consts: [[1, "row"], [1, "col-xs-12"], [1, "row", "g-2", 3, "ngSubmit"], ["f", "ngForm"], [1, "col-sm-5", "form-group"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "ngModel", "", "required", "", 1, "form-control"], [1, "col-sm-2", "form-group"], ["for", "amount"], ["type", "number", "id", "amount", "name", "amount", "ngModel", "", "required", "", "pattern", "^[1-9]+[0-9]*$", 1, "form-control"], [1, "row", "g-2"], ["type", "submit", 1, "btn", "btn-success", "me-2", 3, "disabled"], ["class", "btn btn-danger me-2", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", "me-2", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "me-2", 3, "click"]], template: function ShoppingEditComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ShoppingEditComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onSubmit(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7)(9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10)(13, "div", 1)(14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ShoppingEditComponent_button_16_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShoppingEditComponent_Template_button_click_17_listener() { return ctx.onClear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Clear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.editMode ? "Update" : "Add", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.editMode);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wcGluZy1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 9053:
/*!***************************************************************!*\
  !*** ./src/app/shopping-list/shopping-list-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShoppingListRoutingModule": () => (/* binding */ ShoppingListRoutingModule)
/* harmony export */ });
/* harmony import */ var _shopping_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopping-list.component */ 2136);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const shoppingListRoutes = [
    { path: '', component: _shopping_list_component__WEBPACK_IMPORTED_MODULE_0__.ShoppingListComponent },
];
class ShoppingListRoutingModule {
}
ShoppingListRoutingModule.ɵfac = function ShoppingListRoutingModule_Factory(t) { return new (t || ShoppingListRoutingModule)(); };
ShoppingListRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ShoppingListRoutingModule });
ShoppingListRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(shoppingListRoutes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ShoppingListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 2136:
/*!**********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShoppingListComponent": () => (/* binding */ ShoppingListComponent)
/* harmony export */ });
/* harmony import */ var _store_shopping_list_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/shopping-list.action */ 4836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-edit/shopping-edit.component */ 51);






function ShoppingListComponent_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShoppingListComponent_a_4_Template_a_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const i_r2 = restoredCtx.index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onEditItem(i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ingredient_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ingredient_r1.name, " ", ingredient_r1.amount, "");
  }
}

class ShoppingListComponent {
  constructor(store) {
    this.store = store;
  }

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');
  }

  onEditItem(index) {
    this.store.dispatch(_store_shopping_list_action__WEBPACK_IMPORTED_MODULE_0__.startEdit({
      selectedIndex: index
    }));
  }

}

ShoppingListComponent.ɵfac = function ShoppingListComponent_Factory(t) {
  return new (t || ShoppingListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store));
};

ShoppingListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ShoppingListComponent,
  selectors: [["app-shopping-list"]],
  decls: 6,
  vars: 3,
  consts: [[1, "row", "g-3"], [1, "col-xs-10"], [1, "list-group"], ["class", "list-group-item list-group-item-action", "style", "cursor: pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", "list-group-item-action", 2, "cursor", "pointer", 3, "click"]],
  template: function ShoppingListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-shopping-edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ShoppingListComponent_a_4_Template, 2, 2, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      let tmp_0_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 1, ctx.ingredients)) == null ? null : tmp_0_0.ingredients);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_1__.ShoppingEditComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wcGluZy1saXN0LmNvbXBvbmVudC5jc3MifQ== */"]
});

/***/ }),

/***/ 6673:
/*!*******************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShoppingListModule": () => (/* binding */ ShoppingListModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/shared.module */ 4466);
/* harmony import */ var _shopping_list_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-list-routing.module */ 9053);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-edit/shopping-edit.component */ 51);
/* harmony import */ var _shopping_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shopping-list.component */ 2136);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);






class ShoppingListModule {
}
ShoppingListModule.ɵfac = function ShoppingListModule_Factory(t) { return new (t || ShoppingListModule)(); };
ShoppingListModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ShoppingListModule });
ShoppingListModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _shopping_list_routing_module__WEBPACK_IMPORTED_MODULE_1__.ShoppingListRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ShoppingListModule, { declarations: [_shopping_list_component__WEBPACK_IMPORTED_MODULE_3__.ShoppingListComponent, _shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_2__.ShoppingEditComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _shopping_list_routing_module__WEBPACK_IMPORTED_MODULE_1__.ShoppingListRoutingModule] }); })();


/***/ }),

/***/ 4836:
/*!*************************************************************!*\
  !*** ./src/app/shopping-list/store/shopping-list.action.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addIngredient": () => (/* binding */ addIngredient),
/* harmony export */   "addIngredients": () => (/* binding */ addIngredients),
/* harmony export */   "deleteIngredient": () => (/* binding */ deleteIngredient),
/* harmony export */   "startEdit": () => (/* binding */ startEdit),
/* harmony export */   "stopEdit": () => (/* binding */ stopEdit),
/* harmony export */   "updateIngredient": () => (/* binding */ updateIngredient)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

//export const ADD_INGREDIENT = '[Shopping List] Add Ingredient';
//export const ADD_INGREDIENTS = '[Shopping List] Add ingredients';
//export const DELETE_INGREDIENTS = '[Shopping List] Delete Ingredients';
//export const UPDATE_INGREDIENTS = '[Shopping List] Update Ingredients';
//export const START_EDIT = '[Shopping List] Start Edit';
//export const STOP_EDIT = '[Shopping List] Stop Edit';
//export class AddIngredient implements Action {
//  readonly type = ADD_INGREDIENT;
//  constructor(public payload: IngredientsModel) {}
//}
//export class AddIngredients implements Action {
//  readonly type = ADD_INGREDIENTS;
//  constructor(public payload: IngredientsModel[]) {}
//}
//export class UpdateIngredients implements Action {
//  readonly type = UPDATE_INGREDIENTS;
//  constructor(public payload: IngredientsModel) {}
//}
//export class DeleteIngredients implements Action {
//  readonly type = DELETE_INGREDIENTS;
//  //constructor(public payload: number) {}
//  constructor() {}
//}
//export class StartEdit implements Action {
//  readonly type = START_EDIT;
//  constructor(public payload: number) {}
//}
//export class StopEdit implements Action {
//  readonly type = STOP_EDIT;
//}
//export type ShoppingListActions =
//  | AddIngredient
//  | AddIngredients
//  | UpdateIngredients
//  | DeleteIngredients
//  | StartEdit
//  | StopEdit;
const addIngredient = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Shopping List] Add ingredient', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addIngredients = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Shopping List] Add ingredients', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateIngredient = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Shopping List] Update ingredient', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const deleteIngredient = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Shopping List] Delete ingredient');
const startEdit = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Shopping List] Start edit', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const stopEdit = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Shopping List] Stop edit');


/***/ }),

/***/ 5177:
/*!**************************************************************!*\
  !*** ./src/app/shopping-list/store/shopping-list.reducer.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shoppingListReducer": () => (/* binding */ shoppingListReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _shared_ingredients_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/ingredients.model */ 6238);
/* harmony import */ var _shopping_list_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-list.action */ 4836);



const initialState = {
    ingredients: [
        new _shared_ingredients_model__WEBPACK_IMPORTED_MODULE_0__.IngredientsModel('Apples', 5),
        new _shared_ingredients_model__WEBPACK_IMPORTED_MODULE_0__.IngredientsModel('Tomatoes', 10),
    ],
    editedIngredient: null,
    editedItemsIndex: -1,
};
//export function shoppingListReducer(
//  state: ShoppingListState = initialState,
//  action: ShoppingListActions.ShoppingListActions
//): ShoppingListState {
//  switch (action.type) {
//    case ShoppingListActions.ADD_INGREDIENT:
//      return {
//        ...state,
//        ingredients: [...state.ingredients, action.payload],
//      };
//    case ShoppingListActions.ADD_INGREDIENTS:
//      return {
//        ...state,
//        ingredients: [...state.ingredients, ...action.payload],
//      };
//    case ShoppingListActions.DELETE_INGREDIENTS:
//      return {
//        ...state,
//        ingredients: state.ingredients.filter((_, igIndex) => {
//          return igIndex !== state.editedItemsIndex;
//        }),
//      };
//    case ShoppingListActions.UPDATE_INGREDIENTS:
//      const ingredient = state.ingredients[state.editedItemsIndex];
//      const updatedIngredient = {
//        ...ingredient,
//        ...action.payload,
//      };
//      const updatedIngredients = [...state.ingredients];
//      updatedIngredients[state.editedItemsIndex] = updatedIngredient;
//      return {
//        ...state,
//        ingredients: updatedIngredients,
//        editedIngredient: null,
//        editedItemsIndex: -1,
//      };
//    case ShoppingListActions.START_EDIT:
//      return {
//        ...state,
//        editedItemsIndex: action.payload,
//        editedIngredient: { ...state.ingredients[action.payload] },
//      };
//    case ShoppingListActions.STOP_EDIT:
//      return {
//        ...state,
//        editedIngredient: null,
//        editedItemsIndex: -1,
//      };
//    default:
//      return state;
//  }
//}
const shoppingListReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_shopping_list_action__WEBPACK_IMPORTED_MODULE_1__.addIngredient, (state, { ingredient }) => ({
    ...state,
    ingredients: [...state.ingredients, ingredient],
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_shopping_list_action__WEBPACK_IMPORTED_MODULE_1__.addIngredients, (state, { ingredients }) => ({
    ...state,
    ingredients: [...state.ingredients, ...ingredients],
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_shopping_list_action__WEBPACK_IMPORTED_MODULE_1__.updateIngredient, (state, { ingredient }) => {
    const existingIngredient = state.ingredients[state.editedItemsIndex];
    const updatedIngredient = {
        ...existingIngredient,
        ...ingredient,
    };
    const updatedIngredients = [...state.ingredients];
    updatedIngredients[state.editedItemsIndex] = updatedIngredient;
    return {
        ...state,
        ingredients: updatedIngredients,
        editedIngredient: null,
        editedItemsIndex: -1,
    };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_shopping_list_action__WEBPACK_IMPORTED_MODULE_1__.deleteIngredient, (state) => ({
    ...state,
    ingredients: state.ingredients.filter((_, igIndex) => {
        return igIndex !== state.editedItemsIndex;
    }),
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_shopping_list_action__WEBPACK_IMPORTED_MODULE_1__.startEdit, (state, { selectedIndex }) => ({
    ...state,
    editedItemsIndex: selectedIndex,
    editedIngredient: { ...state.ingredients[selectedIndex] },
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_shopping_list_action__WEBPACK_IMPORTED_MODULE_1__.stopEdit, (state) => ({
    ...state,
    editedIngredient: null,
    editedItemsIndex: -1,
})));


/***/ }),

/***/ 194:
/*!*************************************!*\
  !*** ./src/app/store-root/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducers": () => (/* binding */ reducers),
/* harmony export */   "rootReducer": () => (/* binding */ rootReducer)
/* harmony export */ });
/* harmony import */ var _recipe_store_recipe_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../recipe/store/recipe.reducer */ 6233);
/* harmony import */ var _auth_store_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth/store/auth.reducer */ 8030);
/* harmony import */ var _shopping_list_store_shopping_list_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shopping-list/store/shopping-list.reducer */ 5177);



const rootReducer = {};
const reducers = {
    shoppingList: _shopping_list_store_shopping_list_reducer__WEBPACK_IMPORTED_MODULE_2__.shoppingListReducer,
    auth: _auth_store_auth_reducer__WEBPACK_IMPORTED_MODULE_1__.authReducer,
    recipes: _recipe_store_recipe_reducer__WEBPACK_IMPORTED_MODULE_0__.recipeReducer,
};


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    api: 'AIzaSyDcwZSN9HS09whlK6VOXQqahxxzEj4i-zY',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
function bootstrap() {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(err => console.error(err));
}
;
if (document.readyState === 'complete') {
    bootstrap();
}
else {
    document.addEventListener('DOMContentLoaded', bootstrap);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map