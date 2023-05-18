export default function LikedSales(sale){
    const [likedSales, setLikedSales] = useState([])
    const handleClick = () => {
        if (likedSales.includes(sale)) {
            setLikedOffers(likedOffers.filter((likedSale) => likedSale !== sale));
        }else{
            setLikedOffers([...likedOffers, offer])
        }
    }
    return(
        <sale />
    )
}