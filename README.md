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
```text
Current implementation does not parse the string, instead putting it to a `temporaryContainer`'s `innerHTML`,
then pass it to `processNode` to transform `DOM` `<div>Hello</div>`  to `virtualDom` `{tagName:div, {attribs:{}, children:['Hello']}}`
```




##### Credits
- Thank you :sparkles: ycmjason [Link Text](https://github.com/ycmjason-talks/2018-11-21-manc-web-meetup-4/blob/master/src/vdom/diff.js)
```
Current diffing(), render() implementaion in koribotJS

```


##### Notes
- Open for critiques, collaborations

