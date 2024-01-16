function Gallery() {
  return (
    <>
      <div className="text-center bg-orange-500 text-white py-2 px-4 mx-32 sm:mx-8 mt-8">
        Hanuman-Gallery
      </div>
      <div className="py-8 mx-32 sm:mx-8 grid grid-cols-4 gap-8 sm:grid-cols-2 sm:gap-4">
        <img
          className="rounded-xl"
          src="https://hanumanimages.com/wp-content/uploads/2023/12/bajrangbali-is-here-576x1024.jpg"
          alt=""
        />
        <img
          className="rounded-xl"
          src="https://hanumanimages.com/wp-content/uploads/2023/12/hanuman-ji-has-got-the-sanjivani-copy-576x1024.jpg"
          alt=""
        />
        <img
          className="rounded-xl"
          src="https://hanumanimages.com/wp-content/uploads/2023/12/The-all-learned-god-hanuman--576x1024.jpg"
          alt=""
        />
        <img
          className="rounded-xl"
          src="https://hanumanimages.com/wp-content/uploads/2023/12/bajrangbali-action-wallpaper-576x1024.jpg"
          alt=""
        />
      </div>
    </>
  );
}

export default Gallery;
