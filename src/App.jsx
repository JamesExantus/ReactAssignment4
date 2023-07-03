import { useState } from 'react'

import RecipeList from './RecipeList'
import recipesData from './recipes'
import './App.css';
import './styles.css';
import Modal from './ui/modal';

const statuses = {
  1: "easy",
  2: "basic",
  3: "hard",
 
};

function SearchBar() {
  const [query, setQuery] = useState('');
  

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <label>
      Search:{' '}
      <input
        value={query}
        onChange={handleChange}
      />
    </label>
  );
}



function App() {
  const [recipes, setRecipes] = useState(recipesData);

 const [query, setQuery] = useState('');
 const [selectedStatus, setSelecetedStatus] = useState(1);
 const [isModalVisible, setIsModalVisible] = useState(false);

 

 const RecipeLists = recipes.map((recipe, i) => {
    return <RecipeList recipe={recipe} key={i} />;
  });

   const statusButtons = Object.keys(statuses).map(statusId => {
    return <button key={statusId} className={selectedStatus === parseInt(statusId) ? "bg-blue-500" : ""}
      onClick={() => setSelecetedStatus(parseInt(statusId))}
    >{statuses[statusId]}</button>
  })

  const showModal = () => {
    setIsModalVisible(true);
  }

   const hideModal = () => {
    setIsModalVisible(false);
  }

  const handleAddJobFormSubmit = (e) => {
    e.preventDefault();
  }
  return (
    
    <div>
    <div className="grid grid-cols-6 my-4">{statusButtons}</div>
    <div className="flex justify-between">
      <div></div>
      <div><button className="bg-blue-500 px-4 py-2" onClick={showModal}>+ Add Recipe</button></div>
    </div>
    <SearchBar />
    <h1>Recipe Finder</h1> 
      <RecipeList recipes={recipes[0]} />
      <RecipeList recipes={recipes[1]} />
      <RecipeList recipes={recipes[2]} />
      
    <Modal 
      isVisible={isModalVisible}
      hideModal={hideModal} >
        <form onSubmit={handleAddJobFormSubmit}
        className="selection:bg-blue-200 flex flex-col gap-2"
        >
          <h1>add new recipe to site</h1>
          <fieldset className="flex flex-col">
            <label htmlFor="title">Recipe Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-white border-4 focuse:outline-none"
              />
          </fieldset>

           <fieldset className="flex flex-col">
            <label htmlFor="title">Directions</label>
            <input
              type="text"
              name="directions"
              id="directions"
              className="bg-white border-4 focuse:outline-none"
              />
          </fieldset>

           <fieldset className="flex flex-col">
            <label htmlFor="title">Difficulty</label>
            <input
              type="text"
              name="Difficulty"
              id="Difficulty"
              className="bg-white border-4 focuse:outline-none"
              />
          </fieldset>

           <fieldset className="flex flex-col">
            <label htmlFor="title">Stars</label>
            <input
              type="text"
              name="stars"
              id="stars"
              className="bg-white border-4 focuse:outline-none"
              />
          </fieldset>
          
        </form>
    </Modal>

    </div>
     
    
  )
}
export default App

