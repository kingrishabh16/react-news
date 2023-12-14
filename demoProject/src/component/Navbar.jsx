

const Navbar = ({setCategory}) => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4 ">NewsIndia</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
            
            <a href="#"  class="nav-link" onClick={()=>setCategory("technology")}>Technology</a>
            
        </li>
        <li class="nav-item">
            
                <a href="#" class="nav-link" onClick={()=>setCategory("business")}>Business</a>
            
        </li>
        <li class="nav-item">
            
            <a href="#"  class="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</a>
    
        </li>
        <li class="nav-item">
        
             <a href="#" class="nav-link" onClick={()=>setCategory("health")}>Health</a>
        
        </li>
        <li class="nav-item">
        
          <a href="#" class="nav-link" onClick={()=>setCategory("science")}>Science</a>
        
        </li>
        <li class="nav-item">
        
          <a href="#" class="nav-link" onClick={()=>setCategory("sports")}>Sports</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
    }
export default Navbar