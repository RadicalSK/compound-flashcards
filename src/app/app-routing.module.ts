import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompoundViewComponent } from './components/compound-view/compound-view.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
   { path: 'type/:compoundType', component: CompoundViewComponent },
   { path: '',   redirectTo: '/type/aminoacid', pathMatch: 'full' },
   { path: '**', component: PageNotFoundComponent }
];

@NgModule({
   imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ]
})
export class AppRoutingModule { }
