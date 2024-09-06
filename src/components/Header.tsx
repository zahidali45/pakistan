import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div>
        <Link href="\">Home page</Link>
        <Link href="\name">Name page</Link>
        <Link href="\address">Address page</Link>
    </div>
  )
}

export default Header