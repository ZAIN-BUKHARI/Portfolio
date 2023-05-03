import React from 'react'
import Footer from '@/components/Footer'
import Link from 'next/link'
const home = () => {
  return (
    <>
    <div className="hero">
		<nav>
			<h2 className="logo">Portfo<span>lio</span></h2>
			<ul>
				<li><a href="/">Home</a></li>
				<li><Link href="./about">About Us</Link></li>
				<li><Link href="./service">Services</Link></li>
				<li><Link href="./contact">Contact Us</Link></li>
			</ul>
			<a href="#" className="btn">Subscribe</a>
		</nav>

		<div className="content">
			<h4>Hello, my name is</h4>
			<h1>Zain <span>Bukhari</span></h1>
			<h3>I'am a Web Developer.</h3>
			<div className="newslatter">
				<form>
					<input type="email" name="email" id="mail" placeholder="Enter Your Email"/>
					<input type="submit" name="submit" value="Lets Start"/>
				</form>
			</div>
		</div>
	</div>
  <Footer/>
  </>
  )
}

export default home