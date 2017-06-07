import { Component } from '@angular/core';

@Component({
  moduleId:module.id,  
  selector: 'jumbotron',
  templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent {
    private heading:string;
    private para:string;
    private btntext:string;
    private link:string;
    constructor(){
        this.heading="Hello there";
        this.para ="This is a paragraph";
        this.btntext="A Bttton";
        this.link="/about";
    }
 }