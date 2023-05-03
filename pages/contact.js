import React from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'

const contact = () => {
  return (
    <>
    <div class="contact-me">
    <Link href={'/'} className='apna two'> &larr; Back</Link>
    <p>Let Me Get You A Beautiful Website.</p>
    <a class="button-two" href="#">Hire Me</a>
</div>
<Footer/>
</>
  )
}

export default contact