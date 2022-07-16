import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NoAccessComponent } from './components/no-access/no-access.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './services/services/auth-guard.service';
import { AdminAuthGuard } from './services/services/admin-auth-guard.service';

const routesConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'no-access', component: NoAccessComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminAuthGuard] },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    declarations: [
        HomeComponent,
        LoginComponent,
        NoAccessComponent,
        SignupComponent,
        AdminComponent,
        NotFoundComponent
    ],
    imports: [
    RouterModule.forRoot(routesConfig),
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [RouterModule, CommonModule],
    providers: [
        AuthGuard,
        AdminAuthGuard
    ]
})
export class AppRoutingModule { }