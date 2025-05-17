import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthComponent } from './components/auth/auth/auth.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ColecaoLivroComponent } from './components/colecao-livro/colecao-livro.component';
import { CardComponent } from './components/card/card.component';

export const routes: Routes = [
    {path: '', component: AuthComponent},
    {path: 'home', component: HomeComponent},
    {path: 'acervo', component: ColecaoLivroComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}