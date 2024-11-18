import React from 'react'

export default function HomePage() {
  return (
    <div className='main' >
        <div className="header">
            <div className="logo">
                <h2>MyShop</h2>
            </div>
            <div className="nav">
                <p>Home</p>
                <p>Our Store</p>
                <p>Blog</p>
                <p>Customers</p>
            </div>
            <div className="search">
                <input type="text" placeholder='Search here...' />
                <button>cart</button>
            </div>
        </div>

        <div className="mid">
                <div className="head1">
                    <div className="head3">
                        <h1 id='find' >FIND YOUR</h1>
                        <p id='dream' >DREAM PRODUCTS</p>
                        <p id='explore' >Explore worlds most innovative and advanced products that makes the life meaningful. </p>
                    </div>

                    <div className='head2' >
                        <div className="block1 block">
                            <p>Men's Cloth</p>
                        </div>
                        <div className="block2 block">
                            <p>Women's Cloth</p>
                        </div>
                        <div className="block3 block">
                            <p>Electronics's</p>
                        </div>
                        <div className="block4 block">
                            <p>Jewellery</p>
                        </div>
                        <div className="block5 block">
                            <p>Toys</p>
                        </div>
                    </div>
                </div>
                

        </div>
     
        <div className="items">
                
        </div>
    </div>
  )
}
