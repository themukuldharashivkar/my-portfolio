// import Image from "next/image";
// import React from "react";

// import contactus from "../public/assets/contact-us.jpg";
// import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

// const Contact = () => {
//   return (
//     <div id="contact" className="w-full bg-zinc-800 ">
//       <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left ">
//         <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-amber-500 font-bold">
//           contact
//         </h2>

//         <div className="flex flex-col md:flex-row gap-8 shadow-xl shadow-amber-500 bg-amber-500 rounded-xl mt-4">
//           <div className="w-full md:w-1/2 h-full rounded-xl p-4">
//             <Image
//               src={contactus}
//               alt="man with laptop"
//               className="rounded-xl"
//             />
//             <p className="pt-2 pb-8 text-white">
//               I am open to talk regarding freelancing or full-time
//               opportunities. Fell free to contact me using your preferred
//               medium.
//             </p>

//             <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
//               <div className="flex items-center justify-center rounded-full shadow-md shadow-amber-500 hover:scale-105 duration-200 p-3 cursor-pointer bg-white">
//                 <FaLinkedin size={25} />
//               </div>
//               <div className="flex items-center justify-center rounded-full shadow-md shadow-amber-500 hover:scale-105 duration-200 p-3 cursor-pointer bg-white">
//                 <FaTwitter size={25} />
//               </div>
//               <div className="flex items-center justify-center rounded-full shadow-md shadow-amber-500 hover:scale-105 duration-200 p-3 cursor-pointer bg-white">
//                 <FaFacebook size={25} />
//               </div>
//               <div className="flex items-center justify-center rounded-full shadow-md shadow-amber-500 hover:scale-105 duration-200 p-3 cursor-pointer bg-white">
//                 <FaGithub size={25} />
//               </div>
//             </div>
//           </div>

//           {/* form stuff  */}
//           <div className="w-full md:w-1/2 h-full rounded-xl p-4">
//             <div className="p-4 text-left ">
//               <form
//                 action="https://getform.io/f/357378e6-dce8-451c-8d15-226c219dc76a"
//                 method="POST"
//               >
//                 <div className="grid md:grid-cols-2 gap-4 w-full py-2 ">
//                   <div className="flex flex-col ">
//                     <label className="capitalize text-sm py-2 text-black font-bold">
//                       name
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       className="border-2 rounded-lg p-3 flex focus:outline-none border-amber-200"
//                     />
//                   </div>
//                   <div className="flex flex-col">
//                     <label className="capitalize text-sm py-2 text-black font-bold">
//                       phone
//                     </label>
//                     <input
//                       type="text"
//                       name="phone"
//                       className="border-2 rounded-lg p-3 flex focus:outline-none border-amber-200"
//                     />
//                   </div>

//                   <div className="flex flex-col col-span-2">
//                     <label className="capitalize text-sm py-2 text-black font-bold">
//                       email
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       className="border-2 rounded-lg p-3 flex focus:outline-none border-amber-200"
//                     />
//                   </div>
//                   <div className="flex flex-col col-span-2">
//                     <label className="capitalize text-sm py-2 text-black font-bold">
//                       message
//                     </label>
//                     <textarea
//                       name="message"
//                       rows="10"
//                       className="border-2 rounded-lg p-3 flex focus:outline-none border-amber-200"
//                     ></textarea>
//                   </div>
//                 </div>

//                 <div className="flex items-center justify-center">
//                   <button className="my-8 border-2 border-white hover:text-amber-500 bg-black text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
//                     send message
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
