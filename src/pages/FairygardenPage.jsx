import { useState } from 'react';
import '../style.css'; 
import fairy from './images/miafairy.png';
import mushroom from './images/mushroom.png';
import elf from './images/elf.png';
import flower from './images/flower.png';
import fairy2 from './images/fairy2.png';
import vampire from './images/vamp.png';
import boyfairy from './images/boyfairy.png';
import toad from './images/toad.png';
import fairyhouse from './images/fairyhouse.png';
import pond from './images/pond.png';
import forest from './images/forest.png';
import treehouse from './images/treehouse.png';

const items = [
  { id: 'fairy', src: fairy, alt: 'Fairy', info: 'what would we look like as fairies? fairies are magical creatures said to live in gardens and forests! this one looks like a Mia fairy' },
  { id: 'mushroom', src: mushroom, alt: 'Mushroom', info: 'this is a fly agaric mushroom – it looks magical but is not edible!' },
  { id: 'elf', src: elf, alt: 'Elf', info: 'this is a missa elf. she loves to play with the fairies.' },
  { id: 'flower', src: flower, alt: 'Flower', info: 'flowers attract fairies and butterflies. some even close at night!' },
  { id: 'fairy2', src: fairy2, alt: 'Fairy Friend', info: 'This fairy friend loves to sing with the birds at dawn. This is Mias fairy friend Ann' },
  { id: 'vampire', src: vampire, alt: 'Vampire Fairy', info: 'Some vampires come out at night! This one watches over my website.' },
  { id: 'boyfairy', src: boyfairy, alt: 'Boy Fairy', info: 'Boy fairies are just as magical as girl fairies. This one builds tiny bridges from leaves and twigs!' },
  { id: 'toad', src: toad, alt: 'Grumpy Toad', info: 'This grumpy toad is actually very kind. He just doesn’t like getting wet feet! He knows all the garden’s secrets.' },
  { id: 'fairyhouse', src: fairyhouse, alt: 'Fairy House', info: 'This cozy fairy house is strung with lights and made from acorns and bark. Fairies rest here after long days!' },
  { id: 'pond', src: pond, alt: 'Pond with Ducks', info: 'Ducks like this little pond, but so do water fairies! Look closely and you might see sparkles on the surface.' },
  { id: 'forest', src: forest, alt: 'Mini Forest', info: 'This little forest is full of whispering trees and tiny trails. Fairies go here to play hide and seek.' },
  { id: 'treehouse', src: treehouse, alt: 'Treehouse', info: 'Mia’s fairy lives in this treehouse! It has the best view of the stars at night.' }
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
          onError={(e) => {
            console.error(`Failed to load image for ${id}:`, src);
            e.currentTarget.style.display = 'none';
          }}
        />
      ))}
      <div className="info-box">{info}</div>
    </div>
  );
}
