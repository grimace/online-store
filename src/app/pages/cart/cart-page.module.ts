/**
 * Created by andrew.yang on 7/31/2017.
 */

import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {CartPageComponent} from "./cart-page.component";
import {cartPageRoutes} from "./cart-page.routes";
import {QuantityControlComponent} from "../../components/quantity-control/quantity-control.component";
@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(cartPageRoutes)
    ],
    declarations: [
        CartPageComponent,
        QuantityControlComponent
    ]
})
export class CartPageModule { }