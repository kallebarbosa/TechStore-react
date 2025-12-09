import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
      <h2>Página não encontrada</h2>
      <p style={{ marginBottom: '2rem' }}>
        Ops! Parece que você tentou acessar uma rota que não existe.
      </p>

      <Link to="/">
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#646cff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Voltar para Home
        </button>
      </Link>
    </div>
  );
}

export default NotFound;