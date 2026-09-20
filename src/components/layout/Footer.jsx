function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-3">
              OrderFood
            </h2>

            <p className="text-gray-400">
              Website đặt đồ ăn trực tuyến nhanh chóng và tiện lợi.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Liên kết
            </h3>

            <div className="flex flex-col gap-2 text-gray-400">
              <a href="#" className="hover:text-white">
                Trang chủ
              </a>

              <a href="#" className="hover:text-white">
                Thực đơn
              </a>

              <a href="#" className="hover:text-white">
                Khuyến mãi
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">
              Liên hệ
            </h3>

            <p className="text-gray-400">
              Email: support@orderfood.com
            </p>

            <p className="text-gray-400 mt-2">
              Hotline: 0123 456 789
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          © 2026 OrderFood. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer