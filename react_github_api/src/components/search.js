import axios from "axios";
import { useEffect, useState } from "react";
import {UsersList} from "./users.js"
import { Link } from "react-router-dom";
import "../search.css"

export const Search = () => {
  //useState and Effect must be inside react component always
  const [users, setUsers] = useState([]);
  const [search,setSearch]=useState(null)
  const [searchkey,setSearchKey]=useState(null)

  useEffect(() => {
    //need to use useEffect for async function
    const api_fetch = async () => {
      try{
      let resp = await axios.get(`https://api.github.com/users/${search}`);
      console.log(resp.data);
      let db = resp.data
      setUsers(db);
    }catch(error){
      console.log(error)
  
    }
    };
    if (search) {
            api_fetch();
    } else {
            setUsers([]);
        }
  }, [search]); 
  //empty array means useEffect called only once
  // if (!users) {
  //   return <div>Loading...</div>;
  // }
  
  const handleChange=(e)=>{

      setSearchKey(e.target.value)
   
  }
  
  const handleClick=(e)=>{
   

      setSearch(searchkey || '') //sets setSearch value to '' if search key is empty or null or false or undeifned etc 
  
    console.log(search)
  }
  console.log(search)
  console.log(users.name)
  return(
    <>
  <div className="searchBar">
  <input type="search"  placeholder="Search Users .." onChange={handleChange} />
  <button onClick={handleClick}>Search</button>
  </div>
  
  {(users.name != null || users.length!=0 || search!='' || users.login!=null) && <UserDisplay users={users} />}
  {(search === null || search === ''||String(users.login).toUpperCase()!=search.toUpperCase()) && <UsersList />}

  </>
)
  
  }

function UserDisplay({users}){
  const {avatar_url,name,location,bio,html_url,login,blog,followers,following,public_repos,public_gists}=users
  return(
    <>
    <div className="intro">
    <div className="icon">
    <img src={avatar_url} alt="User-Avatar" />
    <h2>{name}</h2>
    <h3>Location:{location}</h3>
    </div>
    <div className="para">
    <h3>Bio</h3>
    <p>{bio}</p>
    <button><a href={html_url} target="_blank">Git Profile</a></button>
    <h3>Username:{login}</h3>
    <h3>Website:{blog}</h3>
    </div>
    </div>
    <div className="list">
    <div className="item1">
    <h4>Followers:{followers}</h4>
    </div>
    <div className="item2">
    <h4>Following:{following}</h4>
    </div>
    <div className="item3">
    <h4>Public_repos:{public_repos}</h4>
    </div>
    <div className="item4">
    <h4>Public_gists:{public_gists}</h4>
    </div>
    </div>
    <RepoNames login={login}/>
    </>
  )
  }

const RepoNames = ({login}) => {

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    //need to use useEffect for async function
    const api_fetch = async () => {
      let response = await axios.get(`https://api.github.com/users/${login}/repos`);
      console.log(response.data);
      let repo5= response.data.slice(0, 5);
      setRepos(repo5);
    };
    api_fetch();
  }, [login]); //empty array means useEffect called only once
  if (!repos) {
    return <div>Loading...</div>;
  }
  return (
    
    repos.map((repo)=>{
     return <h4 className="comp">{repo.name}</h4>
    })
   
  );
};

export default UserDisplay