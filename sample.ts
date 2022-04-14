interface Person {
  name: string;
  age: number;
}
let foo =<Person>{}
foo.name = "satou";
let bar ={} as Person
bar.name = "satou";