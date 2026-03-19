import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    if (!form.email.includes("@")) {
      alert("Enter valid email");
      return;
    }

    setSuccess("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-8 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto space-y-4"
      >
        <input
          type="text"
          placeholder="Name"
          className="w-full p-4 border rounded-lg"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 border rounded-lg"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <textarea
          placeholder="Message"
          className="w-full p-4 border rounded-lg"
          rows="4"
          value={form.message}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
        />

        <button className="bg-green-500 text-white px-6 py-3 rounded-lg w-full hover:bg-green-600 transition">
          Send Message
        </button>

        {success && (
          <p className="text-green-600 font-medium">{success}</p>
        )}
      </form>
    </section>
  );
}