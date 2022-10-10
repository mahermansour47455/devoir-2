import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styles: [
  ]
})
export class BindingComponent implements OnInit {
 titre:string ="manupulation off data binding";
 statut : boolean =false;
 statut1 : boolean =true;
 nom :string ="maher mansour"

  constructor() { }

  ngOnInit(): void {
  }

}
