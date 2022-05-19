import { Fragment, useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/image/logo.png";
import "./Header.css";

// TODO: useEffect를 사용해 localstorage의 JWT값이 있냐 없냐로 Login&Register 버튼 또는 Logout 버튼 구현
const UserButton = () => {
  const checkNull = () => {
    if (
      localStorage.getItem("JWT") === "null" ||
      localStorage.getItem("JWT") == null
    ) {
      return null;
    } else {
      return localStorage.getItem("JWT");
    }
  };
  const [JWT] = useState(checkNull);
  useEffect(() => {
    return () => {
      localStorage.setItem("JWT", JWT);
    };
  });
  // eslint-disable-next-line
  if (JWT != undefined) {
    return <Logout />;
  } else {
    return (
      <Fragment>
        <Login />
        <Register />
      </Fragment>
    );
  }
};
const Login = () => {
  return (
    <Nav.Link href="login" className="rounded bg-secondary text-white m-1 px-3">
      로그인
    </Nav.Link>
  );
};
const Logout = () => {
  return (
    <Nav.Link
      href="/"
      className="rounded bg-secondary text-white m-1 px-3"
      onClick={() => localStorage.removeItem("JWT")}
    >
      로그아웃
    </Nav.Link>
  );
};
const Register = () => {
  return (
    <Nav.Link
      href="register"
      eventKey="1"
      className="rounded bg-primary text-white m-1 px-3"
    >
      회원가입
    </Nav.Link>
  );
};
const Header = () => {
  return (
    // py-0~5 높이 조절
    <Navbar bg="white" expand="lg" className="fixed-top py-0 p-2">
      <Navbar.Brand href="/" className="mb-0">
        <img
          alt="logo"
          src={logo}
          width="50"
          height="50"
          className="d-inline-block align-middle"
        />
        CCBOX
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {/* ms-auto: 우측, me-auto: 좌측 정렬 */}
        <Nav className="ms-auto">
          <UserButton />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;