import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-edit-user',
	template: `
    <p>
      edit-user works!
    </p>
  `,
	styles: [
	]
})
export class EditUserComponent {

	constructor(private routes: ActivatedRoute) {

		routes.params.subscribe(params => {

			console.log(`Child Route ${params}`);
			console.log(params);
		});

		routes.parent?.params.subscribe(params => {

			console.log(`Parent Route ${params}`);
			console.log(params);
		});
	}
}
