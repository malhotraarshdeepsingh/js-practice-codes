# Core React Fundamentals

---

### 1. What does the following component render?

```js
function Greet({ name = 'Guest' }) {
  return <h1>Hello, {name}!</h1>;
}
```

- <span style="color: #fff; background: #7cc82f; border-radius: 50%; padding: 3px 9px; font-weight: bold;">A</span> <strong>Hello, Guest!</strong>   
- <span style="color: #999; border: 1px solid #ddd; border-radius: 50%; padding: 3px 9px; font-weight: bold;">B</span> <strong>Error: name is not defined</strong>
- <span style="color: #999; border: 1px solid #ddd; border-radius: 50%; padding: 3px 9px; font-weight: bold;">C</span> <strong>Hello, {name}!</strong>
- <span style="color: #999; border: 1px solid #ddd; border-radius: 50%; padding: 3px 9px; font-weight: bold;">D</span> <strong>Hello, undefined!</strong>

> <details>
> <summary><strong>Show Answer</strong></summary>
>
> <span style="color: #fff; background: #7cc82f; border-radius: 50%; padding: 3px 9px; font-weight: bold;">A</span> <strong>Hello, Guest!</strong>
>
> The component uses a default prop value for `name`, so it renders:  
> <code>Hello, Guest!</code>
> </details>

---

### 2. Which of the following causes issues in React functional components?

```js
let count = 0;

function Counter() {
  count++;
  return <p>{count}</p>;
}
```

- <span style="color: #fff; background: #7cc82f; border-radius: 50%; padding: 3px 9px; font-weight: bold;">A</span> <strong>The count resets on every render</strong>   
- <span style="color: #999; border: 1px solid #ddd; border-radius: 50%; padding: 3px 9px; font-weight: bold;">B</span> <strong>The value increments indefinitely</strong>
- <span style="color: #999; border: 1px solid #ddd; border-radius: 50%; padding: 3px 9px; font-weight: bold;">C</span> <strong>It throws an error</strong>
- <span style="color: #999; border: 1px solid #ddd; border-radius: 50%; padding: 3px 9px; font-weight: bold;">D</span> <strong>It blocks rendering due to a loop</strong>

> <details>
> <summary><strong>Show Answer</strong></summary>
>
> <span style="color: #fff; background: #7cc82f; border-radius: 50%; padding: 3px 9px; font-weight: bold;">A</span> <strong>The count resets on every render</strong>
>
> The variable `count` is re-declared every render, so it always starts from 0.
> </details>

---

### 3. Which of the following is true about props in React?

- <span style="color: #999; border: 1px solid #ddd; border-radius: 50%; padding: 3px 9px; font-weight: bold;">A</span> <strong>Props are mutable and can be changed by child components</strong>
- <span style="color: #999; border: 1px solid #ddd; border-radius: 50%; padding: 3px 9px; font-weight: bold;">B</span> <strong>Props can be used to store component-local state</strong>
- <span style="color: #999; border: 1px solid #ddd; border-radius: 50%; padding: 3px 9px; font-weight: bold;">C</span> <strong>Props are only accessible in class components</strong>
- <span style="color: #fff; background: #7cc82f; border-radius: 50%; padding: 3px 9px; font-weight: bold;">D</span> <strong>Props are used to pass data from parent to child</strong> 

> <details>
> <summary><strong>Show Answer</strong></summary>
>
> <span style="color: #fff; background: #7cc82f; border-radius: 50%; padding: 3px 9px; font-weight: bold;">D</span> <strong>Props are used to pass data from parent to child</strong>
>
> In React, props are read-only and are passed from parent to child components.
> </details>

---

### 4. Which of the following will NOT result in a re-render of a functional React component?

- <span style="color: #7cc82f; border: 1px solid #7cc82f; border-radius: 50%; padding: 3px 9px; font-weight: bold;">A</span> <strong>Calling a regular function inside the component</strong> ️
- <span style="color: #999; border: 1px solid #ddd; border-radius: 50%; padding: 3px 9px; font-weight: bold;">B</span> <strong>Parent component re-renders with new props</strong>
- <span style="color: #999; border: 1px solid #ddd; border-radius: 50%; padding: 3px 9px; font-weight: bold;">C</span> <strong>State update using useState</strong>
- <span style="color: #999; border: 1px solid #ddd; border-radius: 50%; padding: 3px 9px; font-weight: bold;">D</span> <strong>Context value changes (using useContext)</strong>

> <details>
> <summary><strong>Show Answer</strong></summary>
>
> <span style="color: #7cc82f; border: 1px solid #7cc82f; border-radius: 50%; padding: 3px 9px; font-weight: bold;">A</span> <strong>Calling a regular function inside the component</strong>
>
> Only state, props, or context changes can trigger a re-render.
> </details>

---

### 5. Why should you avoid directly mutating the state object in React components?

- <span style="color: #999; border: 1px solid #ddd; border-radius: 50%; padding: 3px 9px; font-weight: bold;">A</span> <strong>It removes the component from the DOM</strong>
- <span style="color: #7cc82f; border: 1px solid #7cc82f; border-radius: 50%; padding: 3px 9px; font-weight: bold;">B</span> <strong>It prevents re-rendering</strong> 
- <span style="color: #999; border: 1px solid #ddd; border-radius: 50%; padding: 3px 9px; font-weight: bold;">C</span> <strong>It resets all props to default values</strong>
- <span style="color: #999; border: 1px solid #ddd; border-radius: 50%; padding: 3px 9px; font-weight: bold;">D</span> <strong>It causes JSX to crash</strong>

> <details>
> <summary><strong>Show Answer</strong></summary>
>
> <span style="color: #7cc82f; border: 1px solid #7cc82f; border-radius: 50%; padding: 3px 9px; font-weight: bold;">B</span> <strong>It prevents re-rendering</strong>
>
> React doesn’t detect direct mutations, so no re-render occurs.
> </details>

---

### 6. Which of these statements about setState is true?

- <span style="color: #7cc82f; border: 1px solid #7cc82f; border-radius: 50%; padding: 3px 9px; font-weight: bold;">A</span> <strong>It schedules an update and may batch multiple calls</strong>️
- <span style="color: #999; border: 1px solid #ddd; border-radius: 50%; padding: 3px 9px; font-weight: bold;">B</span> <strong>It updates the state immediately</strong>
- <span style="color: #999; border: 1px solid #ddd; border-radius: 50%; padding: 3px 9px; font-weight: bold;">C</span> <strong>It overwrites the entire state object</strong>
- <span style="color: #999; border: 1px solid #ddd; border-radius: 50%; padding: 3px 9px; font-weight: bold;">D</span> <strong>It is synchronous in all cases</strong>

> <details>
> <summary><strong>Show Answer</strong></summary>
>
> <span style="color: #7cc82f; border: 1px solid #7cc82f; border-radius: 50%; padding: 3px 9px; font-weight: bold;">A</span> <strong>It schedules an update and may batch multiple calls</strong>
>
> `setState` is asynchronous and may batch state updates for performance.
> </details>

---

### 7. Which pattern helps avoid unnecessary re-renders of child components?

- <span style="color: #999; border: 1px solid #ddd; border-radius: 50%; padding: 3px 9px; font-weight: bold;">A</span> <strong>Passing primitive values only</strong>
- <span style="color: #7cc82f; border: 1px solid #7cc82f; border-radius: 50%; padding: 3px 9px; font-weight: bold;">B</span> <strong>Memoizing components with React.memo</strong>
- <span style="color: #999; border: 1px solid #ddd; border-radius: 50%; padding: 3px 9px; font-weight: bold;">C</span> <strong>Wrapping children in</strong>
- <span style="color: #999; border: 1px solid #ddd; border-radius: 50%; padding: 3px 9px; font-weight: bold;">D</span> <strong>Using multiple useEffect hooks</strong>

> <details>
> <summary><strong>Show Answer</strong></summary>
>
> <span style="color: #7cc82f; border: 1px solid #7cc82f; border-radius: 50%; padding: 3px 9px; font-weight: bold;">B</span> <strong>Memoizing components with React.memo</strong>
>
> `React.memo` prevents unnecessary re-renders for components with unchanged props.
> </details>

---

### 8. What does the following JSX expression return?

```js
const result = typeof <div>Hello</div>;
```

- <span style="color: #999; border: 1px solid #ddd; border-radius: 50%; padding: 3px 9px; font-weight: bold;">A</span> <strong>"object"</strong>
- <span style="color: #7cc82f; border: 1px solid #7cc82f; border-radius: 50%; padding: 3px 9px; font-weight: bold;">B</span> <strong>"string"</strong>
- <span style="color: #999; border: 1px solid #ddd; border-radius: 50%; padding: 3px 9px; font-weight: bold;">C</span> <strong>"undefined"</strong>
- <span style="color: #999; border: 1px solid #ddd; border-radius: 50%; padding: 3px 9px; font-weight: bold;">D</span> <strong>"function"</strong>

> <details>
> <summary><strong>Show Answer</strong></summary>
>
> <span style="color: #7cc82f; border: 1px solid #7cc82f; border-radius: 50%; padding: 3px 9px; font-weight: bold;">B</span> <strong>"string"</strong>
>
> The type of a JSX tag is "string" (for built-in elements like div).
> </details>

---

### 9. Which of these is NOT a valid reason to use key props in React lists?

- <span style="color: #999; border: 1px solid #ddd; border-radius: 50%; padding: 3px 9px; font-weight: bold;">A</span> <strong>To identify which items have changed</strong>
- <span style="color: #999; border: 1px solid #ddd; border-radius: 50%; padding: 3px 9px; font-weight: bold;">B</span> <strong>To control component state persistence</strong>
- <span style="color: #7cc82f; border: 1px solid #7cc82f; border-radius: 50%; padding: 3px 9px; font-weight: bold;">C</span> <strong>To make the list visually more accessible</strong>
- <span style="color: #999; border: 1px solid #ddd; border-radius: 50%; padding: 3px 9px; font-weight: bold;">D</span> <strong>To help React optimize rendering</strong>

> <details>
> <summary><strong>Show Answer</strong></summary>
>
> <span style="color: #7cc82f; border: 1px solid #7cc82f; border-radius: 50%; padding: 3px 9px; font-weight: bold;">C</span> <strong>To make the list visually more accessible</strong>
>
> Key props are for React’s reconciliation, not accessibility.
> </details>

---

### 10. What is the correct way to prevent default behavior in a React event handler?

- <span style="color: #999; border: 1px solid #ddd; border-radius: 50%; padding: 3px 9px; font-weight: bold;">A</span> <strong>return false;</strong>
- <span style="color: #999; border: 1px solid #ddd; border-radius: 50%; padding: 3px 9px; font-weight: bold;">B</span> <strong>event.preventReactDefault()</strong>
- <span style="color: #7cc82f; border: 1px solid #7cc82f; border-radius: 50%; padding: 3px 9px; font-weight: bold;">C</span> <strong>event.preventDefault()</strong>
- <span style="color: #999; border: 1px solid #ddd; border-radius: 50%; padding: 3px 9px; font-weight: bold;">D</span> <strong>preventDefault(event)</strong>

> <details>
> <summary><strong>Show Answer</strong></summary>
>
> <span style="color: #7cc82f; border: 1px solid #7cc82f; border-radius: 50%; padding: 3px 9px; font-weight: bold;">C</span> <strong>event.preventDefault()</strong>
>
> This is the correct and standard way in React to prevent default browser behavior.
> </details>
