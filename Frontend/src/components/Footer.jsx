import mca from "../assets/MCA.svg";
import { Youtube, Instagram, Linkedin, Twitter } from "lucide-react";

const icons = [
  {
    ariaLabel: "YouTube",
    icon: <Youtube size={50} strokeWidth={2.5} />,
    hoverColor: "text-red-500",
  },
  {
    ariaLabel: "Instagram",
    icon: <Instagram size={42} strokeWidth={2.5} />,
    hoverColor: "text-pink-400",
  },
  {
    ariaLabel: "LinkedIn",
    icon: <Linkedin size={42} strokeWidth={2.5} />,
    hoverColor: "text-blue-500",
  },
  {
    ariaLabel: "Twitter",
    icon: <Twitter size={42} strokeWidth={2.5} />,
    hoverColor: "text-black",
  },
];

const Footer = () => (
  <footer style={{ background: "#033c64", color: "#fff", padding: "40px 0" }}>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "flex-start",
      }}
    >
      {/* Logo and Social Section */}
      <div>
        <img
          src={mca}
          alt="Ministry of Corporate Affairs"
          className="h-20 mb-20 bg-white p-3 rounded-lg"
        />
        <h3>Social Media</h3>
        <div className="flex gap-5 mt-2 mb-5">
          {icons.map((item, idx) => (
            <a
              key={idx}
              href="#"
              aria-label={item.ariaLabel}
              className={`rounded-full p-2 flex items-center justify-center
            transition-all duration-200 ease-in group hover:scale-110 ${item.hoverColor}`}
            >
              <span
                className={`transition-colors duration-300 ${item.hoverColor} hover:${item.hoverColor}`}
              >
                {item.icon}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Info/Links Section */}
      <div>
        <h3>Get to Know</h3>
        <ul style={{ listStyle: "none", padding: 0, marginBottom: 24 }}>
          <li>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
              Partner Companies
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
              Guidelines
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
              FAQs
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
              Manuals
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
              Videos
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
              Privacy Policy
            </a>
          </li>
        </ul>
        <h3>Download Mobile App</h3>
        <p>Click below or scan QR code to download the app.</p>
      </div>

      {/* Contact Section */}
      <div>
        <h3>Contact Us</h3>
        <p>
          A Wing, 5th Floor, Shastri Bhawan,
          <br />
          Dr Rajendra Prasad Rd,
          <br />
          New Delhi-110001
        </p>
        <p>
          Email:{" "}
          <a href="mailto:pminternship@mca.gov.in" style={{ color: "#fff" }}>
            pminternship[at]mca.gov.in
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href="tel:1800116090" style={{ color: "#fff" }}>
            1800 11 6090
          </a>
        </p>
      </div>

      {/* Visitors & Ownership Section */}
      <div>
        <div
          style={{
            background: "orange",
            color: "#234",
            fontWeight: "bold",
            fontSize: 30,
            padding: "8px 18px",
            borderRadius: 20,
            display: "inline-block",
            marginBottom: 20,
            marginTop: 10,
          }}
        >
          4,16,08,949 <span style={{ fontSize: 18 }}>Total Visitors</span>
        </div>
        <p style={{ fontWeight: 600, marginTop: 16 }}>
          Ministry of Corporate Affairs
        </p>
        <p>
          © 2024 PM-INTERNSHIP, All Rights Reserved.
          <br />
          Technical collaboration with{" "}
          <a href="#" style={{ color: "#fff", textDecoration: "underline" }}>
            BISAG-N
          </a>
        </p>
        <p style={{ fontSize: 14, marginTop: 10 }}>
          Build Version: 1758558855355
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
