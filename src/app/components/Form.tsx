'use client'

import React, { useState } from "react"

const Form = () => {
  const [contribution, setContribution] = useState('')
  const [fees, setFees] = useState('')
  const [months, setMonths] = useState('')
  const [result, setResult] = useState({})

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    setResult({
      contribution: contribution,
      fees: fees,
      months: months,
      total : (contribution * ((((1 + (fees / 100)) ** months) - 1) / (fees / 100))).toFixed(2)
    })
  }

  return (
    <section className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          <span>Aporte Mensal</span>
          <input 
            type="text"
            placeholder="R$ 0,00"
            value={contribution}
            onChange={(e) => setContribution(e.target.value)}
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
      {result.total && (
        <section className="result">
          <p>Total investido: <span>R$: {result.contribution}</span></p>
          <p>Rendimento Total: <span>R$: {result.total - result.contribution}</span></p>
          <p>Juros Mensal: <span>{result.fees}</span>%a.m</p>
          <p><span>{result.months}</span> meses</p>
          <p>Total: <span>R$: {result.total}</span></p>
        </section>
      )}
    </section>
  )
}

export default Form