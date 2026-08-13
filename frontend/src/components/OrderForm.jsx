import { useState } from 'react'

function OrderForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("https://ncea-site-xxxx.onrender.com/api/orders", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        console.log('Успешно сохранено в БД:', formData)
        setIsSubmitted(true)
        setFormData({
          name: '',
          email: '',
          service: '',
          message: ''
        })
      } else {
        alert('Ошибка при отправке на сервер')
      }
    } catch (error) {
      console.error('Ошибка подключения:', error)
      alert('Не удалось подключиться к серверу бэкенда')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="order" style={{ padding: '100px 20px', background: 'var(--gray)' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>

        <h2 style={{
          fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
          marginBottom: '30px',
          textAlign: 'center',
          background: 'linear-gradient(90deg, var(--red), var(--orange))',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
        }}>
          Оформить заказ
        </h2>

        <div className="order-card" style={{ textAlign: isSubmitted ? 'center' : 'left' }}>
          
          {isSubmitted ? (
            <div style={{ padding: '20px 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🎉</div>
              <h3 style={{ color: 'var(--white)', fontSize: '1.5rem', marginBottom: '10px' }}>
                Заявка успешно отправлена!
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '25px' }}>
                Спасибо за доверие. Мы уже обрабатываем ваш запрос и свяжемся с вами в ближайшее время.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)} 
                className="submit-btn"
                style={{ maxWidth: '250px', margin: '0 auto' }}
              >
                Отправить ещё одну
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

              <input
                className="custom-input"
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                className="custom-input"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <select
                className="custom-input"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="" style={{ background: '#181818', color: '#888' }}>Выберите услугу</option>
                <option value="logo" style={{ background: '#181818' }}>Логотип</option>
                <option value="brand" style={{ background: '#181818' }}>Брендбук</option>
                <option value="style" style={{ background: '#181818' }}>Фирменный стиль</option>
              </select>

              <textarea
                className="custom-input"
                style={{ height: '120px', resize: 'vertical' }}
                name="message"
                placeholder="Расскажите о проекте"
                value={formData.message}
                onChange={handleChange}
              />

              <button type="submit" className="submit-btn" disabled={isLoading}>
                {isLoading ? 'Отправка...' : 'Отправить заявку'}
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  )
}

export default OrderForm