import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { SpringWithAngularSassSharedLibsModule, SpringWithAngularSassSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [SpringWithAngularSassSharedLibsModule, SpringWithAngularSassSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [SpringWithAngularSassSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SpringWithAngularSassSharedModule {
    static forRoot() {
        return {
            ngModule: SpringWithAngularSassSharedModule
        };
    }
}
