// import React from 'react'
// // import { AxiosRequestConfig } from 'axios';
// // import axios from 'axios';
// // import { Posts } from '../models/posts.api.model';

// import {
//     QueryClient,
//     QueryClientProvider,
//     useQuery,
//   } from '@tanstack/react-query'
// // import { Address } from '../models/user.api.model';


//   const queryClient = new QueryClient()

// export default function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <Box />
//     </QueryClientProvider>
//   )
// }
// const Box: React.FC = () => {


//     const { isLoading, error, data } = useQuery({
//         queryKey: ['repoData'],
//         queryFn: () =>
//           fetch('https://jsonplaceholder.typicode.com/users').then(
//             (res) => res.json(),
//           ),
//       })
    
//       if (isLoading) return 'Loading...'
    
//       if (error) return 'An error has occurred: ' + error.message

//     // const fetchData = async (config: AxiosRequestConfig): Promise<Posts[]> => {
//     //     const response = await axios.get('https://jsonplaceholder.typicode.com/posts', config);
//     //     return response.data;
//     //   };
      


//     //   const { isLoading, error, data } = useQuery<Posts[], Error>({
//     //     queryKey: ['posts'],
//     //     queryFn: fetchData,
//     //   });
 


//     // if (isLoading) {
//     //     return <div>Loading...</div>;
//     //   }
    
//     //   if (error) {
//     //     return <div>Error: {error.message}</div>;
//     //   }



   

//     console.log("all userdata",data);

    


    
//     const { isLoading1, error1, datao } = useQuery({
//         queryKey: ['repoData1'],
//         queryFn: () =>
//           fetch('https://jsonplaceholder.typicode.com/posts').then(
//             (res) => res.json(),
//           ),
//       })
    
//       if (isLoading) return 'Loading...'
    
//       if (error) return 'An error has occurred: ' + error.message

//   return (

//     <div>
  
// {datao.map((item)=>(
//     <div  key={item.id} className="max-w-5xl mx-auto bg-white border border-blue-100  shadow-xl rounded-md overflow-hidden p-4">
//   <div className="flex items-center mb-5">
//     <img
//       className="w-20 h-20 rounded-full mr-4"
//       src="https://api.dicebear.com/7.x/initials/svg?seed=Felix"
//       alt="User Avatar"
//     />
//     <div>
//       <p className="text-gray-400 font-thin text-2xl mb-1">{item.address.street}</p>
//       <p className="text-slate-950 text-3xl">{item.address.street}</p>
//     </div>
//   </div>
//   <div className="mt-5 space-y-3">
//     <p className="text-slate-950 font-mono font-semibold text-lg">Post Title</p>
//     <p className="text-lg text-slate-900">
//       “Tailwind CSS is the only framework that I've seen scale on large teams.
//       It’s easy to customize, adapts to any design, and the build size is tiny.”
//     </p>
    
//   </div>
// </div>
//  ))} 
// </div>

//   )
// }

// // export default Box
