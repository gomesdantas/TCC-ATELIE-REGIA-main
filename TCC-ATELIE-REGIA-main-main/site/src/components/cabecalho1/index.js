import { useState } from "react";
import "./index.scss";

export default function Cabecalho1() {
  const [menuVisivel, setMenuVisivel] = useState(false);

  const ve = () => {
    setMenuVisivel(!menuVisivel);
  };

  return (
    <div className="page">

      <div className={`cabecalho ${menuVisivel ? "aberto" : ""}`} style={{ maxWidth: menuVisivel && "calc(100% - 100px)" }}>
        <div className="cabecalho1">
          <div className="cab1-esquerda">
            <div className="menu-img">
              <img
                src="/assets/images/zabugaaa.png"
                alt=""
                className="menu1"
                onClick={ve}
              />
            </div>
            <h2>ATELIÊ RÉGIA</h2>
            <div>
              <img src="/assets/images/logo.png" alt="" className="logo1" />
            </div>
          </div>
          <div className="cab1-direita">
            <img className="img1-cab1" src="/assets/images/lupis.png" alt="" />
            <h3>
              <a href="/login/cliente">LOGIN</a>
            </h3>
            <img
              className="img2-cab1"
              src="/assets/images/redfivediamonds.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {menuVisivel && (
        <div className="menu-overlay">
          <div className="menu-container">
            <img src="/assets/images/logo.png" />
            <div className="menu">
              <a>Novidades</a>
              <a>Feminino</a>
              <a>Masculino</a>
              <a>Acessórios</a>
              <a>Sale</a>
            </div>

            <div className="log">
              <img src="" alt="" className="" />
              <p>Login</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
