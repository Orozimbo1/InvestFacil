// Components
import { Form, FormFuture } from './components'

export default function Home() {
  return (
    <main className='container'>
      <h1>Simule agora</h1>
      <p className='desc'>
        Desvende o poder dos juros compostos! Sua chave para construir riqueza de forma consistente. Comece a investir e veja seu dinheiro se multiplicar ao longo do tempo. Não perca a chance de impulsionar suas finanças.
      </p>
      <Form />
      <h1>Veja quanto investir</h1>
      <p className='desc'>
        Sonha com uma aposentadoria, mas tá meio perdido? Descubra quanto investir todo mês para chegar lá! Nós simplificamos o caminho para você - é fácil, prático e pode ser o passaporte para o futuro que você deseja. Invista com sabedoria e veja seus sonhos virarem realidade!
      </p>
      <FormFuture />
    </main>
  )
}
