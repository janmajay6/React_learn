import Lesson1 from "./chapters/Lesson1"
import Lesson2 from "./chapters/Lesson2"
import Lesson3 from "./chapters/Lesson3"
import Lesson4 from "./chapters/lesson4"



function App() {

  // Their are 7 types of Hooks in React
  // 1. useState - state ko manage krne ke liye
  // 2. useEffect- side effects ko handle krne ke liye (API calls, subscriptions, timers)
  // 3. useMemo- performance optimization ke liye (heavy computations ko memoize krne ke liye)
  // 4. useRef- DOM references aur mutable values ko manage krne ke liye
  // 5. useReducer- complex state logic ko handle krne ke liye
  // 6. useContext- global state management ke liye
  // 7. useCallback- function references ko memoize krne ke liye
  // useMemo and useCallback performance optimization ke liye use hote hain. Unnecessary re-renders ko avoid krne ke liye.

 // IN THIS PROJECT WE COVER useState AND ADVANCE useState USAGE 
  return (
    <div>
      {/* <Lesson1/> */}
      {/* <Lesson2/> */}
      {/* <Lesson3/> */}
      <Lesson4/>

 
    </div>
  
  )
}

export default App