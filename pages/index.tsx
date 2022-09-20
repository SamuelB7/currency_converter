import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export function Home({currencies}: any, {convertedCurrency}: any) {
  const [value, setValue] = useState<number>(0)
  const [convertFrom, setConvertFrom] = useState<string>('')
  const [convertTo, setConvertTo] = useState<string>('')
  const [convertedValue, setConvertedValue] = useState<string>()

  async function convertCurrency(from: string, to: string, value: number) {
    //let res = await fetch(`https://economia.awesomeapi.com.br/json/last/${from}-${to}`)
    //let data = await res.json()
    //let formatData = Object.entries(data)
    //let convertedCurrency = formatData[0][1].ask * value

    let res = await fetch(`https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${value}`, {
      method: 'GET',
      headers: {
        apikey : process.env.NEXT_PUBLIC_API_KEY
      }
    })
    let data = await res.json()
    let convertedCurrency = `$${data.result.toFixed(2)}`
    setConvertedValue(convertedCurrency)
    return {props: {convertedCurrency}}
  }

  return (
    <div>
      <Head>
        <title>Currency Converter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container d-flex flex-column align-items-center text-center mt-5">
        <h1>Currency Converter</h1>
        <form action="">
          <div className="form-group">
            <label htmlFor="" className="form-label">Value</label>
            <input className='form-control' type="number" name="value" value={value} onInput={e => setValue(e.target.value)}/>
          </div>

          <div className="form-group">
            <label htmlFor="" className="form-label">Convert from:</label>
            <select className='form-control' name="convertFrom" value={convertFrom} onChange={(e) => {setConvertFrom(e.target.value)}}>
              <option value="">Selecione uma moeda</option>
              {
                currencies.map((currency: any) => (
                  <option key={currency[0]} value={currency[0]}>{currency[1]}</option>
                ))
              }
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="" className="form-label">Convert to:</label>
            <select className='form-control' name="convertTo" value={convertTo} onChange={(e) => {setConvertTo(e.target.value)}}>
              <option value="">Selecione uma moeda</option>
              {
                currencies.map((currency: any) => (
                  <option key={currency[0]} value={currency[0]}>{currency[1]}</option>
                ))
              }
            </select>
          </div>

          <button onClick={() => convertCurrency(convertFrom, convertTo, value)} type='button' className="btn btn-md btn-primary my-2">Convert</button>
        </form>

        <h5>Converted value:</h5>
        <h4>{convertedValue}</h4>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  //let res = await fetch(`https://economia.awesomeapi.com.br/json/available/uniq`)
  let res = await fetch(`https://api.apilayer.com/fixer/symbols`, {
    method: 'GET',
    headers: {
      apikey : process.env.NEXT_PUBLIC_API_KEY
    }
  })
  let data = await res.json()
  let currencies = Object.entries(data.symbols)
  return { props: { currencies } }
}

export default Home
