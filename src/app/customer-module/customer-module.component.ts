import { Component, OnInit } from "@angular/core";
import "halo-customer-module";

@Component({
  template: `
    <div>
      <halodoc-customer-module></halodoc-customer-module>
    </div>
  `
})
export class CustomerModuleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
