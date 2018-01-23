import { Component, OnInit, Input } from '@angular/core';

import { Compound, AminoAcid, Polycyclic, Heterocyclic, Nucleobase, Vitamin } from '../../compound';

@Component({
   selector: '[app-compound-table-row]',
   template: `<td
      *ngFor="let col of columns"
      [class.bigger]="isOfTypeBoolean(compound[col])"
      [class.hide-img]="!formulaShown"
      innerHTML="{{evalBooleans(compound[col])}}"
   ></td>`,
   styleUrls: ['../compound-view/compound-view.component.css']
})
export class CompoundTableRowComponent implements OnInit {
   @Input() compound: Compound;
   @Input() columns: string[];
   @Input() formulaShown: boolean = false;

   constructor() { }

   ngOnInit() {
   }

   isOfTypeBoolean(input: any): boolean {
      return (typeof input === "boolean");
   }

   evalBooleans(input: any): string {
      if (typeof input === "boolean") {
         return input ? "✓" : "";
      }

      return input;
   }
}
