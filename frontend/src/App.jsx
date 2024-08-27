// import { useState } from "react";

import "./App.css";
import { Navbar } from "./components/Navbar";

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
    <div key={recipe.id}>
      <h1 className="text-4xl">{recipe.title}</h1>
      <h2 className="text-2xl">Author: {recipe.author}</h2>
      <p>{recipe.image_url}</p>
      <p>Ingredients: {recipe.ingredients}</p>
      <p>Cooking instructions: {recipe.instructions}</p>
      <hr />
    </div>
  ));

  return (
    <>
    <Navbar/>
      <div>
        <h1 className="text-4xl font-bold underpne text-red-600 border-4 border-solid border-indigo-500">
          Sporkable!
        </h1>
      </div>
      <div>{listItems}</div>
    </>
  );
}

export default App;
