import BoxGrid from './BoxGrid';
import LuckyN from './LuckyN'
import { sum } from './utils'

function lessThan4(dice) {
  return sum(dice) <4;
}

function allSameValue(dice) {
  return dice.every((v) => v === dice[0])
}

function App() {
  return (
    <>
      <BoxGrid />
       {/* <LuckyN winCheck={lessThan4} title="Rol LessThan 4"/>
       <LuckyN winCheck={allSameValue} title="Roll The Same Number"/> */}
    </>
  )
}

export default App
