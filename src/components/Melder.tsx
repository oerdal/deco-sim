import { useState } from 'react'
import decoTable, { Decoration, mapTierToFeystone, rollDecoFromFeystone } from '../sim/melder.ts'

type MelderProps = {
  focusedFeystone: number
}

function Melder({ focusedFeystone }: MelderProps) {
  const [rolledDeco, setRolledDeco] = useState("")

  function handleMeld() {
    const deco = rollDecoFromFeystone(mapTierToFeystone(focusedFeystone))

    if (deco) {
      setRolledDeco(deco["decoration"])
    }
  }

  return (
    <>
      <h2>Melding {mapTierToFeystone(focusedFeystone)} feystones...</h2>
      <button onClick={handleMeld}>Meld</button>
      <p>You rolled decoration {rolledDeco}</p>
    </>
  )
}

export default Melder