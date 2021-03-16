## NestJS[Required By Job]


#### What is NestJS
- NodeJS Framework
- Used On SS
- Builds up on ExpressJS
- As A Whole it is a framework of a framework(ExpressJS)
- Embraces TS
- Embraces Dependency Injection
- Embraces Modularity
- Deeply Inspired By AngularJS(DO NOT USE REACTJS better)
- NestJS in contrast to AngularJS runs on the backend
- Can be used to build MVC apps, REST/GraphQL APIs
- Enforces You To Write Clean Code and a clear project structure


#### How To install the Nest Cli
```bash
npm i -g @nestjs/cli
```

#### How To Build An API With NestJS
- Connect the NestJS API with ReactJS/AngularJS/VueJS

#### How To Create A Nest App Using the Nest Cli
```bash
nest new ftnfb
```

#### Beauty Of Nest Project Thanks To Nodemon
- No Need To Kill Our Port and Restart the server anytime I make a change unlike React
- On the fly our changes take effect and the server is reloaded for us

#### NestJS Project Structure
```
├── nest-cli.json
├── node_modules
├── package.json
├── package-lock.json
├── README.md
└── src
    ├── app.controller.spec.ts
    ├── app.controller.ts       
    ├── app.module.ts
    ├── app.service.ts
    ├── main.ts
└── test
    ├── app.e2e-spec.ts
    ├── jest-e2e.json
├── tsconfig.build.json
├── tsconfig.json
```
### App.module.ts File
- Embraces Modularity Here is where I tell NestJS which features makes up my App bundles a couple of controllers & providers
- I can have nested modules

### Main.ts File
- Main file aka App.js in ReactJS...This is your entry point file which gets compiled(Fav Elem for 42932) to JS

### app.controller.spec.ts File
-  Testing File for unit tests

### app.service.ts File
-  Has the @Injectable

### Controllers In NestJS[Important Feature in Your Project]
- Control how you handle incoming Requests
- Handle Incoming Requests
- Responsible for Accept incoming Requests
- Doing Sth 
- Return A Response

### Module Splitting
- We Split modules by features in my app
- Example Online Shop:
- 1 module for Products(1 Module for 7652626)
- 1 module for Shopping Cart(1 Module for 227243 36557 according to Angela)
- 1 module for User Auth(1 Module for 429-32/375-32)


### We use decorators in NestJS similar to Python aka @
- I can attach decorator to Classes, methods, properties, args
- Module is a decorator I must attach to a class and I pass in an object to the decorator
- Controller and Get decorator is a built in decorator given to us by NestJS


#### Providers In NestJS[Important Feature in Your Project]
- Extra Services... Extra Classes which can be injected into Controllers/Other Providers
    - to provide other functionality

#### Example
- Have a Service that reaches out to a DB to fetch data 
- A Controller then can use that service to let it get the data from DB
- In order for the code in controller is rather lean
- Never Leave your DB Password in the controller instead have it in your service
