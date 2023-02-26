import Link from '../src/components/Link';
import PageTitle from '../../components/PageTitle'

// Modos:
// SSG - Static Site Generation
// SSR - Server Side Rendering
// IRG - Incremental Static Genetation

// export async function getServerSideProps() {
//     console.log('Roda a cada acesso que você recebe!');
//     console.log('Em modo DEV sempre roda!');
export async function getStaticProps() {
    console.log('Roda SOMENTE no Build');
    const FAQ_API_URL = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
    const faq = await fetch(FAQ_API_URL)
        .then((respostaDoServidor) => {
            return respostaDoServidor.json();
        })
        .then((resposta) => {
            return resposta;
        });

    return {
        props: {
            qualquer_coisa: 'que eu passar aqui',
            faq
        },
    };
}

export default function FAQPage({ faq }) {
    
    return (
        <div>
            <PageTitle>Home - Alura Cases Campanha</PageTitle>
            <h1>Alura Cases - Páginas de Perguntas FAQ</h1>
            
            <Link href="/">
                Ir para a home
            </Link>
            <ul>
                {faq.map(({answer, question}) => (
                    <li key={question}>
                        <h2>{question}</h2>
                        <p>{answer}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}