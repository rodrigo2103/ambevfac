import React from "react";

import logo from "../../img/logo.png";
import "./style.sass";

function Scene() {
  return (
    <footer class="footer-rows">

      <div class="footer-columns">
        <div class="footer-column">
          <div>
            <h6>
              CANAL ÚNICO AMBEV
              </h6>
            <p>
              0800 887 1111
              </p>
          </div>
          <div>
            <p>
              Horário de atendimento:
              <br />

              Segunda a sábado:
              das 8h às 20h
              <br />
              Domingo: 8h às 17h
            </p>
          </div>
        </div>
        <div class="footer-column">
          <div>
            <h6>
              Sobre a AMBEV
            </h6>
            <p>Historia<br />Historia2</p>
          </div>
          <div>
            <h6>
              Sobre a Escola de TI
            </h6>
            <p>Historia<br />Historia2</p>
          </div>
        </div>
        <div class="footer-column">
          <div>
            <img src={logo} ></img>
          </div>
          <div>
            <p>
              Erika Magalhaes<br />
              Giovanna Cardoso<br />
              Julio Bindandi<br />
              Pedro Silva<br />
              Rodrigo Silva<br />

            </p>
          </div>
        </div>
      </div>
      <div class="copyright">
        <a>© Time6 2020. Todos os direitos reservados</a>
      </div>

    </footer >
  );
}

export default Scene;