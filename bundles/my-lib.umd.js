(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@angular/forms'), require('@angular/common'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('my-lib', ['exports', '@angular/core', '@angular/common/http', '@angular/forms', '@angular/common', '@angular/platform-browser'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['my-lib'] = {}, global.ng.core, global.ng.common.http, global.ng.forms, global.ng.common, global.ng.platformBrowser));
}(this, (function (exports, i0, i1, i2, i3, platformBrowser) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);

    var MyLibService = /** @class */ (function () {
        function MyLibService() {
        }
        return MyLibService;
    }());
    MyLibService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.4", ngImport: i0__namespace, type: MyLibService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    MyLibService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.4", ngImport: i0__namespace, type: MyLibService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.4", ngImport: i0__namespace, type: MyLibService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var MyLibComponent = /** @class */ (function () {
        function MyLibComponent(httpClient) {
            this.httpClient = httpClient;
            this.searchedText = "";
            this.BASE_URL = 'https://uk.funzing.space:443/api/v2';
            this.timer = null;
            this.searchResponse = {};
            this.isLoading = false;
        }
        MyLibComponent.prototype.ngOnInit = function () {
        };
        /**
        * Function Execute when user type something in text input after timeout of 500
        */
        MyLibComponent.prototype.onInputChange = function () {
            var _this = this;
            if (this.searchedText) {
                clearTimeout(this.timer);
                this.timer = setTimeout(function () {
                    _this.makeAPICall();
                }, 500);
            }
            else {
                this.searchResponse = {};
            }
        };
        /**
         * Function that fetch records from server and modify that for highlight searched word
         */
        MyLibComponent.prototype.makeAPICall = function () {
            var _this = this;
            this.searchResponse = {};
            if (this.searchedText) {
                this.isLoading = true;
                this.httpClient.get(this.BASE_URL + "/auto_complete_searcher?search_text=" + this.searchedText).subscribe(function (res) {
                    var _a, _b, _c, _d, _e, _f;
                    _this.searchResponse = res;
                    var replaceWord = new RegExp(_this.searchedText, "gi");
                    if ((_b = (_a = _this.searchResponse) === null || _a === void 0 ? void 0 : _a.categories) === null || _b === void 0 ? void 0 : _b.length) {
                        _this.searchResponse.categories.map(function (category) {
                            category.title = category.title.replace(replaceWord, function (str) { return "<strong>" + str + "</strong>"; });
                        });
                    }
                    if ((_d = (_c = _this.searchResponse) === null || _c === void 0 ? void 0 : _c.experiences) === null || _d === void 0 ? void 0 : _d.length) {
                        _this.searchResponse.experiences.map(function (experience) {
                            experience.title = experience.title.replace(replaceWord, function (str) { return "<strong>" + str + "</strong>"; });
                        });
                    }
                    if ((_f = (_e = _this.searchResponse) === null || _e === void 0 ? void 0 : _e.hosts) === null || _f === void 0 ? void 0 : _f.length) {
                        _this.searchResponse.hosts.map(function (host) {
                            host.title = host.title.replace(replaceWord, function (str) { return "<strong>" + str + "</strong>"; });
                        });
                    }
                    _this.isLoading = false;
                }, function (error) {
                    _this.isLoading = false;
                });
            }
        };
        /**
         * function for navigate to given external url
         * @param url string navigation url
         */
        MyLibComponent.prototype.navigateToLink = function (url) {
            var urlNavigation = '';
            if (!/^http[s]?:\/\//.test(url)) {
                urlNavigation += 'http://';
            }
            urlNavigation += url;
            window.open(urlNavigation, '_blank');
        };
        return MyLibComponent;
    }());
    MyLibComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.4", ngImport: i0__namespace, type: MyLibComponent, deps: [{ token: i1__namespace.HttpClient }], target: i0__namespace.ɵɵFactoryTarget.Component });
    MyLibComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.4", type: MyLibComponent, selector: "my-angular-search", ngImport: i0__namespace, template: "<div class=\"search-module\">\r\n    <form>\r\n        <input class=\"form-control\" type=\"text\" name=\"searchedText\" [(ngModel)]=\"searchedText\"\r\n            (ngModelChange)=\"onInputChange()\"> abc\r\n        <div class=\"loader\" *ngIf=\"isLoading\"></div>\r\n    </form>\r\n    <div class=\"search-result\" *ngIf=\"searchResponse?.categories?.length || searchResponse?.experiences?.length || searchResponse?.hosts?.length\">\r\n        <div class=\"search-result__head\">\r\n            <div class=\"search-result__icon\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"15\" viewBox=\"0 0 16 15\" fill=\"none\">\r\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\r\n                        d=\"M10.5281 9.42808H11.2135L15.5 13.7135L14.2146 15L9.92923 10.7135V10.0281L9.67077 9.77077C8.72808 10.6281 7.44269 11.1427 6.07077 11.1427C2.98538 11.1427 0.5 8.65731 0.5 5.57077C0.5 2.48538 2.98538 0 6.07077 0C9.15615 0 11.6415 2.48538 11.6415 5.57077C11.6415 6.94269 11.1281 8.22808 10.2719 9.17077L10.5281 9.42808ZM6.07077 1.71346C3.92808 1.71346 2.21346 3.42923 2.21346 5.57077C2.21346 7.71462 3.92808 9.42808 6.07077 9.42808C8.21346 9.42808 9.92923 7.71462 9.92923 5.57077C9.92923 3.42923 8.21346 1.71346 6.07077 1.71346Z\"\r\n                        fill=\"url(#paint0_linear)\" />\r\n                    <defs>\r\n                        <linearGradient id=\"paint0_linear\" x1=\"0.5\" y1=\"7.49981\" x2=\"15.5\" y2=\"7.49981\"\r\n                            gradientUnits=\"userSpaceOnUse\">\r\n                            <stop stop-color=\"#FF7A59\" />\r\n                            <stop offset=\"1\" stop-color=\"#EF6340\" />\r\n                        </linearGradient>\r\n                    </defs>\r\n                </svg>\r\n            </div>\r\n            <div class=\"search-result__title\">Search results for <strong>\u2018{{searchedText}}\u2019</strong></div>\r\n        </div>\r\n        <div class=\"search-result__block search-result__block--scrolling\" *ngIf=\"searchResponse?.categories?.length\">\r\n            <div class=\"search-result__block-heading\">\r\n                <h3 class=\"search-result__block-title\">categories and interests</h3>\r\n            </div>\r\n            <ul class=\"search-result__block-list\">\r\n                <li *ngFor=\"let category of searchResponse.categories\">\r\n                    <a (click)=\"navigateToLink(category.link)\" [innerHtml]=\"category.title\"></a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"search-result__block\" *ngIf=\"searchResponse?.experiences?.length\">\r\n            <div class=\"search-result__block-heading\">\r\n                <h3 class=\"search-result__block-title\">experiences</h3>\r\n                <a href=\"#\">Show more results</a>\r\n            </div>\r\n            <ul class=\"search-result__block-list\">\r\n                <li *ngFor=\"let experience of searchResponse.experiences\">\r\n                    <a (click)=\"navigateToLink(experience.link)\">\r\n                        <div class=\"search-list-block search-list-block--blog\">\r\n                            <div class=\"search-list-block__img\"\r\n                                [style.backgroundImage]=\"'url('+ experience?.img_url +')'\">\r\n                            </div>\r\n                            <div class=\"search-list-block__info\">\r\n                                <h3 class=\"search-list-block__title\" [innerHtml]=\"experience?.title\"></h3>\r\n                                <div class=\"search-list-block__content\">{{experience?.location}}\r\n                                    <span class=\"search-list-block__date\">\r\n                                        <svg width=\"12\" height=\"13\" viewBox=\"0 0 12 13\" fill=\"#424242\"\r\n                                            xmlns=\"http://www.w3.org/2000/svg\">\r\n                                            <path\r\n                                                d=\"M2.5 0.423462V1.59013H1.91667C1.275 1.59013 0.75 2.11513 0.75 2.7568V10.9235C0.75 11.5651 1.275 12.0901 1.91667 12.0901H10.0833C10.725 12.0901 11.25 11.5651 11.25 10.9235V2.7568C11.25 2.11513 10.725 1.59013 10.0833 1.59013H9.5V0.423462H8.33333V1.59013H3.66667V0.423462H2.5ZM1.91667 2.7568H2.5H3.66667H8.33333H9.5H10.0833V3.92346H1.91667V2.7568ZM1.91667 5.09013H10.0833V10.9235H1.91667V5.09013Z\"\r\n                                                fill=\"#424242\" />\r\n                                            <defs>\r\n                                                <linearGradient id=\"paint0_linear\" x1=\"0.75\" y1=\"6.25668\" x2=\"12.8466\"\r\n                                                    y2=\"6.25668\" gradientUnits=\"userSpaceOnUse\">\r\n                                                    <stop stop-color=\"#606164\" />\r\n                                                    <stop offset=\"1\" stop-color=\"#424242\" />\r\n                                                </linearGradient>\r\n                                            </defs>\r\n                                        </svg>\r\n                                        <!-- <img src=\"../../assets/calendar.png\" /> -->\r\n                                        {{ experience.date | date:'fullDate' }}</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"search-result__block search-result__block--scrolling\" *ngIf=\"searchResponse?.hosts?.length\">\r\n            <div class=\"search-result__block-heading\">\r\n                <h3 class=\"search-result__block-title\">host</h3>\r\n            </div>\r\n            <ul class=\"search-result__block-list\">\r\n                <li *ngFor=\"let host of searchResponse.hosts\">\r\n                    <a (click)=\"navigateToLink(host.link)\">\r\n                        <div class=\"search-list-block\">\r\n                            <div class=\"search-list-block__img\" [style.backgroundImage]=\"'url('+ host?.img_url +')'\">\r\n                            </div>\r\n                            <div class=\"search-list-block__info\">\r\n                                <h3 class=\"search-list-block__title\" [innerHtml]=\"host?.title\"></h3>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>", styles: [".search-module{position:relative}.search-result{background:#fff;box-shadow:0 4px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.16);border-radius:4px;max-width:413px;font-family:Montserrat,sans-serif;position:absolute;width:100%;top:calc(100% + 5px);left:0}.search-result__head{margin:0 24px;padding:27px 3px;border-bottom:1px solid #dbdbdb;display:flex;align-items:center}.search-result__icon{margin-right:10px}.search-result__title{font-family:Montserrat,sans-serif;font-size:14px;line-height:150%;color:#303030}.search-result__block{padding:24px 26px 16px 0}.search-result__block-heading{display:flex;justify-content:space-between;align-items:flex-start}.search-result__block-heading a{font-weight:500;font-size:12px;line-height:20px;color:#888;text-decoration:none}.search-result__block-title{font-weight:800;font-size:14px;line-height:150%;margin:0 0 16px 24px;text-transform:uppercase;background:#ff7a59;background:linear-gradient(90deg,#ff7a59,#ef6340);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.search-result__block-list{margin:0;padding:0;list-style-type:none}.search-result__block-list li{margin-bottom:4px;padding:8px 0}.search-result__block-list li:last-child{margin-bottom:0}.search-result__block-list a{padding:0 8px 0 40px;font-size:14px;line-height:150%;color:#303030;display:block;text-decoration:none;transition:all .5s ease}.search-result__block-list a:hover{background:#f7f7f7}.search-result__block--scrolling{padding-right:8px}.search-result__block--scrolling .search-result__block-list{max-height:200px;overflow-y:scroll}.search-result__block--scrolling .search-result__block-list li{padding:0 8px 0 0}.search-result__block--scrolling .search-result__block-list a{padding:8px 8px 8px 40px;cursor:pointer}.search-result ::-webkit-scrollbar{width:8px}.search-result ::-webkit-scrollbar-thumb{background:#dbdbdb;opacity:.8;border-radius:30px}.search-result ::-webkit-scrollbar-thumb:hover{background:#dbdbdb;opacity:1}.search-list-block{display:flex;align-items:center}.search-list-block__img{height:32px;width:32px;background-position:50%;background-size:cover;border-radius:50%;border:.633333px solid #dbdbdb;margin-right:16px}.search-list-block__title{font-size:14px;line-height:120%;color:#303030;font-weight:400;margin:0}.search-list-block__content{margin-top:4px;font-weight:600;font-size:10px;line-height:120%;text-transform:uppercase;color:#888}.search-list-block__date{margin-left:8px;border-left:1px solid #dbdbdb;padding-left:9px;font-weight:500;font-size:12px;line-height:110%;color:#424242;text-transform:capitalize;display:inline-flex;align-items:center}.search-list-block__date img{margin-right:6px}.search-list-block--blog .search-list-block__title{text-transform:capitalize}.search-list-block--blog .search-list-block__img{width:64px;height:46px;border-radius:4px 4px 4px 0;border:none}form{display:flex}.loader{border-radius:50%;border:3px solid #f3f3f3;border-top-color:#3498db;width:20px;height:20px;-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn)}}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}"], directives: [{ type: i2__namespace.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2__namespace.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2__namespace.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2__namespace.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2__namespace.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i3__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "date": i3__namespace.DatePipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.4", ngImport: i0__namespace, type: MyLibComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'my-angular-search',
                        templateUrl: './my-lib.component.html',
                        styleUrls: ['./my-lib.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.HttpClient }]; } });

    var MyLibModule = /** @class */ (function () {
        function MyLibModule() {
        }
        return MyLibModule;
    }());
    MyLibModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.4", ngImport: i0__namespace, type: MyLibModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    MyLibModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.4", ngImport: i0__namespace, type: MyLibModule, declarations: [MyLibComponent], imports: [platformBrowser.BrowserModule,
            i2.FormsModule,
            i1.HttpClientModule], exports: [MyLibComponent] });
    MyLibModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.4", ngImport: i0__namespace, type: MyLibModule, imports: [[
                platformBrowser.BrowserModule,
                i2.FormsModule,
                i1.HttpClientModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.4", ngImport: i0__namespace, type: MyLibModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            MyLibComponent
                        ],
                        imports: [
                            platformBrowser.BrowserModule,
                            i2.FormsModule,
                            i1.HttpClientModule
                        ],
                        exports: [
                            MyLibComponent
                        ]
                    }]
            }] });

    /*
     * Public API Surface of my-lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MyLibComponent = MyLibComponent;
    exports.MyLibModule = MyLibModule;
    exports.MyLibService = MyLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=my-lib.umd.js.map
