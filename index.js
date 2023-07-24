const element = (
  <div className="bg-container">
    <h1 className="title">Congratulations</h1>
    <div className="card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        alt="person"
      />
      <h1 className="name">Kiran V</h1>
      <p className="collegeName">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        alt="watch"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
