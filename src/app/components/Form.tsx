// @ts-nocheck
'use client'

import React, { useState } from "react"

const Form = () => {
  const [contribution, setContribution] = useState('')
  const [fees, setFees] = useState('')
  const [months, setMonths] = useState(0)
  const [result, setResult] = useState({})
  const [error, setError] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if(!contribution || !fees || !months) {
      setError(true)
    }

    if(!error) {
      setResult({
        contribution: Number(contribution),
        fees: fees,
        months: months,
        total : Number((contribution * ((((1 + (fees / 100)) ** months) - 1) / (fees / 100))))
      })
    }
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
            onChange={(e) => {
              setContribution(e.target.value)
              setError(false)
            }}
          />
        </label>
        <label>
          <span>Taxa de Juros</span>
          <div>
            <input 
              type="text"
              placeholder="0,00"
              value={fees}
              onChange={(e) => {
                setFees(e.target.value)
                setError(false)
              }}  
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
            onChange={(e) => {
              setMonths(e.target.value)
              setError(false)
            }}  
          />
        </label>
        <input type="submit" value="Calcular" className="btn" />
      </form>
      {error && (
        <p className="error">Todos os campos são obrigatórios.</p>
      )}
      {!error && result.total ? (
        <section className="result">
          <p>
            Total investido: 
            <span>
              {(result.contribution * result.months).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
            </span>
          </p>
          <p>
            Rendimento Juros: 
            <span>
               {(result.total - (result.contribution * result.months)).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
            </span>
          </p>
          <p>
            Juros Mensal: 
            <span>
              {result.fees}
            </span>
            %a.m
          </p>
          <p>
            <span>
              {result.months}
            </span>
             meses
          </p>
          <p>
            Total: 
            <span>
              {result.total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
            </span>
          </p>
        </section>
      ) : ''}
    </section>
  )
}

export default Form