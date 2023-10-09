import React from "react";
import CardItem from "../components/UI/CardItem";
import transport from "../data/transport/transport";

function Transport() {

  return (
    <div className="main-container">
      <CardItem
        title={transport[0].title}
        image={transport[0].image}
        titleRus={transport[0].titleRus}
        audio={transport[0].audio}
      />
      <CardItem
        title={transport[1].title}
        image={transport[1].image}
        titleRus={transport[1].titleRus}
        audio={transport[1].audio}
      />
      <CardItem
        title={transport[2].title}
        image={transport[2].image}
        titleRus={transport[2].titleRus}
        audio={transport[2].audio}
      />
    </div>
  );
}

export default Transport;
