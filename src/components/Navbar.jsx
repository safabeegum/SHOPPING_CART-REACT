import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">AMAZON</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link" to="/">ADD ITEM</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/search">SEARCH ITEM</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/delete">DELETE ITEM</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/viewall">VIEW ITEM</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/news">NEWS</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar