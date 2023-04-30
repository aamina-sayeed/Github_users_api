
import ReactDOM from "react-dom/client"
import "./style.css"
import { Search} from  "./components/search.js"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import { UsersList } from "./components/users.js"
// import UsersDisplay from "./components/search.js"
// import { BrowserRouter as Router,Routes,Route} from "react-router-dom"

function App(){
  return(
  //   <Router>
  // <Search/> 
  // <Routes>
  //   <Route exact path="/github" element={<UsersList/>}/>
  //   {/* <Route exact path="/users" element={<UsersDisplay/>}/> */}
  // </Routes>
  //  </Router> )

<Search/>)
}

const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(<App/>)