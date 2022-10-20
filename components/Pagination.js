import {useState} from 'react'

export const Pagination = ({cards}) => {
   
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage, setCardsPerPage] = useState(4);
    const [nPrev, setNprev] = useState(0);
    const [nNext,setNnext] = useState(cardsPerPage);
    const [currentCards,setCurrentCards] = useState(cards.slice(nPrev,nNext))

    let nPages = Math.ceil(cards.length / cardsPerPage);

    
    let displayBtns = []

    const changePage=(page)=>{
        nPrev += cardsPerPage
        nNext += cardsPerPage
        setCurrentCards(cards.slice(nPrev,nNext))
    }

    for(let i = 0; i < nPages; i++){
        displayBtns.push(<button className={`border border-gray-300 p-2 ${currentPage == i?"bg-blue-100 text-blue-600":"bg-transparent"} px-4 py-2 font-medium rounded-lg`} onClick={()=>{setCurrentPage(i);changePage(i)}}>{i+1}</button>)
    }
    console.log(cards.length)
  return (
    <div className=''>
       <div className='flex flex-wrap justify-around'>
        {currentCards.map(card => {return card})}
       </div>
       <div className='flex gap-3 w-fit mx-auto mt-12'>
        {displayBtns}
       </div>
    </div>
  )
}
