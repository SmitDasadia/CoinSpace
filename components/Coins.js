/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

const Coins = ({ name, id, price, symbol, marketCap, volume, img, priceChange }) => {

  return (
    <Link href='/coin/[id]' as={`/coin/${id}`} legacyBehavior>
      <a>
        <div className='coin_container text-white flex justify-center hover:bg-sky-900  '>
          <div className="coin_row flex flex-row justify-items-start items-center h-[80px] w-[1000px] border-b border-white
      px-[0rem] py-[2rem]">
        
            <div className="coin flex items-center pr-[24px]">
              <img src={img} alt="img" className="coin_img h-10 w-10 mr-[10px]" />
              <h1 className="coin_h1 font-bold w-[150px]">
                {name}
              </h1>
              <p className="coin_symbol uppercase">{symbol}</p>
            </div>
            <div className="coin_data flex text-right justify-between w-[100%]">
              <p className='"coin_price w-[110px]'>{price}</p>
              <p className='"coin_vloume w-[155px]'>{volume}</p>
              {priceChange < 0 ? (
                <p className="coin_red text-red-800 w-[100px]">{priceChange}</p>
              ) : (<p className="coin_green text-green-700 w-[100px]">{priceChange}</p>)}
              <p className="coin-marketCap w-[230px]">{marketCap}</p>

            </div>
          </div>

        </div>
      </a>
    </Link>
  )
}

export default Coins