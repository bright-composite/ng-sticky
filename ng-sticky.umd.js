(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['ng-sticky'] = {}),global.core,global.common));
}(this, (function (exports,core,common) { 'use strict';

var NgStickyDirective = (function () {
    /**
     * @param {?} el
     * @param {?} render
     */
    function NgStickyDirective(el, render) {
        this.el = el;
        this.render = render;
        this.sticked = true;
        this.selectedOffset = 0;
        this.parentOffsetTop = 0;
        this.parent = document.documentElement || document.body;
        this.addClass = 'fixed';
        this.offSet = 0;
        this.selectedOffset = this.el.nativeElement.offsetTop;
    }
    /**
     * @return {?}
     */
    NgStickyDirective.prototype.addSticky = function () {
        this.sticked = true;
        this.el.nativeElement.style.position = 'fixed';
        this.el.nativeElement.style.top = this.offSet + 'px';
        this.render.addClass(this.el.nativeElement, this.addClass);
    };
    /**
     * @return {?}
     */
    NgStickyDirective.prototype.removeSticky = function () {
        this.sticked = false;
        this.el.nativeElement.style.position = '';
        this.render.removeClass(this.el.nativeElement, this.addClass);
    };
    /**
     * @return {?}
     */
    NgStickyDirective.prototype.onScroll = function () {
        var /** @type {?} */ offset = this.el.nativeElement.offsetTop;
        this.parentOffsetTop = this.parent.scrollTop || 0;
        if (this.selectedOffset === 0) {
            this.selectedOffset = offset;
        }
        if (this.sticked === false) {
            this.selectedOffset = offset;
        }
        if ((this.parentOffsetTop + this.offSet) > this.selectedOffset) {
            this.addSticky();
        }
        else {
            this.removeSticky();
        }
    };
    return NgStickyDirective;
}());
NgStickyDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[ng-sticky]',
                exportAs: 'ng-sticky'
            },] },
];
/**
 * @nocollapse
 */
NgStickyDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
NgStickyDirective.propDecorators = {
    'parent': [{ type: core.Input },],
    'addClass': [{ type: core.Input },],
    'offSet': [{ type: core.Input },],
    'onScroll': [{ type: core.HostListener, args: ['window:scroll', [],] },],
};

var NgStickyModule = (function () {
    function NgStickyModule() {
    }
    /**
     * @return {?}
     */
    NgStickyModule.forRoot = function () {
        return {
            ngModule: NgStickyModule
        };
    };
    return NgStickyModule;
}());
NgStickyModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [
                    NgStickyDirective
                ],
                exports: [
                    NgStickyDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
NgStickyModule.ctorParameters = function () { return []; };

exports.NgStickyModule = NgStickyModule;
exports.NgStickyDirective = NgStickyDirective;

Object.defineProperty(exports, '__esModule', { value: true });

})));
