'use client'

import React, { useState } from "react"

const FormFuture = () => {
  const [amount, setAmount] = useState('')
  const [fees, setFees] = useState('')
  const [months, setMonths] = useState('')
  const [result, setResult] = useState({})

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    setResult({
      amount: amount,
      fees: fees,
      months: months,
      contribution : (amount / ((((1 + (fees / 100)) ** months) - 1) / (fees / 100))).toFixed(2)
    })
  }

  return (
    <section className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          <span>Montante</span>
          <input 
            type="text"
            placeholder="R$ 0,00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <label>
          <span>Taxa de Juros</span>
          <div>
            <input 
              type="text"
              placeholder="0,00"
              value={fees}
              onChange={(e) => setFees(e.target.value)}  
            />
            <p>% mensal</p>
          </div>
        </label>
        <label>
          <span>Qtd de Meses</span>
          <input 
            type="text"
            placeholder="0"
            value={months}
            onChange={(e) => setMonths(e.target.value)}  
          />
        </label>
        <input type="submit" value="Calcular" className="btn" />
      </form>
      {result.contribution && (
        <article>
          <p>Investimento mensal: <span>R$ {result.contribution}</span></p>
          <p>Juros mensal: <span>{result.fees}</span> %a.m</p>
          <p><span>{result.months}</span> meses</p>
          <p>Montante: <span>R$: {result.amount}</span></p>
        </article>
      )}
    </section>
  )
}

export default FormFuture