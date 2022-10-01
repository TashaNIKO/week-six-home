function Dogs ({anyWord}) {
return(
    <div>
     {anyWord.map ((element=> {
     const {id, image}= element; 
     return(
        <div key={id}>
        <p>{id}</p>
        <img src={image} alt="dog"/>
        </div>
     ) 
     }))}   
    </div>
)
}
export default Dogs;