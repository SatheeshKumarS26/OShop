import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductsComponent } from './products/products.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';

const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'cart', component: CartComponent},
  { path: 'login', component: LoginComponent },
  { path: 'order-success', component: OrderSuccessComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'my-order', component: MyOrderComponent },
  { path: 'admin-orders', component: AdminOrderComponent },
  { path: 'admin-products', component: AdminProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
