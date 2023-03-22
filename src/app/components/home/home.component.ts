import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-home',
	template: `
	<h1>Dummies
		<small>Angular</small>
	</h1>
	<hr>

	<app-ng-switch></app-ng-switch>
	<hr>

	<p appHighlights [newColor]="'pink'">
		Directives example...
	</p>
	<hr>

	<app-ng-classes></app-ng-classes>
	<hr>

	<app-css></app-css>
	<p>This is a dummy from app.component.</p>
	<hr>

	<app-ng-styles></app-ng-styles>
	<hr>
    `,
	styles: [
	]
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

	constructor() {
		console.log("constructor");
	}

	ngOnInit(): void {
		console.log("ngOnInit");
	}

	ngOnChanges(changes: SimpleChanges): void {
		console.log("ngOnChanges");
	}

	ngDoCheck(): void {
		console.log("ngDoCheck");
	}

	ngAfterContentInit(): void {
		console.log("ngAfterContentInit");
	}

	ngAfterContentChecked(): void {
		console.log("ngAfterContentChecked");
	}

	ngAfterViewInit(): void {
		console.log("ngAfterViewInit");
	}

	ngAfterViewChecked(): void {
		console.log("ngAfterViewChecked");
	}

	ngOnDestroy(): void {
		console.log("ngOnDestroy");
	}
}
