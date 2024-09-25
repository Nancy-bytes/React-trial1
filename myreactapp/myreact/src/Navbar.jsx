const Navbar=()=>{
    return(
        <nav className="Navbar" >
        <h1>My blog</h1>
        <div className="Links">
        <a href="/">Home</a>
        <a href="/create" style={{ color:"white", backgroundColor:"#f1356d", borderRadius:"15px"}}>New Blog</a>

        </div>
        </nav>
    )
}
export default Navbar