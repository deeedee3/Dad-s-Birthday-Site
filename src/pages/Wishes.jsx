export default function Gallery() {
  const photos = [
    "https://via.placeholder.com/200",
    "https://via.placeholder.com/201",
    "https://via.placeholder.com/202",
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-blue-700 text-center">📸 Wishes</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {photos.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Wish ${i}`}
            className="rounded-2xl shadow-md hover:scale-105 transition-transform"
          />
        ))}
      </div>
    </div>
  );
}
