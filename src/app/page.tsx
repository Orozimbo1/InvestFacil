// Components
import { Form, FormFuture } from './components'

export default function Home() {
  return (
    <main className='container'>
      <h1>Simule agora</h1>
      <p className='desc'>
        Desvende o poder dos juros compostos! Sua chave para construir riqueza de forma consistente. Comece a investir e veja seu dinheiro se multiplicar ao longo do tempo. Não perca a chance de impulsionar suas finanças.
      </p>
      <ul>
        <li><strong>Aporte Mensal</strong> é o valor que irá investir mensalmente.</li>
        <li><strong>Taxa de Juros</strong> é o percentual que o investimento irá render.</li>
        <li><strong>Quantidade de meses</strong> é a quantidade de meses wm que irá fazer o aporte.</li>
      </ul>
      <Form />
      <h1>Veja quanto investir</h1>
      <p className='desc'>
        Sonha com uma aposentadoria, mas tá meio perdido? Descubra quanto investir todo mês para chegar lá! Nós simplificamos o caminho para você - é fácil, prático e pode ser o passaporte para o futuro que você deseja. Invista com sabedoria e veja seus sonhos virarem realidade!
      </p>
      <ul>
        <li><strong>Montante</strong> é o valor que espera ter.</li>
        <li><strong>Taxa de Juros</strong> é o percentual que o investimento irá render.</li>
        <li><strong>Quantidade de meses</strong> é a quantidade de meses wm que irá fazer o aporte.</li>
      </ul>
      <FormFuture />
    </main>
  )
}
