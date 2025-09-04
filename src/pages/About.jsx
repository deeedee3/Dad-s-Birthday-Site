export default function About() {
  const timeline = [
    { year: "1969", event: "Born 🎂" },
    { year: "1996", event: "Got married 💍" },
    { year: "1997", event: "Became a Dad 👨‍👧‍👦" },
    { year: "Today", event: "Still the best Dad ever ❤️" },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-blue-700 text-center">Dad's Life Journey</h2>
      <ul className="mt-6 space-y-4">
        {timeline.map((item, i) => (
          <li key={i} className="bg-gray-100 p-4 rounded-xl shadow-md">
            <span className="font-bold text-blue-600">{item.year}:</span> {item.event}
          </li>
        ))}
      </ul>
    </div>
  );
}
