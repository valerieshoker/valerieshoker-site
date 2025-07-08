import { useState } from 'react';
import './style.css'; 

const items = [
  { id: 'fairy', src: '/images/miafairy.png', alt: 'Fairy', info: 'what would we look like as fairies? fairies are magical creatures said to live in gardens and forests! this one looks like a Mia fairy' },
  { id: 'mushroom', src: '/images/mushroom.png', alt: 'Mushroom', info: 'this is a fly agaric mushroom – it looks magical but is not edible!' },
  { id: 'elf', src: '/images/elf.png', alt: 'Elf', info: 'this is a missa elf. she loves to play with the fairies.' },
  { id: 'flower', src: '/images/flower.png', alt: 'Flower', info: 'flowers attract fairies and butterflies. some even close at night!' },
  { id: 'fairy2', src: '/images/fairy2.png', alt: 'Fairy Friend', info: 'This fairy friend loves to sing with the birds at dawn. This is Mias fairy friend Ann' },
  { id: 'vampire', src: '/images/vamp.png', alt: 'Vampire Fairy', info: 'Some vampires come out at night! This one watches over my website.' },
  { id: 'boyfairy', src: '/images/boyfairy.png', alt: 'Boy Fairy', info: 'Boy fairies are just as magical as girl fairies. This one builds tiny bridges from leaves and twigs!' },
  { id: 'toad', src: '/images/toad.png', alt: 'Grumpy Toad', info: 'This grumpy toad is actually very kind. He just doesn’t like getting wet feet! He knows all the garden’s secrets.' },
  { id: 'fairyhouse', src: '/images/fairyhouse.png', alt: 'Fairy House', info: 'This cozy fairy house is strung with lights and made from acorns and bark. Fairies rest here after long days!' },
  { id: 'pond', src: '/images/pond.png', alt: 'Pond with Ducks', info: 'Ducks like this little pond, but so do water fairies! Look closely and you might see sparkles on the surface.' },
  { id: 'forest', src: '/images/forest.png', alt: 'Mini Forest', info: 'This little forest is full of whispering trees and tiny trails. Fairies go here to play hide and seek.' },
  { id: 'treehouse', src: '/images/treehouse.png', alt: 'Treehouse', info: 'Mia’s fairy lives in this treehouse! It has the best view of the stars at night.' }
];

export default function FairyGarden() {
  const [info, setInfo] = useState('Click on any object to learn something!');

  return (
    <div className="garden-container">
      {items.map(({ id, src, alt, info: itemInfo }) => (
        <img
          key={id}
          id={id}
          src={src}
          alt={alt}
          className="item"
          draggable
          onClick={() => setInfo(itemInfo)}
        />
      ))}
      <div className="info-box">{info}</div>
    </div>
  );
}
