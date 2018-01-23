import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Compound } from '../../compound';
import { AMINOACIDS, POLYCYCLICS, HETEROCYCLICS, NUCLEOBASES, VITAMINS } from '../../compound-lists';

@Component({
   selector: 'app-compound-view',
   templateUrl: './compound-view.component.html',
   styleUrls: ['./compound-view.component.css']
})
export class CompoundViewComponent implements OnInit {
   title: string;
   compounds: Compound[];
   columnNames: Object;
   formulaShown: boolean = false;

   isTestInProgress: boolean = false;
   nextCompoundToShow: number;
   alreadyShown: number[] = [];

   constructor(
      private route: ActivatedRoute,
      private location: Location
   ) { }

   ngOnInit() {
      this.route.paramMap.subscribe((paramMap: ParamMap) => {
         switch (paramMap.get('compoundType')) {
            case "aminoacid": {
               this.title = "Amino acids";
               this.compounds = AMINOACIDS;
               this.columnNames = {
                  name: "Name",
                  abbr3: "3-letter abbr.",
                  abbr1: "1-letter abbr.",
                  formulaUrl: "Formula",
                  essential: "Essential?"
               };
            }
            break;
            case "polycyclic": {
               this.title = "Polycyclic compounds";
               this.compounds = POLYCYCLICS;
               this.columnNames = {
                  name: "Name",
                  formulaUrl: "Formula"
               };
            }
            break;
            case "heterocyclic": {
               this.title = "Heterocyclic compounds";
               this.compounds = HETEROCYCLICS;
               this.columnNames = {
                  name: "Name",
                  formulaUrl: "Formula"
               };
            }
            break;
            case "nucleobase": {
               this.title = "Nucleobases";
               this.compounds = NUCLEOBASES;
               this.columnNames = {
                  name: "Name",
                  formulaUrl: "Formula",
                  primary: "Primary?"
               };
            }
            break;
            case "vitamin": {
               this.title = "Vitamins";
               this.compounds = VITAMINS;
               this.columnNames = {
                  genericName: "Generic name",
                  name: "Chemical name",
                  formulaUrl: "Formula",
                  solubility: "Solubility"
               };
            }
            break;
            default: this.location.back();
         }
         this.isTestInProgress = false;
         this.calculateNextToShow();
      });
   }

   columnNameKeys(): string[] {
      return Object.keys(this.columnNames);
   }

   columnNameValues(): string[] {
      return Object.values(this.columnNames);
   }

   toggleTest(element): void {
      this.isTestInProgress = !this.isTestInProgress;
      this.alreadyShown.length = 0;
   }

   showFormula(): void {
      this.formulaShown = true;
   }

   calculateNextToShow(): void {
      do {
         this.nextCompoundToShow = Math.floor(Math.random() * this.compounds.length);
      } while (this.alreadyShown.indexOf(this.nextCompoundToShow) >= 0);
   }

   next(button): void {
      this.alreadyShown.push(this.nextCompoundToShow);
      this.formulaShown = false;
      if (this.alreadyShown.length != this.compounds.length - 1) {
         this.calculateNextToShow();
      }
      else {
         button.disabled = true;
      }
   }
}
