
import ReactDOM from "react-dom/client"
import "./user_style.css"
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
  //   <Route exact path="/home" element={<UsersList/>}/>
  //   {/* <Route exact path="/users" element={<UsersDisplay/>}/> */}
  // </Routes>
  //  </Router> )

  <Search/>)
}

const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(<App/>)


