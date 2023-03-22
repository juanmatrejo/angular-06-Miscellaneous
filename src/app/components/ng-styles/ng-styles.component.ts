import { Component } from '@angular/core';

@Component({
	selector: 'app-ng-styles',
	template: `

<p [style.fontSize.px]="tamanio">
ng-styles works!... This is a styles dummy...
</p>

<button class="btn btn-primary" (click)="tamanio = tamanio + 4">
	<i class="fa fa-3x fa-plus"></i>
</button>

<button class="btn btn-secondary" (click)="tamanio = tamanio - 4">
	<i class="fa fa-3x fa-minus"></i>
</button>

`,
	styles: [
	]
})
export class NgStylesComponent {

	tamanio: number = 20;

}
