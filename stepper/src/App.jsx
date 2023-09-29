import './App.css'
import './assets/styles/Personalinfo.css'
import './assets/styles/Planinfo.css'
import './assets/styles/PickAddOns.css'
import './assets/styles/Finish.css'
import Personalinfo from '../src/stepper-info/Personalinfo.jsx'
import Planinfo from '../src/stepper-info/Planinfo.jsx'
import PickAddOns from '../src/stepper-info/PickAddOns'
import Finishing from '../src/stepper-info/Finishing'

function App() {

  return (
    <>
    <Personalinfo />
    <PickAddOns />
    <Planinfo />
    <Finishing />
</>       
  )
}

export default App
