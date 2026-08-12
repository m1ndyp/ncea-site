import { useState } from 'react'

function OrderForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Отправлено:', formData)
    alert('Заявка отправлена! Мы свяжемся с вами.')
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    background: '#1a1a1a',
    border: '1px solid var(--border)',
    borderRadius: '4px',
    color: 'var(--white)',
    fontSize: '1rem',
    outline: 'none',
  }

  return (
    <section id="order" style={{ padding: '100px 20px', background: 'var(--gray)' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>

        <h2 className="section-title">
          Оформить заказ
        </h2>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

          <input
            style={inputStyle}
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            style={inputStyle}
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <select
            style={inputStyle}
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Выберите услугу</option>
            <option value="logo">Логотип</option>
            <option value="brand">Брендбук</option>
            <option value="style">Фирменный стиль</option>
          </select>

          <textarea
            style={{ ...inputStyle, height: '120px', resize: 'vertical' }}
            name="message"
            placeholder="Расскажите о проекте"
            value={formData.message}
            onChange={handleChange}
          />

          <button
            type="submit"
            style={{
              padding: '16px',
              background: 'linear-gradient(90deg, var(--red), var(--orange))',
              border: 'none',
              borderRadius: '4px',
              color: 'white',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            Отправить заявку
          </button>

        </form>
      </div>
    </section>
  )
}

export default OrderForm