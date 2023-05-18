export default function LikesSalesPage() {
    return (
      <div>
        <h2>Ofertas Favoritas</h2>
        {LikedSales.map((sale) => (
            <Likedsales />
        ))}
      </div>
    )
  }