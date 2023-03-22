import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[appHighlights]'
})
export class HighlightsDirective {

	@Input() newColor: string = '';

	constructor(private elementRef: ElementRef) {

		console.log('Directive call.');

		elementRef.nativeElement.style.backgroundColor = 'yellow';
	}

	@HostListener('mouseenter') mouseentered() {

		console.log(this.newColor);

		this.highLight(this.newColor || 'yellow');
		// this.elementRef.nativeElement.style.backgroundColor = 'pink';
	}

	@HostListener('mouseleave') mouseout() {

		this.elementRef.nativeElement.style.backgroundColor = 'lightgreen';
	}

	highLight(color: string) {

		this.elementRef.nativeElement.style.backgroundColor = color;
	}
}
