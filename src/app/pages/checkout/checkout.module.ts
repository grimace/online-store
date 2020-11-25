/**
 * Created by andrew.yang on 7/27/2017.
 */
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { checkoutRoutes } from "./checkout.routes";
import { SharedModule } from "../../shared/shared.module";
import { CheckoutComponent } from "./checkout.component";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(checkoutRoutes)
    ],
    declarations: [
        CheckoutComponent
    ]
})
export class CheckoutModule { }
