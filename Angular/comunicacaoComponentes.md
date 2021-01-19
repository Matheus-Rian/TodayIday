# Comunicação entre componentes no Angular

Neste artigo será mostrado quatro maneiras diferentes de compartilhar dados entre os componentes Angular.

## 1. Comunicação de pai para filho

### @Input()

Componente **Pai**

```tsx
@Component({
  selector: 'app-parent',
  template: `
    <div class='parent'>
      <h1>Parent</h1>
      <app-child [message]="message"></app-child>
    </div>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  message: string = 'hellooooo World'

  ngOnInit() {

  }

}
```

- Componente **Filho**

```jsx
@Component({
  selector: 'app-child',
  template: `
    <div class="notification">
      <h3>child</h3>
      Say {{message}}
    </div>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() message: string; //Aqui que vai ser armazenada a resposta do pai

  constructor() { }

  ngOnInit(): void {

  }

}
```

### Resultado
Neste artigo será mostrado quatro maneiras diferentes de compartilhar dados entre os componentes Angular.

## 1. Comunicação de pai para filho

### @Input()

Componente **Pai**

```tsx
@Component({
  selector: 'app-parent',
  template: `
    <div class='parent'>
      <h1>Parent</h1>
      <app-child [message]="message"></app-child>
    </div>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  message: string = 'hellooooo World'

  ngOnInit() {

  }

}
```

- Componente **Filho**

```jsx
@Component({
  selector: 'app-child',
  template: `
    <div class="notification">
      <h3>child</h3>
      Say {{message}}
    </div>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() message: string; //Aqui que vai ser armazenada a resposta do pai

  constructor() { }

  ngOnInit(): void {

  }

}
```

### Resultado

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/63bbf41e-6eb0-4a72-b153-9dc0f625eeec/InputAngular.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/63bbf41e-6eb0-4a72-b153-9dc0f625eeec/InputAngular.png)

## 2. Comunicação de filho para pai

### @Output + EventEmitter

- Componente **Filho**

```tsx
@Component({
  selector: 'app-child',
  template: `
    <div class="notification">
      <h3>child</h3>
      Say {{message}}
      <button (click)='sendMessage()'>Send Message</button>
    </div>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  message: string = 'Hola Mundo'
  @Output() messageEvent = new EventEmitter<string>()

  ngOnInit(): void {

  }

  sendMessage() {
    this.messageEvent.emit(this.message)
  }

}
```

- Componente **Pai**

```tsx
@Component({
  selector: 'app-parent',
  template: `
    <div class='parent'>
      <h1>Parent</h1>
      message: {{message}}
      <app-child (messageEvent)='receiveMessage($event)'></app-child>
    </div>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  message: string = 'hello World'

  ngOnInit() {

  }

  receiveMessage($event) {
    this.message = $event
  }
}
```

## 3. Comunicação de filho para pai via ViewChild

### @ViewChild

Utilizando o viewChild nós injetamos o componente filho dentro do pai. Ou seja, o pai tem acesso a todas as propriedades do filho.

- Componente **Pai**

```tsx
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  template: `
    <div class='parent'>
      <h1>Parent</h1>
      message: {{message}}
      <app-child (messageEvent)='receiveMessage($event)'></app-child>
    </div>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {

  @ViewChild(ChildComponent) child;

  constructor() { }

  message: string = 'hello World'

  ngAfterViewInit() {
    this.message = this.child.message 
		//Estou atribuindo ao message parent o valor do message child
  }

  receiveMessage($event) {
    this.message = $event
  }
}
```

## 4. Comunicação de componentes que não possuem conexão

- Via shared service

- Serviço de dados

```tsx
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sibling',
  template: `
    <h1>Sibling</h1>
    {{message}}
    <button (click)='newMessage()'>New Message</button>
  `,
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {

  message: string;
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.currentMessage
      .subscribe(message => this.message = message);
  }

  newMessage() {
    this.data.changeMessage('Hello from Sibling');
  }

```

- Componente **Irmão**

```tsx
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sibling',
  template: `
    <h1>Sibling</h1>
    {{message}}
    <button (click)='newMessage()'>New Message</button>
  `,
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {

  message: string;
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.currentMessage
      .subscribe(message => this.message = message);
  }

  newMessage() {
    this.data.changeMessage('Hello from Sibling');
  }

}
```

- Componente **Filho**

```tsx
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-child',
  template: `
    <div class="notification">
      <h3>child</h3>
      Say {{message}}
    </div>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private data: DataService) { }

  message: string;

  ngOnInit(): void {
    this.data.currentMessage
      .subscribe(message => this.message = message)
  }

}
```

- Componente **Pai**

```tsx
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-parent',
  template: `
    <div class='parent'>
      <h1>Parent</h1>
      message: {{message}}
      <app-child></app-child>
    </div>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private data: DataService) { }
  message:string;

  ngOnInit() {
    this.data.currentMessage
      .subscribe(message => this.message = message)
  }
}
```

## 2. Comunicação de filho para pai

### @Output + EventEmitter

- Componente **Filho**

```tsx
@Component({
  selector: 'app-child',
  template: `
    <div class="notification">
      <h3>child</h3>
      Say {{message}}
      <button (click)='sendMessage()'>Send Message</button>
    </div>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  message: string = 'Hola Mundo'
  @Output() messageEvent = new EventEmitter<string>()

  ngOnInit(): void {

  }

  sendMessage() {
    this.messageEvent.emit(this.message)
  }

}
```

- Componente **Pai**

```tsx
@Component({
  selector: 'app-parent',
  template: `
    <div class='parent'>
      <h1>Parent</h1>
      message: {{message}}
      <app-child (messageEvent)='receiveMessage($event)'></app-child>
    </div>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  message: string = 'hello World'

  ngOnInit() {

  }

  receiveMessage($event) {
    this.message = $event
  }
}
```

## 3. Comunicação de filho para pai via ViewChild

### @ViewChild

Utilizando o viewChild nós injetamos o componente filho dentro do pai. Ou seja, o pai tem acesso a todas as propriedades do filho.

- Componente **Pai**

```tsx
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  template: `
    <div class='parent'>
      <h1>Parent</h1>
      message: {{message}}
      <app-child (messageEvent)='receiveMessage($event)'></app-child>
    </div>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {

  @ViewChild(ChildComponent) child;

  constructor() { }

  message: string = 'hello World'

  ngAfterViewInit() {
    this.message = this.child.message 
		//Estou atribuindo ao message parent o valor do message child
  }

  receiveMessage($event) {
    this.message = $event
  }
}
```

## 4. Comunicação de componentes que não possuem conexão

- Via shared service

- Serviço de dados

```tsx
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sibling',
  template: `
    <h1>Sibling</h1>
    {{message}}
    <button (click)='newMessage()'>New Message</button>
  `,
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {

  message: string;
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.currentMessage
      .subscribe(message => this.message = message);
  }

  newMessage() {
    this.data.changeMessage('Hello from Sibling');
  }

```

- Componente **Irmão**

```tsx
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sibling',
  template: `
    <h1>Sibling</h1>
    {{message}}
    <button (click)='newMessage()'>New Message</button>
  `,
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {

  message: string;
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.currentMessage
      .subscribe(message => this.message = message);
  }

  newMessage() {
    this.data.changeMessage('Hello from Sibling');
  }

}
```

- Componente **Filho**

```tsx
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-child',
  template: `
    <div class="notification">
      <h3>child</h3>
      Say {{message}}
    </div>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private data: DataService) { }

  message: string;

  ngOnInit(): void {
    this.data.currentMessage
      .subscribe(message => this.message = message)
  }

}
```

- Componente **Pai**

```tsx
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-parent',
  template: `
    <div class='parent'>
      <h1>Parent</h1>
      message: {{message}}
      <app-child></app-child>
    </div>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private data: DataService) { }
  message:string;

  ngOnInit() {
    this.data.currentMessage
      .subscribe(message => this.message = message)
  }
}
```