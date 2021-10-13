import './Home.scss';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List'
import { useEffect, useState } from 'react';
import axios from 'axios'

const Home = ({type}) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(()=>{
        const getRandomList=async ()=>{
            try{
                const res= await axios.get(
                    `lists${type ? "?type="+ type: ""}${genre ? "genre=" + genre: ""}`,{
                        headers:{
                            token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWRhOWExNGRjODk2ZTkzMmM3OGFjNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzc4MjA2NSwiZXhwIjoxNjM0MjE0MDY1fQ.S5W_W1ULNvZ-9zJjwH0hnxG43-hitq1XWE56XV0wmSg"
                        }
                    }
                    );
                    console.log("res here",res)
                    setLists(res.data)
            }catch(err){
                console.log(err)
            }
        };
        getRandomList();
    },[type,genre])
    console.log("lits ne",lists)
    return (
        <div className="home">
           <Navbar/>
            <Featured type={type} setGenre={setGenre}/>
            {lists.map((list)=>(
              <List list={list}/>  
            ))}
           
         
        </div>
    )
}

export default Home
