import { useState } from 'react'
import mysteriousFeystone from '../assets/mysterious_feystone.png'
import glowingFeystone from '../assets/glowing_feystone.png'
import wornFeystone from '../assets/worn_feystone.png'
import warpedFeystone from '../assets/warped_feystone.png'
import ancientFeystone from '../assets/ancient_feystone.png'
import carvedFeystone from '../assets/carved_feystone.png'
import sealedFeystone from '../assets/sealed_feystone.png'
import './Decorations.css'
import Melder from './Melder'


function Decorations() {
  const [focusedFeystone, setFocusedFeystone] = useState(6)

  return(
    <>
      <div>
        <h3>Decorations</h3>
        <img src={mysteriousFeystone} className={`feystone ${focusedFeystone == 0 ? "focused" : ""}`} onClick={() => setFocusedFeystone(0)} alt="Mysterious Feystone"/>
        <img src={glowingFeystone} className={`feystone ${focusedFeystone == 1 ? "focused" : ""}`} onClick={() => setFocusedFeystone(1)} alt="Glowing Feystone"/>
        <img src={wornFeystone} className={`feystone ${focusedFeystone == 2 ? "focused" : ""}`} onClick={() => setFocusedFeystone(2)} alt="Worn Feystone"/>
        <img src={warpedFeystone} className={`feystone ${focusedFeystone == 3 ? "focused" : ""}`} onClick={() => setFocusedFeystone(3)} alt="Warped Feystone"/>
        <img src={ancientFeystone} className={`feystone ${focusedFeystone == 4 ? "focused" : ""}`} onClick={() => setFocusedFeystone(4)} alt="Ancient Feystone"/>
        <img src={carvedFeystone} className={`feystone ${focusedFeystone == 5 ? "focused" : ""}`} onClick={() => setFocusedFeystone(5)} alt="Carved Feystone"/>
        <img src={sealedFeystone} className={`feystone ${focusedFeystone == 6 ? "focused" : ""}`} onClick={() => setFocusedFeystone(6)} alt="Sealed Feystone"/>
      </div>
      <Melder focusedFeystone={focusedFeystone} />
    </>
  )
}

export default Decorations