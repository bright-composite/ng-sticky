import { ElementRef, Renderer2 } from '@angular/core';
export declare class NgStickyDirective {
    private el;
    private render;
    private sticked;
    private selectedOffset;
    private parentOffsetTop;
    parent: HTMLElement;
    addClass: string;
    offSet: number;
    constructor(el: ElementRef, render: Renderer2);
    private addSticky();
    private removeSticky();
    onScroll(): void;
}
