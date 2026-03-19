import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", message: "All fields are required [cite: 30]" });
      return;
    }
    setStatus({ type: "success", message: "Message sent! We'll be in touch [cite: 31]" });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-brand-dark text-white">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-brand-gold font-bold uppercase mb-2">Inquiry</h2>
          <h3 className="text-4xl font-black uppercase">Join the Elite</h3>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-brand-gray border-none p-5 rounded-sm focus:ring-2 focus:ring-brand-gold outline-none"
            value={form.name}
            onChange={(e) => setForm({...form, name: e.target.value})}
          />
          <input
            type="email"
            placeholder="Email Address"
            className="bg-brand-gray border-none p-5 rounded-sm focus:ring-2 focus:ring-brand-gold outline-none"
            value={form.email}
            onChange={(e) => setForm({...form, email: e.target.value})}
          />
          <textarea
            placeholder="How can we help you?"
            className="md:col-span-2 bg-brand-gray border-none p-5 rounded-sm h-40 focus:ring-2 focus:ring-brand-gold outline-none"
            value={form.message}
            onChange={(e) => setForm({...form, message: e.target.value})}
          />
          <button className="md:col-span-2 bg-brand-gold text-black font-black uppercase py-5 hover:bg-white transition-colors">
            Send Message
          </button>
          
          {status.message && (
            <div className={`md:col-span-2 p-4 text-center ${status.type === 'error' ? 'bg-red-900/50 text-red-200' : 'bg-green-900/50 text-green-200'}`}>
              {status.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}