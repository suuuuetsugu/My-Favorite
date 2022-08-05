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
        <div class='h2 my-3'>{param.post.title}</div>
        <div class='h2 my-3 bg-primary text-white'>好きな理由</div>
        <div class='h5'>{param.post.reason}</div>
        <Link href='/'><a class='my-5'>TOP</a></Link>
      </div>
    );
}

export default movie;