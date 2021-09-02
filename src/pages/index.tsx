import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { SubscribeButton } from '../components/SubscribeButton';

import styles from './home.module.scss'
import { stripe } from '../services/stripe'

export default function Home( props ) {
  console.log({props});
  return (
    <>
      <Head>
        <title>
          Home | ig.news
        </title>
      </Head> 
        <main className={styles.contentContainer}>
          <section className={styles.hero}>
            <span>
            👏 Hew, welcome
            </span>
            <h1>New about the <span>React</span> world.</h1>
            <p>
              get access to all the publications <br />
              <span>for {props.product.amount} month</span>
          </p>
          <SubscribeButton />
          </section>
          <img src="/images/avatar.svg" alt="Girl coding" />
        </main>
    
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1JV25RAIy7cgDlL56bKcM3BR', {
    expand: ['product']
  });

  const product = {
    priceId: price.id,
    amount: price.unit_amount / 100,
  };

  return {
    props: {
      product
    }
  }
} 