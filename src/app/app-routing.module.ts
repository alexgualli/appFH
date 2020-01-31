import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'movie',
    loadChildren: () => import('./pages/movies/movies.module').then(m => m.MoviesPageModule)
  },
  {
    path: 'movies/:id',
    loadChildren: () => import('./pages/movie-details/movie-details.module').then(m => m.MovieDetailsPageModule)
  },
  {
    path: 'setting-user',
    loadChildren: () => import('./pages/setting-user/setting-user.module').then( m => m.SettingUserPageModule)
  },
  {
    path: 'my-movies',
    loadChildren: () => import('./pages/my-movies/my-movies.module').then( m => m.MyMoviesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
