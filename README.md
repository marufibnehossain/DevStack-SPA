Project Name: DevStack

Short description: This is a React application that allows developers to see popular development technologies and add technology in the stack. Users can see technologies, add them to the stack, remove technologies from the stack, and clear the whole stack.

Technologies Used: React.js, TypeScript, Tailwind CSS, React Toastify, React Icons, JSON, Vite.

Features: Explore Technologies, Build Your Own Stack, Manage Selected Technologies.

Responsive Design: Works on Desktop screens, Laptops, Tablets, Mobile

Technology Data: ID, Name, Category, Description, Icon, Rating, Difficulty, Badge.


React Questions

1. What is JSX, and why is it used in React?
Ans: JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript.

2. What is the difference between props and state?
Ans: Props are used to pass data from a parent component to a child component. A child component should not directly change the props it receives.

State is data managed inside a component. State can change over time, and when it changes, React updates the UI.

3. What does the useState hook do, and where did you use it in this project?
Ans: The useState hook allows a React component to store and update data.

In this project, I used useState to store the technologies that the user has added to their stack.

const [selectedStacks, setSelectedStacks] = useState<IStack[]>([]);

4. What does the useEffect hook do, and why did you need it to load the JSON data?
Ans: useEffect is used to perform side effects after a component renders, such as fetching data. However, in this project I did not use useEffect to load the JSON data. Instead, I used React's use() API to read the Promise containing the technology data. This allowed the component to access the resolved data directly.

5. Why does every item in a .map() list need a unique key prop?
Ans: React needs a unique key to identify each item in a rendered list.

For example:
selectedStacks.map((stack) => (
  <div key={stack.id}>
    {stack.name}
  </div>
))

The key helps React understand which item was added, removed, or changed and update the UI efficiently.

6. What is conditional rendering? Show one place you used it.
Ans: Conditional rendering means displaying different UI depending on a condition.

In this project, I used conditional rendering to show an empty message when no technology has been selected.

{selectedStacks.length === 0 ? (
  <p>No technology selected.</p>
) : (
  selectedStacks.map((stack) => (
    <div key={stack.id}>
      {stack.name}
    </div>
  ))
)}

I also used conditional rendering to change the Add to Stack button text depending on whether a technology was already selected.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Ans: Data is passed from a parent component to a child component using props.

For example:

<StackCard
  stack={stack}
  selectedStacks={selectedStacks}
  handleAddToStack={handleAddToStack}
/>

Here, the parent sends the stack data and a function to the StackCard.
A child component can send something back to the parent by calling a function passed to it through props.

For example, StackCard calls:
handleAddToStack(stack);

The handleAddToStack function is defined in the parent component. When the child calls it, the parent receives the stack data and updates the selectedStacks state.