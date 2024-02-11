import { useDispatch, useSelector } from "react-redux";
import { useState} from "react";
import { getFormById} from "../../redux/Actions/getFormById";
import { useNavigate } from "react-router-dom";
import style from "./SearchForm.module.css"


export default function SearchForm() {
   const navigate = useNavigate()
   const dispatch = useDispatch();
   const [code, setCode] = useState("");
   const allForms = useSelector((state) => state.allForms)
   const allResponses = useSelector((state) => state.allResponses)
   const myId = localStorage.getItem("clientId");

   const userSavedForms = allResponses?.filter(res=> res?.User1Id === Number(myId))
   
   const match = userSavedForms?.find(res=>res?.FormId=== Number(code) )
  
   const exists = allForms?.find(form=>form?.id === Number(code))
  
console.log(allForms);
   const handleChange = (event) => {
      const value = event.target.value
      setCode(value)
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      const codenum = Number(code)
      dispatch(getFormById(codenum));
      setCode('')
      if(match === undefined && exists ){
         localStorage.setItem("form", codenum);
         navigate(`/form/${codenum}`)};
      if(match)alert("Ya has realizado este formulario") ;
      if(!exists)alert("Codigo no valido!");
   };

   return (
   <div className={style.searchbar}>
      <input className={style.input} placeholder=' Insertar PIN ' value ={code} onChange={(event) => handleChange(event)}/>
      <button className={style.button} type='submit' onClick={(event) => handleSubmit(event)}>🔍</button>  
   </div>
   );
}
