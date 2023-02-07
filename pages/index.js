import React from 'react'
import {client} from '../lib/client'
import { Product , FooterBanner , HeroBanner } from '../components';

const Home = ({products ,bannerdata}) => {
  return (
    <>
      <HeroBanner heroBanner={bannerdata.length && bannerdata[0]} />
      <div className="products-heading">
        <h2>
          Best selling products
        </h2>
        <p>speakers of many variations</p>
      </div>

      <div className="products-container">
        {products?.map((product)=> <Product key={product._id} product={product}/>)}
      </div>

      <FooterBanner footerBanner={bannerdata && bannerdata[0]} />
    </>
  )
}

export const getServerSideProps = async () =>{
  const query= '*[_type == "product"]';
  const products= await client.fetch(query);

  const bannerquery= '*[_type == "banner"]';
  const bannerdata = await client.fetch(bannerquery);

  return {
    props: { products, bannerdata}
  }
}

export default Home;