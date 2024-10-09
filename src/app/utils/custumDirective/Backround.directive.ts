import { Directive, ElementRef, HostListener, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[background]'
})
export class BackgroundDirective implements OnInit{

    @Input() highlightColor: string = '';

    constructor( private element:ElementRef ) {}

    ngOnInit(): void {
        console.log('BackgroundDirective');
        this.element.nativeElement.style.backgroundColor = 'yellow';
        this.element.nativeElement.style.color = 'red';
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor || 'yellow');
    }
    
    @HostListener('mouseleave') onMouseLeave() {
        this.highlight('');
    }

    private highlight(color: string) {
        this.element.nativeElement.style.backgroundColor = color;
    }

}   