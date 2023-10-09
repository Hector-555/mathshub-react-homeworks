import bird from "./img/bird.jpg";
import cat from "./img/cat.jpg";
import chick from "./img/chick.jpg";

import birdAudio from "./audio/bird.mp3";
import catAudio from "./audio/cat.mp3";
import chickAudio from "./audio/chick.mp3";

const transport = [
  {
    title: "Bird",
    image: bird,
    titleRus: "Птица",
    audio: birdAudio,
    id: Math.random().toString(),
  },
  {
    title: "Cat",
    image: cat,
    titleRus: "Кот",
    audio: catAudio,
    id: Math.random().toString(),
  },
  {
    title: "Chick",
    image: chick,
    titleRus: "Птенец",
    audio: chickAudio,
    id: Math.random().toString(),
  },
];

export default transport;
