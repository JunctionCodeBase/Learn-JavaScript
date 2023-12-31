# DOM 

# Creating an Element:

* To Create an HTML element we use tag Name.
* we use the method document.createElement().
* This method takes an HTML element tag Name as string parameter.

```js
// syntax
document.createElement('tagname')
```

```js
let newEle = document.createElement('h1');
newEle.className = "title";
newEle.style.fontSize = '24px';
newEle.textContent = "Creating HTML Element using JavaScript";
console.log(newEle);

```

* To Create a multiple element we should use loop.

```js
let title;
for (let i = 0; i < 3; i++) {
    title = document.createElement('h2');
    title.className = 'title-class';
    title.style.fontSize = '24px'
    title.textContent = i;
    console.log(title)
}
```

# insert element.

1. node.append(el) --> add at the end of node inside.
2. node.prepend(el) --> add at start of node inside.
3. node.before(el)--> add before the node.
4. node.after(el) --> add after the node.
5. node.remove()--> delete the node.


# 1. node.append(el):
```js
let append = document.querySelector("h2");
append.append(newEle);
```

# 2. node.prepend(el):
```
append.prepend(newEle);

```
# 3. node.before(ele):

```js
append.before(newEle);

```
# 4. node.after(ele):
```js
append.after(newEle);

```
# 5. node.remove():

```js
append.remove()
```
