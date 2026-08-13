function Portfolio() {
    const works = [
        { id: 1, title: 'Логотип Hypixel', category: 'Логотип' },
        { id: 2, title: 'Брендбук CubeCraft', category: 'Брендбук' },
        { id: 3, title: 'Фирменный стиль Mineplex', category: 'Фирменный стиль' },
        { id: 4, title: 'Логотип 2b2t', category: 'Логотип' },
        { id: 5, title: 'Брендинг Wynncraft', category: 'Брендбук' },
        { id: 6, title: 'Айдентика Lunar Network', category: 'Фирменный стиль' },
    ]

    return (
        <section style={{ padding: '100px 20px', background: 'var(--gray)' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                <h2 style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                    marginBottom: '40px',
                    background: 'linear-gradient(90deg, var(--red), var(--orange))',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                }}>
                    Примеры работ
                </h2>

                <div className="grid-3">
                    {works.map((work) => (
                        <div key={work.id} style={{
                            background: 'var(--black)',
                            border: '1px solid #2a2a2a',
                            borderRadius: '8px',
                            overflow: 'hidden',
                        }}>
                            <div style={{
                                height: '180px',
                                background: 'linear-gradient(135deg, var(--red), var(--orange))',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2rem',
                            }}>
                                🎨
                            </div>
                            <div style={{ padding: '20px' }}>
                                <span style={{
                                    fontSize: '0.75rem',
                                    color: 'var(--orange)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                }}>
                                    {work.category}
                                </span>
                                <p style={{
                                    color: 'var(--white)',
                                    fontWeight: 'bold',
                                    marginTop: '8px',
                                }}>
                                    {work.title}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Portfolio