/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {useState} from 'react'
import useSound from "use-sound";
import rotate from "./icons/rotate-btn.png";

function CardItem(props) {
  const {titleRus, image, audio} = props
  const [title, setTitle] = useState(props.title)
  const [playAudio] = useSound(audio);
  

  const clickHandler = () => {
    setTitle(titleRus)
  }

    return (
    <div className="card-container">
      <div className="card-side card-side-front">
        <img src={image} alt="" className="card-container__img" onClick={playAudio} />
        <h3 className="card-container__title" onClick={playAudio}>{title}</h3>
        <button type="button" className="card-container__btn" onClick={clickHandler}>
          <img src={rotate} alt="rotate" />
        </button>
      </div>
      <div className="card-side card-side-back">
        <img src={image} alt="" className="card-container__img" />
        <h3 className="card-container__title">{titleRus}</h3>
      </div>
    </div>
  );
}

export default CardItem