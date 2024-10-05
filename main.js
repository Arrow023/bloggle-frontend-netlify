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

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utility_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/alert-dialog/alert-dialog.component */ "./src/app/utility/alert-dialog/alert-dialog.component.ts");
/* harmony import */ var _services_contactus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/contactus.service */ "./src/app/services/contactus.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







class AboutComponent {
    constructor(contactusservice, titleService, metaTagService, dialogComponent) {
        this.contactusservice = contactusservice;
        this.titleService = titleService;
        this.metaTagService = metaTagService;
        this.dialogComponent = dialogComponent;
    }
    ngOnInit() {
        this.titleService.setTitle("About Us");
        this.metaTagService.addTags([
            { name: "description", content: "Learn about our journey and contact us" },
            { name: "author", content: "Piyush Chouhan M, Nishant Bhushan, Kedar R, Mohanavel R, Kumaran R" },
            { name: "robots", content: "index,follow" },
            { name: "keywords", content: "about us, contact" },
            { httpEquiv: 'Content-Type', content: "text/html", charset: "UTF-8" }
        ]);
    }
    createSubscribe() {
        let Record1 = {};
        Record1['subscribe'] = this.subscribe;
        this.contactusservice.create_subscribe(Record1).then(res => {
            this.subscribe = "";
            this.dialogComponent.open(_utility_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_1__["AlertDialogComponent"], { data: { title: 'Success', content: 'You have successfully subscribed to our news letter.' } });
        }).catch(error => {
            // console.log("Subscribe error",error);
        });
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contactus_service__WEBPACK_IMPORTED_MODULE_2__["ContactusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 200, vars: 5, consts: [[1, "about-company-section"], [1, "container", "p-1", "p-sm-3"], [1, "row"], [1, "col-12", "text-center"], [1, "col-md-3"], ["src", "../../assets/shared/images/about-page-images/Bloggle-Title.png", "alt", "", 1, "img-fluid"], [1, "col-md-9", "text-justify"], [1, "home-newsletter", "p-2", "pt-md-2", "pb-md-2"], [1, "input-group", "p-3"], ["type", "text", "placeholder", "Enter your email", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-btn"], ["type", "submit", 1, "btn", "btn-theme", 3, "click"], [1, "pt-3", "pb-4", "profile-class"], [1, "container"], [1, "row", "mt-4"], [1, "col", "text-center"], [1, "h3-profile"], [1, "row", "justify-content-center"], [1, "col-lg-3", "col-md-3"], [1, "card"], [1, "card-body"], ["src", "../../assets/shared/images/about-page-images/piyush_new.jpg", "alt", "NO DP", 1, "img-fluid", "rounded-circle", "w-50", "mb-3"], [1, "d-flex", "flex-row", "justify-content-center"], [1, "p-3"], ["href", "https://piyushchouhan.netlify.app/", "target", "_blank"], [1, "fa", "fa-chrome"], ["href", "https://www.facebook-official.com/piyush.chohan.1", "target", "_blank"], [1, "fa", "fa-facebook-official"], ["href", "https://twitter.com/piyushchohan1", "target", "_blank"], [1, "fa", "fa-twitter"], ["href", "https://www.instagram.com/lelouch_vi._britannia", "target", "_blank"], [1, "fa", "fa-instagram"], ["src", "../../assets/shared/images/about-page-images/nishant_photo.jpg", "alt", "NO DP", 1, "img-fluid", "rounded-circle", "w-50", "mb-3"], [1, "p-4"], ["href", "https://www.facebook-official.com/nishant.bhushan.792", "target", "_blank"], ["href", "https://twitter.com/Nish_ant_05", "target", "_blank"], ["href", "https://www.instagram.com/nis_hant_05/", "target", "_blank"], ["src", "../../assets/shared/images/about-page-images/kumaran_photo-edited.jpg", "alt", "NO DP", 1, "img-fluid", "rounded-circle", "w-50", "mb-3"], ["href", "https://www.facebook-official.com/kumaran.rajendiran.14/", "target", "_blank"], ["href", "https://twitter.com/Kumaran04231761", "target", "_blank"], ["href", "https://www.instagram.com/kumaran.rajendiran.14/", "target", "_blank"], ["src", "../../assets/shared/images/about-page-images/mohan_photo-edited.jpg", "alt", "NO DP", 1, "img-fluid", "rounded-circle", "w-50", "mb-3"], ["href", "https://www.facebook-official.com/vel.mohan.921", "target", "_blank"], ["href", "https://twitter.com/Mohan49412755", "target", "_blank"], ["href", "https://www.instagram.com/vel.mohan/", "target", "_blank"], ["src", "../../assets/shared/images/about-page-images/kedar_photo.jpg", "alt", "NO DP", 1, "img-fluid", "rounded-circle", "w-50", "mb-3"], ["href", "https://www.facebook-official.com/people/Kedar-Rammohan/100008692413276/", "target", "_blank"], ["href", "https://twitter.com/kedar_kedi", "target", "_blank"], ["href", "https://www.instagram.com/kedar_2206/", "target", "_blank"], [1, "contact", "contact-us-div"], ["id", "contactForm", 1, "content"], [1, "text-center"], [1, "row", "col-sm-12"], [1, "container-contact"], [1, "contactInfo"], [1, "box", "contact-card", 2, "padding-left", "12px"], [1, "icon"], ["aria-hidden", "true", 1, "fa", "fa-map-marker", 2, "color", "black"], [1, "text"], [2, "color", "black"], [1, "box", "contact-card-1", "pl-2"], ["aria-hidden", "true", 1, "fa", "fa-phone", 2, "color", "black"], ["aria-hidden", "true", 1, "fa", "fa-envelope-o", 2, "color", "black"], [1, "contactForm"], [1, "inputBox"], ["type", "text", "id", "ContactName", "name", "form", "required", "required", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "ContactMail", "name", "form", "required", "required", 3, "ngModel", "ngModelChange"], ["required", "required", "id", "ContactMessage", "name", "form", 3, "ngModel", "ngModelChange"], ["type", "button", "id", "sendMailContact", "value", "Send"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "About Bloggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Bloggle is the place which is built by five different minded people who worked towards a single goal in building a website that help people in bringing their best ideas , Technological stuff, News, facts. The best ideas can change who we are. Bloggle is where those ideas take shape, take off, and spark powerful conversations. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " We\u2019re creating a new model for digital publishing. One that supports nuance, complexity, and vital storytelling without giving in to the incentives of advertising. It\u2019s an environment that\u2019s open to everyone but promotes substance and authenticity. And it\u2019s where deeper connections forged between readers and writers can lead to discovery and growth. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " We created this website to foster an ecosystem in which people help one another. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Subscribe to our Newsletter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AboutComponent_Template_input_ngModelChange_22_listener($event) { return ctx.subscribe = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_button_click_24_listener() { return ctx.createSubscribe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Our awesome team ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Piyush Chouhan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "DEVELOPER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Specializing in building scalable web solutions, optimizing .NET applications, and executing seamless cloud migrations with expertise in Angular, MSSQL, and .NET Web API.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Nishant Bhushan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "DEVELOPER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "I am an Enthusiast who enjoys being creative.I love to work on full stack applications and always do things professionally. MEAN Stack developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Kumaran");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "DEVELOPER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "I am Carpe diem and MEAN stack developer.I love to code and learn new things.Interested in problem solving, games, automation. Loves to explore things. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Mohanavel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "DEVELOPER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "I am Machine Learning Enthusiast and an MEAN stack developer. I like coding.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Kedar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "DEVELOPER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Full Stack Enthusiast. Love to code the way. Interested in Web Development.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Bloggle is the place which is built by five different minded people who worked towards a single goal in building a website that help people in bringing their best ideas , Technological stuff, News, facts. The best ideas can change who we are. Bloggle is where those ideas take shape, take off, and spark powerful conversations. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Around the world");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Virtual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "+91 123456789");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "admin@bloggle.tech");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "devloper@bloggle.tech");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Send Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AboutComponent_Template_input_ngModelChange_184_listener($event) { return ctx.Name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "input", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AboutComponent_Template_input_ngModelChange_188_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "textarea", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AboutComponent_Template_textarea_ngModelChange_192_listener($event) { return ctx.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Type your Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.subscribe);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dialog);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"]], styles: [".myrows[_ngcontent-%COMP%] {\r\n\tborder: 3px solid green;\r\n\tpadding: 5px;\r\n}\r\n\r\n.mycols[_ngcontent-%COMP%] {\r\n\tborder: 3px solid red;\r\n}\r\n\r\n.mycontainer[_ngcontent-%COMP%] {\r\n\tbackground-color: aqua;\r\n}\r\n\r\n#topHeader[_ngcontent-%COMP%] {\r\n\tborder-bottom: 1px solid #ebebeb;\r\n}\r\n\r\n#topHeader[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\t\tcolor: #2c3e50;\r\n\t\tfont-weight: 600;\r\n\t\tfont-size: 0.89rem;\r\n\t}\r\n\r\n.container-fluid[_ngcontent-%COMP%] {\r\n\tpadding-left: 0;\r\n\tpadding-right: 0;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tfont-size: 1.1rem;\r\n\tfont-weight: 600;\r\n}\r\n\r\n\r\n\r\n.full-footer[_ngcontent-%COMP%] {\r\n\tbackground-color: #243c4f;\r\n}\r\n\r\n.top-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tcolor: white;\r\n}\r\n\r\n.top-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tcolor: white;\r\n\tfont-weight: 600;\r\n}\r\n\r\n.top-footer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n\tcolor: white;\r\n}\r\n\r\n.bottom-footer[_ngcontent-%COMP%] {\r\n\tbackground-color: #031b2e;\r\n}\r\n\r\n.bottom-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\t\tcolor: white;\r\n\t}\r\n\r\n\r\n\r\n\r\n\r\n.top-hero-section[_ngcontent-%COMP%] {\r\n\tbackground-color: #3498db;\r\n\tcolor: white;\r\n}\r\n\r\n.top-hero-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\t\tcolor: white;\r\n\t\tfont-weight: 600;\r\n\t}\r\n\r\n.qualities-img[_ngcontent-%COMP%] {\r\n\twidth: 200px;\r\n\tborder-radius:100px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.requirements-section[_ngcontent-%COMP%] {\r\n\tbackground-color: #004d80;\r\n\tcolor: white;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.home-newsletter[_ngcontent-%COMP%] {\r\n\tbackground-color: #004d80;\r\n\tcolor: white;\r\n}\r\n\r\n.home-newsletter[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n\t\theight: 50px;\r\n\t\tborder-color: transparent;\r\n\t\tborder-radius: 20px 0 0 20px;\r\n\t}\r\n\r\n.home-newsletter[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n\t\tmin-height: 50px;\r\n\t\tborder-radius: 0 20px 20px 0;\r\n\t\tbackground: #be0280;\r\n\t\tcolor: #fff;\r\n\t}\r\n\r\n\r\n\r\n.clients-section[_ngcontent-%COMP%] {\r\n\tbackground-color: #f0f0f0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.breadcrumbs-section[_ngcontent-%COMP%] {\r\n\tbackground-color: #e9ecef;\r\n}\r\n\r\n\r\n\r\ncontact-us-div[_ngcontent-%COMP%]{\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tbox-sizing: border-box;\r\n\tfont-family: 'Poppins',sans-serif;\r\n\t\r\n}\r\n\r\n.contact[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\tmin-height: 100vh;\r\n\tpadding: 50px 100px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tflex-direction: column;\r\n\t\r\n\tbackground-size: cover;\r\n}\r\n\r\n.contact[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n\t\tmax-width: 800px;\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n.contact[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\t\tfont-size: 36px;\r\n\t\tfont-weight: 500;\r\n\t\tcolor: #fff;\r\n\t}\r\n\r\n.contact[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\t\tfont-weight: 300;\r\n\t\tcolor: #fff;\r\n\t}\r\n\r\n.container-contact[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmargin-top: 30px;\r\n}\r\n\r\n.container-contact[_ngcontent-%COMP%]   .contactInfo[_ngcontent-%COMP%] {\r\n\t\twidth: 50%;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t}\r\n\r\n.container-contact[_ngcontent-%COMP%]   .contactInfo[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\r\n\t\t\tposition: relative;\r\n\t\t\tpadding: 20px 0;\r\n\t\t\tdisplay: flex;\r\n\t\t\tmargin:10px;\r\n\t\t}\r\n\r\n.container-contact[_ngcontent-%COMP%]   .contactInfo[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n\t\t\t\tmin-width: 60px;\r\n\t\t\t\theight: 60px;\r\n\t\t\t\tbackground: #fff;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tborder-radius: 50%;\r\n\t\t\t\tfont-size: 22px;\r\n\t\t\t}\r\n\r\n.container-contact[_ngcontent-%COMP%]   .contactInfo[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tmargin-left: 20px;\r\n\t\t\t\tfont-size: 16px;\r\n\t\t\t\tcolor: #fff;\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\tfont-weight: 300;\r\n\t\t\t}\r\n\r\n.container-contact[_ngcontent-%COMP%]   .contactInfo[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n\t\t\t\t\tfont-weight: 500;\r\n\t\t\t\t\tcolor: #00bcd4;\r\n\t\t\t\t}\r\n\r\n.contactForm[_ngcontent-%COMP%] {\r\n\twidth: 40%;\r\n\tpadding: 40px;\r\n\t\r\n\tbackground: rgba( 0, 0, 0, 0.45 );\r\n\tbox-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\r\n\tbackdrop-filter: blur( 20.0px );\r\n\t-webkit-backdrop-filter: blur( 20.0px );\r\n\tborder-radius: 10px;\r\n\tborder: 1px solid rgba( 255, 255, 255, 0.18 );\r\n}\r\n\r\n.contactForm[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\t\tfont-size: 30px;\r\n\t\t\r\n\t\tfont-weight: 500;\r\n\t}\r\n\r\n.contactForm[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%] {\r\n\t\tposition: relative;\r\n\t\twidth: 100%;\r\n\t\tmargin-top: 10px;\r\n\t}\r\n\r\n.contactForm[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .contactForm[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n\t\t\twidth: 100%;\r\n\t\t\tpadding: 5px 0;\r\n\t\t\tfont-size: 16px;\r\n\t\t\tmargin: 10px 0;\r\n\t\t\tborder: none;\r\n\t\t\tborder-bottom: 2px solid #333;\r\n\t\t\toutline: none;\r\n\t\t}\r\n\r\n.contactForm[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%] {\r\n\t\tposition: relative;\r\n\t\twidth: 100%;\r\n\t\tmargin-top: 10px;\r\n\t}\r\n\r\n.contactForm[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .contactForm[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n\t\t\twidth: 100%;\r\n\t\t\tpadding: 5px 0;\r\n\t\t\tfont-size: 16px;\r\n\t\t\tmargin: 10px 0;\r\n\t\t\tborder: none;\r\n\t\t\tborder-bottom: 2px solid #333;\r\n\t\t\toutline: none;\r\n\t\t\tresize: none;\r\n\t\t}\r\n\r\n.contactForm[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\t\t\tposition: absolute;\r\n\t\t\tleft: 0;\r\n\t\t\tpadding: 5px 0;\r\n\t\t\tfont-size: 16px;\r\n\t\t\tmargin: 10px 0;\r\n\t\t\tpointer-events: none;\r\n\t\t\ttransition: 0.5s;\r\n\t\t\tcolor: #666;\r\n\t\t}\r\n\r\n.contactForm[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ span[_ngcontent-%COMP%], .contactForm[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    ~ span[_ngcontent-%COMP%], .contactForm[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus    ~ span[_ngcontent-%COMP%], .contactForm[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:valid    ~ span[_ngcontent-%COMP%] {\r\n\t\t\t\r\n\t\t\tcolor:black;\r\n\t\t\tfont-size: 12px;\r\n\t\t\ttransform: translateY(-25px);\r\n\t\t}\r\n\r\n.contactForm[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   input[type=\"submit\"][_ngcontent-%COMP%] {\r\n\t\t\twidth: 100px;\r\n\t\t\tbackground: #00bcd4;\r\n\t\t\tcolor: #fff;\r\n\t\t\tborder: none;\r\n\t\t\tcursor: pointer;\r\n\t\t\tpadding: 10px;\r\n\t\t\tfont-size: 18px;\r\n\t\t}\r\n\r\n@media screen and (max-width:500px) {\r\n\t\r\n\t.card[_ngcontent-%COMP%]\r\n\t{\r\n\t\tmargin: 20px;\r\n\t}\r\n\r\n\t.contact[_ngcontent-%COMP%] {\r\n\t\tpadding: 0px;\r\n\t}\r\n\r\n\t.container-contact[_ngcontent-%COMP%] {\r\n\t\tflex-direction: column;\r\n\t}\r\n\r\n\t\t.container-contact[_ngcontent-%COMP%]   .contactInfo[_ngcontent-%COMP%] {\r\n\t\t\tmargin: 40px;\r\n\t\t\twidth: 150%;\r\n\t\t\tmargin-left: 170px ;\r\n\t\t}\r\n\r\n\t\r\n\r\n\t.contactForm[_ngcontent-%COMP%]\r\n\t{\r\n\t\twidth: 100%;\r\n\t\tbackground-color: blue;\r\n\t}\r\n}\r\n\r\n.contact-card[_ngcontent-%COMP%] {\r\n\twidth: 60%;\r\n\tjustify-content: start;\r\n\tborder-radius: 40px;\r\n\tbackground: #e0e0e0;\r\n\tbox-shadow: 8px 8px 14px #5a5a5a, -8px -8px 14px #ffffff;\r\n}\r\n\r\n.contact-card-1[_ngcontent-%COMP%] {\r\n\twidth: 60%;\r\n\t\r\n\tmargin-left: 10px;\r\n\tborder-radius: 40px;\r\n\tbackground: #e0e0e0;\r\n\tbox-shadow: 8px 8px 14px #5a5a5a, -8px -8px 14px #ffffff;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.profile-class[_ngcontent-%COMP%]\r\n{\r\n\tmargin:0;\r\n\tpadding: 0;\r\n\r\n\tfont-family: 'Raleway',sans-serif;\r\n\tfont-size: 14px;\r\n\tfont-weight:400;\r\n\tcolor:#777;\r\n}\r\n\r\n.h3-profile[_ngcontent-%COMP%]\r\n{\r\n\tfont-size: 24px;\r\n\t\r\n\tfont-weight: bold;\r\n}\r\n\r\n.profile-class[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]\r\n{\r\n\tmargin-top: -50px;\r\n}\r\n\r\n.profile-class[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]\r\n{\r\n\tfont-size: 26px;\r\n\tcolor: #555;\r\n}\r\n\r\n.profile-class[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]\r\n{\r\n\tfont-weight: 500;\r\n}\r\n\r\n.profile-class[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]\r\n{\r\n\tborder-radius: 0;\r\n\tbox-shadow: 5px 5px 15px #e74c3c;\r\n\ttransition: all 0.3s ease-in;\r\n\t-webkit-transition: all 0.3s ease-in;\r\n\t-moz-transition: all 0.3s ease-in;\r\n\ttext-align:center;\r\n}\r\n\r\n.profile-class[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover\r\n{\r\n\tbackground: #e74c3c;\r\n\tcolor: #fff;\r\n\tborder-radius: 5px;\r\n\tborder: none;\r\n\tbox-shadow: 5px 5px 10px #9E9E9E;\r\n}\r\n\r\n.profile-class[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%], .profile-class[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]\r\n{\r\n\tcolor: #fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLHVCQUF1QjtDQUN2QixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxnQ0FBZ0M7QUFDakM7O0FBRUM7RUFDQyxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtDQUNuQjs7QUFFRDtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsZ0JBQWdCO0FBQ2pCOztBQUVBLG1CQUFtQjs7QUFDbkI7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVDO0VBQ0MsWUFBWTtDQUNiOztBQUVELGlCQUFpQjs7QUFFakIseUNBQXlDOztBQUN6QztDQUNDLHlCQUF5QjtDQUN6QixZQUFZO0FBQ2I7O0FBRUM7RUFDQyxZQUFZO0VBQ1osZ0JBQWdCO0NBQ2pCOztBQUVEO0NBQ0MsWUFBWTtDQUNaLG1CQUFtQjtBQUNwQjs7QUFDQSx1Q0FBdUM7O0FBRXZDLDhDQUE4Qzs7QUFDOUM7Q0FDQyx5QkFBeUI7Q0FDekIsWUFBWTtBQUNiOztBQUNBLDRDQUE0Qzs7QUFHNUMsNkNBQTZDOztBQUM3QztDQUNDLHlCQUF5QjtDQUN6QixZQUFZO0FBQ2I7O0FBRUM7RUFDQyxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLDRCQUE0QjtDQUM3Qjs7QUFFQTtFQUNDLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBQ25CLFdBQVc7Q0FDWjs7QUFFRCwyQ0FBMkM7O0FBRzNDO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBLGdFQUFnRTs7QUFFaEUsbUVBQW1FOztBQUNuRTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFHQSxzRUFBc0U7O0FBRXRFO0NBQ0MsU0FBUztDQUNULFVBQVU7Q0FDVixzQkFBc0I7Q0FDdEIsaUNBQWlDOztBQUVsQzs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLHNCQUFzQjtDQUN0Qiw2QkFBNkI7Q0FDN0Isc0JBQXNCO0FBQ3ZCOztBQUVDO0VBQ0MsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtDQUNuQjs7QUFFQTtFQUNDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztDQUNaOztBQUVBO0VBQ0MsZ0JBQWdCO0VBQ2hCLFdBQVc7Q0FDWjs7QUFFRDtDQUNDLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixnQkFBZ0I7QUFDakI7O0FBRUM7RUFDQyxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtDQUN2Qjs7QUFFQztHQUNDLGtCQUFrQjtHQUNsQixlQUFlO0dBQ2YsYUFBYTtHQUNiLFdBQVc7RUFDWjs7QUFFQztJQUNDLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0dBQ2hCOztBQUVBO0lBQ0MsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixnQkFBZ0I7R0FDakI7O0FBRUM7S0FDQyxnQkFBZ0I7S0FDaEIsY0FBYztJQUNmOztBQUVKO0NBQ0MsVUFBVTtDQUNWLGFBQWE7Q0FDYixvQkFBb0I7Q0FDcEIsaUNBQWlDO0NBQ2pDLGtEQUFrRDtDQUNsRCwrQkFBK0I7Q0FDL0IsdUNBQXVDO0NBQ3ZDLG1CQUFtQjtDQUNuQiw2Q0FBNkM7QUFDOUM7O0FBRUM7RUFDQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtDQUNqQjs7QUFFQTtFQUNDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0NBQ2pCOztBQUVDOztHQUVDLFdBQVc7R0FDWCxjQUFjO0dBQ2QsZUFBZTtHQUNmLGNBQWM7R0FDZCxZQUFZO0dBQ1osNkJBQTZCO0dBQzdCLGFBQWE7RUFDZDs7QUFFRDtFQUNDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0NBQ2pCOztBQUVDOztHQUVDLFdBQVc7R0FDWCxjQUFjO0dBQ2QsZUFBZTtHQUNmLGNBQWM7R0FDZCxZQUFZO0dBQ1osNkJBQTZCO0dBQzdCLGFBQWE7R0FDYixZQUFZO0VBQ2I7O0FBRUE7R0FDQyxrQkFBa0I7R0FDbEIsT0FBTztHQUNQLGNBQWM7R0FDZCxlQUFlO0dBQ2YsY0FBYztHQUNkLG9CQUFvQjtHQUNwQixnQkFBZ0I7R0FDaEIsV0FBVztFQUNaOztBQUVBOzs7O0dBSUMsa0JBQWtCO0dBQ2xCLFdBQVc7R0FDWCxlQUFlO0dBQ2YsNEJBQTRCO0VBQzdCOztBQUVBO0dBQ0MsWUFBWTtHQUNaLG1CQUFtQjtHQUNuQixXQUFXO0dBQ1gsWUFBWTtHQUNaLGVBQWU7R0FDZixhQUFhO0dBQ2IsZUFBZTtFQUNoQjs7QUFFRjs7Q0FFQzs7RUFFQyxZQUFZO0NBQ2I7O0NBRUE7RUFDQyxZQUFZO0NBQ2I7O0NBRUE7RUFDQyxzQkFBc0I7Q0FDdkI7O0VBRUM7R0FDQyxZQUFZO0dBQ1osV0FBVztHQUNYLG1CQUFtQjtFQUNwQjs7OztDQUlEOztFQUVDLFdBQVc7RUFDWCxzQkFBc0I7Q0FDdkI7QUFDRDs7QUFHQTtDQUNDLFVBQVU7Q0FDVixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLG1CQUFtQjtDQUNuQix3REFBd0Q7QUFDekQ7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsMkJBQTJCO0NBQzNCLGlCQUFpQjtDQUNqQixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLHdEQUF3RDtBQUN6RDs7QUFHQSwrQ0FBK0M7O0FBRy9DOzs7Ozs7Ozs7Ozs7RUFZRTs7QUFFRjs7Q0FFQyxRQUFRO0NBQ1IsVUFBVTs7Q0FFVixpQ0FBaUM7Q0FDakMsZUFBZTtDQUNmLGVBQWU7Q0FDZixVQUFVO0FBQ1g7O0FBRUE7O0NBRUMsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixpQkFBaUI7QUFDbEI7O0FBRUE7O0NBRUMsaUJBQWlCO0FBQ2xCOztBQUVBOztDQUVDLGVBQWU7Q0FDZixXQUFXO0FBQ1o7O0FBRUE7O0NBRUMsZ0JBQWdCO0FBQ2pCOztBQUVBOztDQUVDLGdCQUFnQjtDQUNoQixnQ0FBZ0M7Q0FDaEMsNEJBQTRCO0NBQzVCLG9DQUFvQztDQUNwQyxpQ0FBaUM7Q0FDakMsaUJBQWlCO0FBQ2xCOztBQUVBOztDQUVDLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixnQ0FBZ0M7QUFDakM7O0FBRUE7O0NBRUMsV0FBVztBQUNaIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teXJvd3Mge1xyXG5cdGJvcmRlcjogM3B4IHNvbGlkIGdyZWVuO1xyXG5cdHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLm15Y29scyB7XHJcblx0Ym9yZGVyOiAzcHggc29saWQgcmVkO1xyXG59XHJcblxyXG4ubXljb250YWluZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbn1cclxuXHJcbiN0b3BIZWFkZXIge1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlYmViO1xyXG59XHJcblxyXG5cdCN0b3BIZWFkZXIgYSB7XHJcblx0XHRjb2xvcjogIzJjM2U1MDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRmb250LXNpemU6IDAuODlyZW07XHJcblx0fVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZCB7XHJcblx0cGFkZGluZy1sZWZ0OiAwO1xyXG5cdHBhZGRpbmctcmlnaHQ6IDA7XHJcbn1cclxuXHJcbm5hdiB1bCBsaSBhIHtcclxuXHRmb250LXNpemU6IDEuMXJlbTtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4vKiBTVEFSVCA6IEZvb3RlciAqL1xyXG4uZnVsbC1mb290ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyNDNjNGY7XHJcbn1cclxuXHJcbi50b3AtZm9vdGVyIHAge1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRvcC1mb290ZXIgYSB7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi50b3AtZm9vdGVyIGgzIHtcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5ib3R0b20tZm9vdGVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDMxYjJlO1xyXG59XHJcblxyXG5cdC5ib3R0b20tZm9vdGVyIHAge1xyXG5cdFx0Y29sb3I6IHdoaXRlO1xyXG5cdH1cclxuXHJcbi8qIEVORCA6IEZvb3RlciAqL1xyXG5cclxuLyogU3RhcnQgOiBIb21lIHBhZ2UgZmlyc3QgaGVybyBzZWN0aW9uICovXHJcbi50b3AtaGVyby1zZWN0aW9uIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHQudG9wLWhlcm8tc2VjdGlvbiBhIHtcclxuXHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0fVxyXG5cclxuLnF1YWxpdGllcy1pbWcge1xyXG5cdHdpZHRoOiAyMDBweDtcclxuXHRib3JkZXItcmFkaXVzOjEwMHB4O1xyXG59XHJcbi8qIEVORCA6IEhvbWUgcGFnZSBmaXJzdCBoZXJvIHNlY3Rpb24gKi9cclxuXHJcbi8qIFNUQVJUIDogSG9tZSBwYWdlIDNyZCByZXF1aXJlbWVudCBzZWN0aW9uICovXHJcbi5yZXF1aXJlbWVudHMtc2VjdGlvbiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwNGQ4MDtcclxuXHRjb2xvcjogd2hpdGU7XHJcbn1cclxuLyogRU5EIDogSG9tZSBwYWdlIDNyZCByZXF1aXJlbWVudCBzZWN0aW9uICovXHJcblxyXG5cclxuLyogU1RBUlQgOiBIb21lIHBhZ2UgNHJkIG5ld3NsZXR0ZXIgc2VjdGlvbiAqL1xyXG4uaG9tZS1uZXdzbGV0dGVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0ZDgwO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHQuaG9tZS1uZXdzbGV0dGVyIC5mb3JtLWNvbnRyb2wge1xyXG5cdFx0aGVpZ2h0OiA1MHB4O1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDIwcHggMCAwIDIwcHg7XHJcblx0fVxyXG5cclxuXHQuaG9tZS1uZXdzbGV0dGVyIC5idG4ge1xyXG5cdFx0bWluLWhlaWdodDogNTBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDAgMjBweCAyMHB4IDA7XHJcblx0XHRiYWNrZ3JvdW5kOiAjYmUwMjgwO1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0fVxyXG5cclxuLyogRU5EIDogSG9tZSBwYWdlIDRyZCBuZXdzbGV0dGVyIHNlY3Rpb24gKi9cclxuXHJcblxyXG4uY2xpZW50cy1zZWN0aW9uIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG59XHJcblxyXG4vKiBFTkQtLS0tLS0tLS0tLS0tLS0tLS0tLSBvZiBob21lIHBhZ2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLyogU1RBUlQtLS0tLS0tLS0tLS0tLS0tLS0tLSBvZiBBYm91dCBwYWdlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLmJyZWFkY3J1bWJzLXNlY3Rpb24ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbn1cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1DT05UQUNUIHVzIEZPUk0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuY29udGFjdC11cy1kaXZ7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcblx0XHJcbn1cclxuXHJcbi5jb250YWN0IHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bWluLWhlaWdodDogMTAwdmg7XHJcblx0cGFkZGluZzogNTBweCAxMDBweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQvKiBiYWNrZ3JvdW5kOiB1cmwoYmcuanBnKTsgKi9cclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5cdC5jb250YWN0IC5jb250ZW50IHtcclxuXHRcdG1heC13aWR0aDogODAwcHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuY29udGFjdCAuY29udGFjdCBoMiB7XHJcblx0XHRmb250LXNpemU6IDM2cHg7XHJcblx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0fVxyXG5cclxuXHQuY29udGFjdCAuY29udGFjdCBwIHtcclxuXHRcdGZvbnQtd2VpZ2h0OiAzMDA7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHR9XHJcblxyXG4uY29udGFpbmVyLWNvbnRhY3Qge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG5cdC5jb250YWluZXItY29udGFjdCAuY29udGFjdEluZm8ge1xyXG5cdFx0d2lkdGg6IDUwJTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdH1cclxuXHJcblx0XHQuY29udGFpbmVyLWNvbnRhY3QgLmNvbnRhY3RJbmZvIC5ib3gge1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdHBhZGRpbmc6IDIwcHggMDtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0bWFyZ2luOjEwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0XHQuY29udGFpbmVyLWNvbnRhY3QgLmNvbnRhY3RJbmZvIC5ib3ggLmljb24ge1xyXG5cdFx0XHRcdG1pbi13aWR0aDogNjBweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDYwcHg7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMjJweDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LmNvbnRhaW5lci1jb250YWN0IC5jb250YWN0SW5mbyAuYm94IC50ZXh0IHtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiAzMDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdFx0LmNvbnRhaW5lci1jb250YWN0IC5jb250YWN0SW5mbyAuYm94IC50ZXh0IGgzIHtcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XHJcblx0XHRcdFx0XHRjb2xvcjogIzAwYmNkNDtcclxuXHRcdFx0XHR9XHJcblxyXG4uY29udGFjdEZvcm0ge1xyXG5cdHdpZHRoOiA0MCU7XHJcblx0cGFkZGluZzogNDBweDtcclxuXHQvKmJhY2tncm91bmQ6ICNmZmY7Ki9cclxuXHRiYWNrZ3JvdW5kOiByZ2JhKCAwLCAwLCAwLCAwLjQ1ICk7XHJcblx0Ym94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoIDMxLCAzOCwgMTM1LCAwLjM3ICk7XHJcblx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKCAyMC4wcHggKTtcclxuXHQtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggMjAuMHB4ICk7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKCAyNTUsIDI1NSwgMjU1LCAwLjE4ICk7XHJcbn1cclxuXHJcblx0LmNvbnRhY3RGb3JtIGgyIHtcclxuXHRcdGZvbnQtc2l6ZTogMzBweDtcclxuXHRcdC8qIGNvbG9yOiAjMzMzOyAqL1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHR9XHJcblxyXG5cdC5jb250YWN0Rm9ybSAuaW5wdXRCb3gge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRtYXJnaW4tdG9wOiAxMHB4O1xyXG5cdH1cclxuXHJcblx0XHQuY29udGFjdEZvcm0gLmlucHV0Qm94IGlucHV0LFxyXG5cdFx0LmNvbnRhY3RGb3JtIC5pbnB1dEJveCB0ZXh0YXJlYSB7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRwYWRkaW5nOiA1cHggMDtcclxuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0XHRtYXJnaW46IDEwcHggMDtcclxuXHRcdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0XHRib3JkZXItYm90dG9tOiAycHggc29saWQgIzMzMztcclxuXHRcdFx0b3V0bGluZTogbm9uZTtcclxuXHRcdH1cclxuXHJcblx0LmNvbnRhY3RGb3JtIC5pbnB1dEJveCB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdG1hcmdpbi10b3A6IDEwcHg7XHJcblx0fVxyXG5cclxuXHRcdC5jb250YWN0Rm9ybSAuaW5wdXRCb3ggaW5wdXQsXHJcblx0XHQuY29udGFjdEZvcm0gLmlucHV0Qm94IHRleHRhcmVhIHtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdHBhZGRpbmc6IDVweCAwO1xyXG5cdFx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRcdG1hcmdpbjogMTBweCAwO1xyXG5cdFx0XHRib3JkZXI6IG5vbmU7XHJcblx0XHRcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzMzO1xyXG5cdFx0XHRvdXRsaW5lOiBub25lO1xyXG5cdFx0XHRyZXNpemU6IG5vbmU7XHJcblx0XHR9XHJcblxyXG5cdFx0LmNvbnRhY3RGb3JtIC5pbnB1dEJveCBzcGFuIHtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRwYWRkaW5nOiA1cHggMDtcclxuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0XHRtYXJnaW46IDEwcHggMDtcclxuXHRcdFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblx0XHRcdHRyYW5zaXRpb246IDAuNXM7XHJcblx0XHRcdGNvbG9yOiAjNjY2O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5jb250YWN0Rm9ybSAuaW5wdXRCb3ggaW5wdXQ6Zm9jdXMgfiBzcGFuLFxyXG5cdFx0LmNvbnRhY3RGb3JtIC5pbnB1dEJveCBpbnB1dDp2YWxpZCB+IHNwYW4sXHJcblx0XHQuY29udGFjdEZvcm0gLmlucHV0Qm94IHRleHRhcmVhOmZvY3VzIH4gc3BhbixcclxuXHRcdC5jb250YWN0Rm9ybSAuaW5wdXRCb3ggdGV4dGFyZWE6dmFsaWQgfiBzcGFuIHtcclxuXHRcdFx0Lypjb2xvcjogI2U5MWU2MzsqL1xyXG5cdFx0XHRjb2xvcjpibGFjaztcclxuXHRcdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1cHgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5jb250YWN0Rm9ybSAuaW5wdXRCb3ggaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcblx0XHRcdHdpZHRoOiAxMDBweDtcclxuXHRcdFx0YmFja2dyb3VuZDogIzAwYmNkNDtcclxuXHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdFx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0XHR9XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjUwMHB4KSB7XHJcblx0XHJcblx0LmNhcmRcclxuXHR7XHJcblx0XHRtYXJnaW46IDIwcHg7XHJcblx0fVxyXG5cclxuXHQuY29udGFjdCB7XHJcblx0XHRwYWRkaW5nOiAwcHg7XHJcblx0fVxyXG5cclxuXHQuY29udGFpbmVyLWNvbnRhY3Qge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHR9XHJcblxyXG5cdFx0LmNvbnRhaW5lci1jb250YWN0IC5jb250YWN0SW5mbyB7XHJcblx0XHRcdG1hcmdpbjogNDBweDtcclxuXHRcdFx0d2lkdGg6IDE1MCU7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAxNzBweCA7XHJcblx0XHR9XHJcblxyXG5cdFxyXG5cclxuXHQuY29udGFjdEZvcm1cclxuXHR7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcblx0fVxyXG59XHJcblxyXG5cclxuLmNvbnRhY3QtY2FyZCB7XHJcblx0d2lkdGg6IDYwJTtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG5cdGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcblx0YmFja2dyb3VuZDogI2UwZTBlMDtcclxuXHRib3gtc2hhZG93OiA4cHggOHB4IDE0cHggIzVhNWE1YSwgLThweCAtOHB4IDE0cHggI2ZmZmZmZjtcclxufVxyXG5cclxuLmNvbnRhY3QtY2FyZC0xIHtcclxuXHR3aWR0aDogNjAlO1xyXG5cdC8qanVzdGlmeS1jb250ZW50OiBjZW50ZXI7Ki9cclxuXHRtYXJnaW4tbGVmdDogMTBweDtcclxuXHRib3JkZXItcmFkaXVzOiA0MHB4O1xyXG5cdGJhY2tncm91bmQ6ICNlMGUwZTA7XHJcblx0Ym94LXNoYWRvdzogOHB4IDhweCAxNHB4ICM1YTVhNWEsIC04cHggLThweCAxNHB4ICNmZmZmZmY7XHJcbn1cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS1QUk9GSUxFIENTUy0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcblxyXG4vKi5wcm9maWxlLWNhcmQtY3NzXHJcbntcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1x0XHJcbn1cclxuXHJcbi5wcm9maWxlLWNhcmQge1xyXG5cdG1hcmdpbjogNXB4O1xyXG5cclxuXHRib3JkZXItcmFkaXVzOiA1MnB4O1xyXG5cdGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcblx0Ym94LXNoYWRvdzogMjNweCAyM3B4IDQ4cHggIzk5OTk5OSwgLTIzcHggLTIzcHggNDhweCAjZmZmZmZmO1xyXG5cclxufSovXHJcblxyXG4ucHJvZmlsZS1jbGFzc1xyXG57XHJcblx0bWFyZ2luOjA7XHJcblx0cGFkZGluZzogMDtcclxuXHJcblx0Zm9udC1mYW1pbHk6ICdSYWxld2F5JyxzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRmb250LXdlaWdodDo0MDA7XHJcblx0Y29sb3I6Izc3NztcclxufVxyXG5cclxuLmgzLXByb2ZpbGVcclxue1xyXG5cdGZvbnQtc2l6ZTogMjRweDtcclxuXHQvKiBjb2xvcjogIzMzMzsgKi9cclxuXHRmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnByb2ZpbGUtY2xhc3MgaW1nXHJcbntcclxuXHRtYXJnaW4tdG9wOiAtNTBweDtcclxufVxyXG5cclxuLnByb2ZpbGUtY2xhc3MgaVxyXG57XHJcblx0Zm9udC1zaXplOiAyNnB4O1xyXG5cdGNvbG9yOiAjNTU1O1xyXG59XHJcblxyXG4ucHJvZmlsZS1jbGFzcyBwXHJcbntcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ucHJvZmlsZS1jbGFzcyAuY2FyZFxyXG57XHJcblx0Ym9yZGVyLXJhZGl1czogMDtcclxuXHRib3gtc2hhZG93OiA1cHggNXB4IDE1cHggI2U3NGMzYztcclxuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuXHQtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcblx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNsYXNzIC5jYXJkOmhvdmVyXHJcbntcclxuXHRiYWNrZ3JvdW5kOiAjZTc0YzNjO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Ym94LXNoYWRvdzogNXB4IDVweCAxMHB4ICM5RTlFOUU7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNsYXNzIC5jYXJkOmhvdmVyIGgzLCAucHJvZmlsZS1jbGFzcyAuY2FyZDpob3ZlciBpXHJcbntcclxuXHRjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return [{ type: _services_contactus_service__WEBPACK_IMPORTED_MODULE_2__["ContactusService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/adminpage/adminpage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/adminpage/adminpage.component.ts ***!
  \**************************************************/
/*! exports provided: AdminpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminpageComponent", function() { return AdminpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utility_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utility/confirmation/confirmation.component */ "./src/app/utility/confirmation/confirmation.component.ts");
/* harmony import */ var _services_faq_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/faq-service.service */ "./src/app/services/faq-service.service.ts");
/* harmony import */ var _services_adminpage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/adminpage.service */ "./src/app/services/adminpage.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_report_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/report.service */ "./src/app/services/report.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




















const _c0 = ["blogpaginator"];
const _c1 = ["commentpaginator"];
const _c2 = ["FAQpaginator"];
const _c3 = ["Reportpaginator"];
function AdminpageComponent_div_0_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminpageComponent_div_0_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r76); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r75.onSearchClear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminpageComponent_div_0_mat_header_cell_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminpageComponent_div_0_mat_cell_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r78 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _r21.pageIndex * _r21.pageSize + (i_r78 + 1), " ");
} }
function AdminpageComponent_div_0_mat_header_cell_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminpageComponent_div_0_mat_cell_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r79.Title, " ");
} }
function AdminpageComponent_div_0_mat_header_cell_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Author ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminpageComponent_div_0_mat_cell_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r80.Author, " ");
} }
function AdminpageComponent_div_0_mat_header_cell_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminpageComponent_div_0_mat_cell_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r81 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r81.Category, " ");
} }
function AdminpageComponent_div_0_mat_header_cell_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Created Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminpageComponent_div_0_mat_cell_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, element_r82.CreatedTime), " ");
} }
function AdminpageComponent_div_0_mat_header_cell_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminpageComponent_div_0_mat_cell_44_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminpageComponent_div_0_mat_cell_44_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r85); const element_r83 = ctx.$implicit; const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r84.deleteblog(element_r83.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminpageComponent_div_0_mat_footer_cell_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-footer-cell", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Loading Data... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminpageComponent_div_0_mat_header_row_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-row");
} }
function AdminpageComponent_div_0_mat_row_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-row");
} }
const _c4 = function (a0) { return { "hide": a0 }; };
function AdminpageComponent_div_0_mat_footer_row_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-footer-row", 85);
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c4, ctx_r20.dataSource != null));
} }
function AdminpageComponent_div_0_button_57_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminpageComponent_div_0_button_57_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r88); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r87.onSearchClear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminpageComponent_div_0_mat_header_cell_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminpageComponent_div_0_mat_cell_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r90 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _r38.pageIndex * _r38.pageSize + (i_r90 + 1), " ");
} }
function AdminpageComponent_div_0_mat_header_cell_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Comment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminpageComponent_div_0_mat_cell_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r91 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r91.CommentValue, " ");
} }
function AdminpageComponent_div_0_mat_header_cell_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Author ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminpageComponent_div_0_mat_cell_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r92 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r92.Author, " ");
} }
function AdminpageComponent_div_0_mat_header_cell_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Created Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminpageComponent_div_0_mat_cell_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r93 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, element_r93.CreatedTime), " ");
} }
function AdminpageComponent_div_0_mat_header_cell_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminpageComponent_div_0_mat_cell_75_Template(rf, ctx) { if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminpageComponent_div_0_mat_cell_75_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r96); const element_r94 = ctx.$implicit; const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r95.deleteComment(element_r94.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminpageComponent_div_0_mat_footer_cell_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-footer-cell", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Loading Data... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminpageComponent_div_0_mat_header_row_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-row");
} }
function AdminpageComponent_div_0_mat_row_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-row");
} }
function AdminpageComponent_div_0_mat_footer_row_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-footer-row", 85);
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c4, ctx_r37.commentSource != null));
} }
function AdminpageComponent_div_0_button_126_Template(rf, ctx) { if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminpageComponent_div_0_button_126_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r98.onSearchClear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminpageComponent_div_0_mat_header_cell_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminpageComponent_div_0_mat_cell_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r101 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](151);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _r55.pageIndex * _r55.pageSize + (i_r101 + 1), " ");
} }
function AdminpageComponent_div_0_mat_header_cell_134_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " QUESTION ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminpageComponent_div_0_mat_cell_135_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r102 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r102.Question, " ");
} }
function AdminpageComponent_div_0_mat_header_cell_137_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " SOLUTION ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminpageComponent_div_0_mat_cell_138_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r103 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r103.Solution, " ");
} }
function AdminpageComponent_div_0_mat_header_cell_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " VOTE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminpageComponent_div_0_mat_cell_141_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r104 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r104.Vote, " ");
} }
function AdminpageComponent_div_0_mat_header_cell_143_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminpageComponent_div_0_mat_cell_144_Template(rf, ctx) { if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminpageComponent_div_0_mat_cell_144_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r107); const element_r105 = ctx.$implicit; const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r106.editFaq(element_r105.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminpageComponent_div_0_mat_cell_144_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r107); const element_r105 = ctx.$implicit; const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r108.deletefaq(element_r105.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminpageComponent_div_0_mat_footer_cell_146_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-footer-cell", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Loading Data... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminpageComponent_div_0_mat_header_row_147_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-row");
} }
function AdminpageComponent_div_0_mat_row_148_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-row");
} }
function AdminpageComponent_div_0_mat_footer_row_149_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-footer-row", 85);
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c4, ctx_r54.faqSource != null));
} }
function AdminpageComponent_div_0_button_166_Template(rf, ctx) { if (rf & 1) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminpageComponent_div_0_button_166_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r111); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r110.onSearchClear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminpageComponent_div_0_mat_header_cell_188_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminpageComponent_div_0_mat_cell_189_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r113 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](211);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _r74.pageIndex * _r74.pageSize + (i_r113 + 1), " ");
} }
function AdminpageComponent_div_0_mat_header_cell_191_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Content Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminpageComponent_div_0_mat_cell_192_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r114 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r114.ContentType, " ");
} }
function AdminpageComponent_div_0_mat_header_cell_194_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Content Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminpageComponent_div_0_mat_cell_195_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r115 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r115.ContentId, " ");
} }
function AdminpageComponent_div_0_mat_header_cell_197_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Report Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminpageComponent_div_0_mat_cell_198_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r116 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r116.ReportType, " ");
} }
function AdminpageComponent_div_0_mat_header_cell_200_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Reported Count ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminpageComponent_div_0_mat_cell_201_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r117 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r117.ReportedCount, " ");
} }
function AdminpageComponent_div_0_mat_header_cell_203_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminpageComponent_div_0_mat_cell_204_Template(rf, ctx) { if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminpageComponent_div_0_mat_cell_204_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r120); const element_r118 = ctx.$implicit; const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r119.viewContent(element_r118.ContentType, element_r118.ContentId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminpageComponent_div_0_mat_cell_204_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r120); const element_r118 = ctx.$implicit; const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r121.deleteReport(element_r118.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminpageComponent_div_0_mat_cell_204_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r120); const element_r118 = ctx.$implicit; const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r122.deleteContent(element_r118.Id, element_r118.ContentType, element_r118.ContentId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminpageComponent_div_0_mat_footer_cell_206_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-footer-cell", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Loading Data... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminpageComponent_div_0_mat_header_row_207_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-header-row");
} }
function AdminpageComponent_div_0_mat_row_208_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-row");
} }
function AdminpageComponent_div_0_mat_footer_row_209_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-footer-row", 85);
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c4, ctx_r73.reportSource != null));
} }
const _c5 = function () { return ["loading"]; };
const _c6 = function () { return [5, 10, 25, 100]; };
function AdminpageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "User Blogs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "FAQs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Reports");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Error Logs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminpageComponent_div_0_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r125); const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r124.searchKey = $event; })("keyup", function AdminpageComponent_div_0_Template_input_keyup_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r125); const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r126.applyFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AdminpageComponent_div_0_button_23_Template, 3, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-table", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](27, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, AdminpageComponent_div_0_mat_header_cell_28_Template, 2, 0, "mat-header-cell", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, AdminpageComponent_div_0_mat_cell_29_Template, 2, 1, "mat-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](30, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, AdminpageComponent_div_0_mat_header_cell_31_Template, 2, 0, "mat-header-cell", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, AdminpageComponent_div_0_mat_cell_32_Template, 2, 1, "mat-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](33, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, AdminpageComponent_div_0_mat_header_cell_34_Template, 2, 0, "mat-header-cell", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, AdminpageComponent_div_0_mat_cell_35_Template, 2, 1, "mat-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](36, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, AdminpageComponent_div_0_mat_header_cell_37_Template, 2, 0, "mat-header-cell", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, AdminpageComponent_div_0_mat_cell_38_Template, 2, 1, "mat-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](39, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, AdminpageComponent_div_0_mat_header_cell_40_Template, 2, 0, "mat-header-cell", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, AdminpageComponent_div_0_mat_cell_41_Template, 3, 3, "mat-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](42, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, AdminpageComponent_div_0_mat_header_cell_43_Template, 2, 0, "mat-header-cell", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, AdminpageComponent_div_0_mat_cell_44_Template, 3, 0, "mat-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](45, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, AdminpageComponent_div_0_mat_footer_cell_46_Template, 2, 0, "mat-footer-cell", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, AdminpageComponent_div_0_mat_header_row_47_Template, 1, 0, "mat-header-row", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, AdminpageComponent_div_0_mat_row_48_Template, 1, 0, "mat-row", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, AdminpageComponent_div_0_mat_footer_row_49_Template, 1, 3, "mat-footer-row", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "mat-paginator", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminpageComponent_div_0_Template_input_ngModelChange_56_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r125); const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r127.searchKey = $event; })("keyup", function AdminpageComponent_div_0_Template_input_keyup_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r125); const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r128.applyFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, AdminpageComponent_div_0_button_57_Template, 3, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-table", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](61, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, AdminpageComponent_div_0_mat_header_cell_62_Template, 2, 0, "mat-header-cell", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, AdminpageComponent_div_0_mat_cell_63_Template, 2, 1, "mat-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](64, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, AdminpageComponent_div_0_mat_header_cell_65_Template, 2, 0, "mat-header-cell", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, AdminpageComponent_div_0_mat_cell_66_Template, 2, 1, "mat-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](67, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, AdminpageComponent_div_0_mat_header_cell_68_Template, 2, 0, "mat-header-cell", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, AdminpageComponent_div_0_mat_cell_69_Template, 2, 1, "mat-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](70, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, AdminpageComponent_div_0_mat_header_cell_71_Template, 2, 0, "mat-header-cell", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, AdminpageComponent_div_0_mat_cell_72_Template, 3, 3, "mat-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](73, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, AdminpageComponent_div_0_mat_header_cell_74_Template, 2, 0, "mat-header-cell", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, AdminpageComponent_div_0_mat_cell_75_Template, 3, 0, "mat-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](76, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, AdminpageComponent_div_0_mat_footer_cell_77_Template, 2, 0, "mat-footer-cell", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, AdminpageComponent_div_0_mat_header_row_78_Template, 1, 0, "mat-header-row", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, AdminpageComponent_div_0_mat_row_79_Template, 1, 0, "mat-row", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](80, AdminpageComponent_div_0_mat_footer_row_80_Template, 1, 3, "mat-footer-row", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "mat-paginator", 32, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "h4", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Create FAQ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminpageComponent_div_0_Template_button_click_90_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r125); const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r129.WindowReload(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Solution");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "textarea", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminpageComponent_div_0_Template_button_click_103_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r125); const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r130.WindowReload(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminpageComponent_div_0_Template_button_click_105_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r125); const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r131.onSubmitAdd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "SUBMIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "h3", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, " Frequently ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, " Asked Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Create FAQ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminpageComponent_div_0_Template_input_ngModelChange_125_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r125); const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r132.searchKey = $event; })("keyup", function AdminpageComponent_div_0_Template_input_keyup_125_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r125); const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r133.applyFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](126, AdminpageComponent_div_0_button_126_Template, 3, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "mat-table", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](130, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](131, AdminpageComponent_div_0_mat_header_cell_131_Template, 2, 0, "mat-header-cell", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](132, AdminpageComponent_div_0_mat_cell_132_Template, 2, 1, "mat-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](133, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](134, AdminpageComponent_div_0_mat_header_cell_134_Template, 2, 0, "mat-header-cell", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](135, AdminpageComponent_div_0_mat_cell_135_Template, 2, 1, "mat-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](136, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](137, AdminpageComponent_div_0_mat_header_cell_137_Template, 2, 0, "mat-header-cell", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](138, AdminpageComponent_div_0_mat_cell_138_Template, 2, 1, "mat-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](139, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](140, AdminpageComponent_div_0_mat_header_cell_140_Template, 2, 0, "mat-header-cell", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](141, AdminpageComponent_div_0_mat_cell_141_Template, 2, 1, "mat-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](142, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](143, AdminpageComponent_div_0_mat_header_cell_143_Template, 2, 0, "mat-header-cell", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](144, AdminpageComponent_div_0_mat_cell_144_Template, 8, 0, "mat-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](145, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](146, AdminpageComponent_div_0_mat_footer_cell_146_Template, 2, 0, "mat-footer-cell", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](147, AdminpageComponent_div_0_mat_header_row_147_Template, 1, 0, "mat-header-row", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](148, AdminpageComponent_div_0_mat_row_148_Template, 1, 0, "mat-row", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](149, AdminpageComponent_div_0_mat_footer_row_149_Template, 1, 3, "mat-footer-row", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](150, "mat-paginator", 32, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](157, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](158, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "h3", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, " Reported Content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminpageComponent_div_0_Template_input_ngModelChange_165_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r125); const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r134.searchKey = $event; })("keyup", function AdminpageComponent_div_0_Template_input_keyup_165_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r125); const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r135.applyFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](166, AdminpageComponent_div_0_button_166_Template, 3, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "h4", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "Reviewing Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminpageComponent_div_0_Template_button_click_182_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r125); const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r136.deleteComment(ctx_r136.reviewComment.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "mat-table", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](187, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](188, AdminpageComponent_div_0_mat_header_cell_188_Template, 2, 0, "mat-header-cell", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](189, AdminpageComponent_div_0_mat_cell_189_Template, 2, 1, "mat-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](190, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](191, AdminpageComponent_div_0_mat_header_cell_191_Template, 2, 0, "mat-header-cell", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](192, AdminpageComponent_div_0_mat_cell_192_Template, 2, 1, "mat-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](193, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](194, AdminpageComponent_div_0_mat_header_cell_194_Template, 2, 0, "mat-header-cell", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](195, AdminpageComponent_div_0_mat_cell_195_Template, 2, 1, "mat-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](196, 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](197, AdminpageComponent_div_0_mat_header_cell_197_Template, 2, 0, "mat-header-cell", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](198, AdminpageComponent_div_0_mat_cell_198_Template, 2, 1, "mat-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](199, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](200, AdminpageComponent_div_0_mat_header_cell_200_Template, 2, 0, "mat-header-cell", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](201, AdminpageComponent_div_0_mat_cell_201_Template, 2, 1, "mat-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](202, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](203, AdminpageComponent_div_0_mat_header_cell_203_Template, 2, 0, "mat-header-cell", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](204, AdminpageComponent_div_0_mat_cell_204_Template, 12, 0, "mat-cell", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](205, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](206, AdminpageComponent_div_0_mat_footer_cell_206_Template, 2, 0, "mat-footer-cell", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](207, AdminpageComponent_div_0_mat_header_row_207_Template, 1, 0, "mat-header-row", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](208, AdminpageComponent_div_0_mat_row_208_Template, 1, 0, "mat-row", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](209, AdminpageComponent_div_0_mat_footer_row_209_Template, 1, 3, "mat-footer-row", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](210, "mat-paginator", 32, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](217, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](218, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "h3", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, " Error Logs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](221, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](224, "textarea", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.searchKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.searchKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.blogColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r0.blogColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matFooterRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](35, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](36, _c6))("pageSize", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.searchKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.searchKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r0.commentSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.commentColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r0.commentColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matFooterRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](37, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](38, _c6))("pageSize", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.addForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.searchKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.searchKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r0.faqSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.faqColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r0.faqColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matFooterRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](39, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](40, _c6))("pageSize", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.searchKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.searchKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.reviewComment == null ? null : ctx_r0.reviewComment.CommentValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r0.reportSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.reportColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r0.reportColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matFooterRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](41, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](42, _c6))("pageSize", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r0.errorLogs);
} }
function AdminpageComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "You are not authorized to access this URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AdminpageComponent {
    constructor(service, adminservice, authService, report, dialog) {
        this.service = service;
        this.adminservice = adminservice;
        this.authService = authService;
        this.report = report;
        this.dialog = dialog;
        this.blogColumns = ['id', 'title', 'author', 'category', 'time', 'actions'];
        this.commentColumns = ['id', 'comment', 'author', 'time', 'actions'];
        this.faqColumns = ['id', 'question', 'solution', 'vote', 'actions'];
        this.reportColumns = ["id", 'contenttype', 'contentid', 'reporttype', 'reportedcount', 'actions'];
        this.faqList = [];
        this.allBlogs = [];
        this.allComments = [];
        this.allReports = [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](null);
        this.commentSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](null);
        this.faqSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](null);
        this.reportSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](null);
        this.currentUser = false;
        this.refreshfaqList();
        this.getallBlogs();
        this.getallcomments();
        this.getReports();
        this.getErrorLogs();
        let user = this.authService.isAuthenticated().userName;
        if (user == "Legion@R00t")
            this.currentUser = true;
    }
    ngAfterViewInit() {
        // this.dataSource.paginator = this.paginator;
    }
    ngOnInit() {
        // console.log("Oninit",this.dataSource);
        this.addForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            question: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            solution: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null)
        });
    }
    refreshfaqList() {
        this.service.getFAQList().subscribe(data => {
            this.faqList = data;
            this.faqSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.faqList);
            this.faqSource.paginator = this.faqpaginator;
        });
    }
    onSearchClear() {
        this.searchKey = "";
        this.applyFilter();
    }
    applyFilter() {
        this.dataSource.filter = this.searchKey.trim().toLowerCase();
        this.commentSource.filter = this.searchKey.trim().toLowerCase();
        this.faqSource.filter = this.searchKey.trim().toLowerCase();
        this.reportSource.filter = this.searchKey.trim().toLowerCase();
    }
    getallBlogs() {
        this.adminservice.getAllBlogs().subscribe(data => {
            this.allBlogs = data;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.allBlogs);
            this.dataSource.paginator = this.paginator;
        });
    }
    getallcomments() {
        this.adminservice.getAllComments().subscribe(data => {
            this.allComments = data;
            this.commentSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.allComments);
            this.commentSource.paginator = this.commentpaginator;
        });
    }
    deleteblog(id) {
        this.adminservice.deleteblog(id).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { value: accept } = yield sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                icon: 'success',
                title: 'Blog deleted successfully',
                showConfirmButton: false,
                timer: 1500
            });
            if (accept == null)
                window.location.reload();
        }));
    }
    deletefaq(id) {
        this.adminservice.deletefaq(id).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { value: accept } = yield sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                icon: 'success',
                title: 'FAQ deleted successfully',
                showConfirmButton: false,
                timer: 1500
            });
            if (accept == null)
                window.location.reload();
        }));
    }
    deleteComment(id) {
        this.adminservice.deletecomment(id).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { value: accept } = yield sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                icon: 'success',
                title: 'Comment deleted successfully',
                showConfirmButton: false,
                timer: 1500
            });
            if (accept == null)
                window.location.reload();
        }));
    }
    onSubmitAdd() {
        // console.log("Form",this.addForm.value);
        if (this.faqid) {
            this.updateFaq();
        }
        else {
            this.addFaq();
        }
        //window.location.reload();
    }
    addFaq() {
        this.adminservice.addFAQ(this.addForm.value).subscribe((response) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                icon: 'success',
                title: 'FAQ added successfully',
                showConfirmButton: false,
                timer: 1500
            });
        });
    }
    updateFaq() {
        this.adminservice.updateFAQ(this.faqid, this.addForm.value).subscribe(response => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                icon: 'success',
                title: 'FAQ updated successfully',
                showConfirmButton: false,
                timer: 1500
            });
        });
    }
    editFaq(id) {
        this.faqid = id;
        // console.log(this.faqid);
        document.getElementById('editButton').click();
        this.adminservice.getFAQid(this.faqid).subscribe(data => {
            this.abc = data;
            // console.log("Edit data",this.abc);
            this.addForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                question: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](data.Question),
                solution: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](data.Solution)
            });
        });
    }
    WindowReload() {
        window.location.reload();
    }
    getReports() {
        this.report.getReports().subscribe((data) => {
            this.allReports = data;
            this.reportSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.allReports);
            this.reportSource.paginator = this.reportpaginator;
        });
    }
    viewContent(contentType, contentId) {
        if (contentType === "Blog") {
            window.location.href = "/blog/" + contentId;
        }
        else {
            this.adminservice.getComment(contentId).subscribe((data) => {
                this.reviewComment = data;
                document.getElementById('viewCommentModal').click();
            });
        }
    }
    deleteContent(reportId, contentType, contentId) {
        if (contentType === "Blog") {
            const dialogRef = this.dialog.open(_utility_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationComponent"], {
                data: { process: "delete" }
            });
            dialogRef.afterClosed().subscribe(result => {
                if (result == true) {
                    this.report.deleteReport(reportId).subscribe((response) => {
                        this.deleteblog(contentId);
                        window.location.reload();
                    });
                }
            });
        }
        else {
            const dialogRef = this.dialog.open(_utility_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationComponent"], {
                data: { process: "delete" }
            });
            dialogRef.afterClosed().subscribe(result => {
                if (result == true) {
                    this.report.deleteReport(reportId).subscribe((response) => {
                        this.deleteComment(contentId);
                        window.location.reload();
                    });
                }
            });
        }
    }
    deleteReport(Id) {
        this.report.deleteReport(Id).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { value: accept } = yield sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                icon: 'success',
                title: 'No objection applied to the report',
                confirmButtonText: 'Done'
            });
            if (accept) {
                window.location.reload();
            }
        }));
    }
    getErrorLogs() {
        this.adminservice.getErrorLogs().subscribe((file) => {
            this.errorLogs = file;
            // console.log(file);
        });
    }
}
AdminpageComponent.ɵfac = function AdminpageComponent_Factory(t) { return new (t || AdminpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_faq_service_service__WEBPACK_IMPORTED_MODULE_7__["FaqServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_adminpage_service__WEBPACK_IMPORTED_MODULE_8__["AdminpageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_report_service__WEBPACK_IMPORTED_MODULE_10__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"])); };
AdminpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminpageComponent, selectors: [["app-adminpage"]], viewQuery: function AdminpageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.commentpaginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.faqpaginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.reportpaginator = _t.first);
    } }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["nodata", ""], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item"], ["id", "dashboard-tab", "data-toggle", "tab", "href", "#dashboard", "role", "tab", "aria-controls", "dashboard", "aria-selected", "true", 1, "nav-link", "active"], ["id", "comment-tab", "data-toggle", "tab", "href", "#comment", "role", "tab", "aria-controls", "comment", "aria-selected", "false", 1, "nav-link"], ["id", "faq-tab", "data-toggle", "tab", "href", "#faq", "role", "tab", "aria-controls", "faq", "aria-selected", "false", 1, "nav-link"], ["id", "report-tab", "data-toggle", "tab", "href", "#report", "role", "tab", "aria-controls", "report", "aria-selected", "false", 1, "nav-link"], ["id", "debug-tab", "data-toggle", "tab", "href", "#debug", "role", "tab", "aria-controls", "debug", "aria-selected", "false", 1, "nav-link"], ["id", "myTabContent", 1, "tab-content"], ["id", "dashboard", "role", "tabpanel", "aria-labelledby", "dashboard-tab", 1, "tab-pane", "fade", "show", "active"], [1, "container", "Outerbody", "mt-5", "mb-5"], [1, "search-div", "container-fluid"], ["floatLabel", "never", 1, "search-form-field"], ["matInput", "", "placeholder", "Search", "autocomplete", "off", 3, "ngModel", "ngModelChange", "keyup"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], [1, "example-container", "mat-elevation-z8", 2, "margin", "15px"], [3, "dataSource"], ["table", ""], ["matColumnDef", "id"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "title"], ["matColumnDef", "author"], ["matColumnDef", "category"], ["matColumnDef", "time"], ["matColumnDef", "actions"], ["matColumnDef", "loading"], ["colspan", "6", 4, "matFooterCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "ngClass", 4, "matFooterRowDef"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "pageSize"], ["blogpaginator", ""], ["id", "comment", "role", "tabpanel", "aria-labelledby", "comment-tab", 1, "tab-pane", "fade"], ["matColumnDef", "comment"], ["commentpaginator", ""], ["id", "faq", "role", "tabpanel", "aria-labelledby", "faq-tab", 1, "tab-pane", "fade"], ["id", "myModal", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close", 3, "click"], [1, "form", 3, "formGroup"], [1, "modal-body"], [1, "form-group"], ["for", "question"], ["type", "text", "formControlName", "question", "placeholder", "Enter your question", 1, "form-control"], ["for", "solution"], ["formControlName", "solution", "placeholder", "Type your answer", "ng-minlength", "4", "ng-maxlength", "150", "cols", "20", "required", "", 1, "form-control"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], ["type", "submit", 1, "btn", "btn-danger", 3, "click"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-12", "col-sm-8", "col-lg-6", "text-center"], ["data-wow-delay", "0.2s", 1, "section_heading", "text-center", "wow", "fadeInUp", 2, "visibility", "visible", "animation-delay", "0.2s", "animation-name", "fadeInUp"], [2, "text-align", "center", "color", "orange"], [2, "color", "orange"], [1, "line"], ["mat-raised-button", "", "type", "button", "data-toggle", "modal", "id", "editButton", "data-target", "#myModal", 1, "btn", "btn-danger"], [1, "material-icons"], ["matColumnDef", "question"], ["matColumnDef", "solution"], ["matColumnDef", "vote"], ["FAQpaginator", ""], ["id", "report", "role", "tabpanel", "aria-labelledby", "report-tab", 1, "tab-pane", "fade"], ["id", "commentData", "role", "dialog", 1, "modal", "fade"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "form"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["matColumnDef", "contenttype"], ["matColumnDef", "contentid"], ["matColumnDef", "reporttype"], ["matColumnDef", "reportedcount"], ["Reportpaginator", ""], ["id", "debug", "role", "tabpanel", "aria-labelledby", "debug-tab", 1, "tab-pane", "fade"], [1, "container-fluid", "Outerbody", "mt-5", "mb-5"], ["readonly", "", "rows", "100", 1, "p-3", 2, "font-size", "small", 3, "value"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], ["type", "button", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash-o", 2, "font-size", "20px", "color", "red"], ["colspan", "6"], [3, "ngClass"], [1, "list-inline", "m-3"], [1, "list-inline-item"], ["aria-hidden", "true", 1, "fa", "fa-pencil", 2, "font-size", "20px", "color", "red"], ["aria-hidden", "true", 1, "fa", "fa-eye", 2, "font-size", "20px", "color", "blue"], ["hidden", "", "type", "button", "data-toggle", "modal", "id", "viewCommentModal", "data-target", "#commentData"], ["aria-hidden", "true", 1, "fa", "fa-check-circle-o", 2, "font-size", "20px", "color", "green"], [1, "text-center", "mt-3"]], template: function AdminpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AdminpageComponent_div_0_Template, 225, 43, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdminpageComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentUser)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatFooterRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatFooterRow"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]], styles: ["h2[_ngcontent-%COMP%] {\r\n    margin: 20px auto 80px;\r\n    font-size: 38px;\r\n    font-weight: 300;\r\n    text-align: center;\r\n    letter-spacing: 2px;\r\n    line-height: 1.5;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n\r\n  \r\n\r\n\r\ncontainer-fluid[_ngcontent-%COMP%]   body-content[_ngcontent-%COMP%]{\r\n    background-color:white;\r\n}\r\n\r\n\r\n  \r\n\r\n\r\ndetails[_ngcontent-%COMP%] {\r\n        width: 75%;\r\n        min-height: 5px;\r\n        max-width: 700px;\r\n        padding: 30px 45px 30px 45px;\r\n        margin: 15px 250px auto;\r\n        position: relative;\r\n        font-size: 22px;\r\n        border: 2px solid rgba(0,0,0,.1);\r\n        border-radius: 15px;\r\n        box-sizing: content-box;\r\n        transition: all .3s;\r\n    }\r\n\r\n\r\n  \r\n\r\n\r\ndetails[_ngcontent-%COMP%]    + details[_ngcontent-%COMP%] {\r\n            margin-top: 20px;\r\n        }\r\n\r\n\r\n  \r\n\r\n\r\ndetails[open][_ngcontent-%COMP%] {\r\n            outline: none;\r\n            border: 1px solid orange;\r\n            box-shadow: 0px 0px 12px orange;\r\n            -moz-box-shadow: 0px 0px 12px orange;\r\n            -webkit-box-shadow: 0px 0px 12px orange;\r\n        }\r\n\r\n\r\n  \r\n\r\n\r\ndetails[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n            color: #96999d;\r\n            font-weight: 300;\r\n        }\r\n\r\n\r\n  \r\n\r\n\r\nsummary[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        font-weight: 500;\r\n        cursor: pointer;\r\n    }\r\n\r\n\r\n  \r\n\r\n\r\nsummary[_ngcontent-%COMP%]:focus {\r\n            outline: none;\r\n            \r\n        }\r\n\r\n\r\n  \r\n\r\n\r\nsummary[_ngcontent-%COMP%]:focus::after {\r\n                outline: none;\r\n                border: 1px solid orange;\r\n                box-shadow: 0px 0px 12px orange;\r\n                -moz-box-shadow: 0px 0px 12px orange;\r\n                -webkit-box-shadow: 0px 0px 12px orange;\r\n                \r\n            }\r\n\r\n\r\n  \r\n\r\n\r\nsummary[_ngcontent-%COMP%]::-webkit-details-marker {\r\n            display: none\r\n        }\r\n\r\n\r\n  \r\n\r\n\r\n.control-icon[_ngcontent-%COMP%] {\r\n        fill: rebeccapurple;\r\n        transition: .3s ease;\r\n        pointer-events: none;\r\n    }\r\n\r\n\r\n  \r\n\r\n\r\n.control-icon-close[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n\r\n\r\n  \r\n\r\n\r\ndetails[open][_ngcontent-%COMP%]   .control-icon-close[_ngcontent-%COMP%] {\r\n        display: initial;\r\n        transition: .3s ease;\r\n    }\r\n\r\n\r\n  \r\n\r\n\r\ndetails[open][_ngcontent-%COMP%]   .control-icon-expand[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n\r\n\r\n  \r\n\r\n\r\n@media screen and (max-width: 650px) {\r\n    details[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        display: block;\r\n        margin: 10px 10px auto;\r\n    }}\r\n\r\n\r\n  \r\n\r\n\r\n\r\n\r\n\r\n  \r\n\r\n\r\n.Outerbody[_ngcontent-%COMP%]{\r\n    border: 2px solid gray;\r\n\tborder-radius: 4px;\r\n\t-moz-border-radius: 4px;\r\n\t-webkit-border-radius: 4px;\r\n}\r\n\r\n\r\n  \r\n\r\n\r\n.Outerbody[_ngcontent-%COMP%]:hover{\r\n    outline: none;\r\n\tborder: 1px solid orange;\r\n\tbox-shadow: 0px 0px 12px orange;\r\n\t-moz-box-shadow: 0px 0px 12px orange;\r\n\t-webkit-box-shadow: 0px 0px 12px orange;\r\n}\r\n\r\n\r\n  \r\n\r\n\r\n\r\n\r\n\r\n  \r\n\r\n\r\n.example-container[_ngcontent-%COMP%] \r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-height: 500px;\r\n    min-width: 300px;\r\n}\r\n\r\n\r\n  \r\n\r\n\r\n.mat-table[_ngcontent-%COMP%] \r\n{\r\noverflow: auto;\r\nmax-height: 500px;\r\n}\r\n\r\n\r\n  \r\n\r\n\r\n.mat-header-cell.mat-sort-header-sorted[_ngcontent-%COMP%] \r\n{\r\n    color: black;\r\n}\r\n\r\n\r\n  \r\n\r\n\r\n.hide[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n\r\n  \r\n\r\n\r\nmat-footer-row[_ngcontent-%COMP%]   mat-footer-cell[_ngcontent-%COMP%]\r\n{\r\n    justify-content: center;\r\n    font-style: italic;\r\n}\r\n\r\n\r\n  \r\n\r\n\r\n.search-div[_ngcontent-%COMP%]\r\n{\r\n    margin: 10px;\r\n}\r\n\r\n\r\n  \r\n\r\n\r\n.search-form-field[_ngcontent-%COMP%]\r\n{\r\n    width: 60%;\r\n    margin-left: 10px;\r\n    padding: 5px 10px;\r\n    background-color: #f5f5f5;\r\n    border-radius: 5px;\r\n}\r\n\r\n\r\n  \r\n\r\n\r\n.search-form-field[_ngcontent-%COMP%]   div.mat-form-field-underline[_ngcontent-%COMP%]\r\n{\r\n    display: none;\r\n}\r\n\r\n\r\n  \r\n\r\n\r\n.search-form-field[_ngcontent-%COMP%]   div.mat-form-field-infix[_ngcontent-%COMP%]\r\n{\r\n    border-top: 0px;\r\n}\r\n\r\n\r\n  \r\n\r\n\r\n.search-form-field[_ngcontent-%COMP%]   div.mat-form-field-wrapper[_ngcontent-%COMP%]\r\n{\r\n    padding-bottom: 0px;\r\n}\r\n\r\n\r\n  \r\n\r\n\r\n.search-form-field[_ngcontent-%COMP%]   div.mat-form-field-suffix[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]\r\n{\r\n    height: 32px;\r\n    width: 32px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wYWdlL2FkbWlucGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBc0JLOzs7Ozs7QUFNTDtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7Ozs7O0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7Ozs7OztBQUdJO1FBQ0ksVUFBVTtRQUNWLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsNEJBQTRCO1FBQzVCLHVCQUF1QjtRQUN2QixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGdDQUFnQztRQUNoQyxtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtJQUN2Qjs7Ozs7O0FBRUk7WUFDSSxnQkFBZ0I7UUFDcEI7Ozs7OztBQUVBO1lBQ0ksYUFBYTtZQUNiLHdCQUF3QjtZQUN4QiwrQkFBK0I7WUFDL0Isb0NBQW9DO1lBQ3BDLHVDQUF1QztRQUMzQzs7Ozs7O0FBRUE7WUFDSSxjQUFjO1lBQ2QsZ0JBQWdCO1FBQ3BCOzs7Ozs7QUFFSjtRQUNJLGFBQWE7UUFDYiw4QkFBOEI7UUFDOUIsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixlQUFlO0lBQ25COzs7Ozs7QUFFSTtZQUNJLGFBQWE7O1FBRWpCOzs7Ozs7QUFFSTtnQkFDSSxhQUFhO2dCQUNiLHdCQUF3QjtnQkFDeEIsK0JBQStCO2dCQUMvQixvQ0FBb0M7Z0JBQ3BDLHVDQUF1QztnQkFDdkMsMkNBQTJDO1lBQy9DOzs7Ozs7QUFFSjtZQUNJO1FBQ0o7Ozs7OztBQUVKO1FBQ0ksbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUNwQixvQkFBb0I7SUFDeEI7Ozs7OztBQUVBO1FBQ0ksYUFBYTtJQUNqQjs7Ozs7O0FBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsb0JBQW9CO0lBQ3hCOzs7Ozs7QUFFQTtRQUNJLGFBQWE7SUFDakI7Ozs7OztBQUNKO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsY0FBYztRQUNkLHNCQUFzQjtJQUMxQixDQUFDOzs7Ozs7QUFFTCxpRUFBaUU7Ozs7OztBQUNqRTtJQUNJLHNCQUFzQjtDQUN6QixrQkFBa0I7Q0FDbEIsdUJBQXVCO0NBQ3ZCLDBCQUEwQjtBQUMzQjs7Ozs7O0FBQ0E7SUFDSSxhQUFhO0NBQ2hCLHdCQUF3QjtDQUN4QiwrQkFBK0I7Q0FDL0Isb0NBQW9DO0NBQ3BDLHVDQUF1QztBQUN4Qzs7Ozs7O0FBRUEsOEVBQThFOzs7Ozs7QUFDOUU7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOzs7Ozs7QUFFQTs7QUFFQSxjQUFjO0FBQ2QsaUJBQWlCO0FBQ2pCOzs7Ozs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOzs7Ozs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOzs7Ozs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOzs7Ozs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOzs7Ozs7QUFFQTs7SUFFSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOzs7Ozs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOzs7Ozs7QUFFQTs7SUFFSSxlQUFlO0FBQ25COzs7Ozs7QUFFQTs7SUFFSSxtQkFBbUI7QUFDdkI7Ozs7OztBQUVBOztJQUVJLFlBQVk7SUFDWixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbnBhZ2UvYWRtaW5wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcclxuXHJcbiN6b29tLWZhZGUge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1zLXRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcclxuICAgIC13ZWJraXQtdGV4dC1zaGFkb3c6IDAgMCA1MHB4IHRyYW5zcGFyZW50O1xyXG4gICAgLW1vei10ZXh0LXNoYWRvdzogMCAwIDUwcHggdHJhbnNwYXJlbnQ7XHJcbiAgICAtbXMtdGV4dC1zaGFkb3c6IDAgMCA1MHB4IHRyYW5zcGFyZW50O1xyXG4gICAgLW8tdGV4dC1zaGFkb3c6IDAgMCA1MHB4IHRyYW5zcGFyZW50O1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1MHB4IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIH1cclxuICAjem9vbS1mYWRlOmhvdmVyIHtcclxuICAgIC13ZWJraXQtdGV4dC1zaGFkb3c6IDAgMCAwcHggYmxhY2s7XHJcbiAgICAtbW96LXRleHQtc2hhZG93OiAwIDAgMHB4IGJsYWNrO1xyXG4gICAgLW1zLXRleHQtc2hhZG93OiAwIDAgMHB4IGJsYWNrO1xyXG4gICAgLW8tdGV4dC1zaGFkb3c6IDAgMCAwcHggYmxhY2s7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDBweCBibGFjaztcclxuICB9ICovXHJcblxyXG5cclxuICBcclxuXHJcblxyXG5oMiB7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byA4MHB4O1xyXG4gICAgZm9udC1zaXplOiAzOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5jb250YWluZXItZmx1aWQgYm9keS1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuXHJcbiAgICBkZXRhaWxzIHtcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDVweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggNDVweCAzMHB4IDQ1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDI1MHB4IGF1dG87XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsMCwwLC4xKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICB9XHJcblxyXG4gICAgICAgIGRldGFpbHMgKyBkZXRhaWxzIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRldGFpbHNbb3Blbl0ge1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCBvcmFuZ2U7XHJcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IG9yYW5nZTtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEycHggb3JhbmdlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGV0YWlscyBwIHtcclxuICAgICAgICAgICAgY29sb3I6ICM5Njk5OWQ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIHN1bW1hcnkge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgICAgIHN1bW1hcnk6Zm9jdXMge1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdW1tYXJ5OmZvY3VzOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgb3JhbmdlO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IG9yYW5nZTtcclxuICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IG9yYW5nZTtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IG9yYW5nZTtcclxuICAgICAgICAgICAgICAgIC8qLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDhweCAjN2JjMWY3OyovXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgc3VtbWFyeTo6LXdlYmtpdC1kZXRhaWxzLW1hcmtlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgICAgICB9XHJcblxyXG4gICAgLmNvbnRyb2wtaWNvbiB7XHJcbiAgICAgICAgZmlsbDogcmViZWNjYXB1cnBsZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZTtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuY29udHJvbC1pY29uLWNsb3NlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIGRldGFpbHNbb3Blbl0gLmNvbnRyb2wtaWNvbi1jbG9zZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5pdGlhbDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZTtcclxuICAgIH1cclxuXHJcbiAgICBkZXRhaWxzW29wZW5dIC5jb250cm9sLWljb24tZXhwYW5kIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgZGV0YWlscyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHggYXV0bztcclxuICAgIH19XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tQkxPRyBUQUIgQ1NTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLk91dGVyYm9keXtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5PdXRlcmJvZHk6aG92ZXJ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIG9yYW5nZTtcclxuXHRib3gtc2hhZG93OiAwcHggMHB4IDEycHggb3JhbmdlO1xyXG5cdC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IG9yYW5nZTtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTJweCBvcmFuZ2U7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQkxPRyBUQUIgVEFCTEUgQ1NTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLmV4YW1wbGUtY29udGFpbmVyIFxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxufVxyXG4gIFxyXG4ubWF0LXRhYmxlIFxyXG57XHJcbm92ZXJmbG93OiBhdXRvO1xyXG5tYXgtaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLm1hdC1oZWFkZXItY2VsbC5tYXQtc29ydC1oZWFkZXItc29ydGVkIFxyXG57XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5oaWRlXHJcbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbm1hdC1mb290ZXItcm93IG1hdC1mb290ZXItY2VsbFxyXG57XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLnNlYXJjaC1kaXZcclxue1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWZvcm0tZmllbGRcclxue1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWZvcm0tZmllbGQgZGl2Lm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZVxyXG57XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2VhcmNoLWZvcm0tZmllbGQgZGl2Lm1hdC1mb3JtLWZpZWxkLWluZml4XHJcbntcclxuICAgIGJvcmRlci10b3A6IDBweDtcclxufVxyXG5cclxuLnNlYXJjaC1mb3JtLWZpZWxkIGRpdi5tYXQtZm9ybS1maWVsZC13cmFwcGVyXHJcbntcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtZm9ybS1maWVsZCBkaXYubWF0LWZvcm0tZmllbGQtc3VmZml4IGJ1dHRvblxyXG57XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICB3aWR0aDogMzJweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdminpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-adminpage',
                templateUrl: './adminpage.component.html',
                styleUrls: ['./adminpage.component.css']
            }]
    }], function () { return [{ type: _services_faq_service_service__WEBPACK_IMPORTED_MODULE_7__["FaqServiceService"] }, { type: _services_adminpage_service__WEBPACK_IMPORTED_MODULE_8__["AdminpageService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] }, { type: _services_report_service__WEBPACK_IMPORTED_MODULE_10__["ReportService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['blogpaginator']
        }], commentpaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['commentpaginator']
        }], faqpaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['FAQpaginator']
        }], reportpaginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['Reportpaginator']
        }] }); })();


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
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _adminpage_adminpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adminpage/adminpage.component */ "./src/app/adminpage/adminpage.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blogs/blogs.component */ "./src/app/blogs/blogs.component.ts");
/* harmony import */ var _create_blog_create_blog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-blog/create-blog.component */ "./src/app/create-blog/create-blog.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./public-profile/public-profile.component */ "./src/app/public-profile/public-profile.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");


















const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: "blogs", component: _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_5__["BlogsComponent"] },
    { path: "register", component: _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"] },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
    { path: "about", component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: "faq", component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_8__["FaqComponent"] },
    { path: "publicprofile/:userName", component: _public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_13__["PublicProfileComponent"] },
    { path: "editprofile", component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]] },
    { path: "dashboard", component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]] },
    { path: "blog/:Id", component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_4__["BlogComponent"] },
    { path: "create", component: _create_blog_create_blog_component__WEBPACK_IMPORTED_MODULE_6__["CreateBlogComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]] },
    { path: "edit/:Id", component: _create_blog_create_blog_component__WEBPACK_IMPORTED_MODULE_6__["CreateBlogComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]] },
    { path: "adminpage", component: _adminpage_adminpage_component__WEBPACK_IMPORTED_MODULE_3__["AdminpageComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]] },
    // {path:"404", component: PageNotFoundComponent},
    { path: "**", component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"] }
];
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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");






class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.title = 'Bloggle';
        this.authService.autoLogin();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "container-fluid", "body-content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


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
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blogs/blogs.component */ "./src/app/blogs/blogs.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./public-profile/public-profile.component */ "./src/app/public-profile/public-profile.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _bookmarks_bookmarks_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bookmarks/bookmarks.component */ "./src/app/bookmarks/bookmarks.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _services_material_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/material.module */ "./src/app/services/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/auth-interceptor.service */ "./src/app/services/auth-interceptor.service.ts");
/* harmony import */ var _category_x_category_x_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./category-x/category-x.component */ "./src/app/category-x/category-x.component.ts");
/* harmony import */ var _create_blog_create_blog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./create-blog/create-blog.component */ "./src/app/create-blog/create-blog.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/__ivy_ngcc__/fesm2015/ngx-quill.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_contactus_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/contactus.service */ "./src/app/services/contactus.service.ts");
/* harmony import */ var _adminpage_adminpage_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./adminpage/adminpage.component */ "./src/app/adminpage/adminpage.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _utility_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./utility/confirmation/confirmation.component */ "./src/app/utility/confirmation/confirmation.component.ts");
/* harmony import */ var _utility_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./utility/alert-dialog/alert-dialog.component */ "./src/app/utility/alert-dialog/alert-dialog.component.ts");
/* harmony import */ var _utility_report_content_report_content_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./utility/report-content/report-content.component */ "./src/app/utility/report-content/report-content.component.ts");
/* harmony import */ var ngx_emoj__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ngx-emoj */ "./node_modules/ngx-emoj/__ivy_ngcc__/fesm2015/ngx-emoj.js");










































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HTTP_INTERCEPTORS"],
            useClass: _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_22__["AuthInterceptorService"],
            multi: true
        },
        _services_contactus_service__WEBPACK_IMPORTED_MODULE_30__["ContactusService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
            _services_material_module__WEBPACK_IMPORTED_MODULE_19__["MaterialModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_25__["NgxPaginationModule"],
            ngx_quill__WEBPACK_IMPORTED_MODULE_26__["QuillModule"].forRoot(),
            _angular_fire__WEBPACK_IMPORTED_MODULE_27__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_29__["environment"].firebase),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_28__["AngularFireDatabaseModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_33__["MatTableModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"],
            ngx_emoj__WEBPACK_IMPORTED_MODULE_38__["NgxEmojModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_8__["BlogsComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
        _faq_faq_component__WEBPACK_IMPORTED_MODULE_10__["FaqComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
        _public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_12__["PublicProfileComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
        _bookmarks_bookmarks_component__WEBPACK_IMPORTED_MODULE_16__["BookmarksComponent"],
        _blog_blog_component__WEBPACK_IMPORTED_MODULE_17__["BlogComponent"],
        _category_x_category_x_component__WEBPACK_IMPORTED_MODULE_23__["CategoryXComponent"],
        _create_blog_create_blog_component__WEBPACK_IMPORTED_MODULE_24__["CreateBlogComponent"],
        _adminpage_adminpage_component__WEBPACK_IMPORTED_MODULE_31__["AdminpageComponent"],
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_32__["PageNotFoundComponent"],
        _utility_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_35__["ConfirmationComponent"],
        _utility_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_36__["AlertDialogComponent"],
        _utility_report_content_report_content_component__WEBPACK_IMPORTED_MODULE_37__["ReportContentComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
        _services_material_module__WEBPACK_IMPORTED_MODULE_19__["MaterialModule"],
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_25__["NgxPaginationModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_26__["QuillModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_27__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_28__["AngularFireDatabaseModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_33__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"],
        ngx_emoj__WEBPACK_IMPORTED_MODULE_38__["NgxEmojModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_8__["BlogsComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                    _faq_faq_component__WEBPACK_IMPORTED_MODULE_10__["FaqComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                    _public_profile_public_profile_component__WEBPACK_IMPORTED_MODULE_12__["PublicProfileComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                    _bookmarks_bookmarks_component__WEBPACK_IMPORTED_MODULE_16__["BookmarksComponent"],
                    _blog_blog_component__WEBPACK_IMPORTED_MODULE_17__["BlogComponent"],
                    _category_x_category_x_component__WEBPACK_IMPORTED_MODULE_23__["CategoryXComponent"],
                    _create_blog_create_blog_component__WEBPACK_IMPORTED_MODULE_24__["CreateBlogComponent"],
                    _adminpage_adminpage_component__WEBPACK_IMPORTED_MODULE_31__["AdminpageComponent"],
                    _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_32__["PageNotFoundComponent"],
                    _utility_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_35__["ConfirmationComponent"],
                    _utility_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_36__["AlertDialogComponent"],
                    _utility_report_content_report_content_component__WEBPACK_IMPORTED_MODULE_37__["ReportContentComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
                    _services_material_module__WEBPACK_IMPORTED_MODULE_19__["MaterialModule"],
                    ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_25__["NgxPaginationModule"],
                    ngx_quill__WEBPACK_IMPORTED_MODULE_26__["QuillModule"].forRoot(),
                    _angular_fire__WEBPACK_IMPORTED_MODULE_27__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_29__["environment"].firebase),
                    _angular_fire_database__WEBPACK_IMPORTED_MODULE_28__["AngularFireDatabaseModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_33__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"],
                    ngx_emoj__WEBPACK_IMPORTED_MODULE_38__["NgxEmojModule"]
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HTTP_INTERCEPTORS"],
                        useClass: _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_22__["AuthInterceptorService"],
                        multi: true
                    },
                    _services_contactus_service__WEBPACK_IMPORTED_MODULE_30__["ContactusService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _utility_darkmode_modeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility/darkmode/modeConfig */ "./src/app/utility/darkmode/modeConfig.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utility_report_content_report_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/report-content/report-content.component */ "./src/app/utility/report-content/report-content.component.ts");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/blog.service */ "./src/app/services/blog.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _services_toxicity_filter_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/toxicity-filter.service */ "./src/app/services/toxicity-filter.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var ngx_emoj__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-emoj */ "./node_modules/ngx-emoj/__ivy_ngcc__/fesm2015/ngx-emoj.js");















function BlogComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/edit/", ctx_r0.singleBlog.Id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function BlogComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogComponent_div_21_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.addlike(ctx_r8.singleBlog.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogComponent_div_21_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.addBookmark(ctx_r10.singleBlog.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogComponent_div_21_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.reportContent("Blog", ctx_r11.singleBlog.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "heart_", ctx_r1.singleBlog.Id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "like_", ctx_r1.singleBlog.Id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", ctx_r1.singleBlog.Likes, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "bookmark_", ctx_r1.singleBlog.Id, "");
} }
function BlogComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r12.CategoryName);
} }
function BlogComponent_h2_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Count( ", ctx_r3.singleBlog.CommentsNavigator == null ? null : ctx_r3.singleBlog.CommentsNavigator.length, " )");
} }
function BlogComponent_h2_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Be the first to comment here!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BlogComponent_div_36_i_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 57);
} }
function BlogComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogComponent_div_36_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const comment_r13 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.reportContent("Comment", comment_r13.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogComponent_div_36_Template_a_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const comment_r13 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.deleting(comment_r13.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, BlogComponent_div_36_i_17_Template, 1, 0, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r13 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/publicprofile/", ctx_r5.singleBlog.Author, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r13.CreatedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 5, comment_r13.CreatedTime, "MMM d, y h:mm a"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r13.CommentValue, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.CurrentUser.userName == comment_r13.CreatedBy);
} }
const _c0 = function () { return { x: "0px", y: "0px" }; };
const _c1 = function () { return { x: "40px", y: "40px" }; };
const _c2 = function (a2, a3, a14) { return { martShowHeader: true, martShowFooter: true, martHeaderPadding: a2, martFooterPadding: a3, martHeaderBG: "#e3e7e8", martFooterBG: "#e3e7e8", martBG: "#ebeff2", martCategoryColor: "#94a0a6", martCategoryColorActive: "#455a64", martActiveCategoryIndicatorColor: "#00897b", martEmojiFontSize: "150%", martCategoryFontSize: "20px", martBorderRadius: "10px", martActiveCategoryIndicatorHeight: "4px", martEmojiPadding: a14 }; };
function BlogComponent_ngx_emoj_44_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-emoj", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onemojipick", function BlogComponent_ngx_emoj_44_Template_ngx_emoj_onemojipick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.handleEmoji($event); })("onchardelete", function BlogComponent_ngx_emoj_44_Template_ngx_emoj_onchardelete_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.handleCharDelete($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1)))("width", "35vw")("height", "50vh");
} }
function BlogComponent_button_46_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogComponent_button_46_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
//making content image stable.
class BlogComponent {
    constructor(service, authService, route, titleService, metaTagService, location, toxicity, dialog) {
        this.service = service;
        this.authService = authService;
        this.route = route;
        this.titleService = titleService;
        this.metaTagService = metaTagService;
        this.location = location;
        this.toxicity = toxicity;
        this.dialog = dialog;
        this.AllCategories = [];
        this.modeCounter = 0;
        this.toggleEmoji = false;
        this.BlogId = this.route.snapshot.paramMap.get("Id").split("-")[0];
        //console.log(this.BlogId);
        this.singleBlog = {};
        this.CurrentUser = this.authService.isAuthenticated();
        // console.log(this.CurrentUser);
        this.AddComment = {};
        this.darkMode = new _utility_darkmode_modeConfig__WEBPACK_IMPORTED_MODULE_2__["DarkModeConfig"]();
    }
    ngOnInit() {
        // this.BlogId=this.route.snapshot.paramMap.get("Id").split("-")[0];
        // Single Blog
        this.SingleBlogLoaded(this.BlogId);
        this.commentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            CommentValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("")
        });
        this.service.addViews(this.BlogId).subscribe();
        this.RefreshCategory();
    }
    ngAfterViewInit() {
        var mode = this.darkMode.getCookie('darkmode');
        setTimeout(() => {
            if (mode === "true") {
                // (<HTMLInputElement>document.getElementById('mode')).checked = true;
                this.darkMode.darkModeToggler(true);
            }
            else {
                // (<HTMLInputElement>document.getElementById('mode')).checked = false;
                this.darkMode.darkModeToggler(false);
            }
        });
    }
    ngAfterViewChecked() {
        var mode = this.darkMode.getCookie('darkmode');
        setTimeout(() => {
            if (mode === "true") {
                this.darkMode.darkModeToggler(true);
            }
            else {
                this.darkMode.darkModeToggler(false);
            }
        });
    }
    SingleBlogLoaded(Id) {
        this.service.getSingleBlog(Id).subscribe(data => {
            this.singleBlog = data;
            document.getElementById("contentValue").innerHTML = this.singleBlog.Content;
            this.service.ImageAdder(this.singleBlog);
            //Meta tags for SEO
            this.titleService.setTitle("Bloggle -" + this.singleBlog.Title);
            this.metaTagService.addTags([
                { name: "description", content: this.singleBlog.Subtitle },
                { name: "author", content: this.singleBlog.Author },
                { name: "robots", content: "index,follow" },
                { name: "keywords", content: this.singleBlog.CategoryNavigator.CategoryName },
                { httpEquiv: 'Content-Type', content: "text/html", charset: "UTF-8" }
            ]);
            this.location.replaceState("/blog/" + this.BlogId + "-" + (this.singleBlog.Title).replaceAll(" ", "-"));
            //console.log(this.singleBlog.Content);
            $(document).ready(function () {
                $("#contentValue").val($(this).find('p>img').css({
                    'width': '100%',
                    'height': '300px'
                }), $(this).find('iframe').css({
                    'width': '100%',
                    'height': '300px'
                }));
            });
        });
    }
    PostComments() {
        this.toxicity.analyseContent(this.commentForm.value.CommentValue).subscribe((response) => {
            this.toxic = response.attributeScores.TOXICITY.summaryScore.value;
            if (this.toxic >= 0.5) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    title: 'Warning!',
                    text: "You are trying to post a toxic comment, which is prohibited. If this action is repeated, you will be banned",
                    icon: 'warning',
                    confirmButtonText: 'Close'
                });
                this.commentForm.reset();
            }
            else {
                this.AddComment = {
                    "CommentValue": this.commentForm.value.CommentValue,
                    "BlogId": this.BlogId,
                    "CreatedBy": this.CurrentUser.userName,
                    "CreatedTime": new Date()
                };
                this.service.UpdateComments(this.AddComment).subscribe(data => {
                    window.location.reload();
                });
            }
        });
    }
    onSubmit() {
        this.PostComments();
    }
    RefreshCategory() {
        this.service.getAllCategories().subscribe(data => this.AllCategories = data);
    }
    addlike(blogId) {
        let audio = new Audio();
        audio.src = '/assets/shared/like_sound.mp3';
        audio.load();
        var likeCookie = this.getCookie("Like_" + blogId);
        if (likeCookie == "true")
            return;
        this.service.updateLike(blogId).subscribe((data) => {
            audio.play();
            document.getElementById("heart_" + blogId).setAttribute("class", "fa fa-lg fa-heart");
            document.getElementById("heart_" + blogId).setAttribute("style", "color:red");
            var like = document.getElementById("like_" + blogId);
            like.innerText = " " + (parseInt(like.innerText) + 1).toString();
            document.cookie = "Like_" + blogId + "=true";
            // console.log("done");
        });
    }
    getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    addBookmark(blogId) {
        let currentUser = this.authService.isAuthenticated().userName;
        var bookmarkCookie = this.getCookie("Bookmark_" + blogId + "_" + currentUser);
        if (bookmarkCookie == "true")
            return;
        this.service.updateBookmark(blogId, currentUser).subscribe((data) => {
            document.getElementById("bookmark_" + blogId).setAttribute("class", "fa fa-lg fa-bookmark");
            document.getElementById("bookmark_" + blogId).setAttribute("style", "color:blue");
            document.cookie = "Bookmark_" + blogId + "_" + currentUser + "=true";
            // console.log("done");
        });
    }
    deleting(id) {
        this.service.deleteComment(id).subscribe();
        window.location.reload();
    }
    reportContent(contentType, id) {
        const dialogRef = this.dialog.open(_utility_report_content_report_content_component__WEBPACK_IMPORTED_MODULE_4__["ReportContentComponent"], {
            width: '500px',
            data: {
                ContentType: contentType,
                ContentId: id,
                Title: this.singleBlog.Title
            },
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
    toggleEmojiState() {
        this.toggleEmoji = !this.toggleEmoji;
    }
    handleEmoji(e) {
        this.commentForm.value.CommentValue += e.char;
        console.log('Emoji Name', this.commentForm.value.CommentValue);
    }
    handleCharDelete(e) {
        if (this.commentForm.value.CommentValue.length > 0) {
            this.commentForm.value.CommentValue = this.commentForm.value.CommentValue.substr(0, this.commentForm.value.CommentValue.length - 2);
        }
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_blog_service__WEBPACK_IMPORTED_MODULE_5__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_toxicity_filter_service__WEBPACK_IMPORTED_MODULE_10__["ToxicityFilterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"])); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 47, vars: 20, consts: [[1, "singleBlog"], [1, "card", "bg-dark", "text-white"], [1, "card-img", 2, "opacity", "0.5", 3, "src", "alt"], [1, "card-image-overlay"], [1, "card-title", 2, "font-weight", "bold"], [3, "href", 4, "ngIf"], ["id", "testbutton", 3, "href"], [1, "container", "paddding", "blogContent-container"], [1, "row"], [1, "col-sm-8"], [1, "fh5co_heading", "fh5co_heading_border_bottom", "py-2", "mb-4"], ["id", "viewsCounter", 1, "fa", "fa-eye", "pull-right"], ["id", "contentValue", 2, "text-align", "justify"], ["class", "container", "style", "width:50%;font-size:1.4em; margin:15px auto", 4, "ngIf"], ["data-animate-effect", "fadeInRight", 1, "col-md-3", "animate-box", "fadeInRight", "animated-fast", "d-none", "d-md-block"], [1, "clearfix"], ["style", "display: inline-block;", 4, "ngFor", "ngForOf"], [1, "col-md-8"], [1, "container"], [1, "be-comment-block"], ["class", "comments-title", 4, "ngIf"], ["class", "be-comment", 4, "ngFor", "ngForOf"], [1, "col-md-3"], [1, "form", 3, "formGroup"], [1, "form-horizontal"], [1, "form-group"], ["name", "Comment", "id", "Comment", "rows", "5", "placeholder", "Write a comment", "formControlName", "CommentValue", 1, "inputGroup", 2, "width", "100%", 3, "value"], [3, "theme", "width", "height", "onemojipick", "onchardelete", 4, "ngIf"], [1, "fa", "fa-2x", "fa-smile-o", "d-none", "d-sm-block", 3, "click"], ["class", "btn btn-default pull-right", "style", "background-color:orange", 3, "click", 4, "ngIf"], [3, "href"], ["aria-hidden", "true", 1, "fa", "fa-edit", 2, "font-size", "24px", "color", "#20cdfd"], [1, "container", 2, "width", "50%", "font-size", "1.4em", "margin", "15px auto"], [1, "p-1", "text-center"], [1, "showsupport", 3, "click"], [1, "fa", "fa-2x", "fa-heart-o", 3, "id"], [1, "mr-3", 2, "font-size", "0.9em", "font-family", "Poppins-Regular", 3, "id"], [1, "fa", "fa-2x", "fa-bookmark-o", 3, "id"], [1, "ml-4", "fh5co_tagg", 3, "click"], [1, "fa", "fa-lg", "fa-flag"], [2, "display", "inline-block"], ["href", "/blogs", 1, "fh5co_tagg", 2, "border", "none"], [1, "comments-title"], [1, "be-comment"], [1, "be-img-comment"], ["href", "blog-detail-2.html"], ["src", "https://bootdey.com/img/Content/avatar/avatar1.png", "alt", "", 1, "be-ava-comment"], [1, "be-comment-content"], [1, "be-comment-name"], [1, "comment-author", 3, "href"], [1, "be-comment-time"], [1, "fa", "fa-clock-o"], [1, "be-comment-text"], [1, "pull-right", 2, "color", "#262860", 3, "click"], [1, "fa", "fa-2x", "fa-flag"], ["type", "button", 1, "pull-right", "mx-2", 3, "click"], ["class", "fa fa-trash-o", "style", "font-size:20px; color:'#f5bc04'", 4, "ngIf"], [1, "fa", "fa-trash-o", 2, "font-size", "20px", "color", "#f5bc04"], [3, "theme", "width", "height", "onemojipick", "onchardelete"], [1, "btn", "btn-default", "pull-right", 2, "background-color", "orange", 3, "click"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BlogComponent_a_9_Template, 2, 1, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, BlogComponent_div_21_Template, 14, 4, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, BlogComponent_div_27_Template, 3, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, BlogComponent_h2_34_Template, 2, 1, "h2", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, BlogComponent_h2_35_Template, 2, 0, "h2", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, BlogComponent_div_36_Template, 18, 8, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Write Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "form", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "textarea", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, BlogComponent_ngx_emoj_44_Template, 1, 10, "ngx-emoj", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogComponent_Template_a_click_45_listener() { return ctx.toggleEmojiState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, BlogComponent_button_46_Template, 2, 0, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.singleBlog.Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.singleBlog == null ? null : ctx.singleBlog.Media, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 18, ctx.singleBlog.CreatedTime));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.singleBlog.Title, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.CurrentUser.userName == ctx.singleBlog.Author);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/publicprofile/", ctx.singleBlog.Author, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.singleBlog.Author);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.singleBlog.Subtitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", ctx.singleBlog.Views, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.CurrentUser.access_token);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.AllCategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.singleBlog.CommentsNavigator == null ? null : ctx.singleBlog.CommentsNavigator.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.singleBlog.CommentsNavigator == null ? null : ctx.singleBlog.CommentsNavigator.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.singleBlog.CommentsNavigator);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.commentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.commentForm.value.CommentValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toggleEmoji);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.CurrentUser.access_token);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ngx_emoj__WEBPACK_IMPORTED_MODULE_12__["NgxEmojComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: [".card-img[_ngcontent-%COMP%]{\r\n\twidth: 100%;\r\n\theight:55em;\r\n}\r\n.card-image-overlay[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tpadding: 1.25rem;\r\n\ttext-align:center;\r\n\twidth:100%;\r\n\r\n\t\r\n}\r\n.blogContent-container[_ngcontent-%COMP%] {\r\n\tmargin-top: 40px;\r\n}\r\n.showsupport[_ngcontent-%COMP%]\r\n{\r\n\tcolor:black;\r\n}\r\n\r\n.be-comment-block[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 50px !important;\r\n\tborder: 1px solid #edeff2;\r\n\tborder-radius: 2px;\r\n\tpadding: 50px 70px;\r\n\tborder: 1px solid #ffffff;\r\n}\r\n.comments-title[_ngcontent-%COMP%] {\r\n\tfont-size: 18px;\r\n\tcolor: #262626;\r\n\tmargin-bottom: 15px;\r\n}\r\n.be-img-comment[_ngcontent-%COMP%] {\r\n\twidth: 60px;\r\n\theight: 60px;\r\n\tfloat: left;\r\n\tmargin-bottom: 15px;\r\n}\r\n.be-ava-comment[_ngcontent-%COMP%] {\r\n\twidth: 60px;\r\n\theight: 60px;\r\n\tborder-radius: 50%;\r\n}\r\n.be-comment-content[_ngcontent-%COMP%] {\r\n\tmargin-left: 80px;\r\n}\r\n.be-comment-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\t\tdisplay: inline-block;\r\n\t\twidth: 49%;\r\n\t\tmargin-bottom: 15px;\r\n\t}\r\n.be-comment-name[_ngcontent-%COMP%] {\r\n\tfont-size: 13px;\r\n\tfont-family: 'Conv_helveticaneuecyr-bold';\r\n}\r\n\r\n.be-comment-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\tdisplay: inline-block;\r\n\twidth: 49%;\r\n\tmargin-bottom: 15px;\r\n}\r\n.be-comment-time[_ngcontent-%COMP%] {\r\n\ttext-align: right;\r\n}\r\n.be-comment-time[_ngcontent-%COMP%] {\r\n\tfont-size: 11px;\r\n\tcolor: #b4b7c1;\r\n}\r\n.be-comment-text[_ngcontent-%COMP%] {\r\n\tfont-size: 13px;\r\n\tline-height: 18px;\r\n\tcolor: #7a8192;\r\n\tdisplay: block;\r\n\tbackground: #f6f6f7;\r\n\tborder: 1px solid #edeff2;\r\n\tpadding: 15px 20px 20px 20px;\r\n}\r\n.form-group.fl_icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\ttop: 1px;\r\n\tleft: 16px;\r\n\twidth: 48px;\r\n\theight: 48px;\r\n\tbackground: #f6f6f7;\r\n\tcolor: #b5b8c2;\r\n\ttext-align: center;\r\n\tline-height: 50px;\r\n\t-webkit-border-top-left-radius: 2px;\r\n\t-webkit-border-bottom-left-radius: 2px;\r\n\t-moz-border-radius-topleft: 2px;\r\n\t-moz-border-radius-bottomleft: 2px;\r\n\tborder-top-left-radius: 2px;\r\n\tborder-bottom-left-radius: 2px;\r\n}\r\n.form-group[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\r\n\tfont-size: 13px;\r\n\tline-height: 50px;\r\n\tfont-weight: 400;\r\n\tcolor: #b4b7c1;\r\n\twidth: 100%;\r\n\theight: 50px;\r\n\tpadding-left: 20px;\r\n\tpadding-right: 20px;\r\n\tborder: 1px solid #edeff2;\r\n\tborder-radius: 3px;\r\n}\r\n.form-group.fl_icon[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\r\n\tpadding-left: 70px;\r\n}\r\n.form-group[_ngcontent-%COMP%]   textarea.form-input[_ngcontent-%COMP%] {\r\n\theight: 150px;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n\t.be-img-comment[_ngcontent-%COMP%] {\r\n\t\tdisplay:none;\r\n\t}\r\n\t.be-comment-content[_ngcontent-%COMP%] {\r\n\t\twidth:100%;\r\n\t\tmargin:5px;\r\n\t}\r\n\t.card-img[_ngcontent-%COMP%]{\r\n\t\twidth: 100%;\r\n\t\theight:25em;\r\n\t}\r\n}\r\n.inputGroup[_ngcontent-%COMP%] {\r\n\tborder: 1px solid black;\r\n\tborder-radius: 4px;\r\n\t-moz-border-radius: 4px;\r\n\t-webkit-border-radius: 4px;\r\n\tfont-family: inherit;\r\n\tresize: none;\r\n\t\r\n}\r\n.inputGroup[_ngcontent-%COMP%]:focus {\r\n\toutline: none;\r\n\tborder: 1px solid orange;\r\n\tbox-shadow: 0px 0px 12px orange;\r\n\t-moz-box-shadow: 0px 0px 12px orange;\r\n\t-webkit-box-shadow: 0px 0px 12px orange;\r\n\t\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxXQUFXO0NBQ1gsV0FBVztBQUNaO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsU0FBUztDQUNULGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsVUFBVTs7O0FBR1g7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUVBOztDQUVDLFdBQVc7QUFDWjtBQUVBLG1CQUFtQjtBQUVuQjtDQUNDLDhCQUE4QjtDQUM5Qix5QkFBeUI7Q0FDekIsa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQix5QkFBeUI7QUFDMUI7QUFFQTtDQUNDLGVBQWU7Q0FDZixjQUFjO0NBQ2QsbUJBQW1CO0FBQ3BCO0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLFdBQVc7Q0FDWCxtQkFBbUI7QUFDcEI7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7QUFFQztFQUNDLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsbUJBQW1CO0NBQ3BCO0FBRUQ7Q0FDQyxlQUFlO0NBQ2YseUNBQXlDO0FBQzFDO0FBRUE7O0dBRUc7QUFFSDtDQUNDLHFCQUFxQjtDQUNyQixVQUFVO0NBQ1YsbUJBQW1CO0FBQ3BCO0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7QUFFQTtDQUNDLGVBQWU7Q0FDZixjQUFjO0FBQ2Y7QUFFQTtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsY0FBYztDQUNkLGNBQWM7Q0FDZCxtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLDRCQUE0QjtBQUM3QjtBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixVQUFVO0NBQ1YsV0FBVztDQUNYLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsbUNBQW1DO0NBQ25DLHNDQUFzQztDQUN0QywrQkFBK0I7Q0FDL0Isa0NBQWtDO0NBQ2xDLDJCQUEyQjtDQUMzQiw4QkFBOEI7QUFDL0I7QUFFQTtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLGtCQUFrQjtBQUNuQjtBQUVBO0NBQ0Msa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7QUFFQSwrQkFBK0I7QUFFL0I7Q0FDQztFQUNDLFlBQVk7Q0FDYjtDQUNBO0VBQ0MsVUFBVTtFQUNWLFVBQVU7Q0FDWDtDQUNBO0VBQ0MsV0FBVztFQUNYLFdBQVc7Q0FDWjtBQUNEO0FBR0E7Q0FDQyx1QkFBdUI7Q0FDdkIsa0JBQWtCO0NBQ2xCLHVCQUF1QjtDQUN2QiwwQkFBMEI7Q0FDMUIsb0JBQW9CO0NBQ3BCLFlBQVk7Q0FDWjs7eUNBRXdDO0FBQ3pDO0FBRUE7Q0FDQyxhQUFhO0NBQ2Isd0JBQXdCO0NBQ3hCLCtCQUErQjtDQUMvQixvQ0FBb0M7Q0FDcEMsdUNBQXVDO0NBQ3ZDLDJDQUEyQztBQUM1QyIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaW1ne1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDo1NWVtO1xyXG59XHJcbi5jYXJkLWltYWdlLW92ZXJsYXkge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRib3R0b206IDA7XHJcblx0cGFkZGluZzogMS4yNXJlbTtcclxuXHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHR3aWR0aDoxMDAlO1xyXG5cclxuXHRcclxufVxyXG4uYmxvZ0NvbnRlbnQtY29udGFpbmVyIHtcclxuXHRtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4uc2hvd3N1cHBvcnRcclxue1xyXG5cdGNvbG9yOmJsYWNrO1xyXG59XHJcblxyXG4vKkNvbW1lbnQgcGFydCBDc3MqL1xyXG5cclxuLmJlLWNvbW1lbnQtYmxvY2sge1xyXG5cdG1hcmdpbi1ib3R0b206IDUwcHggIWltcG9ydGFudDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZWRlZmYyO1xyXG5cdGJvcmRlci1yYWRpdXM6IDJweDtcclxuXHRwYWRkaW5nOiA1MHB4IDcwcHg7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxufVxyXG5cclxuLmNvbW1lbnRzLXRpdGxlIHtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0Y29sb3I6ICMyNjI2MjY7XHJcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmJlLWltZy1jb21tZW50IHtcclxuXHR3aWR0aDogNjBweDtcclxuXHRoZWlnaHQ6IDYwcHg7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmJlLWF2YS1jb21tZW50IHtcclxuXHR3aWR0aDogNjBweDtcclxuXHRoZWlnaHQ6IDYwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uYmUtY29tbWVudC1jb250ZW50IHtcclxuXHRtYXJnaW4tbGVmdDogODBweDtcclxufVxyXG5cclxuXHQuYmUtY29tbWVudC1jb250ZW50IHNwYW4ge1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0d2lkdGg6IDQ5JTtcclxuXHRcdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblx0fVxyXG5cclxuLmJlLWNvbW1lbnQtbmFtZSB7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdGZvbnQtZmFtaWx5OiAnQ29udl9oZWx2ZXRpY2FuZXVlY3lyLWJvbGQnO1xyXG59XHJcblxyXG4vKiAuYmUtY29tbWVudC1jb250ZW50IGEge1xyXG5cdGNvbG9yOiAjMzgzYjQzO1xyXG59ICovXHJcblxyXG4uYmUtY29tbWVudC1jb250ZW50IHNwYW4ge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR3aWR0aDogNDklO1xyXG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5iZS1jb21tZW50LXRpbWUge1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uYmUtY29tbWVudC10aW1lIHtcclxuXHRmb250LXNpemU6IDExcHg7XHJcblx0Y29sb3I6ICNiNGI3YzE7XHJcbn1cclxuXHJcbi5iZS1jb21tZW50LXRleHQge1xyXG5cdGZvbnQtc2l6ZTogMTNweDtcclxuXHRsaW5lLWhlaWdodDogMThweDtcclxuXHRjb2xvcjogIzdhODE5MjtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRiYWNrZ3JvdW5kOiAjZjZmNmY3O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNlZGVmZjI7XHJcblx0cGFkZGluZzogMTVweCAyMHB4IDIwcHggMjBweDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAuZmxfaWNvbiAuaWNvbiB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMXB4O1xyXG5cdGxlZnQ6IDE2cHg7XHJcblx0d2lkdGg6IDQ4cHg7XHJcblx0aGVpZ2h0OiA0OHB4O1xyXG5cdGJhY2tncm91bmQ6ICNmNmY2Zjc7XHJcblx0Y29sb3I6ICNiNWI4YzI7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG5cdC13ZWJraXQtYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xyXG5cdC13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMnB4O1xyXG5cdC1tb3otYm9yZGVyLXJhZGl1cy10b3BsZWZ0OiAycHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzLWJvdHRvbWxlZnQ6IDJweDtcclxuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XHJcblx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCAuZm9ybS1pbnB1dCB7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0Y29sb3I6ICNiNGI3YzE7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG5cdHBhZGRpbmctbGVmdDogMjBweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNlZGVmZjI7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cC5mbF9pY29uIC5mb3JtLWlucHV0IHtcclxuXHRwYWRkaW5nLWxlZnQ6IDcwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHRleHRhcmVhLmZvcm0taW5wdXQge1xyXG5cdGhlaWdodDogMTUwcHg7XHJcbn1cclxuXHJcbi8qQ3VzdG9tIGNzcyBmb3IgY29tbWVudCBwYW5lbCovXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG5cdC5iZS1pbWctY29tbWVudCB7XHJcblx0XHRkaXNwbGF5Om5vbmU7XHJcblx0fVxyXG5cdC5iZS1jb21tZW50LWNvbnRlbnQge1xyXG5cdFx0d2lkdGg6MTAwJTtcclxuXHRcdG1hcmdpbjo1cHg7XHJcblx0fVxyXG5cdC5jYXJkLWltZ3tcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OjI1ZW07XHJcblx0fVxyXG59XHJcblxyXG5cclxuLmlucHV0R3JvdXAge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRmb250LWZhbWlseTogaW5oZXJpdDtcclxuXHRyZXNpemU6IG5vbmU7XHJcblx0Lypib3gtc2hhZG93OiAwcHggMHB4IDEycHggYmxhY2s7XHJcblx0LW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDEycHggYmxhY2s7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEycHggYmxhY2s7Ki9cclxufVxyXG5cclxuLmlucHV0R3JvdXA6Zm9jdXMge1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgb3JhbmdlO1xyXG5cdGJveC1zaGFkb3c6IDBweCAwcHggMTJweCBvcmFuZ2U7XHJcblx0LW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDEycHggb3JhbmdlO1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IG9yYW5nZTtcclxuXHQvKi13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA4cHggIzdiYzFmNzsqL1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog',
                templateUrl: './blog.component.html',
                styleUrls: ['./blog.component.css']
            }]
    }], function () { return [{ type: _services_blog_service__WEBPACK_IMPORTED_MODULE_5__["BlogService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Meta"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] }, { type: _services_toxicity_filter_service__WEBPACK_IMPORTED_MODULE_10__["ToxicityFilterService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/blogs/blogs.component.ts":
/*!******************************************!*\
  !*** ./src/app/blogs/blogs.component.ts ***!
  \******************************************/
/*! exports provided: BlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsComponent", function() { return BlogsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/blog.service */ "./src/app/services/blog.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _category_x_category_x_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../category-x/category-x.component */ "./src/app/category-x/category-x.component.ts");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");









function BlogsComponent_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r5.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r5.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.CategoryName);
} }
function BlogsComponent_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogsComponent_button_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.changeSelection(item_r6.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r6.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.CategoryName);
} }
function BlogsComponent_31_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r9.Media, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/blog/", item_r9.Id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r9.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r9.Author, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, item_r9.CreatedTime), "");
} }
function BlogsComponent_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BlogsComponent_31_ng_template_0_Template, 11, 7, "ng-template", 27);
} }
class BlogsComponent {
    constructor(router, blogService, titleService, metaTagService) {
        this.router = router;
        this.blogService = blogService;
        this.titleService = titleService;
        this.metaTagService = metaTagService;
        this.categories = [];
        this.popularBlogs = [];
        this.blogsData = [];
        this.selection = 1;
        this.itemsPerPage = 10;
        this.searchValue = null;
        this.customOptions = {
            loop: false,
            rewind: true,
            mouseDrag: false,
            touchDrag: true,
            pullDrag: false,
            dots: false,
            navSpeed: 700,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            items: 1,
            nav: true
        };
        this.blogService.getCategoryXBlogs(1).subscribe((data) => {
            data.forEach(blog => {
                this.blogService.ImageAdder(blog).then();
            });
            this.blogsData = data;
        });
        this.blogService.getFeaturingBlogs("popular", 12).subscribe((data) => {
            data.forEach(blog => {
                this.blogService.ImageAdder(blog).then();
            });
            this.popularBlogs = data;
        });
    }
    ngOnInit() {
        //Meta tags for SEO
        this.titleService.setTitle("Explore blogs");
        this.metaTagService.updateTag({ name: "description", content: "Search for blogs and browse it." });
        this.metaTagService.updateTag({ name: "author", content: "Piyush Chouhan M, Nishant Bhushan, Kedar R, Mohanavel R, Kumaran R" });
        this.metaTagService.updateTag({ name: "robots", content: "index,follow" });
        this.metaTagService.updateTag({ name: "keywords", content: "Browse, search blogs, filter blogs, explore, categorical search, find by title" });
        this.metaTagService.updateTag({ httpEquiv: 'Content-Type', content: "text/html", charset: "UTF-8" });
        this.blogService.getAllCategories().subscribe((data) => {
            this.categories = data;
        });
        this.blogService.getAllCategories().subscribe((data) => {
            this.categories = data;
        });
    }
    startSearch(search, category) {
        // console.log(search,category);
        if (search == '')
            return;
        this.searchValue = search;
        this.itemsPerPage = 10;
        this.blogService.searchBlogs(category, search).subscribe((data) => {
            // console.log(data);
            data.forEach(blog => {
                this.blogService.ImageAdder(blog).then();
            });
            this.blogsData = data;
            console.log(this.blogsData);
        }, () => {
            this.blogsData = [];
        });
    }
    changeSelection(category) {
        this.selection = category;
        this.searchValue = null;
        this.blogService.getCategoryXBlogs(this.selection).subscribe((data) => {
            data.forEach(blog => {
                this.blogService.ImageAdder(blog).then();
            });
            this.blogsData = data;
            // console.log(this.blogsData);
        });
        // console.log(this.selection);
    }
}
BlogsComponent.ɵfac = function BlogsComponent_Factory(t) { return new (t || BlogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"])); };
BlogsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogsComponent, selectors: [["app-blogs"]], decls: 32, vars: 7, consts: [[1, "container", "mt-2", "p-2", "bg-light", "rounded", "rounded-pill", "shadow-sm", "mb-4"], [1, "input-group"], [1, "btn-group", "col-12", "col-md-2"], [1, "btn", "btn-outline-success"], ["options", ""], ["id", "0", "value", "0"], [3, "id", "value", 4, "ngFor", "ngForOf"], ["type", "search", "id", "searchValue", "placeholder", "What're you searching for?", "aria-describedby", "button-addon1", 1, "form-control", "border-0", "bg-light", 3, "keyup.enter"], ["searchBar", ""], [1, "input-group-append"], ["id", "button-addon1", "type", "button", 1, "btn", "btn-link", "text-primary", 3, "click"], [1, "fa", "fa-search"], [1, "container-fluid", "pb-4", "pt-4", "paddding"], [1, "container", "paddding"], [1, "row", "mx-0"], ["id", "categoryX", "data-animate-effect", "fadeInLeft", 1, "col-md-8", "animate-box", "fadeInLeft", "animated-fast"], [3, "blogsArray", "itemsPerPage", "searchValue"], ["data-animate-effect", "fadeInRight", 1, "col-md-3", "animate-box", "fadeInRight", "animated-fast"], [1, "fh5co_heading", "fh5co_heading_border_bottom", "py-2", "mb-4"], [1, "clearfix"], [1, "fh5co_tags_all"], ["class", "fh5co_tagg", "style", "border: 1px solid white;", 3, "id", "click", 4, "ngFor", "ngForOf"], [1, "fh5co_heading", "fh5co_heading_border_bottom", "pt-3", "py-2", "mb-4", 2, "font-size", "1.1em"], [1, "owl-theme", 3, "options"], [4, "ngFor", "ngForOf"], [3, "id", "value"], [1, "fh5co_tagg", 2, "border", "1px solid white", 3, "id", "click"], ["carouselSlide", "", "style", "width: 225px; margin-right: 10px;"], [1, "item", "px-2"], [1, "fh5co_latest_trading_img_position_relative"], [1, "fh5co_latest_trading_img"], ["alt", "", 1, "fh5co_img_special_relative", 3, "src"], [1, "fh5co_latest_trading_img_position_absolute"], [1, "fh5co_latest_trading_img_position_absolute_1"], [1, "text-white", 3, "href"], [1, "fh5co_latest_trading_date_and_name_color"]], template: function BlogsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Pick Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BlogsComponent_option_7_Template, 2, 3, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function BlogsComponent_Template_input_keyup_enter_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.startSearch(_r2.value, _r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogsComponent_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.startSearch(_r2.value, _r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-category-x", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, BlogsComponent_button_25_Template, 2, 2, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Most Popular Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "owl-carousel-o", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, BlogsComponent_31_Template, 1, 0, undefined, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blogsArray", ctx.blogsData)("itemsPerPage", ctx.itemsPerPage)("searchValue", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.popularBlogs);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _category_x_category_x_component__WEBPACK_IMPORTED_MODULE_6__["CategoryXComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__["CarouselSlideDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["#searchValue[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus\r\n{\r\n    outline:none !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZ3MvYmxvZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9ibG9ncy9ibG9ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NlYXJjaFZhbHVlIDpmb2N1c1xyXG57XHJcbiAgICBvdXRsaW5lOm5vbmUgIWltcG9ydGFudDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blogs',
                templateUrl: './blogs.component.html',
                styleUrls: ['./blogs.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"] }]; }, null); })();


/***/ }),

/***/ "./src/app/bookmarks/bookmarks.component.ts":
/*!**************************************************!*\
  !*** ./src/app/bookmarks/bookmarks.component.ts ***!
  \**************************************************/
/*! exports provided: BookmarksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarksComponent", function() { return BookmarksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BookmarksComponent {
    constructor() { }
    ngOnInit() {
    }
}
BookmarksComponent.ɵfac = function BookmarksComponent_Factory(t) { return new (t || BookmarksComponent)(); };
BookmarksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookmarksComponent, selectors: [["app-bookmarks"]], decls: 2, vars: 0, template: function BookmarksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "bookmarks works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2ttYXJrcy9ib29rbWFya3MuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookmarksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bookmarks',
                templateUrl: './bookmarks.component.html',
                styleUrls: ['./bookmarks.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/category-x/category-x.component.ts":
/*!****************************************************!*\
  !*** ./src/app/category-x/category-x.component.ts ***!
  \****************************************************/
/*! exports provided: CategoryXComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryXComponent", function() { return CategoryXComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utility_darkmode_modeConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/darkmode/modeConfig */ "./src/app/utility/darkmode/modeConfig.ts");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/blog.service */ "./src/app/services/blog.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");







function CategoryXComponent_h5_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Showing results for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", ctx_r0.searchValue, "\u00A0");
} }
function CategoryXComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No results found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CategoryXComponent_ng_template_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.categoryXBlogs[0].Category);
} }
function CategoryXComponent_ng_template_2_div_3_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r6 == null ? null : d_r6.Category);
} }
function CategoryXComponent_ng_template_2_div_3_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryXComponent_ng_template_2_div_3_div_16_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const d_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.addlike(d_r6.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryXComponent_ng_template_2_div_3_div_16_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const d_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.addBookmark(d_r6.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "heart_", d_r6.Id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "like_", d_r6.Id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", d_r6.Likes, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "bookmark_", d_r6.Id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r6 == null ? null : d_r6.Category);
} }
function CategoryXComponent_ng_template_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CategoryXComponent_ng_template_2_div_3_div_15_Template, 3, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CategoryXComponent_ng_template_2_div_3_div_16_Template, 9, 5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", d_r6.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", d_r6 == null ? null : d_r6.Media, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/blog/", d_r6.Id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", d_r6.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/publicprofile/", d_r6.Author, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", d_r6.Author, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 10, d_r6.CreatedTime), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", d_r6.Subtitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.currentUser == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.currentUser);
} }
const _c0 = function (a0, a1, a2) { return { itemsPerPage: a0, currentPage: a1, totalItems: a2 }; };
function CategoryXComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CategoryXComponent_ng_template_2_div_1_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CategoryXComponent_ng_template_2_div_3_Template, 17, 12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "pagination-controls", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function CategoryXComponent_ng_template_2_Template_pagination_controls_pageChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.page = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.searchValue == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 2, ctx_r3.categoryXBlogs, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](5, _c0, ctx_r3.itemsPerPage, ctx_r3.page, ctx_r3.totalLength)));
} }
class CategoryXComponent {
    constructor(blogService, authService) {
        this.blogService = blogService;
        this.authService = authService;
        this.page = 1;
        this.categoryXBlogs = [];
        this.searchValue = null;
        this.currentUser = this.authService.isAuthenticated().userName;
        this.darkMode = new _utility_darkmode_modeConfig__WEBPACK_IMPORTED_MODULE_1__["DarkModeConfig"]();
    }
    ngOnInit() {
        this.categoryXBlogs = this.blogsArray;
        this.totalLength = this.blogsArray.length;
    }
    ngAfterViewInit() {
        var mode = this.darkMode.getCookie('darkmode');
        setTimeout(() => {
            if (mode === "true") {
                // (<HTMLInputElement>document.getElementById('mode')).checked = true;
                this.darkMode.darkModeToggler(true);
            }
            else {
                // (<HTMLInputElement>document.getElementById('mode')).checked = false;
                this.darkMode.darkModeToggler(false);
            }
        });
    }
    ngOnChanges() {
        var mode = this.darkMode.getCookie('darkmode');
        setTimeout(() => {
            if (mode === "true") {
                // (<HTMLInputElement>document.getElementById('mode')).checked = true;
                this.darkMode.darkModeToggler(true);
            }
            else {
                // (<HTMLInputElement>document.getElementById('mode')).checked = false;
                this.darkMode.darkModeToggler(false);
            }
        });
        this.categoryXBlogs = this.blogsArray;
        this.totalLength = this.blogsArray.length;
    }
    addlike(blogId) {
        let audio = new Audio();
        audio.src = '/assets/shared/like_sound.mp3';
        audio.load();
        var likeCookie = this.getCookie("Like_" + blogId);
        if (likeCookie == "true")
            return;
        this.blogService.updateLike(blogId).subscribe((data) => {
            audio.play();
            document.getElementById("heart_" + blogId).setAttribute("class", "fa fa-lg fa-heart");
            document.getElementById("heart_" + blogId).setAttribute("style", "color:red");
            var like = document.getElementById("like_" + blogId);
            like.innerText = " " + (parseInt(like.innerText) + 1).toString();
            document.cookie = "Like_" + blogId + "=true";
            // console.log("done");
        });
    }
    getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    addBookmark(blogId) {
        let currentUser = this.authService.isAuthenticated().userName;
        var bookmarkCookie = this.getCookie("Bookmark_" + blogId + "_" + currentUser);
        // console.log(bookmarkCookie);
        if (bookmarkCookie == "true")
            return;
        this.blogService.updateBookmark(blogId, currentUser).subscribe((data) => {
            document.getElementById("bookmark_" + blogId).setAttribute("class", "fa fa-lg fa-bookmark");
            document.getElementById("bookmark_" + blogId).setAttribute("style", "color:blue");
            document.cookie = "Bookmark_" + blogId + "_" + currentUser + "=true";
            // console.log("done");
        });
    }
}
CategoryXComponent.ɵfac = function CategoryXComponent_Factory(t) { return new (t || CategoryXComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
CategoryXComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryXComponent, selectors: [["app-category-x"]], inputs: { blogsArray: "blogsArray", itemsPerPage: "itemsPerPage", searchValue: "searchValue" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 3, consts: [["class", "py-2 mb-4", "style", "border-bottom: 1px solid #777", 4, "ngIf"], ["class", "h5 text-center py-2 mb-4", 4, "ngIf", "ngIfElse"], ["dataAvailable", ""], [1, "py-2", "mb-4", 2, "border-bottom", "1px solid #777"], [1, "fa", "fa-search"], [2, "background-color", "#f5bc04 !important", "border-radius", "10px"], [1, "h5", "text-center", "py-2", "mb-4"], ["class", "fh5co_heading fh5co_heading_border_bottom py-2 mb-4", 4, "ngIf"], [1, "owl-theme"], ["class", "row pb-4", 4, "ngFor", "ngForOf"], [3, "pageChange"], [1, "fh5co_heading", "fh5co_heading_border_bottom", "py-2", "mb-4"], [1, "row", "pb-4"], [1, "col-md-5"], [1, "fh5co_hover_news_img"], [1, "fh5co_news_img"], [1, "img-fluid", 3, "src", "alt"], [1, "col-md-7", "col-10", "animate-box", "fadeInUp", "animated-fast"], [1, "fh5co_magna", "py-2", 3, "href"], [1, "fh5co_mini_time", "py-3", 3, "href"], [1, "fh5co_consectetur"], ["class", "mt-2", 4, "ngIf"], ["class", "p-2 mr-3", 4, "ngIf"], [1, "mt-2"], [1, "badge", "rounded-pill", "bg-danger", 2, "font-size", "medium"], [1, "p-2", "mr-3"], [1, "showsupport", 3, "click"], [1, "fa", "fa-lg", "fa-heart-o", 3, "id"], [1, "mr-3", 2, "font-size", "0.9em", "font-family", "Poppins-Regular", 3, "id"], [1, "fa", "fa-lg", "fa-bookmark-o", 3, "id"], [1, "badge", "rounded-pill", "bg-danger", 2, "font-size", "small", "margin", "2%"]], template: function CategoryXComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CategoryXComponent_h5_0_Template, 5, 1, "h5", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CategoryXComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CategoryXComponent_ng_template_2_Template, 6, 9, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchValue != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.categoryXBlogs.length == 0)("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["a[_ngcontent-%COMP%]\r\n{\r\n    color:black;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover\r\n{\r\n    cursor: pointer;\r\n}\r\n\r\n  .ngx-pagination .current {\r\n  background: #f5bc04 !important;\r\n  border: transparent !important;\r\n}\r\n\r\n.ngx-pagination[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]:hover {\r\n    background: #17a2b8 !important;\r\n    border-radius: 20px !important; \r\n    border: transparent !important;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnkteC9jYXRlZ29yeS14LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztJQUVJLGVBQWU7QUFDbkI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsOEJBQThCO0FBQ2hDOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5Qiw4QkFBOEI7RUFDaEMiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yeS14L2NhdGVnb3J5LXguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFcclxue1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuXHJcbmE6aG92ZXJcclxue1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcclxuICBiYWNrZ3JvdW5kOiAjZjViYzA0ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmd4LXBhZ2luYXRpb24gLmN1cnJlbnQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzE3YTJiOCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50OyBcclxuICAgIGJvcmRlcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryXComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-category-x',
                templateUrl: './category-x.component.html',
                styleUrls: ['./category-x.component.css']
            }]
    }], function () { return [{ type: _services_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, { blogsArray: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], itemsPerPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], searchValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/create-blog/create-blog.component.ts":
/*!******************************************************!*\
  !*** ./src/app/create-blog/create-blog.component.ts ***!
  \******************************************************/
/*! exports provided: CreateBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBlogComponent", function() { return CreateBlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/blog.service */ "./src/app/services/blog.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/__ivy_ngcc__/fesm2015/ngx-quill.js");









function CreateBlogComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please provide an image below ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "4MB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateBlogComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Title is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateBlogComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateBlogComponent_div_4_div_1_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.Title.errors.required);
} }
function CreateBlogComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Subtitle is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateBlogComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateBlogComponent_div_6_div_1_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.Subtitle.errors.required);
} }
function CreateBlogComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateBlogComponent_div_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const item_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.getCategoryId(item_r10.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r10.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.CategoryName);
} }
function CreateBlogComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please Select Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateBlogComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateBlogComponent_div_10_div_1_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f.Category.errors.required);
} }
function CreateBlogComponent_div_11_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 25);
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r14.imagesrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CreateBlogComponent_div_11_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Upload Cover Image Here ");
} }
function CreateBlogComponent_div_11_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cover Image is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateBlogComponent_div_11_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateBlogComponent_div_11_div_6_div_1_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.f.CreateImage.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function CreateBlogComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateBlogComponent_div_11_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.onFileSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateBlogComponent_div_11_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.browseFile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateBlogComponent_div_11_img_3_Template, 1, 1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateBlogComponent_div_11_ng_template_4_Template, 2, 0, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CreateBlogComponent_div_11_div_6_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r5.submitted && ctx_r5.f.CreateImage.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.imagesrc)("ngIfElse", _r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.submitted && ctx_r5.f.CreateImage.errors);
} }
function CreateBlogComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateBlogComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CreateBlogComponent {
    constructor(service, authService, router, route) {
        this.service = service;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.maxLimitError = false;
        this.AllCategories = [];
        this.editorStyle = {
            height: '300px'
        };
        this.blogId = this.route.snapshot.paramMap.get("Id");
        //console.log(this.blogId);
    }
    ngOnInit() {
        this.createForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            Title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            Subtitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Editor: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
            // CreateImage:new FormControl(null,Validators.required)
        });
        this.RefreshCategory();
        if (this.blogId) {
            this.service.getSingleBlog(this.blogId).subscribe(data => {
                this.service.ImageAdder(data).then(() => {
                    this.imagesrc = data === null || data === void 0 ? void 0 : data.Media;
                });
                // console.log(data);
                this.createForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    Title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.Title, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                    Subtitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.Subtitle, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                    Category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.CategoryId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                    Editor: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.Content)
                    // CreateImage:new FormControl(data.MediaId,Validators.required)
                });
                this.Likes = data.Likes;
                this.MediaId = data.MediaId;
            });
        }
    }
    RefreshCategory() {
        this.service.getAllCategories().subscribe(data => this.AllCategories = data);
    }
    getCategoryId(id) {
        this.createForm.controls.Category.setValue(id);
        let selectedId = this.createForm.controls.Category.value;
        for (var categoryId of this.AllCategories) {
            // console.log(categoryId.Id+" "+selectedId)
            if (categoryId.Id == selectedId) {
                //alert('reached');
                $('#' + selectedId).css('background-color', '#f5bc04');
            }
            else {
                //alert('else');
                $('#' + categoryId.Id).css('background-color', '#f1f1f1');
            }
        }
    }
    browseFile() {
        document.getElementById('fileButton').click();
    }
    onFileSelected(e) {
        this.maxLimitError = false;
        const target = e.target;
        if (target.files && target.files[0]) {
            let size = ((target.files[0].size / 1024) / 1024);
            if (size > 4) {
                this.maxLimitError = true;
                return;
            }
            const imageFile = target.files[0];
            const fileReader = new FileReader();
            fileReader.onload = () => {
                return this.imagesrc = fileReader.result;
            };
            fileReader.readAsDataURL(imageFile);
            this.TempImage = imageFile;
        }
    }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.createForm.invalid) {
            return;
        }
        this.CurrentUser = this.authService.isAuthenticated().userName;
        if (this.blogId) {
            //  console.log("Picture not Updated");
            this.service.updateBlog(this.createForm.value, this.CurrentUser, this.blogId, this.Likes, this.MediaId).subscribe(() => {
                this.router.navigate(["blog/" + this.blogId]);
            });
        }
        else {
            var form = new FormData();
            form.append('upload_file', this.TempImage);
            form.append('mediaType', 'blog');
            // console.log(this.createForm.value);
            // console.log(this.CurrentUser);
            this.service.updateImage(form).subscribe((data) => {
                // this.createForm.controls.CreateImage.setValue(data?.Id);
                this.service.createBlog(this.createForm.value, this.CurrentUser, data.Id).subscribe(blogData => {
                    let Id = blogData === null || blogData === void 0 ? void 0 : blogData.Id;
                    this.router.navigate(["/blog/" + Id]);
                });
            });
        }
    }
    get f() { return this.createForm.controls; }
}
CreateBlogComponent.ɵfac = function CreateBlogComponent_Factory(t) { return new (t || CreateBlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
CreateBlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateBlogComponent, selectors: [["app-create-blog"]], decls: 16, vars: 19, consts: [[1, "container", "Outerbody", "mt-5", "mb-5", 2, "background-color", "white", "color", "black"], ["class", "mt-2 alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "form", 3, "formGroup", "ngSubmit"], ["type", "text", "placeholder", "Title", "formControlName", "Title", 1, "inputGroup", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "placeholder", "Subtitle", "formControlName", "Subtitle", 1, "inputGroup", 3, "ngClass"], [1, "fh5co_tags_all"], ["type", "text", "formControlName", "Category", 1, "inputGroup", 2, "display", "none", 3, "ngClass"], ["style", "display: inline-block;", 4, "ngFor", "ngForOf"], ["class", "form-group mt-5 container", 4, "ngIf"], [1, "form-group", "mt-5"], ["formControlName", "Editor", 3, "styles"], ["type", "submit", "class", "fh5co_tagg save", 4, "ngIf"], ["role", "alert", 1, "mt-2", "alert", "alert-danger", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "invalid-feedback"], [4, "ngIf"], [2, "display", "inline-block"], ["type", "button", 1, "fh5co_tagg", 2, "border", "none", 3, "id", "click"], [1, "form-group", "mt-5", "container"], ["type", "file", "accept", "image/*", "name", "ImageFile", "id", "fileButton", "formControlName", "CreateImage", 2, "display", "none", 3, "ngClass", "change"], [1, "fh5co_tagg", "imageContainer", 3, "click"], ["class", "img-fluid", "style", "width:100%; height:80px;", 3, "src", 4, "ngIf", "ngIfElse"], ["altName", ""], [1, "img-fluid", 2, "width", "100%", "height", "80px", 3, "src"], [1, "fa", "fa-cloud-upload", "fa-lg"], ["type", "submit", 1, "fh5co_tagg", "save"]], template: function CreateBlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateBlogComponent_div_1_Template, 7, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateBlogComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateBlogComponent_div_4_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CreateBlogComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CreateBlogComponent_div_9_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CreateBlogComponent_div_10_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CreateBlogComponent_div_11_Template, 7, 6, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "quill-editor", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CreateBlogComponent_button_14_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CreateBlogComponent_button_15_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.maxLimitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.createForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.submitted && ctx.f.Title.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.Title.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.submitted && ctx.f.Subtitle.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.Subtitle.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.submitted && ctx.f.Category.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.AllCategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.Category.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.blogId == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styles", ctx.editorStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.blogId == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.blogId != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_quill__WEBPACK_IMPORTED_MODULE_6__["QuillEditorComponent"]], styles: [".Outerbody[_ngcontent-%COMP%]{\r\n    border: 2px solid gray;\r\n\tborder-radius: 4px;\r\n\t-moz-border-radius: 4px;\r\n\t-webkit-border-radius: 4px;\r\n}\r\n.Outerbody[_ngcontent-%COMP%]:hover{\r\n    outline: none;\r\n\tborder: 1px solid orange;\r\n\tbox-shadow: 0px 0px 12px orange;\r\n\t-moz-box-shadow: 0px 0px 12px orange;\r\n\t-webkit-box-shadow: 0px 0px 12px orange;\r\n}\r\n  .inputGroup{\r\n   border:0px solid;\r\n   width:100%;\r\n   font-size: large;\r\n   margin: 15px auto;\r\n   color: rgb(65, 63, 63);\r\n   font-family:'Conv_helveticaneuecyr-bold';\r\n}\r\n  .inputGroup:focus{\r\n    outline:none;\r\n}\r\n[formControlName ='Title'][_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n}\r\n[formControlName ='Subtitle'][_ngcontent-%COMP%]{\r\n    font-size: 32px;\r\n}\r\n.save[_ngcontent-%COMP%]{\r\n border:none;\r\n margin: 5px;\r\n}\r\n.imageContainer[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-size: 2em;\r\n    background-blend-mode: color overlay; \r\n    width:100%;\r\n    height: 100px;\r\n    border:none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWJsb2cvY3JlYXRlLWJsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtDQUN6QixrQkFBa0I7Q0FDbEIsdUJBQXVCO0NBQ3ZCLDBCQUEwQjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtDQUNoQix3QkFBd0I7Q0FDeEIsK0JBQStCO0NBQy9CLG9DQUFvQztDQUNwQyx1Q0FBdUM7QUFDeEM7QUFDQTtHQUNHLGdCQUFnQjtHQUNoQixVQUFVO0dBQ1YsZ0JBQWdCO0dBQ2hCLGlCQUFpQjtHQUNqQixzQkFBc0I7R0FDdEIsd0NBQXdDO0FBQzNDO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsV0FBVztBQUNaO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG9DQUFvQztJQUNwQyxVQUFVO0lBQ1YsYUFBYTtJQUNiLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1ibG9nL2NyZWF0ZS1ibG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuT3V0ZXJib2R5e1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLk91dGVyYm9keTpob3ZlcntcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgb3JhbmdlO1xyXG5cdGJveC1zaGFkb3c6IDBweCAwcHggMTJweCBvcmFuZ2U7XHJcblx0LW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDEycHggb3JhbmdlO1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IG9yYW5nZTtcclxufVxyXG46Om5nLWRlZXAgLmlucHV0R3JvdXB7XHJcbiAgIGJvcmRlcjowcHggc29saWQ7XHJcbiAgIHdpZHRoOjEwMCU7XHJcbiAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgIG1hcmdpbjogMTVweCBhdXRvO1xyXG4gICBjb2xvcjogcmdiKDY1LCA2MywgNjMpO1xyXG4gICBmb250LWZhbWlseTonQ29udl9oZWx2ZXRpY2FuZXVlY3lyLWJvbGQnO1xyXG59XHJcbjo6bmctZGVlcCAuaW5wdXRHcm91cDpmb2N1c3tcclxuICAgIG91dGxpbmU6bm9uZTtcclxufVxyXG5bZm9ybUNvbnRyb2xOYW1lID0nVGl0bGUnXXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5bZm9ybUNvbnRyb2xOYW1lID0nU3VidGl0bGUnXXtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxufVxyXG4uc2F2ZXtcclxuIGJvcmRlcjpub25lO1xyXG4gbWFyZ2luOiA1cHg7XHJcbn1cclxuLmltYWdlQ29udGFpbmVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGNvbG9yIG92ZXJsYXk7IFxyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXI6bm9uZTtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateBlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-blog',
                templateUrl: './create-blog.component.html',
                styleUrls: ['./create-blog.component.css']
            }]
    }], function () { return [{ type: _services_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utility_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/confirmation/confirmation.component */ "./src/app/utility/confirmation/confirmation.component.ts");
/* harmony import */ var _utility_darkmode_modeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility/darkmode/modeConfig */ "./src/app/utility/darkmode/modeConfig.ts");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/dashboard.service */ "./src/app/services/dashboard.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/blog.service */ "./src/app/services/blog.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function DashboardComponent_div_18_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_18_tr_18_Template_a_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const dash_r19 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.blogDelete(dash_r19.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dash_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r20 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", dash_r19.Media, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/blog/", dash_r19.Id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dash_r19.Title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dash_r19.Category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 8, dash_r19.CreatedTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dash_r19.Likes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/edit/", dash_r19.Id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DashboardComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "S.NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "BLOGS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "CATEGORY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "CREATED TIME");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "LIKE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "EDIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DashboardComponent_div_18_tr_18_Template, 25, 10, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.dashlist);
} }
function DashboardComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Blogs Created Yet!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_26_div_1_Template_a_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const dash_r24 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.blogDelete(dash_r24.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dash_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", dash_r24.Media, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/blog/", dash_r24.Id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dash_r24.Title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dash_r24.Category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, dash_r24.CreatedTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", dash_r24.Likes, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/edit/", dash_r24.Id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DashboardComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_26_div_1_Template, 22, 9, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.dashlist);
} }
function DashboardComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Blogs Yet!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_32_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_32_tr_16_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const bookmark_r28 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.bookmarkDelete(bookmark_r28.Id, bookmark_r28.BlogId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bookmark_r28 = ctx.$implicit;
    const j_r29 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](j_r29 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", bookmark_r28 == null ? null : bookmark_r28.Media, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/blog/", bookmark_r28.BlogId, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bookmark_r28.Title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bookmark_r28.Category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bookmark_r28.Likes);
} }
function DashboardComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "S.NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "BLOGS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "CATEGORY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "LIKE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "DELETE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DashboardComponent_div_32_tr_16_Template, 19, 6, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.bookmarklist);
} }
function DashboardComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Bookmark Yet!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_36_div_1_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const bookmark_r33 = ctx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.bookmarkDelete(bookmark_r33.Id, bookmark_r33.BlogId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bookmark_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", bookmark_r33 == null ? null : bookmark_r33.Media, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/blog/", bookmark_r33.BlogId, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bookmark_r33.Title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bookmark_r33.Category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", bookmark_r33.Likes, "");
} }
function DashboardComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_36_div_1_Template, 17, 5, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.bookmarklist);
} }
function DashboardComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Bookmark Yet!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_42_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_42_tr_16_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const comment_r37 = ctx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.deleting(comment_r37.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r37 = ctx.$implicit;
    const j_r38 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](j_r38 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r37.CommentValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r37.BlogNavigator.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, comment_r37.CreatedTime));
} }
function DashboardComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "S.NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "COMMENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "BLOG");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "CREATED TIME");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "DELETE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DashboardComponent_div_42_tr_16_Template, 15, 6, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.commentlist);
} }
function DashboardComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Comments Yet!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_46_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_46_div_1_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const comment_r42 = ctx.$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r43.deleting(comment_r42.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r42.BlogNavigator.Title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r42.CommentValue, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 3, comment_r42.CreatedTime));
} }
function DashboardComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_46_div_1_Template, 16, 5, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r15.commentlist);
} }
function DashboardComponent_ng_template_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Comments Yet!!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DashboardComponent {
    constructor(_dashboardservice, sanitizer, _blogservice, authService, titleService, metaTagService, dialog) {
        this._dashboardservice = _dashboardservice;
        this.sanitizer = sanitizer;
        this._blogservice = _blogservice;
        this.authService = authService;
        this.titleService = titleService;
        this.metaTagService = metaTagService;
        this.dialog = dialog;
        this.success = false;
        this.darkMode = new _utility_darkmode_modeConfig__WEBPACK_IMPORTED_MODULE_2__["DarkModeConfig"]();
    }
    ngOnInit() {
        let currentUser = this.authService.isAuthenticated().userName;
        this.titleService.setTitle("Dashboard");
        this.metaTagService.addTags([
            { name: "description", content: "Manage all your blogs and comments here" },
            { name: "author", content: currentUser },
            { name: "robots", content: "index,follow" },
            { name: "keywords", content: "Manage, Bookmark, Dashboard, Comments" },
            { httpEquiv: 'Content-Type', content: "text/html", charset: "UTF-8" }
        ]);
        this._dashboardservice.getDashboard().subscribe(data => {
            this.dashlist = data;
            data.forEach(blog => {
                this._blogservice.ImageAdder(blog).then();
            });
        });
        this._dashboardservice.getBookMark().subscribe(data => {
            this.bookmarklist = data;
            data.forEach(blog => {
                this._dashboardservice.ImageAdder(blog).then();
            });
            // console.log(this.bookmarklist);
        });
        this._dashboardservice.getComment().subscribe(data => {
            this.commentlist = data;
        });
    }
    ngAfterViewInit() {
        var mode = this.darkMode.getCookie('darkmode');
        setTimeout(() => {
            if (mode === "true") {
                // (<HTMLInputElement>document.getElementById('mode')).checked = true;
                this.darkMode.darkModeToggler(true);
            }
            else {
                // (<HTMLInputElement>document.getElementById('mode')).checked = false;
                this.darkMode.darkModeToggler(false);
            }
        });
    }
    ngAfterViewChecked() {
        var mode = this.darkMode.getCookie('darkmode');
        setTimeout(() => {
            if (mode === "true") {
                // (<HTMLInputElement>document.getElementById('mode')).checked = true;
                this.darkMode.darkModeToggler(true);
            }
            else {
                // (<HTMLInputElement>document.getElementById('mode')).checked = false;
                this.darkMode.darkModeToggler(false);
            }
        });
    }
    deleting(id) {
        const dialogRef = this.dialog.open(_utility_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmationComponent"], {
            data: { process: "delete" }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == true) {
                this._dashboardservice.deleteComment(id).subscribe(() => {
                    this.success = true;
                    window.location.reload();
                });
            }
        });
    }
    bookmarkDelete(id, blogId) {
        const dialogRef = this.dialog.open(_utility_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmationComponent"], {
            data: { process: "delete" }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == true) {
                this._dashboardservice.deleteBookmark(id).subscribe(() => {
                    let currentUser = this.authService.isAuthenticated().userName;
                    document.cookie = "Bookmark_" + blogId + "_" + currentUser + '=false';
                    window.location.reload();
                });
            }
        });
    }
    blogDelete(id) {
        const dialogRef = this.dialog.open(_utility_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmationComponent"], {
            data: { process: "delete" }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == true) {
                this._dashboardservice.deleteBlog(id).subscribe(() => {
                    this.success = true;
                    //  alert("BookMark deleted successfully!!");
                    window.location.reload();
                });
            }
        });
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_blog_service__WEBPACK_IMPORTED_MODULE_5__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 49, vars: 12, consts: [["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item"], ["id", "dashboard-tab", "data-toggle", "tab", "href", "#dashboard", "role", "tab", "aria-controls", "dashboard", "aria-selected", "true", 1, "nav-link", "active"], ["id", "bookmark-tab", "data-toggle", "tab", "href", "#bookmark", "role", "tab", "aria-controls", "bookmark", "aria-selected", "false", 1, "nav-link"], ["id", "comment-tab", "data-toggle", "tab", "href", "#comment", "role", "tab", "aria-controls", "comment", "aria-selected", "false", 1, "nav-link"], ["id", "myTabContent", 1, "tab-content"], ["id", "dashboard", "role", "tabpanel", "aria-labelledby", "dashboard-tab", 1, "tab-pane", "fade", "show", "active"], [1, "container"], ["href", "/create", "type", "button", "id", "createbutton", 1, "btn", "btn-success", "pull-right", "d-md-block", "d-none"], [1, "pb-5", "header", "text-center", "d-sm-flex", "d-none", "container-fluid"], [1, "container-fluid", "py-5", "text-dark"], [4, "ngIf", "ngIfElse"], ["Nodash", ""], [1, "d-xl-none", "d-lg-none", "d-md-none", "d-sm-inline"], ["href", "/create", "type", "button", "id", "createbutton", 1, "btn", "btn-success"], ["mobiledash", ""], ["id", "bookmark", "role", "tabpanel", "aria-labelledby", "bookmark-tab", 1, "tab-pane", "fade"], ["Nobookmark", ""], ["mobilebookmark", ""], ["id", "comment", "role", "tabpanel", "aria-labelledby", "bookmark-tab", 1, "tab-pane", "fade"], ["Nodata", ""], ["mobiledata", ""], [1, "table-responsive"], [1, "table", "m-0"], ["id", "heading"], ["scope", "col"], ["class", "tablerow", 4, "ngFor", "ngForOf"], [1, "tablerow"], ["scope", "row", 1, "col-md-1"], ["id", "rowdata", 1, "row"], [1, "col-md-3", "dashpic"], ["width", "100", "height", "100", 3, "src"], [1, "col-md-9", "align-content-md-start", "dashcon"], [2, "color", "black", "font-weight", "bold", 3, "href"], ["scope", "row"], [1, "col-md-1"], [1, "list-inline", "m-0"], [1, "list-inline-item"], [3, "href"], ["aria-hidden", "true", 1, "fa", "fa-pencil", 2, "font-size", "20px", "color", "green"], [1, "list-inline-item", "ml-3"], ["type", "button", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash-o", 2, "font-size", "20px", "color", "red"], [4, "ngFor", "ngForOf"], ["align", "center", 1, "container", "mt-4"], ["id", "smallprof", 1, "card", "img-fluid", "commentcard", 2, "width", "250px"], ["alt", "Card image", 1, "card-img-top", 2, "width", "100%", 3, "src"], [1, "card"], [1, "card-text"], [1, "fa", "fa-heart", 2, "color", "red"], [1, "text-center", "mt-5", 2, "font-weight", "bold"], [1, "col-md-5", "dashpic"], [1, "col-md-7", "align-content-md-start", "dashcon"], [2, "color", "black", 3, "href"], ["scope", "row", 2, "text-align", "justify"], ["id", "smallprof", 1, "card", "img-fluid", 2, "width", "250px"], [1, "card", "commentcard"], [1, "card-text", "text-center"], [1, "card-text", "text-center", 2, "font-style", "italic"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "MY BLOGS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "BOOKMARK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "COMMENTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Create ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DashboardComponent_div_18_Template, 20, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DashboardComponent_ng_template_19_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Create ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DashboardComponent_div_26_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, DashboardComponent_ng_template_27_Template, 2, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, DashboardComponent_div_32_Template, 18, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, DashboardComponent_ng_template_33_Template, 2, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, DashboardComponent_div_36_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, DashboardComponent_ng_template_37_Template, 2, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, DashboardComponent_div_42_Template, 18, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, DashboardComponent_ng_template_43_Template, 2, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, DashboardComponent_div_46_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, DashboardComponent_ng_template_47_Template, 2, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dashlist)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dashlist)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bookmarklist)("ngIfElse", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bookmarklist)("ngIfElse", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.commentlist)("ngIfElse", _r13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.commentlist)("ngIfElse", _r16);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: ["#coloring[_ngcontent-%COMP%] {\r\n    background: #dd5e89;\r\n    background: linear-gradient(to left, #dd5e89, #f7bb97);\r\n    min-height: 100vh;\r\n}\r\n.dashpic[_ngcontent-%COMP%]{\r\n    text-align:right!important;\r\n}\r\n.dashcon[_ngcontent-%COMP%] {\r\n    text-align:left!important ;\r\n}\r\n#book[_ngcontent-%COMP%]{\r\n    margin-top:15px !important;\r\n}\r\n#createbutton[_ngcontent-%COMP%]{\r\n    border: 0px;\r\n    border-radius: 0;\r\n    background: linear-gradient(to right,#344ceb,#b134eb);\r\n    padding: 0.6em;\r\n    border-radius: 25px;\r\n    width: 100px;\r\n}\r\n.nav-link[_ngcontent-%COMP%]:hover, .nav-link[_ngcontent-%COMP%]:focus, .nav-link[_ngcontent-%COMP%]:active\r\n{\r\n    outline: none;\r\n\tborder: 1px solid orange;\r\n\tbox-shadow: 0px 0px 12px orange;\r\n\t-moz-box-shadow: 0px 0px 12px orange;\r\n\t-webkit-box-shadow: 0px 0px 12px orange;\r\n}\r\ntable[_ngcontent-%COMP%]{\r\n  \r\n    border-collapse:collapse ;\r\n    overflow: hidden;\r\n    \r\n}\r\nthead[_ngcontent-%COMP%]{\r\n    background-color:rgb(240, 205, 140);\r\n}\r\n\r\n.tablerow[_ngcontent-%COMP%]:hover{\r\n    background-color: #f5f5f5;\r\n    transform: scale(1.02);\r\n    \r\n    overflow: hidden;\r\n    box-shadow: 0px 0px 12px orange;\r\n\t-moz-box-shadow: 0px 0px 12px orange;\r\n\t-webkit-box-shadow: 0px 0px 12px orange;\r\n}\r\n\r\n\r\n.commentcard[_ngcontent-%COMP%]{\r\n    \r\n\tborder-radius: 4px;\r\n\t-moz-border-radius: 4px;\r\n\t-webkit-border-radius: 4px;\r\n    background-color: #eec0c6;\r\n    background-image: linear-gradient(315deg, #eec0c6 0%, #7ee8fa 74%);\r\n\r\n}\r\n.commentcard[_ngcontent-%COMP%]:hover{\r\n    transform: scale(1.03);\r\n    border: 1px solid orange;\r\n\tbox-shadow: 0px 0px 12px orange;\r\n\t-moz-box-shadow: 0px 0px 12px orange;\r\n\t-webkit-box-shadow: 0px 0px 12px orange;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBRW5CLHNEQUFzRDtJQUN0RCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIscURBQXFEO0lBQ3JELGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUNBOztJQUVJLGFBQWE7Q0FDaEIsd0JBQXdCO0NBQ3hCLCtCQUErQjtDQUMvQixvQ0FBb0M7Q0FDcEMsdUNBQXVDO0FBQ3hDO0FBQ0E7O0lBRUkseUJBQXlCO0lBQ3pCLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLG1DQUFtQztBQUN2QztBQUNBOztHQUVHO0FBQ0g7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLCtDQUErQztJQUMvQyxnQkFBZ0I7SUFDaEIsK0JBQStCO0NBQ2xDLG9DQUFvQztDQUNwQyx1Q0FBdUM7QUFDeEM7QUFDQTs7NkJBRTZCO0FBQzdCLE1BQU07QUFDTjtJQUNJLDRCQUE0QjtDQUMvQixrQkFBa0I7Q0FDbEIsdUJBQXVCO0NBQ3ZCLDBCQUEwQjtJQUN2Qix5QkFBeUI7SUFDekIsa0VBQWtFOztBQUV0RTtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLHdCQUF3QjtDQUMzQiwrQkFBK0I7Q0FDL0Isb0NBQW9DO0NBQ3BDLHVDQUF1QztBQUN4QyIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb2xvcmluZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGQ1ZTg5O1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2RkNWU4OSwgI2Y3YmI5Nyk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2RkNWU4OSwgI2Y3YmI5Nyk7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG4uZGFzaHBpY3tcclxuICAgIHRleHQtYWxpZ246cmlnaHQhaW1wb3J0YW50O1xyXG59XHJcbi5kYXNoY29uIHtcclxuICAgIHRleHQtYWxpZ246bGVmdCFpbXBvcnRhbnQgO1xyXG59XHJcblxyXG4jYm9va3tcclxuICAgIG1hcmdpbi10b3A6MTVweCAhaW1wb3J0YW50O1xyXG59XHJcbiNjcmVhdGVidXR0b257XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIzM0NGNlYiwjYjEzNGViKTtcclxuICAgIHBhZGRpbmc6IDAuNmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG4ubmF2LWxpbms6aG92ZXIsLm5hdi1saW5rOmZvY3VzLC5uYXYtbGluazphY3RpdmVcclxue1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7XHJcblx0Ym94LXNoYWRvdzogMHB4IDBweCAxMnB4IG9yYW5nZTtcclxuXHQtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTJweCBvcmFuZ2U7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEycHggb3JhbmdlO1xyXG59XHJcbnRhYmxle1xyXG4gIFxyXG4gICAgYm9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlIDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBcclxufVxyXG50aGVhZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI0MCwgMjA1LCAxNDApO1xyXG59XHJcbi8qIHRib2R5OmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggIG9yYW5nZTtcclxufSAqL1xyXG4udGFibGVyb3c6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxuICAgIC8qIGJveC1zaGFkb3c6IDJweCAycHggMnB4IHJnYigyMTQsIDE0MSwgNikgOyAqL1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCBvcmFuZ2U7XHJcblx0LW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDEycHggb3JhbmdlO1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IG9yYW5nZTtcclxufVxyXG4vKiAjY2FyZGNvbG9ye1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOmxpbmVhci1ncmFkaWVudCh0byByaWdodCxyZ2IoMTUxLCAxMTcsIDUzKSxvcmFuZ2UpICFpbXBvcnRhbnQgO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTsgKi9cclxuLyogfSAqL1xyXG4uY29tbWVudGNhcmR7XHJcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBncmF5OyAqL1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHQtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWMwYzY7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZWVjMGM2IDAlLCAjN2VlOGZhIDc0JSk7XHJcblxyXG59XHJcbi5jb21tZW50Y2FyZDpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7XHJcblx0Ym94LXNoYWRvdzogMHB4IDBweCAxMnB4IG9yYW5nZTtcclxuXHQtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTJweCBvcmFuZ2U7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEycHggb3JhbmdlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: _services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }, { type: _services_blog_service__WEBPACK_IMPORTED_MODULE_5__["BlogService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/faq/faq.component.ts":
/*!**************************************!*\
  !*** ./src/app/faq/faq.component.ts ***!
  \**************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utility_darkmode_modeConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/darkmode/modeConfig */ "./src/app/utility/darkmode/modeConfig.ts");
/* harmony import */ var _services_faq_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/faq-service.service */ "./src/app/services/faq-service.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function FaqComponent_div_4_div_3_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FaqComponent_div_4_div_3_div_7_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.voter(item_r1.Id, "Down"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FaqComponent_div_4_div_3_div_7_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.voter(item_r1.Id, "Up"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.Solution, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "thumbsdown_", item_r1.Id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "thumbsup_", item_r1.Id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "vote_", item_r1.Id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.Vote);
} }
function FaqComponent_div_4_div_3_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.Solution, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.Vote);
} }
function FaqComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FaqComponent_div_4_div_3_div_7_Template, 9, 5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FaqComponent_div_4_div_3_div_8_Template, 5, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.Question, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.currentUser != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.currentUser == undefined);
} }
function FaqComponent_div_4_ng_template_4_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FaqComponent_div_4_ng_template_4_div_6_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.voter(item_r1.Id, "Down"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FaqComponent_div_4_ng_template_4_div_6_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.voter(item_r1.Id, "Up"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.Solution, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "thumbsdown_", item_r1.Id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "thumbsup_", item_r1.Id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "vote_", item_r1.Id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.Vote);
} }
function FaqComponent_div_4_ng_template_4_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.Solution, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.Vote);
} }
function FaqComponent_div_4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FaqComponent_div_4_ng_template_4_div_6_Template, 9, 5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FaqComponent_div_4_ng_template_4_div_7_Template, 5, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r2 = ctx_r25.index;
    const item_r1 = ctx_r25.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "heading" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-target", "#collapse" + i_r2)("aria-controls", "collapse" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.Question, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "collapse" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("aria-labelledby", "heading" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.currentUser != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.currentUser == undefined);
} }
function FaqComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FaqComponent_div_4_div_3_Template, 9, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FaqComponent_div_4_ng_template_4_Template, 8, 8, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r2 + 1 == 1)("ngIfElse", _r4);
} }
class FaqComponent {
    constructor(service, authService, titleService, metaTagService) {
        this.service = service;
        this.authService = authService;
        this.titleService = titleService;
        this.metaTagService = metaTagService;
        this.currentUser = false;
        this.faqList = [];
        this.currentUser = this.authService.isAuthenticated().userName;
        this.darkMode = new _utility_darkmode_modeConfig__WEBPACK_IMPORTED_MODULE_1__["DarkModeConfig"]();
    }
    ngOnInit() {
        this.titleService.setTitle("Frequently Asked Questions");
        this.metaTagService.addTags([
            { name: "description", content: "Got stuck ? Find out the solutions for the frequently asked questions here." },
            { name: "author", content: "Piyush Chouhan M, Nishant Bhushan, Kedar R, Mohanavel R, Kumaran R" },
            { name: "robots", content: "index,follow" },
            { name: "keywords", content: "Frequently asked questions, FAQ, question, answer" },
            { httpEquiv: 'Content-Type', content: "text/html", charset: "UTF-8" }
        ]);
        this.refreshstuList();
        var mode = this.darkMode.getCookie('darkmode');
        setTimeout(() => {
            if (mode === "true") {
                // (<HTMLInputElement>document.getElementById('mode')).checked = true;
                this.darkMode.darkModeToggler(true);
            }
            else {
                // (<HTMLInputElement>document.getElementById('mode')).checked = false;
                this.darkMode.darkModeToggler(false);
            }
        });
    }
    ngAfterViewChecked() {
        var mode = this.darkMode.getCookie('darkmode');
        setTimeout(() => {
            if (mode === "true") {
                // (<HTMLInputElement>document.getElementById('mode')).checked = true;
                this.darkMode.darkModeToggler(true);
            }
            else {
                // (<HTMLInputElement>document.getElementById('mode')).checked = false;
                this.darkMode.darkModeToggler(false);
            }
        });
    }
    refreshstuList() {
        this.service.getFAQList().subscribe(data => { this.faqList = data; });
    }
    voter(id, votetype) {
        this.service.votingMeter(id, votetype).subscribe((data) => {
            var votes = document.getElementById('vote_' + id);
            if (votetype == 'Up') {
                document.getElementById("thumbsup_" + id).setAttribute("class", "fa fa-thumbs-up pull-right");
                document.getElementById("thumbsup_" + id).setAttribute("style", "color:green");
                votes.innerHTML = (parseInt(votes.innerText) + 1).toString();
            }
            else {
                document.getElementById("thumbsdown_" + id).setAttribute("class", "fa fa-thumbs-down pull-right");
                document.getElementById("thumbsdown_" + id).setAttribute("style", "color:red");
                votes.innerHTML = (parseInt(votes.innerHTML) - 1).toString();
            }
        });
    }
}
FaqComponent.ɵfac = function FaqComponent_Factory(t) { return new (t || FaqComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_faq_service_service__WEBPACK_IMPORTED_MODULE_2__["FaqServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"])); };
FaqComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaqComponent, selectors: [["app-faq"]], decls: 11, vars: 1, consts: [[1, "container"], [1, "row"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], ["data-wow-delay", "0.5s", 1, "support-button", "text-center", "d-flex", "align-items-center", "justify-content-center", "mt-4", "wow", "fadeInUp", 2, "visibility", "visible", "animation-delay", "0.5s", "animation-name", "fadeInUp"], [1, "lni-emoji-sad"], [1, "mb-0", "px-2", 2, "text-align", "center"], ["type", "button", "href", "about/#contactForm"], [1, "col-md-6"], ["id", "accordionExample", 1, "accordion"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "card"], ["id", "headingOne", 1, "card-header"], [1, "mb-0"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "btn", "btn-link", "btn-block", "text-left"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-parent", "#accordionExample", 1, "collapse", "show"], ["class", "card-body", 4, "ngIf"], [1, "card-body"], [3, "click"], [1, "fa", "fa-thumbs-o-down", "pull-right", 3, "id"], [1, "fa", "fa-thumbs-o-up", "pull-right", 3, "id"], [3, "id"], [2, "margin-top", "5px"], [1, "fa", "fa-thumbs-up", "pull-right"], [1, "card-header", 3, "id"], ["type", "button", "data-toggle", "collapse", "aria-expanded", "false", 1, "btn", "btn-link", "btn-block", "text-left", "collapsed"], ["data-parent", "#accordionExample", 1, "collapse", 3, "id", "aria-labelledby"]], template: function FaqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Frequently Asked Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FaqComponent_div_4_Template, 6, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Can't find your answers?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.faqList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["h1[_ngcontent-%COMP%]\r\n{\r\n    text-align: center;\r\n    margin: 50px 0 !important;\r\n    color: #f5bc04;\r\n}\r\n\r\n.card[_ngcontent-%COMP%], .card-header[_ngcontent-%COMP%]\r\n{\r\n    background-color: transparent !important;\r\n    border: none;\r\n    padding: 0 !important;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%]\r\n{\r\n    max-width: 95%;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:focus, .btn.focus[_ngcontent-%COMP%] {\r\n    outline: 0;\r\n    box-shadow: none;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]\r\n{\r\n    box-shadow: 0 2px 25px 0 rgba(110,130,208,.18);\r\n\r\n}\r\n\r\n.btn-link[_ngcontent-%COMP%]\r\n{\r\n    width: 100%;\r\n    height: 50px;\r\n    font-weight: bold !important;\r\n    text-align: left !important;\r\n    text-decoration: none !important;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%]\r\n{\r\n    background: #e8eeff;\r\n    color : black !important;\r\n}\r\n\r\n.btn-link[_ngcontent-%COMP%]::after\r\n{\r\n    content: '\\2212';\r\n    width: 35px;\r\n    font-size: 25px;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    right: 15px;\r\n    top: 11px;\r\n    color : #000;\r\n    position: absolute;\r\n    background: #e8eeff;\r\n    z-index: -1;\r\n}\r\n\r\n.btn-link.collapsed[_ngcontent-%COMP%]::after\r\n{\r\n    content: '\\002B';   \r\n}\r\n\r\n.btn-link[_ngcontent-%COMP%]::before\r\n{\r\n    content: '';\r\n    height: 25px;\r\n    width: 25px;\r\n    position: absolute;\r\n    background: #fff;\r\n    z-index: 1;\r\n    transform: rotate(45deg);\r\n    left: 30px;\r\n    top: 56px;\r\n    overflow: hidden;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]\r\n{\r\n    width: 430px;\r\n    margin-top: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFxL2ZhcS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTs7O0lBR0ksd0NBQXdDO0lBQ3hDLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLDhDQUE4Qzs7QUFFbEQ7O0FBRUE7O0lBRUksV0FBVztJQUNYLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLGdDQUFnQztBQUNwQzs7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIsd0JBQXdCO0FBQzVCOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixVQUFVO0lBQ1YsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZmFxL2ZhcS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDFcclxue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1MHB4IDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZjViYzA0O1xyXG59XHJcblxyXG4uY2FyZCxcclxuLmNhcmQtaGVhZGVyXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXJcclxue1xyXG4gICAgbWF4LXdpZHRoOiA5NSU7XHJcbn1cclxuXHJcbi5idG46Zm9jdXMsIC5idG4uZm9jdXMge1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5jYXJkXHJcbntcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDI1cHggMCByZ2JhKDExMCwxMzAsMjA4LC4xOCk7XHJcblxyXG59XHJcblxyXG4uYnRuLWxpbmtcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHlcclxue1xyXG4gICAgYmFja2dyb3VuZDogI2U4ZWVmZjtcclxuICAgIGNvbG9yIDogYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1saW5rOjphZnRlclxyXG57XHJcbiAgICBjb250ZW50OiAnXFwyMjEyJztcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICB0b3A6IDExcHg7XHJcbiAgICBjb2xvciA6ICMwMDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZThlZWZmO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5idG4tbGluay5jb2xsYXBzZWQ6OmFmdGVyXHJcbntcclxuICAgIGNvbnRlbnQ6ICdcXDAwMkInOyAgIFxyXG59XHJcblxyXG4uYnRuLWxpbms6OmJlZm9yZVxyXG57XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICBsZWZ0OiAzMHB4O1xyXG4gICAgdG9wOiA1NnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuaW1nXHJcbntcclxuICAgIHdpZHRoOiA0MzBweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-faq',
                templateUrl: './faq.component.html',
                styleUrls: ['./faq.component.css']
            }]
    }], function () { return [{ type: _services_faq_service_service__WEBPACK_IMPORTED_MODULE_2__["FaqServiceService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"] }]; }, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() {
        this.anio = new Date().getFullYear();
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 197, vars: 1, consts: [[1, "container-fluid", "fh5co_footer_bg", "pb-3"], [1, "container", "animate-box"], [1, "row"], [1, "col-12", "spdp_right", "py-5"], ["xmlns", "http://www.w3.org/2000/svg", "width", "200", "height", "70", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 224.87999 74.999997", "version", "1.2", 1, "mt-3s"], ["overflow", "visible", "id", "glyph0-0"], ["d", "M 23.660156 -18.027344 C 23.660156 -20.476562 21.660156 -22.53125 19.152344 -22.53125 L 1.125 -22.53125 L 1.125 0 L 19.152344 0 C 21.660156 0 23.660156 -2.054688 23.660156 -4.507812 L 23.660156 -9.011719 C 23.660156 -10.253906 22.644531 -11.265625 21.40625 -11.265625 C 22.644531 -11.265625 23.660156 -12.28125 23.660156 -13.519531 Z M 19.152344 -18.027344 L 19.152344 -13.519531 L 5.632812 -13.519531 L 5.632812 -18.027344 Z M 5.632812 -4.507812 L 5.632812 -9.011719 L 19.152344 -9.011719 L 19.152344 -4.507812 Z M 5.632812 -4.507812 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph0-1"], ["d", "M 23.660156 0 L 23.660156 -4.507812 L 5.632812 -4.507812 L 5.632812 -22.53125 L 1.125 -22.53125 L 1.125 -4.507812 C 1.125 -2.027344 3.15625 0 5.632812 0 Z M 23.660156 0 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph0-2"], ["d", "M 19.152344 0 C 21.660156 0 23.660156 -2.054688 23.660156 -4.507812 L 23.660156 -18.027344 C 23.660156 -20.503906 21.632812 -22.53125 19.152344 -22.53125 L 5.632812 -22.53125 C 3.15625 -22.53125 1.125 -20.503906 1.125 -18.027344 L 1.125 -4.507812 C 1.125 -2.027344 3.15625 0 5.632812 0 Z M 5.632812 -18.027344 L 19.152344 -18.027344 L 19.152344 -4.507812 L 5.632812 -4.507812 Z M 5.632812 -18.027344 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph0-3"], ["d", "M 23.660156 -22.53125 L 5.632812 -22.53125 C 3.15625 -22.53125 1.125 -20.503906 1.125 -18.027344 L 1.125 -4.507812 C 1.125 -2.027344 3.15625 0 5.632812 0 L 19.152344 0 C 21.660156 0 23.660156 -2.054688 23.660156 -4.507812 L 23.660156 -13.519531 L 10.140625 -13.519531 L 10.140625 -9.011719 L 19.152344 -9.011719 L 19.152344 -4.507812 L 5.632812 -4.507812 L 5.632812 -18.027344 L 23.660156 -18.027344 Z M 23.660156 -22.53125 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph0-4"], ["d", "M 23.660156 -22.53125 L 5.632812 -22.53125 C 3.15625 -22.53125 1.125 -20.503906 1.125 -18.027344 L 1.125 -4.507812 C 1.125 -2.027344 3.15625 0 5.632812 0 L 23.660156 0 L 23.660156 -4.507812 L 5.632812 -4.507812 L 5.632812 -9.011719 L 23.660156 -9.011719 L 23.660156 -13.519531 L 5.632812 -13.519531 L 5.632812 -18.027344 L 23.660156 -18.027344 Z M 23.660156 -22.53125 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph1-0"], ["d", "M 6.773438 -6.453125 L 0.324219 -6.453125 L 0.324219 -5.160156 L 2.902344 -5.160156 L 2.902344 0 L 4.191406 0 L 4.191406 -5.160156 L 6.773438 -5.160156 Z M 6.773438 -6.453125 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph1-1"], ["d", "M 5.484375 -3.871094 L 1.613281 -3.871094 L 1.613281 -6.453125 L 0.324219 -6.453125 L 0.324219 0 L 1.613281 0 L 1.613281 -2.582031 L 5.484375 -2.582031 L 5.484375 0 L 6.773438 0 L 6.773438 -6.453125 L 5.484375 -6.453125 Z M 5.484375 -3.871094 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph1-2"], ["d", "M 6.773438 -6.453125 L 1.613281 -6.453125 C 0.902344 -6.453125 0.324219 -5.871094 0.324219 -5.160156 L 0.324219 -1.289062 C 0.324219 -0.582031 0.902344 0 1.613281 0 L 6.773438 0 L 6.773438 -1.289062 L 1.613281 -1.289062 L 1.613281 -2.582031 L 6.773438 -2.582031 L 6.773438 -3.871094 L 1.613281 -3.871094 L 1.613281 -5.160156 L 6.773438 -5.160156 Z M 6.773438 -6.453125 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph1-3"], ["d", "", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph1-4"], ["d", "M 5.484375 -6.453125 L 0.324219 -6.453125 L 0.324219 0 L 1.613281 0 L 1.613281 -2.582031 L 5.484375 -2.582031 C 6.191406 -2.582031 6.773438 -3.160156 6.773438 -3.871094 L 6.773438 -5.160156 C 6.773438 -5.871094 6.191406 -6.453125 5.484375 -6.453125 Z M 1.613281 -3.871094 L 1.613281 -5.160156 L 5.484375 -5.160156 L 5.484375 -3.871094 Z M 1.613281 -3.871094 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph1-5"], ["d", "M 6.773438 -5.160156 C 6.773438 -5.871094 6.191406 -6.453125 5.484375 -6.453125 L 0.324219 -6.453125 L 0.324219 0 L 1.613281 0 L 1.613281 -2.582031 L 2.371094 -2.582031 L 4.757812 -0.195312 C 4.886719 -0.0664062 5.046875 0 5.226562 0 L 6.773438 0 L 6.773438 -1.289062 L 5.484375 -1.289062 L 4.191406 -2.582031 L 5.484375 -2.582031 C 6.191406 -2.582031 6.773438 -3.160156 6.773438 -3.871094 Z M 5.484375 -5.160156 L 5.484375 -3.871094 L 1.613281 -3.871094 L 1.613281 -5.160156 Z M 5.484375 -5.160156 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph1-6"], ["d", "M 6.773438 -6.453125 L 1.613281 -6.453125 C 0.902344 -6.453125 0.324219 -5.871094 0.324219 -5.160156 L 0.324219 -3.871094 C 0.324219 -3.160156 0.902344 -2.582031 1.613281 -2.582031 L 5.484375 -2.582031 L 5.484375 -1.289062 L 0.324219 -1.289062 L 0.324219 0 L 5.484375 0 C 6.191406 0 6.773438 -0.582031 6.773438 -1.289062 L 6.773438 -2.582031 C 6.773438 -3.289062 6.191406 -3.871094 5.484375 -3.871094 L 1.613281 -3.871094 L 1.613281 -5.160156 L 6.773438 -5.160156 Z M 6.773438 -6.453125 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph1-7"], ["d", "M 5.484375 0 C 6.203125 0 6.773438 -0.589844 6.773438 -1.289062 L 6.773438 -5.160156 C 6.773438 -5.871094 6.191406 -6.453125 5.484375 -6.453125 L 1.613281 -6.453125 C 0.902344 -6.453125 0.324219 -5.871094 0.324219 -5.160156 L 0.324219 -1.289062 C 0.324219 -0.582031 0.902344 0 1.613281 0 Z M 1.613281 -5.160156 L 5.484375 -5.160156 L 5.484375 -1.289062 L 1.613281 -1.289062 Z M 1.613281 -5.160156 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph1-8"], ["d", "M 1.613281 0 L 1.613281 -4.25 L 5.667969 -0.195312 C 5.789062 -0.0742188 5.953125 0 6.128906 0 C 6.484375 0 6.773438 -0.289062 6.773438 -0.644531 L 6.773438 -6.453125 L 5.484375 -6.453125 L 5.484375 -2.203125 L 1.425781 -6.257812 C 1.304688 -6.378906 1.144531 -6.453125 0.96875 -6.453125 C 0.613281 -6.453125 0.324219 -6.160156 0.324219 -5.804688 L 0.324219 0 Z M 1.613281 0 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph1-9"], ["d", "M 1.613281 -6.453125 C 0.902344 -6.453125 0.324219 -5.871094 0.324219 -5.160156 L 0.324219 0 L 1.613281 0 L 1.613281 -2.582031 L 5.484375 -2.582031 L 5.484375 0 L 6.773438 0 L 6.773438 -5.160156 C 6.773438 -5.871094 6.191406 -6.453125 5.484375 -6.453125 Z M 1.613281 -5.160156 L 5.484375 -5.160156 L 5.484375 -3.871094 L 1.613281 -3.871094 Z M 1.613281 -5.160156 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph1-10"], ["d", "M 6.773438 0 L 6.773438 -1.289062 L 1.613281 -1.289062 L 1.613281 -6.453125 L 0.324219 -6.453125 L 0.324219 -1.289062 C 0.324219 -0.582031 0.902344 0 1.613281 0 Z M 6.773438 0 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph1-11"], ["d", "M 6.773438 0 L 6.773438 -1.289062 L 4.191406 -1.289062 L 4.191406 -5.160156 L 6.773438 -5.160156 L 6.773438 -6.453125 L 0.324219 -6.453125 L 0.324219 -5.160156 L 2.902344 -5.160156 L 2.902344 -1.289062 L 0.324219 -1.289062 L 0.324219 0 Z M 6.773438 0 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph1-12"], ["d", "M 6.773438 -1.289062 L 2.523438 -1.289062 L 6.582031 -5.347656 C 6.703125 -5.46875 6.773438 -5.628906 6.773438 -5.804688 C 6.773438 -6.160156 6.484375 -6.453125 6.128906 -6.453125 L 0.324219 -6.453125 L 0.324219 -5.160156 L 4.574219 -5.160156 L 0.515625 -1.105469 C 0.394531 -0.984375 0.324219 -0.824219 0.324219 -0.644531 C 0.324219 -0.289062 0.613281 0 0.96875 0 L 6.773438 0 Z M 6.773438 -1.289062 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph1-13"], ["d", "M 5.484375 0 C 6.191406 0 6.773438 -0.582031 6.773438 -1.289062 L 6.773438 -5.160156 C 6.773438 -5.871094 6.191406 -6.453125 5.484375 -6.453125 L 0.324219 -6.453125 L 0.324219 0 Z M 1.613281 -5.160156 L 5.484375 -5.160156 L 5.484375 -1.289062 L 1.613281 -1.289062 Z M 1.613281 -5.160156 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph1-14"], ["d", "M 6.773438 -5.160156 C 6.773438 -5.863281 6.203125 -6.453125 5.484375 -6.453125 L 0.324219 -6.453125 L 0.324219 0 L 5.484375 0 C 6.203125 0 6.773438 -0.589844 6.773438 -1.289062 L 6.773438 -2.582031 C 6.773438 -2.933594 6.484375 -3.226562 6.128906 -3.226562 C 6.484375 -3.226562 6.773438 -3.515625 6.773438 -3.871094 Z M 5.484375 -5.160156 L 5.484375 -3.871094 L 1.613281 -3.871094 L 1.613281 -5.160156 Z M 1.613281 -1.289062 L 1.613281 -2.582031 L 5.484375 -2.582031 L 5.484375 -1.289062 Z M 1.613281 -1.289062 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph1-15"], ["d", "M 6.773438 -6.453125 L 1.613281 -6.453125 C 0.902344 -6.453125 0.324219 -5.871094 0.324219 -5.160156 L 0.324219 -1.289062 C 0.324219 -0.582031 0.902344 0 1.613281 0 L 5.484375 0 C 6.203125 0 6.773438 -0.589844 6.773438 -1.289062 L 6.773438 -3.871094 L 2.902344 -3.871094 L 2.902344 -2.582031 L 5.484375 -2.582031 L 5.484375 -1.289062 L 1.613281 -1.289062 L 1.613281 -5.160156 L 6.773438 -5.160156 Z M 6.773438 -6.453125 ", 2, "stroke", "none"], ["id", "clip1"], ["d", "M 27 33 L 27.617188 33 L 27.617188 56.882812 L 27 56.882812 Z M 27 33 "], ["id", "clip2"], ["d", "M 27 28.703125 L 27.617188 28.703125 L 27.617188 56.882812 L 27 56.882812 Z M 27 28.703125 "], ["id", "clip3"], ["d", "M 27 31 L 27.617188 31 L 27.617188 56.882812 L 27 56.882812 Z M 27 31 "], ["id", "clip4"], ["d", "M 10.375 33 L 27 33 L 27 56.882812 L 10.375 56.882812 Z M 10.375 33 "], ["id", "clip5"], ["d", "M 14 28.703125 L 27 28.703125 L 27 56.882812 L 14 56.882812 Z M 14 28.703125 "], ["id", "clip6"], ["d", "M 12 31 L 27 31 L 27 56.882812 L 12 56.882812 Z M 12 31 "], ["id", "clip7"], ["d", "M 27.371094 33 L 28 33 L 28 56.882812 L 27.371094 56.882812 Z M 27.371094 33 "], ["id", "clip8"], ["d", "M 27.371094 28.703125 L 28 28.703125 L 28 56.882812 L 27.371094 56.882812 Z M 27.371094 28.703125 "], ["id", "clip9"], ["d", "M 27.371094 31 L 28 31 L 28 56.882812 L 27.371094 56.882812 Z M 27.371094 31 "], ["id", "clip10"], ["d", "M 27.371094 33 L 44.351562 33 L 44.351562 56.882812 L 27.371094 56.882812 Z M 27.371094 33 "], ["id", "clip11"], ["d", "M 27.371094 28.703125 L 41 28.703125 L 41 56.882812 L 27.371094 56.882812 Z M 27.371094 28.703125 "], ["id", "clip12"], ["d", "M 27.371094 31 L 43 31 L 43 56.882812 L 27.371094 56.882812 Z M 27.371094 31 "], ["id", "clip13"], ["d", "M 18 17.804688 L 36.722656 17.804688 L 36.722656 24 L 18 24 Z M 18 17.804688 "], ["id", "surface1"], [2, "fill", "rgb(25.099182%,78.42865%,0%)", "fill-opacity", "1"], [0, "xlink", "href", "#glyph0-0", "x", "47.885922", "y", "43.636454"], [0, "xlink", "href", "#glyph0-1", "x", "72.668001", "y", "43.636454"], [0, "xlink", "href", "#glyph0-2", "x", "97.450079", "y", "43.636454"], [0, "xlink", "href", "#glyph0-3", "x", "122.232157", "y", "43.636454"], [0, "xlink", "href", "#glyph0-3", "x", "147.014235", "y", "43.636454"], [0, "xlink", "href", "#glyph0-1", "x", "171.796319", "y", "43.636454"], [0, "xlink", "href", "#glyph0-4", "x", "196.578403", "y", "43.636454"], ["clip-path", "url(#clip1)", "clip-rule", "nonzero"], ["d", "M 42.203125 33.648438 C 42.203125 34.136719 42.203125 34.625 42.203125 35.113281 C 42.367188 35.164062 42.527344 35.214844 42.691406 35.269531 C 42.691406 41.808594 42.691406 48.347656 42.691406 54.886719 C 40.128906 54.027344 37.445312 53.664062 34.777344 53.796875 C 32.332031 54.300781 29.886719 55.339844 27.582031 56.882812 C 32.871094 54.683594 38.816406 54.683594 44.109375 56.882812 C 44.109375 49.367188 44.109375 41.851562 44.109375 34.335938 C 43.484375 34.074219 42.847656 33.847656 42.203125 33.648438 ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "rgb(0%,50.19989%,0%)", "fill-opacity", "1"], ["clip-path", "url(#clip2)", "clip-rule", "nonzero"], ["d", "M 28.675781 54.414062 C 32.109375 51.445312 35.820312 49.84375 39.253906 49.851562 C 39.253906 43.316406 39.253906 36.777344 39.253906 30.238281 C 35.820312 30.226562 32.109375 31.828125 28.675781 34.796875 C 28.675781 41.335938 28.675781 47.875 28.675781 54.414062 Z M 40.347656 51.375 C 36.261719 50.941406 31.667969 52.921875 27.582031 56.882812 C 27.582031 49.367188 27.582031 41.851562 27.582031 34.335938 C 31.667969 30.378906 36.261719 28.398438 40.347656 28.832031 C 40.347656 36.347656 40.347656 43.859375 40.347656 51.375 ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "rgb(0%,50.19989%,0%)", "fill-opacity", "1"], ["clip-path", "url(#clip3)", "clip-rule", "nonzero"], ["d", "M 40.347656 31.039062 C 40.347656 31.527344 40.347656 32.015625 40.347656 32.503906 C 40.550781 32.53125 40.75 32.5625 40.949219 32.597656 C 40.949219 39.136719 40.949219 45.675781 40.949219 52.214844 C 38.617188 51.796875 36.171875 51.929688 33.746094 52.578125 C 31.652344 53.515625 29.558594 54.96875 27.582031 56.882812 C 32.261719 53.75 37.523438 52.699219 42.203125 53.960938 C 42.203125 46.445312 42.203125 38.929688 42.203125 31.414062 C 41.59375 31.25 40.972656 31.125 40.347656 31.039062 ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "rgb(0%,50.19989%,0%)", "fill-opacity", "1"], ["clip-path", "url(#clip4)", "clip-rule", "nonzero"], ["d", "M 12.28125 33.648438 C 12.28125 34.136719 12.28125 34.625 12.28125 35.113281 C 12.117188 35.164062 11.957031 35.214844 11.792969 35.269531 C 11.792969 41.808594 11.792969 48.347656 11.792969 54.886719 C 14.355469 54.027344 17.039062 53.664062 19.707031 53.796875 C 22.152344 54.300781 24.597656 55.339844 26.902344 56.882812 C 21.613281 54.683594 15.667969 54.683594 10.375 56.882812 C 10.375 49.367188 10.375 41.851562 10.375 34.335938 C 11.003906 34.074219 11.640625 33.847656 12.28125 33.648438 ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "rgb(0%,50.19989%,0%)", "fill-opacity", "1"], ["clip-path", "url(#clip5)", "clip-rule", "nonzero"], ["d", "M 25.808594 34.796875 C 22.378906 31.828125 18.664062 30.226562 15.230469 30.238281 C 15.230469 36.777344 15.230469 43.316406 15.230469 49.851562 C 18.664062 49.84375 22.378906 51.445312 25.808594 54.414062 C 25.808594 47.875 25.808594 41.335938 25.808594 34.796875 Z M 14.136719 28.832031 C 18.222656 28.398438 22.816406 30.378906 26.902344 34.335938 C 26.902344 41.851562 26.902344 49.367188 26.902344 56.882812 C 22.816406 52.921875 18.222656 50.941406 14.136719 51.375 C 14.136719 43.859375 14.136719 36.347656 14.136719 28.832031 ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "rgb(0%,50.19989%,0%)", "fill-opacity", "1"], ["clip-path", "url(#clip6)", "clip-rule", "nonzero"], ["d", "M 14.136719 31.039062 C 14.136719 31.527344 14.136719 32.015625 14.136719 32.503906 C 13.9375 32.53125 13.734375 32.5625 13.535156 32.597656 C 13.535156 39.136719 13.535156 45.675781 13.535156 52.214844 C 15.867188 51.796875 18.3125 51.929688 20.738281 52.578125 C 22.835938 53.515625 24.929688 54.96875 26.902344 56.882812 C 22.222656 53.75 16.964844 52.699219 12.28125 53.960938 C 12.28125 46.445312 12.28125 38.929688 12.28125 31.414062 C 12.890625 31.25 13.511719 31.125 14.136719 31.039062 ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "rgb(0%,50.19989%,0%)", "fill-opacity", "1"], ["clip-path", "url(#clip7)", "clip-rule", "nonzero"], ["d", "M 12.527344 33.648438 C 12.527344 34.136719 12.527344 34.625 12.527344 35.113281 C 12.363281 35.164062 12.199219 35.214844 12.039062 35.269531 C 12.039062 41.808594 12.039062 48.347656 12.039062 54.886719 C 14.601562 54.027344 17.285156 53.664062 19.949219 53.796875 C 22.398438 54.300781 24.84375 55.339844 27.148438 56.882812 C 21.855469 54.683594 15.910156 54.683594 10.621094 56.882812 C 10.621094 49.367188 10.621094 41.851562 10.621094 34.335938 C 11.246094 34.074219 11.882812 33.847656 12.527344 33.648438 ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "rgb(0.389099%,7.449341%,100%)", "fill-opacity", "1"], ["clip-path", "url(#clip8)", "clip-rule", "nonzero"], ["d", "M 26.054688 54.414062 C 22.621094 51.445312 18.90625 49.84375 15.476562 49.851562 C 15.476562 43.316406 15.476562 36.777344 15.476562 30.238281 C 18.90625 30.226562 22.621094 31.828125 26.054688 34.796875 C 26.054688 41.335938 26.054688 47.875 26.054688 54.414062 Z M 14.382812 51.375 C 18.46875 50.941406 23.058594 52.921875 27.148438 56.882812 C 27.148438 49.367188 27.148438 41.851562 27.148438 34.335938 C 23.058594 30.378906 18.46875 28.398438 14.382812 28.832031 C 14.382812 36.347656 14.382812 43.859375 14.382812 51.375 ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "rgb(0.389099%,7.449341%,100%)", "fill-opacity", "1"], ["clip-path", "url(#clip9)", "clip-rule", "nonzero"], ["d", "M 14.382812 31.039062 C 14.382812 31.527344 14.382812 32.015625 14.382812 32.503906 C 14.179688 32.53125 13.980469 32.5625 13.78125 32.597656 C 13.78125 39.136719 13.78125 45.675781 13.78125 52.214844 C 16.113281 51.796875 18.558594 51.929688 20.980469 52.578125 C 23.078125 53.515625 25.171875 54.96875 27.148438 56.882812 C 22.464844 53.75 17.207031 52.699219 12.527344 53.960938 C 12.527344 46.445312 12.527344 38.929688 12.527344 31.414062 C 13.136719 31.25 13.753906 31.125 14.382812 31.039062 ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "rgb(0.389099%,7.449341%,100%)", "fill-opacity", "1"], ["clip-path", "url(#clip10)", "clip-rule", "nonzero"], ["d", "M 42.445312 33.648438 C 42.445312 34.136719 42.445312 34.625 42.445312 35.113281 C 42.609375 35.164062 42.773438 35.214844 42.9375 35.269531 C 42.9375 41.808594 42.9375 48.347656 42.9375 54.886719 C 40.371094 54.027344 37.6875 53.664062 35.023438 53.796875 C 32.578125 54.300781 30.128906 55.339844 27.824219 56.882812 C 33.117188 54.683594 39.0625 54.683594 44.355469 56.882812 C 44.355469 49.367188 44.355469 41.851562 44.355469 34.335938 C 43.726562 34.074219 43.089844 33.847656 42.445312 33.648438 ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "rgb(0.389099%,7.449341%,100%)", "fill-opacity", "1"], ["clip-path", "url(#clip11)", "clip-rule", "nonzero"], ["d", "M 28.921875 34.796875 C 32.351562 31.828125 36.066406 30.226562 39.496094 30.238281 C 39.496094 36.777344 39.496094 43.316406 39.496094 49.851562 C 36.066406 49.84375 32.351562 51.445312 28.921875 54.414062 C 28.921875 47.875 28.921875 41.335938 28.921875 34.796875 Z M 40.589844 28.832031 C 36.503906 28.398438 31.914062 30.378906 27.824219 34.335938 C 27.824219 41.851562 27.824219 49.367188 27.824219 56.882812 C 31.914062 52.921875 36.503906 50.941406 40.589844 51.375 C 40.589844 43.859375 40.589844 36.347656 40.589844 28.832031 ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "rgb(0.389099%,7.449341%,100%)", "fill-opacity", "1"], ["clip-path", "url(#clip12)", "clip-rule", "nonzero"], ["d", "M 40.589844 31.039062 C 40.589844 31.527344 40.589844 32.015625 40.589844 32.503906 C 40.792969 32.53125 40.992188 32.5625 41.191406 32.597656 C 41.191406 39.136719 41.191406 45.675781 41.191406 52.214844 C 38.863281 51.796875 36.414062 51.929688 33.992188 52.578125 C 31.894531 53.515625 29.800781 54.96875 27.824219 56.882812 C 32.507812 53.75 37.765625 52.699219 42.445312 53.960938 C 42.445312 46.445312 42.445312 38.929688 42.445312 31.414062 C 41.835938 31.25 41.21875 31.125 40.589844 31.039062 ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "rgb(0.389099%,7.449341%,100%)", "fill-opacity", "1"], ["d", "M 27.355469 28.777344 C 26.472656 28.777344 25.746094 29.503906 25.746094 30.390625 C 25.746094 31.273438 26.472656 32 27.355469 32 C 28.238281 32 28.960938 31.273438 28.960938 30.390625 C 28.960938 29.488281 28.238281 28.777344 27.355469 28.777344 Z M 27.355469 28.777344 ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "rgb(100%,50.979614%,6.269836%)", "fill-opacity", "1"], ["d", "M 27.355469 24.964844 C 25.878906 24.964844 24.488281 25.542969 23.445312 26.574219 C 23.023438 26.996094 23.023438 27.675781 23.445312 28.097656 C 23.648438 28.300781 23.921875 28.417969 24.210938 28.417969 C 24.5 28.417969 24.777344 28.300781 24.980469 28.097656 C 25.617188 27.460938 26.457031 27.109375 27.355469 27.109375 C 28.253906 27.109375 29.105469 27.460938 29.742188 28.097656 C 29.945312 28.300781 30.222656 28.417969 30.511719 28.417969 C 30.800781 28.417969 31.078125 28.300781 31.277344 28.097656 C 31.699219 27.675781 31.699219 26.996094 31.277344 26.574219 C 30.222656 25.542969 28.832031 24.964844 27.355469 24.964844 Z M 27.355469 24.964844 ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "rgb(100%,50.979614%,6.269836%)", "fill-opacity", "1"], ["clip-path", "url(#clip13)", "clip-rule", "nonzero"], ["d", "M 36.304688 21.570312 C 33.914062 19.175781 30.730469 17.855469 27.355469 17.855469 C 23.980469 17.855469 20.792969 19.160156 18.402344 21.554688 C 17.984375 21.976562 17.984375 22.65625 18.402344 23.078125 C 18.605469 23.28125 18.882812 23.398438 19.171875 23.398438 C 19.460938 23.398438 19.738281 23.28125 19.9375 23.078125 C 21.910156 21.105469 24.542969 20.015625 27.355469 20.015625 C 30.164062 20.015625 32.800781 21.105469 34.785156 23.09375 C 34.988281 23.296875 35.261719 23.410156 35.550781 23.410156 C 35.839844 23.410156 36.117188 23.296875 36.320312 23.09375 C 36.722656 22.671875 36.722656 21.988281 36.304688 21.570312 Z M 36.304688 21.570312 ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "rgb(100%,50.979614%,6.269836%)", "fill-opacity", "1"], ["d", "M 27.355469 21.496094 C 24.949219 21.496094 22.691406 22.425781 20.980469 24.121094 C 20.78125 24.324219 20.664062 24.601562 20.664062 24.890625 C 20.664062 25.179688 20.78125 25.457031 20.980469 25.660156 C 21.183594 25.863281 21.460938 25.980469 21.75 25.980469 C 22.039062 25.980469 22.316406 25.863281 22.515625 25.660156 C 23.804688 24.367188 25.53125 23.65625 27.355469 23.65625 C 29.179688 23.65625 30.902344 24.367188 32.191406 25.660156 C 32.394531 25.863281 32.667969 25.980469 32.957031 25.980469 C 33.25 25.980469 33.523438 25.863281 33.726562 25.660156 C 33.929688 25.457031 34.046875 25.179688 34.046875 24.890625 C 34.046875 24.601562 33.929688 24.324219 33.726562 24.121094 C 32.015625 22.441406 29.757812 21.496094 27.355469 21.496094 Z M 27.355469 21.496094 ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "rgb(100%,50.979614%,6.269836%)", "fill-opacity", "1"], [2, "fill", "rgb(100%,100%,100%)", "fill-opacity", "1"], [0, "xlink", "href", "#glyph1-0", "x", "47.687842", "y", "54.323754"], [0, "xlink", "href", "#glyph1-1", "x", "54.784252", "y", "54.323754"], [0, "xlink", "href", "#glyph1-2", "x", "61.880662", "y", "54.323754"], [0, "xlink", "href", "#glyph1-3", "x", "68.977072", "y", "54.323754"], [0, "xlink", "href", "#glyph1-4", "x", "72.525282", "y", "54.323754"], [0, "xlink", "href", "#glyph1-2", "x", "79.621692", "y", "54.323754"], [0, "xlink", "href", "#glyph1-5", "x", "86.718102", "y", "54.323754"], [0, "xlink", "href", "#glyph1-6", "x", "93.814512", "y", "54.323754"], [0, "xlink", "href", "#glyph1-7", "x", "100.910922", "y", "54.323754"], [0, "xlink", "href", "#glyph1-8", "x", "108.007332", "y", "54.323754"], [0, "xlink", "href", "#glyph1-9", "x", "115.103742", "y", "54.323754"], [0, "xlink", "href", "#glyph1-10", "x", "122.200152", "y", "54.323754"], [0, "xlink", "href", "#glyph1-11", "x", "129.296562", "y", "54.323754"], [0, "xlink", "href", "#glyph1-12", "x", "136.392972", "y", "54.323754"], [0, "xlink", "href", "#glyph1-2", "x", "143.489382", "y", "54.323754"], [0, "xlink", "href", "#glyph1-13", "x", "150.585792", "y", "54.323754"], [0, "xlink", "href", "#glyph1-3", "x", "157.682202", "y", "54.323754"], [0, "xlink", "href", "#glyph1-14", "x", "161.230412", "y", "54.323754"], [0, "xlink", "href", "#glyph1-10", "x", "168.326822", "y", "54.323754"], [0, "xlink", "href", "#glyph1-7", "x", "175.423232", "y", "54.323754"], [0, "xlink", "href", "#glyph1-15", "x", "182.519642", "y", "54.323754"], [0, "xlink", "href", "#glyph1-3", "x", "189.616052", "y", "54.323754"], [0, "xlink", "href", "#glyph1-6", "x", "193.164262", "y", "54.323754"], [0, "xlink", "href", "#glyph1-11", "x", "200.260672", "y", "54.323754"], [0, "xlink", "href", "#glyph1-0", "x", "207.357082", "y", "54.323754"], [0, "xlink", "href", "#glyph1-2", "x", "214.453493", "y", "54.323754"], [1, "clearfix"], [1, "col-12", "col-md-12"], [1, "footer_main_title", "py-3", "d-sm-flex", "d-none"], [1, "footer_sub_about", "pb-3", "d-sm-flex", "d-none"], [1, "container"], [1, "admin-contact", "col-md-6", "col-12", "p-2"], ["aria-hidden", "true", 1, "fa", "fa-envelope", "fa-lg"], ["href", "mailto: admin@bloggle.tech"], ["aria-hidden", "true", 1, "fa", "fa-cogs", "fa-lg"], ["href", "mailto: developer@bloggle.tech"], [1, "container-fluid", "fh5co_footer_right_reserved"], [1, "col-12", "py-4", "text-center"], [1, "gototop", "js-top"], ["href", "#", 1, "js-gotop"], [1, "fa", "fa-arrow-up"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "symbol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "symbol", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "symbol", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "symbol", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "symbol", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "symbol", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "symbol", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "symbol", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "symbol", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "symbol", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "symbol", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "symbol", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "symbol", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "symbol", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "symbol", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "symbol", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "symbol", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "symbol", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "symbol", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "symbol", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "symbol", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "clipPath", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "clipPath", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "clipPath", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "clipPath", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "clipPath", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "clipPath", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "path", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "clipPath", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "path", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "clipPath", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "clipPath", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "clipPath", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "clipPath", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "clipPath", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "clipPath", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "path", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "g", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "g", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "use", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "g", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "use", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "g", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "use", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "g", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "use", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "g", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "use", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "g", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "use", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "g", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "use", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "g", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "path", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "g", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "g", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "path", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "g", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "path", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "g", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "path", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "g", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "path", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "g", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "path", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "g", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "path", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "g", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "path", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "g", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "path", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "g", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "path", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "g", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "path", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "path", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "path", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "g", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "path", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "path", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "use", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "use", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "use", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "use", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "use", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "use", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "use", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "use", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "use", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "use", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "use", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "use", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "use", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "use", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "use", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "use", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "use", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "use", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "use", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "use", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "use", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "use", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "use", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "use", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "use", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "use", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "div", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " Our website is a tool for people to explore and share their innovation and creativity with their audience by encouraging them to post (blogs). These blogs are a unique way of expressing creativity and have been found to be one of the most effective ways of communicating messages to a large audience. Blogs are extremely user-friendly, and they support a variety of multimedia formats, such as rich images, to represent information. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "i", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "a", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "piyushchohan48@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "i", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "a", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "kirajustice807@outlook.in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "a", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "i", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A9 Copyright ", ctx.anio, " , All rights reserved.");
    } }, styles: [".wrapper[_ngcontent-%COMP%]\r\n{\r\n    display: flex;\r\n    \r\n\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]\r\n{\r\n    position: relative;\r\n    border-radius: 50%;\r\n    padding: 15px;\r\n    margin: 10px;\r\n    width: 50px;\r\n    height: 50px;\r\n    font-size: 18px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    cursor: pointer;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]\r\n{\r\n    color: #fff;\r\n    transition: .4s linear;\r\n}\r\n\r\n\r\n\r\n.wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]::before, .wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]::after\r\n{\r\n    content: '';\r\n    position: absolute;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    transition: .4s linear;\r\n}\r\n\r\n\r\n\r\n.wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%]\r\n{\r\n    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);\r\n    transform: scale(.8);\r\n    transition: .4s linear;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover::before\r\n{\r\n    border-radius: 50%;\r\n    border-left: 4px solid;\r\n    border-right: 4px solid;\r\n    transform: skewX(20deg);\r\n    color: #fff;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover::after\r\n{\r\n    border-radius: 50%;\r\n    border-top: 4px solid;\r\n    border-bottom: 4px solid;\r\n    transform: skewY(-20deg);\r\n    color: #fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGFBQWE7SUFDYjs0QkFDd0I7O0FBRTVCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCOztBQUVBOzs7Ozs7Ozs7Ozs7OztHQWNHOztBQUVIOzs7SUFHSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLE9BQU87SUFDUCxNQUFNO0lBQ04sc0JBQXNCO0FBQzFCOztBQUVBOzs7Ozs7R0FNRzs7QUFFSDs7O0lBR0ksNENBQTRDO0lBQzVDLG9CQUFvQjtJQUNwQixzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJcclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyOyAqL1xyXG5cclxufVxyXG5cclxuLndyYXBwZXIgLmljb25cclxue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi53cmFwcGVyIC5pY29uIGlcclxue1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHMgbGluZWFyO1xyXG59XHJcblxyXG4vKiAud3JhcHBlciAudG9vbHRpcFxyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xyXG4gICAgY29sb3I6ICMxMTE7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDVweCA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsMC4yNjUsMS41NSk7XHJcbn0gKi9cclxuXHJcbi53cmFwcGVyIC5pY29uOjpiZWZvcmUsXHJcbi53cmFwcGVyIC5pY29uOjphZnRlclxyXG57XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHMgbGluZWFyO1xyXG59XHJcblxyXG4vKiAud3JhcHBlciAuaWNvbjpob3ZlciAudG9vbHRpcFxyXG57XHJcbiAgICB0b3A6IC00NXB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxufSAqL1xyXG5cclxuLndyYXBwZXIgLmljb246aG92ZXIgc3BhbixcclxuLndyYXBwZXIgLmljb246aG92ZXIgLnRvb2x0aXBcclxue1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAtMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC44KTtcclxuICAgIHRyYW5zaXRpb246IC40cyBsaW5lYXI7XHJcbn1cclxuXHJcbi53cmFwcGVyIC5pY29uOmhvdmVyOjpiZWZvcmVcclxue1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZDtcclxuICAgIGJvcmRlci1yaWdodDogNHB4IHNvbGlkO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCgyMGRlZyk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLndyYXBwZXIgLmljb246aG92ZXI6OmFmdGVyXHJcbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZDtcclxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZDtcclxuICAgIHRyYW5zZm9ybTogc2tld1koLTIwZGVnKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utility_darkmode_modeConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/darkmode/modeConfig */ "./src/app/utility/darkmode/modeConfig.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function HeaderComponent_ul_186_a_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Manage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ul_186_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_186_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.toggler(_r3.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 152, 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Create ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HeaderComponent_ul_186_a_16_Template, 3, 0, "a", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_186_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.currentUser, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.admin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/publicprofile/", ctx_r0.currentUser, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HeaderComponent_ng_template_187_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_187_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.toggler(_r8.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 152, 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(authservice) {
        this.authservice = authservice;
        this.admin = false;
        this.modeCounter = false;
        let user = this.authservice.isAuthenticated().userName;
        if (user == "Legion@R00t")
            this.admin = true;
        this.darkMode = new _utility_darkmode_modeConfig__WEBPACK_IMPORTED_MODULE_1__["DarkModeConfig"]();
    }
    ngOnInit() {
    }
    ngAfterViewChecked() {
        if (this.modeCounter == false) {
            var mode = this.darkMode.getCookie('darkmode');
            setTimeout(() => {
                if (mode === "true") {
                    this.darkMode.navBarToggler(true);
                }
                else {
                    this.darkMode.navBarToggler(false);
                }
            });
            this.modeCounter = true;
        }
    }
    ngAfterViewInit() {
        var mode = this.darkMode.getCookie('darkmode');
        setTimeout(() => {
            if (mode === "true") {
                document.getElementById('mode').checked = true;
                this.darkMode.darkModeToggler(true);
                this.darkMode.navBarToggler(true);
            }
            else {
                document.getElementById('mode').checked = false;
                this.darkMode.darkModeToggler(false);
                this.darkMode.navBarToggler(false);
            }
        });
    }
    isLoggedIn() {
        if (this.authservice.isLoggedIn.value) {
            this.currentUser = (this.authservice.isAuthenticated())['userName'];
            return true;
        }
        else
            return false;
    }
    logOut() {
        this.authservice.isLoggedIn.next(false);
        localStorage.removeItem('User');
        window.location.href = "/home";
    }
    toggler(mode) {
        if (mode == true) {
            document.cookie = "darkmode=true";
            this.darkMode.darkModeToggler(true);
            this.darkMode.navBarToggler(true);
        }
        else {
            document.cookie = "darkmode=false";
            this.darkMode.darkModeToggler(false);
            this.darkMode.navBarToggler(false);
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 189, vars: 2, consts: [[1, "container-fluid", "fh5co_padd_mediya", "padding_786"], [1, "navbar", "navbar-expand-lg"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "collapsed", "navbar-toggler-right", "mt-3"], [1, "fa", "fa-bars", "fa-lg"], ["href", "/home", 1, "navbar-brand"], ["width", "160", "height", "50", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 224.87999 74.999997", "version", "1.2"], ["overflow", "visible", "id", "glyph0-0"], ["d", "M 23.660156 -18.027344 C 23.660156 -20.476562 21.660156 -22.53125 19.152344 -22.53125 L 1.125 -22.53125 L 1.125 0 L 19.152344 0 C 21.660156 0 23.660156 -2.054688 23.660156 -4.507812 L 23.660156 -9.011719 C 23.660156 -10.253906 22.644531 -11.265625 21.40625 -11.265625 C 22.644531 -11.265625 23.660156 -12.28125 23.660156 -13.519531 Z M 19.152344 -18.027344 L 19.152344 -13.519531 L 5.632812 -13.519531 L 5.632812 -18.027344 Z M 5.632812 -4.507812 L 5.632812 -9.011719 L 19.152344 -9.011719 L 19.152344 -4.507812 Z M 5.632812 -4.507812 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph0-1"], ["d", "M 23.660156 0 L 23.660156 -4.507812 L 5.632812 -4.507812 L 5.632812 -22.53125 L 1.125 -22.53125 L 1.125 -4.507812 C 1.125 -2.027344 3.15625 0 5.632812 0 Z M 23.660156 0 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph0-2"], ["d", "M 19.152344 0 C 21.660156 0 23.660156 -2.054688 23.660156 -4.507812 L 23.660156 -18.027344 C 23.660156 -20.503906 21.632812 -22.53125 19.152344 -22.53125 L 5.632812 -22.53125 C 3.15625 -22.53125 1.125 -20.503906 1.125 -18.027344 L 1.125 -4.507812 C 1.125 -2.027344 3.15625 0 5.632812 0 Z M 5.632812 -18.027344 L 19.152344 -18.027344 L 19.152344 -4.507812 L 5.632812 -4.507812 Z M 5.632812 -18.027344 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph0-3"], ["d", "M 23.660156 -22.53125 L 5.632812 -22.53125 C 3.15625 -22.53125 1.125 -20.503906 1.125 -18.027344 L 1.125 -4.507812 C 1.125 -2.027344 3.15625 0 5.632812 0 L 19.152344 0 C 21.660156 0 23.660156 -2.054688 23.660156 -4.507812 L 23.660156 -13.519531 L 10.140625 -13.519531 L 10.140625 -9.011719 L 19.152344 -9.011719 L 19.152344 -4.507812 L 5.632812 -4.507812 L 5.632812 -18.027344 L 23.660156 -18.027344 Z M 23.660156 -22.53125 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph0-4"], ["d", "M 23.660156 -22.53125 L 5.632812 -22.53125 C 3.15625 -22.53125 1.125 -20.503906 1.125 -18.027344 L 1.125 -4.507812 C 1.125 -2.027344 3.15625 0 5.632812 0 L 23.660156 0 L 23.660156 -4.507812 L 5.632812 -4.507812 L 5.632812 -9.011719 L 23.660156 -9.011719 L 23.660156 -13.519531 L 5.632812 -13.519531 L 5.632812 -18.027344 L 23.660156 -18.027344 Z M 23.660156 -22.53125 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph1-0"], ["d", "M 6.773438 -6.453125 L 0.324219 -6.453125 L 0.324219 -5.160156 L 2.902344 -5.160156 L 2.902344 0 L 4.191406 0 L 4.191406 -5.160156 L 6.773438 -5.160156 Z M 6.773438 -6.453125 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph1-1"], ["d", "M 5.484375 -3.871094 L 1.613281 -3.871094 L 1.613281 -6.453125 L 0.324219 -6.453125 L 0.324219 0 L 1.613281 0 L 1.613281 -2.582031 L 5.484375 -2.582031 L 5.484375 0 L 6.773438 0 L 6.773438 -6.453125 L 5.484375 -6.453125 Z M 5.484375 -3.871094 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph1-2"], ["d", "M 6.773438 -6.453125 L 1.613281 -6.453125 C 0.902344 -6.453125 0.324219 -5.871094 0.324219 -5.160156 L 0.324219 -1.289062 C 0.324219 -0.582031 0.902344 0 1.613281 0 L 6.773438 0 L 6.773438 -1.289062 L 1.613281 -1.289062 L 1.613281 -2.582031 L 6.773438 -2.582031 L 6.773438 -3.871094 L 1.613281 -3.871094 L 1.613281 -5.160156 L 6.773438 -5.160156 Z M 6.773438 -6.453125 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph1-3"], ["d", "", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph1-4"], ["d", "M 5.484375 -6.453125 L 0.324219 -6.453125 L 0.324219 0 L 1.613281 0 L 1.613281 -2.582031 L 5.484375 -2.582031 C 6.191406 -2.582031 6.773438 -3.160156 6.773438 -3.871094 L 6.773438 -5.160156 C 6.773438 -5.871094 6.191406 -6.453125 5.484375 -6.453125 Z M 1.613281 -3.871094 L 1.613281 -5.160156 L 5.484375 -5.160156 L 5.484375 -3.871094 Z M 1.613281 -3.871094 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph1-5"], ["d", "M 6.773438 -5.160156 C 6.773438 -5.871094 6.191406 -6.453125 5.484375 -6.453125 L 0.324219 -6.453125 L 0.324219 0 L 1.613281 0 L 1.613281 -2.582031 L 2.371094 -2.582031 L 4.757812 -0.195312 C 4.886719 -0.0664062 5.046875 0 5.226562 0 L 6.773438 0 L 6.773438 -1.289062 L 5.484375 -1.289062 L 4.191406 -2.582031 L 5.484375 -2.582031 C 6.191406 -2.582031 6.773438 -3.160156 6.773438 -3.871094 Z M 5.484375 -5.160156 L 5.484375 -3.871094 L 1.613281 -3.871094 L 1.613281 -5.160156 Z M 5.484375 -5.160156 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph1-6"], ["d", "M 6.773438 -6.453125 L 1.613281 -6.453125 C 0.902344 -6.453125 0.324219 -5.871094 0.324219 -5.160156 L 0.324219 -3.871094 C 0.324219 -3.160156 0.902344 -2.582031 1.613281 -2.582031 L 5.484375 -2.582031 L 5.484375 -1.289062 L 0.324219 -1.289062 L 0.324219 0 L 5.484375 0 C 6.191406 0 6.773438 -0.582031 6.773438 -1.289062 L 6.773438 -2.582031 C 6.773438 -3.289062 6.191406 -3.871094 5.484375 -3.871094 L 1.613281 -3.871094 L 1.613281 -5.160156 L 6.773438 -5.160156 Z M 6.773438 -6.453125 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph1-7"], ["d", "M 5.484375 0 C 6.203125 0 6.773438 -0.589844 6.773438 -1.289062 L 6.773438 -5.160156 C 6.773438 -5.871094 6.191406 -6.453125 5.484375 -6.453125 L 1.613281 -6.453125 C 0.902344 -6.453125 0.324219 -5.871094 0.324219 -5.160156 L 0.324219 -1.289062 C 0.324219 -0.582031 0.902344 0 1.613281 0 Z M 1.613281 -5.160156 L 5.484375 -5.160156 L 5.484375 -1.289062 L 1.613281 -1.289062 Z M 1.613281 -5.160156 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph1-8"], ["d", "M 1.613281 0 L 1.613281 -4.25 L 5.667969 -0.195312 C 5.789062 -0.0742188 5.953125 0 6.128906 0 C 6.484375 0 6.773438 -0.289062 6.773438 -0.644531 L 6.773438 -6.453125 L 5.484375 -6.453125 L 5.484375 -2.203125 L 1.425781 -6.257812 C 1.304688 -6.378906 1.144531 -6.453125 0.96875 -6.453125 C 0.613281 -6.453125 0.324219 -6.160156 0.324219 -5.804688 L 0.324219 0 Z M 1.613281 0 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph1-9"], ["d", "M 1.613281 -6.453125 C 0.902344 -6.453125 0.324219 -5.871094 0.324219 -5.160156 L 0.324219 0 L 1.613281 0 L 1.613281 -2.582031 L 5.484375 -2.582031 L 5.484375 0 L 6.773438 0 L 6.773438 -5.160156 C 6.773438 -5.871094 6.191406 -6.453125 5.484375 -6.453125 Z M 1.613281 -5.160156 L 5.484375 -5.160156 L 5.484375 -3.871094 L 1.613281 -3.871094 Z M 1.613281 -5.160156 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph1-10"], ["d", "M 6.773438 0 L 6.773438 -1.289062 L 1.613281 -1.289062 L 1.613281 -6.453125 L 0.324219 -6.453125 L 0.324219 -1.289062 C 0.324219 -0.582031 0.902344 0 1.613281 0 Z M 6.773438 0 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph1-11"], ["d", "M 6.773438 0 L 6.773438 -1.289062 L 4.191406 -1.289062 L 4.191406 -5.160156 L 6.773438 -5.160156 L 6.773438 -6.453125 L 0.324219 -6.453125 L 0.324219 -5.160156 L 2.902344 -5.160156 L 2.902344 -1.289062 L 0.324219 -1.289062 L 0.324219 0 Z M 6.773438 0 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph1-12"], ["d", "M 6.773438 -1.289062 L 2.523438 -1.289062 L 6.582031 -5.347656 C 6.703125 -5.46875 6.773438 -5.628906 6.773438 -5.804688 C 6.773438 -6.160156 6.484375 -6.453125 6.128906 -6.453125 L 0.324219 -6.453125 L 0.324219 -5.160156 L 4.574219 -5.160156 L 0.515625 -1.105469 C 0.394531 -0.984375 0.324219 -0.824219 0.324219 -0.644531 C 0.324219 -0.289062 0.613281 0 0.96875 0 L 6.773438 0 Z M 6.773438 -1.289062 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph1-13"], ["d", "M 5.484375 0 C 6.191406 0 6.773438 -0.582031 6.773438 -1.289062 L 6.773438 -5.160156 C 6.773438 -5.871094 6.191406 -6.453125 5.484375 -6.453125 L 0.324219 -6.453125 L 0.324219 0 Z M 1.613281 -5.160156 L 5.484375 -5.160156 L 5.484375 -1.289062 L 1.613281 -1.289062 Z M 1.613281 -5.160156 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph1-14"], ["d", "M 6.773438 -5.160156 C 6.773438 -5.863281 6.203125 -6.453125 5.484375 -6.453125 L 0.324219 -6.453125 L 0.324219 0 L 5.484375 0 C 6.203125 0 6.773438 -0.589844 6.773438 -1.289062 L 6.773438 -2.582031 C 6.773438 -2.933594 6.484375 -3.226562 6.128906 -3.226562 C 6.484375 -3.226562 6.773438 -3.515625 6.773438 -3.871094 Z M 5.484375 -5.160156 L 5.484375 -3.871094 L 1.613281 -3.871094 L 1.613281 -5.160156 Z M 1.613281 -1.289062 L 1.613281 -2.582031 L 5.484375 -2.582031 L 5.484375 -1.289062 Z M 1.613281 -1.289062 ", 2, "stroke", "none"], ["overflow", "visible", "id", "glyph1-15"], ["d", "M 6.773438 -6.453125 L 1.613281 -6.453125 C 0.902344 -6.453125 0.324219 -5.871094 0.324219 -5.160156 L 0.324219 -1.289062 C 0.324219 -0.582031 0.902344 0 1.613281 0 L 5.484375 0 C 6.203125 0 6.773438 -0.589844 6.773438 -1.289062 L 6.773438 -3.871094 L 2.902344 -3.871094 L 2.902344 -2.582031 L 5.484375 -2.582031 L 5.484375 -1.289062 L 1.613281 -1.289062 L 1.613281 -5.160156 L 6.773438 -5.160156 Z M 6.773438 -6.453125 ", 2, "stroke", "none"], ["id", "clip1"], ["d", "M 27 33 L 27.617188 33 L 27.617188 56.882812 L 27 56.882812 Z M 27 33 "], ["id", "clip2"], ["d", "M 27 28.703125 L 27.617188 28.703125 L 27.617188 56.882812 L 27 56.882812 Z M 27 28.703125 "], ["id", "clip3"], ["d", "M 27 31 L 27.617188 31 L 27.617188 56.882812 L 27 56.882812 Z M 27 31 "], ["id", "clip4"], ["d", "M 10.375 33 L 27 33 L 27 56.882812 L 10.375 56.882812 Z M 10.375 33 "], ["id", "clip5"], ["d", "M 14 28.703125 L 27 28.703125 L 27 56.882812 L 14 56.882812 Z M 14 28.703125 "], ["id", "clip6"], ["d", "M 12 31 L 27 31 L 27 56.882812 L 12 56.882812 Z M 12 31 "], ["id", "clip7"], ["d", "M 27.371094 33 L 28 33 L 28 56.882812 L 27.371094 56.882812 Z M 27.371094 33 "], ["id", "clip8"], ["d", "M 27.371094 28.703125 L 28 28.703125 L 28 56.882812 L 27.371094 56.882812 Z M 27.371094 28.703125 "], ["id", "clip9"], ["d", "M 27.371094 31 L 28 31 L 28 56.882812 L 27.371094 56.882812 Z M 27.371094 31 "], ["id", "clip10"], ["d", "M 27.371094 33 L 44.351562 33 L 44.351562 56.882812 L 27.371094 56.882812 Z M 27.371094 33 "], ["id", "clip11"], ["d", "M 27.371094 28.703125 L 41 28.703125 L 41 56.882812 L 27.371094 56.882812 Z M 27.371094 28.703125 "], ["id", "clip12"], ["d", "M 27.371094 31 L 43 31 L 43 56.882812 L 27.371094 56.882812 Z M 27.371094 31 "], ["id", "clip13"], ["d", "M 18 17.804688 L 36.722656 17.804688 L 36.722656 24 L 18 24 Z M 18 17.804688 "], ["id", "surface1"], [2, "fill", "rgb(25.099182%,78.42865%,0%)", "fill-opacity", "1"], [0, "xlink", "href", "#glyph0-0", "x", "47.885922", "y", "43.636454"], [0, "xlink", "href", "#glyph0-1", "x", "72.668001", "y", "43.636454"], [0, "xlink", "href", "#glyph0-2", "x", "97.450079", "y", "43.636454"], [0, "xlink", "href", "#glyph0-3", "x", "122.232157", "y", "43.636454"], [0, "xlink", "href", "#glyph0-3", "x", "147.014235", "y", "43.636454"], [0, "xlink", "href", "#glyph0-1", "x", "171.796319", "y", "43.636454"], [0, "xlink", "href", "#glyph0-4", "x", "196.578403", "y", "43.636454"], ["clip-path", "url(#clip1)", "clip-rule", "nonzero"], ["d", "M 42.203125 33.648438 C 42.203125 34.136719 42.203125 34.625 42.203125 35.113281 C 42.367188 35.164062 42.527344 35.214844 42.691406 35.269531 C 42.691406 41.808594 42.691406 48.347656 42.691406 54.886719 C 40.128906 54.027344 37.445312 53.664062 34.777344 53.796875 C 32.332031 54.300781 29.886719 55.339844 27.582031 56.882812 C 32.871094 54.683594 38.816406 54.683594 44.109375 56.882812 C 44.109375 49.367188 44.109375 41.851562 44.109375 34.335938 C 43.484375 34.074219 42.847656 33.847656 42.203125 33.648438 ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "rgb(0%,50.19989%,0%)", "fill-opacity", "1"], ["clip-path", "url(#clip2)", "clip-rule", "nonzero"], ["d", "M 28.675781 54.414062 C 32.109375 51.445312 35.820312 49.84375 39.253906 49.851562 C 39.253906 43.316406 39.253906 36.777344 39.253906 30.238281 C 35.820312 30.226562 32.109375 31.828125 28.675781 34.796875 C 28.675781 41.335938 28.675781 47.875 28.675781 54.414062 Z M 40.347656 51.375 C 36.261719 50.941406 31.667969 52.921875 27.582031 56.882812 C 27.582031 49.367188 27.582031 41.851562 27.582031 34.335938 C 31.667969 30.378906 36.261719 28.398438 40.347656 28.832031 C 40.347656 36.347656 40.347656 43.859375 40.347656 51.375 ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "rgb(0%,50.19989%,0%)", "fill-opacity", "1"], ["clip-path", "url(#clip3)", "clip-rule", "nonzero"], ["d", "M 40.347656 31.039062 C 40.347656 31.527344 40.347656 32.015625 40.347656 32.503906 C 40.550781 32.53125 40.75 32.5625 40.949219 32.597656 C 40.949219 39.136719 40.949219 45.675781 40.949219 52.214844 C 38.617188 51.796875 36.171875 51.929688 33.746094 52.578125 C 31.652344 53.515625 29.558594 54.96875 27.582031 56.882812 C 32.261719 53.75 37.523438 52.699219 42.203125 53.960938 C 42.203125 46.445312 42.203125 38.929688 42.203125 31.414062 C 41.59375 31.25 40.972656 31.125 40.347656 31.039062 ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "rgb(0%,50.19989%,0%)", "fill-opacity", "1"], ["clip-path", "url(#clip4)", "clip-rule", "nonzero"], ["d", "M 12.28125 33.648438 C 12.28125 34.136719 12.28125 34.625 12.28125 35.113281 C 12.117188 35.164062 11.957031 35.214844 11.792969 35.269531 C 11.792969 41.808594 11.792969 48.347656 11.792969 54.886719 C 14.355469 54.027344 17.039062 53.664062 19.707031 53.796875 C 22.152344 54.300781 24.597656 55.339844 26.902344 56.882812 C 21.613281 54.683594 15.667969 54.683594 10.375 56.882812 C 10.375 49.367188 10.375 41.851562 10.375 34.335938 C 11.003906 34.074219 11.640625 33.847656 12.28125 33.648438 ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "rgb(0%,50.19989%,0%)", "fill-opacity", "1"], ["clip-path", "url(#clip5)", "clip-rule", "nonzero"], ["d", "M 25.808594 34.796875 C 22.378906 31.828125 18.664062 30.226562 15.230469 30.238281 C 15.230469 36.777344 15.230469 43.316406 15.230469 49.851562 C 18.664062 49.84375 22.378906 51.445312 25.808594 54.414062 C 25.808594 47.875 25.808594 41.335938 25.808594 34.796875 Z M 14.136719 28.832031 C 18.222656 28.398438 22.816406 30.378906 26.902344 34.335938 C 26.902344 41.851562 26.902344 49.367188 26.902344 56.882812 C 22.816406 52.921875 18.222656 50.941406 14.136719 51.375 C 14.136719 43.859375 14.136719 36.347656 14.136719 28.832031 ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "rgb(0%,50.19989%,0%)", "fill-opacity", "1"], ["clip-path", "url(#clip6)", "clip-rule", "nonzero"], ["d", "M 14.136719 31.039062 C 14.136719 31.527344 14.136719 32.015625 14.136719 32.503906 C 13.9375 32.53125 13.734375 32.5625 13.535156 32.597656 C 13.535156 39.136719 13.535156 45.675781 13.535156 52.214844 C 15.867188 51.796875 18.3125 51.929688 20.738281 52.578125 C 22.835938 53.515625 24.929688 54.96875 26.902344 56.882812 C 22.222656 53.75 16.964844 52.699219 12.28125 53.960938 C 12.28125 46.445312 12.28125 38.929688 12.28125 31.414062 C 12.890625 31.25 13.511719 31.125 14.136719 31.039062 ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "rgb(0%,50.19989%,0%)", "fill-opacity", "1"], ["clip-path", "url(#clip7)", "clip-rule", "nonzero"], ["d", "M 12.527344 33.648438 C 12.527344 34.136719 12.527344 34.625 12.527344 35.113281 C 12.363281 35.164062 12.199219 35.214844 12.039062 35.269531 C 12.039062 41.808594 12.039062 48.347656 12.039062 54.886719 C 14.601562 54.027344 17.285156 53.664062 19.949219 53.796875 C 22.398438 54.300781 24.84375 55.339844 27.148438 56.882812 C 21.855469 54.683594 15.910156 54.683594 10.621094 56.882812 C 10.621094 49.367188 10.621094 41.851562 10.621094 34.335938 C 11.246094 34.074219 11.882812 33.847656 12.527344 33.648438 ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "rgb(0.389099%,7.449341%,100%)", "fill-opacity", "1"], ["clip-path", "url(#clip8)", "clip-rule", "nonzero"], ["d", "M 26.054688 54.414062 C 22.621094 51.445312 18.90625 49.84375 15.476562 49.851562 C 15.476562 43.316406 15.476562 36.777344 15.476562 30.238281 C 18.90625 30.226562 22.621094 31.828125 26.054688 34.796875 C 26.054688 41.335938 26.054688 47.875 26.054688 54.414062 Z M 14.382812 51.375 C 18.46875 50.941406 23.058594 52.921875 27.148438 56.882812 C 27.148438 49.367188 27.148438 41.851562 27.148438 34.335938 C 23.058594 30.378906 18.46875 28.398438 14.382812 28.832031 C 14.382812 36.347656 14.382812 43.859375 14.382812 51.375 ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "rgb(0.389099%,7.449341%,100%)", "fill-opacity", "1"], ["clip-path", "url(#clip9)", "clip-rule", "nonzero"], ["d", "M 14.382812 31.039062 C 14.382812 31.527344 14.382812 32.015625 14.382812 32.503906 C 14.179688 32.53125 13.980469 32.5625 13.78125 32.597656 C 13.78125 39.136719 13.78125 45.675781 13.78125 52.214844 C 16.113281 51.796875 18.558594 51.929688 20.980469 52.578125 C 23.078125 53.515625 25.171875 54.96875 27.148438 56.882812 C 22.464844 53.75 17.207031 52.699219 12.527344 53.960938 C 12.527344 46.445312 12.527344 38.929688 12.527344 31.414062 C 13.136719 31.25 13.753906 31.125 14.382812 31.039062 ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "rgb(0.389099%,7.449341%,100%)", "fill-opacity", "1"], ["clip-path", "url(#clip10)", "clip-rule", "nonzero"], ["d", "M 42.445312 33.648438 C 42.445312 34.136719 42.445312 34.625 42.445312 35.113281 C 42.609375 35.164062 42.773438 35.214844 42.9375 35.269531 C 42.9375 41.808594 42.9375 48.347656 42.9375 54.886719 C 40.371094 54.027344 37.6875 53.664062 35.023438 53.796875 C 32.578125 54.300781 30.128906 55.339844 27.824219 56.882812 C 33.117188 54.683594 39.0625 54.683594 44.355469 56.882812 C 44.355469 49.367188 44.355469 41.851562 44.355469 34.335938 C 43.726562 34.074219 43.089844 33.847656 42.445312 33.648438 ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "rgb(0.389099%,7.449341%,100%)", "fill-opacity", "1"], ["clip-path", "url(#clip11)", "clip-rule", "nonzero"], ["d", "M 28.921875 34.796875 C 32.351562 31.828125 36.066406 30.226562 39.496094 30.238281 C 39.496094 36.777344 39.496094 43.316406 39.496094 49.851562 C 36.066406 49.84375 32.351562 51.445312 28.921875 54.414062 C 28.921875 47.875 28.921875 41.335938 28.921875 34.796875 Z M 40.589844 28.832031 C 36.503906 28.398438 31.914062 30.378906 27.824219 34.335938 C 27.824219 41.851562 27.824219 49.367188 27.824219 56.882812 C 31.914062 52.921875 36.503906 50.941406 40.589844 51.375 C 40.589844 43.859375 40.589844 36.347656 40.589844 28.832031 ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "rgb(0.389099%,7.449341%,100%)", "fill-opacity", "1"], ["clip-path", "url(#clip12)", "clip-rule", "nonzero"], ["d", "M 40.589844 31.039062 C 40.589844 31.527344 40.589844 32.015625 40.589844 32.503906 C 40.792969 32.53125 40.992188 32.5625 41.191406 32.597656 C 41.191406 39.136719 41.191406 45.675781 41.191406 52.214844 C 38.863281 51.796875 36.414062 51.929688 33.992188 52.578125 C 31.894531 53.515625 29.800781 54.96875 27.824219 56.882812 C 32.507812 53.75 37.765625 52.699219 42.445312 53.960938 C 42.445312 46.445312 42.445312 38.929688 42.445312 31.414062 C 41.835938 31.25 41.21875 31.125 40.589844 31.039062 ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "rgb(0.389099%,7.449341%,100%)", "fill-opacity", "1"], ["d", "M 27.355469 28.777344 C 26.472656 28.777344 25.746094 29.503906 25.746094 30.390625 C 25.746094 31.273438 26.472656 32 27.355469 32 C 28.238281 32 28.960938 31.273438 28.960938 30.390625 C 28.960938 29.488281 28.238281 28.777344 27.355469 28.777344 Z M 27.355469 28.777344 ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "rgb(100%,50.979614%,6.269836%)", "fill-opacity", "1"], ["d", "M 27.355469 24.964844 C 25.878906 24.964844 24.488281 25.542969 23.445312 26.574219 C 23.023438 26.996094 23.023438 27.675781 23.445312 28.097656 C 23.648438 28.300781 23.921875 28.417969 24.210938 28.417969 C 24.5 28.417969 24.777344 28.300781 24.980469 28.097656 C 25.617188 27.460938 26.457031 27.109375 27.355469 27.109375 C 28.253906 27.109375 29.105469 27.460938 29.742188 28.097656 C 29.945312 28.300781 30.222656 28.417969 30.511719 28.417969 C 30.800781 28.417969 31.078125 28.300781 31.277344 28.097656 C 31.699219 27.675781 31.699219 26.996094 31.277344 26.574219 C 30.222656 25.542969 28.832031 24.964844 27.355469 24.964844 Z M 27.355469 24.964844 ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "rgb(100%,50.979614%,6.269836%)", "fill-opacity", "1"], ["clip-path", "url(#clip13)", "clip-rule", "nonzero"], ["d", "M 36.304688 21.570312 C 33.914062 19.175781 30.730469 17.855469 27.355469 17.855469 C 23.980469 17.855469 20.792969 19.160156 18.402344 21.554688 C 17.984375 21.976562 17.984375 22.65625 18.402344 23.078125 C 18.605469 23.28125 18.882812 23.398438 19.171875 23.398438 C 19.460938 23.398438 19.738281 23.28125 19.9375 23.078125 C 21.910156 21.105469 24.542969 20.015625 27.355469 20.015625 C 30.164062 20.015625 32.800781 21.105469 34.785156 23.09375 C 34.988281 23.296875 35.261719 23.410156 35.550781 23.410156 C 35.839844 23.410156 36.117188 23.296875 36.320312 23.09375 C 36.722656 22.671875 36.722656 21.988281 36.304688 21.570312 Z M 36.304688 21.570312 ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "rgb(100%,50.979614%,6.269836%)", "fill-opacity", "1"], ["d", "M 27.355469 21.496094 C 24.949219 21.496094 22.691406 22.425781 20.980469 24.121094 C 20.78125 24.324219 20.664062 24.601562 20.664062 24.890625 C 20.664062 25.179688 20.78125 25.457031 20.980469 25.660156 C 21.183594 25.863281 21.460938 25.980469 21.75 25.980469 C 22.039062 25.980469 22.316406 25.863281 22.515625 25.660156 C 23.804688 24.367188 25.53125 23.65625 27.355469 23.65625 C 29.179688 23.65625 30.902344 24.367188 32.191406 25.660156 C 32.394531 25.863281 32.667969 25.980469 32.957031 25.980469 C 33.25 25.980469 33.523438 25.863281 33.726562 25.660156 C 33.929688 25.457031 34.046875 25.179688 34.046875 24.890625 C 34.046875 24.601562 33.929688 24.324219 33.726562 24.121094 C 32.015625 22.441406 29.757812 21.496094 27.355469 21.496094 Z M 27.355469 21.496094 ", 2, "stroke", "none", "fill-rule", "nonzero", "fill", "rgb(100%,50.979614%,6.269836%)", "fill-opacity", "1"], [2, "fill", "rgb(3.919983%,2.349854%,85.879517%)", "fill-opacity", "1"], [0, "xlink", "href", "#glyph1-0", "x", "47.687842", "y", "54.323754"], [0, "xlink", "href", "#glyph1-1", "x", "54.784252", "y", "54.323754"], [0, "xlink", "href", "#glyph1-2", "x", "61.880662", "y", "54.323754"], [0, "xlink", "href", "#glyph1-3", "x", "68.977072", "y", "54.323754"], [0, "xlink", "href", "#glyph1-4", "x", "72.525282", "y", "54.323754"], [0, "xlink", "href", "#glyph1-2", "x", "79.621692", "y", "54.323754"], [0, "xlink", "href", "#glyph1-5", "x", "86.718102", "y", "54.323754"], [0, "xlink", "href", "#glyph1-6", "x", "93.814512", "y", "54.323754"], [0, "xlink", "href", "#glyph1-7", "x", "100.910922", "y", "54.323754"], [0, "xlink", "href", "#glyph1-8", "x", "108.007332", "y", "54.323754"], [0, "xlink", "href", "#glyph1-9", "x", "115.103742", "y", "54.323754"], [0, "xlink", "href", "#glyph1-10", "x", "122.200152", "y", "54.323754"], [0, "xlink", "href", "#glyph1-11", "x", "129.296562", "y", "54.323754"], [0, "xlink", "href", "#glyph1-12", "x", "136.392972", "y", "54.323754"], [0, "xlink", "href", "#glyph1-2", "x", "143.489382", "y", "54.323754"], [0, "xlink", "href", "#glyph1-13", "x", "150.585792", "y", "54.323754"], [0, "xlink", "href", "#glyph1-3", "x", "157.682202", "y", "54.323754"], [0, "xlink", "href", "#glyph1-14", "x", "161.230412", "y", "54.323754"], [0, "xlink", "href", "#glyph1-10", "x", "168.326822", "y", "54.323754"], [0, "xlink", "href", "#glyph1-7", "x", "175.423232", "y", "54.323754"], [0, "xlink", "href", "#glyph1-15", "x", "182.519642", "y", "54.323754"], [0, "xlink", "href", "#glyph1-3", "x", "189.616052", "y", "54.323754"], [0, "xlink", "href", "#glyph1-6", "x", "193.164262", "y", "54.323754"], [0, "xlink", "href", "#glyph1-11", "x", "200.260672", "y", "54.323754"], [0, "xlink", "href", "#glyph1-0", "x", "207.357082", "y", "54.323754"], [0, "xlink", "href", "#glyph1-2", "x", "214.453493", "y", "54.323754"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "nav", "mr-auto"], ["data-toggle", "collapse", "data-target", ".navbar-collapse.show", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/home", 1, "nav-link"], ["routerLink", "/blogs", 1, "nav-link"], ["routerLink", "/faq", 1, "nav-link"], ["routerLink", "/about", 1, "nav-link"], ["class", "nav navbar-nav navbar-right p-2", 4, "ngIf", "ngIfElse"], ["registerButton", ""], [1, "nav", "navbar-nav", "navbar-right", "p-2"], [1, "nav-item", "mr-3", "d-none", "d-sm-block"], [1, "container", 3, "click"], ["id", "_1st-toggle-btn", 1, "toggle-btn"], ["type", "checkbox", "id", "mode"], ["mode", ""], ["data-toggle", "collapse", "data-target", ".navbar-collapse.show", 1, "nav-item", "mr-3"], ["id", "createLink", "routerLink", "/create", 1, "btn", "btn-success", "mb-1"], ["src", "https://img.icons8.com/fluent-systems-filled/48/000000/quill-pen.png", "width", "24", "height", "24"], ["data-toggle", "collapse", "data-target", ".navbar-collapse.show", 1, "nav-item", "dropdown", 2, "background", "none !important", "padding-left", "0 !important"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-primary", "dropdown-toggle", "p-2"], [1, "fa", "fa-lg", "fa-user-circle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["class", "dropdown-item", "href", "/adminpage", 4, "ngIf"], [1, "dropdown-item", 3, "href"], [1, "fa", "fa-user-o"], ["href", "/dashboard", 1, "dropdown-item"], [1, "fa", "fa-tachometer"], [1, "dropdown-item", 3, "click"], [1, "fa", "fa-power-off"], ["href", "/adminpage", 1, "dropdown-item"], [1, "fa", "fa-cogs"], [1, "nav", "navbar-nav", "navbar-right"], ["data-toggle", "collapse", "data-target", ".navbar-collapse.show", 1, "nav-item", 2, "background", "none !important", "padding-left", "0 !important"], ["href", "/register", "id", "registerLink", 1, "btn", "btn-success", "mr-2", "p-2"], ["id", "loginLink", "href", "/login", 1, "btn", "btn-success", "p-2"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "symbol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "symbol", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "symbol", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "symbol", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "symbol", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "symbol", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "symbol", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "symbol", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "symbol", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "symbol", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "symbol", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "symbol", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "symbol", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "symbol", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "symbol", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "symbol", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "symbol", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "symbol", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "symbol", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "symbol", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "symbol", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "clipPath", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "clipPath", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "clipPath", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "clipPath", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "clipPath", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "path", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "clipPath", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "path", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "clipPath", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "path", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "clipPath", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "clipPath", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "path", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "clipPath", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "clipPath", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "clipPath", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "clipPath", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "g", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "g", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "use", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "g", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "use", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "g", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "use", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "g", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "use", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "g", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "use", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "g", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "use", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "g", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "use", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "g", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "g", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "g", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "path", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "g", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "path", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "g", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "g", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "path", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "g", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "path", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "g", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "path", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "g", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "path", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "g", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "path", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "g", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "path", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "g", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "path", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "path", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "path", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "g", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "path", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "path", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "g", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "use", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "g", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "use", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "g", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "use", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "g", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "use", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "g", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "use", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "g", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "use", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "g", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "use", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "g", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "use", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "g", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "use", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "g", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "use", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "g", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "use", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "g", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "use", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "g", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "use", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "g", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "use", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "g", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "use", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "g", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "use", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "g", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "use", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "g", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "use", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "g", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "use", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "g", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "use", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "g", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "use", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "g", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "use", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "g", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "use", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "g", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "use", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "g", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "use", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "g", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "use", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "ul", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "li", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "a", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "li", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "a", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "li", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "a", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "li", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "a", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](186, HeaderComponent_ul_186_Template, 26, 3, "ul", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](187, HeaderComponent_ng_template_187_Template, 12, 0, "ng-template", null, 147, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn())("ngIfElse", _r1);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["#dropdownMenuButton[_ngcontent-%COMP%] {\r\n    border: 0px;\r\n    border-radius: 0;\r\n    background: linear-gradient(to right,#344ceb,#b134eb);\r\n    padding: 0.6em;\r\n}\r\n\r\n.dropdown-menu[_ngcontent-%COMP%] {\r\n    border-radius: 0;\r\n    background: linear-gradient(to right, #5e34eb, #a534eb);\r\n}\r\n\r\n#registerLink[_ngcontent-%COMP%] {\r\n    border: 0px;\r\n    border-radius: 0;\r\n    background-color: #ebf928;\r\nbackground-image: linear-gradient(315deg, #ebf928 0%, #d425b5 74%);\r\n    padding: 0.6em;\r\n}\r\n\r\n#createLink[_ngcontent-%COMP%] {\r\n    border: 0px;\r\n    border-radius: 0;\r\n    background-color: #7ee8fa;\r\n    background-image: linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%);\r\n    color:black;\r\n    padding: 0.6em;\r\n}\r\n\r\n#loginLink[_ngcontent-%COMP%] {\r\n    border: 0px;\r\n    border-radius: 0;\r\n    background-image: linear-gradient(to top, #cc208e 0%, #6713d2 100%);\r\n    padding: 0.6em;\r\n}\r\n\r\n.toggle-btn[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100px;\r\n    height: 45px;\r\n    margin: 0 auto;\r\n    border-radius: 40px;\r\n  }\r\n\r\ninput[type=\"checkbox\"][_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n    right: 0px;\r\n    bottom: 0px;\r\n    margin: 0px;\r\n    cursor: pointer;\r\n    opacity: 0;\r\n    z-index: 2;\r\n  }\r\n\r\n#_1st-toggle-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0px;\r\n    right: 0px;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    overflow: hidden;\r\n    opacity: 1;\r\n    background-color: #fff;\r\n    box-shadow: 0px 2px 25px #d9d9d9;\r\n    border-radius: 40px;\r\n    transition: 0.2s ease background-color, 0.2s ease opacity;\r\n  }\r\n\r\n#_1st-toggle-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before, #_1st-toggle-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 8px;\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 50%;\r\n    transition: 0.5s ease transform, 0.2s ease background-color;\r\n  }\r\n\r\n#_1st-toggle-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before {\r\n    background-color: #fff;\r\n    transform: translate(-30px, 0px);\r\n    z-index: 1;\r\n  }\r\n\r\n#_1st-toggle-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\r\n    background-color: #000;\r\n    transform: translate(8px, 0px);\r\n    z-index: 0;\r\n  }\r\n\r\n#_1st-toggle-btn[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%] {\r\n    background-color: #000;\r\n  }\r\n\r\n#_1st-toggle-btn[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:active    + span[_ngcontent-%COMP%] {\r\n    opacity: 0.5;\r\n  }\r\n\r\n#_1st-toggle-btn[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%]:before {\r\n    background-color: #000;\r\n    transform: translate(56px, -10px);\r\n  }\r\n\r\n#_1st-toggle-btn[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%]:after {\r\n    background-color: #fff;\r\n    transform: translate(65px, 0px);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixxREFBcUQ7SUFDckQsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1REFBdUQ7QUFDM0Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3QixrRUFBa0U7SUFDOUQsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGtFQUFrRTtJQUNsRSxXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUVBQW1FO0lBQ25FLGNBQWM7QUFDbEI7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YsVUFBVTtJQUNWLFVBQVU7RUFDWjs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLFdBQVc7SUFDWCxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQix5REFBeUQ7RUFDM0Q7O0FBRUE7O0lBRUUsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMkRBQTJEO0VBQzdEOztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGdDQUFnQztJQUNoQyxVQUFVO0VBQ1o7O0FBRUE7SUFDRSxzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLFVBQVU7RUFDWjs7QUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLFlBQVk7RUFDZDs7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QixpQ0FBaUM7RUFDbkM7O0FBRUE7SUFDRSxzQkFBc0I7SUFDdEIsK0JBQStCO0VBQ2pDIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Ryb3Bkb3duTWVudUJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIzM0NGNlYiwjYjEzNGViKTtcclxuICAgIHBhZGRpbmc6IDAuNmVtO1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNWUzNGViLCAjYTUzNGViKTtcclxufVxyXG5cclxuI3JlZ2lzdGVyTGluayB7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJmOTI4O1xyXG5iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZWJmOTI4IDAlLCAjZDQyNWI1IDc0JSk7XHJcbiAgICBwYWRkaW5nOiAwLjZlbTtcclxufVxyXG5cclxuI2NyZWF0ZUxpbmsge1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdlZThmYTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM3ZWU4ZmEgMCUsICM4MGZmNzIgNzQlKTtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgcGFkZGluZzogMC42ZW07XHJcbn1cclxuXHJcbiNsb2dpbkxpbmsge1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2NjMjA4ZSAwJSwgIzY3MTNkMiAxMDAlKTtcclxuICAgIHBhZGRpbmc6IDAuNmVtO1xyXG59XHJcblxyXG5cclxuLnRvZ2dsZS1idG4ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG4gICNfMXN0LXRvZ2dsZS1idG4gc3BhbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMjVweCAjZDlkOWQ5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZSBiYWNrZ3JvdW5kLWNvbG9yLCAwLjJzIGVhc2Ugb3BhY2l0eTtcclxuICB9XHJcbiAgXHJcbiAgI18xc3QtdG9nZ2xlLWJ0biBzcGFuOmJlZm9yZSxcclxuICAjXzFzdC10b2dnbGUtYnRuIHNwYW46YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UgdHJhbnNmb3JtLCAwLjJzIGVhc2UgYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcbiAgXHJcbiAgI18xc3QtdG9nZ2xlLWJ0biBzcGFuOmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMwcHgsIDBweCk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICBcclxuICAjXzFzdC10b2dnbGUtYnRuIHNwYW46YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDhweCwgMHB4KTtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgfVxyXG4gIFxyXG4gICNfMXN0LXRvZ2dsZS1idG4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBzcGFuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgfVxyXG4gIFxyXG4gICNfMXN0LXRvZ2dsZS1idG4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmFjdGl2ZSArIHNwYW4ge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuICBcclxuICAjXzFzdC10b2dnbGUtYnRuIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgc3BhbjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDU2cHgsIC0xMHB4KTtcclxuICB9XHJcbiAgXHJcbiAgI18xc3QtdG9nZ2xlLWJ0biBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIHNwYW46YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDY1cHgsIDBweCk7XHJcbiAgfVxyXG4gICAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utility_darkmode_modeConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/darkmode/modeConfig */ "./src/app/utility/darkmode/modeConfig.ts");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/blog.service */ "./src/app/services/blog.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
/* harmony import */ var _category_x_category_x_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../category-x/category-x.component */ "./src/app/category-x/category-x.component.ts");








function HomeComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", item_r5.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r5 == null ? null : item_r5.Media, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0\u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, item_r5.CreatedTime), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5 == null ? null : item_r5.Category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/blog/", item_r5.Id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.Title, " ");
} }
function HomeComponent_27_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", item_r6.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r6.Media, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/blog/", item_r6.Id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r6.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r6.Author, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 6, item_r6.CreatedTime), "");
} }
function HomeComponent_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_27_ng_template_0_Template, 11, 8, "ng-template", 34);
} }
function HomeComponent_36_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", item_r9.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r9.Media, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/blog/", item_r9.Id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r9.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r9.Author, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 6, item_r9.CreatedTime), "");
} }
function HomeComponent_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_36_ng_template_0_Template, 11, 8, "ng-template", 34);
} }
function HomeComponent_button_48_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_button_48_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const item_r12 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.changeSelection(item_r12.Id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", item_r12.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r12.CategoryName);
} }
function HomeComponent_54_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", item_r15.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r15.Media, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/blog/", item_r15.Id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r15.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r15.Author, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 6, item_r15.CreatedTime), "");
} }
function HomeComponent_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_54_ng_template_0_Template, 11, 8, "ng-template", 34);
} }
class HomeComponent {
    constructor(blogService, titleService, metaTagService) {
        this.blogService = blogService;
        this.titleService = titleService;
        this.metaTagService = metaTagService;
        this.latestBlogs4 = [];
        this.trendingBlogs = [];
        this.popularBlogs = [];
        this.technologyBlogs = [];
        this.categories = [];
        this.categoryXBlogs = [];
        this.selection = 1;
        this.customOptions = {
            loop: false,
            rewind: true,
            mouseDrag: false,
            touchDrag: true,
            pullDrag: false,
            dots: false,
            navSpeed: 700,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            },
            nav: true
        };
        this.customOptions2 = {
            loop: false,
            rewind: true,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: false,
            navSpeed: 700,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            items: 1,
            nav: true
        };
        this.blogService.getCategoryXBlogs(1).subscribe((data) => {
            data.forEach(blog => {
                this.blogService.ImageAdder(blog).then();
            });
            this.technologyBlogs = data;
        });
        this.blogService.getCategoryXBlogs(this.selection).subscribe((data) => {
            data.forEach(blog => {
                this.blogService.ImageAdder(blog).then();
            });
            this.categoryXBlogs = data;
            // console.log(this.categoryXBlogs);
        });
    }
    ngOnInit() {
        //Meta tags for SEO
        this.titleService.setTitle("Bloggle - The Personalised Blog");
        this.metaTagService.addTags([
            { name: "description", content: "Bloggle is a creation by innovation. This is a blogging site that has many of the features that you can think of." },
            { name: "author", content: "Piyush Chouhan M, Nishant Bhushan, Kedar R, Mohanavel R, Kumaran R" },
            { name: "robots", content: "index,follow" },
            { name: "keywords", content: "Blogs, Blogging website, Bloggle, Personalised blogs, blog site" },
            { httpEquiv: 'Content-Type', content: "text/html", charset: "UTF-8" }
        ]);
        //Fetching Latest blogs
        this.blogService.getFeaturingBlogs("latest", 5).subscribe((data) => {
            data.forEach(blog => {
                this.blogService.ImageAdder(blog).then();
            });
            this.latestBlogs1 = data[0];
            this.latestBlogs4 = data.slice(1, 5);
        });
        //Fetching trending blogs
        this.blogService.getFeaturingBlogs("trending", 12).subscribe((data) => {
            data.forEach(blog => {
                this.blogService.ImageAdder(blog).then();
            });
            this.trendingBlogs = data;
        });
        this.blogService.getFeaturingBlogs("popular", 12).subscribe((data) => {
            data.forEach(blog => {
                this.blogService.ImageAdder(blog).then();
            });
            this.popularBlogs = data;
        });
        this.blogService.getAllCategories().subscribe((data) => {
            this.categories = data;
        });
        //Dark Mode 
        this.darkMode = new _utility_darkmode_modeConfig__WEBPACK_IMPORTED_MODULE_1__["DarkModeConfig"]();
    }
    ngAfterViewInit() {
        var mode = this.darkMode.getCookie('darkmode');
        if (mode === "true") {
            // (<HTMLInputElement>document.getElementById('mode')).checked = true;
            this.darkMode.darkModeToggler(true);
        }
        else {
            // (<HTMLInputElement>document.getElementById('mode')).checked = false;
            this.darkMode.darkModeToggler(false);
        }
    }
    getSelectedCategory(selectvalue) {
        this.selection = selectvalue;
        // console.log(this.selection);
    }
    changeSelection(category) {
        this.selection = category;
        this.blogService.getCategoryXBlogs(this.selection).subscribe((data) => {
            data.forEach(blog => {
                this.blogService.ImageAdder(blog).then();
            });
            this.categoryXBlogs = data;
            // console.log(this.categoryXBlogs);
        });
        // console.log(this.selection);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 55, vars: 18, consts: [[1, "container-fluid", "paddding", "mb-5"], [1, "row", "mx-0"], ["data-animate-effect", "fadeIn", 1, "col-md-6", "col-12", "paddding", "animate-box", "fadeIn", "animated-fast"], ["id", "firstCard", 1, "fh5co_suceefh5co_height"], [1, "img-fluid", 3, "src", "alt"], [1, "fh5co_suceefh5co_height_position_absolute"], [1, "fh5co_suceefh5co_height_position_absolute_font"], [1, "color_fff"], [1, "fa", "fa-clock-o"], [1, "badge", "rounded-pill", "bg-primary", 2, "font-size", "small"], [1, ""], [1, "fh5co_good_font", 3, "href"], [1, "col-md-6"], [1, "row"], ["class", "col-md-6 col-12 paddding animate-box fadeIn animated-fast", "data-animate-effect", "fadeIn", 4, "ngFor", "ngForOf"], [1, "container-fluid", "pt-3"], ["data-animate-effect", "fadeIn", 1, "container", "animate-box", "fadeIn", "animated-fast"], [1, "fh5co_heading", "fh5co_heading_border_bottom", "py-2", "mb-4"], [1, "owl-theme", 3, "options"], [4, "ngFor", "ngForOf"], [1, "container-fluid", "pb-4", "pt-4", "paddding"], [1, "container", "paddding"], ["id", "categoryX", "data-animate-effect", "fadeInLeft", 1, "col-md-8", "animate-box", "fadeInLeft", "animated-fast"], [3, "blogsArray", "itemsPerPage"], ["data-animate-effect", "fadeInRight", 1, "col-md-3", "animate-box", "fadeInRight", "animated-fast"], [1, "clearfix"], [1, "fh5co_tags_all"], ["class", "fh5co_tagg", "style", "border: 1px solid white;", 3, "id", "click", 4, "ngFor", "ngForOf"], [1, "fh5co_heading", "fh5co_heading_border_bottom", "pt-3", "py-2", "mb-4", 2, "font-size", "1.1em"], [1, "fh5co_suceefh5co_height_2"], [1, "fh5co_suceefh5co_height_position_absolute_font_2"], [1, "badge", "rounded-pill", "bg-warning", "text-dark", 2, "font-size", "small"], [1, "blog-title"], [1, "fh5co_good_font_2", 3, "href"], ["carouselSlide", "", "style", "width: 225px; margin-right: 10px;"], [1, "item", "px-2"], [1, "fh5co_latest_trading_img_position_relative"], [1, "fh5co_latest_trading_img"], [1, "fh5co_latest_trading_img_position_absolute"], [1, "fh5co_latest_trading_img_position_absolute_1"], [1, "text-white", 3, "href"], [1, "fh5co_latest_trading_date_and_name_color"], [1, "fh5co_tagg", 2, "border", "1px solid white", 3, "id", "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HomeComponent_div_19_Template, 14, 8, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Trending");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "owl-carousel-o", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, HomeComponent_27_Template, 1, 0, undefined, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "owl-carousel-o", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, HomeComponent_36_Template, 1, 0, undefined, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-category-x", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, HomeComponent_button_48_Template, 2, 2, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Most Popular Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "owl-carousel-o", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, HomeComponent_54_Template, 1, 0, undefined, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.latestBlogs1.Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.latestBlogs1 == null ? null : ctx.latestBlogs1.Media, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0\u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 16, ctx.latestBlogs1 == null ? null : ctx.latestBlogs1.CreatedTime), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.latestBlogs1 == null ? null : ctx.latestBlogs1.Category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/blog/", ctx.latestBlogs1 == null ? null : ctx.latestBlogs1.Id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.latestBlogs1 == null ? null : ctx.latestBlogs1.Title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.latestBlogs4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trendingBlogs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.technologyBlogs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blogsArray", ctx.categoryXBlogs)("itemsPerPage", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.popularBlogs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__["CarouselComponent"], _category_x_category_x_component__WEBPACK_IMPORTED_MODULE_6__["CategoryXComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__["CarouselSlideDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".blog-title[_ngcontent-%COMP%]\r\n{\r\n    overflow : hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 2;\r\n    -webkit-box-orient: vertical;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2ctdGl0bGVcclxue1xyXG4gICAgb3ZlcmZsb3cgOiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _services_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"] }]; }, null); })();


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _utility_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility/alert-dialog/alert-dialog.component */ "./src/app/utility/alert-dialog/alert-dialog.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












function LoginComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.loginError);
} }
const _c0 = function (a0, a1) { return { "fa-eye-slash": a0, "fa-eye": a1 }; };
class LoginComponent {
    constructor(http, authService, router, titleService, metaTagService, dialog) {
        this.http = http;
        this.authService = authService;
        this.router = router;
        this.titleService = titleService;
        this.metaTagService = metaTagService;
        this.dialog = dialog;
        this.fieldTextType = false;
        this.availableUsers = [];
    }
    handleCredentialResponse(response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Here will be your response from Google.
            console.log(response.credential);
            this.authService.loginWithGoogle(response.credential)
                .subscribe((data) => {
                console.log("Login done !");
                localStorage.setItem('User', JSON.stringify(data));
                //this.router.navigate(['/home']);
                window.location.href = '/home';
                this.authService.isLoggedIn.next(true);
                this.authService.userAuthenticated = true;
                this.authForm.reset();
            }, (err) => {
                this.authForm.reset();
                this.authService.isLoggedIn.next(false);
                this.authService.userAuthenticated = false;
                if (err.status === 400) {
                    this.loginError = "Invalid username or password";
                }
                else {
                    this.loginError = "Technical Error occurred. Please try later.";
                }
            });
        });
    }
    ngOnInit() {
        // @ts-ignore
        google.accounts.id.initialize({
            client_id: "1097842679595-hetnuckn520oimudgk5u2dk20tai082r.apps.googleusercontent.com",
            scope: "openid email https://www.googleapis.com/auth/user.birthday.read",
            callback: this.handleCredentialResponse.bind(this),
            auto_select: false,
            cancel_on_tap_outside: true,
        });
        // @ts-ignore
        google.accounts.id.renderButton(
        // @ts-ignore
        document.getElementById("google-button"), { theme: "outline", size: "large", width: "100%" });
        // @ts-ignore
        google.accounts.id.prompt((notification) => { });
        //Meta Tags for SEO activities
        this.titleService.setTitle("Login");
        this.metaTagService.addTags([
            { name: "description", content: "Login here to explore the uncovered mysteries of Bloggle" },
            { name: "author", content: "Piyush Chouhan M, Nishant Bhushan, Kedar R, Mohanavel R, Kumaran R" },
            { name: "robots", content: "index,follow" },
            { name: "keywords", content: "Login, Sign in, sign" },
            { httpEquiv: 'Content-Type', content: "text/html", charset: "UTF-8" }
        ]);
        this.authForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
        });
    }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log(this.authForm.value);
            if (this.authForm.dirty && this.authForm.valid) {
                if (this.authForm.value.email === null || this.authForm.value.password === null) {
                    this.authForm.reset();
                }
                else {
                    this.authService.login(this.authForm.value)
                        .subscribe((data) => {
                        console.log("Login done !");
                        localStorage.setItem('User', JSON.stringify(data));
                        //this.router.navigate(['/home']);
                        window.location.href = '/home';
                        this.authService.isLoggedIn.next(true);
                        this.authService.userAuthenticated = true;
                        this.authForm.reset();
                    }, (err) => {
                        this.authForm.reset();
                        this.authService.isLoggedIn.next(false);
                        this.authService.userAuthenticated = false;
                        if (err.status === 400) {
                            this.loginError = "Invalid username or password";
                        }
                        else {
                            this.loginError = "Technical Error occurred. Please try later.";
                        }
                    });
                }
            }
        });
    }
    toggleFieldTextType() {
        this.fieldTextType = !this.fieldTextType;
    }
    comingSoon() {
        this.dialog.open(_utility_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AlertDialogComponent"], { data: { title: 'Coming Soon', content: 'This feature is currently being developed.' } });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 32, vars: 8, consts: [["id", "start", 1, "container"], [1, "row"], [1, "col-lg-10", "col-xl-9", "mx-auto"], [1, "card", "card-signin", "flex-row", "my-5"], [1, "card-img-left", "d-none", "d-md-flex"], [1, "card-body"], [1, "card-title", "text-center"], ["class", "text-center", "style", "color:red;font-weight:bold", 4, "ngIf"], [1, "form-signin", 3, "formGroup", "submit"], [1, "form-label-group"], ["type", "text", "id", "inputUserame", "placeholder", "Username", "formControlName", "username", "required", "", "autofocus", "", 1, "form-control"], ["for", "inputUserame"], [1, "form-label-group", "input-group"], ["id", "inputPassword", "placeholder", "Password", "formControlName", "password", "required", "", 1, "form-control", 3, "type", "keyup.enter"], ["for", "inputPassword", 2, "width", "90%"], [1, "input-group-append"], [1, "input-group-text"], [1, "fa", 2, "color", "mediumblue", 3, "ngClass", "click"], ["type", "submit", 1, "btn", "btn-lg", "btn-success", "btn-block", "text-uppercase", 3, "disabled"], ["href", "/register", 1, "d-block", "text-center", "mt-2", "small", 2, "color", "green"], [1, "my-4"], ["id", "google-button", "type", "button", 1, "btn", "btn-lg", "btn-block"], [1, "fa", "fa-google", "mr-2"], ["type", "button", 1, "btn", "btn-lg", "btn-facebook", "btn-block", "text-uppercase", 3, "click"], [1, "fa", "fa-facebook-f", "mr-2"], [1, "text-center", 2, "color", "red", "font-weight", "bold"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, LoginComponent_p_8_Template, 2, 1, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function LoginComponent_Template_input_keyup_enter_15_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_i_click_20_listener() { return ctx.toggleFieldTextType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "New user? Create an account here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "hr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Sign up with Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_29_listener() { return ctx.comingSoon(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Sign up with Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.authForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.fieldTextType ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c0, !ctx.fieldTextType, ctx.fieldTextType));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.authForm.dirty);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"]], styles: [":root {\r\n    --input-padding-x: 1rem;\r\n    --input-padding-y: .5rem;\r\n}\r\n\r\n    \r\n.input-group-text[_ngcontent-%COMP%]{\r\n    border-top-right-radius: 2rem;\r\n    border-bottom-right-radius: 2rem;\r\n}\r\n\r\n    \r\n.input-group-append[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n    \r\n.card-signin[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    border-radius: 1rem;\r\n    \r\n\r\n    box-shadow: 0 0 15px #20cdfd,\r\n\t\t\t\t0 0 25px #20cdfd,\r\n\t\t\t\t0 0 45px #20cdfd,\r\n\t\t\t\t0 0 70px #20cdfd;\r\n\r\n    overflow: hidden;\r\n}\r\n\r\n    \r\n.card-signin[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\r\n    margin-bottom: 2rem;\r\n    font-weight: 300;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n    \r\n.card-signin[_ngcontent-%COMP%]   .card-img-left[_ngcontent-%COMP%] {\r\n    width: 45%;\r\n    \r\n    background: scroll center url('https://wallpapercave.com/wp/wp2856050.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n    \r\n.form-signin[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n    \r\n.form-signin[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 80%;\r\n    border-radius: 5rem;\r\n    letter-spacing: .1rem;\r\n    font-weight: bold;\r\n    padding: 0.5rem;\r\n    transition: all 0.2s;\r\n}\r\n\r\n    \r\n.form-label-group[_ngcontent-%COMP%] {\r\nposition: relative;\r\nmargin-bottom: 0.5rem;\r\n}\r\n\r\n    \r\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    border-radius: 2rem;\r\n}\r\n\r\n    \r\n.form-label-group[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%], .form-label-group[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\r\n    padding: var(--input-padding-y) var(--input-padding-x);\r\n}\r\n\r\n    \r\n.form-label-group[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 0;\r\n    \r\n    line-height: 1.5;\r\n    color: #495057;\r\n    border: 1px solid transparent;\r\n    border-radius: .25rem;\r\n    transition: all .1s ease-in-out;\r\n}\r\n\r\n    \r\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n    color: transparent;\r\n}\r\n\r\n    \r\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) {\r\n    padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\r\n    padding-bottom: calc(var(--input-padding-y) / 3);\r\n}\r\n\r\n    \r\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown)    ~ label[_ngcontent-%COMP%] {\r\n        padding-top: calc(var(--input-padding-y) / 3);\r\n        padding-bottom: calc(var(--input-padding-y) / 3);\r\n        font-size: 12px;\r\n        color: #777;\r\n    }\r\n\r\n    \r\n.btn-google[_ngcontent-%COMP%] {\r\n    color: white;\r\n    background-color: #ea4335;\r\n}\r\n\r\n    \r\n.btn-facebook[_ngcontent-%COMP%] {\r\n    color: white;\r\n    background-color: #3b5998;\r\n}\r\n\r\n    \r\n.btn-facebook[_ngcontent-%COMP%]:hover\r\n{\r\n    color:white;\r\n}\r\n\r\n    \r\n.text-danger[_ngcontent-%COMP%]\r\n{\r\n    font-size:0.8rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2Qix3QkFBd0I7QUFDNUI7OztBQUdBO0lBQ0ksNkJBQTZCO0lBQzdCLGdDQUFnQztBQUNwQzs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsMkNBQTJDOztJQUUzQzs7O29CQUdnQjs7SUFFaEIsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLFVBQVU7SUFDViwrREFBK0Q7SUFDL0QsMkVBQTJFO0lBQzNFLHNCQUFzQjtBQUMxQjs7O0FBSUE7SUFDSSxXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7OztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLHFCQUFxQjtBQUNyQjs7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOzs7QUFFQTs7SUFFSSxzREFBc0Q7QUFDMUQ7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsc0NBQXNDO0lBQ3RDLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQiwrQkFBK0I7QUFDbkM7OztBQWtCQTtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSw0RUFBNEU7SUFDNUUsZ0RBQWdEO0FBQ3BEOzs7QUFFSTtRQUNJLDZDQUE2QztRQUM3QyxnREFBZ0Q7UUFDaEQsZUFBZTtRQUNmLFdBQVc7SUFDZjs7O0FBRUo7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOzs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7OztBQUVBOztJQUVJLFdBQVc7QUFDZjs7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCA6cm9vdCB7XHJcbiAgICAtLWlucHV0LXBhZGRpbmcteDogMXJlbTtcclxuICAgIC0taW5wdXQtcGFkZGluZy15OiAuNXJlbTtcclxufVxyXG5cclxuICAgIFxyXG4uaW5wdXQtZ3JvdXAtdGV4dHtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDJyZW07XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC1hcHBlbmQgOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyZC1zaWduaW4ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIC8qIGJveC1zaGFkb3c6ICMyMGNkZmQgMHB4IDIycHggNzBweCA0cHg7ICovXHJcblxyXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggIzIwY2RmZCxcclxuXHRcdFx0XHQwIDAgMjVweCAjMjBjZGZkLFxyXG5cdFx0XHRcdDAgMCA0NXB4ICMyMGNkZmQsXHJcblx0XHRcdFx0MCAwIDcwcHggIzIwY2RmZDtcclxuXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY2FyZC1zaWduaW4gLmNhcmQtdGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLmNhcmQtc2lnbmluIC5jYXJkLWltZy1sZWZ0IHtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICAvKiBMaW5rIHRvIHlvdXIgYmFja2dyb3VuZCBpbWFnZSB1c2luZyBpbiB0aGUgcHJvcGVydHkgYmVsb3chICovXHJcbiAgICBiYWNrZ3JvdW5kOiBzY3JvbGwgY2VudGVyIHVybCgnaHR0cHM6Ly93YWxscGFwZXJjYXZlLmNvbS93cC93cDI4NTYwNTAuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4gICAgXHJcblxyXG4uZm9ybS1zaWduaW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiAuYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIHtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG5tYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0IHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwID4gaW5wdXQsXHJcbi5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xyXG4gICAgcGFkZGluZzogdmFyKC0taW5wdXQtcGFkZGluZy15KSB2YXIoLS1pbnB1dC1wYWRkaW5nLXgpO1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIC8qIE92ZXJyaWRlIGRlZmF1bHQgYDxsYWJlbD5gIG1hcmdpbiAqL1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIHtcclxuICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgKyB2YXIoLS1pbnB1dC1wYWRkaW5nLXkpICogKDIgLyAzKSk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIC8gMyk7XHJcbn1cclxuXHJcbiAgICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB+IGxhYmVsIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIC8gMyk7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSAvIDMpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzc3NztcclxuICAgIH1cclxuXHJcbi5idG4tZ29vZ2xlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYTQzMzU7XHJcbn1cclxuXHJcbi5idG4tZmFjZWJvb2sge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcclxufVxyXG5cclxuLmJ0bi1mYWNlYm9vazpob3ZlclxyXG57XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLnRleHQtZGFuZ2VyXHJcbntcclxuICAgIGZvbnQtc2l6ZTowLjhyZW07XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Meta"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class PageNotFoundComponent {
    constructor(titleService, metaTagService) {
        this.titleService = titleService;
        this.metaTagService = metaTagService;
    }
    ngOnInit() {
        this.titleService.setTitle("Sorry! Page Not Found");
        this.metaTagService.addTags([
            { name: "description", content: "Oops!!! Sorry, we couldn't find what you are looking for." },
            { name: "author", content: "Piyush Chouhan M, Nishant Bhushan, Kedar R, Mohanavel R, Kumaran R" },
            { name: "robots", content: "index,follow" },
            { name: "keywords", content: "404, page not found, invalid page" },
            { httpEquiv: 'Content-Type', content: "text/html", charset: "UTF-8" }
        ]);
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"])); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 256, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-sm-12", "col-md-12", "mt-5", "mb-5"], ["width", "100%", "height", "auto", "viewBox", "0 0 636 324", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["id", "OBJECTS"], ["id", "Group"], ["id", "Vector", "d", "M101.3 255.2C101.3 255.2 111.1 272.6 181.8 280.5C252.5 288.4 288.2 314.9 333.1 322.8C378 330.7 433.6 278.5 481.8 286.5C530 294.4 588.2 264.2 592.8 255.2H101.3Z", "fill", "#2F1829"], ["id", "Vector_2", "d", "M611.9 251.7H601.4L140.8 251.8C140.8 251.8 136.1 248.1 128.9 241.8C125.8 239.1 122.2 235.9 118.3 232.3C116.9 231 115.4 229.6 113.9 228.2C100.2 215.3 83.6 198.2 70.1 180.1C55.9 161 45.1 140.6 44.8 122.6C44.8 122.2 44.8 121.8 44.8 121.4C45 104 48.4 85.1 56.9 67.7C61.9 57.5 68.5 47.8 77.3 39C100.1 16.2 137.1 0.300011 194.5 0.800011C261.4 1.30001 330.8 26.3 393.5 60.8C406.6 68 419.4 75.7 431.9 83.6C441.1 89.5 450.1 95.5 458.8 101.6C483.1 118.6 505.6 136.4 525.5 153.8C570.6 193.1 602.3 230.4 611.9 251.7Z", "fill", "url(#paint0_linear)"], ["id", "Vector_3", "opacity", "0.45", "d", "M611.9 251.7H601.4L140.8 251.8C140.8 251.8 136.1 248.1 128.9 241.8C125.8 239.1 122.2 235.9 118.3 232.3C116.9 231 115.4 229.6 113.9 228.2C100.2 215.3 83.6 198.2 70.1 180.1C55.9 161 45.1 140.6 44.8 122.6C50.5 119.6 63.9 113.5 75 116.3C89.5 119.9 92.6 137.2 92.6 137.2C92.6 137.2 103 128.8 113.9 132.8C124.8 136.8 126.5 148.4 126.5 148.4C126.5 148.4 139.4 141.8 150.9 144.6C162.5 147.4 171.8 158.6 159.4 165.9C147.1 173.1 133.3 167.5 132.9 167.4C133.1 167.6 137.9 174.2 129.1 182.2C120.1 190.4 154.6 197.5 154.6 197.5C154.6 197.5 155.9 175.1 179 177.6C202.1 180.1 220.8 192.6 220.8 192.6C220.8 192.6 222 158.3 240.5 152C259 145.7 268.5 165.9 268.5 165.9C268.5 165.9 309.5 139.4 323.4 164.1C337.3 188.8 337.9 193.5 337.9 193.5C337.9 193.5 349.8 128.5 387 131.5C424.2 134.5 431.1 160.3 430.5 162.9C429.9 165.5 441.2 146.2 452.4 156.7C463.6 167.2 470.1 181.8 470.1 181.8L529 174.9C529 174.9 523 163.3 525.4 153.8C570.6 193.1 602.3 230.4 611.9 251.7Z", "fill", "url(#paint1_linear)"], ["id", "Vector_4", "d", "M431.9 83.6H257.8C279.6 83.6 283.9 75.7 296.8 71.4C297.4 71.2 298 71 298.6 70.9C310.7 67.8 320.6 74.7 328.3 74.4C336.4 74.1 345.3 65.5 354.6 62.5C357.7 61.5 361 61.8 364.3 62.6C370.8 64.1 377.6 67.4 384.5 66.1C390.5 65 391 62.5 393.4 60.8C406.6 68 419.5 75.6 431.9 83.6Z", "fill", "url(#paint2_linear)"], ["id", "Vector_5", "d", "M206.5 67.7H56.9C61.8 57.7 68.3 48.1 76.9 39.4C77 39.3 77.2 39.1 77.3 39C80.8 38.3 84.6 37.8 88.7 37.6C112.4 36.6 117.4 54.5 117.4 54.5C117.4 54.5 123.6 46.2 134.8 50.2C146 54.2 142.1 59.1 151 61.8C152.2 62.1 153.4 62.2 154.7 62.1C163.2 61.4 173.9 52.1 183.4 55.5C194.4 59.4 187.3 67.7 206.5 67.7Z", "fill", "url(#paint3_linear)"], ["id", "Vector_6", "d", "M631.8 258.5H75.5C73.6 258.5 72.1 257 72.1 255.1C72.1 253.2 73.6 251.7 75.5 251.7H631.8C633.7 251.7 635.2 253.2 635.2 255.1C635.2 257 633.7 258.5 631.8 258.5Z", "fill", "#2F1829"], ["id", "Vector_7", "opacity", "0.25", "d", "M364.4 62.5C354.5 65 343.3 75.8 336 77.4C326.9 79.4 316.3 74.8 306 72.2C302.9 71.4 300.5 71 298.6 70.8C310.7 67.7 320.6 74.6 328.3 74.3C336.4 74 345.3 65.4 354.6 62.4C357.8 61.4 361 61.7 364.4 62.5Z", "fill", "white"], ["id", "Vector_8", "opacity", "0.25", "d", "M154.7 62.1C145.8 66.8 141.6 56.2 133.9 52.7C125 48.7 118.7 61.2 116.1 59C113.5 56.9 112.3 47.6 102.2 42.8C96.5 40.1 85.4 39.5 77 39.5C77.1 39.4 77.3 39.2 77.4 39.1C80.9 38.4 84.7 37.9 88.8 37.7C112.5 36.7 117.5 54.6 117.5 54.6C117.5 54.6 123.7 46.3 134.9 50.3C146.1 54.3 142.2 59.2 151.1 61.9C152.2 62.1 153.5 62.2 154.7 62.1Z", "fill", "white"], ["id", "Vector_9", "d", "M394.9 40.3C394.9 40.3 457.4 96.1 482.1 88.5C507 80.9 351.2 7.20001 394.9 40.3Z", "fill", "url(#paint4_linear)"], ["id", "Vector_10", "d", "M35 97C35 97 13.7 134.4 50.9 173.8C59.5 182.9 60.5 199.9 43.3 200.8C26.1 201.7 -0.599994 159.8 0.300006 126.1C1.30001 92.4 40.8 77.1 35 97Z", "fill", "url(#paint5_linear)"], ["id", "Vector_11", "d", "M461 295.7C461 295.7 425 303.6 415.8 315.9C411.3 321.9 429.2 321 444.5 314.4C460.5 307.5 473.6 294.9 461 295.7Z", "fill", "#2F1829"], ["id", "Vector_12", "d", "M200.2 293.4C200.2 293.4 214.2 293.1 226.5 297.9C238.8 302.7 241.5 317.4 229.2 319.2C217 321 189.1 304.7 190.7 298.1C191.9 293.1 200.2 293.4 200.2 293.4Z", "fill", "#2F1829"], ["id", "Vector_13", "d", "M136.3 213.7L128.4 241.1C125.3 238.4 121.7 235.2 117.8 231.6L116.1 228.4C116.1 228.4 119.1 193.2 109.2 179.1C118.7 185.7 123.3 212.4 123.3 212.4L121.8 214.4H123.3C123.3 214.4 125.7 218.9 126.6 225.5C132.7 193.9 126.8 178.6 126.6 178.1C126.8 178.4 131.6 184.2 134.4 193.8C137.3 203.6 136.2 209.7 136.2 209.7L133.8 213.6H136.3V213.7Z", "fill", "black"], ["id", "Group_2"], ["id", "Group_3"], ["id", "Vector_14", "d", "M376.1 240.6C376.1 240.6 378.7 238.3 380.6 235.8C380.9 235.4 381.3 234.9 381.5 234.5L382.7 235.9L382.3 233.7C382.3 233.7 390.4 230.9 393.3 223.1C391.5 231.6 388.1 238 384.1 240.9C382.3 242.2 380.5 242.8 378.6 242.7C372.3 242.5 376.1 240.6 376.1 240.6Z", "fill", "#F3475C"], ["id", "Group_4", "opacity", "0.25"], ["id", "Vector_15", "opacity", "0.25", "d", "M393.3 223.1C392.6 225.3 391.8 227.5 390.8 229.6C389.8 231.7 388.7 233.7 387.4 235.6C386.1 237.5 384.5 239.3 382.6 240.6C380.7 242 378.3 242.7 376 242.6C375.9 242.6 375.8 242.5 375.8 242.4C375.8 242.3 375.9 242.2 376 242.2C378.3 242.4 380.5 241.7 382.4 240.4C384.3 239.1 385.9 237.4 387.2 235.5C388.6 233.6 389.7 231.6 390.7 229.5C391.7 227.5 392.5 225.3 393.3 223.1Z", "fill", "white"], ["id", "Vector_16", "opacity", "0.25", "d", "M376.1 240.6C376.1 240.6 378.7 238.3 380.6 235.8C381.4 238.2 383.1 240 384.1 240.9C382.3 242.2 380.5 242.8 378.6 242.7C372.3 242.5 376.1 240.6 376.1 240.6Z", "fill", "black"], ["id", "Vector_17", "d", "M313.5 225.2C313.5 225.2 294.9 207.7 297.9 184.4C299.8 195.2 307.7 208.1 307.7 208.1L306.7 211L310.2 210.3C310.2 210.3 314.6 183.7 304.7 170.8C318.1 184.6 317.9 205.1 317.9 205.1L315.4 208.9L317.9 210C317.9 210 315 220 323.7 216.1C332.4 212.3 337.9 179.2 330 170.8C339.4 178.9 337.9 206.8 337.9 207.7C337.9 208.6 333.8 212.4 333.8 212.4L336.9 214.7C336.9 214.7 335 233.6 313.5 225.2Z", "fill", "black"], ["id", "Vector_18", "d", "M398.8 250C398.8 250 392.3 243.9 393.4 235.8C394.1 239.6 396.8 244 396.8 244L396.5 245L397.7 244.8C397.7 244.8 399.2 235.5 395.8 231.1C400.4 235.9 400.4 243 400.4 243L399.5 244.3L400.4 244.7C400.4 244.7 399.4 248.2 402.4 246.8C405.4 245.5 407.3 234 404.6 231.1C407.9 233.9 407.3 243.6 407.3 243.9C407.3 244.2 405.9 245.5 405.9 245.5L407 246.3C406.9 246.4 406.3 253 398.8 250Z", "fill", "black"], ["id", "Group_5"], ["id", "Vector_19", "d", "M374 241.1L368.7 241.5C372.5 238.1 371.9 234.8 371.4 233.3C371.2 232.8 371 232.4 371 232.4L373.5 232L372.1 230.1C372.1 230.1 376.6 224.9 378.3 211.1C383.6 220.4 381.5 228.8 378.7 234.3C376.6 238.6 374 241.1 374 241.1Z", "fill", "#FFCA51"], ["id", "Group_6", "opacity", "0.25"], ["id", "Vector_20", "opacity", "0.25", "d", "M378.3 211.1C378.9 213.7 379.2 216.3 379.3 218.9C379.4 221.5 379.4 224.2 379 226.8C378.6 229.4 378 232 377 234.4C376 236.8 374.5 239.1 372.7 241.1C372.6 241.2 372.5 241.2 372.4 241.1C372.3 241 372.3 240.9 372.4 240.8C374.2 238.9 375.6 236.7 376.7 234.3C377.7 231.9 378.4 229.3 378.8 226.8C379.2 224.2 379.3 221.6 379.2 219C379.1 216.3 378.9 213.7 378.3 211.1Z", "fill", "white"], ["id", "Vector_21", "opacity", "0.25", "d", "M374 241.1L368.7 241.5C372.5 238.1 371.9 234.8 371.4 233.3C374.2 235 377 234.8 378.7 234.3C376.6 238.6 374 241.1 374 241.1Z", "fill", "black"], ["id", "Vector_22", "d", "M408.3 251.1H323L336.7 240C336.7 240 354.9 230.6 362.5 232.6C370.1 234.5 368.9 240.9 368.9 240.9C368.9 240.9 369.4 240.4 370.1 239.8C371.8 238.5 375 236.7 378.2 238.6C382.8 241.4 382.1 245 382.1 245.2C382.2 245.1 385 242.4 387.3 243.2C389.6 244.1 390.5 246.6 390.5 246.6C390.5 246.6 393.5 242.5 396 244C398.5 245.5 400 248.6 400 248.6C400 248.6 404 244.6 408.3 251.1Z", "fill", "#982245"], ["id", "Vector_23", "opacity", "0.25", "d", "M391.9 251.1H323.1L336.8 240C336.8 240 355 230.6 362.6 232.6C370.2 234.5 369 240.9 369 240.9C369 240.9 369.5 240.4 370.2 239.8C370.4 241.2 370.4 242.6 370.2 244C370.2 244 374.1 242.5 376.6 244.6C379.1 246.7 378.4 248.6 378.4 248.6C378.4 248.6 381.8 246.6 385.7 248.6C386.8 249.3 389.3 250.2 391.9 251.1Z", "fill", "black"], ["id", "Group_7"], ["id", "Vector_24", "d", "M237.3 191.1V97.5H201.8V97.8L159 166.6L140.3 196.7L142.4 218.4H201.8V251H237.3V218.4H253V191H237.3V191.1ZM201.8 191.1H174.2L199.6 147.4L201.8 143.8V191.1Z", "fill", "url(#paint6_linear)"], ["id", "Vector_26", "d", "M487.5 191.1V97.5H452V97.8L390.5 196.7L392.6 218.4H452V251H487.5V218.4H503.1V191H487.5V191.1ZM452 191.1H424.4L449.8 147.4L452 143.8V191.1V191.1Z", "fill", "url(#paint8_linear)"], ["id", "Vector_27", "opacity", "0.25", "d", "M230.7 97.5C225.9 103.6 209.6 101.4 206 101.8C201.8 102.2 172.9 153.1 169 159.6C166.4 163.8 161.9 165.8 159.1 166.7L201.9 97.9V97.6H230.7V97.5Z", "fill", "white"], ["id", "Vector_28", "opacity", "0.25", "d", "M487.5 97.5V168.3C478.4 160.7 483.4 104.9 482 103.1C480.5 101.1 461.5 102.4 458 101.3C455.7 100.6 453.8 98.6 452.8 97.4H487.5V97.5Z", "fill", "white"], ["id", "Vector_29", "opacity", "0.25", "d", "M329.1 232.4C300.5 233.7 303.8 192.4 303.8 192.4C304 202.9 305.4 210.6 308.1 215.6C311 220.9 315.6 223.6 321.8 223.6C327.8 223.6 332.3 221 335.2 215.8C338.1 210.6 339.6 202.5 339.6 191.5V153.5C339.6 142.5 338.2 134.2 335.3 128.8C332.4 123.3 327.8 120.6 321.6 120.6C321.6 120.6 339.3 118.4 346.6 144.7C353.8 171 357.8 231.1 329.1 232.4Z", "fill", "black"], ["id", "zero"], ["id", "Vector_25", "d", "M361.2 110.3C351.9 99 338.7 93.3 321.6 93.3C304.6 93.3 291.4 98.9 282.1 110.2C272.8 121.5 268.1 137.4 268.1 158.2V186.3C268.1 206.9 272.8 222.9 282.1 234.2C291.5 245.5 304.7 251.2 321.8 251.2C338.7 251.2 351.9 245.6 361.2 234.3C370.5 223 375.2 207.1 375.2 186.3V158.3C375.2 137.6 370.5 121.6 361.2 110.3ZM303.8 151.3C304 141 305.5 133.4 308.3 128.3C311.1 123.2 315.5 120.7 321.6 120.7C327.9 120.7 332.4 123.4 335.3 128.9C338.2 134.4 339.6 142.6 339.6 153.6V191.6C339.5 202.6 338.1 210.7 335.2 215.9C332.3 221.1 327.8 223.7 321.8 223.7C315.5 223.7 311 221 308.1 215.7C305.4 210.7 303.9 202.9 303.8 192.5C303.8 191.9 303.8 191.2 303.8 190.6V151.3V151.3Z", "fill", "url(#paint7_linear)"], ["id", "Vector_30", "d", "M291.5 110.1C291.5 110.1 279.6 101.5 278.3 88.1C286.9 90.5 291.5 101 291.5 101C291.5 101 289.3 91.4 291.5 84.9C297.8 94.1 296.1 101.6 291.5 110.1Z", "fill", "url(#paint9_linear)"], ["id", "Group_8"], ["id", "Group_9"], ["id", "Vector_31", "d", "M569.9 241.4V244.7C569.3 244.6 567.9 244.7 566.7 244.9C565.9 245 565.2 245 564.8 245.1L564.5 242.3L565.8 242.1L569.9 241.4Z", "fill", "url(#paint10_linear)"], ["id", "handboy"], ["id", "Vector_32", "d", "M529.1 188C529.1 188 529.2 188.3 528.8 188.7C528.5 189 528 189.3 527.1 189.7C521.7 191.8 510.6 186.7 504.5 183.3C498.5 179.9 481.3 182.7 469.7 181.1C458.1 179.5 453.2 173.3 442.8 170.7C432.4 168.1 393.6 179.3 391.4 170.6C389.2 161.9 432.8 77.2 436.6 83.1C440.3 89 453.2 89.4 462.3 94.1C471.4 98.8 479.1 122.1 489.2 124.4C490.6 124.7 491.9 125.2 493.2 125.9C501.2 130.2 507 140.9 507.2 149.7C507.4 159.9 521.4 168.1 526.5 173.6C531.5 179.2 529.1 188 529.1 188Z", "fill", "url(#paint11_linear)"], ["id", "Vector_33", "opacity", "0.25", "d", "M529.1 188C529.1 188 529.2 188.3 528.8 188.7C530.6 177.5 520.3 172.2 510.8 164.4C501.1 156.3 505.2 150.2 503.2 141.9C502 137 497 130.5 493.2 126C501.2 130.3 507 141 507.2 149.8C507.4 160 521.4 168.2 526.5 173.7C531.5 179.2 529.1 188 529.1 188Z", "fill", "white"], ["id", "Vector_34", "d", "M528.9 186.5L526.3 188.9C525.9 189.2 526.1 189.8 526.5 190L528.7 190.7L533.7 196.2C533.9 196.4 534.3 196.5 534.5 196.2L535.3 195.4C535.5 195.2 535.6 194.8 535.3 194.6L530.3 189.1L529.8 186.9C529.8 186.3 529.2 186.1 528.9 186.5Z", "fill", "#2F1829"], ["id", "Vector_35", "d", "M548.7 190C548 190.9 547.2 192 546.3 193.1C546 193.5 545.6 193.9 545.3 194.3C543.9 196 542.7 197.4 542.3 197.5C541.3 197.7 535.7 194.5 534.9 194.5C534.1 194.5 532.2 195.9 531.7 195.7C531.2 195.6 528.5 193.1 528.6 192.4C528.7 191.8 531.1 189.6 532.3 189.3C532.6 189.2 533.4 189.3 534.3 189.5H534.4C536.7 190 540.1 191.1 540.6 190.8C540.9 190.7 541.4 189.8 542 188.7C542.2 188.3 542.4 187.9 542.6 187.5C542.9 187 543.1 186.5 543.4 186C543.6 185.5 543.8 185.1 544 184.8C544.5 185.6 545.3 186.6 546.2 187.5C547.2 188.8 548.2 189.8 548.7 190Z", "fill", "url(#paint12_linear)"], ["id", "Vector_36", "d", "M571.4 196.6C571.4 198.4 571.4 200.2 571.3 201.6C570.9 207.3 570.4 211.9 568.5 212C566.6 212.1 566.2 196.7 566.3 195.8C566.3 195.6 566.3 195.2 566.4 194.7C566.5 193 566.5 190 566.5 188.7C566.5 188.4 566.5 188.2 566.5 188.1L566.9 187.9L571.1 185.2C571.1 185.2 571.3 188.8 571.5 193C571.5 193.6 571.5 194.1 571.5 194.7C571.4 195.3 571.4 195.9 571.4 196.6Z", "fill", "url(#paint13_linear)"], ["id", "Vector_37", "opacity", "0.25", "d", "M571.4 196.6C570.4 197.4 568.8 198.5 567.2 198.6C564.6 198.7 568.4 193.2 569.3 193.1C569.6 193.1 570.4 193 571.3 193C571.3 193.6 571.3 194.1 571.3 194.7C571.4 195.3 571.4 195.9 571.4 196.6Z", "fill", "black"], ["id", "Vector_38", "d", "M571.4 194.7C570.3 195.1 568.9 195.3 567 194.9C566.7 194.8 566.5 194.8 566.3 194.6C564.7 193.7 565.3 191 566.4 188.6C566.5 188.3 566.7 188 566.8 187.8L571 185.1C571 185.1 571.3 189.8 571.4 194.7Z", "fill", "#2F1829"], ["id", "Vector_39", "d", "M562.5 164.2C562.4 164.8 562.2 165.5 561.7 166.2C561.2 167.1 560.4 168 559.7 168.6C559.1 169 558.6 169.3 558.2 169.3C556.9 169.1 555.2 166.9 555.1 166.5C555.1 166.1 556.5 165.9 556.4 164.7C556.2 163.5 555.4 163.3 554.9 163.5C554.3 163.7 553.6 165 553.6 166.2C553.2 166.1 552.5 164.7 551.1 163.8C550.7 163.6 550.3 163.4 549.8 163.3C549.2 163.2 548.5 163.2 547.7 163.5C547.3 159.1 550 157.2 552 158C552 158 551.3 156.5 550.2 156.2C552.7 156.6 553.3 158.7 553.3 158.7C553.3 158.7 554 155.8 557.1 155.4C560.2 155 560.8 159.1 560.8 159.1C560.8 159.1 561.5 157.1 561.2 155.9C561.8 157.5 561.1 160.2 561.1 160.2C561.1 160.2 562.6 160.6 563 162.6C561.7 161.6 561.7 161.7 561.7 161.7C561.7 161.7 562.6 162.3 562.5 164.2Z", "fill", "#2F172B"], ["id", "Vector_40", "d", "M559.7 168.5C559.5 169.2 559.2 169.8 559.1 170.1C558.8 170.7 555.6 173.4 553.3 170.3C551.4 167.7 551.1 164.7 551.1 163.8C552.5 164.6 553.2 166.1 553.6 166.2C553.6 165 554.3 163.8 554.9 163.5C555.5 163.3 556.2 163.5 556.4 164.7C556.6 165.9 555.1 166.1 555.1 166.5C555.1 166.9 556.8 169.1 558.2 169.3C558.6 169.2 559.1 169 559.7 168.5Z", "fill", "url(#paint14_linear)"], ["id", "Vector_41", "d", "M561.3 155.6C561.2 155.4 561.2 155.3 561.1 155.2C561.2 155.3 561.2 155.5 561.3 155.6Z", "fill", "#2F172B"], ["id", "Vector_42", "d", "M572.4 184.6C572.1 185.2 571.7 185.7 571.4 186.2C571.3 186.3 571.2 186.5 571.1 186.6C570.1 187.8 569.2 188.5 569.2 188.5C569.2 188.5 569.2 188.5 569.2 188.6C569.2 188.7 569.2 188.8 569.3 189C569.4 189.4 569.5 190.1 569.6 191C569.6 191.1 569.6 191.3 569.7 191.4C569.8 191.8 569.8 192.2 569.8 192.6C569.8 192.8 569.9 193.1 569.9 193.3C569.9 193.4 569.9 193.6 569.9 193.7C570 194.4 570 195 570 195.7C570 195.8 570 196 570 196.1C570 196.9 569.9 197.6 569.8 198.1C569.8 198.3 569.7 198.4 569.7 198.5C569.6 198.7 569.6 198.8 569.5 198.9C569.4 199 569.2 199.1 569 199.2C567.5 199.9 563.7 199.9 559.8 199.7C556.5 199.5 553.2 199.2 551.5 198.9C551 198.8 550.6 198.7 550.3 198.5C550.1 198.4 549.9 198.2 549.8 198.1C549.7 198 549.6 197.9 549.6 197.8C549.3 197.3 549.2 196.8 549.2 196.1C549.2 196 549.2 195.8 549.2 195.7C549.3 195.1 549.4 194.5 549.5 193.8V193.7C549.5 193.6 549.6 193.4 549.6 193.3C549.8 192.6 550 192 550.1 191.3C550.1 191.2 550.1 191.1 550.2 191V190.9C550.4 190.1 550.5 189.4 550.5 188.9C550.5 188.7 550.5 188.6 550.6 188.5C550.7 187.2 550.6 186.8 550.6 186.8C550.6 186.8 550.3 187.6 549.8 188.5C549.7 188.6 549.6 188.8 549.6 188.9C549.3 189.4 548.9 189.9 548.7 189.9C548.7 189.9 548.6 189.9 548.5 189.9C548.2 189.8 547.8 189.4 547.3 188.9C547.2 188.8 547 188.6 546.9 188.5C546.6 188.2 546.3 187.9 546 187.5C545.7 187.2 545.4 186.8 545.1 186.5C545 186.4 544.9 186.2 544.8 186.1C544.4 185.6 544.1 185.2 543.8 184.8C543.6 184.5 543.5 184.3 543.4 184.1C543.3 184 543.3 183.9 543.3 183.8V183.7C543.4 183.4 543.6 182.6 543.9 181.7C544 181.6 544 181.4 544.1 181.3C544.3 180.7 544.6 180 545 179.3C545.1 179.2 545.1 179 545.2 178.9C545.5 178.3 545.9 177.6 546.2 176.9C546.3 176.8 546.4 176.6 546.4 176.5C546.8 175.8 547.2 175.1 547.6 174.5C547.7 174.4 547.8 174.2 547.9 174.1C548.5 173.3 549 172.6 549.6 172.1C549.8 171.9 549.9 171.8 550.1 171.7C550.2 171.6 550.3 171.6 550.4 171.5C551.2 171 552 170.6 552.8 170.3C555.5 169.3 557.8 169.4 557.8 169.4C559.1 169.4 560.4 169.7 561.7 170.2C562.6 170.6 563.5 171.1 564.4 171.7C564.6 171.8 564.8 172 565 172.1C565.7 172.7 566.4 173.3 567 174.1C567.1 174.2 567.2 174.4 567.4 174.5C567.9 175.1 568.4 175.8 568.8 176.5C568.9 176.6 569 176.8 569.1 176.9C569.5 177.5 569.8 178.2 570.2 178.9C570.3 179 570.3 179.2 570.4 179.3C570.7 179.9 571 180.6 571.3 181.3C571.4 181.4 571.4 181.6 571.5 181.7C571.7 182.3 572 183 572.2 183.7C572.2 183.8 572.3 184 572.3 184.1C572.4 184.3 572.4 184.5 572.4 184.6Z", "fill", "#FFCA51"], ["id", "Group_10"], ["id", "Vector_43", "opacity", "0.25", "d", "M565.2 172.2H549.9C550.1 172 550.2 171.9 550.4 171.8H564.6C564.8 171.9 565 172 565.2 172.2Z", "fill", "white"], ["id", "Vector_44", "opacity", "0.25", "d", "M567.6 174.6H548C548.1 174.5 548.2 174.3 548.3 174.2H567.3C567.3 174.3 567.4 174.4 567.6 174.6Z", "fill", "white"], ["id", "Vector_45", "opacity", "0.25", "d", "M569.2 177H546.4C546.5 176.9 546.6 176.7 546.6 176.6H569C569.1 176.7 569.1 176.8 569.2 177Z", "fill", "white"], ["id", "Vector_46", "opacity", "0.25", "d", "M570.5 179.4H545.2C545.3 179.3 545.3 179.1 545.4 179H570.3C570.4 179.1 570.4 179.2 570.5 179.4Z", "fill", "white"], ["id", "Vector_47", "opacity", "0.25", "d", "M571.5 181.8H544.2C544.3 181.7 544.3 181.5 544.4 181.4H571.4C571.4 181.5 571.5 181.7 571.5 181.8Z", "fill", "white"], ["id", "Vector_48", "opacity", "0.25", "d", "M572.3 184.2H543.6C543.5 184.1 543.5 184 543.5 183.9V183.8H572.2C572.2 183.9 572.3 184 572.3 184.2Z", "fill", "white"], ["id", "Vector_49", "opacity", "0.25", "d", "M571.4 186.2C571.3 186.3 571.2 186.5 571.1 186.6H545.4C545.3 186.5 545.2 186.3 545.1 186.2H571.4Z", "fill", "white"], ["id", "Vector_50", "opacity", "0.25", "d", "M547.1 188.6H550C549.9 188.7 549.8 188.9 549.8 189H547.5C547.4 188.9 547.3 188.7 547.1 188.6Z", "fill", "white"], ["id", "Vector_51", "opacity", "0.25", "d", "M569.3 189H550.7C550.7 188.8 550.7 188.7 550.8 188.6H569.3C569.3 188.7 569.3 188.8 569.3 189Z", "fill", "white"], ["id", "Vector_52", "opacity", "0.25", "d", "M569.7 191.4H550.3C550.3 191.3 550.3 191.2 550.4 191.1V191H569.7C569.7 191.1 569.7 191.3 569.7 191.4Z", "fill", "white"], ["id", "Vector_53", "opacity", "0.25", "d", "M570 193.8H549.7C549.7 193.7 549.8 193.5 549.8 193.4H570C569.9 193.6 570 193.7 570 193.8Z", "fill", "white"], ["id", "Vector_54", "opacity", "0.25", "d", "M570.1 195.8C570.1 195.9 570.1 196.1 570.1 196.2H549.3C549.3 196.1 549.3 195.9 549.3 195.8H570.1Z", "fill", "white"], ["id", "Vector_55", "opacity", "0.25", "d", "M569.9 198.2C569.9 198.4 569.8 198.5 569.8 198.6H550.5C550.3 198.5 550.1 198.3 550 198.2H569.9Z", "fill", "white"], ["id", "Vector_56", "d", "M570.3 238.7C569.4 239.3 563.3 239.9 563.3 239.9L563.1 238.8L562 232.1L559.3 216.4L556.6 236.1L555.8 241.9C555.8 241.9 548.3 242.3 548.3 240.5C548.3 240.3 548.3 239.5 548.4 238.2C548.6 230.2 549.5 203.9 549.7 198C550 198.6 550.7 199 551.7 199.1C551.8 199.1 551.9 199.1 552 199.1C555.8 199.7 566.5 200.6 569.1 199.4C569.2 200.4 569.3 201.9 569.4 203.8C569.8 211.4 570.1 225.2 570.3 232.9C570.3 236.4 570.3 238.7 570.3 238.7Z", "fill", "#2F1829"], ["id", "Vector_57", "opacity", "0.25", "d", "M562 232.1L559.3 216.4C559.3 216.4 560 210.1 560.3 209.3C560.6 208.6 562.5 209.1 563.3 208.6C563.7 209.6 561 211 560.8 214.3C560.7 216.6 561.5 226.7 562 232.1Z", "fill", "black"], ["id", "Vector_58", "opacity", "0.25", "d", "M551.1 201.4C551.1 201.4 550.9 205 553.8 206.7", "stroke", "white", "stroke-width", "0.4635", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "Group_11", "opacity", "0.25"], ["id", "Group_12", "opacity", "0.25"], ["id", "Vector_59", "opacity", "0.25", "d", "M551.8 206.2L551.7 206.9", "stroke", "white", "stroke-width", "0.4635", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "Vector_60", "opacity", "0.25", "d", "M551.7 208.2L550.3 238", "stroke", "white", "stroke-width", "0.4635", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-dasharray", "1.39 1.39"], ["id", "Vector_61", "opacity", "0.25", "d", "M550.2 238.7V239.4", "stroke", "white", "stroke-width", "0.4635", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "Vector_62", "opacity", "0.25", "d", "M562 209.6L564.7 237.9", "stroke", "white", "stroke-width", "0.4635", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-dasharray", "1.39 1.39"], ["id", "Vector_63", "opacity", "0.25", "d", "M564.3 201.9C564.3 201.9 564 205.4 564.3 206C564.6 206.7 565.9 207.2 566.2 207.4C566.5 207.5 567.7 206.4 567.8 205.7C567.9 205 567.9 202 567.9 202C567.9 202 565.7 201.6 564.3 201.9Z", "stroke", "white", "stroke-width", "0.4635", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "Vector_64", "opacity", "0.25", "d", "M570.3 238.7C569.4 239.3 563.3 239.9 563.3 239.9L563.1 238.8C564.9 237.8 568.4 235.6 570.2 232.9C570.3 236.4 570.3 238.7 570.3 238.7Z", "fill", "black"], ["id", "Vector_65", "d", "M570.7 241.3L569.9 241.4L564.5 242.2L564.1 242.3C563.3 242.4 562.6 241.9 562.4 241.1V241C562.3 240.2 562.8 239.5 563.6 239.3L570.2 238.3C571 238.2 571.7 238.7 571.9 239.5V239.6C572 240.4 571.5 241.2 570.7 241.3Z", "fill", "#4C3146"], ["id", "Vector_66", "opacity", "0.25", "d", "M556.7 236L555.9 241.8C555.9 241.8 548.4 242.2 548.4 240.4C548.4 240.2 548.4 239.4 548.5 238.1C550.2 238 554.3 237.5 556.7 236Z", "fill", "black"], ["id", "Vector_67", "d", "M556.5 242.2V242.3C556.4 243.1 555.7 243.7 554.9 243.6L549.2 243.1L548.3 243C547.5 242.9 546.9 242.2 547 241.4V241.3C547.1 240.5 547.8 239.9 548.6 240L555.2 240.6C556 240.7 556.6 241.4 556.5 242.2Z", "fill", "#4C3146"], ["id", "Vector_68", "opacity", "0.25", "d", "M569.4 203.8C560.2 205 554 200.8 551.9 199.1C555.7 199.7 566.4 200.6 569 199.4C569.2 200.4 569.3 201.9 569.4 203.8Z", "fill", "black"], ["id", "Vector_69", "opacity", "0.25", "d", "M550.4 191.1C551.1 187.8 550.8 186.9 550.8 186.9C550.8 186.9 549.6 189.9 548.9 190C548.6 190 547.4 188.9 546.2 187.6C547.2 187.3 548.7 186.8 549.5 185.9C550.7 184.5 550.6 178.5 551.1 178.5C551.6 178.5 552.7 189.6 549.6 193.9C549.9 193 550.2 192 550.4 191.1Z", "fill", "black"], ["id", "Vector_70", "opacity", "0.25", "d", "M572.4 184.6C571 187.2 569.2 188.5 569.2 188.5C569.2 188.5 567.6 179.9 567.1 179.1C566.7 178.4 567.3 177.8 568.2 180.7C568.9 183 570.7 184.7 572.3 184.3C572.4 184.3 572.4 184.4 572.4 184.6Z", "fill", "black"], ["id", "Vector_71", "opacity", "0.25", "d", "M569.5 199.1C569.4 199.2 569.2 199.3 569 199.4C567.5 200.1 563.7 200.1 559.8 199.9C562.4 199.6 568.7 198.2 569.8 192.7C570.1 195.2 570.3 198.2 569.5 199.1Z", "fill", "black"], ["id", "Vector_72", "opacity", "0.25", "d", "M562 170.2C561.7 170.6 561.1 170.8 560.1 170.6C558.2 170.2 555.7 171 554.5 170.8C553.8 170.7 553.4 170.5 553.1 170.3C555.8 169.3 558.1 169.4 558.1 169.4C559.4 169.4 560.7 169.7 562 170.2Z", "fill", "black"], ["id", "Vector_73", "d", "M548.7 190C548 190.9 547.2 192 546.3 193.1C544.4 192 542.9 190 542 188.8C542.8 187.4 543.6 185.7 544 184.9C544.5 185.7 545.3 186.7 546.2 187.6C547.2 188.8 548.2 189.8 548.7 190Z", "fill", "#2F1829"], ["id", "Vector_74", "opacity", "0.25", "d", "M548.7 190C548 190.9 547.2 192 546.3 193.1C546 193.5 545.6 193.9 545.3 194.3C545.4 190.8 544.2 187.7 543.5 186.1C543.7 185.6 543.9 185.2 544.1 184.9C544.6 185.7 545.4 186.7 546.3 187.6C547.2 188.8 548.2 189.8 548.7 190Z", "fill", "black"], ["id", "Vector_75", "opacity", "0.25", "d", "M542.7 187.6C542.7 188.6 541.7 190.1 541.5 190.5C541.2 191 541.4 193.3 541.1 193C540.8 192.7 540.7 191.6 540.3 191.2C539.9 190.9 535.3 189.7 534.5 189.5C536.8 190 540.2 191.1 540.7 190.8C541 190.7 541.5 189.8 542.1 188.7C542.3 188.5 542.5 188.1 542.7 187.6Z", "fill", "white"], ["id", "Vector_76", "opacity", "0.25", "d", "M561.7 166.2C561.2 167.1 560.4 168 559.7 168.6C559.1 169 558.6 169.3 558.2 169.3C556.9 169.1 555.2 166.9 555.1 166.5C555.1 166.1 556.5 165.9 556.4 164.7C556.2 163.5 555.4 163.3 554.9 163.5C554.3 163.7 553.6 165 553.6 166.2C553.2 166.1 552.5 164.7 551.1 163.8C550.7 163.6 550.3 163.4 549.8 163.3C550.5 163.2 551.4 163.2 551.9 163.4C553.1 163.9 553.2 164.4 553.2 164.4C553.2 164.4 553.4 162.6 555.4 162.2C557.1 161.9 558.4 166.5 561.7 166.2Z", "fill", "black"], ["id", "Vector_77", "d", "M555.9 251.1H542.8C542.8 251.1 542.7 250.7 542.7 250.2C542.7 249.5 542.9 248.6 544 248.2C544.4 248 544.8 247.9 545.2 247.7C546.8 246.9 548.6 245.9 548.9 245.3C548.9 245.3 549 245.3 549.2 245.4C549.5 245.5 550.1 245.8 550.8 246C551.1 246.1 551.4 246.1 551.7 246.1C552.4 246.1 553.9 245.7 554.8 245.6C555.2 245.5 555.5 245.5 555.6 245.7C555.8 246 556 248.7 556.1 250.2C555.8 250.7 555.9 251.1 555.9 251.1Z", "fill", "#1F3247"], ["id", "Vector_78", "d", "M554.9 243.6C554.8 244.2 554.7 244.9 554.5 245.5C553.8 245.6 552.9 245.8 552.2 245.9C551.9 245.9 551.7 246 551.5 246C550.7 246 549.6 245.5 549.1 245.3C549.1 244.6 549.2 243.7 549.2 243L551.5 243.2L554.9 243.6Z", "fill", "url(#paint15_linear)"], ["id", "Vector_79", "d", "M571.6 251.1H563.7C563.7 251.1 563.6 250.7 563.6 250.2C563.6 249.8 563.7 249.4 563.9 248.9C564.5 247.6 564.2 245.6 564.4 245.2C564.4 245.2 564.5 245.2 564.8 245.2C565.9 245.1 569 244.8 569.9 244.8C570 244.8 570 244.8 570.1 244.8C570.6 245 571.2 248.4 571.5 250.2C571.6 250.6 571.6 250.9 571.6 251.1Z", "fill", "#1F3247"], ["id", "Vector_80", "opacity", "0.25", "d", "M555.8 250.1C555.8 250.7 555.9 251 555.9 251H542.8C542.8 251 542.7 250.6 542.7 250.1H555.8Z", "fill", "black"], ["id", "Vector_81", "opacity", "0.25", "d", "M571.6 251.1H563.7C563.7 251.1 563.6 250.7 563.6 250.2H571.5C571.6 250.6 571.6 250.9 571.6 251.1Z", "fill", "black"], ["id", "Vector_82", "d", "M550.6 245.9C549.4 246.7 547.1 248.1 546.3 248.1C545.7 248.1 545.3 247.8 545 247.6C546.6 246.8 548.4 245.8 548.7 245.2C548.7 245.2 548.8 245.2 549 245.3C549.4 245.5 550 245.7 550.6 245.9Z", "fill", "#122230"], ["id", "Vector_83", "opacity", "0.25", "d", "M554.9 243.6C554.8 244.2 554.7 244.9 554.5 245.5C553.8 245.6 552.9 245.8 552.2 245.9L551.4 243.2L554.9 243.6Z", "fill", "black"], ["id", "Vector_84", "opacity", "0.25", "d", "M569.9 241.4V244.7C569.3 244.6 567.9 244.7 566.7 244.9L565.8 242.1L569.9 241.4Z", "fill", "black"], ["id", "Group_13"], ["id", "Group_14"], ["id", "Vector_85", "d", "M98.3 163.3C98.3 163.3 98.2 164.3 98.1 165.5C97.9 167.1 97.5 169.2 96.8 170.2C96.8 170.2 96.8 170.3 96.7 170.3C95.6 171.7 93.6 171.4 92.6 169.6C93.2 168.8 93.5 167.9 93.1 167.5C92.3 166.7 92.5 164.4 93.7 164.7C94.9 165 95.1 168.2 95.5 168.1C95.8 168.2 97.6 165.3 98.3 163.3Z", "fill", "url(#paint16_linear)"], ["id", "Vector_86", "d", "M98.7 161.9C98.7 162.2 98.6 162.7 98.4 163.3C98.3 163.6 98.1 164 98 164.3C97.2 166.1 95.9 168.1 95.6 168.2C95.2 168.3 95 165 93.8 164.8C92.6 164.5 92.4 166.8 93.2 167.6C93.6 168 93.3 168.9 92.7 169.7C92 170.5 91 171.1 89.9 170.4C87.9 169.2 87.5 161.4 87.5 160.8C87.5 160.8 87.5 160.3 87.6 159.6C87.8 158.6 88.5 157.4 90.2 156.6C93.2 155.3 98.7 155.6 98.7 161.9Z", "fill", "#2F1829"], ["id", "Vector_87", "d", "M114.4 194.3C114.4 194.4 114.4 194.5 114.3 194.5C114.2 194.9 114.1 195.1 114 195.1C113.9 195.1 113.3 195.1 112.4 195C111.2 194.8 109.4 194.6 107.8 194.3C105.8 193.9 104 193.5 103.4 193.2C102.9 192.9 102.1 191.9 101.3 190.7C101.1 190.4 100.9 190.1 100.7 189.7C99.7 188.1 98.9 186.5 98.7 186.1C98.7 186 98.6 186 98.6 186C98.6 186 98.6 186 98.6 186.1C98.6 186.5 98.4 188.1 97.9 189.7C97.8 190 97.7 190.4 97.5 190.7C97.4 191 97.2 191.3 97 191.5C96.5 192.3 96.6 193.3 96.9 194.3C96.9 194.4 97 194.5 97 194.7C97.1 194.9 97.2 195.1 97.3 195.3C97.5 195.7 97.6 196 97.8 196.3C98.3 197.3 98.7 198.2 98.6 198.7C98.6 198.8 98.5 198.8 98.4 198.9C98.3 199 98.3 199 98.2 199.1C97.9 199.3 97.3 199.6 96.6 199.9C92.7 201.5 83.9 203.4 80.1 199.9C80 199.8 80 199.8 79.9 199.7C79.7 199.4 79.6 199.2 79.6 198.9C79.6 198.5 79.8 198.2 80.1 197.7C80.5 197 81.2 196.3 81.7 195.2C81.9 194.9 82 194.6 82.1 194.2C82.3 193.7 82.5 193.1 82.5 192.4C82.6 191.8 82.6 191.1 82.7 190.5C82.7 190.2 82.8 189.8 82.8 189.5C82.9 188.2 82.9 187 82.9 185.9C82.9 185.6 82.9 185.2 82.9 184.9C82.9 183.6 82.8 182.4 82.8 181.3C82.8 181 82.8 180.6 82.8 180.3C82.8 179 82.8 177.8 82.9 176.7C82.9 176.4 83 176 83 175.7C83.3 174.2 83.9 173 85 172.1L85.1 172C85.5 171.7 85.9 171.4 86.2 171.1C86.6 170.8 87 170.6 87.3 170.3C89.7 168.9 90.9 169.1 90.9 169.1C90.9 169.1 91.6 169.1 92.7 169.3C93.8 169.5 95.1 169.8 96.5 170.3C96.7 170.4 96.8 170.4 97 170.5C97.4 170.7 97.7 170.8 98.1 171C98.3 171.1 98.6 171.3 98.8 171.4C99.1 171.6 99.4 171.8 99.6 172C100.3 172.5 100.8 173.1 101.3 173.8C101.6 174.3 102 175 102.3 175.6C102.5 175.9 102.6 176.2 102.8 176.6C103.3 177.8 103.9 179 104.4 180.2C104.5 180.5 104.7 180.9 104.8 181.2C105.3 182.5 105.8 183.8 106.1 184.8C106.2 185.1 106.3 185.5 106.4 185.8C106.8 186.9 107 187.6 107.1 187.9C107.2 188.3 108.1 188.7 109.2 189.1C109.6 189.2 109.9 189.3 110.3 189.4C111.1 189.6 111.8 189.8 112.5 190C113 190.1 113.5 190.3 113.9 190.4C114.3 190.5 114.5 190.6 114.6 190.7C114.6 190.7 114.6 190.8 114.7 190.9C114.7 191.8 114.6 193.3 114.4 194.3Z", "fill", "#F5B539"], ["id", "Group_15", "opacity", "0.25"], ["id", "Group_16", "opacity", "0.25"], ["id", "Vector_88", "opacity", "0.25", "d", "M98.1 171.4C98.4 171.6 98.7 171.7 99 171.9H85.7C85.9 171.7 86.2 171.5 86.4 171.4H98.1ZM98.1 171.2H86.2C85.8 171.5 85.5 171.7 85.1 172.1L85 172.2H99.7C99.2 171.8 98.7 171.5 98.1 171.2Z", "fill", "white"], ["id", "Group_17", "opacity", "0.25"], ["id", "Vector_89", "opacity", "0.25", "d", "M102.1 176.1C102.2 176.3 102.3 176.4 102.4 176.6H83.1C83.1 176.4 83.2 176.2 83.2 176.1H102.1ZM102.3 175.8H83C82.9 176.1 82.9 176.4 82.9 176.8H102.8C102.6 176.5 102.4 176.1 102.3 175.8Z", "fill", "white"], ["id", "Group_18", "opacity", "0.25"], ["id", "Vector_90", "opacity", "0.25", "d", "M104.2 180.7C104.3 180.9 104.3 181 104.4 181.2H83.1C83.1 181 83.1 180.9 83.1 180.7H104.2ZM104.3 180.5H82.8C82.8 180.8 82.8 181.1 82.8 181.5H104.7C104.6 181.1 104.4 180.8 104.3 180.5Z", "fill", "white"], ["id", "Group_19", "opacity", "0.25"], ["id", "Vector_91", "opacity", "0.25", "d", "M105.9 185.3L106 185.7L106.1 185.9H83.3C83.3 185.7 83.3 185.6 83.3 185.4H105.9V185.3ZM106 185.1H83C83 185.4 83 185.7 83 186.1H106.4C106.3 185.8 106.1 185.4 106 185.1Z", "fill", "white"], ["id", "Group_20", "opacity", "0.25"], ["id", "Vector_92", "opacity", "0.25", "d", "M97.6 189.9C97.5 190.1 97.5 190.3 97.4 190.4H83.1C83.1 190.2 83.1 190.1 83.1 189.9H97.6ZM97.9 189.7H82.9C82.9 190 82.9 190.3 82.8 190.7H97.5C97.7 190.4 97.8 190 97.9 189.7Z", "fill", "white"], ["id", "Group_21", "opacity", "0.25"], ["id", "Vector_93", "opacity", "0.25", "d", "M110.2 189.9C110.8 190.1 111.4 190.2 111.9 190.4L112.1 190.5H101.5C101.4 190.3 101.3 190.2 101.2 190H110.2V189.9ZM110.2 189.7H100.7C100.9 190 101.1 190.4 101.3 190.7H113.7C113.3 190.6 112.9 190.4 112.3 190.3C111.8 190.1 111 189.9 110.2 189.7Z", "fill", "white"], ["id", "Group_22", "opacity", "0.25"], ["id", "Vector_94", "opacity", "0.25", "d", "M96.9 194.6C96.9 194.6 96.9 194.7 97 194.7V194.8C97 194.9 97.1 195 97.1 195.1H82.2C82.3 194.9 82.4 194.8 82.4 194.6H96.9V194.6ZM97 194.3H82.2C82.1 194.7 81.9 195 81.8 195.3H97.4C97.3 195.1 97.2 194.9 97.1 194.7C97.1 194.6 97.1 194.5 97 194.3Z", "fill", "white"], ["id", "Group_23", "opacity", "0.25"], ["id", "Vector_95", "opacity", "0.25", "d", "M114.1 194.6C114 194.9 113.9 195 113.9 195C113.9 195 113.9 195 113.8 195C113.6 195 113.1 195 112.4 194.9C111.8 194.8 111.2 194.7 110.5 194.6H114.1V194.6ZM114.4 194.3H107.8C109.4 194.6 111.2 194.9 112.4 195C113.1 195.1 113.6 195.1 113.8 195.1C113.9 195.1 113.9 195.1 114 195.1C114.1 195.1 114.2 194.8 114.3 194.5C114.4 194.5 114.4 194.4 114.4 194.3Z", "fill", "white"], ["id", "Group_24", "opacity", "0.25"], ["id", "Vector_96", "opacity", "0.25", "d", "M97.8 199.2C97.5 199.4 97.1 199.5 96.7 199.7H80.4L80.3 199.6L80.1 199.8L80.2 199.6C80.1 199.5 80 199.4 80 199.2H97.8ZM98.5 199H79.7C79.7 199.3 79.8 199.5 80 199.8C80.1 199.9 80.1 199.9 80.2 200H96.7C97.4 199.7 97.9 199.4 98.3 199.2C98.4 199.1 98.4 199 98.5 199Z", "fill", "white"], ["id", "Vector_97", "d", "M99.9 242.3C99.8 242.5 99.8 242.7 99.7 242.8C98.6 244.7 95.6 244.9 94.5 244.5C94.4 244.5 94.2 244.4 94.2 244.3C93.5 243.7 93 238.9 89.4 211.7C89.4 211.8 89.4 211.8 89.4 211.9C89.3 215.8 88.5 222.6 87.7 228.9C86.8 235.9 85.8 242.2 85.6 243.2C85.6 243.5 85.4 243.8 85.2 244.1C84.2 245.2 81.7 245.5 80.2 243.7C80.1 243.6 80 243.4 79.9 243.2C80.5 238.2 80.8 222.8 79.8 213.6C79.4 210.2 79.4 207.2 79.5 204.8C79.6 202.3 79.9 200.5 80.1 199.5C83.9 203.3 93.1 201.3 97 199.6C97.6 199.3 98 199.1 98.3 198.9C99.3 203.5 98.9 216.4 99.9 242.3Z", "fill", "#2F1829"], ["id", "Vector_98", "opacity", "0.25", "d", "M97.1 170.7C90.7 170.9 88.9 180.8 88.9 180.8L87.4 170.4C89.8 169 91 169.2 91 169.2C91 169.2 94.1 169.4 97.1 170.7Z", "fill", "black"], ["id", "Vector_99", "d", "M107.2 251C107.2 251 96.3 251 94.5 251C94.4 250.6 94.4 250.1 94.4 249.5C94.4 249.3 94.4 249.1 94.4 248.8C94.4 247.3 94.4 245.5 94.5 244.6C94.8 244.7 95.2 244.8 95.7 244.7C96.7 244.7 97.9 244.4 98.8 243.8C99.1 243.6 99.4 243.2 99.6 242.9C100.4 244.6 102 245.7 103.5 246.5C104.8 247.2 106.1 247.7 106.6 248.1C107.1 248.5 107.3 249 107.3 249.5C107.5 250.2 107.2 251 107.2 251Z", "fill", "#1F3247"], ["id", "Vector_100", "d", "M85.3 249.5C85.3 250.5 85.2 251 85.2 251H77.9C78 250.5 78.1 250 78.2 249.5C78.8 247 79.7 244.8 80.1 243.9C80.6 244.5 81.2 244.8 81.8 245C82.5 245.2 83.2 245.2 83.9 245C84.4 244.8 84.9 244.6 85.2 244.2C85.4 246.3 85.3 248.2 85.3 249.5Z", "fill", "#1F3247"], ["id", "Vector_101", "opacity", "0.25", "d", "M98.7 198.7C98.7 198.8 98.5 199 98.3 199.1C96 200.7 84.4 204.1 80.1 199.7C79.5 199.1 79.8 198.5 80.3 197.8C80.9 198.3 82 198.8 84 199.2C87.9 199.8 94.7 198.8 98 196.4C98.4 197.4 98.8 198.2 98.7 198.7Z", "fill", "black"], ["id", "girllight"], ["id", "Vector_102", "d", "M121.8 188C121.8 188 119.4 179.3 124.5 173.8C129.6 168.3 143.5 160.1 143.8 149.9C144.1 139.7 151.7 126.9 161.8 124.5C171.9 122.2 179.6 98.8 188.7 94.2C197.8 89.5 210.7 89.1 214.4 83.2C218.1 77.3 261.7 162 259.6 170.7C257.4 179.4 218.6 168.2 208.2 170.8C197.8 173.4 192.9 179.6 181.3 181.2C169.7 182.8 152.5 180 146.5 183.4C140.5 186.8 129.4 191.8 123.9 189.8C121.6 188.8 121.8 188 121.8 188Z", "fill", "url(#paint17_linear)"], ["id", "Vector_103", "d", "M123.9 189.6L121.4 187.1C121 186.7 120.4 186.9 120.3 187.4L119.7 189.6L114.4 194.9C114.2 195.1 114.2 195.5 114.4 195.7L115.2 196.5C115.4 196.7 115.8 196.7 116 196.5L121.3 191.2L123.5 190.6C124.1 190.6 124.3 190 123.9 189.6Z", "fill", "#2F1829"], ["id", "Vector_104", "d", "M121.2 192.6C121.1 193.4 118.2 195.9 117.3 195.7C117.2 195.7 117 195.6 116.9 195.5C116.3 195.2 115.6 194.6 114.4 194.5C114.6 193.5 114.7 191.7 114.6 191.1C114.8 191 115 190.9 115.2 190.8C116.2 190.4 117.5 189.8 118 189.9C118.9 190.2 121.4 191.8 121.2 192.6Z", "fill", "url(#paint18_linear)"], ["id", "Vector_105", "opacity", "0.25", "d", "M114.4 194.6C114.3 195 114.2 195.2 114.1 195.2C114 195.2 113.4 195.2 112.5 195.1C113.1 192.8 112.7 191.1 112.5 190.3C113.6 190.6 114.4 190.8 114.5 191C114.5 191 114.5 191.1 114.6 191.2C114.7 191.8 114.6 193.6 114.4 194.6Z", "fill", "black"], ["id", "Vector_106", "opacity", "0.25", "d", "M97.2 194.7C95.7 193.3 96.4 192.1 97.2 189.3C98 186.4 96.4 185.2 96.1 182C95.8 178.8 96.2 177 98.1 174.9C95.7 181.1 98.7 186 98.7 186C98.7 186 98.6 189.4 97.1 191.6C96.5 192.4 96.7 193.6 97.2 194.7Z", "fill", "black"], ["id", "Vector_107", "opacity", "0.25", "d", "M97.9 164.4C97.1 166.2 95.8 168.2 95.5 168.3C95.1 168.4 94.9 165.1 93.7 164.9C92.5 164.6 92.3 166.9 93.1 167.7C93.5 168.1 93.2 169 92.6 169.8C91.9 170.6 90.9 171.2 89.8 170.5C87.8 169.3 87.4 161.5 87.4 160.9C87.4 160.9 87.4 160.4 87.5 159.7C88.5 159.6 90.8 159.8 91.3 161.8C91.8 163.8 91.8 164.7 91.8 165.1C91.9 164.5 92.4 162.8 94.3 163.2C95.4 163.3 96.7 164.1 97.9 164.4Z", "fill", "black"], ["id", "hairgirl"], ["id", "Vector_108", "d", "M89.6 161.6C89.6 161.6 88.8 159.9 86.1 160.4C83.5 160.9 82.3 164.3 83.5 169.8C83.5 164.9 84.2 163.8 84.2 163.8C84.2 163.8 83.1 166.8 84.5 173.5C85.9 180.2 86.8 186.7 83.2 189.5C90.3 185.5 90.8 180.7 90.3 174.9C90 169.1 91.3 164 89.6 161.6Z", "fill", "#2F1829"], ["id", "Vector_109", "opacity", "0.25", "d", "M93.9 167.5C93.8 167.9 95.2 169.8 96.7 170.2C96.7 170.2 96.7 170.3 96.6 170.3C96.6 170.4 96.5 170.4 96.5 170.5C95.1 170 93.7 169.6 92.7 169.5C93.2 168.8 93.4 168 93 167.6C92.2 166.8 92.4 164.5 93.6 164.8C94.8 165.1 95 168.3 95.4 168.2C95.7 168.1 97.5 165.3 98.2 163.3C98.2 163.3 98.1 164.3 98 165.5C97.6 166.2 96.7 167.7 96 168.3C95.1 169.1 94.7 168.1 94.5 167.5C94.4 167 94 167 93.9 167.5Z", "fill", "black"], ["id", "Vector_110", "opacity", "0.25", "d", "M81.5 204.9C81.5 204.9 81.3 208.6 81.8 209.6C82.3 210.6 83.7 211.3 83.7 211.3C83.7 211.3 85.5 210.5 86 209.4C86.5 207.2 86.4 204.5 86.4 204.5C86.4 204.5 82.8 203.7 81.5 204.9Z", "stroke", "white", "stroke-width", "0.4635", "stroke-miterlimit", "10"], ["id", "Vector_111", "opacity", "0.25", "d", "M97.2 201.9C97.2 201.9 97.4 205 94.7 206.5", "stroke", "white", "stroke-width", "0.4635", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "Vector_112", "opacity", "0.25", "d", "M96.5 204.6L98.7 241.6", "stroke", "white", "stroke-width", "0.4635", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "Vector_113", "opacity", "0.25", "d", "M89.3 212C89.2 215.9 88.4 222.7 87.6 229.1C87.5 221.7 86.4 212.6 86.8 211.1C87.9 212.1 89.3 212 89.3 212Z", "fill", "black"], ["id", "Vector_114", "opacity", "0.25", "d", "M87.4 213L84.3 243.2", "stroke", "white", "stroke-width", "0.4635", "stroke-miterlimit", "10", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "Vector_115", "opacity", "0.25", "d", "M96.9 199.9C95.1 201.7 89.5 206.1 79.4 205.1C79.5 202.6 79.8 200.8 80 199.8C83.8 203.6 93.1 201.5 96.9 199.9Z", "fill", "black"], ["id", "Vector_116", "opacity", "0.25", "d", "M78.3 249.5H85.3C85.3 250.5 85.2 251 85.2 251H77.9C78 250.5 78.1 250 78.3 249.5Z", "fill", "black"], ["id", "Vector_117", "opacity", "0.25", "d", "M107.2 251C107.2 251 96.3 251 94.5 251C94.4 250.6 94.4 250.1 94.4 249.5H107.4C107.5 250.2 107.2 251 107.2 251Z", "fill", "black"], ["id", "Vector_118", "opacity", "0.25", "d", "M103.6 246.4C101.3 247.5 99.7 245.2 98.9 243.7C99.2 243.5 99.5 243.1 99.7 242.8C100.5 244.5 102.1 245.6 103.6 246.4Z", "fill", "white"], ["id", "Vector_119", "opacity", "0.25", "d", "M83.9 245C83.7 248.4 82.5 248.5 81.9 248.1C81.3 247.8 81.7 245.6 81.9 244.9C82.5 245.2 83.2 245.2 83.9 245Z", "fill", "black"], ["id", "Vector_120", "opacity", "0.25", "d", "M94.4 248.8C94.4 247.3 94.4 245.5 94.5 244.6C94.8 244.7 95.2 244.8 95.7 244.7C95.9 245.8 96 248.3 94.4 248.8Z", "fill", "black"], ["id", "Vector_121", "opacity", "0.25", "d", "M114.4 194.6C114.6 193.6 114.7 191.8 114.6 191.2C114.8 191.1 115 191 115.2 190.9C115.8 191.8 116.9 193.5 117 195.5C116.3 195.2 115.7 194.6 114.4 194.6Z", "fill", "black"], ["id", "Vector_122", "opacity", "0.25", "d", "M109.1 189.4C107.1 189.6 105.7 191.7 105.6 191.3C105.4 190.8 106.5 189.8 106.4 189.1C106.3 188.4 103.2 180.5 101.5 176.6C100.5 174.2 99.5 172.6 98.9 171.6C99.2 171.8 99.5 172 99.7 172.2C100.4 172.7 100.9 173.3 101.4 174C101.7 174.5 102.1 175.2 102.4 175.8C102.6 176.1 102.7 176.4 102.9 176.8C103.4 178 104 179.2 104.5 180.4C104.6 180.7 104.8 181.1 104.9 181.4C105.4 182.7 105.9 184 106.2 185C106.3 185.3 106.4 185.7 106.5 186C106.9 187.1 107.1 187.8 107.2 188.1C107.2 188.6 108 189 109.1 189.4Z", "fill", "white"], ["id", "Vector_123", "d", "M592.4 253C591.7 252.5 570.9 196.3 594.9 164.3C591.6 186.9 593.4 205.4 593.4 205.4L590.3 208.5L593.8 209.5C593.8 209.5 596.1 240.9 597.3 244.5C594.7 221 601.1 207.3 601.1 207.3C601.1 207.3 600 224 602.1 230.1L600.4 232.3L602.1 232C602.1 232 600.9 242.1 602.1 245.1C602.1 245.1 615.5 205.1 609.2 187.5C617.5 200.3 615.1 221.8 615.1 221.8L613 222.6L614.3 223.6C614.3 223.6 610.8 246.5 602.9 252.9", "fill", "#2F1829"], ["id", "Group_25"], ["id", "Vector_124", "d", "M452.1 246.4C452.1 246.4 433.5 244.7 426.1 249.9C429.6 244.9 443.7 242.6 443.7 242.6L444.7 243.4V242.6C444.7 242.6 447.1 241.4 450.6 240.9C433.7 237.6 425.6 240.8 425.6 240.8C425.6 240.8 428.7 238.2 433.9 236.7C439.1 235.2 442.3 235.8 442.3 235.8L444.4 237.1V235.7L462.4 241", "fill", "black"], ["id", "Vector_125", "d", "M523.5 247.4C523.5 247.4 521.5 234.8 531.8 226.1C531.7 236.3 528.9 245 523.5 247.4Z", "stroke", "#1F3247", "stroke-width", "0.9271", "stroke-miterlimit", "10"], ["id", "Group_26"], ["id", "Vector_126", "d", "M454.5 239.1L452.5 244C451.1 239.1 448 238.1 446.4 238C445.8 237.9 445.5 238 445.5 238L446.2 235.6L443.9 236C443.9 236 441.3 229.7 429.6 222C440.3 221.4 446.9 227 450.6 232C453.4 235.7 454.5 239.1 454.5 239.1Z", "fill", "#FFCA51"], ["id", "Group_27", "opacity", "0.25"], ["id", "Vector_127", "opacity", "0.25", "d", "M429.6 222C432.1 222.6 434.6 223.5 437 224.6C439.4 225.7 441.7 226.9 443.9 228.3C446.1 229.8 448.1 231.5 449.9 233.5C451.6 235.5 453 237.8 454 240.3C454 240.4 454 240.6 453.9 240.6C453.8 240.6 453.6 240.6 453.6 240.5C452.7 238.1 451.4 235.8 449.7 233.8C448 231.8 446 230.1 443.9 228.6C441.7 227.1 439.4 225.9 437 224.8C434.6 223.6 432.1 222.6 429.6 222Z", "fill", "white"], ["id", "Vector_128", "opacity", "0.25", "d", "M454.5 239.1L452.5 244C451.1 239.1 448 238.1 446.4 238C449.2 236.3 450.2 233.6 450.6 231.9C453.4 235.7 454.5 239.1 454.5 239.1Z", "fill", "black"], ["id", "Group_28"], ["id", "Vector_129", "d", "M531.8 215.8C512.6 231.6 507.7 239.4 507.7 239.4L504.3 237.9C504.3 237.9 504.3 238 504.3 238.2C504.3 239.1 504.4 241.5 504.3 242.4C504.2 243.1 497.4 246.8 493.5 248.8C491.9 249.6 490.9 250.2 490.9 250.2L487.7 247L488 246.4L489.7 243.2C489.7 243.2 494.1 236.9 501.6 230.3C508.9 223.7 519.4 216.9 531.8 215.8Z", "fill", "#FFADAE"], ["id", "Group_29", "opacity", "0.25"], ["id", "Vector_130", "opacity", "0.25", "d", "M489.6 248.9C492.2 245.1 495.1 241.5 498.1 238.1C501.1 234.7 504.4 231.4 507.8 228.4C511.3 225.4 515 222.7 519 220.4C523 218.2 527.3 216.5 531.8 215.7C527.3 216.5 523 218.2 519 220.5C515 222.8 511.4 225.5 507.9 228.5C504.5 231.5 501.3 234.8 498.3 238.2C495.3 241.6 492.5 245.2 489.9 249C489.8 249.1 489.7 249.1 489.6 249.1C489.5 249.2 489.5 249 489.6 248.9Z", "fill", "white"], ["id", "Vector_131", "opacity", "0.25", "d", "M504.3 242.3C504.2 243 497.4 246.7 493.5 248.7C491.4 247.9 489.4 247 488 246.2L489.7 243C489.7 243 494.1 236.7 501.6 230.1C502 232.4 502.9 235.7 504.4 238.1C504.3 239 504.4 241.5 504.3 242.3Z", "fill", "black"], ["id", "Group_30"], ["id", "Vector_132", "d", "M519.7 205.4C506 216.8 499.7 226.4 497.1 231.2C495.9 233.4 495.5 234.7 495.5 234.7L492.5 233.6L493.7 236.3L489.3 245.1L487.4 249V233.6C488 232.5 488.8 231 489.8 229.3C491.7 226.1 494.4 222.2 497.9 218.4C499.5 216.7 501.2 215 503 213.4C507.8 209.6 513.3 206.5 519.7 205.4Z", "fill", "#F3475C"], ["id", "Group_31", "opacity", "0.25"], ["id", "Vector_133", "opacity", "0.25", "d", "M487.3 239.8C488.7 236 490.6 232.4 492.7 228.9C494.8 225.4 497.3 222.2 500 219.2C502.7 216.2 505.8 213.5 509.1 211.1L511.6 209.4L514.3 207.9C514.7 207.7 515.2 207.4 515.6 207.2L517 206.6L519.8 205.4L517 206.6L515.6 207.2C515.2 207.4 514.7 207.7 514.3 207.9L511.7 209.4L509.2 211.1C505.9 213.5 502.9 216.2 500.2 219.2C497.5 222.2 495.1 225.5 493.1 229C491 232.5 489.2 236.1 487.9 239.9C487.9 240 487.7 240.1 487.6 240C487.3 240.1 487.3 239.9 487.3 239.8Z", "fill", "white"], ["id", "Vector_134", "opacity", "0.25", "d", "M495.6 234.8L492.6 233.7L493.8 236.4L489.4 245.2L487.5 245.5V233.7C488.1 232.6 488.9 231.1 489.9 229.4C491.3 230.5 493.7 231.8 497.1 231.3C496 233.5 495.6 234.8 495.6 234.8Z", "fill", "black"], ["id", "Vector_135", "d", "M537.2 251.1H487.5V244.1C487.5 244.1 488.2 242.4 490.2 241.4C490.8 241.1 491.6 240.8 492.4 240.7C496.1 240.2 497.4 243.3 497.4 243.3C497.4 243.3 498.3 240.6 502 240.3C505.6 240 507.8 245.6 507.9 246C507.9 245.7 507.6 242.6 510.4 242.4C513.3 242.2 513.3 246 513.3 246C513.3 246 515.6 243.5 518.6 243.6C521.6 243.8 522.2 246.7 522.2 246.7C522.2 246.7 523.9 244.2 527.5 245.1C531.2 245.9 531.7 251.1 537.2 251.1Z", "fill", "#982245"], ["id", "Vector_136", "opacity", "0.25", "d", "M521.7 251.1H487.6V244.1C487.6 244.1 488.3 242.4 490.3 241.4C491.8 241.5 494.4 242 495.5 244C497.1 246.9 497.2 249.6 497.2 249.6C497.2 249.6 500.5 244.8 503.2 245.6C505.9 246.4 507.3 249.6 507.3 249.6C507.3 249.6 510.1 246.6 512.5 247.6C513.6 248.2 517.8 249.7 521.7 251.1Z", "fill", "black"], ["id", "Vector_137", "d", "M423.7 253C423.5 252.9 417.7 237.1 424.4 228.1C423.5 234.5 424 239.7 424 239.7L423.1 240.6L424.1 240.9C424.1 240.9 424.8 249.7 425.1 250.8C424.4 244.2 426.2 240.3 426.2 240.3C426.2 240.3 425.9 245 426.5 246.7L426 247.3L426.5 247.2C426.5 247.2 426.2 250 426.5 250.9C426.5 250.9 430.3 239.7 428.5 234.7C430.8 238.3 430.2 244.3 430.2 244.3L429.6 244.5L430 244.8C430 244.8 429 251.2 426.8 253", "fill", "#2F1829"], ["id", "Group_32"], ["id", "Vector_138", "d", "M197 247.9C197 247.9 167.7 228.2 150.6 230C161 224.9 186.5 233.9 186.5 233.9L187.5 236.2L188.2 234.9C188.2 234.9 193.3 235 199.5 237.5C174.5 216.5 158.1 214.5 158.1 214.5C158.1 214.5 165.6 213.1 175.6 215.3C185.6 217.5 190.4 221.5 190.4 221.5L192.7 225.5L193.9 223.3L218.9 248.5", "fill", "black"], ["id", "Vector_139", "d", "M174.2 250.2C174.2 250.2 161.8 247.6 154.1 238.3C167.3 239.7 173 244.4 174.2 250.2Z", "stroke", "#1F3247", "stroke-width", "0.9271", "stroke-miterlimit", "10"], ["id", "Group_33"], ["id", "Vector_140", "d", "M215.5 194.6C214.4 219.4 217 228.3 217 228.3L213.6 229.9C213.6 229.9 213.7 230 213.8 230.1C214.5 230.7 216.3 232.3 216.9 232.9C217.4 233.4 215.6 241 214.5 245.2C214.1 246.9 213.8 248.1 213.8 248.1L209.3 248.3L209.1 247.6L207.8 244.2C207.8 244.2 206 236.7 206.1 226.8C206.1 216.9 208.1 204.5 215.5 194.6Z", "fill", "#FFADAE"], ["id", "Group_34", "opacity", "0.25"], ["id", "Vector_141", "opacity", "0.25", "d", "M212 248.1C210.9 243.6 210.2 239.1 209.6 234.6C209.1 230 208.8 225.5 208.9 220.9C209 216.3 209.4 211.7 210.4 207.3C211.4 202.8 213 198.5 215.5 194.6C213.1 198.5 211.5 202.8 210.5 207.3C209.5 211.8 209.1 216.3 209.1 220.9C209 225.5 209.4 230 209.9 234.6C210.5 239.1 211.3 243.6 212.4 248.1C212.4 248.2 212.4 248.4 212.2 248.4C212.2 248.3 212 248.3 212 248.1Z", "fill", "white"], ["id", "Vector_142", "opacity", "0.25", "d", "M216.9 232.8C217.4 233.3 215.6 240.9 214.5 245.1C212.5 246.2 210.5 247 209 247.6L207.7 244.2C207.7 244.2 205.9 236.7 206 226.8C208 228 211 229.5 213.8 230C214.4 230.6 216.3 232.2 216.9 232.8Z", "fill", "black"], ["id", "Group_35"], ["id", "Vector_143", "d", "M233 211.6C226.9 222.3 225.1 230 224.6 233.7C224.4 235.4 224.4 236.3 224.4 236.3H222.2L223.6 237.8L222.9 244.6L222.6 247.6L218.9 237.7C219 236.8 219.2 235.7 219.4 234.3C219.9 231.8 220.7 228.6 222 225.3C222.6 223.8 223.3 222.3 224.1 220.9C226.3 217.2 229.1 213.9 233 211.6Z", "fill", "#F3475C"], ["id", "Group_36", "opacity", "0.25"], ["id", "Vector_144", "opacity", "0.25", "d", "M220.2 241.7C220.2 238.9 220.5 236.1 221.1 233.3C221.6 230.5 222.4 227.9 223.5 225.3C224.5 222.7 225.9 220.2 227.4 217.9L228.6 216.2L230 214.6C230.2 214.3 230.5 214.1 230.7 213.8L231.5 213.1L233 211.7L231.5 213.2L230.8 213.9C230.6 214.2 230.3 214.4 230.1 214.7L228.8 216.3L227.6 218C226.1 220.3 224.7 222.8 223.8 225.4C222.8 228 222.1 230.7 221.5 233.4C221 236.1 220.7 238.9 220.7 241.7C220.7 241.8 220.6 241.9 220.5 241.9C220.3 241.9 220.2 241.8 220.2 241.7Z", "fill", "white"], ["id", "Vector_145", "opacity", "0.25", "d", "M224.4 236.4H222.2L223.6 237.9L222.9 244.7L221.7 245.3L218.9 237.7C219 236.8 219.2 235.7 219.4 234.3C220.5 234.7 222.4 235 224.5 233.8C224.4 235.5 224.4 236.4 224.4 236.4Z", "fill", "black"], ["id", "Vector_146", "d", "M254 251H241.6L187.6 251.1H171.6C171.6 251.1 172.9 246.8 179.2 244.8C185.5 242.8 187.3 246.9 187.3 246.9C187.3 246.9 187 238.7 194.4 235.9C201.8 233.1 205.1 242.5 205.1 242.5C205.1 242.5 206.6 237.9 214.5 237.5C222.4 237.1 221.6 243.3 221.6 243.3C221.6 243.3 226.1 238.3 234.2 239.4C242.3 240.5 243.1 247 243.1 247C243.1 247 250.2 244.8 254 251Z", "fill", "#982245"], ["id", "Vector_147", "opacity", "0.25", "d", "M241.6 251L187.6 251.1C190.4 248.6 195 245.4 199.8 245.3C207.7 245.2 209 248.1 209 248.1C209 248.1 213.9 242.9 217.7 243.8C221.6 244.7 221.7 248.8 221.7 248.8C221.7 248.8 234.1 245.9 241.6 251Z", "fill", "black"], ["id", "Vector_148", "d", "M262.9 254.5C262.9 254.5 253.9 238.6 256.6 223.2C259.2 235.3 265.7 243.3 265.7 243.3L263.1 245.4H265.7L271.3 256.1L263.7 254.5V255.2L262.9 254.5Z", "fill", "#2F1829"], ["id", "paint0_linear", "x1", "327.54", "y1", "250.471", "x2", "330.184", "y2", "46.9149", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#E8D197"], ["offset", "1", "stop-color", "#FEF5DA"], ["id", "paint1_linear", "x1", "326.925", "y1", "147.902", "x2", "330.395", "y2", "242.079", "gradientUnits", "userSpaceOnUse"], ["offset", "1", "stop-opacity", "0"], ["id", "paint2_linear", "x1", "344.3", "y1", "64.1527", "x2", "344.961", "y2", "87.284", "gradientUnits", "userSpaceOnUse"], ["stop-color", "white"], ["offset", "1", "stop-color", "white", "stop-opacity", "0"], ["id", "paint3_linear", "x1", "130.102", "y1", "26.1247", "x2", "132.084", "y2", "77.0139", "gradientUnits", "userSpaceOnUse"], ["id", "paint4_linear", "x1", "455.752", "y1", "229.215", "x2", "433.942", "y2", "41.3544", "gradientUnits", "userSpaceOnUse"], ["id", "paint5_linear", "x1", "60.0761", "y1", "430.474", "x2", "23.3198", "y2", "113.867", "gradientUnits", "userSpaceOnUse"], ["id", "paint6_linear", "x1", "197.311", "y1", "242.736", "x2", "195.989", "y2", "148.447", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#2F1829"], ["offset", "1", "stop-color", "#3B223C"], ["id", "paint7_linear", "x1", "322.636", "y1", "240.979", "x2", "321.314", "y2", "146.691", "gradientUnits", "userSpaceOnUse"], ["id", "paint8_linear", "x1", "447.456", "y1", "239.229", "x2", "446.134", "y2", "144.941", "gradientUnits", "userSpaceOnUse"], ["id", "paint9_linear", "x1", "281.068", "y1", "73.4007", "x2", "292.303", "y2", "109.089", "gradientUnits", "userSpaceOnUse"], ["id", "paint10_linear", "x1", "567.282", "y1", "246.761", "x2", "567.144", "y2", "239.051", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#FECBA6"], ["offset", "1", "stop-color", "#D17878"], ["id", "paint11_linear", "x1", "575.336", "y1", "236.543", "x2", "417.383", "y2", "126.175", "gradientUnits", "userSpaceOnUse"], ["id", "paint12_linear", "x1", "529.726", "y1", "200.324", "x2", "554.29", "y2", "176.972", "gradientUnits", "userSpaceOnUse"], ["id", "paint13_linear", "x1", "568.688", "y1", "209.407", "x2", "569.018", "y2", "182.751", "gradientUnits", "userSpaceOnUse"], ["id", "paint14_linear", "x1", "552.343", "y1", "166.843", "x2", "558.043", "y2", "168.082", "gradientUnits", "userSpaceOnUse"], ["id", "paint15_linear", "x1", "550.457", "y1", "250.958", "x2", "552.881", "y2", "239.337", "gradientUnits", "userSpaceOnUse"], ["id", "paint16_linear", "x1", "95.6885", "y1", "163.838", "x2", "93.7609", "y2", "174.468", "gradientUnits", "userSpaceOnUse"], ["id", "paint17_linear", "x1", "75.5473", "y1", "236.543", "x2", "233.501", "y2", "126.174", "gradientUnits", "userSpaceOnUse"], ["id", "paint18_linear", "x1", "124.267", "y1", "190.961", "x2", "113.114", "y2", "194.142", "gradientUnits", "userSpaceOnUse"], [1, "gotoHome"], ["href", "/home", "role", "button", 1, "btn", "gradient-button", "gradient-button-4"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sorry Page Not Found!!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "g", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "g", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "g", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "g", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "g", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "g", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "g", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "g", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "g", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "g", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "g", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "path", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "g", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "path", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "path", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "path", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "path", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "path", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "g", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "g", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "path", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "path", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "path", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "path", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "path", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "path", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "path", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "path", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "path", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "path", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "path", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "path", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "path", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "path", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "path", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "path", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "path", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "path", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "path", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "g", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "g", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "path", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "path", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "path", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "g", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "g", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "path", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "path", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "g", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "path", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "g", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "path", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "g", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "path", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "g", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "path", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "g", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "path", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "g", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "path", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "g", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "path", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "path", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "path", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "path", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "path", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "path", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "g", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "path", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "path", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "path", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "path", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "path", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "path", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "g", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "path", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "path", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "path", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "path", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "path", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "path", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "path", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "path", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "path", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "path", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "path", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "path", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "path", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "path", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "path", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "path", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "g", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "path", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "path", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "g", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "path", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "g", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "path", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "path", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "g", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "path", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "g", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "path", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "path", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "g", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "path", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "g", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "path", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "path", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "path", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "path", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "path", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "g", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "path", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "path", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "g", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "path", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "g", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "path", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "path", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "g", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "path", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "g", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "path", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "path", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "path", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "path", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "path", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "linearGradient", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "stop", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "stop", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "linearGradient", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "stop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "stop", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "linearGradient", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "stop", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "stop", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "linearGradient", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "stop", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "stop", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "linearGradient", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "stop", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "stop", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "linearGradient", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "stop", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "stop", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "linearGradient", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "stop", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "stop", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "linearGradient", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "stop", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "stop", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "linearGradient", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "stop", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "stop", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "linearGradient", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "stop", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "stop", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "linearGradient", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "stop", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "stop", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "linearGradient", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "stop", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "stop", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "linearGradient", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "stop", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "stop", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "linearGradient", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "stop", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "stop", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "linearGradient", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "stop", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "stop", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "linearGradient", 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "stop", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "stop", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "linearGradient", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "stop", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "stop", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "linearGradient", 219);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "stop", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "stop", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "linearGradient", 220);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "stop", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "stop", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "a", 222);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "Goto Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#handboy[_ngcontent-%COMP%] {\r\n    animation: swing ease-in-out 1.3s infinite alternate;\r\n    transform-origin: 98% 98%;\r\n    transform-box: fill-box;\r\n  }\r\n  \r\n  #girllight[_ngcontent-%COMP%] {\r\n    animation: swing ease-in-out 1.3s infinite alternate;\r\n    transform-origin: 0% 97%;\r\n    transform-box: fill-box;\r\n  }\r\n  \r\n  #hairgirl[_ngcontent-%COMP%] {\r\n    animation: swinghair ease-in-out 1.3s infinite alternate;\r\n    transform-origin: 60% 0%;\r\n    transform-box: fill-box;\r\n  }\r\n  \r\n  #zero[_ngcontent-%COMP%] {\r\n    transform-origin: bottom;\r\n    transform-box: fill-box;\r\n    animation: zero ease-in-out 1.3s infinite alternate;\r\n  }\r\n  \r\n  @keyframes zero {\r\n    0% {\r\n        transform: rotate(20deg)\r\n    }\r\n    100% {\r\n        transform: rotate(-20deg);\r\n    }\r\n  }\r\n  \r\n  @keyframes swing {\r\n    0% {\r\n        transform: rotate(30deg);\r\n    }\r\n    100% {\r\n        transform: translate(-20deg);\r\n    }\r\n  }\r\n  \r\n  @keyframes swinghair {\r\n    0% {\r\n        transform: rotate(12deg);\r\n    }\r\n    100% {\r\n        transform: rotate(-15deg);\r\n    }\r\n  }\r\n  \r\n  .gradient-button[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n    \r\n    font-size: 15px;\r\n    padding: 15px;\r\n    text-align: center;\r\n    transition: 0.5s;\r\n    background-size: 200% auto;\r\n    color: #FFF;\r\n    box-shadow: 0 0 20px #eee;\r\n    border-radius: 10px;\r\n    width: 200px;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\r\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    border-radius: 25px;\r\n}\r\n  \r\n  .gradient-button[_ngcontent-%COMP%]:hover{\r\n    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\r\n    margin: 8px 10px 12px;\r\n}\r\n  \r\n  .gradient-button-4[_ngcontent-%COMP%] {background-image: linear-gradient(to right, #7474BF 0%, #348AC7 51%, #7474BF 100%)}\r\n  \r\n  .gradient-button-4[_ngcontent-%COMP%]:hover { background-position: right center; }\r\n  \r\n  \r\n  \r\n  h1[_ngcontent-%COMP%], .gotoHome[_ngcontent-%COMP%]\r\n{\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9EQUFvRDtJQUNwRCx5QkFBeUI7SUFDekIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0Usb0RBQW9EO0lBQ3BELHdCQUF3QjtJQUN4Qix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSx3REFBd0Q7SUFDeEQsd0JBQXdCO0lBQ3hCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsbURBQW1EO0VBQ3JEOztFQUVBO0lBQ0U7UUFDSTtJQUNKO0lBQ0E7UUFDSSx5QkFBeUI7SUFDN0I7RUFDRjs7RUFFQTtJQUNFO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSw0QkFBNEI7SUFDaEM7RUFDRjs7RUFFQTtJQUNFO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSx5QkFBeUI7SUFDN0I7RUFDRjs7RUFFQTtJQUNFLFlBQVk7O0lBRVosZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0VBQWtFO0lBQ2xFLCtDQUErQztJQUMvQyxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7RUFDQTtJQUNJLG9FQUFvRTtJQUNwRSxxQkFBcUI7QUFDekI7O0VBRUEsb0JBQW9CLGtGQUFrRjs7RUFDdEcsMkJBQTJCLGlDQUFpQyxFQUFFOztFQUU5RDtpRUFDaUU7O0VBR2pFOzs7RUFHRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hhbmRib3kge1xyXG4gICAgYW5pbWF0aW9uOiBzd2luZyBlYXNlLWluLW91dCAxLjNzIGluZmluaXRlIGFsdGVybmF0ZTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDk4JSA5OCU7XHJcbiAgICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcclxuICB9XHJcbiAgXHJcbiAgI2dpcmxsaWdodCB7XHJcbiAgICBhbmltYXRpb246IHN3aW5nIGVhc2UtaW4tb3V0IDEuM3MgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgOTclO1xyXG4gICAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gICNoYWlyZ2lybCB7XHJcbiAgICBhbmltYXRpb246IHN3aW5naGFpciBlYXNlLWluLW91dCAxLjNzIGluZmluaXRlIGFsdGVybmF0ZTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDYwJSAwJTtcclxuICAgIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xyXG4gIH1cclxuICBcclxuICAjemVybyB7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XHJcbiAgICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcclxuICAgIGFuaW1hdGlvbjogemVybyBlYXNlLWluLW91dCAxLjNzIGluZmluaXRlIGFsdGVybmF0ZTtcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyB6ZXJvIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZylcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgc3dpbmcge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgc3dpbmdoYWlyIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMmRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmdyYWRpZW50LWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4ICNlZWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjQpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcbi5ncmFkaWVudC1idXR0b246aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsMCwwLDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcclxuICAgIG1hcmdpbjogOHB4IDEwcHggMTJweDtcclxufVxyXG5cclxuLmdyYWRpZW50LWJ1dHRvbi00IHtiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM3NDc0QkYgMCUsICMzNDhBQzcgNTElLCAjNzQ3NEJGIDEwMCUpfVxyXG4uZ3JhZGllbnQtYnV0dG9uLTQ6aG92ZXIgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7IH1cclxuXHJcbi8qIC5ncmFkaWVudC1idXR0b24tNCB7YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDBkMmZmIDAlLCAjM2E3YmQ1IDUxJSwgIzAwZDJmZiAxMDAlKX1cclxuLmdyYWRpZW50LWJ1dHRvbi00OmhvdmVyIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyOyB9ICovXHJcblxyXG5cclxuaDEsXHJcbi5nb3RvSG9tZVxyXG57XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function ProfileComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please provide an image below ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "3MB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_56_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "PhoneNumber is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_56_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "minimum 6 number is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_56_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "maximum 10 numbers is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_div_56_div_1_Template, 2, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_div_56_div_2_Template, 2, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileComponent_div_56_div_3_Template, 2, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.PhoneNumber.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.PhoneNumber.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.PhoneNumber.errors.maxlength);
} }
function ProfileComponent_div_64_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "About is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_div_64_div_1_Template, 2, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.About.errors.required);
} }
function ProfileComponent_div_71_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Twitter is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_div_71_div_1_Template, 2, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.f.Twitter.errors.required);
} }
function ProfileComponent_div_78_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Facebook is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_div_78_div_1_Template, 2, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f.Facebook.errors.required);
} }
function ProfileComponent_div_85_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Instagram is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_div_85_div_1_Template, 2, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f.Instagram.errors.required);
} }
function ProfileComponent_div_110_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "OldPassword is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_110_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "OldPassword must be at least 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_div_110_div_1_Template, 2, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_div_110_div_2_Template, 2, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f1.OldPassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f1.OldPassword.errors.minlength);
} }
function ProfileComponent_div_121_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NewPassword is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_121_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NewPassword must be at least 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_div_121_div_1_Template, 2, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_div_121_div_2_Template, 2, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.f1.NewPassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.f1.NewPassword.errors.minlength);
} }
function ProfileComponent_div_134_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password Mismatch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
const _c1 = function (a0, a1) { return { "fa-eye-slash": a0, "fa-eye": a1 }; };
class ProfileComponent {
    constructor(service, sanitizer, router, authService, titleService, metaTagService) {
        this.service = service;
        this.sanitizer = sanitizer;
        this.router = router;
        this.authService = authService;
        this.titleService = titleService;
        this.metaTagService = metaTagService;
        this.maxLimitError = false;
        this.pro = {};
        this.imagesrc = "../../assets/shared/images/noprofilepic.jpg";
        this.submitted = false;
        this.submitted1 = false;
        this.currentUser = this.authService.isAuthenticated().userName;
    }
    ngOnInit() {
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            FirstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            UserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            About: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Twitter: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Facebook: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Instagram: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            PhoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            ProfilePicture: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.passwordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            OldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            NewPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]),
            ConfirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])
        });
        this.refreshProfile();
    }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.profileForm.invalid) {
            return;
        }
        // console.log(this.profileForm);
        this.updateUserv();
        this.refreshProfile();
        window.location.reload();
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.profileForm.value, null, 4));
    }
    get f() { return this.profileForm.controls; }
    get f1() { return this.passwordForm.controls; }
    onSubmit1() {
        this.submitted1 = true;
        // stop here if form is invalid
        if (this.passwordForm.invalid) {
            return;
        }
        // console.log(this.passwordForm.value);
        this.updatePassword();
        this.refreshProfile();
        window.location.reload();
        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.passwordForm.value, null, 4));
    }
    refreshProfile() {
        this.service.getUserInfo(this.currentUser).subscribe(data => {
            this.pro = data;
            if (this.pro.ProfilePicture) {
                this.getUserImage();
            }
            ;
            this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                FirstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.FirstName),
                UserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.UserName),
                Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.Email),
                About: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.About, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                Twitter: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.Twitter, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                Facebook: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.Facebook, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                Instagram: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.Instagram, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                PhoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.PhoneNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                ProfilePicture: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.ProfilePicture, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            });
            this.titleService.setTitle(this.pro.UserName);
            this.metaTagService.addTags([
                { name: "description", content: this.pro.About },
                { name: "author", content: this.pro.UserName },
                { name: "robots", content: "index,follow" },
                { name: "keywords", content: "profile," + this.pro.UserName + "," + this.pro.FirstName },
                { httpEquiv: 'Content-Type', content: "text/html", charset: "UTF-8" }
            ]);
        });
    }
    updateUserv() {
        this.service.updateUser(this.profileForm.value).subscribe(data => { this.responseUser = data; });
    }
    updatePassword() {
        this.service.updatePassword(this.passwordForm.value).subscribe(data => { this.responsePass = data; });
    }
    getUserImage() {
        this.service.getImage(this.pro.ProfilePicture).subscribe((baseImage) => {
            let objectURL = URL.createObjectURL(baseImage);
            this.imagesrc = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        });
    }
    goBack() {
        this.router.navigate(['/publicprofile/' + this.currentUser]);
    }
    browseFile() {
        document.getElementById('fileButton').click();
        // alert("you need to give Save changes in order to change photo")
    }
    onFileSelected(e) {
        this.maxLimitError = false;
        const target = e.target;
        if (target.files && target.files[0]) {
            let size = ((target.files[0].size / 1024) / 1024);
            if (size > 3) {
                this.maxLimitError = true;
                return;
            }
            const imageFile = target.files[0];
            const fileReader = new FileReader();
            fileReader.onload = () => {
                return this.imagesrc = fileReader.result;
            };
            fileReader.readAsDataURL(imageFile);
            var form = new FormData();
            form.append('upload_file', imageFile);
            form.append('mediaType', 'dp');
            this.service.updateImage(form).subscribe((data) => {
                this.profileForm.controls.ProfilePicture.setValue(data.Id);
                // console.log(this.profileForm.value.ProfilePicture);
            });
        }
    }
    checkPassword() {
        this.confirmPasswordError = false;
        if (this.passwordForm.value.NewPassword !== this.passwordForm.value.ConfirmPassword) {
            this.confirmPasswordError = true;
        }
    }
    toggleFieldTextType() {
        this.fieldTextType = !this.fieldTextType;
    }
    toggleFieldTextType1() {
        this.fieldTextType1 = !this.fieldTextType1;
    }
    toggleFieldTextType2() {
        this.fieldTextType2 = !this.fieldTextType2;
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 139, vars: 53, consts: [[1, "container"], ["class", "mt-2 alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], [1, "card"], [1, "card-body"], [1, "row"], [1, "col-12", "col-sm-auto", "mb-3"], [1, "mx-auto", 2, "width", "200px"], [1, "col-lg"], [1, "hero-image"], ["id", "imageHolder", "alt", "No image available", 1, "img-fluid", "rounded-circle", 2, "height", "180px", "width", "600px", 3, "src"], [1, "col", "d-flex", "flex-column", "flex-sm-row", "justify-content-between", "mb-3"], [1, "text-center", "text-sm-left", "mb-2", "mb-sm-0"], [1, "pt-sm-2", "pb-1", "mb-0", "text-nowrap"], [1, "mb-0"], [1, "mt-2"], ["type", "file", "accept", "image/*", "name", "ImageFile", "id", "fileButton", 2, "display", "none", 3, "change"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-fw", "fa-camera"], ["role", "tablist", 1, "nav", "nav-tabs"], ["role", "presentation", 1, "nav-item"], ["href", "#profile", "data-toggle", "tab", "role", "tab", "aria-controls", "profile", "aria-selected", "true", 1, "active", "nav-link"], ["role", "presen", 1, "nav-item"], ["href", "#changePassword", "data-toggle", "tab", "role", "tab", "aria-controls", "changePassword", "aria-selected", "false", 1, "nav-link"], ["role", "tabpanel", "aria-labelledby", "profile-tab", 1, "tab-content", "pt-3"], ["id", "profile", 1, "tab-pane", "fade", "show", "active"], ["novalidate", "", 1, "form", 3, "formGroup", "ngSubmit"], [1, "col"], [1, "form-group"], ["type", "text", "name", "name", "formControlName", "FirstName", "readonly", "", 1, "form-control"], ["type", "text", "name", "username", "formControlName", "UserName", "readonly", "", 1, "form-control"], ["type", "text", "formControlName", "Email", "readonly", "", 1, "form-control"], ["name", "PhoneNumber", "type", "number", "minlength", "6", "maxlength", "10", "formControlName", "PhoneNumber", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "col", "mb-3"], [1, "form-group", "needs-validation"], ["for", "About"], ["name", "About", "formControlName", "About", "rows", "5", 1, "form-control", 3, "ngClass"], [1, "invalid-feedback"], ["formControlName", "Twitter", "type", "text", 1, "form-control", 3, "ngClass"], ["formControlName", "Facebook", "type", "text", 1, "form-control", 3, "ngClass"], ["formControlName", "Instagram", "type", "text", 1, "form-control", 3, "ngClass"], [1, "col", "d-flex", "justify-content-center"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "col", "d-flex", "justify-content-left", "mt-2"], [1, "btn", "btn-info", 3, "click"], [1, "fa", "fa-chevron-left"], ["id", "changePassword", 1, "tab-pane", "fade", "show"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "col-12", "col-sm-6", "mb-3"], [1, "input-group"], ["id", "password", "formControlName", "OldPassword", "placeholder", "\u2022", 1, "form-control", 3, "type", "ngClass"], [1, "input-group-append"], [1, "input-group-text"], [1, "fa", 2, "color", "blue", 3, "ngClass", "click"], ["formControlName", "NewPassword", "placeholder", "\u2022", 1, "form-control", 3, "type", "ngClass"], [1, "d-none", "d-xl-inline"], ["formControlName", "ConfirmPassword", "placeholder", "\u2022", 1, "form-control", 3, "type", "keyup"], ["style", "color:red;font-weight:bold;font-size:0.8em;", "class", "pl-3", 4, "ngIf"], ["role", "alert", 1, "mt-2", "alert", "alert-danger", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [4, "ngIf"], [1, "pl-3", 2, "color", "red", "font-weight", "bold", "font-size", "0.8em"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_div_1_Template, 7, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "figure", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProfileComponent_Template_input_change_18_listener($event) { return ctx.onFileSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_19_listener() { return ctx.browseFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Change Photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Update Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Update Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "form", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_32_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "PhoneNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ProfileComponent_div_56_Template, 4, 3, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "textarea", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ProfileComponent_div_64_Template, 2, 1, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, ProfileComponent_div_71_Template, 2, 1, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, ProfileComponent_div_78_Template, 2, 1, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, ProfileComponent_div_85_Template, 2, 1, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Save Changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_93_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "form", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileComponent_Template_form_ngSubmit_97_listener() { return ctx.onSubmit1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Current Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_i_click_109_listener() { return ctx.toggleFieldTextType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, ProfileComponent_div_110_Template, 3, 2, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_i_click_120_listener() { return ctx.toggleFieldTextType1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, ProfileComponent_div_121_Template, 3, 2, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Confirm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ProfileComponent_Template_input_keyup_130_listener() { return ctx.checkPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_i_click_133_listener() { return ctx.toggleFieldTextType2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](134, ProfileComponent_div_134_Template, 2, 0, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Save Changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.maxLimitError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imagesrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.pro.FirstName, " ", ctx.pro.LastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pro.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.profileForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c0, ctx.submitted && ctx.f.PhoneNumber.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.PhoneNumber.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c0, ctx.submitted && ctx.f.About.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.About.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c0, ctx.submitted && ctx.f.Twitter.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.Twitter.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c0, ctx.submitted && ctx.f.Facebook.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.Facebook.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c0, ctx.submitted && ctx.f.Instagram.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.Instagram.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.profileForm.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.passwordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.fieldTextType ? "text" : "password")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c0, ctx.submitted1 && ctx.f1.OldPassword.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](42, _c1, !ctx.fieldTextType, ctx.fieldTextType));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted1 && ctx.f1.OldPassword.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.fieldTextType1 ? "text" : "password")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](45, _c0, ctx.submitted1 && ctx.f1.NewPassword.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](47, _c1, !ctx.fieldTextType1, ctx.fieldTextType1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted1 && ctx.f1.NewPassword.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.fieldTextType2 ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](50, _c1, !ctx.fieldTextType2, ctx.fieldTextType2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.confirmPasswordError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.passwordForm.dirty);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["input[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, .container[_ngcontent-%COMP%] \r\n{\r\n\toutline: none;\r\n\tborder: 1px solid orange;\r\n\t\r\n\r\n    box-shadow: 0 0 15px orange,\r\n\t\t\t\t0 0 25px orange,\r\n\t\t\t\t0 0 45px orange,\r\n\t\t\t\t0 0 70px orange;\r\n\r\n\t-moz-box-shadow: 0px 0px 12px orange;\r\n\t-webkit-box-shadow: 0px 0px 12px orange;\r\n\t\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Q0FJQyxhQUFhO0NBQ2Isd0JBQXdCO0NBQ3hCLHFDQUFxQzs7SUFFbEM7OzttQkFHZTs7Q0FFbEIsb0NBQW9DO0NBQ3BDLHVDQUF1QztDQUN2QywyQ0FBMkM7QUFDNUMiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0OmZvY3VzLFxyXG50ZXh0YXJlYTpmb2N1cyxcclxuLmNvbnRhaW5lciBcclxue1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgb3JhbmdlO1xyXG5cdC8qIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCBvcmFuZ2U7ICovXHJcblxyXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggb3JhbmdlLFxyXG5cdFx0XHRcdDAgMCAyNXB4IG9yYW5nZSxcclxuXHRcdFx0XHQwIDAgNDVweCBvcmFuZ2UsXHJcblx0XHRcdFx0MCAwIDcwcHggb3JhbmdlO1xyXG5cclxuXHQtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTJweCBvcmFuZ2U7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEycHggb3JhbmdlO1xyXG5cdC8qLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDhweCAjN2JjMWY3OyovXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return [{ type: _services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"] }]; }, null); })();


/***/ }),

/***/ "./src/app/public-profile/public-profile.component.ts":
/*!************************************************************!*\
  !*** ./src/app/public-profile/public-profile.component.ts ***!
  \************************************************************/
/*! exports provided: PublicProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicProfileComponent", function() { return PublicProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_public_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/public-profile.service */ "./src/app/services/public-profile.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function PublicProfileComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.ProfilePic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PublicProfileComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 22);
} }
function PublicProfileComponent_a_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PublicProfileComponent {
    constructor(service, sanitizer, authService, route, titleService, metaTagService) {
        this.service = service;
        this.sanitizer = sanitizer;
        this.authService = authService;
        this.route = route;
        this.titleService = titleService;
        this.metaTagService = metaTagService;
        this.currentUser = false;
        this.User = {};
        this.getProfileFor = this.route.snapshot.paramMap.get("userName");
    }
    ngOnInit() {
        this.refreshUserProfile();
    }
    refreshUserProfile() {
        this.service.getUserInfo(this.getProfileFor).subscribe(data => {
            this.User = data;
            let user = this.authService.isAuthenticated().userName;
            if (user == this.User.UserName) {
                this.currentUser = true;
                // console.log("done");
            }
            this.getProfilePicture();
            this.titleService.setTitle(this.User.UserName);
            this.metaTagService.addTags([
                { name: "description", content: this.User.About },
                { name: "author", content: this.User.UserName },
                { name: "robots", content: "index,follow" },
                { name: "keywords", content: "profile," + this.User.UserName + "," + this.User.FirstName },
                { httpEquiv: 'Content-Type', content: "text/html", charset: "UTF-8" }
            ]);
        });
    }
    getProfilePicture() {
        this.service.getImage(this.User.ProfilePicture).subscribe((baseImage) => {
            let objectURL = URL.createObjectURL(baseImage);
            this.ProfilePic = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        });
    }
    openFB() {
        // window.location.href=this.User.Facebook;
        window.open(this.User.Facebook, '_blank');
    }
    openTwitter() {
        window.open(this.User.Twitter, '_blank');
    }
    openInstagram() {
        window.open(this.User.Instagram, '_blank');
    }
}
PublicProfileComponent.ɵfac = function PublicProfileComponent_Factory(t) { return new (t || PublicProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_public_profile_service__WEBPACK_IMPORTED_MODULE_1__["PublicProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"])); };
PublicProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PublicProfileComponent, selectors: [["app-public-profile"]], decls: 47, vars: 10, consts: [[1, "mybody"], [1, "container"], [1, "mycard"], [1, "card_card", 2, "margin", "15px"], ["class", "card_img", 4, "ngIf", "ngIfElse"], ["noProfilePic", ""], [1, "card_content"], [1, "card_name"], [1, "card_text", "justify-content-center"], [1, "hero-info"], [1, "card_soc", "card-soc"], [1, "wrapper"], [1, "icon", "facebook", 3, "click"], [1, "tooltip"], [1, "fa", "fa-facebook-f"], [1, "icon", "twitter", 3, "click"], [1, "fa", "fa-twitter"], [1, "icon", "instagram", 3, "click"], [1, "fa", "fa-instagram"], ["class", "btn gradient-button gradient-button-4", "href", "/editprofile", "role", "button", 4, "ngIf"], [1, "card_img"], ["width", "150px", "height", "150px", "alt", "No image available", 3, "src"], ["src", "../../assets/shared/images/noprofilepic.jpg", "width", "150px", "height", "150px", 2, "border-radius", "50%"], ["href", "/editprofile", "role", "button", 1, "btn", "gradient-button", "gradient-button-4"]], template: function PublicProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PublicProfileComponent_div_4_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PublicProfileComponent_ng_template_5_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "General Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PublicProfileComponent_Template_div_click_34_listener() { return ctx.openFB(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PublicProfileComponent_Template_div_click_38_listener() { return ctx.openTwitter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PublicProfileComponent_Template_div_click_42_listener() { return ctx.openInstagram(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, PublicProfileComponent_a_46_Template, 2, 0, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ProfilePic != null)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.User.FirstName, " ", ctx.User.LastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.User.About);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.User.FirstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.User.LastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.User.UserName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.User.Email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".hero-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n\tfont-size:30px;\r\n\tmargin-bottom: 30px;\r\n\tcolor: #fff;\r\n}\r\n.hero-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n\tlist-style: none;\r\n}\r\n.hero-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\t\tfont-size: 20px;\r\n\t\tcolor: #fff;\r\n\t\tmargin-bottom: 15px;\r\n\t}\r\n.hero-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\t\t\tcolor: #fff;\r\n\t\t\tdisplay: inline-block;\r\n\t\t\tmin-width: 200px;\r\n\t\t}\r\n.hero-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\r\n\t\t\tmargin-bottom: 0;\r\n\t\t}\r\n\r\n.gradient-button[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n    \r\n    font-size: 15px;\r\n    padding: 15px;\r\n    text-align: center;\r\n    transition: 0.5s;\r\n    background-size: 200% auto;\r\n    color: #FFF;\r\n    box-shadow: 0 0 20px #eee;\r\n    border-radius: 10px;\r\n    width: 200px;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\r\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    border-radius: 25px;\r\n}\r\n.gradient-button[_ngcontent-%COMP%]:hover{\r\n    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\r\n    margin: 8px 10px 12px;\r\n}\r\n.gradient-button-4[_ngcontent-%COMP%] {background-image: linear-gradient(to right, #7474BF 0%, #348AC7 51%, #7474BF 100%)}\r\n.gradient-button-4[_ngcontent-%COMP%]:hover { background-position: right center; }\r\n\r\n\r\n.wrapper[_ngcontent-%COMP%]\r\n{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-content: center;\r\n\r\n}\r\n.wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]\r\n{\r\n    position: relative;\r\n    border-radius: 50%;\r\n    padding: 15px;\r\n    margin: 10px;\r\n    width: 50px;\r\n    height: 50px;\r\n    font-size: 38px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    cursor: pointer;\r\n}\r\n.wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]\r\n{\r\n    color: #000;\r\n    transition: .4s linear;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]::before, .wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]::after\r\n{\r\n    content: '';\r\n    position: absolute;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 5;\r\n    top: 0;\r\n    transition: .4s linear;\r\n\t\r\n}\r\n.wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%]\r\n{\r\n    text-shadow: 1px -1px 0px rgba(0, 0, 0, 0.1);\r\n    transform: scale(.8);\r\n    transition: .4s linear;\r\n\t\r\n}\r\n.wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover::before\r\n{\r\n    border-radius: 50%;\r\n    border-left: 4px solid;\r\n    border-right: 4px solid;\r\n    transform: skewX(20deg);\r\n    color: #000;\r\n}\r\n.wrapper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover::after\r\n{\r\n    border-radius: 50%;\r\n    border-top: 4px solid;\r\n    border-bottom: 4px solid;\r\n    transform: skewY(-20deg);\r\n    color: #000;\r\n}\r\n\r\n*[_ngcontent-%COMP%]\r\n{\r\n\tmargin:0;\r\n\tpadding: 0;\r\n\tbox-sizing: border-box;\r\n}\r\n.mybody[_ngcontent-%COMP%]\r\n{\r\n\t\r\n\tdisplay: flex;\r\n\tposition: relative;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tbackground: linear-gradient(180deg, #312C2F 0%, #181617 100%);\r\n\toverflow: hidden;\r\n}\r\n.container[_ngcontent-%COMP%]\r\n{\r\n\tmax-width: 1000px;\r\n\twidth: 100%;\r\n\tposition: relative;\r\n\tz-index: 1;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tflex-direction: column;\r\n}\r\n.container[_ngcontent-%COMP%]:before\r\n{\r\n\tcontent:'';\r\n\tposition: absolute;\r\n\tbottom: -80px;\r\n\tleft: -180px;\r\n\twidth: 400px;\r\n\theight: 400px;\r\n\tborder-radius: 50%;\r\n\tbackground: linear-gradient(45deg, #a46200 11%,#e4ab0f 51%, rgba(255,230,0,.8) 92%);\r\n\tz-index: -1;\r\n}\r\n.container[_ngcontent-%COMP%]:after\r\n{\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tright: -180px;\r\n\ttop: -80px;\r\n\twidth: 325px;\r\n\theight: 325px;\r\n\tborder-radius: 50%;\r\n\tbackground: linear-gradient(213deg, #00fff0 14%, rgba(255,0,214,0.65) 81%, rgba(240,115,0,.49) 164%);\r\n\tz-index: -1;\r\n}\r\n.card_card[_ngcontent-%COMP%]\r\n{\r\n\tbackground: linear-gradient(152deg, rgba(255,255,255,.4) -50%, rgba(255,255,255,0) 125%);\r\n\tborder: 1px solid rgba(255,255,255,.5);\r\n\tbackdrop-filter: blur(10px);\r\n\t-webkit-backdrop-filter: blur(10px);\r\n\tborder-radius: 20px;\r\n\tpadding: 20px 50px;\r\n\tposition: relative;\r\n\tz-index: 1;\r\n\tmargin: 0 15px;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\ttransition: .3s;\r\n\toverflow: hidden;\r\n\twidth:550px;\r\n}\r\n@media screen and (max-width:500px)\r\n{\r\n\t.card_card[_ngcontent-%COMP%]\r\n\t{\r\n\t\twidth: 80vw;\r\n\t}\r\n\r\n\t.mycard[_ngcontent-%COMP%]:hover::before, .mycard[_ngcontent-%COMP%]:hover::after\r\n\t{\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n.card_card[_ngcontent-%COMP%]:before\r\n{\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 50%;\r\n\theight: 100%;\r\n\tbackground: linear-gradient(to left, rgba(255,255,255,0.15),transparent);\r\n\ttransform: skewX(45deg) translateX(0);\r\n\ttransition: 0.5s;\r\n}\r\n.card_card[_ngcontent-%COMP%]:hover::before\r\n{\r\n\ttransform: skewX(45deg) translateX(250%);\r\n}\r\n.mycard[_ngcontent-%COMP%]::before\r\n{\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\ttransform: translateX(-50%);\r\n\tbottom: 83px;\r\n\twidth: 30px;\r\n\theight: 10px;\r\n\tbackground: #f00;\r\n\tborder-radius: 10px;\r\n\ttransition: 0.5s;\r\n\ttransition-delay: 0s;\r\n\tbox-sizing: border-box;\r\n}\r\n.mycard[_ngcontent-%COMP%]:hover::before\r\n{\r\n\tbottom: 88px;\r\n\theight: 85%;\r\n\twidth: 56%;\r\n\tborder-radius: 30px;\r\n\ttransition-delay: 0.5s;\r\n}\r\n.mycard[_ngcontent-%COMP%]::after\r\n{\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\ttransform: translateX(-50%);\r\n\ttop:10px;\r\n\twidth: 30px;\r\n\theight: 10px;\r\n\tbackground: #f00;\r\n\tborder-radius: 10px;\r\n\ttransition: 0.5s;\r\n\ttransition-delay: 0s;\r\n}\r\n.mycard[_ngcontent-%COMP%]:hover::after\r\n{\r\n\ttop: 10;\r\n\theight: 85%;\r\n\twidth: 56%;\r\n\tborder-radius: 30px;\r\n\ttransition-delay: 0.5s;\r\n}\r\n.mycard[_ngcontent-%COMP%]::before, .mycard[_ngcontent-%COMP%]::after\r\n{\r\n\tbackground: #20cdfd;\r\n\tbox-shadow: 0 0 5px #20cdfd,\r\n\t\t\t\t0 0 15px #20cdfd,\r\n\t\t\t\t0 0 35px #20cdfd,\r\n\t\t\t\t0 0 60px #20cdfd;\r\n}\r\n.mycard[_ngcontent-%COMP%]:hover   .hero-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .mycard[_ngcontent-%COMP%]:hover   .hero-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%], .mycard[_ngcontent-%COMP%]:hover   .hero-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], .mycard[_ngcontent-%COMP%]:hover   .card_content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .mycard[_ngcontent-%COMP%]:hover   .card_content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mycard[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%]\r\n\t\r\n{\r\n\tcolor: #000;\r\n}\r\n\r\n.card_img[_ngcontent-%COMP%]\r\n{\r\n\tdisplay: inline-flex;\r\n\tborder-radius: 50%;\r\n\toverflow: hidden;\r\n\tmargin-bottom: 30px;\r\n\tposition: relative;\r\n}\r\n.card_content[_ngcontent-%COMP%]\r\n{\t\r\n\tmargin-bottom: 25px;\r\n}\r\n.card_name[_ngcontent-%COMP%]\r\n{\r\n\tfont-weight: bold;\r\n\t\r\n\tcolor: #fff;\r\n\tmargin-bottom: 15px;\r\n}\r\n.card_text[_ngcontent-%COMP%]\r\n{\r\n\tfont-size: 16px;\r\n\tline-height: 1.2;\r\n\tcolor: #fff;\r\n}\r\n.card-soc_list[_ngcontent-%COMP%]\r\n{\r\n\tlist-style-type: none;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n.card-soc_item[_ngcontent-%COMP%]\r\n{\r\n\tmargin: 0 7.5px;\r\n}\r\n.card-soc_link[_ngcontent-%COMP%]\r\n{\r\n\twidth: 40px;\r\n\theight: 40px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tborder-radius: 50%;\r\n\r\n\tbackground: linear-gradient(152deg, rgba(255,255,255,.4) -50%, rgba(255,255,255,0) 125%);\r\n\tborder: 1px solid rgba(255,255,255,.5);\r\n\tbackdrop-filter: blur(10px);\r\n\t-webkit-backdrop-filter: blur(10px);\r\n\r\n\ttext-decoration: none;\r\n\tcolor: #fff;\r\n\tfont-size: 24px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljLXByb2ZpbGUvcHVibGljLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQkFBcUI7QUFDckI7Q0FDQyxjQUFjO0NBQ2QsbUJBQW1CO0NBQ25CLFdBQVc7QUFDWjtBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBRUM7RUFDQyxlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtDQUNwQjtBQUVDO0dBQ0MsV0FBVztHQUNYLHFCQUFxQjtHQUNyQixnQkFBZ0I7RUFDakI7QUFFQTtHQUNDLGdCQUFnQjtFQUNqQjtBQUdGLHdFQUF3RTtBQUV4RTtJQUNJLFlBQVk7O0lBRVosZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0VBQWtFO0lBQ2xFLCtDQUErQztJQUMvQyxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksb0VBQW9FO0lBQ3BFLHFCQUFxQjtBQUN6QjtBQUVBLG9CQUFvQixrRkFBa0Y7QUFDdEcsMkJBQTJCLGlDQUFpQyxFQUFFO0FBRTlEO2lFQUNpRTtBQUlqRSxzREFBc0Q7QUFFdEQ7O0lBRUksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7O0FBRXpCO0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25CO0FBRUE7O0lBRUksV0FBVztJQUNYLHNCQUFzQjtBQUMxQjtBQUVBOzs7Ozs7Ozs7Ozs7R0FZRztBQUVIOzs7SUFHSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLE9BQU87SUFDUCxNQUFNO0lBQ04sc0JBQXNCOztBQUUxQjtBQUVBOzs7SUFHSSw0Q0FBNEM7SUFDNUMsb0JBQW9CO0lBQ3BCLHNCQUFzQjs7QUFFMUI7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsV0FBVztBQUNmO0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLFdBQVc7QUFDZjtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0NHO0FBR0g7O0NBRUMsUUFBUTtDQUNSLFVBQVU7Q0FDVixzQkFBc0I7QUFDdkI7QUFFQTs7Q0FFQyx1QkFBdUI7Q0FDdkIsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLDZEQUE2RDtDQUM3RCxnQkFBZ0I7QUFDakI7QUFHQTs7Q0FFQyxpQkFBaUI7Q0FDakIsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixzQkFBc0I7QUFDdkI7QUFFQTs7Q0FFQyxVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixZQUFZO0NBQ1osWUFBWTtDQUNaLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsbUZBQW1GO0NBQ25GLFdBQVc7QUFDWjtBQUVBOztDQUVDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLFVBQVU7Q0FDVixZQUFZO0NBQ1osYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixvR0FBb0c7Q0FDcEcsV0FBVztBQUNaO0FBRUE7O0NBRUMsd0ZBQXdGO0NBQ3hGLHNDQUFzQztDQUN0QywyQkFBMkI7Q0FDM0IsbUNBQW1DO0NBQ25DLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixjQUFjO0NBQ2QsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixXQUFXO0FBQ1o7QUFFQTs7Q0FFQzs7RUFFQyxXQUFXO0NBQ1o7O0NBRUE7OztFQUdDLGFBQWE7Q0FDZDtBQUNEO0FBRUE7O0NBRUMsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixNQUFNO0NBQ04sT0FBTztDQUNQLFVBQVU7Q0FDVixZQUFZO0NBQ1osd0VBQXdFO0NBQ3hFLHFDQUFxQztDQUNyQyxnQkFBZ0I7QUFDakI7QUFFQTs7Q0FFQyx3Q0FBd0M7QUFDekM7QUFFQTs7Q0FFQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCwyQkFBMkI7Q0FDM0IsWUFBWTtDQUNaLFdBQVc7Q0FDWCxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsb0JBQW9CO0NBQ3BCLHNCQUFzQjtBQUN2QjtBQUVBOztDQUVDLFlBQVk7Q0FDWixXQUFXO0NBQ1gsVUFBVTtDQUNWLG1CQUFtQjtDQUNuQixzQkFBc0I7QUFDdkI7QUFFQTs7Q0FFQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCwyQkFBMkI7Q0FDM0IsUUFBUTtDQUNSLFdBQVc7Q0FDWCxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsb0JBQW9CO0FBQ3JCO0FBRUE7O0NBRUMsT0FBTztDQUNQLFdBQVc7Q0FDWCxVQUFVO0NBQ1YsbUJBQW1CO0NBQ25CLHNCQUFzQjtBQUN2QjtBQUVBOzs7Q0FHQyxtQkFBbUI7Q0FDbkI7OztvQkFHbUI7QUFDcEI7QUFFQTs7Ozs7Ozs7Q0FRQyxXQUFXO0FBQ1o7QUFFQTs7Ozs7R0FLRztBQUdIOztDQUVDLG9CQUFvQjtDQUNwQixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixrQkFBa0I7QUFDbkI7QUFFQTs7Q0FFQyxtQkFBbUI7QUFDcEI7QUFFQTs7Q0FFQyxpQkFBaUI7Q0FDakIscUJBQXFCO0NBQ3JCLFdBQVc7Q0FDWCxtQkFBbUI7QUFDcEI7QUFFQTs7Q0FFQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLFdBQVc7QUFDWjtBQUVBOztDQUVDLHFCQUFxQjtDQUNyQixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1QjtBQUN4QjtBQUVBOztDQUVDLGVBQWU7QUFDaEI7QUFFQTs7Q0FFQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLGtCQUFrQjs7Q0FFbEIsd0ZBQXdGO0NBQ3hGLHNDQUFzQztDQUN0QywyQkFBMkI7Q0FDM0IsbUNBQW1DOztDQUVuQyxxQkFBcUI7Q0FDckIsV0FBVztDQUNYLGVBQWU7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWMtcHJvZmlsZS9wdWJsaWMtcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypIZXJvIFNlY3Rpb24gc3RhcnQqL1xyXG4uaGVyby1pbmZvIGgzIHtcclxuXHRmb250LXNpemU6MzBweDtcclxuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uaGVyby1pbmZvIHVsIHtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG5cdC5oZXJvLWluZm8gdWwgbGkge1xyXG5cdFx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cdH1cclxuXHJcblx0XHQuaGVyby1pbmZvIHVsIGxpIHNwYW4ge1xyXG5cdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRtaW4td2lkdGg6IDIwMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdC5oZXJvLWluZm8gdWwgbGk6bGFzdC1jaGlsZCB7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDA7XHJcblx0XHR9XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRWRpdCBQcm9maWxlIEJ1dHRvbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLmdyYWRpZW50LWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4ICNlZWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjQpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcbi5ncmFkaWVudC1idXR0b246aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsMCwwLDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcclxuICAgIG1hcmdpbjogOHB4IDEwcHggMTJweDtcclxufVxyXG5cclxuLmdyYWRpZW50LWJ1dHRvbi00IHtiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM3NDc0QkYgMCUsICMzNDhBQzcgNTElLCAjNzQ3NEJGIDEwMCUpfVxyXG4uZ3JhZGllbnQtYnV0dG9uLTQ6aG92ZXIgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7IH1cclxuXHJcbi8qIC5ncmFkaWVudC1idXR0b24tNCB7YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDBkMmZmIDAlLCAjM2E3YmQ1IDUxJSwgIzAwZDJmZiAxMDAlKX1cclxuLmdyYWRpZW50LWJ1dHRvbi00OmhvdmVyIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyOyB9ICovXHJcblxyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tU29jaWFsIE1lZGlhIEljb25zLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi53cmFwcGVyXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi53cmFwcGVyIC5pY29uXHJcbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMzhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ud3JhcHBlciAuaWNvbiBpXHJcbntcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdHJhbnNpdGlvbjogLjRzIGxpbmVhcjtcclxufVxyXG5cclxuLyogLndyYXBwZXIgLmljb24yIGlcclxue1xyXG4gICAgY29sb3I6ICMyMzlhY2M7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHMgbGluZWFyO1xyXG59XHJcblxyXG4ud3JhcHBlciAuaWNvbjMgaVxyXG57XHJcbiAgICBcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM0MDVERTYsIzU4NTFEQiwjODMzQUI0LCNDMTM1ODQsI0UxMzA2QywjRkQxRDFEKTtcclxuICAgIHRyYW5zaXRpb246IC40cyBsaW5lYXI7XHJcblx0YmFja2dyb3VuZC1jbGlwOiB0ZXh0OyAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7ICAtbW96LWJhY2tncm91bmQtY2xpcDogdGV4dDsgIC1tb3otdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDsgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufSAqL1xyXG5cclxuLndyYXBwZXIgLmljb246OmJlZm9yZSxcclxuLndyYXBwZXIgLmljb246OmFmdGVyXHJcbntcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogNTtcclxuICAgIHRvcDogMDtcclxuICAgIHRyYW5zaXRpb246IC40cyBsaW5lYXI7XHJcblx0XHJcbn1cclxuXHJcbi53cmFwcGVyIC5pY29uOmhvdmVyIHNwYW4sXHJcbi53cmFwcGVyIC5pY29uOmhvdmVyIC50b29sdGlwXHJcbntcclxuICAgIHRleHQtc2hhZG93OiAxcHggLTFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSguOCk7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHMgbGluZWFyO1xyXG5cdFxyXG59XHJcblxyXG4ud3JhcHBlciAuaWNvbjpob3Zlcjo6YmVmb3JlXHJcbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZDtcclxuICAgIHRyYW5zZm9ybTogc2tld1goMjBkZWcpO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi53cmFwcGVyIC5pY29uOmhvdmVyOjphZnRlclxyXG57XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQ7XHJcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQ7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXdZKC0yMGRlZyk7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLyogLndyYXBwZXIgLmljb24yOmhvdmVyOjpiZWZvcmVcclxue1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZDtcclxuICAgIGJvcmRlci1yaWdodDogNHB4IHNvbGlkO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCgyMGRlZyk7XHJcbiAgICBjb2xvcjogIzIzOWFjYztcclxufVxyXG5cclxuLndyYXBwZXIgLmljb24yOmhvdmVyOjphZnRlclxyXG57XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQ7XHJcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQ7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXdZKC0yMGRlZyk7XHJcbiAgICBjb2xvcjogIzIzOWFjYztcclxufVxyXG5cclxuLndyYXBwZXIgLmljb24zOmhvdmVyOjpiZWZvcmVcclxue1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZDtcclxuICAgIGJvcmRlci1yaWdodDogNHB4IHNvbGlkO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCgyMGRlZyk7XHJcbiAgICBcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM0MDVERTYsIzU4NTFEQiwjODMzQUI0LCNDMTM1ODQsI0UxMzA2QywjRkQxRDFEKTtcclxuXHRiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7ICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDsgIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0OyAgLW1vei10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50OyAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLndyYXBwZXIgLmljb24zOmhvdmVyOjphZnRlclxyXG57XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQ7XHJcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQ7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXdZKC0yMGRlZyk7XHJcbiAgICBcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM0MDVERTYsIzU4NTFEQiwjODMzQUI0LCNDMTM1ODQsI0UxMzA2QywjRkQxRDFEKTtcclxuXHRiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7ICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDsgIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0OyAgLW1vei10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50OyAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufSAqL1xyXG5cclxuXHJcbipcclxue1xyXG5cdG1hcmdpbjowO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLm15Ym9keVxyXG57XHJcblx0LyogbWluLWhlaWdodDogMTQwdmg7ICovXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMzEyQzJGIDAlLCAjMTgxNjE3IDEwMCUpO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVyXHJcbntcclxuXHRtYXgtd2lkdGg6IDEwMDBweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ei1pbmRleDogMTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNvbnRhaW5lcjpiZWZvcmVcclxue1xyXG5cdGNvbnRlbnQ6Jyc7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGJvdHRvbTogLTgwcHg7XHJcblx0bGVmdDogLTE4MHB4O1xyXG5cdHdpZHRoOiA0MDBweDtcclxuXHRoZWlnaHQ6IDQwMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNhNDYyMDAgMTElLCNlNGFiMGYgNTElLCByZ2JhKDI1NSwyMzAsMCwuOCkgOTIlKTtcclxuXHR6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLmNvbnRhaW5lcjphZnRlclxyXG57XHJcblx0Y29udGVudDogJyc7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiAtMTgwcHg7XHJcblx0dG9wOiAtODBweDtcclxuXHR3aWR0aDogMzI1cHg7XHJcblx0aGVpZ2h0OiAzMjVweDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIxM2RlZywgIzAwZmZmMCAxNCUsIHJnYmEoMjU1LDAsMjE0LDAuNjUpIDgxJSwgcmdiYSgyNDAsMTE1LDAsLjQ5KSAxNjQlKTtcclxuXHR6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLmNhcmRfY2FyZFxyXG57XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE1MmRlZywgcmdiYSgyNTUsMjU1LDI1NSwuNCkgLTUwJSwgcmdiYSgyNTUsMjU1LDI1NSwwKSAxMjUlKTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LC41KTtcclxuXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcblx0LXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcclxuXHRwYWRkaW5nOiAyMHB4IDUwcHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHotaW5kZXg6IDE7XHJcblx0bWFyZ2luOiAwIDE1cHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0dHJhbnNpdGlvbjogLjNzO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0d2lkdGg6NTUwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTAwcHgpXHJcbntcclxuXHQuY2FyZF9jYXJkXHJcblx0e1xyXG5cdFx0d2lkdGg6IDgwdnc7XHJcblx0fVxyXG5cclxuXHQubXljYXJkOmhvdmVyOjpiZWZvcmUsXHJcblx0Lm15Y2FyZDpob3Zlcjo6YWZ0ZXJcclxuXHR7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxufVxyXG5cclxuLmNhcmRfY2FyZDpiZWZvcmVcclxue1xyXG5cdGNvbnRlbnQ6ICcnO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHR3aWR0aDogNTAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSgyNTUsMjU1LDI1NSwwLjE1KSx0cmFuc3BhcmVudCk7XHJcblx0dHJhbnNmb3JtOiBza2V3WCg0NWRlZykgdHJhbnNsYXRlWCgwKTtcclxuXHR0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uY2FyZF9jYXJkOmhvdmVyOjpiZWZvcmVcclxue1xyXG5cdHRyYW5zZm9ybTogc2tld1goNDVkZWcpIHRyYW5zbGF0ZVgoMjUwJSk7XHJcbn1cclxuXHJcbi5teWNhcmQ6OmJlZm9yZVxyXG57XHJcblx0Y29udGVudDogJyc7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcblx0Ym90dG9tOiA4M3B4O1xyXG5cdHdpZHRoOiAzMHB4O1xyXG5cdGhlaWdodDogMTBweDtcclxuXHRiYWNrZ3JvdW5kOiAjZjAwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0dHJhbnNpdGlvbjogMC41cztcclxuXHR0cmFuc2l0aW9uLWRlbGF5OiAwcztcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4ubXljYXJkOmhvdmVyOjpiZWZvcmVcclxue1xyXG5cdGJvdHRvbTogODhweDtcclxuXHRoZWlnaHQ6IDg1JTtcclxuXHR3aWR0aDogNTYlO1xyXG5cdGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcblx0dHJhbnNpdGlvbi1kZWxheTogMC41cztcclxufVxyXG5cclxuLm15Y2FyZDo6YWZ0ZXJcclxue1xyXG5cdGNvbnRlbnQ6ICcnO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiA1MCU7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG5cdHRvcDoxMHB4O1xyXG5cdHdpZHRoOiAzMHB4O1xyXG5cdGhlaWdodDogMTBweDtcclxuXHRiYWNrZ3JvdW5kOiAjZjAwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0dHJhbnNpdGlvbjogMC41cztcclxuXHR0cmFuc2l0aW9uLWRlbGF5OiAwcztcclxufVxyXG5cclxuLm15Y2FyZDpob3Zlcjo6YWZ0ZXJcclxue1xyXG5cdHRvcDogMTA7XHJcblx0aGVpZ2h0OiA4NSU7XHJcblx0d2lkdGg6IDU2JTtcclxuXHRib3JkZXItcmFkaXVzOiAzMHB4O1xyXG5cdHRyYW5zaXRpb24tZGVsYXk6IDAuNXM7XHJcbn1cclxuXHJcbi5teWNhcmQ6OmJlZm9yZSxcclxuLm15Y2FyZDo6YWZ0ZXJcclxue1xyXG5cdGJhY2tncm91bmQ6ICMyMGNkZmQ7XHJcblx0Ym94LXNoYWRvdzogMCAwIDVweCAjMjBjZGZkLFxyXG5cdFx0XHRcdDAgMCAxNXB4ICMyMGNkZmQsXHJcblx0XHRcdFx0MCAwIDM1cHggIzIwY2RmZCxcclxuXHRcdFx0XHQwIDAgNjBweCAjMjBjZGZkO1xyXG59XHJcblxyXG4ubXljYXJkOmhvdmVyIC5oZXJvLWluZm8gaDIsXHJcbi5teWNhcmQ6aG92ZXIgLmhlcm8taW5mbyB1bD5saSxcclxuLm15Y2FyZDpob3ZlciAuaGVyby1pbmZvIHVsPmxpPnNwYW4sXHJcbi5teWNhcmQ6aG92ZXIgLmNhcmRfY29udGVudCBoMyxcclxuLm15Y2FyZDpob3ZlciAuY2FyZF9jb250ZW50IHAsXHJcbi5teWNhcmQ6aG92ZXIgaDJcclxuXHRcclxue1xyXG5cdGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4vKiAubXljYXJkOmhvdmVyIGgyXHJcbntcclxuXHRcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNhNDYyMDAgMTElLCNlNGFiMGYgNTElLCByZ2JhKDI1NSwyMzAsMCwuOCkgOTIlKTtcclxuXHRiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7ICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDsgIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0OyAgLW1vei10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50OyAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59ICovXHJcblxyXG5cclxuLmNhcmRfaW1nXHJcbntcclxuXHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNhcmRfY29udGVudFxyXG57XHRcclxuXHRtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4uY2FyZF9uYW1lXHJcbntcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHQvKiBmb250LXNpemU6IDI0cHg7ICovXHJcblx0Y29sb3I6ICNmZmY7XHJcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmNhcmRfdGV4dFxyXG57XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjI7XHJcblx0Y29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jYXJkLXNvY19saXN0XHJcbntcclxuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC1zb2NfaXRlbVxyXG57XHJcblx0bWFyZ2luOiAwIDcuNXB4O1xyXG59XHJcblxyXG4uY2FyZC1zb2NfbGlua1xyXG57XHJcblx0d2lkdGg6IDQwcHg7XHJcblx0aGVpZ2h0OiA0MHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTJkZWcsIHJnYmEoMjU1LDI1NSwyNTUsLjQpIC01MCUsIHJnYmEoMjU1LDI1NSwyNTUsMCkgMTI1JSk7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuNSk7XHJcblx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG5cdC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG5cclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Zm9udC1zaXplOiAyNHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-public-profile',
                templateUrl: './public-profile.component.html',
                styleUrls: ['./public-profile.component.css']
            }]
    }], function () { return [{ type: _services_public_profile_service__WEBPACK_IMPORTED_MODULE_1__["PublicProfileService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] }]; }, null); })();


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function RegisterComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.registrationError);
} }
function RegisterComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "FirstName is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "minimum 2 characters is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_14_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "maximum 20 characters is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_div_14_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterComponent_div_14_div_2_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RegisterComponent_div_14_div_3_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.f.firstname.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.f.firstname.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.f.firstname.errors.maxlength);
} }
function RegisterComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "lastName is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "minimum 1 characters is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_19_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "maximum 20 characters is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_div_19_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterComponent_div_19_div_2_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RegisterComponent_div_19_div_3_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.f.lastname.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.f.lastname.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.f.lastname.errors.maxlength);
} }
function RegisterComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Date Of Birth is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_div_24_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.f.dob.errors.required);
} }
function RegisterComponent_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "EmailId is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_29_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please verify your emailId");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_div_29_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterComponent_div_29_div_2_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.f.email.errors.email);
} }
function RegisterComponent_p_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "User already present");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "UserName is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_36_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Minimum 2 characters is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_36_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Maximum 15 characters is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_div_36_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterComponent_div_36_div_2_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RegisterComponent_div_36_div_3_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.f.username.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.f.username.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.f.username.errors.maxlength);
} }
function RegisterComponent_div_44_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_44_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Passwords must contain at least 1 upper case letter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Passwords must contain at least 1 lower case letter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Passwords must contain at least 1 number or special character");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Passwords must contain at least 8 characters in length");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_div_44_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterComponent_div_44_div_2_Template, 10, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.f.password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.f.password.errors.pattern);
} }
function RegisterComponent_p_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password and Confirm Password doesn't match");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
const _c1 = function (a0, a1) { return { "fa-eye-slash": a0, "fa-eye": a1 }; };
class RegisterComponent {
    constructor(http, authService, router, titleService, metaTagService) {
        this.http = http;
        this.authService = authService;
        this.router = router;
        this.titleService = titleService;
        this.metaTagService = metaTagService;
        this.fieldTextType = false;
        this.fieldTextType1 = false;
        this.availableUsers = [];
        this.authService.getAllUsers().subscribe((data) => {
            this.availableUsers = data;
            // console.log("Available users",this.availableUsers);
        });
    }
    ngOnInit() {
        this.titleService.setTitle("Register");
        this.metaTagService.addTags([
            { name: "description", content: "Sign Up here to try out the best out of Bloggle" },
            { name: "author", content: "Piyush Chouhan M, Nishant Bhushan, Kedar R, Mohanavel R, Kumaran R" },
            { name: "robots", content: "index,follow" },
            { name: "keywords", content: "Register, Sign up, sign" },
            { httpEquiv: 'Content-Type', content: "text/html", charset: "UTF-8" }
        ]);
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    get f() { return this.registerForm.controls; }
    checkUserName() {
        this.nameError = false;
        // console.log(this.registerForm.value.username);
        this.availableUsers.forEach(user => {
            if (user == this.registerForm.value.username) {
                this.nameError = true;
                return;
            }
        });
    }
    checkPassword() {
        this.confirmPasswordError = false;
        if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
            this.confirmPasswordError = true;
        }
    }
    onSubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.submitted = true;
            if (this.registerForm.invalid) {
                return;
            }
            if (this.registerForm.dirty && this.registerForm.valid) {
                if (this.registerForm.value.email === null || this.registerForm.value.password === null) {
                    this.registerForm.reset();
                }
                else {
                    this.authService.register(this.registerForm.value)
                        .subscribe((data) => {
                        if (data != null) {
                            this.authService.login(this.registerForm.value)
                                .subscribe((response) => {
                                // console.log(response);
                                localStorage.setItem('User', JSON.stringify(response));
                                this.router.navigate(['/home']);
                                this.authService.isLoggedIn.next(true);
                                this.authService.userAuthenticated = true;
                                this.registerForm.reset();
                            });
                        }
                    }, (err) => {
                        this.registerForm.reset();
                        this.authService.isLoggedIn.next(false);
                        this.authService.userAuthenticated = false;
                        if (err.status === 400) {
                            this.registrationError = "Invalid Form Data.";
                            // console.log(this.registrationError);
                        }
                        else {
                            this.registrationError = "Technical Error occurred.";
                            // console.log(this.registrationError);  
                        }
                    });
                }
            }
        });
    }
    toggleFieldTextType() {
        this.fieldTextType = !this.fieldTextType;
    }
    toggleFieldTextType1() {
        this.fieldTextType1 = !this.fieldTextType1;
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Meta"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 57, vars: 39, consts: [["id", "start", 1, "container"], [1, "row"], [1, "col-lg-10", "col-xl-9", "mx-auto"], [1, "card", "card-signin", "flex-row", "my-5"], [1, "card-img-left", "d-none", "d-md-flex"], [1, "card-body"], [1, "card-title", "text-center"], ["class", "text-center", "style", "color:red;font-weight:bold", 4, "ngIf"], [1, "form-signin", 3, "formGroup", "submit"], [1, "form-label-group"], ["type", "text", "id", "inputFirstName", "placeholder", "FirstName", "formControlName", "firstname", "required", "", "autofocus", "", 1, "form-control", 3, "ngClass"], ["for", "inputFirstName"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "id", "inputLastName", "placeholder", "LastName", "formControlName", "lastname", "required", "", 1, "form-control", 3, "ngClass"], ["for", "inputLastName"], ["type", "date", "id", "inputDOB", "placeholder", "DOB", "formControlName", "dob", "required", "", 1, "form-control", 3, "ngClass"], ["for", "inputDOB"], ["type", "email", "id", "inputEmail", "placeholder", "Email Id", "formControlName", "email", "required", "", 1, "form-control", 3, "ngClass"], ["for", "inputEmail"], [1, "my-4"], ["type", "text", "id", "inputUserame", "placeholder", "Username", "formControlName", "username", "required", "", 1, "form-control", 3, "ngClass", "keyup"], ["for", "inputUserame"], ["style", "font-size: 80%; color: #dc3545;", 4, "ngIf"], [1, "form-label-group", "input-group"], ["id", "inputPassword", "pattern", "(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$", "placeholder", "Password", "formControlName", "password", "required", "", 1, "form-control", 3, "type", "ngClass"], ["for", "inputPassword", 2, "width", "90%"], [1, "input-group-append"], [1, "input-group-text"], [1, "fa", 2, "color", "mediumblue", 3, "ngClass", "click"], ["id", "inputConfirmPassword", "placeholder", "Password", "formControlName", "confirmPassword", "required", "", 1, "form-control", 3, "type", "keyup"], ["for", "inputConfirmPassword", 2, "width", "90%"], ["type", "submit", 1, "btn", "btn-lg", "btn-success", "btn-block", "text-uppercase", 3, "disabled"], ["href", "/login", 1, "d-block", "text-center", "mt-2", "small", 2, "color", "green"], [1, "text-center", 2, "color", "red", "font-weight", "bold"], [1, "invalid-feedback"], [4, "ngIf"], [2, "font-size", "80%", "color", "#dc3545"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, RegisterComponent_p_8_Template, 2, 1, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function RegisterComponent_Template_form_submit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "FirstName");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, RegisterComponent_div_14_Template, 4, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "LastName");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RegisterComponent_div_19_Template, 4, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Date Of Birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, RegisterComponent_div_24_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, RegisterComponent_div_29_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "hr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function RegisterComponent_Template_input_keyup_32_listener() { return ctx.checkUserName(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, RegisterComponent_p_35_Template, 2, 0, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, RegisterComponent_div_36_Template, 4, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_i_click_43_listener() { return ctx.toggleFieldTextType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, RegisterComponent_div_44_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function RegisterComponent_Template_input_keyup_46_listener() { return ctx.checkPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Confirm password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_i_click_51_listener() { return ctx.toggleFieldTextType1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, RegisterComponent_p_52_Template, 2, 0, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Already a user? Login here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registrationError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c0, ctx.submitted && ctx.f.firstname.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.firstname.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](23, _c0, ctx.submitted && ctx.f.lastname.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.lastname.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](25, _c0, ctx.submitted && ctx.f.dob.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.dob.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](27, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](29, _c0, ctx.submitted && ctx.f.username.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nameError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.username.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.fieldTextType ? "text" : "password")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](31, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](33, _c1, !ctx.fieldTextType, ctx.fieldTextType));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.fieldTextType1 ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](36, _c1, !ctx.fieldTextType1, ctx.fieldTextType1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.confirmPasswordError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.registerForm.dirty);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"]], styles: [":root {\r\n    --input-padding-x: 1rem;\r\n    --input-padding-y: .5rem;\r\n}\r\n\r\n.card-signin[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    border-radius: 1rem;\r\n    \r\n\r\n    box-shadow: 0 0 15px #20cdfd,\r\n\t\t\t\t0 0 25px #20cdfd,\r\n\t\t\t\t0 0 45px #20cdfd,\r\n\t\t\t\t0 0 70px #20cdfd;\r\n\r\n    overflow: hidden;\r\n}\r\n\r\n.card-signin[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\r\n    margin-bottom: 2rem;\r\n    font-weight: 300;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.card-signin[_ngcontent-%COMP%]   .card-img-left[_ngcontent-%COMP%] {\r\n    width: 45%;\r\n    \r\n    background: scroll center url('https://wallpapercave.com/wp/wp2856050.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.input-group-text[_ngcontent-%COMP%]{\r\n    border-top-right-radius: 2rem;\r\n    border-bottom-right-radius: 2rem;\r\n}\r\n\r\n.input-group-append[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 80%;\r\n    border-radius: 5rem;\r\n    letter-spacing: .1rem;\r\n    font-weight: bold;\r\n    padding: 0.5rem;\r\n    transition: all 0.2s;\r\n}\r\n\r\n.form-label-group[_ngcontent-%COMP%] {\r\nposition: relative;\r\nmargin-bottom: 0.5rem;\r\n}\r\n\r\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    height: auto;\r\n    border-radius: 2rem;\r\n}\r\n\r\n.form-label-group[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%], .form-label-group[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\r\n    padding: var(--input-padding-y) var(--input-padding-x);\r\n}\r\n\r\n.form-label-group[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 0;\r\n    \r\n    line-height: 1.5;\r\n    color: #495057;\r\n    border: 1px solid transparent;\r\n    border-radius: .25rem;\r\n    transition: all .1s ease-in-out;\r\n}\r\n\r\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\r\n    color: transparent;\r\n}\r\n\r\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) {\r\n    padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\r\n    padding-bottom: calc(var(--input-padding-y) / 3);\r\n}\r\n\r\n.form-label-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown)    ~ label[_ngcontent-%COMP%] {\r\n        padding-top: calc(var(--input-padding-y) / 3);\r\n        padding-bottom: calc(var(--input-padding-y) / 3);\r\n        font-size: 12px;\r\n        color: #777;\r\n    }\r\n\r\n.btn-google[_ngcontent-%COMP%] {\r\n    color: white;\r\n    background-color: #ea4335;\r\n}\r\n\r\n.btn-facebook[_ngcontent-%COMP%] {\r\n    color: white;\r\n    background-color: #3b5998;\r\n}\r\n\r\n.btn-facebook[_ngcontent-%COMP%]:hover\r\n{\r\n    color:white;\r\n}\r\n\r\n.text-danger[_ngcontent-%COMP%]\r\n{\r\n    font-size:0.8rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLDJDQUEyQzs7SUFFM0M7OztvQkFHZ0I7O0lBRWhCLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLCtEQUErRDtJQUMvRCwyRUFBMkU7SUFDM0Usc0JBQXNCO0FBQzFCOztBQUdBO0lBQ0ksNkJBQTZCO0lBQzdCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG9CQUFvQjtBQUN4Qjs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQixxQkFBcUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLHNEQUFzRDtBQUMxRDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHNDQUFzQztJQUN0QyxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsK0JBQStCO0FBQ25DOztBQWtCQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDRFQUE0RTtJQUM1RSxnREFBZ0Q7QUFDcEQ7O0FBRUk7UUFDSSw2Q0FBNkM7UUFDN0MsZ0RBQWdEO1FBQ2hELGVBQWU7UUFDZixXQUFXO0lBQ2Y7O0FBRUo7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCA6cm9vdCB7XHJcbiAgICAtLWlucHV0LXBhZGRpbmcteDogMXJlbTtcclxuICAgIC0taW5wdXQtcGFkZGluZy15OiAuNXJlbTtcclxufVxyXG5cclxuLmNhcmQtc2lnbmluIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICAvKiBib3gtc2hhZG93OiAjMjBjZGZkIDBweCAyMnB4IDcwcHggNHB4OyAqL1xyXG5cclxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4ICMyMGNkZmQsXHJcblx0XHRcdFx0MCAwIDI1cHggIzIwY2RmZCxcclxuXHRcdFx0XHQwIDAgNDVweCAjMjBjZGZkLFxyXG5cdFx0XHRcdDAgMCA3MHB4ICMyMGNkZmQ7XHJcblxyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uY2FyZC1zaWduaW4gLmNhcmQtdGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLmNhcmQtc2lnbmluIC5jYXJkLWltZy1sZWZ0IHtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICAvKiBMaW5rIHRvIHlvdXIgYmFja2dyb3VuZCBpbWFnZSB1c2luZyBpbiB0aGUgcHJvcGVydHkgYmVsb3chICovXHJcbiAgICBiYWNrZ3JvdW5kOiBzY3JvbGwgY2VudGVyIHVybCgnaHR0cHM6Ly93YWxscGFwZXJjYXZlLmNvbS93cC93cDI4NTYwNTAuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4gICAgXHJcbi5pbnB1dC1ncm91cC10ZXh0e1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDJyZW07XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMnJlbTtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwLWFwcGVuZCA6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvcm0tc2lnbmluIC5idG4ge1xyXG4gICAgZm9udC1zaXplOiA4MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAge1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbm1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAgPiBpbnB1dCxcclxuLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIHZhcigtLWlucHV0LXBhZGRpbmcteCk7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgLyogT3ZlcnJpZGUgZGVmYXVsdCBgPGxhYmVsPmAgbWFyZ2luICovXHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikge1xyXG4gICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0taW5wdXQtcGFkZGluZy15KSArIHZhcigtLWlucHV0LXBhZGRpbmcteSkgKiAoMiAvIDMpKTtcclxuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgLyAzKTtcclxufVxyXG5cclxuICAgIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIH4gbGFiZWwge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgLyAzKTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIC8gMyk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgfVxyXG5cclxuLmJ0bi1nb29nbGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhNDMzNTtcclxufVxyXG5cclxuLmJ0bi1mYWNlYm9vayB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xyXG59XHJcblxyXG4uYnRuLWZhY2Vib29rOmhvdmVyXHJcbntcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4udGV4dC1kYW5nZXJcclxue1xyXG4gICAgZm9udC1zaXplOjAuOHJlbTtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Meta"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/adminpage.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/adminpage.service.ts ***!
  \***********************************************/
/*! exports provided: AdminpageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminpageService", function() { return AdminpageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class AdminpageService {
    constructor(http) {
        this.http = http;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].SERVER_URL;
    }
    getAllBlogs() {
        return this.http.get(`${this.api}/api/Blog/allblogs`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            let tempArr = [];
            let blogI = {};
            let tempData = Object.values(data);
            tempData.forEach(blog => {
                blogI = {
                    Id: blog.Id,
                    Title: blog.Title,
                    Author: blog.Author,
                    CreatedTime: blog.CreatedTime,
                    Category: blog.Category
                };
                tempArr.push(blogI);
            });
            return tempArr;
        }));
    }
    deleteblog(id) {
        return this.http.delete(this.api + "/api/Blog/" + id);
    }
    deletefaq(id) {
        return this.http.delete(this.api + "/api/faq/" + id);
    }
    deletecomment(id) {
        return this.http.delete(this.api + "/api/comments/" + id);
    }
    getComment(id) {
        return this.http.get(this.api + '/api/comments/' + id);
    }
    getAllComments() {
        return this.http.get(`${this.api}/api/comments`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            let tempArr = [];
            let commentI = {};
            let tempData = Object.values(data);
            tempData.forEach(comment => {
                commentI = {
                    Id: comment.Id,
                    CommentValue: comment.CommentValue,
                    Author: comment.CreatedBy,
                    CreatedTime: comment.CreatedTime
                };
                tempArr.push(commentI);
            });
            return tempArr;
        }));
    }
    addFAQ(form) {
        return this.http.post(this.api + "/api/faq", {
            "Question": form.question,
            "Solution": form.solution
        });
    }
    updateFAQ(id, form) {
        return this.http.put(this.api + "/api/faq/" + id, {
            "Question": form.question,
            "Solution": form.solution
        });
    }
    getFAQid(id) {
        return this.http.get(this.api + "/api/faq/" + id);
    }
    getErrorLogs() {
        return this.http.get(`${this.api}/api/account/logs`, { responseType: 'text' });
    }
}
AdminpageService.ɵfac = function AdminpageService_Factory(t) { return new (t || AdminpageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AdminpageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminpageService, factory: AdminpageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminpageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuardService {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        return localStorage.getItem('User') ? true : this.router.createUrlTree(['/login']);
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth-interceptor.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/auth-interceptor.service.ts ***!
  \******************************************************/
/*! exports provided: AuthInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function() { return AuthInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");



class AuthInterceptorService {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(request, next) {
        const req = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.authService.isAuthenticated().access_token}`
            }
        });
        return next.handle(req);
    }
}
AuthInterceptorService.ɵfac = function AuthInterceptorService_Factory(t) { return new (t || AuthInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptorService, factory: AuthInterceptorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].SERVER_URL;
        this.isLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        if (localStorage.getItem('User')) {
            this.isLoggedIn.next(true);
            this.userAuthenticated = true;
        }
    }
    isAuthenticated() {
        const user = JSON.parse(localStorage.getItem('User'));
        return user ? user : 'No user';
    }
    autoLogin() {
        const userData = JSON.parse(localStorage.getItem('User'));
        if (!userData)
            return;
        console.log("autologin userdata..");
        if (userData.access_token) {
            const expirationDuration = new Date(parseInt(userData.expires_in) * 1000).getTime();
            this.autoLogout(expirationDuration);
        }
    }
    autoLogout(expirationDuration) {
        console.log("autologout started!");
        this.tokenExpirationTimer = setTimeout(() => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Info!',
                text: "Your session has been timed out",
                icon: 'info',
                confirmButtonText: 'Close'
            });
            this.logOut();
        }, expirationDuration);
    }
    logOut() {
        this.router.navigate(['/login']);
        localStorage.removeItem('User');
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
    }
    handleError(errorResponse) {
        let errorMessage = 'An unknown error occurred';
        if (!errorResponse.error || !errorResponse.error.message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorResponse.error.message);
        }
    }
    handleAuthentication(username, token, expiresIn) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new User(username, token, expirationDate);
        console.log("handleAuth : ");
        this.autoLogout(expiresIn * 1000);
        localStorage.setItem('User', JSON.stringify(user));
    }
    getAllUsers() {
        return this.http.get(`${this.api}/api/account/allusers`);
    }
    loginWithGoogle(accessToken) {
        return this.http.get(`${this.api}/api/account/loginwithGoogle?accessToken=${accessToken}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(responseData => {
            this.handleAuthentication(responseData.userName, responseData.access_token, responseData.expires_in);
        }));
    }
    login(credentials) {
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .set('username', credentials.username)
            .set('password', credentials.password)
            .set('grant_type', 'password');
        return this.http.post(`${this.api}/Token`, body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
                .set('Content-Type', 'application/x-www-form-urlencoded')
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(responseData => {
            this.handleAuthentication(responseData.userName, responseData.access_token, responseData.expires_in);
        }));
    }
    register(userData) {
        return this.http.post(`${this.api}/api/account/register`, {
            "UserName": userData.username,
            "FirstName": userData.firstname,
            "LastName": userData.lastname,
            "Password": userData.password,
            "ConfirmPassword": userData.password,
            "Email": userData.email,
            "DOB": userData.dob
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();
class User {
    constructor(username, access_token, expires_in) {
        this.username = username;
        this.access_token = access_token;
        this.expires_in = expires_in;
    }
    get token() {
        if (!this.expires_in || new Date() > this.expires_in)
            return null;
        return this.access_token;
    }
}


/***/ }),

/***/ "./src/app/services/blog.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/blog.service.ts ***!
  \******************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");







class BlogService {
    constructor(http, sanitizer) {
        this.http = http;
        this.sanitizer = sanitizer;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_URL;
    }
    getFeaturingBlogs(blogType, perPage) {
        return this.http.get(`${this.api}/api/Blog/feature?blogType=${blogType}&perPage=${perPage}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
            let tempArr = [];
            let blogI = {};
            let tempData = Object.values(data);
            tempData.forEach((blog) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                blogI = {
                    Id: blog.Id,
                    Title: blog.Title,
                    Subtitle: blog.Subtitle,
                    Author: blog.Author,
                    MediaId: blog.MediaId,
                    Category: blog.Category,
                    Likes: blog.Likes,
                    Media: null,
                    CreatedTime: blog.CreatedTime,
                    LastUpdatedTime: blog.LastUpdatedTime
                };
                tempArr.push(blogI);
            }));
            return tempArr;
        }));
    }
    getCategoryXBlogs(categoryId) {
        return this.http.get(`${this.api}/api/Blog/category?category=${categoryId}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
            let tempArr = [];
            let technologyI = {};
            let tempData = Object.values(data);
            tempData.forEach((blog) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                technologyI = {
                    Id: blog.Id,
                    Title: blog.Title,
                    Subtitle: blog.Subtitle,
                    Author: blog.Author,
                    MediaId: blog.MediaId,
                    Category: blog.Category,
                    Likes: blog.Likes,
                    Media: null,
                    CreatedTime: blog.CreatedTime,
                    LastUpdatedTime: blog.LastUpdatedTime
                };
                tempArr.push(technologyI);
            }));
            return tempArr;
        }));
    }
    ImageAdder(blog) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (blog.MediaId != null) {
                let baseImage = yield this.getImage(blog.MediaId);
                let objectURL = URL.createObjectURL(baseImage);
                blog['Media'] = this.sanitizer.bypassSecurityTrustUrl(objectURL);
            }
        });
    }
    getImage(imageUrl) {
        return this.http.get(this.api + '/api/media/' + imageUrl, { responseType: 'blob' }).toPromise();
    }
    //*****************************************Single Blog Service ***********************************//
    getSingleBlog(Id) {
        return this.http.get(this.api + '/api/Blog/' + Id);
    }
    UpdateComments(Comment) {
        return this.http.post(this.api + '/api/comments', Comment);
    }
    /************************************************Get All Categories***************************** */
    getAllCategories() {
        return this.http.get(this.api + '/api/Categories');
    }
    /****************************Update Image****************************************************** */
    updateImage(form) {
        return this.http.post(this.api + '/api/media', form);
    }
    /*********************************Posting a Blog************************************************* */
    createBlog(form, currentUser, mediaId) {
        return this.http.post(this.api + '/api/Blog', {
            "Title": form.Title,
            "Subtitle": form.Subtitle,
            "Content": form.Editor,
            "CategoryId": form.Category,
            "Author": currentUser,
            "Likes": 0,
            "CreatedTime": new Date(),
            "LastUpdatedTime": new Date(),
            "MediaId": mediaId
        });
    }
    updateBlog(form, currentUser, blogId, Likes, mediaId) {
        return this.http.put(this.api + '/api/Blog/' + blogId, {
            "Title": form.Title,
            "Subtitle": form.Subtitle,
            "Content": form.Editor,
            "CategoryId": form.Category,
            "Author": currentUser,
            "Likes": Likes,
            "LastUpdatedTime": new Date(),
            "MediaId": mediaId,
            "CreatedTime": new Date()
        });
    }
    /*********************************** Search Blogs using Category and Input *********************** */
    searchBlogs(categoryId = 0, searchValue) {
        return this.http.get(`${this.api}/api/Blog/searchBlogs?categoryId=${categoryId}&searchValue=${searchValue}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
            let tempArr = [];
            let technologyI = {};
            let tempData = Object.values(data);
            tempData.forEach((blog) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                technologyI = {
                    Id: blog.Id,
                    Title: blog.Title,
                    Subtitle: blog.Subtitle,
                    Content: blog.Content,
                    CategoryId: blog.CategoryId,
                    MediaId: blog.MediaId,
                    Media: null,
                    Author: blog.Author,
                    CategoryName: blog.CategoryNavigator.CategoryName,
                    Likes: blog.Likes,
                    CreatedTime: blog.CreatedTime,
                    LastUpdatedTime: blog.LastUpdatedTime
                };
                tempArr.push(technologyI);
            }));
            return tempArr;
        }));
    }
    /************************** Add Likes **********************************/
    updateLike(blogId) {
        return this.http.get(`${this.api}/api/Blog/addlike?blogId=${blogId}`);
    }
    /************************* Add Bookmark *******************************/
    updateBookmark(blogId, userName) {
        return this.http.post(`${this.api}/api/bookmark`, {
            "BlogId": blogId,
            "UserId": userName
        });
    }
    /********************************Delete Comment**************************/
    deleteComment(id) {
        return this.http.delete(this.api + "/api/comments/" + id);
    }
    addViews(id) {
        return this.http.get(`${this.api}/api/blog/addviews?blogId=${id}`);
    }
}
BlogService.ɵfac = function BlogService_Factory(t) { return new (t || BlogService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"])); };
BlogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BlogService, factory: BlogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BlogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/contactus.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/contactus.service.ts ***!
  \***********************************************/
/*! exports provided: ContactusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusService", function() { return ContactusService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");



class ContactusService {
    constructor(fireservice) {
        this.fireservice = fireservice;
    }
    create_Newemployee(Record) {
        return this.fireservice.collection('Employee').add(Record);
    }
    create_subscribe(Record1) {
        return this.fireservice.collection('Subscribe').add(Record1);
    }
}
ContactusService.ɵfac = function ContactusService_Factory(t) { return new (t || ContactusService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
ContactusService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactusService, factory: ContactusService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactusService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/dashboard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/dashboard.service.ts ***!
  \***********************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");







class DashboardService {
    constructor(httpclient, _authservices, _sanitizer) {
        this.httpclient = httpclient;
        this._authservices = _authservices;
        this._sanitizer = _sanitizer;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVER_URL;
    }
    getDashboard() {
        return this.httpclient.get(`${this.api}/api/Blog/blogsOfUser?username=${this._authservices.isAuthenticated().userName}`);
    }
    getBookMark() {
        return this.httpclient.get(`${this.api}/api/bookmark`);
    }
    getComment() {
        return this.httpclient.get(`${this.api}/api/comments?username=1`);
    }
    getImage(imageUrl) {
        return this.httpclient.get(this.api + '/api/media/' + imageUrl, { responseType: 'blob' }).toPromise();
    }
    deleteComment(id) {
        return this.httpclient.delete(this.api + "/api/comments/" + id);
    }
    deleteBookmark(id) {
        return this.httpclient.delete(this.api + "/api/bookmark/" + id);
    }
    deleteBlog(id) {
        return this.httpclient.delete(this.api + "/api/Blog/" + id);
    }
    ImageAdder(blog) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (blog.MediaId != null) {
                let baseImage = yield this.getImage(blog.MediaId);
                let objectURL = URL.createObjectURL(baseImage);
                blog['Media'] = this._sanitizer.bypassSecurityTrustUrl(objectURL);
            }
        });
    }
}
DashboardService.ɵfac = function DashboardService_Factory(t) { return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"])); };
DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DashboardService, factory: DashboardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/faq-service.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/faq-service.service.ts ***!
  \*************************************************/
/*! exports provided: FaqServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqServiceService", function() { return FaqServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class FaqServiceService {
    constructor(http) {
        this.http = http;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].SERVER_URL;
    }
    getFAQList() {
        return this.http.get(`${this.api}/api/faq`);
    }
    votingMeter(id, votetype) {
        return this.http.get(`${this.api}/api/FAQ/vote?id=${id}&votetype=${votetype}`);
    }
}
FaqServiceService.ɵfac = function FaqServiceService_Factory(t) { return new (t || FaqServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
FaqServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FaqServiceService, factory: FaqServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/services/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");







































const MaterialComponents = [
    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
    _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__["MatProgressBarModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__["MatProgressSpinnerModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatRippleModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__["MatSidenavModule"],
    _angular_material_slider__WEBPACK_IMPORTED_MODULE_28__["MatSliderModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_29__["MatSlideToggleModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__["MatSnackBarModule"],
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__["MatSortModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_32__["MatTableModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__["MatTabsModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_34__["MatToolbarModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_35__["MatTooltipModule"],
    _angular_material_tree__WEBPACK_IMPORTED_MODULE_36__["MatTreeModule"],
    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_37__["OverlayModule"],
];
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            MaterialComponents
        ], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_28__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_29__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_32__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_34__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_35__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_36__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_37__["OverlayModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_28__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_29__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_32__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_34__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_35__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_36__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_37__["OverlayModule"]], exports: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_27__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_28__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_29__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_31__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_32__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_34__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_35__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_36__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_37__["OverlayModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    MaterialComponents
                ],
                exports: [
                    MaterialComponents
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/profile.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/profile.service.ts ***!
  \*********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ProfileService {
    constructor(http) {
        this.http = http;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].SERVER_URL;
    }
    updateUser(userData) {
        return this.http.put(`${this.api}/api/Account/UpdateUser`, {
            "Email": userData.Email,
            "About": userData.About,
            "Facebook": userData.Facebook,
            "Twitter": userData.Twitter,
            "PhoneNumber": userData.PhoneNumber,
            "Instagram": userData.Instagram,
            "ProfilePicture": userData.ProfilePicture
        });
    }
    updatePassword(passData) {
        return this.http.post(`${this.api}/api/Account/ChangePassword`, {
            "OldPassword": passData.OldPassword,
            "NewPassword": passData.NewPassword,
            "ConfirmPassword": passData.ConfirmPassword
        });
    }
    getUserInfo(userName) {
        return this.http.get(`${this.api}/api/Account/UserInfo?userName=${userName}`);
    }
    getImage(imageUrl) {
        return this.http.get(this.api + '/api/media/' + imageUrl, { responseType: 'blob' });
    }
    updateImage(form) {
        return this.http.post(`${this.api}/api/media`, form);
    }
}
ProfileService.ɵfac = function ProfileService_Factory(t) { return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfileService, factory: ProfileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/public-profile.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/public-profile.service.ts ***!
  \****************************************************/
/*! exports provided: PublicProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicProfileService", function() { return PublicProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class PublicProfileService {
    constructor(http) {
        this.http = http;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].SERVER_URL;
    }
    getUserInfo(userName) {
        return this.http.get(`${this.api}/api/Account/UserInfo?userName=${userName}`);
    }
    getImage(imageUrl) {
        return this.http.get(this.api + '/api/media/' + imageUrl, { responseType: 'blob' });
    }
}
PublicProfileService.ɵfac = function PublicProfileService_Factory(t) { return new (t || PublicProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PublicProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PublicProfileService, factory: PublicProfileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/report.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/report.service.ts ***!
  \********************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ReportService {
    constructor(http) {
        this.http = http;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].SERVER_URL;
    }
    getReports() {
        return this.http.get(`${this.api}/api/report`);
    }
    createReport(report) {
        return this.http.post(`${this.api}/api/report`, {
            "ContentType": report.ContentType,
            "ContentId": report.ContentId,
            "ReportType": report.ReportType,
            "ReportedCount": 1
        });
    }
    deleteReport(id) {
        return this.http.delete(`${this.api}/api/report/${id}`);
    }
}
ReportService.ɵfac = function ReportService_Factory(t) { return new (t || ReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ReportService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReportService, factory: ReportService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/toxicity-filter.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/toxicity-filter.service.ts ***!
  \*****************************************************/
/*! exports provided: ToxicityFilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToxicityFilterService", function() { return ToxicityFilterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");





class ToxicityFilterService {
    constructor(httpBackend) {
        this.perspectiveAPI = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].PERSPECTIVE_API + src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].API_KEY;
        this.http = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"](httpBackend);
    }
    analyseContent(data) {
        return this.http.post(this.perspectiveAPI, {
            "comment": {
                "text": data
            },
            "requestedAttributes": {
                "TOXICITY": {
                // "scoreThreshold": 0.4
                },
            },
            "languages": ["en"],
            "doNotStore": true
        });
    }
}
ToxicityFilterService.ɵfac = function ToxicityFilterService_Factory(t) { return new (t || ToxicityFilterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpBackend"])); };
ToxicityFilterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToxicityFilterService, factory: ToxicityFilterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToxicityFilterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpBackend"] }]; }, null); })();


/***/ }),

/***/ "./src/app/utility/alert-dialog/alert-dialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/utility/alert-dialog/alert-dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: AlertDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertDialogComponent", function() { return AlertDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");




class AlertDialogComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
    }
}
AlertDialogComponent.ɵfac = function AlertDialogComponent_Factory(t) { return new (t || AlertDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
AlertDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertDialogComponent, selectors: [["app-alert-dialog"]], decls: 4, vars: 2, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""]], template: function AlertDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.title, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.content, "\n");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V0aWxpdHkvYWxlcnQtZGlhbG9nL2FsZXJ0LWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-alert-dialog',
                templateUrl: './alert-dialog.component.html',
                styleUrls: ['./alert-dialog.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/utility/confirmation/confirmation.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/utility/confirmation/confirmation.component.ts ***!
  \****************************************************************/
/*! exports provided: ConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function() { return ConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");





class ConfirmationComponent {
    constructor(confirmationDialog, data) {
        this.confirmationDialog = confirmationDialog;
        this.data = data;
    }
    ngOnInit() {
    }
    onNoClick() {
        this.confirmationDialog.close();
    }
    onYesClick() {
        this.data.confirmation = true;
        this.confirmationDialog.close(true);
    }
}
ConfirmationComponent.ɵfac = function ConfirmationComponent_Factory(t) { return new (t || ConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ConfirmationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmationComponent, selectors: [["app-confirmation"]], decls: 8, vars: 1, consts: [["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", 1, "btn", "btn-danger", 3, "click"], ["mat-button", "", 1, "btn", "btn-success", 3, "click"]], template: function ConfirmationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationComponent_Template_button_click_4_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationComponent_Template_button_click_6_listener() { return ctx.onYesClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Are you sure want to ", ctx.data.process, " this ?");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["#yes[_ngcontent-%COMP%]\r\n{\r\n    background-color: green;\r\n}\r\n\r\n#no[_ngcontent-%COMP%]\r\n{\r\n    background-color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbGl0eS9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3V0aWxpdHkvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3llc1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuI25vXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirmation',
                templateUrl: './confirmation.component.html',
                styleUrls: ['./confirmation.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/utility/darkmode/modeConfig.ts":
/*!************************************************!*\
  !*** ./src/app/utility/darkmode/modeConfig.ts ***!
  \************************************************/
/*! exports provided: DarkModeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkModeConfig", function() { return DarkModeConfig; });
class DarkModeConfig {
    darkModeToggler(mode) {
        if (mode) {
            var body = document.body;
            body.classList.add("dark-mode");
            var totalTitles = document.getElementsByClassName('fh5co_magna');
            for (let index = 0; index < totalTitles.length; index++) {
                totalTitles[index].style.color = "#fff";
            }
            var totalHeadings = document.getElementsByClassName('fh5co_heading');
            for (let index = 0; index < totalHeadings.length; index++) {
                totalHeadings[index].style.color = "#fff";
            }
            var totalTimings = document.getElementsByClassName('fh5co_mini_time');
            for (let index = 0; index < totalTimings.length; index++) {
                totalTimings[index].style.color = "#fff";
            }
            var totalSubTitles = document.getElementsByClassName('fh5co_consectetur');
            for (let index = 0; index < totalSubTitles.length; index++) {
                totalSubTitles[index].style.color = "alicblue";
            }
            // var totalFA = document.getElementsByClassName('fa-lg');
            // for (let index = 0; index < totalFA.length; index++) {
            //     (<HTMLElement>totalFA[index]).style.color = "white";
            // }
            var totalFAQBtnLink = document.getElementsByClassName('btn-link');
            for (let index = 0; index < totalFAQBtnLink.length; index++) {
                totalFAQBtnLink[index].style.color = "white";
            }
            var commentsTitle = document.getElementsByClassName('comments-title');
            for (let index = 0; index < commentsTitle.length; index++) {
                commentsTitle[index].style.color = "white";
            }
            var commentsName = document.getElementsByClassName('comment-author');
            for (let index = 0; index < commentsName.length; index++) {
                commentsName[index].style.color = "white";
            }
            var codeSnippets = document.getElementsByClassName('ql-syntax');
            for (let index = 0; index < codeSnippets.length; index++) {
                codeSnippets[index].style.color = "white";
                codeSnippets[index].style.backgroundColor = "#300AAB";
            }
            var rows = document.getElementsByClassName('tablerow');
            for (let index = 0; index < rows.length; index++) {
                rows[index].style.color = "#300AAB";
                rows[index].style.backgroundColor = "aliceblue";
            }
            var footer = document.getElementsByClassName('fh5co_footer_bg');
            for (let index = 0; index < footer.length; index++) {
                footer[index].style.backgroundColor = "#02001b";
            }
            var viewsEye = document.getElementById('viewsCounter');
            if (viewsEye)
                viewsEye.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073";
        }
        else {
            var body = document.body;
            body.classList.remove("dark-mode");
            var totalTitles = document.getElementsByClassName('fh5co_magna');
            for (let index = 0; index < totalTitles.length; index++) {
                totalTitles[index].style.color = "#000";
            }
            var totalHeadings = document.getElementsByClassName('fh5co_heading');
            for (let index = 0; index < totalHeadings.length; index++) {
                totalHeadings[index].style.color = "#222";
            }
            var totalTimings = document.getElementsByClassName('fh5co_mini_time');
            for (let index = 0; index < totalTimings.length; index++) {
                totalTimings[index].style.color = "#222";
            }
            var totalSubTitles = document.getElementsByClassName('fh5co_consectetur');
            for (let index = 0; index < totalSubTitles.length; index++) {
                totalSubTitles[index].style.color = "#777";
            }
            // var totalFA = document.getElementsByClassName('fa-lg');
            // for (let index = 0; index < totalFA.length; index++) {
            //     (<HTMLElement>totalFA[index]).style.color = "black";
            // }  
            var totalFAQBtnLink = document.getElementsByClassName('btn-link');
            for (let index = 0; index < totalFAQBtnLink.length; index++) {
                totalFAQBtnLink[index].style.color = "black";
            }
            var commentsTitle = document.getElementsByClassName('comments-title');
            for (let index = 0; index < commentsTitle.length; index++) {
                commentsTitle[index].style.color = "black";
            }
            var commentsName = document.getElementsByClassName('comment-author');
            for (let index = 0; index < commentsName.length; index++) {
                commentsName[index].style.color = "#383b43";
            }
            var codeSnippets = document.getElementsByClassName('ql-syntax');
            for (let index = 0; index < codeSnippets.length; index++) {
                codeSnippets[index].style.color = "#212529";
                codeSnippets[index].style.backgroundColor = "aliceblue";
            }
            var rows = document.getElementsByClassName('tablerow');
            for (let index = 0; index < rows.length; index++) {
                rows[index].style.color = "black";
                rows[index].style.backgroundColor = "aliceblue";
            }
            var footer = document.getElementsByClassName('fh5co_footer_bg');
            for (let index = 0; index < footer.length; index++) {
                footer[index].style.backgroundColor = "#222";
            }
            var viewsEye = document.getElementById('viewsCounter');
            if (viewsEye) {
                viewsEye.style.textShadow = "none";
            }
        }
    }
    navBarToggler(mode) {
        if (mode) {
            document.getElementsByTagName('nav')[0].classList.toggle('navbar-light');
            document.getElementsByTagName('nav')[0].classList.add('navbar-dark');
        }
        else {
            document.getElementsByTagName('nav')[0].classList.toggle('navbar-dark');
            document.getElementsByTagName('nav')[0].classList.add('navbar-light');
        }
    }
    getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
}


/***/ }),

/***/ "./src/app/utility/report-content/report-content.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/utility/report-content/report-content.component.ts ***!
  \********************************************************************/
/*! exports provided: ReportContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportContentComponent", function() { return ReportContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/report.service */ "./src/app/services/report.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");












function ReportContentComponent_mat_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const types_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", types_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", types_r1, " ");
} }
class ReportContentComponent {
    constructor(dialogRef, data, service) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.service = service;
        this.reportTypes = ["Sexual Content", "Violent or repulsive content", "Hateful or abusive content", "Spam or misleading"];
    }
    onNoClick() {
        this.dialogRef.close();
    }
    reportContent() {
        var report = {};
        report["ContentType"] = this.data.ContentType;
        report["ContentId"] = this.data.ContentId;
        report["ReportType"] = this.selectedValue;
        this.service.createReport(report).subscribe((response) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Done!',
                text: 'Successfully reported',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            });
            this.dialogRef.close();
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Error!',
                text: 'Problem in reporting',
                icon: 'error',
                showConfirmButton: false,
                timer: 1500
            });
            this.dialogRef.close();
        });
        // console.log(this.selectedValue);
    }
}
ReportContentComponent.ɵfac = function ReportContentComponent_Factory(t) { return new (t || ReportContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"])); };
ReportContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportContentComponent, selectors: [["app-report-content"]], decls: 33, vars: 4, consts: [["mat-dialog-title", "", 1, "text-center"], [1, "fa", "fa-lg", "fa-flag", 2, "color", "red"], ["mat-dialog-content", "", 2, "display", "grid"], [2, "text-align", "left"], [2, "text-align", "center"], ["colspan", "2"], ["appearance", "fill", 2, "display", "block"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 3, "click"], [3, "value"]], template: function ReportContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Report Content Wizard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Reporting Content:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Report Content Type :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Report Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReportContentComponent_Template_mat_select_ngModelChange_26_listener($event) { return ctx.selectedValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ReportContentComponent_mat_option_27_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportContentComponent_Template_button_click_29_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportContentComponent_Template_button_click_31_listener() { return ctx.reportContent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.ContentType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reportTypes);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3V0aWxpdHkvcmVwb3J0LWNvbnRlbnQvcmVwb3J0LWNvbnRlbnQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-report-content',
                templateUrl: './report-content.component.html',
                styleUrls: ['./report-content.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _services_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    // SERVER_URL : "https://www.bloggle.tech:2083"
    //SERVER_URL : "http://localhost:54096",
    SERVER_URL: "https://spammertech001-001-site1.gtempurl.com",
    API_KEY: "AIzaSyAxQ7UIfFZQjEBVM0EMImEQk9lYGx4XQKw",
    PERSPECTIVE_API: "https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=",
    EmailJS_ServiceID: "service_ni7o9k8",
    EmailJS_TemplateID: "template_c2gv6u8",
    EmailJS_PublicKey: "im-lAfyJF79-pbMWK"
};


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
    production: false,
    SERVER_URL: "https://spammertech001-001-site1.gtempurl.com",
    API_KEY: "AIzaSyAxQ7UIfFZQjEBVM0EMImEQk9lYGx4XQKw",
    PERSPECTIVE_API: "https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=",
    EmailJS_ServiceID: "service_ni7o9k8",
    EmailJS_TemplateID: "template_c2gv6u8",
    EmailJS_PublicKey: "im-lAfyJF79-pbMWK",
    firebase: {
        apiKey: "AIzaSyAtDf2CXKeeDbnqXGX_Um_jjeVuRJIHss4",
        authDomain: "contactform-27a37.firebaseapp.com",
        databaseURL: "https://contactform-27a37-default-rtdb.firebaseio.com",
        projectId: "contactform-27a37",
        storageBucket: "contactform-27a37.appspot.com",
        messagingSenderId: "903851678034",
        appId: "1:903851678034:web:d25f02b1c17fd8ef98828b",
        measurementId: "G-BDFH27G7JF"
    }
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

module.exports = __webpack_require__(/*! C:\ProgramData\Jenkins\.jenkins\workspace\gle-Frontend_Multibranch_netlify\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map