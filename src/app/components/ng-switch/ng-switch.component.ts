import { Component } from '@angular/core';

@Component({
	selector: 'app-ng-switch',
	templateUrl: './ng-switch.component.html',
	styles: [
	]
})
export class NgSwitchComponent {

	alertValue: string = 'info';

	switchClass(value: string) {

		this.alertValue = value;
	}
}
