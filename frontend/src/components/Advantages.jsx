function Advantages() {
    const items = [
        { icon: '⚡', title: 'Быстро', text: 'Сдаём проект в срок. Всегда.' },
        { icon: '🎯', title: 'Точно в цель', text: 'Изучаем твой бизнес перед стартом.' },
        { icon: '🔄', title: 'Правки включены', text: 'До 3 правок на каждом этапе бесплатно.' },
        { icon: '💬', title: 'На связи 24/7', text: 'Отвечаем в течение часа в любое время.' },
    ]
    return (
        <section style={{ padding: '100px 20px'}}>
            <div style={{ maxWidth:'1000px', margin: '0 auto' }}>
                
                <h2 style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem',
                    marginBottom: '40px',
                    background: 'linear-gradient(90deg, var(--red), var(--orange))',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent'
                }}>
                    Почему NCEA?
                </h2>

                <div className="grid-2">
                    {items.map((item) => (
                        <div key={item.title} style={{
                            background: 'var(--gray)',
                            border: '1px solid #2a2a2a',
                            borderRadius: '8px',
                            padding: '30px',
                            display: 'flex',
                            gap: '20px',
                            alignItems: 'flex-start',
                        }}>
                            <span style={{ fontSize: '2rem' }}>{item.icon}</span>
                            <div>
                                <p style={{
                                    color: 'var(--white)',
                                    fontWeight: 'bold',
                                    marginBottom: '8px',
                                    fontSize: '1.1rem',
                                }}>
                                    {item.title}
                                </p>
                                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Advantages