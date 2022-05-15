import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponent } from './buy/buy.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from 'src/app/login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { EventComponent } from './event/event.component';
import { EventsComponent } from './events/events.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
  { path:'' , component:IndexComponent},
  { path:'buy' , component:BuyComponent},
  { path:'cart' , component:CartComponent  },
  {path: 'home' , component:HomeComponent} , 
  { path: 'login' , component:LoginComponent },
  {path: 'signin', component:SigninComponent}, 
  {path : 'products', component:ProductsComponent} , 
  {path:'product' , component:ProductComponent},
  {path : 'event' , component: EventComponent},
  {path : 'events', component: EventsComponent},
  {path:'profile' , component:ProfileComponent} ,
  {path : '**' , component:NotfoundComponent} ,
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
