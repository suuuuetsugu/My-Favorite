import Link from 'next/link';
import styles from '../styles/Home.module.css'

export const getServerSideProps = async (context)=>{
    const id = context.query.id
    const res = await fetch(`https://api.sssapi.app/HJmXN4iofRVgxf8SmTxMW/${id}`)
    const post = await res.json()
   
    return{
      props: {post}
    }
  }

const movie = (param) => {
    return (
      <div className={styles.main}>
        <div>{param.post.title}</div>
        <div>好きな理由</div>
        <div>{param.post.reason}</div>
        <Link href='/'><a>TOP</a></Link>
      </div>
    );
}

export default movie;