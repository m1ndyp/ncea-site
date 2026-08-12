function About() {
    return (
        <section style={{
            padding: '100px 20px',
            maxWidth: '1000px',
            margin: '0 auto'
        }}>
            <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                marginBottom: '20px',
                background: 'linear-gradient(90deg, var(--red), var(--orange))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent'
            }}>
                Чем мы занимаемся:
            </h2>

            <p style={{
                color: 'var(--text-muted)',
                fontSize: '1.1rem',
                lineHeight: '1.8',
                marginBottom: '40px'
            }}>
                NCEA создаёт визуальные идентичности для бизнеса любого масштаба.
                Логотип, фирменный стиль, брендбук — всё что нужно чтобы тебя запомнили.
            </p>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
            }}>
                {['Логотип', 'Брендбук', 'Фирменный стиль'].map((item) => (
                    <div key={item} style={{
                        background: 'var(--grey)',
                        border: '1px solid var(--border)',
                        borderRadius: '8px',
                        padding: '30px',
                        textAlign: 'center',
                    }}>
                        <p style={{ color: 'white', fontWeight: 'bold' }}>{item}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default About