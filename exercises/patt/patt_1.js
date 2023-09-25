// name property added to make objects easier to identify
let foo = {
  name: 'foo',
  ancestors() {
    let ancestors = [];
    let ancestor = this;
    
    while(Object.getPrototypeOf(ancestor).name) {
      ancestors.push(Object.getPrototypeOf(ancestor).name);
      ancestor = Object.getPrototypeOf(ancestor);
    }
    ancestors.push('Object.prototype');
    return ancestors;
  }
};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors();  // returns ['foo', 'Object.prototype']
foo.ancestors();  // returns ['Object.prototype']

