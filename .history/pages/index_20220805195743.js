import Head from 'next/head'
import Link from 'next/link'
import Button from '../components/Button'
import styles from '../styles/Home.module.css'

export default function Home(data) {
  return (
    <div>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" /> 
        <title>WORK3-4 Nao</title>
      </Head>

      <main className={styles.main}>
        <h1>私の好きな映画</h1>
        <div class='container'>
          <div>
            <div class='row' className='allMovie'>
            {data.posts.map((item)=>{
              return(
                <div key={item.id} class='col-3'>
                  <div class='bg-primary text-white p-3 m-3'>
                    <Link href={`/${item.id}`}>
                      <a class="h6">{item.title}</a>
                    </Link>
                    <Button />
                    </div>
                </div>
              )
            })}
            </div>
          </div>
        </div>
      </main>
    
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://api.sssapi.app/HJmXN4iofRVgxf8SmTxMW`)
  const posts = await res.json()
  return { props: { posts } }
}
