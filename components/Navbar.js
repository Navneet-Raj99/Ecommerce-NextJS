import Link from 'next/link'
import React, { useRef } from 'react'
import { AiOutlineShoppingCart, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'

const Navbar = ({cart,addToCart, removeFromCart, clearCart, amount}) => {
    console.log(cart,addToCart,removeFromCart,clearCart,amount)
    const toggleCart = () => {
        if (ref.current.classList.contains("translate-x-full")) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        }
        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add("translate-x-full")
        }
    }

    const ref = useRef();


    return (
        <div>
            <header class="text-gray-600 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span class="ml-3 text-xl">Ecommerce</span>
                    </a>
                    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href={'/tshirt'} class="mr-5 hover:text-gray-900 text-2xl text-neutral-900">Tshirts</Link>
                        <Link href={'/mugs'} class="mr-5 hover:text-gray-900 text-2xl text-neutral-900" >Mug</Link>
                        <Link href={'/hoodies'} class="mr-5 hover:text-gray-900 text-2xl text-neutral-900">Hoodies</Link>
                        <Link href={'/shoes'} class="mr-5 hover:text-gray-900 text-2xl text-neutral-900">Shoes</Link>
                    </nav>
                    {/* <Link href={'/'}><AiOutlineShoppingCart class='text-3xl'/></Link> */}

                </div>
            </header>
            <div onClick={toggleCart} className="cart absolute right-0 top-4 mx-5">
                <AiOutlineShoppingCart className='text-xl md:text-2x1' />
            </div>

            <div ref={ref} className="w-72 sideCart absolute top-0 right-0 bg-pink-100 px-8 py-10 transform transition-transform translate-x-full">
                <h2 className='font-bold text-xl text-center '>Shopping Cart</h2>
                <div onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer">X</div>
                <ol className='list-decimal font-semibold'>
                    <li>
                        <div className="item flex">
                            <div className='w-2/3 font-semibold'>Tshirt </div>
                            <div className='flex font-semibold items-center justify-center w-1/3 text-lg'> 
                            <AiFillMinusCircle />
                                <span className='mx-2'>1</span> 
                                <AiFillPlusCircle/> 
                                </div>

                        </div>
                    </li>
                    <li>
                        <div className="item flex">
                            <div className='w-2/3 font-semibold'>Tshirt </div>
                            <div className='flex font-semibold items-center justify-center w-1/3 text-lg'> 
                            <AiFillMinusCircle />
                                <span className='mx-2'>1</span> 
                                <AiFillPlusCircle/> 
                                </div>

                        </div>
                    </li>
                    <li>
                        <div className="item flex">
                            <div className='w-2/3 font-semibold'>Tshirt </div>
                            <div className='flex font-semibold items-center justify-center w-1/3 text-lg'> 
                            <AiFillMinusCircle />
                                <span className='mx-2'>1</span> 
                                <AiFillPlusCircle/> 
                                </div>

                        </div>
                    </li>

                </ol>
                <div class="p-2 w-full">
          <button class="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Checkout</button>
        </div>
            </div>



        </div>
    )
}

export default Navbar;