function Home() {
  return (
    <div>
      
      {/* Hero */}
      <section className="bg-red-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Đặt món ngon,
            <br />
            giao tận nơi
          </h1>

          <p className="text-lg md:text-xl text-red-100 max-w-2xl mx-auto mb-8">
            Khám phá hàng trăm món ăn hấp dẫn và đặt hàng
            nhanh chóng ngay hôm nay.
          </p>

          <button className="bg-white text-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Xem thực đơn
          </button>

        </div>
      </section>

      {/* Welcome */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Vì sao chọn OrderFood?
          </h2>

          <p className="text-gray-500 mt-3">
            Đặt đồ ăn đơn giản, nhanh chóng và tiện lợi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">
              🍔
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Đa dạng món ăn
            </h3>

            <p className="text-gray-500">
              Nhiều món ăn ngon phù hợp với mọi sở thích.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">
              🚀
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Giao hàng nhanh
            </h3>

            <p className="text-gray-500">
              Đơn hàng được xử lý nhanh chóng và tiện lợi.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">
              💳
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Thanh toán dễ dàng
            </h3>

            <p className="text-gray-500">
              Hỗ trợ nhiều phương thức thanh toán tiện lợi.
            </p>
          </div>

        </div>

      </section>

    </div>
  )
}

export default Home