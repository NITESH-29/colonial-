import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import 'style-loader!font-awesome/css/font-awesome.min.css';
import 'style-loader!primeng/resources/primeng.min.css';
import 'style-loader!primeng/resources/themes/omega/theme.css';
import 'style-loader!primeicons/primeicons.css';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
  // Disable logging in production
  // if (window) {
  //   window.console.log = function() { };
  // }
}

if (!localStorage.getItem('showConsole')) {
  localStorage.setItem('showConsole', '' + environment.showConsoleLogs);
}

// tslint:disable-next-line:triple-equals
if (localStorage.getItem('showConsole') == 'false') {
  if (window) {
    window.console.log = function() { };
  }
}

platformBrowserDynamic().bootstrapModule(AppModule);
