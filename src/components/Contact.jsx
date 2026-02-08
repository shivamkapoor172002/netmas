import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SS1 from "../assets/images/Screenshot1.png";
import SS2 from "../assets/images/Screenshot2.png";
import SS3 from "../assets/images/Screenshot3.png";
import SS4 from "../assets/images/Screenshot4.png";

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [othersMessage, setOthersMessage] = useState('');

  const handleProductSelection = (product) => {
    let updatedSelectedProducts = [];
    // If "Others" is selected, include the others message in selectedProducts
    if (product === "Others") {
      // If Others is already selected, remove it from selectedProducts
      updatedSelectedProducts = selectedProducts.includes("Others")
        ? selectedProducts.filter(item => item !== "Others")
        : [...selectedProducts, "Others"];
    } else {
      // If a different product is selected, update selectedProducts accordingly
      updatedSelectedProducts = selectedProducts.includes("Others")
        ? [product]
        : [...selectedProducts.filter(item => item !== "Others"), product];
    }
    
    // Update selectedProducts and others message state
    setSelectedProducts(updatedSelectedProducts);
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
      const handleScroll = () => {
          setScrollPosition(window.scrollY);
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
          window.removeEventListener("scroll", handleScroll);
      };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if the form is valid
    if (!firstName || !lastName || !email || !message) {
      setError('Please fill in all required fields.');
      return;
    }
  
    setLoading(true);
  
    try {
      // Concatenate first name and last name
      const fullName = `${firstName} ${lastName}`;
  
      // Send the form data to Formspree
      const formData = new FormData();
      formData.append('Full Name', fullName);
      formData.append('Email', email);
      formData.append('Phone Number', phone);
      formData.append('Message', message);

      const selectedProductsData = selectedProducts.map(product => {
        if (product === "Others") {
          return `${product}: ${othersMessage}`;
        }
        return product;
      });
  
      formData.append('Selected Products', selectedProductsData.join(', '));
  
  
      // Use fetch to submit the form data to Formspree endpoint
      const response = await fetch('https://formspree.io/f/xwkgapye', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
  
      if (response.ok) {
        setSuccess(true);
        setError(null); // Reset error state
        toast.success('Message sent successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: "bounce",
        });
        // Clear form fields after successful submission
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setSelectedProducts([]);
      } else {
        throw new Error('Failed to send message.');
      }
    } catch (error) {
      setError('Failed to send message. Please try again later.');
      setSuccess(false); // Ensure success state is false in case of failure
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div>
      <div className="relative overflow-hidden">
        <div className="absolute z-1 inset-0 bg-coaxial-bg bg-no-repeat bg-cover opacity-[0.05] bg-bottom h-[1000px] w-[1200px] md:hidden lg:hidden mt-[250px] bg-blend-darken"></div>

        <div className="self-center z-10 bg-gradient-to-r from-[#61c2d0] to-[#008BD2] flex md:flex-col lg:flex-col items-center justify-center pt-10">
          <div className="flex">
            <div className="flex flex-col" style={{ transform: `translateY(-${scrollPosition * 0.08}px)` }}>
              <div className="text-[70px] md:text-[33px] lg:text-[60px] lg:w-5/6 font-roboto font-semibold leading-1 text-gray-700 uppercase flex flex-wrap pl-28 mt-[-100px] lg:mt-0 lg:pl-20 md:mt-0 md:pl-9">
                LET'S bring AUDIO solutions to everyone
              </div>
              <div className="mt-8 md:mt-5 pl-28 lg:pl-20 md:pl-9 text-[17px] md:text-[10px] lg:text-[14px] pr-32 md:pr-10 font-roboto leading-normal flex flex-wrap text-zinc-600">
                Ready to upgrade your cable package or explore our latest offers? Get in touch with us now!
              </div>
            </div>
          </div>
          <div className="flex px-9 py-5 mt-20 mb-14 md:mt-10 md:px-1 md:w-[330px] md:h-500px] rounded-3xl bg-stone-100 mr-40 md:mr-1 md:pl-4 lg:ml-28 opacity-95">
            <form onSubmit={handleSubmit} action="https://formspree.io/f/xwkgapye" method="POST">
              <div className="flex ml-[-12px]">
                <div className="justify-center items-start px-4 py-3 md:py-1">
                  <input
                    type="text"
                    id="first-name"
                    name="First-name"
                    placeholder="First name*"
                    className="py-2 w-[206px] md:w-[120px] rounded-sm border-b-2 border-l-0 border-t-0 border-r-0 focus:border-l-0 focus:border-t-0 focus:border-r-0 focus:border-0 bg-stone-100 text-[14px] md:text-[11px]"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    required
                  />
                </div>
                <div className="justify-center items-start px-4 py-3 md:px-2 md:py-1">
                  <input
                    type="text"
                    id="last-name"
                    name="Last-name"
                    placeholder="Last name*"
                    className="py-2 w-[206px] md:w-[125px] rounded-sm border-b-2 border-l-0 border-t-0 border-r-0 focus:border-l-0 focus:border-t-0 focus:border-r-0 focus:border-0 bg-stone-100 text-[14px] md:text-[11px]"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    required
                  />
                </div>
              </div>

              <div className="flex ml-[-12px] md:flex-col">
                <div className="justify-center items-start px-4 py-3 md:py-1">
                  <input
                    type="text"
                    id="Email"
                    name="Email"
                    placeholder="Email*"
                    className="py-2 w-[206px] md:w-[270px] rounded-sm border-b-2 border-l-0 border-t-0 border-r-0 focus:border-l-0 focus:border-t-0 focus:border-r-0 focus:border-0 bg-stone-100 text-[14px] md:text-[11px]"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </div>
                <div className="justify-center items-start px-4 py-3 md:py-1">
                  <input
                    type="text"
                    id="phone-number"
                    name="phone-number"
                    placeholder="Phone number"
                    className="py-2 w-[206px] md:w-[270px] rounded-sm border-b-2 border-l-0 border-t-0 border-r-0 focus:border-l-0 focus:border-t-0 focus:border-r-0 focus:border-0 bg-stone-100 text-[14px] md:text-[11px]"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    required
                  />
                </div>
              </div>

                <div className="mt-5 mb-4 md:mt-4">
                    <div className="flex md:flex-wrap">
                        <div className="flex flex-col">
                            <div className="text-lg leading-6 mb-[-25px] md:text-[13px] md:ml-1 md:mb-[-32px] text-gray-700">
                                This describes your inquiry best*
                            </div>
                            <div className="flex gap-6 justify-stretch md:gap-3">
                                <div className="flex flex-col mt-11 justify-evenly rounded-md items-center w-24 h-24 md:w-16 md:h-16 border-stone-300 border border-solid  cursor-pointer animate-black">
                                    <img
                                    loading="lazy"
                                    src={SS2}
                                    className="shrink-0 w-[25px] md:w-[15px]"
                                    />
                                    <span className="md:text-[10px]">Partner</span>
                                </div>
                                <div className="flex flex-col mt-11 justify-evenly rounded-md items-center w-24 h-24 md:w-16 md:h-16 border-stone-300 border border-solid  cursor-pointer animate-black">
                                    <img
                                    loading="lazy"
                                    src={SS1}
                                    className="shrink-0 w-[25px] md:w-[15px]"
                                    />
                                    <span className="md:text-[10px]">Investor</span>
                                </div>

                                <div className="flex flex-col mt-11 justify-evenly rounded-md items-center w-24 h-24 md:w-16 md:h-16 border-stone-300 border border-solid  cursor-pointer animate-black">
                                    <img
                                    loading="lazy"
                                    src={SS3}
                                    className="shrink-0 w-[25px] md:w-[15px]"
                                    />
                                    <span className="md:text-[10px]">Media</span>
                                </div>

                                <div className="flex flex-col mt-11 justify-evenly rounded-md items-center w-24 h-24 md:w-16 md:h-16 border-stone-300 border border-solid  cursor-pointer animate-black">
                                    <img
                                    loading="lazy"
                                    src={SS4}
                                    className="shrink-0 w-[25px] md:w-[15px]"
                                    />
                                    <span className="md:text-[10px]">General</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-2 py-5 md:py-2 flex flex-col gap-5 md:gap-10">
                  <div className="text-[#294940] text-md md:text-[13px] md:ml-1 md:mb-[-32px]">
                    <span>Inquiry related Products</span>
                  </div>
                  <div>
                    <ul className="flex justify-between md:justify-start md:gap-16 leading-7 pb-2 md:pb-1 text-[#444444] text-sm md:text-[11px] md:leading-5 list-none">
                      <div>
                        <li>
                        <label className="checkbox-label">
                          <input
                            type="checkbox"
                            value="Speaker Cable"
                            onChange={() => handleProductSelection("Speaker Cable")}
                            checked={selectedProducts.includes("Speaker Cable")}
                            className="rounded-checkbox"
                          />
                          Speaker Cable
                        </label >
                        </li>
                        <li>
                        <label className="checkbox-label">
                          <input
                            type="checkbox"
                            value="Microphone Cable"
                            onChange={() => handleProductSelection("Microphone Cable")}
                            checked={selectedProducts.includes("Microphone Cable")}
                            className="rounded-checkbox"
                          />
                          Microphone Cable
                        </label>
                        </li>
                        <li>
                        <label className="checkbox-label">
                          <input
                            type="checkbox"
                            value="Connectors"
                            onChange={() => handleProductSelection("Connectors")}
                            checked={selectedProducts.includes("Connectors")}
                            className="rounded-checkbox"
                          />
                          Connectors
                        </label>
                        </li>
                      </div>
                      <div className="mr-5">
                        <li>
                        <label className="checkbox-label">
                          <input
                            type="checkbox"
                            value="Projector Screens"
                            onChange={() => handleProductSelection("Projector Screens")}
                            checked={selectedProducts.includes("Projector Screens")}
                            className="rounded-checkbox"
                          />
                          Projector Screens
                        </label>
                        </li>
                        <li>
                        <label className="checkbox-label">
                          <input
                            type="checkbox"
                            value="Amplfier Rack"
                            onChange={() => handleProductSelection("Amplifier Rack")}
                            checked={selectedProducts.includes("Amplifier Rack")}
                            className="rounded-checkbox"
                          />
                          Amplifier Rack
                        </label>
                        </li>
                        <li>
                        <label className="checkbox-label">
                          <input
                            type="checkbox"
                            value="Floor Box"
                            onChange={() => handleProductSelection("Floor Box")}
                            checked={selectedProducts.includes("Floor Box")}
                            className="rounded-checkbox"
                          />
                          Floor Box
                        </label>
                        </li>
                      </div>
                    </ul>
                    <div className="flex gap-3 text-sm text-[#444444] md:text-[11px] md:leading-4">
                        <div>
                          <label className="checkbox-label">
                            <input
                              type="checkbox"
                              value="Others"
                              onChange={() => handleProductSelection("Others")}
                              checked={selectedProducts.includes("Others")}
                              className="rounded-checkbox"
                            />
                            Others
                          </label>
                        </div>
                        <div>
                            <textarea
                              id="message"
                              name="Message"
                              className="text-gray-600 w-[363px] h-7 md:w-[220px] md:h-5 py-2 md:py-1 rounded-sm outline-none focus:ring-2 focus:ring-gray-500 bg-stone-100 md:text-[11px]"
                              onChange={(e) => setOthersMessage(e.target.value)}
                              value={othersMessage}
                              required
                              disabled={!selectedProducts.includes("Others")}
                            ></textarea>
                        </div>
                      </div>
                  </div>
                </div>

              <div id='div-message' className="flex flex-col gap-3 pt-2 md:pt-1">
                <div className="text-lg md:text-[13px] text-gray-800 pl-1">
                  Message*
                </div>
                <div className="">
                  <textarea
                    id="message"
                    name="Message"
                    className="text-gray-600 w-[460px] h-32 md:w-[290px] md:h-24 py-2 md:py-1 rounded-sm outline-none focus:ring-2 focus:ring-gray-500 bg-stone-100 md:text-[11px]"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    required
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="justify-center self-start px-4 md:px-2 py-0.5 mt-2.5 text-base md:text-[10px] leading-6 md:leading-4 text-center text-slate-200 uppercase rounded-md bg-sky-950 cursor-pointer hover:bg-sky-800"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Submit'}
              </button>

              <div className="mt-4 mb-6 md:mt-2 md:mb-2 text-mini md:text-[9px] leading-4 text-black font-roboto">
                <span className="">
                  By clicking Submit, I’m agreeing to Netmas
                </span>
                <Link className="text-black underline pl-1 font-roboto">Privacy Policy</Link>
                <span className="">.</span>
              </div>
              {error && <div className="text-red-500">{error}</div>}
              {success && <div className="text-green-500">Message sent successfully!</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
