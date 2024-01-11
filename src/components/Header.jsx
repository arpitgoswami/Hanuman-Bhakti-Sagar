function Header() {
  return (
    <>
      <div className="p-4" style={{ backgroundColor: "#EF4036" }}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">Bala Ji Maharaj</div>
          <div className="flex space-x-4">
            <div>
              <a href="#" className="text-white hover:underline">
                Home
              </a>
            </div>
            <div>
              <a href="#" className="text-white hover:underline">
                About
              </a>
            </div>
            <div>
              <a href="#" className="text-white hover:underline">
                Gallery
              </a>
            </div>
            <div>
              <a href="#" className="text-white hover:underline">
                Prayers
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
