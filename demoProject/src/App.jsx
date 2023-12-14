import { useState } from 'react'
import Navbar from './component/NavBar';

import Newsboard from './component/NewsBoard';

 const App = () => {
  const [category,setCategory]=useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <Newsboard category={category} />
    </div>
  )
}
export default App
