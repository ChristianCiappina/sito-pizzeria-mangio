export default function PizzeriaMangio() {
  const pizzas = [
    { name: 'Margherita', ingredients: 'Salsa di pomodoro, mozzarella', price: '€5,00', img: 'https://images.unsplash.com/photo-1601924579561-0f33c1f1c3c7?auto=format&fit=crop&w=800&q=80' },
    { name: 'Diavola', ingredients: 'Salsa di pomodoro, mozzarella, ventricina', price: '€6,50', img: 'https://images.unsplash.com/photo-1603079849109-d389da1c3c95?auto=format&fit=crop&w=800&q=80' },
    { name: 'Capricciosa', ingredients: 'Salsa di pomodoro, mozzarella, funghi champignon, olive riviera, carciofi, uova, prosciutto crudo', price: '€7,00', img: 'https://images.unsplash.com/photo-1628840042765-f3b3bd0f19b9?auto=format&fit=crop&w=800&q=80' },
    { name: 'Tutto bufala', ingredients: 'Salsa di pomodoro, pachino, bufala, battuto di prezzemolo', price: '€7,50', img: 'https://images.unsplash.com/photo-1548365328-8b849e4a7d77?auto=format&fit=crop&w=800&q=80' },
    { name: 'Quattro Formaggi', ingredients: 'Mozzarella, provola affumicata, gorgonzola, bufala', price: '€7,00', img: 'https://images.unsplash.com/photo-1585238342028-4b1d6b2d4e9f?auto=format&fit=crop&w=800&q=80' },
    { name: 'Ortolana', ingredients: 'Cicoria, zucchine, broccoli, funghi, olive, peperoni, pachino', price: '€7,00', img: 'https://images.unsplash.com/photo-1594007654729-407eedc4be3a?auto=format&fit=crop&w=800&q=80' }
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1601050690597-8c0d2f8f5c0d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1628840042790-8ff2f4cc4f7f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1603079849109-d389da1c3c95?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1601924579561-0f33c1f1c3c7?auto=format&fit=crop&w=800&q=80'
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <img
          src="https://images.unsplash.com/photo-1601924579561-0f33c1f1c3c7?auto=format&fit=crop&w=1800&q=80"
          alt="Pizza MANGIO"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            La pizza che ami, a Portuense, pronta in un click!
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-6 drop-shadow-md">
            Ordina la tua preferita in pochi click, gustala come a casa.
          </p>
          <a
            href="https://wa.me/393895398409?text=Ciao!%20Vorrei%20ordinare%20una%20pizza."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ordina Ora su WhatsApp"
            className="bg-green-500 hover:bg-green-600 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition-all"
          >
            Ordina Ora su WhatsApp
          </a>
        </div>
      </section>

      {/* Chi Siamo */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Chi Siamo</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Ingredienti freschi, impasto a lunga lievitazione e passione autentica per la pizza.
          Da MANGIO, ogni fetta racconta il gusto vero di Roma.
        </p>
      </section>

      {/* Menu */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Le Nostre Pizze</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {pizzas.map((pizza, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all">
              <img src={pizza.img} alt={pizza.name} className="h-48 w-full object-cover" />
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold mb-2">{pizza.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{pizza.ingredients}</p>
                <span className="text-green-600 font-bold">{pizza.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Galleria */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Galleria</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto px-6">
          {gallery.map((src, i) => (
            <img key={i} src={src} alt={`Galleria ${i + 1}`} className="rounded-2xl object-cover w-full h-64 shadow-md" />
          ))}
        </div>
      </section>

      {/* Contatti e CTA */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Contatti</h2>
        <p className="text-lg text-gray-700 mb-2">Via Monte delle Capre 33G, Roma (Zona Portuense)</p>
        <p className="text-gray-600 mb-6">Aperti tutti i giorni dalle 18:00 alle 23:30</p>

        <div className="max-w-3xl mx-auto mb-8">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5944.469078732254!2d12.4230260935791!3d41.8447783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1325f5d03cc31bc7%3A0x62b3722bef1b4dad!2sMANGIO!5e0!3m2!1sit!2sit!4v1759845930016!5m2!1sit!2sit" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <a
          href="https://wa.me/393895398409?text=Ciao!%20Vorrei%20ordinare%20una%20pizza."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white text-xl font-semibold py-4 px-10 rounded-full shadow-lg transition-all"
        >
          Ordina Ora su WhatsApp
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black text-gray-400 text-center text-sm">
        © {new Date().getFullYear()} Pizzeria MANGIO — Tutti i diritti riservati
      </footer>
    </div>
  );
}
