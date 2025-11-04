import { Routes } from '@angular/router';

export const routes: Routes = [

    {path:"", loadComponent: () => import("./components/home/home-page/home-page").then(m=>m.HomePage)},
    {path: "faqs", loadComponent: () => import("./components/home/faqs/faqs").then(m=>m.Faqs)},
    // auth 
    {path: "register", loadComponent: () => import("./components/auth/register/register").then(m=>m.Register)},
    {path: "login", loadComponent: () => import("./components/auth/login/login").then(m=>m.Login)},
    // business
    {path: "business/create", loadComponent: () => import("./components/business/create/create").then(m=>m.Create)},
    {path: "business/delete", loadComponent: () => import("./components/business/delete/delete").then(m=>m.Delete)},
    {path: "business/detail-by-owner", loadComponent: () => import("./components/business/detail-by-owner/detail-by-owner").then(m=>m.DetailByOwner)},
    {path: "business/detail-by-user", loadComponent: () => import("./components/business/detail-by-user/detail-by-user").then(m=>m.DetailByUser)},
    // services
    {path: "services/create", loadComponent: () => import("./components/services/create/create").then(m=>m.Create)},
    {path: "services/delete", loadComponent: () => import("./components/services/delete/delete").then(m=>m.Delete)},
    {path: "services/detail-by-owner", loadComponent: () => import("./components/services/detail-by-owner/detail-by-owner").then(m=>m.DetailByOwner)},
    {path: "services/detail-by-user", loadComponent: () => import("./components/services/detail-by-user/detail-by-user").then(m=>m.DetailByUser)},
    {path: "services/list-by-owner", loadComponent: () => import("./components/services/list-by-owner/list-by-owner").then(m=>m.ListByOwner)},
    {path: "services/list-by-user", loadComponent: () => import("./components/services/list-by-user/list-by-user").then(m=>m.ListByUser)},
    // reservation 
    {path: "reservation/create", loadComponent: () => import("./components/reservation/create/create").then(m=>m.Create)},
    {path: "reservation/update/:token", loadComponent: () => import("./components/reservation/update/update").then(m=>m.Update)},
    {path: "reservation/delete/:id", loadComponent: () => import("./components/reservation/delete/delete").then(m=>m.Delete)},
    {path: "reservation/detail-by-owner", loadComponent: () => import("./components/reservation/detail-by-owner/detail-by-owner").then(m=>m.DetailByOwner)},
    {path: "reservation/detail-by-user", loadComponent: () => import("./components/reservation/detail-by-user/detail-by-user").then(m=>m.DetailByUser)},
    {path: "reservation/list-by-owner", loadComponent: () => import("./components/reservation/list-by-owner/list-by-owner").then(m=>m.ListByOwner)},
    {path: "reservation/list-by-user", loadComponent: () => import("./components/reservation/list-by-user/list-by-user").then(m=>m.ListByUser)},
    // feedback
    {path: "feedback/create", loadComponent: () => import("./components/feedback/create/create").then(m=>m.Create)},
    {path: "feedback/delete/:id", loadComponent: () => import("./components/feedback/delete/delete").then(m=>m.Delete)},
    {path: "feedback/list", loadComponent: () => import("./components/feedback/list/list").then(m=>m.List)},
];
