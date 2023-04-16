import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";


/* Component hierarchy sketch

App (toys, handleAddToy, handleDeleteToy, handleUpdateToy [for liking])
|── Header
|── ToyForm (newToy, handleAddToy)
|── ToyContainer (toys, handleDeleteToy, handleUpdateToy [for liking])
    |–– ToyCard (toy, handleDeleteToy, handleUpdateToy [for liking])

*/

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(getToysData,[]);

  function getToysData(){
    fetch('http://localhost:3001/toys')
      .then(r => r.json())
      .then(toys => setToys(toys))
  }
   
  function handleShowFormClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddToy(newToy){
    fetch('http://localhost:3001/toys', {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(newToy)
    })
    .then(r => r.json())
    .then(newlyAddedToy => setToys([...toys, newlyAddedToy]))
  }

  function handleDeleteToy(id){
    fetch('http://localhost:3001/toys/'+id, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => setToys(
      toys.filter(toy => toy.id !== id)
    ))
  }

  function handleUpdateToy(id, update){
    fetch('http://localhost:3001/toys/'+id, {
      method: "PATCH",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(update)
    })
    .then(r => r.json())
    .then(updatedToy => setToys(
      toys.map(toy =>
        updatedToy.id === toy.id ? updatedToy : toy
        )
      )
    )
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleShowFormClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toys={toys}  
        onDeleteToy={handleDeleteToy} 
        onUpdateToy={handleUpdateToy}
      />
    </>
  );
}

export default App;
