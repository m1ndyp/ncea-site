function Hero() {
  const scrollToOrder = () => {
    document.getElementById('order').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0000 100%)',
      textAlign: 'center',
      padding: '0 20px'
    }}>
      <h1 className="hero-title">
        NCEA — Брендинг, который работает
      </h1>

      <p style={{
        color: 'var(--text-muted)',
        fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
        marginBottom: '40px'
      }}>
        Создаём фирменный стиль, логотипы и визуальные идентичности
      </p>

      <button onClick={scrollToOrder} style={{
        padding: '16px 40px',
        background: 'linear-gradient(90deg, var(--red), var(--orange))',
        border: 'none',
        borderRadius: '4px',
        color: 'white',
        fontSize: '1rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        letterSpacing: '2px',
        textTransform: 'uppercase'
      }}>
        Заказать услугу
      </button>
    </section>
  )
}

export default Hero