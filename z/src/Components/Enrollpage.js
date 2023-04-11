

import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";

export const Enroll = () => {
const [searchParams ,setSearchParams] =useSearchParams()
const navigate = useNavigate();
const search =useLocation().search
const hours =new URLSearchParams(search).get("Hour")

  const handlechange = (e) => {
    const {name,value} =e.target
  
    setSearchParams({[name]: value}) 

   



  }



const Changpage = () => {


  if(hours>1){
    navigate({
      pathname: '/Schedulepage',
      search: `?${searchParams}`,
    });
  }else{
    alert("Please Select the Hours Per day")
  }
 

 

}



  return (
    <div>
      <h1>Learn with Zaio</h1>
      <div style={{backgroundColor:"skyblue",width:"20%",margin:"auto",height:"200px",justifyContent:"center",}}>
      <h4>Enroll Now</h4>
      <form>
        <br />
        <select>
       
          <option value="java">Java Course</option>
        </select>
        <br />
        <select name="Hour" onChange={handlechange} >
        <option value="">Hours per day</option>
          <option value="2">2 hours per day</option>
          <option value="4">4 hours per day</option>
          <option value="6">6 hours per day</option>
        </select>
        <br />
   
          <button className="background" onClick={Changpage} >Enroll Now</button>
   
      </form>
      </div>
    </div>
  );
};
