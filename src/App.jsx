
import NavBar from "./components/NavBar"
import {
  Footer,
  CustomerReviews,
  Hero,
  PopularProdct,
  Services,
  SpecialOffer,
  SuberQuality,
  Subscribe,
} from "./sections/index"


export default function App() {
  return (
    <main className="relative">
      <NavBar/>
      <section className="xl:padding-l wide:padding-r padding-b"><Hero/></section> 
      <section className="padding"><PopularProdct/></section>
      <section className="padding"><SuberQuality/></section>
      <section className="padding "><Services/></section>
      <section className="padding"><SpecialOffer/></section>
      <section className="padding"><CustomerReviews/></section>
      <section className="padding-x sm:py-32 py-16 w-full"><Subscribe/></section>
      <section className="bg-black  padding-x padding-t pb-8"><Footer/></section>
    </main>
  )
}  


