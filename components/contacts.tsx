"use client";

import { useState } from "react";

const Contacts = () => {
  return (
    <section
      id="contacts"
      className="py-12 relative isolate"
      style={{
        backgroundImage: `url(https://xbetagents.com/wp-content/uploads/2024/03/Untitled-design.png)`,
      }}
    >
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="flex items-center justify-center">
        <div className="container sm:px-14 px-6 gap-4 flex items-center justify-center sm:flex-row flex-col">
          <div className="flex flex-col items-center sm:items-baseline gap-3 text-white z-10 w-full">
            <h4 className="sm:text-7xl text-lg  font-extrabold">CONTACTS</h4>
            <div className="flex items-center gap-2 sm:flex-row flex-col">
              <img
                src="https://xbetagents.com/wp-content/uploads/2024/03/Picture2.png"
                alt=""
                className="size-10"
              />

              <p className="text-lg font-semibold">1xbet.com</p>
            </div>
            <div className="flex items-center gap-2 sm:flex-row flex-col">
              <img
                src="https://xbetagents.com/wp-content/uploads/2024/04/Untitled-design.png"
                alt=""
                className="size-10"
              />
              <a
                href="mailto:manager@xbetagents.com"
                className="text-lg font-semibold"
              >
                Manager@xbetagents.com
              </a>
            </div>
            <div className="flex items-center gap-2 sm:flex-row flex-col">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                alt=""
                className="size-10"
              />
              <p className="text-lg font-semibold">@Rashia_1xRetail</p>
            </div>
          </div>
          <ContactForm />
        </div>{" "}
      </div>
    </section>
  );
};

export default Contacts;

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    telegram: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Example: send to console or an API
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(res);
    if (res.ok) {
      setSubmitted(true);
      setData({
        name: "",
        email: "",
        country: "",
        phone: "",
        telegram: "",
      });
    }
  };

  return (
    <div className="bg-white text-black sm:p-10 p-6 rounded-md z-10 w-full">
      <h5 className="text-center font-extrabold sm:text-3xl text-base ">
        Submit your application
      </h5>
      <form className="flex flex-col gap-3 mt-3" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="name"
          type="text"
          value={data.name}
          placeholder="Name"
          className="border px-2 py-2 rounded-sm "
        />
        <input
          onChange={handleChange}
          required
          value={data.email}
          type="email"
          name="email"
          placeholder="Email"
          className="border px-2 py-2 rounded-sm "
        />
        <input
          onChange={handleChange}
          type="text"
          value={data.country}
          name="country"
          placeholder="Country"
          className="border px-2 py-2 rounded-sm "
        />
        <input
          onChange={handleChange}
          type="number"
          value={data.phone}
          name="phone"
          placeholder="Phone"
          className="border px-2 py-2 rounded-sm "
        />
        <input
          onChange={handleChange}
          type="text"
          value={data.telegram}
          name="telegram"
          placeholder="Telegram ID"
          className="border px-2 py-2 rounded-sm "
        />
        <button className="bg-[#78A32F] text-white rounded-md py-2">
          Send
        </button>
      </form>
    </div>
  );
};
