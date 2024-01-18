'use client'

import React, { useState } from "react"

import { FormInterface } from "../interfaces"

const Form = () => {
  const [contribution, setContribution] = useState('')
  const [fees, setFees] = useState<number>()
  const [months, setMonths] = useState<number>()
  const [result, setResult] = useState<FormInterface | null>()
  const [error, setError] = useState(false)

  const currencyMask = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    value = value.replace(/\D/g, "")
    value = value.replace(/(\d)(\d{2})$/, "$1,$2")
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".")
    e.target.value = value
    setContribution(e.target.value)
  }

  const changeScore = (value: string): number => {
    return Number(value.replaceAll(".", "").replace(',', '.'))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if(!contribution || !fees || !months) {
      setResult(null)
      setError(true)
      return
    }

    if(!error) {
      let value = changeScore(contribution)

      setResult({
        contribution: value,
        fees: fees,
        months: months,
        total : value * ((((1 + (fees / 100)) ** months) - 1) / (fees / 100))
      })
    }
  }

  return (
    <section className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          <span>Aporte Mensal</span>
          <div className="left">
            <p>R$:</p>
            <input 
              type="text"
              placeholder="0,00"
              value={contribution}
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
              value={fees || ''}
              onChange={(e) => {
                setFees(Number(e.target.value))
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
            value={months || ''}
            onChange={(e) => {
              setMonths(Number(e.target.value))
              setError(false)
            }}  
          />
        </label>
        <input type="submit" value="Calcular" className="btn" />
      </form>
      {error && (
        <p className="error">Todos os campos são obrigatórios.</p>
      )}
      {!error && result?.total && (
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
      )}
    </section>
  )
}

export default Form
