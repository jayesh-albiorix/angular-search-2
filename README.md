# installation 

```
{
  "name": "xxx",
  "version": "x.x.x",
  "scripts": {
   ...
  },
  "dependencies": {
    ...
    "angular-search-2": "https://github.com/jayesh-albiorix/angular-search-2"
  },
  "devDependencies": {
        ...
  }
}

```

# Usage

Import MyLibModule in in the root module(AppModule):

```
import { MyLibModule } from 'angular-search-2';

@NgModule({
  imports: [
      ...modules,
    MyLibModule
})

```
then in html file

```
<my-angular-search></my-angular-search>
```
