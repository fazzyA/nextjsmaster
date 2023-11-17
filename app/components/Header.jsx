import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <nav>
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/settings">Settings</Link>
    </nav>
  )
}

export default Header