import { Component } from '@angular/core';

@Component({
	selector: 'app-ng-classes',
	templateUrl: './ng-classes.component.html'
})
export class NgClassesComponent {

	alertClass: string = 'alert-primary';
	btnValue: boolean = true;
	loading: boolean = false;

	execute() {

		this.loading = true;

		setTimeout(() => {
			this.loading = false;
		}, 3000);
	}
}
