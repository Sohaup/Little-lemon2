//import logo from 'assests/';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Link , Route , Routes } from 'react-router-dom';
import {CatalogMain } from './catalog';
//import grilled from "assests/grilled.jpg";
function Factor()  {
  return <h1 style={{position:"absolute",top:"80px"}}>Welcome</h1>
}
function Factor2()  {
  return <h1 style={{position:"absolute",top:"80px"}}>Welcome There</h1>
}
function Section1() {
  return (
    <section className='position-absolute d-flex flex-row w-100 ' style={{height:"200px",top:"64px",left:"0px",backgroundColor:"lightgreen",gap:"52%"}} >
      <article className='position-relative d-flex flex-column ' style={{gap:"10%",marginLeft:"9%"}}>
        <h1 style={{color:"black",fontSize:"30px"}}>Its Your Time To Enjoy</h1>
        <p style={{color:"black",fontFamily:"sans-serif"}}>We will help you enjoy your life and Refresh Your Self </p>
        <button className='btn position-relative' style={{backgroundColor:"black",width:"80%",color:"white"}}>Know More</button>
      </article>
      <div className='card bg-danger position-absolute ' style={{left:"70%",top:"20%",height:"200px"}}>
      <img src='./assests/main.jpg' className='position-relative w-100 h-100 card-img-top' style={{border:"2px solid crimson",borderRadius:"16px"}}></img> 
      </div>
    </section>
  )
}
function Article(props) {
return (
  <article className='position-relative w-25 ' style={{marginLeft:"20px",zIndex:'10',marginTop:props.margin}} >
    <div className='card' style={{borderWidth:props.border,borderStyle:"solid",borderColor:"skyblue",backgroundColor:"whitesmoke"}}>
      <div className='card-title' style={{backgroundColor:"beige",borderRadius:"16px"}}><h2>{props.title}</h2></div>
      <div className='card-img-top'><img src={props.path} className='position-relative w-100'></img></div>
      <div className='card-text'><p>{props.text}</p></div>
    </div>
  </article>
)
}
function Section2() {
  return (
    <section className='position-absolute w-100 d-flex flex-row' style={{height:"auto",backgroundColor:"transparent",top:"500px",left:"0px",gap:"10%"}}>
    <Article title="Quality" path="./assests/meat.jpg" text="Let Our Quality Tailk Instead Of Us" margin="10px" border="2px"/>
    <Article title="CostumerS Review " path="./assests/costumer.jpg" text="We Deal With Our Costumer As A part Of Our Family" margin="0px" border="0px"/>
    <Article title="Regist A Table" path="./assests/Table.jpg" text="Don`t Waste The Time" margin="10px" border="2px"/>
    </section>
  )
}
function Main() {
  return (
    <main>
      <Section1/>
      <Section2/>
    </main>
  )
}

function Header() {
  return (
    <header className='d-flex flex-col gap-3'>
    <img src="./assests/logo.jpg" width={50} height={50} style={{borderRadius:"50%"}}></img>
    <p style={{color:"gold",fontSize:"30px",textAlign:"left"}}>We Know What We Do</p>
    </header>
  )
}

function Ul() {
  var style = {
    textDecoration:"none",
    fontFamily:"sans-serif",
    fontSize:"22px",
    fontWeight:"bold",
    color:"white",
    position:"relative",
    top:"5px"
  }
  var ulStyle = {
    display:"flex",
    flexDirection:"row",
    gap:"15px"
  }
  return (
    <>
    <ul type='none' style={ulStyle}>
      <li><Link to='/' active style={style}>Home</Link></li>
      <li><Link to='/catalog' style={style}>Catalog</Link></li>
      <li><Link to='/registation' style={style}>Registation</Link></li>
      <li><Link to='/order-online' style={style}>OrderOnline</Link></li>
      <li><Link to='/menu' style={style}><button className='btn btn-success' style={{height:"35px",marginTop:"5px"}}><img src='./assests/three-dots.svg'></img></button></Link></li>
    </ul>
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/catalog' element={<CatalogMain/>} />
      <Route path='/registation' element={<Factor/>} />
      <Route path='/order-online' element={<Factor/>} />
      <Route path='/menu' element={<Factor2/>}/>
    </Routes>
    </>
  )
}
function Nav() {
  var style = {
    position:"sticky",
    top:"0px",
    width:"100%",
    height:"50px"
  }
  return (
    <nav className='bg-dark'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'><Header/></div>
          <div className='col-6'><Ul/></div>
        </div>
      </div>
    </nav>
  )
}
function Footer()  {
  return (
    <footer className='d-flex flex-row bg-dark' style={{position:"absolute",bottom:"0px",gap:"1000px",width:"100%",height:"60px"}}>
      <img src='./assests/logo.jpg' width={50} height={50} style={{borderRadius:"50%"}}></img>
      <h3 style={{color:"gold",fontSize:"25px"}}>All Copy Right Saved For LittleLemon </h3>
    </footer>
  )
}
function App() {
  return (
   <BrowserRouter>
   <Nav/>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
