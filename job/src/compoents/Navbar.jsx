import React, { useState } from "react";
import { ChevronLeft, ChevronRight, DiscIcon as DiscordIcon, TwitterIcon, EclipseIcon as Ethereum } from 'lucide-react'

const NavBar = () => {
    const [isGamesOpen, setIsGamesOpen] = useState(false);
    const imageUrl =
        "https://images.ctfassets.net/q3i0z6mxyv6b/4R1jnJTS344L9wKGosvYy9/58e414e3167fea95b84d846c69fb79e6/Stake_LOOKS_Earn_Shards_-_HP.png";

    const slides = [
        {
            id: 1,
            title: "Earn $YOLO Shards!",
            description: "Stake LOOKS, earn $YOLO Shards. Convert them at the...",
            image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-12-06%20212700-K3gm2wW074k3YR5qXGwWwPzdDpXwqU.png",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const previousSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <>
            <header className="sticky top-0 w-full  bg-white bg-opacity-95 backdrop-blur z-10">
                <div className="flex h-24 justify-between items-center px-5 md:px-10">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-2">
                        <span className="font-semibold text-2xl">LooksRare</span>
                        <a href="/" className="flex items-center">
                            <div className="h-6 w-6 bg-emerald-500 rounded flex items-center justify-center">
                                <div className="h-3 w-3 rotate-45 bg-white" />
                            </div>
                        </a>
                    </div>

                    {/* Navigation Section */}
                    <nav className="hidden md:flex space-x-8">
                        {/* Dropdown for Games */}
                        <div className="relative">
                            <button
                                onClick={() => setIsGamesOpen(!isGamesOpen)}
                                className="flex items-center space-x-2 px-3 py-2 font-semibold rounded-md hover:bg-gray-100"
                            >
                                <span className="text-lg">Games</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-5 w-5 transition-transform ${isGamesOpen ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {isGamesOpen && (
                                <div className="absolute top-full left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                                    <div className="py-1">
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Popular Games
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            New Releases
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                        <a href="#" className="text-lg font-semibold hover:bg-gray-100 rounded-md px-3 py-2">
                            NFTs
                        </a>
                        <a href="#" className="text-lg font-semibold hover:bg-gray-100 rounded-md px-3 py-2">
                            Rewards
                        </a>
                    </nav>

                    {/* Search Bar */}
                    <div className="hidden md:flex flex-1 items-center justify-center px-2">
                        <div className="relative w-full max-w-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 -ml-28"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                            <input
                                type="search"
                                placeholder="Search"
                                className="w-full h-12 -ml-28 rounded-lg bg-gray-100 pl-10 pr-4 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center space-x-4">
                        {/* Wallet Section */}
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                            <span className="text-sm font-medium text-green-700">$</span>
                        </div>
                        {/* Cart Icon */}
                        <button className="relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 004 0z"
                                />
                            </svg>
                        </button>
                        {/* Connect Wallet Button */}
                        <button className="h-12 items-center rounded-lg bg-gray-300 px-5 py-2 text-white font-bold hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-400">
                            Connect
                        </button>
                    </div>
                </div>
            </header>

            <div className="mt-10">
                <div className="px-20 relative" >
                    <img className="h-[530px] w-full rounded-xl" src={imageUrl} alt="error" />
                    <h1 className="absolute bottom-20 text-white text-5xl font-bold ml-8">Earn $YOLO Shards!</h1>
                    <p className="text-lg text-gray-300 bottom-10 absolute ml-8">
                        Stake LOOKS, earn $YOLO Shards. Convert them at the ...
                    </p>
                </div>
            </div>
            <div className="flex justify-between ml-20 mt-11">
                <div className="text-2xl leading-10 sm:text-3xl sm:leading-relaxed font-bold tracking-tighter text-text-01 font-grotesque">
                    Making Web3 Fun Again
                </div>
                <div className="flex justify-evenly items-center mt-5 ">
                    <div className=" mr-8 "><img className="h-4 w-4  " src="https://img.icons8.com/?size=100&id=25627&format=png&color=000000" alt="" /></div>
                    <div className="mr-20"><img className='h-4 w-4' src="https://img.icons8.com/?size=100&id=111057&format=png&color=000000" alt="" /></div>
                </div>
            </div>
            <hr className="h-3 mt-5" />
            <div className="text-2xl font-bold ml-12 mt-6 mb-2">
                Play Games, Win Prizes
            </div>

            <div className="flex justify-between items-center gap-7 h-full min-w-[320px] mx-10 ">
                <div className="">
                    <img className="rounded-lg" src="https://looksrare.org/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fq3i0z6mxyv6b%2F1j1jNtojXidgAgfOZ7lwbT%2Fb60cf55ec445ad4b2828a701e1d9e942%2Fyolo-cta.jpg&w=960&q=75" alt="error" />
                    <p className="text-xl font-bold mt-4">$YOLO</p>
                    <p className="text-gray-300 mt-2">hbsajsajksnxkjsnjjhsbch</p>



                </div>
                <div className="">
                    <img className="rounded-lg" src="https://looksrare.org/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fq3i0z6mxyv6b%2F4R1jnJTS344L9wKGosvYy9%2F58e414e3167fea95b84d846c69fb79e6%2FStake_LOOKS_Earn_Shards_-_HP.png&w=960&q=75" alt="error" />
                    <p className="text-xl font-bold mt-4">Poke the Bear</p>
                    <p className="text-gray-300 mt-2">dskdnkdnhkndskjnksndksjndnjsknj</p>
                </div>

                <div className="">
                    <img className="rounded-lg" src="https://looksrare.org/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fq3i0z6mxyv6b%2F4R1jnJTS344L9wKGosvYy9%2F58e414e3167fea95b84d846c69fb79e6%2FStake_LOOKS_Earn_Shards_-_HP.png&w=960&q=75" alt="" />
                    <p className="text-xl font-bold mt-4">Earn $YOLO Shards</p>
                    <p className="text-gray-300 mt-2">dihjhshjshjsbhjhjsbhdhhhdsh</p>
                </div>
            </div>
            <hr className="h-5 mt-16 " />

            <section className="py-5 px-20">
                <h2 className="text-2xl font-semibold mb-3">Game Stats</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-2">
                        <p className="text-4xl lg:text-5xl font-bold tabular-nums">
                            {new Intl.NumberFormat().format(7136)}
                        </p>
                        <p className="text-gray-500">Total Players</p>
                    </div>

                    <div className="space-y-2">
                        <p className="text-4xl lg:text-5xl font-bold tabular-nums flex items-center gap-2">
                            <Ethereum className="h-8 w-8" />
                            {new Intl.NumberFormat().format(12911)}
                        </p>
                        <p className="text-gray-500">Total Game Volume</p>
                    </div>

                    <div className="space-y-2">
                        <p className="text-4xl lg:text-5xl font-bold tabular-nums">
                            {new Intl.NumberFormat().format(46634)}
                        </p>
                        <p className="text-gray-500">Games Played</p>
                    </div>

                    <div className="space-y-2">
                        <p className="text-4xl lg:text-5xl font-bold tabular-nums flex items-center gap-2">
                            <Ethereum className="h-8 w-8" />
                            {new Intl.NumberFormat().format(8218)}
                        </p>
                        <p className="text-gray-500">Prizes Won</p>
                    </div>
                </div>
            </section>
            <hr className="mt-7 text-gray-300 h-5" />
            <div className="flex justify-between">
                <div className="text-2xl font-bold ml-12 mb-4">Buy & Sell NFTs</div>
                <div className="mr-10 h-9 w-20 bg-slate-200 rounded-lg text-center "> <button className="text-base font-bold text-center mt-1">Explore</button></div>

            </div>
            <div className="flex justify-between gap-5">
                <div>
                    <div className="w-96 h-96 ml-12">
                        <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
                            <div className="space-y-6">
                                <div className=" text-black p-4">
                                    <h2 className="text-4xl font-bold leading-tight">
                                        Flip Those<br />Blue-Chips
                                    </h2>
                                </div>
                                <p className="text-lg text-gray-800 leading-relaxed">
                                    LooksRare taps into listings from all major marketplaces, so you can grab grails from anywhere, for the best price.
                                </p>
                            </div>
                            <div className="flex gap-4 mt-40">
                                <button className="flex-1 bg-black text-white text-base font-medium py-3 px-4 rounded hover:bg-black/90 transition-colors">
                                    Sell NFTs
                                </button>
                                <button className="flex-1 bg-gray-100 text-gray-800 text-base font-medium py-3 px-4 rounded hover:bg-gray-200 transition-colors">
                                    Explore
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="" >
                    <div className="w-[300px] h-[490px] overflow-hidden bg-white rounded-lg shadow-md">
                        <div className="relative">
                            <img
                                src="https://looksrare.org/_next/image?url=https%3A%2F%2Fstatic.looksnice.org%2F0xBd3531dA5CF5857e7CfAA92426877b022e612cf8%2F0xa476e700eca3b8612cc476dd3343ca7fdeeff595508615b0831b99d56043ed7c&w=960&q=75"
                                alt="Pudgy Penguin NFT"
                                className="w-full h-auto"
                            />
                            <div className="absolute bottom-0 left-4 w-12 h-12 rounded-lg">
                                <img
                                    src="https://looksrare.org/_next/image?url=https%3A%2F%2Fstatic.looksnice.org%2F0xBd3531dA5CF5857e7CfAA92426877b022e612cf8%2F0x14357d5f196f98b9ef236f04814c7c4b90a7b698457837eff831eb5be11c69e2&w=262&q=75"
                                    alt="Collection thumbnail"
                                    className="w-10 h-10 rounded-md"
                                />
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex items-center gap-2 mb-4">
                                <h2 className="text-lg font-bold">Pudgy Penguins</h2>
                                <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-blue-500 bg-blue-100 rounded-full">
                                    ✓
                                </span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <div className="">
                                    <p className="text-gray-500">Floor</p>
                                    <p className="font-medium flex items-center gap-1 mt-3">
                                        <span className="text-gray-400">Ξ</span> 11
                                        <span className="text-gray-500">0%</span>
                                    </p>
                                </div>
                                <div>
                                    <p className="text-gray-500">24h Vol</p>
                                    <p className="font-medium flex items-center gap-1 mt-3">
                                        <span className="text-gray-400">Ξ</span> 3.6K
                                        <span className="text-green-500">+623.21%</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>

                <div className=""> 
                    <div className="w-[300px] h-[490px] overflow-hidden bg-white rounded-lg shadow-md">
                    <div className="relative">
                        <img
                            src="https://looksrare.org/_next/image?url=https%3A%2F%2Fstatic.looksnice.org%2F0x524cAB2ec69124574082676e6F654a18df49A048%2F0x7ea97054e9aba7ba9ddeddbc15cd31ad269cd965b4aadef5aa599d9ebaf099f1&w=960&q=75"
                            alt="Pudgy Penguin NFT"
                            className="w-full h-auto"
                        />
                        <div className="absolute bottom-0 left-4 w-12 h-12 rounded-lg">
                            <img
                                src="https://looksrare.org/_next/image?url=https%3A%2F%2Fstatic.looksnice.org%2F0xBd3531dA5CF5857e7CfAA92426877b022e612cf8%2F0x14357d5f196f98b9ef236f04814c7c4b90a7b698457837eff831eb5be11c69e2&w=262&q=75"
                                alt="Collection thumbnail"
                                className="w-10 h-10 rounded-md"
                            />
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="flex items-center gap-2 mb-4">
                            <h2 className="text-lg font-bold">Pudgy Penguins</h2>
                            <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-blue-500 bg-blue-100 rounded-full">
                                ✓
                            </span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <div className="">
                                <p className="text-gray-500">Floor</p>
                                <p className="font-medium flex items-center gap-1 mt-3">
                                    <span className="text-gray-400">Ξ</span> 11
                                    <span className="text-gray-500">0%</span>
                                </p>
                            </div>
                            <div className="">
                                <p className="text-gray-500">24h Vol</p>
                                <p className="font-medium flex items-center gap-1 mt-3">
                                    <span className="text-gray-400">Ξ</span> 3.6K
                                    <span className="text-green-500">+623.21%</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div></div>
                <div> <div className="w-[300px] h-[490px] overflow-hidden bg-white rounded-lg shadow-md">
                    <div className="relative">
                        <img
                            src="https://looksrare.org/_next/image?url=https%3A%2F%2Fstatic.looksnice.org%2F0xED5AF388653567Af2F388E6224dC7C4b3241C544%2F0x3bff7b0966ccfee008f39c0bbcddc8cf5c815fc64fdb21701513b3b4294946be&w=960&q=75"
                            alt="Pudgy Penguin NFT"
                            className="w-full h-auto"
                        />
                        <div className="absolute bottom-0 left-4 w-12 h-12 rounded-lg">
                            <img
                                src="https://looksrare.org/_next/image?url=https%3A%2F%2Fstatic.looksnice.org%2F0xBd3531dA5CF5857e7CfAA92426877b022e612cf8%2F0x14357d5f196f98b9ef236f04814c7c4b90a7b698457837eff831eb5be11c69e2&w=262&q=75"
                                alt="Collection thumbnail"
                                className="w-10 h-10 rounded-md"
                            />
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="flex items-center gap-2 mb-4">
                            <h2 className="text-lg font-bold">Pudgy Penguins</h2>
                            <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-blue-500 bg-blue-100 rounded-full">
                                ✓
                            </span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <div className="">
                                <p className="text-gray-500">Floor</p>
                                <p className="font-medium flex items-center gap-1 mt-3">
                                    <span className="text-gray-400">Ξ</span> 11
                                    <span className="text-gray-500">0%</span>
                                </p>
                            </div>
                            <div className="">
                                <p className="text-gray-500">24h Vol</p>
                                <p className="font-medium flex items-center gap-1 mt-3">
                                    <span className="text-gray-400">Ξ</span> 3.6K
                                    <span className="text-green-500">+623.21%</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div></div>
            </div>
               <hr className="h-5 mt-20"/>

               <div className="flex justify-between">
                <div className="text-2xl font-bold ml-12">Join & Host Raffles</div>
                <div className="mr-7 ">
                <button className="h-10   items-center rounded-lg bg-slate-300 px-5 py-2 mr-12  font-bold hover:bg-slate-600 focus:outline-none ">
                            See All
                        </button>
                </div>
               </div>
               <div className="flex justify-between gap-8 mt-6">
               <div className="w-[660px] ml-12 ">
                <div className="relative">
                <img className="h-[400px] rounded-md" src="https://looksrare.org/_next/image?url=%2Fimages%2Fuser-generated-raffles%2Fugr-cta.jpg&w=1600&q=75" alt="error" />
                <div className="absolute bottom-8 ml-6">
                 <p className="text-sm font-semibold text-slate-200 ">join over 32 others creators and raffle your NFTs</p>
                 <p className="absolute text-xl font-semibold text-slate-200 mt-5 bottom-7"> Host Your Own Raffle!</p>
                </div>
               
                </div>
               </div>
               <div className="w-[650px] border mr-20  rounded-md bg-gradient-to-r from-slate-100 to-gray-200">
               <div className=" rounded-lg p-8 shadow-sm  w-full min-h-[400px] relative ">
      {/* Ticket Icon */}
      <div className="absolute top-6  right-8">
        <svg 
          width="82" 
          height="82" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="text-emerald-500"
        >
          <path 
            d="M2 9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V11C20.8954 11 20 11.8954 20 13C20 14.1046 20.8954 15 22 15V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17V15C3.10457 15 4 14.1046 4 13C4 11.8954 3.10457 11 2 11V9Z" 
            stroke="currentColor" 
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="space-y-4 absolute bottom-3">
        <h2 className="text-3xl font-bold text-gray-900 ">
          View All Live Raffles
        </h2>
        <p className="text-lg text-gray-600">
          Anyone can create an NFT raffle on LooksRare
        </p>
      </div>
    </div>
               </div>
               </div>

               <div className="flex flex-wrap">
                <div className="w-full  h-[500px] px-28 mt-20  rounded-lg relative">
                   <img className="w-[1300px] h-[500px] rounded-xl" src="https://looksrare.org/_next/image?url=%2Fimages%2Frewards-bg.jpg&w=1600&q=75" alt="eroor" />
                   <h1 className="text-6xl relative font-bold  bottom-96 ml-96 text-white">Earn LooksRare Protocol Rewards
                    <p className="text-base text-white mt-8">Commit LOOKS tokens to earn from the LooksRare protocol's rewards.</p>
                    <button className="h-12 text-base items-center rounded-lg bg-black/25 px-5 py-2 text-white font-bold hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400">
                            start earning 
                        </button>
                    </h1> 
                </div>
                <div className="flex justify-between items-center text-4xl font-semibold h-28 w-[85%] border border-slate-100 rounded-xl ml-28 bg-gradient-to-t from-slate-100 to-zinc-50">
                    <div className="ml-24">$1,05,84,84,125
                        <p className="text-sm text-slate-400 mt-3 ml-4">Total Rewards Earned</p>
                    </div>
                    <div>$1,10,54,188
                    <p className="text-sm text-slate-400 mt-3 ml-4">Total LOOKS Committed</p>
                    </div>
                    <div className="mr-28">1,85,727
                    <p className="text-sm text-slate-400 mt-3 ml-4">Total Earners </p>
                    </div>
                </div>
                </div>




                <div className="min-h-screen flex items-center justify-center bg-white p-4">
      {/* Container with gradient border effect */}
      <div className="relative max-w-2xl w-full">
        {/* Gradient background effects */}
        <div className="absolute -top-80 -left-80 w-[40rem] h-[30rem] bg-purple-200 rounded-full filter blur-3xl opacity-20" />
        <div className="absolute -bottom-80 -right-80 w-[30rem] h-[30rem] bg-pink-200 rounded-full filter blur-3xl opacity-20" />
        
        {/* Main content container with border */}
        <div className="relative bg-white rounded-[100px] py-32 px-12 text-center border border-bg-gradient-to-r from-purple-600 to-pink-400 shadow-[0_0_0_1px_rgba(0,0,0,0.03)]">
          {/* Gradient border effect */}
          <div className="absolute inset-0 rounded-[100px] bg-gradient-to-br from-purple-500 to-pink-600 -z-10  " />
          
          <h2 className="text-[32px] font-semibold text-gray-900 mb-3 my-8">
            Get the Alpha.
          </h2>
          <p className="text-gray-600 mb-12">
            Sign up to our mailing list to get the latest updates on all things LooksRare.
          </p>
          
          {/* Email form */}
          <form onSubmit={(e) => e.preventDefault()} className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-3 bg-gray-100 rounded-lg pr-12 text-gray-900 placeholder-gray-500 focus:outline-none"
              />
              <button 
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 rounded transition-colors"
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-gray-700"
                >
                  <path d="M5 12h14m-7-7 7 7-7 7"/>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>


    <hr className="font-semibold"/>





    <footer className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Start Here Column */}
        <div className="space-y-4 -ml-20">
          <h3 className="text-base font-semibold text-gray-900">Start Here</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Getting Started</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">All Guides</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Become an Affiliate</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Affiliate Dashboard</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Buy LOOKS</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Earn LOOKS</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Tokenomics</a></li>
          </ul>
        </div>

        {/* Developers Column */}
        <div className="space-y-4 -ml-40">
          <h3 className="text-base font-semibold text-gray-900">Developers</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">All Docs</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">API</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Bug Bounty</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Audits</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Dev Discord</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="space-y-4 -ml-52">
          <h3 className="text-base font-semibold text-gray-900">Contact</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Business</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Feature Requests</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Discord</a></li>
            <li><a href="#" className="text-emerald-500 hover:text-emerald-600">Hiring: Join Us!</a></li>
          </ul>
        </div>

        {/* Logo Column */}
        <div className="flex justify-start lg:justify-end -mt-72">
          <a href="#" className="flex items-center space-x-2">
            <span className="text-4xl font-semibold">LooksRare</span>
            <svg 
              viewBox="0 0 24 24" 
              className="w-6 h-6 text-emerald-500"
              fill="currentColor"
            >
              <path d="M21.87 11.5c-.64-1.11-4.16-6.68-10.14-6.5-5.53.14-8.73 5-9.6 6.5a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1 1 0 0 0 0-1zM12.22 17c-4.31.1-7.12-3.59-8-5 1-1.61 3.61-4.9 7.61-5 4.29-.11 7.11 3.59 8 5-1.03 1.61-3.61 4.9-7.61 5z"/>
              <path d="M12 8.5a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 8.5zm0 5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>



    <footer className="w-full px-4 py-8 bg-white md:px-6">
  <div className="mx-auto max-w-7xl space-y-8">
    <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
      <div className="space-y-4 -ml-20">
        <h3 className="text-lg font-semibold">Join the Mailing List</h3>
        <form className="flex w-full  items-center space-x-2">
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-[450px] h-[50px] rounded-md border border-purple-300 bg-gray-200 px-3 py-2 text-sm relative"
            required
          />
          <button
            type="submit"
            className="rounded-md p-2 text-gray-500 hover:bg-gray-100 absolute left-[26rem]"
            aria-label="Subscribe"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 font-bold text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </form>
      </div>
      <div className="flex items-center gap-4">
        <a href="#" aria-label="Download on the App Store">
          <img
            src='data:image/png;base64,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'
            alt="Download on the App Store"
            
            className="h-32"
          />
        </a>
        <a href="#" aria-label="Get it on Google Play">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM_HdNrGgaCb1Rv7nAljbfuQOlQNhCQmon5A&s"
            alt="Get it on Google Play"
           
            className="h-12 w-32 bg-white"
          />
        </a>
      </div>
    </div>
    <div className="flex mt-10 flex-col items-start gap-4 border-t pt-8 md:flex-row md:items-center md:justify-between ">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 -ml-20 mt-10">
        <span>By NFT people, for NFT people</span>
        <span className="hidden md:inline">|</span>
        <span>© 2024 LooksRare</span>
        <span className="hidden md:inline">|</span>
        <a href="#" className="hover:text-gray-900">
          Terms
        </a>
      </div>
      <div className="flex items-center gap-4 mt-10">
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900"
            aria-label="Discord"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <circle cx="9" cy="12" r="1" />
              <circle cx="15" cy="12" r="1" />
              <path d="M7.5 7.2c3.4-1 5.6-1 8.5 0" />
              <path d="M7.5 16.8c3.4 1 5.6 1 8.5 0" />
              <path d="M3 21c3 0 4-1 4-1s1.7-2.3 2-4c.6-3.7 1.3-8.7 2-11 .3-.8 1.2-2 3-2 1.8 0 2.7 1.2 3 2 .7 2.3 1.4 7.3 2 11 .3 1.7 2 4 2 4s1 1 4 1" />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900"
            aria-label="Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center rounded-md bg-gray-100 px-3 py-2 text-sm text-gray-700 hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
            English
          </button>
          <button className="flex items-center rounded-md bg-gray-100 px-3 py-2 text-sm text-gray-700 hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
            Light
          </button>
        </div>
      </div>
    </div>
  </div>
</footer>



        </>

    );
};

export default NavBar;
