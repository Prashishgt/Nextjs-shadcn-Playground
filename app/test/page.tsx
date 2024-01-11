// import { useQuery } from "@reduxjs/toolkit";

// function UserList() {
//   const { data, error, isLoading } = useQuery("users", api.getUsers);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <ul>
//       {data.map((user) => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   );
// }
