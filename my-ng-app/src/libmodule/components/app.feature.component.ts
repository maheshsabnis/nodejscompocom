import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-component',
  template: `
    <h3>The Featre Component</h3>
  `
})
export class FeatureComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
