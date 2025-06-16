
import { Fonctionnalites } from '../layouts/Fonctionnalities'
import { Footer } from '../layouts/footer'
import { Header } from '../layouts/Header'
import { Plans } from '../layouts/Plans'
import { Product } from '../layouts/Product'

export const Home = () => {
  return (
    <div>
        <Header></Header>
        <Product></Product>
        <Fonctionnalites></Fonctionnalites>
        <Plans></Plans>
        <Footer></Footer>
    </div>
  )
}
