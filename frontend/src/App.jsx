// import { useState } from "react";

import "./App.css";

const testRecipes = [
  {
    id: 1,
    title: "Hot dogs",
    author: "Dave",
    ingredients: "Hot dogs and buns",
    instructions: "Cook",
    image_url: "https://example.com/default_poster.jpg",
  },
  {
    id: 2,
    title: "Kraft dinner",
    author: "Bob",
    ingredients: "Noodles, cheese, milk, water",
    instructions: "Cook",
    image_url: "https://example.com/default_poster.jpg",
  },
  {
    id: 3,
    title: "Fruit salad",
    author: "Jill",
    ingredients: "Fruit",
    instructions: "Chop and mix",
    image_url: "https://example.com/default_poster.jpg",
  },
];

function App() {
  // const [count, setCount] = useState(0)
  const listItems = testRecipes.map((recipe) => (
    <li key={recipe.id}>{recipe.title} ~ By {recipe.author}</li>
  ));

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold underline text-red-600">
          Sporkable!
        </h1>
      </div>
      <ul>{listItems}</ul>
    </>
  );
}

export default App;
