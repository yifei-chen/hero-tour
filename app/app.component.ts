/**
 * Created by CYF on 16/8/20.
 */
import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <my-hero></my-hero>
  `
})
export class AppComponent {
    title = 'Tour of Heroes';
}