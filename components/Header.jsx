import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, toggleInput] = useState(false);

  return (
    <Navbar expand="lg" className="py-3 position-absolute start-0 top-0 w-100">
      <Container>
        <div className="me-auto d-block">
          <Link href="/">
            <a className="d-flex align-items-center">
              <Image src="/logo.svg" width={225} height={42} alt="logo" />
            </a>
          </Link>
        </div>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="btn-toggle"
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="p-3 p-lg-0 justify-content-end bg-white bg-lg-transparent w-100 index-100 rounded"
        >
          <Nav>
            <Nav.Item>
              <Link href="/">Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/invitations">Invitations</Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/store">Store</Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/contact">Contact us</Link>
            </Nav.Item>
            <Nav.Item className="position-relative input-box">
              <form
                className={`${
                  isOpen && "open"
                } d-block input-box__form top-100 end-0`}
              >
                <input
                  type="search"
                  className={`${
                    isOpen && "open"
                  } input-box__input w-100 w-lg-auto`}
                />
                <button
                  type="submit"
                  className={`d-block position-absolute top-0 end-0 search-text pt-1 pe-1`}
                >
                  search
                </button>
              </form>
              <button
                onClick={() => toggleInput(!isOpen)}
                className="input-box__btn d-none d-lg-block"
              >
                <Image
                  src="/icons/search.svg"
                  width={26}
                  height={26}
                  alt="search icon"
                />
              </button>
            </Nav.Item>
            <Nav.Item>
              <Link href="/basket">
                <a className="lh-0">
                  <Image
                    src="/icons/basket.svg"
                    width={33}
                    height={29}
                    alt="basket icon"
                  />
                </a>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/">
                <a className="user-bg-link rounded-pill d-flex align-items-center">
                  <span className="me-2 block ">
                    <Image
                      src="/icons/user.svg"
                      width={28}
                      height={28}
                      alt="user"
                    />
                  </span>
                  <span>My Account</span>
                </a>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
