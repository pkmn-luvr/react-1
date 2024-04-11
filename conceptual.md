### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a javascript library for building UI; best used for handling dynamic/reactive changes to UI

- What is Babel?
Babel is a javascript compiler that converts ECMAScript 2015+ code into a backwards compatible version of JavaScript 

- What is JSX?
Javascript XML is an extension for javascript that helps describe the UI in React apps

- How is a Component created in React?
Components are defined as functions or classes that return React elements using JSX and they can be reused (via file exports & imports) throughout the application

- What are some difference between state and props?
State is internal and controlled by the component itself; props are external and passed to the component by its parent; State is mutable & Props are immutable

- What does "downward data flow" refer to in React?
Data should flow from parent components down to child components as best practice

- What is a controlled component?
Component that gets it's input values from state; helps control values of form elements

- What is an uncontrolled component?
Component that stores its state internally and queries DOM using a ref to find their current values as needed

- What is the purpose of the `key` prop when rendering a list of components?
Keys help React identify when items in a list have been changed (changes, additions, removals) - helps to update the UI

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
It lowers performance and can cause state issues when changes are made to the list

- Describe useEffect.  What use cases is it used for in React components?
useEffect is a hook that allows devs to perform side effects in components (ex. data fetching, localStorage/changing the DOM)

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
useRef lets us access DOM elements/create a reference to the DOM element in the functional component w/o triggering new renders

- When would you use a ref? When wouldn't you use one?
to create a reference to the DOM element in the functional component w/o triggering new renders and w/o using state

- What is a custom hook in React? When would you want to write one?
Custom hooks let us extract component logic into reusable functions - best for sharing logic accross different components
