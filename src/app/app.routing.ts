import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductionContainer } from './pages/DictionaryList/container';
import { ImportContainer } from './pages/Import/container';
import { PluginsContainer } from './pages/Plugins/container';
import { BotsContainer } from './pages/Bots/container';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: ProductionContainer},
  { path: 'import', component: ImportContainer},
  { path: 'settings', component: PluginsContainer},
  { path: 'bots', component: BotsContainer},
];

export const routing = RouterModule.forRoot(routes);
