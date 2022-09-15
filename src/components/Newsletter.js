import React from 'react';
import Swal from 'sweetalert2';
import { postToApi } from '../helpers/fetchToApi';
import { checkRegexp, emailRegexp } from '../helpers/regexp';
import { useForm } from '../hooks/useForm';

export const Newsletter = () => {

  const [ values, handleInputChange ] = useForm({
    name: '',
    email: ''
  })

  const { name, email } = values

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    const emailCheck = checkRegexp(emailRegexp, email)
    if(!emailCheck) return Swal.fire('Opps!', 'El email es inválido', 'error')

    const baseUrl = 'https://corebiz-test.herokuapp.com/api/v1/newsletter'
    
    postToApi(baseUrl, values)
    .then(resp => 
      resp.ok 
      ? Swal.fire('Success', 'Submit Exitoso', 'success') 
      : Swal.fire('Oops!', 'Ocurrió un error, envianos un email si el error sigue', 'warning')
    )
  }

  return (
    <div className="newsletter-container">
      <h2>¡Únete a nuestras novedades y promociones!</h2>
      <form 
        className="newsletter-form-container"
        onSubmit={handleNewsletterSubmit}
      >
        <input 
          className="newsletter-input"
          type="text"
          name="name"
          id="name"
          placeholder="Ingresa tu nombre"
          autoComplete="off"
          value={ name }
          onChange={handleInputChange}
        />
        <input 
          className="newsletter-input" 
          type="text" 
          name="email" 
          id="email" 
          placeholder="Ingresa tu mail" 
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <button className="newsletter-button" type="submit">Suscribirme</button>
      </form>
    </div>
  )
}
