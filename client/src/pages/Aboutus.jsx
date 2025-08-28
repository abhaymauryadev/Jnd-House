import { Mail, Phone } from 'lucide-react'
import React, { useState } from 'react'

const Aboutus = () => {


  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
      name:'',
      email:'',
      message:'',
    
    });
  

  const handleChange = (e) =>{
      const {name ,value} = e.target; 
      setFormData((prev)=> ({...prev, [name]: value}));
    };

    const handleSubmit = (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  const email = e.target.email.value;
  const message = e.target.message.value;

  // Pre-fill email details
  const subject = encodeURIComponent("New Message from Contact Form");
  const body = encodeURIComponent(
    `Hello,\n\nYou have a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}\n\nBest Regards,\n${name}`
  );

  // Replace with your email address
  const mailtoLink = `mailto:yourmail@example.com?subject=${subject}&body=${body}`;

  // Open user's mail app
  window.location.href = mailtoLink;

  setFormData({
    name: "",
    email: "",
    message: "",
  });
  setSubmitted(true);
};


  

  return (
     <div id='about' className="bg-black text-white">
      {/* About Us Section */}
      <section className="px-6 py-12 md:px-12 lg:px-24 border-b border-gray-800">
        <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 sm:gap-[400px] md:gap-[100px] items-center  ">
          {/* Image */}
          <div className="flex justify-start -ml-12">
            <img
              src="https://cdn.prod.website-files.com/664aff04588e94bdb284d60f/66a095ab732689a16527864b_Rabbit%20Approved%20Photo%201.JPG%20(1)-p-800.jpg"
              alt="About Us"
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            />
          </div>

          {/* Story */}
          <div>
            <h2 className=" font-manuka text-7xl lg:text-9xl font-extrabold mb-6 tracking-tight">About Us</h2>
            <p className="font-neue lg:text-lg leading-relaxed mb-4">
             JnD - House Curating Culture. Creating Connections. 

            </p>
            <p className="font-neue text-lg leading-relaxed max-w-3xl">
              Mumbai’s curated canvas for culture, creativity, and connection. From electrifying concerts to inspiring talks and exclusive art showcases — we craft immersive experiences where sophistication meets bold innovation. Join us to witness the extraordinary unfold.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id='contact' className="px-6 py-12 md:px-12 lg:">
        <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 sm:gap-[400px]  md:gap-[100px] items-center ">
          {/* Left: Contact Info */}
          <div>
            <h2 className="font-manuka text-7xl lg:text-9xl font-extrabold mb-6">Contact Us</h2>
            <p className="text-lg mb-4 font-neue">
              Have a question, idea, or just want to say hi?  
              We’d love to hear from you.  
            </p>
            <p className="text-lg mb-2 flex justify-start items-center font-neue">
              <Mail/> &nbsp; {" "}
              <a href="mailto:Speak@jndhouse.in" className="underline">
                Speak@jndhouse.in

              </a>
            </p>
            <p className="text-lg flex justify-start items-center font-neue">
              <Phone/> &nbsp; {" "}
              <a href="tel:+917709468348" className="underline">
                7709468348
              </a>
            </p>
          </div>

          {/* Right: Contact formData */}
           {/* <form
  action="https://formspree.io/f/xeozbbvo"
  method="POST" */}
  <form onSubmit={handleSubmit}
  className="
    relative flex flex-col gap-4
    p-6
    bg-white/10
    backdrop-blur-md backdrop-saturate-150
    border border-white/20
    ring-1 ring-white/10
    shadow-2xl
  "
>
  {/* subtle noise / highlight */}
  <div className="pointer-events-none absolute inset-0  opacity-60  bg-gradient-to-br from-slate-900 via-indigo-950 to-black" />

  {/* Name */}
  <input
    type="text"
    placeholder="Your Name"
    name="name"
    value={formData.name}
    onChange={handleChange}
    className="
      p-3 rounded-lg
      text-white placeholder-white/70
      bg-white/5 hover:bg-white/10
      border border-white/20
      focus:(outline-none ring-2 ring-white/30 bg-white/10)
      transition
    "
  />

  {/* Email */}
  <input
    type="email"
    placeholder="Your Email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    className="
      p-3 rounded-lg
      text-white placeholder-white/70
      bg-white/5 hover:bg-white/10
      border border-white/20
      focus:(outline-none ring-2 ring-white/30 bg-white/10)
      transition
    "
  />

  {/* Message */}
  <textarea
    rows="4"
    placeholder="Your Message"
    name="message"
    value={formData.message}
    onChange={handleChange}
    className="
      p-3 rounded-lg
      text-white placeholder-white/70
      bg-white/5 hover:bg-white/10
      border border-white/20
      focus:(outline-none ring-2 ring-white/30 bg-white/10)
      transition
      resize-y
    "
  />

  {/* Submit Button */}
  <button
    type="submit"
    className=" font-manuka
      rounded-lg py-3 font-bold
      text-black text-3xl
      bg-white hover:bg-white/50
      border border-white/20
      focus:outline-none focus:ring-2 focus:ring-white/40
      transition
      shadow-lg
      backdrop-blur
      hover:text-white
    "
  >
    Send Message
  </button>
</form>

          
          
        </div>
      </section>
    </div>
  )
}

export default Aboutus