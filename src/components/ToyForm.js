import React, {useState} from "react";

function ToyForm({onAddToy}) {

  const [newToy, setNewToy] = useState({
    name: '',
    image: ''
  })

  function handleFormInputChange(e){
    setNewToy({...newToy, [e.target.name]: e.target.value})
  }

  function handleFormSubmit(e){
    e.preventDefault();
    onAddToy(newToy);
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleFormSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleFormInputChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleFormInputChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
