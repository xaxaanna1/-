import React, { useState } from 'react';

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: '1',
    phone: '',
    notes: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Здесь будет логика отправки данных на сервер
    console.log('Форма отправлена:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Забронировать столик</h2>
      <label htmlFor="name">Имя:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

      <label htmlFor="date">Дата:</label>
      <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />

      <label htmlFor="time">Время:</label>
      <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />

      <label htmlFor="guests">Количество гостей:</label>
      <select id="guests" name="guests" value={formData.guests} onChange={handleChange} required>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        {/* ... добавить больше опций ... */}
      </select>

      <label htmlFor="phone">Номер телефона:</label>
      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />

      <label htmlFor="notes">Дополнительные пожелания:</label>
      <textarea id="notes" name="notes" value={formData.notes} onChange={handleChange} />

      <button type="submit">Забронировать</button>
    </form>
  );
}

export default BookingForm;
