import { NgModule } from '@angular/core';

import { SpringWithAngularSassSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [SpringWithAngularSassSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [SpringWithAngularSassSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SpringWithAngularSassSharedCommonModule {}
