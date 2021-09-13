import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import "./Footer.css";

const FooterPagePro = () => {
  return (
    <MDBFooter
      style={{
        position: "fixed",
        width: "100%",
        background: "#2f466e !important",
      }}
      className="page-footer font-small pt-4 mt-4 pokeFooter"
    >
      <div className="text-center">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a
              href="https://www.facebook.com/iamhishu"
              className="btn-floating btn-sm btn-fb mx-1"
            >
              <i className="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="https://www.instagram.com/its_hishu/"
              className="btn-floating btn-sm btn-tw mx-1"
            >
              <i className="fab fa-twitter"> </i>
            </a>
          </li>

          <li className="list-inline-item">
            <a
              href="https://www.linkedin.com/in/its-hishu/"
              className="btn-floating btn-sm btn-li mx-1"
            >
              <i className="fab fa-linkedin-in"> </i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://itshishu.netlify.app/"> itshishu.netlify.app </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPagePro;
