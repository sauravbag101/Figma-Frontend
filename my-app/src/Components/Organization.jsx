import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FiExternalLink } from 'react-icons/fi';


const Organisation = () => {
 
  const events = [
    {
      title: "An Organisation Demo",
      time: "14:30 02/06/23 ",
      details: "Admin",
      img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "A showcase International Development Education",
      time: "Your last update was 1 days ago",
      details: "Member",
      img: "https://www.worldphoto.org/sites/default/files/default-media/Piercy.jpg"
    },
    {
      title: "Union Charity Council",
      time: "07:43 04/08/23 ",
      details: "Admin",
      img: "https://img.freepik.com/free-photo/portrait-young-woman-with-natural-make-up_23-2149084942.jpg"
    },
    {
      title: "Education Charity",
      time: "Your last update was 4 days ago",
      details: "Member",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjwmsjsQZvjd_xfIplijafkQgQlB0kXQRBGA&s"
    },
    {
      title: "Education Trust",
      time: "Your last update was 6 days ago",
      details: "Member",
      img: "https://i.pinimg.com/736x/06/9e/00/069e008833a8f421133121e49a5b493a.jpg"
    },
    {
      title: "International Development Education",
      time: "Your last update was 2 days ago",
      details: "Admin",
       img: "https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/portrait-photography/CODERED_B1_portrait-photography_hero-img_900x420.jpg.img.jpg"
    },
    {
        title: "MMN Education Trust",
        time: "11:00 11/03/23 ",
        details: "Admin",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSefQVwGSzyeIkkkLSHPrvAHBlaLAcjJ_scsA&s"

      },
      {
        title: "School Trust",
        time: "Your last update was 10 days ago",
        details: "Member",
      img: "https://images.squarespace-cdn.com/content/v1/59962ced37c58197c0ae86f8/1503337875054-55GKXXJ6Z1U3MR5JMCLM/portrait-photography-tutorial-posing.jpg?format=500w"

      },
  ];
  return (
    <>
    <div className='bg-slate-200 min-h-screen'>
        <div>
    <div className=' pt-4 px-4 '>
      <div className="bg-white w-full h-20 rounded-lg">
      <div className='flex justify-between items-center p-4 px-12 '>
        <div>Loho</div>
        <div>
            <input
              type="text"
              placeholder="Search"
              className="p-2 bg-white-200 rounded-full w-[334px] px-4 border "outline outline-1 outline-offset-2
            />
          </div>
          <nav className="flex g-x-2  text-sm">
          <a href="#" className="text-gray-500 hover:border-x-2 p-4 border-slate-200">
            My App
          </a>
          <a href="#" className="text-gray-600 hover:border-x-2 p-4 border-slate-200">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:border-x-2 p-4 border-slate-200">
            Explore
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          {/* Icons */}
          <div className="flex space-x-2">
              <div className='border p-3 rounded-lg text-[20px]'><IoIosNotificationsOutline /></div>
              <div className='border p-3 rounded-lg text-[20px]'><CiMail /></div>
              <div className='border p-3 rounded-lg text-[20px] bg-red-500 text-[#ffff]'><IoAddCircleOutline /></div>
              <div className='border p-3 rounded-lg text-[20px]'><CiMenuFries /></div>


            </div>
            </div>
            <div className="w-10 h-10 rounded-full mr-4 overflow-hidden">
             <img
             src="https://img.freepik.com/free-photo/portrait-young-woman-with-natural-make-up_23-2149084942.jpg"
             alt=""
             className="w-full h-full object-cover"/>
       
             </div>
      </div>
      </div> 
      {/* Navbar creation */}
      <div className='flex'>
      <div className='w-[350px] h-[600px] bg-white rounded-lg p-4 shadow-md mt-3'>
      <ul className="space-y-4">
      <Link to='/'><li className="text-center py-2 px-4">Home</li></Link>
          <Link to='/Event'><li className="text-center py-2 px-4">Event</li></Link>
          <Link to='/Contact'><li className="text-center py-2 px-4">Contact</li></Link>
          <Link to='/Project'><li className="text-center py-2 px-4">Project</li></Link>
          <Link to='/Album'><li className="text-center py-2 px-4">Album</li></Link>
          <Link to='/Organisation'><li className="bg-blue-500 text-white py-2 px-4 rounded-lg text-center">Organisation</li></Link>
          <Link to='/Task'><li className="text-center py-2 px-4">Tasks</li></Link>
        </ul>
        {/* followers */}
       
      {/* People You Follow Section */}
      <div className="mt-4 bg-slate-100 rounded-lg p-4  ">
        <div className="flex justify-between items-center">
          <h3 className="text-lg ">People you follow</h3>
          <a href="#" className="text-sm text-blue-500">Show all</a>
        </div>
        <div className="mt-2 flex space-x-2">
          {/* Followed people images */}
          {["Mandy", "Rudy", "Eda", "maaze", "Ruby"].map((name, index) => (
            <div key={index} className="text-center">
              <img src={`https://randomuser.me/api/portraits/med/men/${index + 50}.jpg`} className="w-10 h-10 rounded-full" alt={name} />
              <p className="text-sm mt-1">{name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 bg-slate-100 rounded-lg p-4  ">
        <div className="flex justify-between items-center">
          <h3 className="text-lg ">follows</h3>
          <a href="#" className="text-sm text-blue-500">Show all</a>
        </div>
        <div className="mt-2 flex space-x-2">
          {/* Followed people images */}
          {["Mandy", "Rudy", "Eda", "maaze", "Ruby"].map((name, index) => (
            <div key={index} className="text-center">
              <img src={`https://randomuser.me/api/portraits/med/men/${index + 50}.jpg`} className="w-10 h-10 rounded-full" alt={name} />
              <p className="text-sm mt-1">{name}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
      {/* main course */}
      <div className=''>
      <div className='navbar w-[760px] h-[60px] bg-white rounded-lg p-4 shadow-md mt-3 ml-3 flex items-center mb-3'>
        
      <div className=''>
      <input
              type="text"
              placeholder="Search"
              className="p-2 bg-white-200 rounded-lg w-[634px] px-4 border-2 border-slate-200 " outline-offset-2
            />
      </div>
      <div>
        <button className='bg-red-500 rounded-lg px-4 py-2 ml-2 text-white'>Search</button>
      </div>
      </div>
      <div className='flex justify-between py-2 ml-4 px-2' >
        <p>Organisation</p>
        <div className='flex'>
        <p className='bg-white px-2 rounded'>Filter</p>
        <p className='ml-4 bg-white px-2 rounded'>Sort</p>
        </div>
      </div>

      {/* social media */}
      <div className='h-[485px] overflow-y-scroll scrollbar-hidden'>
      
      <div className='w-[755px] h-[540px] bg-white rounded-lg  shadow-md ml-[16px] p-3 mt-2 '>
        
      <div className="">
      <div className='flex justify-between'>
      <h2 className="text-lg  mb-4">Project List</h2>
      <button className="bg-blue-500 text-white px-4 py-0 text-[12px] rounded-md">Add Project</button>
      </div>
      <ul>
        {events.map((event, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-2 border-b last:border-b-0"
          >
            <div className='flex'>
            <div className="w-10 h-10 rounded-full mr-4 overflow-hidden">
             <img
             src={event.img}
             alt=""
             className="w-full h-full object-cover"/>
       
             </div>
             <div>
              <a href="#" className="text-blue-500 hover:underline">
                {event.title}
              </a>
              {/* <p className="text-gray-500 text-[13px]">{event.time}</p> */}
              <p className="text-gray-500 text-[13px]">{event.details}</p>
            </div></div>
            <a href="#">
              <FiExternalLink className="text-blue-500 w-4 h-4" />
            </a>
          </li>
        ))}
      </ul>
    </div>

     

     
      </div>
      </div>
      </div>


      
      {/* end point of flex */}
      <div className='w-[360px] h-[320px] bg-white rounded-lg  shadow-md mt-3 ml-3 '>
       
      <div className="p-4">
      {/* Personal Progress Section */}
      <div className="">
        <div className="flex justify-between items-center mb-4">
          <h2 className=" text-[15px]">Personal Progress</h2>
          <button className="bg-blue-500 text-white px-4 py-2 text-[12px] rounded-md">Go to board</button>
        </div>
        <div className="space-y-4">
          
            <div className="flex items-center space-x-4">
             <div className="w-10 h-10 rounded-full mr-4 overflow-hidden">
             <img
             src="https://nutcaseshop.com/cdn/shop/files/NC-CUS-ROUNDWHITE-OFFICENAMEPLATE-001.jpg?v=1696932086&width=1445"
             alt=""
             className="w-full h-full object-cover"/>
       
             </div>
              <div className="flex-1 ">
                <p className='text-[15px] '>Next JS Project</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                 <div className="bg-blue-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                </div>
               

              </div>
              {/* <div className='pt-5'>
              <FaPlusCircle className='text-blue-600' />
              </div> */}
            </div>
            {/* 2 */}
        
            <div className="flex items-center space-x-4">
             <div className="w-10 h-10 rounded-full mr-4 overflow-hidden">
             <img
             src="https://nutcaseshop.com/cdn/shop/files/NC-CUS-ROUNDWHITE-OFFICENAMEPLATE-001.jpg?v=1696932086&width=1445"
             alt=""
             className="w-full h-full object-cover"/>
       
             </div>
              <div className="flex-1 ">
                <p className='text-[15px] '>JavaScript Project</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                 <div className="bg-blue-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
               

              </div>
              {/* <div className='pt-5'>
              <FaPlusCircle className='text-blue-600' />
              </div> */}
            </div>
            <div className="flex items-center space-x-4">
             <div className="w-10 h-10 rounded-full mr-4 overflow-hidden">
             <img
             src="https://nutcaseshop.com/cdn/shop/files/NC-CUS-ROUNDWHITE-OFFICENAMEPLATE-001.jpg?v=1696932086&width=1445"
             alt=""
             className="w-full h-full object-cover"/>
       
             </div>
              <div className="flex-1 ">
                <p className='text-[15px] '>FullStack Project</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                 <div className="bg-blue-500 h-2 rounded-full" style={{ width: '57%' }}></div>
                </div>
               

              </div>
              {/* <div className='pt-5'>
              <FaPlusCircle className='text-blue-600' />
              </div> */}
            </div>
            <div className="flex items-center space-x-4">
             <div className="w-10 h-10 rounded-full mr-4 overflow-hidden">
             <img
             src="https://nutcaseshop.com/cdn/shop/files/NC-CUS-ROUNDWHITE-OFFICENAMEPLATE-001.jpg?v=1696932086&width=1445"
             alt=""
             className="w-full h-full object-cover"/>
       
             </div>
              <div className="flex-1 ">
                <p className='text-[15px] '>Cloud Project</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                 <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
               

              </div>
              {/* <div className='pt-5'>
              <FaPlusCircle className='text-blue-600' />
              </div> */}
            </div>




        </div>
        <button className="text-blue-500 text-sm pt-[10px]">Show All</button>
      </div>

      {/* Board Section */}
      <div className="w-[360px] h-[245px] bg-white rounded-lg shadow-lg mt-10 ml-[-15px] p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[15px]">Board</h2>
          <button className="bg-blue-500 text-white px-4 py-2 text-[12px] rounded-md">New Board</button>
        </div>
        <div className="space-y-1">
          {['3315', 'Attendance Report', 'Salary Report'].map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
               <div className="w-10 h-10 rounded-full mr-4 overflow-hidden">
             <img
             src="https://nutcaseshop.com/cdn/shop/files/NC-CUS-ROUNDWHITE-OFFICENAMEPLATE-001.jpg?v=1696932086&width=1445"
             alt=""
             className="w-full h-full object-cover"/>
       
             </div>
              <div>
                <p>{item}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="text-blue-500 text-sm mt-3">Show All</button>
      </div>
    </div>




      </div>
      </div>

     </div>
      </div>
      </div>
    </>
  )
}

export default Organisation

