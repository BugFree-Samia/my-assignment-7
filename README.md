## Created a README file to answer the following questions -

### What is JSX, and why is it used?

JSX stands for JavaScript XML. It is a syntax extension that allows you to write HTML-like code inside JavaScript, which is used in React to describe the UI structure.

**It is used because-**

-Makes code more readable and expressive.

-Allows developers to write UI components in a familiar HTML-like syntax.

-JSX is transpiled to regular JavaScript using tools like Babel before it runs in the browser.

---

###  What is the difference between State and Props?

**State** refers to the internal data of a component. It is mutable, meaning it can be updated based on user interaction or other logic. State is managed within the component itself.

**Props** (short for "properties") are used to pass data from one component to another, typically from a parent to a child. Props are read-only and cannot be modified by the receiving component.



---

### What is the `useState` hook, and how does it work?

The `useState` hook is a built-in React function that allows functional components to have state.

**It works:**

useState takes the initial value as an argument.

It returns a pair: the current state value and a function to update it.

When the state is updated, the component re-renders.

---

###  How can you share state between components in React?

There are several ways to share state between components in React:

1. **Lifting State Up**  
   Move the state to the nearest common ancestor of the components that need access to it. Then pass it down as props.

2. **React Context API**  
   Useful for sharing state globally or across many components without prop drilling. You define a context and use a provider to pass the state, then consume it in any component that needs it.

3. **State Management Libraries**  
   For larger applications, libraries like Redux, Zustand, or Recoil can be used to manage and share state across components efficiently.

---

###  How is event handling done in React?

Event handling in React is similar to HTML but follows JavaScript conventions:

- Event names are written in **camelCase** (e.g., `onClick`, `onChange`).
- Instead of passing strings, you pass functions as event handlers.

React also uses a synthetic event system for cross-browser consistency. Event handler functions are usually defined inside the component and passed to elements as props.

---


