# Welcome :sparkles: :sparkles:



### To run

```
> npm install


//to use parcel
> npm run dev-parcel

//to use http-server
> npm run dev-http

```


#### To-dos
- Optimize diffing
- Optimize rerendering
- Optimize state management
- Optimize routing
- add more event listeners
  
  ```  
    if-click --- click
    if-change --- input
  ```
- implement, didMount, didUnmount (current implementaion is rerendering the root, childs(components) also rerenders)
- Optimize processHTML()

Current implementation does not parse the string directly. Instead, it is placed in a `temporaryContainer`'s `innerHTML`. Subsequently, it is passed to the `processNode` function, which transforms the `DOM` structure `<div>Hello</div>` into a `virtualDom` representation:

```json
{
  "tagName": "div",
  "attribs": {},
  "children": ["Hello"]
}
```



##### Credits
- Thank you :sparkles: [@ycmjason](https://github.com/ycmjason-talks/2018-11-21-manc-web-meetup-4/blob/master/src/vdom/diff.js)
```
Current diffing(), render() implementaion in koribotJS

```


##### Notes
- Open for critiques, collaborations

