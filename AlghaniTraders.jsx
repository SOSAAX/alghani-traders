import { Mail, MessageSquare } from 'lucide-react'

export default function AlghaniTraders() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 p-6 space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">AlghaniTraders</h1>
        <p className="text-lg max-w-xl mx-auto">
          Connecting U.S. Scrap Yards to Pakistan’s Steel Industry
        </p>
      </section>

      <section className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow space-y-4">
        <h2 className="text-2xl font-semibold">About Us</h2>
        <p>
          AlghaniTraders is a U.S.-based scrap metal buying company and the U.S. extension of Alghani Traders, a trusted steel exporting company in Pakistan. Our goal is to purchase quality scrap metal and coordinate with export partners who handle all shipping and documentation.
        </p>
      </section>

      <section className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow space-y-4">
        <h2 className="text-2xl font-semibold">What We Buy</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>HMS 1 & 2</li>
          <li>Shredded Steel</li>
          <li>Aluminum</li>
          <li>Copper</li>
          <li>Brass</li>
          <li>Stainless Steel</li>
        </ul>
        <p>We pay for full container loads (20ft/40ft) and handle coordination with our export partners.</p>
      </section>

      <section className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow space-y-4">
        <h2 className="text-2xl font-semibold">Gallery</h2>
        <p>Image examples coming soon. Placeholder images will be added until real photos are available.</p>
      </section>

      <section className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow space-y-4">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <span>alghanitradingsolution@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            <span>WhatsApp link can be embedded here</span>
          </div>
        </div>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">Contact Form Coming Soon</button>
      </section>
    </main>
  )
}
