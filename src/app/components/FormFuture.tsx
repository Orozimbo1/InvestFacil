// @ts-nocheck
'use client'

import React, { useState } from "react"

const FormFuture = () => {
  const [amount, setAmount] = useState('')
  const [fees, setFees] = useState('')
  const [months, setMonths] = useState('')
  const [result, setResult] = useState({})
  const [error, setError] = useState(false)

  const currencyMask = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    value = value.replace(/\D/g, "")
    value = value.replace(/(\d)(\d{2})$/, "$1,$2")
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".")
    e.target.value = value
    setAmount(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(!amount || !fees || !months) {
      setError(true)
      return
    }
    if(!error) {
      let value = amount.replaceAll(".", "").replace(',', '.')
      let contribution = Number((value / ((((1 + (fees / 100)) ** months) - 1) / (fees / 100))))

      setResult({
        amount: Number(value).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}),
        fees: fees,
        months: months,
        contribution : contribution.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
      })
    }
  }

  return (
    <section className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          <span>Montante</span>
          <div className="left">
            <p>R$:</p>
            <input 
              type="text"
              placeholder="0,00"
              value={amount}
              onChange={(e) => {
                currencyMask(e)
                setError(false)
              }}
            />
          </div>
        </label>
        <label>
          <span>Taxa de Juros</span>
          <div className="right">
            <input 
              type="number"
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
            type="number"
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
      {result.contribution && !error && (
        <section className="result">
          <p>
            Investimento mensal: 
            <span>
              {result.contribution}
            </span>
          </p>
          <p>
            Juros mensal: 
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
            Montante: 
            <span>
              {result.amount}
            </span>
          </p>
        </section>
      )}
    </section>
  )
}

export default FormFuture
