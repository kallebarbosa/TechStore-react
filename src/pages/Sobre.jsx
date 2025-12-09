function Sobre() {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1>Sobre a TechStore</h1>
  
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Foto ilustrativa da equipe da TechStore"
          style={{ 
            maxWidth: '80%', // A imagem ocupará, no máximo, 80% da largura do seu contêiner
            height: 'auto', // Mantém a proporção da imagem para não distorcer
            margin: '1rem 0' // Espaçamento acima e abaixo da imagem
          }}
        />
  
        <p>
        Bem-vindo à <strong>TechStore</strong>, seu destino definitivo para o que há de mais
          inovador no universo da tecnologia. Nascemos como uma pequena vitrine digital,
          mas com uma grande missão: simplificar a jornada do consumidor no mundo complexo
          dos produtos tech. Nossa equipe é composta por entusiastas e especialistas
          dedicados a selecionar apenas os gadgets e soluções mais robustas, eficientes
          e de ponta do mercado. Na TechStore, você não apenas compra um produto;
          você investe em uma experiência tecnológica superior, garantida por um time que
          realmente entende de inovação.
        </p>
      </div>
    );
  }
  
  export default Sobre;