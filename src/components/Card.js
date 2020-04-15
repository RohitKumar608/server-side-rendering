import React from "react";
const divStyle = {
    backgroundColor: '#eee',
    width: '20%',
    padding: '11px',
    margin: '7px'
}
const card = props => {
  return (
    <div className="card" style={divStyle}>
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={`${props.thumbnailUrl}`}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text" style={{maxWidth: '66%'}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>

        </div>
      </div>
    </div>
  );
};

export default card;
