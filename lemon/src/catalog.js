var Recommended = [
    {name:"HotDog",price:"10$"},
    {name:"FriedChicken",price:"15$"},
    {name:"CookedMeat",price:"20$"},
    {name:"MeatBurger",price:"25$"}
]
var style = {
    color:"crimson"
}
function Article(props) {
    return (
        <article className="position-relative w-25 " style={{height:"80px",borderRadius:"16px",left:props.margin,top:"15px"}}>
            <div className="card cardArticle" style={{backgroundColor:"whitesmoke"}}>
                <div className="card-title text-center">
                    <h2>{props.title}</h2>
                </div>
                <div className="card-text">
                    <ul type="none">
                        <li>Name:<span style={style}>{Recommended[0].name}</span> Price:<span style={style}>{Recommended[0].price}</span><br></br> <button className="btn btn-dark">Add To Cart</button></li>
                        <li>Name:<span style={style}>{Recommended[1].name}</span> Price:<span style={style}>{Recommended[1].price}</span><br></br> <button className="btn btn-dark">Add To Cart</button></li>
                        <li>Name:<span style={style}>{Recommended[2].name}</span> Price:<span style={style}>{Recommended[2].price}</span><br></br> <button className="btn btn-dark">Add To Cart</button></li>
                        <li>Name:<span style={style}>{Recommended[3].name}</span> Price:<span style={style}>{Recommended[3].price}</span> <br></br><button className="btn btn-dark">Add To Cart</button></li>
                    </ul>
                </div>
                <div className="position-relative text-center">
                    <button className="btn btn-outline-success">Know More</button>
                </div>
            </div>
        </article>
    )
}

    
function CatalogSection1() {
    return (
        <section className="position-absolute d-flex flex-row w-75 h-50" style={{top:"60px",left:"10%",gap:"30%"}}>
            <Article title="Recommended" margin="20%"/>
            <Article title="Meat" margin="0px"/>            
        </section>
    )
}
function CatalogSection2() {
    return (
        <section className="position-absolute d-flex flex-row w-75 h-50" style={{top:"80%",left:"10%",gap:"30%"}}>
            <Article title="Chicken" margin="20%"/>
            <Article title="Light Meals" margin="0px"/>            
        </section>
    )
}
function CatalogMain() {
    return (
        <main>
            <CatalogSection1/>
            <CatalogSection2/>
        </main>
    )
}
export { CatalogMain};