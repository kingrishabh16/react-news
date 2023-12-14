import {Route} from 'react-router-dom'
import Home from './Component/Home'
import Project from './Component/Project'
import './index.css'
const App=()=> (
  <switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/project" component={Project} />
  </switch>
)

export default App;
