import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineArrowUp,
} from "react-icons/ai";
import founder from "../assets/logo.png"

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={founder}
          alt="Founder"
        />

        <h2>Ankit Porwal</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://twitter.com/AnkitPorwal04" target={"blank"}>
            <AiFillTwitterCircle />
          </a>
          <a href="https://instagram.com/ankit_porwal04" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/AnkitPorwal04" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
