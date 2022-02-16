import React,{useRef,useState,useEffect} from 'react';
import './style.css';

function App() {
  const [state,setstate]=useState<string[]>([])
  const [name,setname]=useState<string | null >(" ")
  const input=useRef<HTMLInputElement>(null)

useEffect(()=>{
const e=prompt('what is your name ?')
const n=e===null ? setname('People'): setname(e);

},[])

const re=():void=>{
let a=input.current!.value
if(input.current!.value===""){
 console.log('write something')
}else{
  words(a)
}
}

const words=(str:string):void=>{
  setstate([...state,str])
}

const aa=(e:React.FormEvent<HTMLFormElement>):void=>{
  e.preventDefault()
  input.current!.value=""
}

const del=(index:number):void=>{
let c=state.filter((elem,id)=>index!==id)
setstate(c)

}
  return (  
<div className="row">
<h1>ToDo LIst</h1>
<form className="col s12"  onSubmit={aa}  >
  <div className="row">
    <div className="input-field col s6">
      <i className="material-icons prefix">mode_edit</i> 
      <input id="icon_prefix2" className="materialize-textarea" placeholder={`Hello ${name}`} ref={input} />    
      <button onClick={re} className='btn1'>send</button>
      {state.map((elem,id)=><p key={id} className='p'>{elem}<button onClick={()=>del(id)} className='btn2'>X</button></p>)}
    </div>
  </div>
</form>
</div>
  );
}
export default App;