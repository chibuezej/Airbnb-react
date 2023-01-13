
import './App.css'
import Card from './component/card'
import HeroSection from './component/Hero-section'
import Navbar from './component/Navbar'
import data from "./component/data"


function App() {
  const cards = data.map(item => {
    console.log(item)
    return (
      <Card  
      key={item.id}
      {...item}
       />
    )
  })

  return (
    <div className="App">
     <Navbar />
     <HeroSection />
     <section className='cards-list'>
     {cards}
     </section>
     
     
    </div>
  )
}

export default App
