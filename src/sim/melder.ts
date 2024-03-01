import decoDropTable from '../../public/deco_table.json'

export type Decoration = {
  rarity: number,
  decoration: string,
  probability: number
}


type DecoTable = {
  dropRates: Record<string, Record<string, Decoration>>,
  cumProbs: Record<string, number[]>
}

const decoTable = decoDropTable as DecoTable;

export function mapTierToFeystone(tier: number) {
  switch(tier) {
    case 0:
      return 'Mysterious'
    case 1:
      return 'Glowing'
    case 2:
      return 'Worn'
    case 3:
      return 'Warped'
    case 4:
      return 'Ancient'
    case 5:
      return 'Carved'
    case 6:
      return 'Sealed'
    default:
      return ''
  }
}


export function rollDecoFromFeystone(feystone: string) : Decoration {
  if (decoTable['dropRates'].hasOwnProperty(feystone)) {
    const cumProbs = decoTable['cumProbs'][feystone]
    const dropData = decoTable['dropRates'][feystone]
    
    const n = cumProbs.length
    const r = Math.random()*cumProbs[n-1]

    console.log(r)

    // do binary search within the cumProbs to find the value

    let l = 0, h = n-1
    let m = 0

    while (l < h) {
      m = h + l / 2
      
      let p = cumProbs[m]

      if (r <= p) {
        // check the element to the left
        if (m == l || r > cumProbs[m-1]) {
          break
        } else {
          h = m-1
        }
      } else {
        // check the element to the right
        if (m == h-1 || r <= cumProbs[m+1]) {
          break
        }
          l = m+1
      }
    }

    // m should be the index of the correct deco
    const deco = Object.values(dropData)[m]

    return deco
  }

  return {} as Decoration

}

export default decoTable;