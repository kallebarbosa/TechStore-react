import { useState } from 'react';
import { ShoppingBag, Heart } from 'lucide-react';
import './CardProduto.css';
import { Link } from 'react-router-dom';
import App from '../../App.jsx';

function CardProduto({ produto }) {
  // Estado local apenas para o visual do botão
  const [favorito, setFavorito] = useState(false);

  // Formata o preço
  const precoFormatado = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(produto.preco);

  function mudarFavorito() {
    setFavorito(!favorito);
  }

  return (
    <div className="card">
      <div className="card-content">
        <Link to={`/produto/${produto.id}`}>
          <div className="card-img-wrapper">
            {/* A API retorna 'image', mas nós adaptamos no App para 'imagem' */}
            <img src={produto.imagem} alt={produto.nome} />
          </div>
          <span className="card-category">{produto.categoria}</span>
          <h3 className="card-title">{produto.nome}</h3>
          <p className="card-price">{precoFormatado}</p>
        </Link>
        <button
          className="btn-comprar"
          onClick={() => App.adicionarAoCarrinho(produto)}
        >
          <ShoppingBag size={18} />
          Adicionar
        </button>

        {/* Botão de Favoritar (Estilizado) */}
        <button
          className="btn-favorito"
          onClick={mudarFavorito}
          style={{
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
          }}
        >
          <Heart
            size={25}
            color={favorito ? 'red' : 'gray'}
            fill={favorito ? 'red' : 'none'}
          />
        </button>
      </div>
    </div>
  );
}

export default CardProduto;