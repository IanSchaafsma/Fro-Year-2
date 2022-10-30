// data die kan veranderen onthouden
// zijn kinderen informeren wanneer iets veranderd
// kinderen kunnen er 0 zijn 1 of 10000 of alles ertussen erboven
class Subscriber{
    constructor(number){
        console.log("ik word aangemaakt met: " + number)
        this.number = number;
        this.observers = [];
        console.log("mijn this.number is nu: " + this.getState());
    }
    updateState(newState){
        console.log("mijn nummer is nu: " + this.getState())
        this.number = newState;
        console.log("ik update mijn nummer");
        console.log("mijn nummer is nu: " + this.getState())
        this.notify();
    }
    getState(){
        return this.number;
    }
    notify(){
        console.log("Ik informeer al min kinderen");
        for(let i = 0; i < this.observers.length; i++){
            this.observers[i].update();
        }
    }
    attach(observer){
        this.observers.push(observer);
    }
}

class Observer{
    constructor(name, subscriber, htmlElement){
        this.name = name;
        this.subscriber = subscriber;
        this.init();
        this.htmlElement = htmlElement;
    }
    init(){
        console.log("Hallo! ik ben observer " + this.name + " en de state van mijn subscriber is nu: " + this.subscriber.getState()); 
    }
    update(){
        console.log("Hallo! ik ben observer " + this.name + " en de state van mijn subscriber is nu: " + this.subscriber.getState()); 
        this.htmlElement.innerText = this.subscriber.getState();
    }
}

let subscriber__1  = new Subscriber(0);

let observer__1 = new Observer("Observer 1", subscriber__1, document.getElementById("js--id--1"));
subscriber__1.attach(observer__1);

let observer__2 = new Observer("observer 2", subscriber__1, document.getElementById("js--id--2"));
subscriber__1.attach(observer__2);

let observer__3 = new Observer("observer 3", subscriber__1, document.getElementById("js--id--3"));
subscriber__1.attach(observer__3);


let subscriber__2  = new Subscriber(-1000);

let observer__4 = new Observer("Observer 4", subscriber__2, document.getElementById("js--id--4"));
subscriber__2.attach(observer__4);

let observer__5 = new Observer("Observer 5", subscriber__2, document.getElementById("js--id--5"));
subscriber__2.attach(observer__5);

let observer__6 = new Observer("Observer 6", subscriber__2, document.getElementById("js--id--6"));
subscriber__2.attach(observer__6);

setInterval(function(){
    subscriber__1.updateState(subscriber__1.getState() + 1);
    subscriber__2.updateState(subscriber__2.getState() - 1);
},1000)