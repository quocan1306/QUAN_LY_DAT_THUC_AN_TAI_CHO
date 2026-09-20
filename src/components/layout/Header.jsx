function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-red-500">
          OrderFood
        </div>

        <nav className="flex items-center gap-6">
          <a
            href="#"
            className="text-gray-700 hover:text-red-500 transition-colors"
          >
            Trang chủ
          </a>

          <a
            href="#"
            className="text-gray-700 hover:text-red-500 transition-colors"
          >
            Thực đơn
          </a>

          <a
            href="#"
            className="text-gray-700 hover:text-red-500 transition-colors"
          >
            Khuyến mãi
          </a>

          <a
            href="#"
            className="text-gray-700 hover:text-red-500 transition-colors"
          >
            Liên hệ
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
            🛒 Giỏ hàng
          </button>

          <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
            Đăng nhập
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header