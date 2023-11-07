import { NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CinepolisComponent } from "./cinepolis/cinepolis.component";
import { HomeComponent } from "./home/home.component";
import { MultiplicionComponent } from "./multiplicion/multiplicion.component";
import { TemperaturaComponent } from "./temperatura/temperatura.component";


const routes: Routes=[
{path: '', redirectTo: '/home', pathMatch:'full'},
{path: 'home', component: HomeComponent},
{path: 'cinepolis', component: CinepolisComponent},
{path: 'temperatura', component:TemperaturaComponent},
{path: 'multiplicion', component:MultiplicionComponent},
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}