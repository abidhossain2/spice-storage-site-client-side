import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([])
    useEffect( () => {
        fetch('https://spice-server-l1gh.onrender.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return [products, setProducts]
}
export default useProducts;