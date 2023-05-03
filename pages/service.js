import Footer from '@/components/Footer'
import React from 'react'
import Link from 'next/link'

const service = () => {
  return (
   <>
   <div class="service">
   <Link href={'/'} className='apna'> &larr; Back</Link>
		<div class="title">
			<h2>Our Services</h2>
		</div>

		<div class="box">
			<div class="card">
				<i class="fas fa-bars"></i>
				<h5>Web Development</h5>
				<div class="pra">
					<p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>

					<p  className='text-center'>
						<a class="button" href="#">Read More</a>
					</p>
				</div>
			</div>

			<div class="card">
				<i class="far fa-user"></i>
				<h5>Web Development</h5>
				<div class="pra">
					<p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>

					<p className='text-center'>
						<a class="button" href="#">Read More</a>
					</p>
				</div>
			</div>

			<div class="card">
				<i class="far fa-bell"></i>
				<h5>Web Development</h5>
				<div class="pra">
					<p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>

					<p className='text-center'>
						<a class="button" href="#">Read More</a>
					</p>
				</div>
			</div>
		</div>
	</div>
    <Footer/>
   </>
  )
}

export default service