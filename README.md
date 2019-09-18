# Angular Master-Detail Responsive Routing POC

## Quick Start

Run `npm i && ng serve` for a spin up a dev server, then go to `http://localhost:4200/`. 

## How it works · TLDR

### The Project

* 1 `<master-detail>` component: Controls the display of master and detail pages
* 1 `master-detail` service used by `<master>` and `<detail>` pages to navigate between routes
* 1 `breakpoint` service to monitor page width changes
* 2 test pages `<master>` and `<detail>`

### Routing

To achieve a reponsive `master-detail` behaviour, we parameterize the `detail` routes and place these as both children and siblings in the routing map. See:

```
const detailRoutes = [
  {
    path: 'detail',
    component: DetailComponent
  }
];

const routes: Routes = [
  {
    path: 'master',
    component: MasterComponent,
    children: [
      ...detailRoutes
    ]
  },
  ...detailRoutes
];

```
app/app-routing.module.ts

### Master-Detail Service

To control routing between `master` and `detail` pages, use the `master-detail.service`. Doing this ensures the responsive behaviour works. How is this achieved? The `master-detail.service` simple toggles the `{ relativeTo: }` option of the angular router based on the pages current `ActivateRoute`. Doing this means we don't need separate routes for mobile and desktop (which is nice). See:

```
navigateToDetail(url: Array<string>, route: ActivatedRoute) {
    this.router.navigate(url, {
      relativeTo: this.breakpoints.isDesktop ?
        route : route.parent
    });
  }
```
master-detail.service.ts



## About this project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.4. To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
