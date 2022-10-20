import Link from 'next/link';
import Image from 'next/image';
import HouseGrp from '../public/images/Group 1000001996.png';
import agentGrp from '../public/images/Group 1000001997.png';
import canadaFlag from '../public/images/flag.png';
import menu from '../public/images/Vector(7).png';
import accImg from '../public/images/Ellipse 110.png'

const Navbar = () => {
  return (
    <div>

    <div className='w-screen flex flex-row justify-between items-center bg-black px-4' >
        <div className='flex flex-row '>
            <div className='w-10 h-20 mt-6 '>
            <Image src={HouseGrp}  width={20} height={20} layout='responsive' alt='HouseVector' />
            </div>
            <div className='w-20 h-20 absolute top-4 left-16 top-10'>
            <Image src={agentGrp} layout='responsive'  alt='TextVector' />
            </div>
        </div>
        <div className='flex flex-row justify-center absolute right-20 gap-4'>
            <div className='border-[2px] border-white w-[46px] h-[44px] rounded-[5px] p-2 ' >
                <Image src={canadaFlag} layout='responsive' width={30} height={30  }/>

            </div>
            <div className='border-[2px] border-white w-[95px] h-[44px] rounded-[5px] flex flex-row p-2 items-start items-center justify-between' >
               <Image  src={menu} />
               <Image  src={accImg} height={25} />

            </div>
       
            <div>

            </div>
        </div>

        <div>

        </div>

    </div>
    </div>
  )
}

export default Navbar