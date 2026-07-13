import Navbar from "../components/Navbar"
import Hero from "../components/Hero"

export default function Home(){

return(

<div>

<Navbar/>

<Hero/>

<section className="max-w-7xl mx-auto py-16">

<h2 className="text-3xl font-bold">

The 4Cs

</h2>

<div className="grid md:grid-cols-4 gap-6 mt-10">

<div className="shadow p-6">
<h3>Character</h3>
</div>

<div className="shadow p-6">
<h3>Competence</h3>
</div>

<div className="shadow p-6">
<h3>Civility</h3>
</div>

<div className="shadow p-6">
<h3>Contentment</h3>
</div>

</div>

</section>

<section className="bg-gray-100 py-16">

<div className="max-w-7xl mx-auto">

<h2 className="text-3xl font-bold">

Community Programs

</h2>

<div className="grid md:grid-cols-3 gap-8 mt-8">

<div className="bg-white p-6 shadow">

Agriculture

</div>

<div className="bg-white p-6 shadow">

Education

</div>

<div className="bg-white p-6 shadow">

Health

</div>

</div>

</div>

</section>

</div>

)

}