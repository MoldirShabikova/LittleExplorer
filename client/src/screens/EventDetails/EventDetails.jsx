// import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import { Link } from 'react-router-dom'

// export default function EventDetails(params) {
//   const { id } = useParams()
//   const { EventDetails } = params

//   return (
//     <div>
//       {jobsByEmployee.map((job) => {
//         if (job.id == id) {
//           return (
//             <div className='jobBEDescription-box'>
//               <h2>{job?.name}</h2>
//               <p>
//                 <b>Title:</b> {job?.title}{' '}
//               </p>
//               <div className='jobBEDescription-box-upper'>
//                 <p>
//                   <b>City:</b> {job?.city}
//                 </p>
//                 <p>
//                   <b>Date:</b> {filterDate(job?.updated_at)}
//                 </p>
//               </div>
//               <p className='jobBEDescription-box-description'>
//                 <b>Description:</b> {job?.about}{' '}
//               </p>
//               <div className='jobBEDescription-box-bottom'>
//                 <p>
//                   <b>Cellphone:</b> {job?.cellphone}
//                 </p>
//                 <p>
//                   <b>Email:</b> {job?.email}
//                 </p>
//                 <p>
//                   <b>Category:</b> {job?.category}
//                 </p>
//               </div>
//             </div>
//           )
//         }
//       })}
//       <p className='jobBEDescription-go-back'>
//         <Link to='/jobs/byemployee' id='none'>
//           Go Back
//         </Link>
//       </p>
//     </div>
//   )
// }
