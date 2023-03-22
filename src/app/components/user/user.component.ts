import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html'
})
export class UserComponent {

	constructor(private router: ActivatedRoute) {

		router.params.subscribe(params => {

			console.log(`Parent route ${params}`);
			console.log(params);
		});
	}
}
