import { Component } from '@angular/core';

@Component({
	selector: 'app-css',
	template: `
    <p>
      css works!
    </p>
  `,
	styles: [`
p {
	color: maroon;
  	font-size: 25px;
  	font-weight: bold;
}  	
	`]
})
export class CssComponent {

}
