interface Foo {
    bar: number;
    bas: string;
}


var foo = {} as Foo;

foo.bar = 123;

foo.bas = 'hello';

console.log(foo);