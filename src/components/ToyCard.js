import React from "react";

function ToyCard({toy, onDeleteToy, onUpdateToy}) {

  function handleDeleteClick(){
    onDeleteToy(toy.id)
  }

  function handleLikeClick(){
    const update = {likes: toy.likes+1}
    onUpdateToy(toy.id, update)
  }
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
