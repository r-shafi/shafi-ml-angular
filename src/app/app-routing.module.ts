import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/pages/admin-dashboard/admin-dashboard.component';
import { AboutComponent } from './components/pages/about/about.component';
import { AdminComponent } from './components/pages/admin/admin.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PostsComponent } from './components/pages/posts/posts.component';
import { WorksComponent } from './components/pages/works/works.component';
import { AdminGuardGuard } from './guards/admin-guard.guard';
import { CategoryComponent } from './components/pages/category/category.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:slug', component: PostsComponent },
  { path: 'works', component: WorksComponent },
  { path: 'works/:category', component: CategoryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin', component: AdminComponent },
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
    canActivate: [AdminGuardGuard],
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
