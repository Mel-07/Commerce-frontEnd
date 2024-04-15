import Header from "./component/Heading/Header"
import Carousel from "./component/curesole/Carousel"
import Main from "./component/main/Main"
import {useAppContext} from "./Context/useContexProvider"

function App() {
const {lightBox}= useAppContext()
  return (
    <div className=" w-full h-screen relative">
    {
      lightBox && <Carousel/>
    }
    <div className="max-w-[1440px]  mx-auto">
    <Header/>
    <Main/>
            {/* <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Okocha Emeka Chinonso </a>.
      </div> */}
    </div>
    </div>
  )
}

export default App
