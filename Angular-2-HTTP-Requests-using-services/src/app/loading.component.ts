import { Component, Input } from '@angular/core';


@Component({
    selector: 'loader',
    styles: [``],
    templateUrl: `./loading.component.html`
})

export class loadingComponent {

    @Input() loading: boolean = false;
}