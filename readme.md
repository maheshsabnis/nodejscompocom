# Angular Programming
1. Create a Project using Angular CLI
    - Command Line Tool to
        - Create Angular Project
            - Commands for Adding
                - Component
                - Services
                - Directives
                - Pipes
        - Build Project
        - Test Project
        - Create Production Build
2. Install Angular CLI using Node Package Manager (npm) from Command Prompt
    - npm install -g @angular/cli, on windows
    - sudo npm install -g @angular/cli on Linux and MacOS
    - Angular CLI Provides 'ng' command Line tool
        - ng new <ANGULAR-PROJECT-NAME>
        - ng serve to run the project in Node Environment for developer and test and serve Build JS libraries to Browser 
            - ng serve --prod, to run the project in Node Environment for production and serve Build JS libraries to Browser     
        - ng test
            - Execute Test Cases         

# Angular Project Structure
1. package.json
    - Each JS Front-App is package and this is deployed or distributed as Package
    - This package must contains package.json file 
        - created using 'npm init -y' command 
    - Sections of pcakegs.json
        - 'name', name of the package used during deployment or districution
        - 'versoin', the version of package when distributed using respository
            - git
            - https://www.npmjs.com
        - devDependencies
            - List of dependencies used by the package while developing and/or testing the package   
                - all dev dependant packages will be installed using following command
                    - npm install --save-dev <PACKAGE-NAME>  
        - dependencies
            - List of all dependencies needed for production and execution of the package
                - all dependencies will be isnatlled using following command
                    - npm install --save <PACKAGE-NAME>       
        - scripts
            - defines command for package operations
                - excution
                    - start, npm run start command
                - build
                    - build, npm run build
                - test                    
                    - test, npm run test         
2. tsconfig.json
    - tsconfig.app.json
      - Extends tsconfig.json for Angular Application Compilation for Angular Classes e.g. Modules, Components, Directives, Services and Pipes 
    - tsconfig.spec.json
    - File that manages TypeScript Code COmpilation into JavaScript
      - Angular TS Setings
        - "strict": true,
          - Each variable must be declared
          - "noImplicitReturns": true, 
            - If method returns value then the return-type must be defined in method declaration
          -  "noFallthroughCasesInSwitch": true,
            - The switch..case must use 'default'
          - "experimentalDecorators": true,   
            - The 'Angular Decorator(?)' must be compiled and executed first befor executing the TypeScript code that is compiled into JavaScript  
          - "moduleResolution": "node",
            - Implicitely perform file-path look-up using Node.js 'path' module
3. karma.config.js
  - Karma Engine for Testing
4. tslint.json
  - TyepScript Langugae Quality Settings
5. angular.json
  - Like Web.Config file of AS.NET  /ASP.NET MVC
6. src folder
    - app folder
        - app.module.ts
        - app-routing.module.ts
    - main.ts
    - polyfills.ts
    - test.ts   

# Understanding Angular Packages
1. @angular/compiler
    - Provides compilation for Angular app for Build and Execution
        - Development Build
            - Just-In-Time (JIT) Build (Default upto Angular 9)
                - The JavaScrtipt code will be loaded in browser and the code ill be compiled and executed based on demand e.g. CLick the button and execute a function  
        - Deployment aka Production build (AOT is default true from Angular 9+)
            - Ahead-of-Time Compiler (AOT)
                - Code is compiled on Server (ng serv --prod) and compiled minidied code is loaded in browser       
            - AOT + Ivy (Angular 10+)
                - Compilation and Minification of HTML code into JavaScript object and upto 80% compression for the build code
                    - ng serve --prod
2. @angular/common
    - Provide the facility of Angular standard Module loading and the Angular Application Rendering in the browser
        - Offers 'CommonModule'
            - Manages loading of ThirdParty Angular Modules into the main Angular Application
    - @angular/common/http
        - Provides 'HttpClientModule' that provides an Infrastructure for all HTTP Communications from Angular Application          
3. @angular/platform-browser-dynamic
    - Provides 'platformBrowserDynamic()' method to bootstarp (aka load) angular app in browser for the fisrt time                          
4. @angular/platform-browser
    - Provides 'BrowserModule' that mamanages the rendering of Angular UI in browser once app is loaded in browser    
        - 'Only One Instance' of BrowserModule is possible per Angular App
5. @angular/core
    - The most impoprtant module that contains most of the  standard important Angular Classes     
    - Classes for
        - CReating  Angular Module, NgModule
        - Component, Component
        - Serveice, Injectable
        - Directive, Directive
        - Pipe,  Pipe
        - Commucation Across COmponents wity Parent Child Relationship 
            - Input and Output  
        - Parent Component contains multipe Children
            - ViewChild and ViewChildren
        - Custom Directive Rendering
            - Renderer2 and ElementRef
        - Custom Events
            - EventEmitter<T>
        - Linking a method with Event
            - HostListener             
6. @angular/forms
    - Working with HTML Forms as Angular Forms
        - FormsModule
            - Two-Way Binding
        - ReactiveFormsModule
            - Line-of-Business Forms with Model Binding like ASP.NET MVC Strongly-Type View    
7. @angular/router
    - Used for Angular Routing for Single-Page-Application (SPA)
    - RouterModule class
8. @angular/elements
    - Distributing Angular Component as 'Custom HTML element' to third party JavaScript Apps for Micro-FrontEnd Apps                

# Angular Dependencies

1. rxjs
    - Provides 'Observable' class for State Management for HTTP Responses
2. tslib
    - Manages the TypeScript Transpilation (ES 6) to Browser Compatible JavaScript, ES 6 to ES 5 (Default)
    - Internally uses tsconfoig.json
3. zone.js
    - Manages the Code Execution and DOM Errors in Browser during Angular APp execution in browser       

# Programming with Angular
1. Install Boostrtap Framework as 'dependency' for runtine
  - npm install --save bootstrap
    - Run the command from the command prompt from Angular Application path

2. platformBrowserDynamic
    - platformBrowserDynamic.bootstrap(<Angular-Module>)
        - What is Angular Module(?)
        - Loads the Angular Application in the Browser for Execution
            - Creating necessary Objects
            - Rendering
            - Dependency Injection
            - Databinding
            - Forms
            - Routing
            - Pipe
            - Directive execution 
3. Angular Decorators
    - @NgModule
        - @angular/core
        - Applied on class to use the class as Angular Module   
    - @Component
         - @angular/core
        - Applied on class to use the class as Angular Component
        - Properties
            - The 'selector', the string property, that is used to define 'csutom html tag' to refer / use the component in HTML markup of other component or in index.html 
            - The 'templateUrl', the string property, used to contains path pf external HTML file thst contains UI for the current component
            - The  'template', the string property, used to define 'inline HTML Temnplate' in the component class file
            - The 'styleUrls', array and 'styles', a string used to define external CSS style files and inline CSS respectively that is used by HTML UI of the component 
    - @Injectable
         - @angular/core
        - Applied on class to use the class as Angular Service    
    - @Directive
        - @angular/core            
        - Applied on class to use the class as Anular Directice 
    - @Pipe
        - @angular/core
        - Applied on class to use the class as Angular Custom Pipe       
    - @Input, @Output, @HostLinsener    

# Anguar Programming
1. Create Component
    - Data Binding
        - Interpolation
            - Binding public data member of the component to the Read-Only UI element as expression
            - Syntax
                - {{<PUBLIC-DATA-MEMBER-OF-COMPONENT>}}
                - read-only UI elements
                    - div, p, span, label, td, th, etc.
                - E.g.
                    - <div>{{name}}</div>
                        - The 'name' is the public data member of the class    
            - The interpolation is parsed as Expression and render as HTML element
            - if the interpolation contains Numeric mathematical expression then Angular will invoke JavaScript 'evel()' function to eveluate the expression in interpoilation            
        - Property Binding
            - Binding public data members of the component with attributes of HTML elements
            - Syntax:
                - [<ATTROIBUTE-NAME>]="<PUBLIC-DATA-MEMBER-OF-COMPONENT>"
                - e.g.
                    - <input type="text" [value]="message">
                        - 'message' is public data member of the component
                - Most of the standard attributes if HTML UI elements are parsed by Angular for Property Binding
                    - e.g., [value], [href], [disabled], [hidden], etc.         
        - Event Binding
            - Binding an event of the HTML element to the public metghod of the component
            - Syntax
                - (<EVENT-NAME>) = "F1()"
                    - THE 'F1()' is a public function of Component
                - e.g.
                    - <input type="button" (click)="display()">    
            - If the event of UI element wants to pass the attribute values of the UI element to the method, then use '$event' object
                - The '$event' is a JavaScript object that represents the event occured on Element
                    - $event.target represent the UI element on which an event is raised
                    - $event.target.<ATTRIBUTE-NAME>
                        - will be used to read the value of attribute of UI element on whihc an event is raised      
            - (click), (change), (blur), (keyup), etc.               
        - Two-Way Binding
            - Combination of Property Binding + Event Binding
            - Syntax
                - [(ngModel)]="<PUBLIC-DATA-MEMBER-OF-COMPONENT>"
                - ngModel, is a standard Angular 'attribute directive' (custom attribute for HTML elements) used for Two-Way Binding
                - To Execute 'ngModel', the NgModule must import 'FormsModule' in its 'imports' array from the @angular/forms package  
                - ngModel will listen to the default event of UI element on which it is applied
                    - e.g. <input> element has default event as 'keyUp' that results in 'change' event
                - This default event will invoke 'ngModelChanged' event on ngModel directive and will read changed value of UI element  
                - THis updaed value of the bound property will be passed to the Component
                - The component will call its 'ngOnChanges' internal method and will accept updated value from UI
                - This value will be processed (if any logic iss written for it), this value will be send back to UI to elements where this property is bound (with property binding / two-way binding / interpolation)   
    - Angular Directives
        - Directive
            - A class that is used to define a custom re-usable UI or custom bechaior for exisitng HTML element
        - Component Directive
            - Each component is Directive and this component can be used as custom HTML UI for reusability
        - Atrribute Directive
            - It is a type that is used to define a custom behavior for exisditng HTML element
                - ngModel, formGroup, formControlName     
        - Structural Directive
            - Used to dynamically add/remove HTML UI elements from DOM    
            - e.g.
                - *ngFor, this execute a for..of loop to generate DOM elements based on collection       
                - *ngIf, the if condition, evaluate a if statement to add or remove HTML element 
                - *ngSwitch ngSwitchCase     
    - Optimize component using following features
        - Do not write complex or time-consuming code in Constructoer
            - Lifecycle methods
                - ngOnChange(), OnChnage interface
                    -  executed when the property is changed with Two-Way binding 
                - ngOnInit(), OnInit interface
                    - Executed 'only once' after the constructor is executed
                    - Use this method to write logng running process logic
                        - Heavy Collection Operations  
                        - Calls to External Services
                        - One-Time Event Subscription
                - ngDestroy()
        - If the Complex UI e.g. select, ul, table are repeated in components's UI template then think of creating custom re-usable complex elements
            - UI Composition is a process of dividing a UI in-to small and autonomous Angular Components
                - Parent Component contains Multiple Child Components
                    - the selector of child component is used in HTML template of parent component
                - Parent Components instantiate child components explicitely
                    - Use @ViewChild to instantiate the child comoponent in parent
        - Eliminate the hard-coding of propeties on UI for structural directive                 
    - Communication Across Components
        - Component as Reusable-Component-Ditective
            - Parent - Child Components
                - Child component MUST have @Input decorated property with get/set. This will be used for property binding by parent component
                - CHild component MUST have @Output decorated event of the type EventEmitter<T>. This will bubble-up (aka emit) event with values from child to parent of the type 'T' 
            - Component Reusability
                - COnsideratoins for Re-usable component
                    - UI requirements for HTML definitions
                    - Properties for accepting data from parent
                    - Events using which data will be emitted to parent



2. Angular Forms
    - Reactive Forms
        - @angular/forms
            - ReactiveFormsModule
                - The class that is used to manage the <form> tag as Reactive Forms by mapping it implicitely to ngForm directive of Angular 
                - This must be imported in 'imports' array of NgModule
            - This class will manage lifecycle of following classes
                - FormGroup
                    - The class derived from 'AbstractControl' class.
                    - AbstractControl, represents each UI element on HTML template
                    - FormGroup
                        - Represent the <form> that will accpet data from UI and manipulate it
                        - It is collection of FormControls which is editable elements mapped with public properties of Model class 
                        - The '[formGroup]' attribute directive will be used to map the FormGroup imstance to the <form> tag
                        - The 'value' property of FormGroup represent the data posted from <form> that map with the Model class
                            - formGroup.value map with an instance of the Model class mapped with the formGroup
                            - e.g. If Model class is 'Product' then formGroup.value will represent an isnatnce of Product class
                        - The 'setValue()' method that can be directly passed with an instance of Model class
                            - e.g. formGroup.setValue(this.product)    
                - FormControl
                    - The class that map a single public property of Model class with the single editable UI element
                        - formControl.value will represent each property from the Model class
                        - formControl.setValute(), accept a value for single property of the Model class
                    - The  'formControlName' a attribute directive that map the FormControl with UI element 
                - Validators

    - Validation
        - Custom Validations

3. Angular Services
    - Utilities
    - Pub/Sub Communication across Components using Angular Services
    - HTTP Calls
        - CRUD Operations
        - Token Based Secure Calls

4. Single Page Application (SPA)
    - Routing
        - Parameterized Routing
        - Child Routing
        - Lazy Loading  
    - DEMO: for Route Guards
            - Auth Guards   

5. Creating Custom Directives

6. Testing                   






# Hands-on-lab
1. Create a Angular Component that will have UI and functionality of standard Calculator 
2. Modify the ProductComponent for Following operations (Immediate)
    - Generate the ProductRowId as Auto-Increament from the last record's ProductRowId
    - Generate a 'delete' button for each table row showing Products List. When this button is clicked the record must be deleted
    - Add two radio buttons on the top of Product List  table for following operations
        - Sort and Reverse the Product List base on Prouct Name and Base Price

3. Create a re-usable DropDownComponent as <app-list-data> which will render the <select> with <option>. The options will be generated by accepting data from parent in 'DataSource' property and the selected option value will be emitted back to parent using 'SelectedItem' event. (Immediately today)

4. Create a Component that will show list of Categories in Table as following
    - CategoryId, CategoryName, Manufacturer
    - Create a Component that will show list of Products as ProductId, ProductName, Price, CategoryId. This component will be chid of the CategoryListComponent. 
    - When an End-uased selects a Category Row from the Parent Component, the ProductList compoent should show only those products matche with the selected CategoryId from the parent component 

