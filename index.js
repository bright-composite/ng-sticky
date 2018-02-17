import { Directive, ElementRef, HostListener, Input, NgModule, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    { type: Directive, args: [{
                selector: '[ng-sticky]',
                exportAs: 'ng-sticky'
            },] },
];
/**
 * @nocollapse
 */
NgStickyDirective.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: Renderer2, },
]; };
NgStickyDirective.propDecorators = {
    'parent': [{ type: Input },],
    'addClass': [{ type: Input },],
    'offSet': [{ type: Input },],
    'onScroll': [{ type: HostListener, args: ['window:scroll', [],] },],
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
    { type: NgModule, args: [{
                imports: [
                    CommonModule
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

export { NgStickyModule, NgStickyDirective };
