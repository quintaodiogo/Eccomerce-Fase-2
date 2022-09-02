import "./Checkout.css";

function Checkout() {
  return (
    <div class="container">
      <p class="subTitle">Seu Pedido</p>
      <table class="tb">
        <tr class="trTitles">
          <td>Produto</td>
          <td>Quantidade</td>
          <td>Preço Unit. (R$)</td>
          <td>Total (R$)</td>
        </tr>
        <tr>
          <td>Camisa</td>
          <td>2</td>
          <td>22,50</td>
          <td>45,00</td>
        </tr>
        <tr>
          <td>Calça</td>
          <td>1</td>
          <td>89,90</td>
          <td>89,90</td>
        </tr>
      </table>
      <p class="subTitle">Destino</p>
      <div class="endereco">
        <button class="adcEndereco">+</button>
        <div class="endCadastrado">
          <p class="endNome">Três Porquinhos</p>
          <p>Rua 01 Qd 02 Lt 03 - SN</p>
          <p>Jd. Floresta - Goiânia GO</p>
          <p>(62) 98877-6655</p>
        </div>
      </div>
      <p class="subTitle">Forma de Envio</p>
      <div class="envio">
        <div class="formaEnvio">
          <input type="radio" />
          <div class="envioBadge">
            <strong>PAC</strong>
            <br />
            R$ 29,00 <br />
            83 meses <br />
          </div>
        </div>
        <div class="formaEnvio">
          <input type="radio" />
          <div class="envioBadge">
            <strong>SEDEX</strong>
            <br />
            R$ 45,50 <br />
            2 dias <br />
          </div>
        </div>
        <div class="formaEnvio">
          <input type="radio" />
          <div class="envioBadge">
            <strong>AZUL</strong>
            <br />
            R$ 32,50 <br />
            4 dias <br />
          </div>
        </div>
        <div class="formaEnvio">
          <input type="radio" />
          <div class="envioBadge">
            <strong>MAXSET</strong>
            <br />
            R$ 59,00 <br />
            daqui a pouco <br />
          </div>
        </div>
      </div>
      <p class="subTitle">Resumo</p>
      <div class="resumo">
        <table class="tb1">
          <tr class="linhaTb">
            <td class="linha0">Sub-total</td>
            <td class="linha1">R$ 339,00</td>
          </tr>
          <tr class="linhaTb">
            <td class="linha0">PAC</td>
            <td class="linha1">R$ 29,00</td>
          </tr>
          <tr class="linhaTb">
            <td class="linha0">
              <strong>Total</strong>
            </td>
            <td class="linha1">
              <strong>R$ 368,00</strong>
            </td>
          </tr>
        </table>
        <div class="txtObs">
          <p class="obsPgto">
            <i>
              em até 3 x R$ 122,67 ou R$ 330,80 com 15% de desconto no pix ou
              boleto.
            </i>
          </p>
        </div>
      </div>
      <p class="subTitle">Forma de pagamento</p>
      <div class="formaPgto">
        <div class="cardPgto">
          <div class="tipoPgto">
            <input type="radio" />
            <img src="./img/boleto.png" alt="" />
            <p class="txtPgto">BOLETO</p>
          </div>
          <p class="pgtoBadge">Á VISTA</p>
        </div>
        <div class="cardPgto">
          <div class="tipoPgto">
            <input type="radio" />
            <img src="./img/pix.png" alt="" />
            <p class="txtPgto">PIX</p>
          </div>
          <p class="pgtoBadge">Á VISTA</p>
        </div>
        <div class="cardPgto">
          <div class="tipoPgto">
            <input type="radio" />
            <img src="./img/card.png" alt="" />
            <p class="txtPgto">Cartão</p>
          </div>
          <p class="pgtoBadge">até 3 x R$ 122,67</p>
        </div>
      </div>
      <h1>Checkout</h1>
      <h3 id="totalItem">Total Items: 0</h3>

      <div id="cartContainer"></div>
    </div>
  );
}
export default Checkout;
