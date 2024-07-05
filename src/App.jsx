import AutumnColl from "./contents/AutumnColl"
import Footer from "./contents/Footer"
import Languages from "./contents/Languages"
import Navbar from "./contents/Navbar"
import News from "./contents/News"
import Services from "./contents/Services"
import SummerColl from "./contents/SummerColl"
import WinterColl from "./contents/WinterColl"
import Sofa1 from "./contents/Sofa1"
import Sofa2 from "./contents/Sofa2"
import Sofa3 from "./contents/Sofa3"

function App() {

  return (
    <div>
      <Languages/>
      <Navbar/>
      <Services/>
      <Sofa1/>
      <WinterColl/>
      <Sofa2/>
      <SummerColl/>
      <Sofa3/>
      <AutumnColl/>
      <News/>
      <Footer/>
    </div>
  )
}

export default App