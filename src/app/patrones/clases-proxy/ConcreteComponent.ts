class ConcreteComponent implements Component {
    /*request(): void 
    {
        console.log('Cliente realizando una peticion http');
    }*/
    operation(): string {
        return 'ConcreteComponent: alguna accion';
    }
}

class ConcreteDecoratorA extends Decorator {
    public override operation(): string {
        console.log('ConcreteDecoratorA: UNA FUNCIONALIDAD MAS');
        return 'ConcreteDecoratorA' + super.operation();
    }
}

class ConcreteDecoratorB extends Decorator {
    public override operation(): string {
        console.log('ConcreteDecoratorB: UNA FUNCIONALIDAD MAS');
        return 'ConcreteDecoratorB' + super.operation();
    }
}

function clienCodeDecorator (component: Component){
    console.log('RESULT: ${component.operation()}');
}

const simple = new ConcreteComponent();

const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(simple);

clienCodeDecorator(decorator1);
clienCodeDecorator(decorator2);
