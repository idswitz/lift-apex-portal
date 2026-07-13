import Link from "next/link"

export default function Navbar(){

return(

<nav className="bg-green-800 text-white p-5">

<div className="max-w-7xl mx-auto flex justify-between">

<h1 className="font-bold text-2xl">
LIFT-APEX
</h1>

<div className="space-x-6">

<Link href="/">Home</Link>

<Link href="/about">About</Link>

<Link href="/manifesto">
Manifesto
</Link>

<Link href="/join">
Join
</Link>

<Link href="/dashboard">
Dashboard
</Link>

</div>

</div>

</nav>

)

}