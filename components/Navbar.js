import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav>
		<h2 class="logo">Portfo<span>lio</span></h2>
			<ul>
				<li><a href="/Home.html">Home</a></li>
				<li><a href="/About.html">About Us</a></li>
				<li><a href="/Services.html">Services</a></li>
				<li><a href="/contact.html">Contact Us</a></li>
			</ul>
			<a href="#" class="btn">Subscribe</a>
		</nav>
    </>
  )
}

export default Navbar