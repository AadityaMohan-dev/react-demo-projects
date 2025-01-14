import Counter from "./projects/project-01/Counter"
import Todo from "./projects/project-02/Todo"
import Meal from "./projects/project-03/Meal"
import Calculator from "./projects/project-04/Calculator"
import ToggleBgColor from "./projects/project-05/ToggleBgColor"
import HiddenSearchBar from "./projects/project-06/HiddenSearchBar"
import Testomonial from "./projects/project-07/Testomonial"
import Accordion from "./projects/project-08/Accordion"
import { accordionData } from "./projects/project-08/accordionData"
function App() {

  return (
    <>
    {/* <Counter/> */}
    {/* <Todo/> */}
    {/* <Meal/>  */}
    {/* <Calculator/> */}
    {/* <ToggleBgColor/> */}
    {/* <HiddenSearchBar/> */}
    {/* <Testomonial/> */}
    <div id="accordion">
      {accordionData.map(({title,content}) => (
        <Accordion title = {title}  content = {content}/>
      ))}
    </div>
    </>
  )
}

export default App
