import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";


const Home = () => {
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
             src="https://nutcaseshop.com/cdn/shop/files/NC-CUS-ROUNDWHITE-OFFICENAMEPLATE-001.jpg?v=1696932086&width=1445"
             alt=""
             className="w-full h-full object-cover"/>
       
             </div>
      </div>
      </div> 
      {/* Navbar creation */}
      <div className='flex'>
      <div className='w-[350px] h-[600px] bg-white rounded-lg p-4 shadow-md mt-3'>
      <ul className="space-y-4 ">
          <li className="bg-blue-500 text-white py-2 px-4 rounded-lg text-center  ">Home</li>
          <Link to='/Event'><li className="text-center py-2 px-4">Event</li></Link>
          <Link to='/Contact'><li className="text-center py-2 px-4">Contact</li></Link>
          <Link to='/Project'><li className="text-center py-2 px-4">Project</li></Link>
          <Link to='/Album'><li className="text-center py-2 px-4">Album</li></Link>
          <Link to='/Organisation'><li className="text-center py-2 px-4">Organisation</li></Link>
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
        <p>Newfeed</p>
        <div className='flex'>
        <p className='bg-white px-2 rounded'>Filter</p>
        <p className='ml-4 bg-white px-2 rounded'>Sort</p>
        </div>
      </div>

      {/* social media */}
      <div className='h-[485px] overflow-y-scroll scrollbar-hidden'>
      <div className='w-[755px] h-[285px] bg-white rounded-lg  shadow-md ml-[16px] p-3 '>
      <div className="flex items-center mb-2">
      <div className="w-10 h-10 rounded-full mr-4 overflow-hidden">
      <img
         src="https://img.freepik.com/free-photo/portrait-young-woman-with-natural-make-up_23-2149084942.jpg"
         alt=""
         className="w-full h-full object-cover"/>
       
        </div>
        <div>
          <h2 className="font-semibold">Rayaak Paul</h2>
          <p className="text-gray-500 text-sm">Posted at 08:00 on 18th February 2023</p>
        </div>
        <button className="ml-auto bg-blue-500 text-white text-sm px-2 py-1 rounded-full">
          Update
        </button>
      </div>

      <div className="text-sm text-gray-700 mb-4">
        <p>
          2 Event <a href="#" className="text-blue-500">Session Attendances</a> by Yael <a href="#" className="text-blue-500">Adamson-Brown</a> working at harvest session starting at 05:00 on 17th February 2023 on
        </p>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet consectetur. Eget convallis ipsum cum erat. Et enim laoreet vitae varius malesuada. Mattis diam mi eu sit. Sit risus massa mauris justo non sed.
        </p>
        <div className="mt-2 space-x-2">
          <span className="text-sm text-gray-500">#full</span>
          <span className="text-sm text-gray-500">#concertmoney</span>
          <span className="text-sm text-gray-500">#reusable</span>
        </div>
      </div>

      <div className="flex items-center border-t pt-2">
        <div className="flex items-center text-red-500 mr-4">
          <span className="text-sm">3</span>
          <FaHeart className='ml-1'/>
        </div>
        <div className="text-sm text-gray-500 mr-4">0 Comment</div>
        <div className="text-sm text-gray-500">0 Favourites</div>
      </div>

      <div className="mt-2 flex">
        <input
          type="text"
          placeholder="Write a comment..."
          className="w-full border rounded-full p-2 text-sm"
        />
        <button className="bg-red-500 text-white text-sm px-4 py-1 mt-2 rounded-full float-right ml-3">
          Post
        </button>
      </div>
      </div>
      <div className='w-[755px] h-[285px] bg-white rounded-lg  shadow-md ml-[16px] p-3 mt-2 '>
      <div className="flex items-center mb-2">
      <div className="w-10 h-10 rounded-full mr-4 overflow-hidden">
      <img
         src="https://img.freepik.com/free-photo/portrait-young-woman-with-natural-make-up_23-2149084942.jpg"
         alt=""
         className="w-full h-full object-cover"/>
       
        </div>
        <div>
          <h2 className="font-semibold">Rayaak Paul</h2>
          <p className="text-gray-500 text-sm">Posted at 08:00 on 18th February 2023</p>
        </div>
        <button className="ml-auto bg-blue-500 text-white text-sm px-2 py-1 rounded-full">
          Update
        </button>
      </div>

      <div className="text-sm text-gray-700 mb-4">
        <p>
          2 Event <a href="#" className="text-blue-500">Session Attendances</a> by Yael <a href="#" className="text-blue-500">Adamson-Brown</a> working at harvest session starting at 05:00 on 17th February 2023 on
        </p>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet consectetur. Eget convallis ipsum cum erat. Et enim laoreet vitae varius malesuada. Mattis diam mi eu sit. Sit risus massa mauris justo non sed.
        </p>
        <div className="mt-2 space-x-2">
          <span className="text-sm text-gray-500">#full</span>
          <span className="text-sm text-gray-500">#concertmoney</span>
          <span className="text-sm text-gray-500">#reusable</span>
        </div>
      </div>

      <div className="flex items-center border-t pt-2">
        <div className="flex items-center text-red-500 mr-4">
          <span className="text-sm">3</span>
          <FaHeart className='ml-1'/>
        </div>
        <div className="text-sm text-gray-500 mr-4">0 Comment</div>
        <div className="text-sm text-gray-500">0 Favourites</div>
      </div>

      <div className="mt-2 flex">
        <input
          type="text"
          placeholder="Write a comment..."
          className="w-full border rounded-full p-2 text-sm"
        />
        <button className="bg-red-500 text-white text-sm px-4 py-1 mt-2 rounded-full float-right ml-3">
          Post
        </button>
      </div>
      </div>
      </div>
      </div>


      
      {/* end point of flex */}
      <div className='w-[360px] h-[340px] bg-white rounded-lg  shadow-md mt-3 ml-3 '>
       
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
        <button className="text-blue-500 text-sm mt-[20px]">Show All</button>
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

export default Home


// import React from "react";

// const Dashboard = () => {
//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <aside className="bg-gray-200 w-1/5 p-6">
//         <div className="flex flex-col space-y-6">
//           <div className="text-2xl font-semibold">Logo</div>
//           <nav className="space-y-4">
//             <button className="block text-blue-600 bg-blue-100 p-2 rounded-lg">Home</button>
//             <button className="block">Event</button>
//             <button className="block">Contact</button>
//             <button className="block">Project</button>
//             <button className="block">Album</button>
//             <button className="block">Organisation</button>
//             <button className="block">Tasks</button>
//           </nav>

//           {/* Followers Section */}
//           <div>
//             <h2 className="font-bold">Followers</h2>
//             <div className="flex space-x-2 mt-2">
//               {/* Replace with follower images */}
//               <div className="w-10 h-10 rounded-full bg-gray-400"></div>
//               <div className="w-10 h-10 rounded-full bg-gray-400"></div>
//               <div className="w-10 h-10 rounded-full bg-gray-400"></div>
//               <div className="w-10 h-10 rounded-full bg-gray-400"></div>
//               <div className="w-10 h-10 rounded-full bg-gray-400"></div>
//               <div className="w-10 h-10 rounded-full bg-gray-400"></div>
//               <div className="flex items-center justify-center bg-red-500 text-white w-10 h-10 rounded-full">
//                 116
//               </div>
//             </div>
//             <a href="#" className="text-blue-500 mt-2 block">Show all</a>
//           </div>

//           {/* People You Follow */}
//           <div>
//             <h2 className="font-bold">People you follow</h2>
//             <div className="flex space-x-2 mt-2">
//               {/* Replace with follower images */}
//               <div className="w-10 h-10 rounded-full bg-gray-400"></div>
//               <div className="w-10 h-10 rounded-full bg-gray-400"></div>
//               <div className="w-10 h-10 rounded-full bg-gray-400"></div>
//               <div className="w-10 h-10 rounded-full bg-gray-400"></div>
//               <div className="w-10 h-10 rounded-full bg-gray-400"></div>
//             </div>
//           </div>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6 bg-gray-100">
//         {/* Header */}
//         <header className="flex justify-between items-center mb-6">
//           <div className="flex items-center space-x-4">
//             <input
//               type="text"
//               className="bg-white p-2 rounded-lg w-full max-w-md"
//               placeholder="Search..."
//             />
//             <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Search</button>
//           </div>

//           <div className="flex items-center space-x-4">
//             <button className="p-2 rounded-full bg-gray-300">🔔</button>
//             <button className="p-2 rounded-full bg-gray-300">✉️</button>
//             <button className="p-2 rounded-full bg-gray-300">➕</button>
//             <img
//               src="https://via.placeholder.com/40"
//               alt="Profile"
//               className="w-10 h-10 rounded-full"
//             />
//           </div>
//         </header>

//         {/* News Feed */}
//         <section className="space-y-6">
//           <div className="bg-white p-6 rounded-lg">
//             <div className="flex items-center justify-between">
//               <h2 className="font-semibold">Rayaak Paul</h2>
//               <span className="text-gray-500">Posted at 08:00 on 18th February 2023</span>
//             </div>
//             <p className="text-gray-700 mt-2">
//               2 Event Session Attendances by Yael Adamson-Brown working at harvest session starting at
//               05:00 on 17th February 2023 on Lorem ipsum dolor sit amet consectetur. #full #concertmoney
//               #reusable
//             </p>
//             <div className="flex items-center justify-between mt-4">
//               <div className="flex space-x-4">
//                 <span>❤️ 3</span>
//                 <span>💬 0 Comment</span>
//                 <span>⭐ 0 Favourites</span>
//               </div>
//               <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Post</button>
//             </div>
//           </div>

//           <div className="bg-white p-6 rounded-lg">
//             <div className="flex items-center justify-between">
//               <h2 className="font-semibold">Monika Jaisle</h2>
//               <span className="text-gray-500">Posted at 08:00 on 18th February 2023</span>
//             </div>
//             <p className="text-gray-700 mt-2">
//               Lorem ipsum dolor sit amet consectetur. Eget convallis ipsum cum erat.
//             </p>
//             <div className="flex items-center justify-between mt-4">
//               <div className="flex space-x-4">
//                 <span>❤️ 3</span>
//                 <span>💬 0 Comment</span>
//                 <span>⭐ 0 Favourites</span>
//               </div>
//               <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Post</button>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Right Sidebar */}
//       <aside className="bg-gray-100 w-1/5 p-6">
//         {/* Personal Progress */}
//         <div className="mb-6">
//           <h2 className="font-bold">Personal Progress</h2>
//           <div className="space-y-2 mt-4">
//             <div className="bg-gray-200 p-2 rounded-lg flex items-center justify-between">
//               <span>Are either of your parents living?</span>
//               <button className="text-blue-500">+</button>
//             </div>
//             <div className="bg-gray-200 p-2 rounded-lg flex items-center justify-between">
//               <span>Are either of your parents living?</span>
//               <button className="text-blue-500">+</button>
//             </div>
//             <a href="#" className="text-blue-500 block mt-2">Show all</a>
//           </div>
//         </div>

//         {/* Board */}
//         <div>
//           <h2 className="font-bold">Board</h2>
//           <div className="space-y-2 mt-4">
//             <div className="bg-gray-200 p-2 rounded-lg">3315</div>
//             <div className="bg-gray-200 p-2 rounded-lg">Angola</div>
//             <div className="bg-gray-200 p-2 rounded-lg">Production</div>
//             <div className="bg-gray-200 p-2 rounded-lg">Attendance</div>
//             <div className="bg-gray-200 p-2 rounded-lg">Salary Report</div>
//             <a href="#" className="text-blue-500 block mt-2">Show all</a>
//           </div>
//         </div>
//       </aside>
//     </div>
//   );
// };

// export default Dashboard;
