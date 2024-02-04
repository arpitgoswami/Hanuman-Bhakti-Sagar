function Gallery() {
  return (
    <>
      <div className="mx-32 mt-8 bg-orange-500 px-4 py-2 text-center text-white sm:mx-8">
        Hanuman-Gallery
      </div>
      <div className="mx-32 grid grid-cols-4 gap-8 py-8 sm:mx-8 sm:grid-cols-2 sm:gap-4">
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
