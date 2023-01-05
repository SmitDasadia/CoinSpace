/* eslint-disable @next/next/no-img-element */
import React from 'react'

const slug = ({ coin }) => {
    // console.log(coin)
    return (
        <section class="body-font text-white">

            <div class="container px-5 py-10 mx-auto border-b border-white">
                <div class="flex flex-wrap -m-4 text-center">
                    <div class="p-4 sm:w-1/4 w-1/2">
                        <div className="coin flex items-center">
                            <img src={coin.image.large} alt="img" className="coin_img h-10 w-10 mr-[10px]" />
                            <h1 className="coin_h1 font-bold w-[100px]">
                                {coin.name}
                            </h1>
                            <p className="coin_symbol uppercase mr-[20px]">{coin.symbol}</p>
                            <div className="inline-flex items-center bg-[#0323ff] border-0 py-1 px-2 focus:outline-none rounded text-base mt-4 md:mt-0 text-white">Rank: #{coin.market_cap_rank}</div>   
                        </div>
                    </div>

                </div>
            </div>


            <div class="container px-5 py-20 mx-auto">
                <div class="flex flex-wrap -m-4 text-center">
                    <div class="p-4 sm:w-1/4 w-1/2">
                        <p class="leading-relaxed text-2xl">MarketCap</p>
                        <h2 class="title-font font-medium  text-xl ">₹{coin.market_data.market_cap.inr}</h2>
                    </div>
                    <div class="p-4 sm:w-1/4 w-1/2">
                        <p class="leading-relaxed text-2xl">Total Volume</p>
                        <h2 class="title-font font-medium  text-xl ">₹{coin.market_data.total_volume.inr}</h2>
                    </div>
                    <div class="p-4 sm:w-1/4 w-1/2 text-green-700">
                        <p class="leading-relaxed text-2xl ">24H High</p>
                        <h2 class="title-font font-medium  text-xl ">₹{coin.market_data.high_24h.inr}</h2>
                    </div>
                    <div class="p-4 sm:w-1/4 w-1/2 text-red-700 ">
                        <p class="leading-relaxed text-2xl ">24H Low</p>
                        <h2 class="title-font font-medium  text-xl ">₹{coin.market_data.low_24h.inr}</h2>
                    </div>
                </div>
            </div>

            <div class="container px-5 py-10 mx-auto">
                <div class="flex flex-wrap -m-4 text-center">
                <div class="p-4 sm:w-1/4 w-1/2">
                        <p class="leading-relaxed text-2xl">Current Price</p>
                        <h2 class="title-font font-medium  text-xl ">₹{coin.market_data.current_price.inr}</h2>
                    </div>
                    <div class="p-4 sm:w-1/4 w-1/2">
                        <p class="leading-relaxed text-2xl">Price Change(24H)</p>
                        <h2 class="title-font font-medium  text-xl ">{coin.market_data.price_change_percentage_24h}%</h2>
                    </div>
                    <div class="p-4 sm:w-1/4 w-1/2">
                        <p class="leading-relaxed text-2xl">Price Change(7D)</p>
                        <h2 class="title-font font-medium  text-xl ">{coin.market_data.price_change_percentage_7d}%</h2>
                    </div>
                    <div class="p-4 sm:w-1/4 w-1/2 ">
                        <p class="leading-relaxed text-2xl ">Price Change(14D)</p>
                        <h2 class="title-font font-medium  text-xl ">{coin.market_data.price_change_percentage_14d}%</h2>
                    </div>
                    <div class="p-4 sm:w-1/4 w-1/2 ">
                        <p class="leading-relaxed text-2xl ">Price Change(30D)</p>
                        <h2 class="title-font font-medium  text-xl ">{coin.market_data.price_change_percentage_30d}%</h2>
                    </div>
                    <div class="p-4 sm:w-1/4 w-1/2 ">
                        <p class="leading-relaxed text-2xl ">Price Change(60D)</p>
                        <h2 class="title-font font-medium  text-xl ">{coin.market_data.price_change_percentage_60d}%</h2>
                    </div>
                    <div class="p-4 sm:w-1/4 w-1/2 ">
                        <p class="leading-relaxed text-2xl ">Price Change(200D)</p>
                        <h2 class="title-font font-medium  text-xl ">{coin.market_data.price_change_percentage_200d}%</h2>
                    </div>
                    <div class="p-4 sm:w-1/4 w-1/2 ">
                        <p class="leading-relaxed text-2xl ">Price Change(1 Year)</p>
                        <h2 class="title-font font-medium  text-xl ">{coin.market_data.price_change_percentage_1y}%</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default slug


export async function getServerSideProps(context) {
    const { slug } = context.query
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${slug}?sparkline=true`)

    const data = await res.json();
    return {
        props: { coin: data } // will be passed to the page component as props
    }
}