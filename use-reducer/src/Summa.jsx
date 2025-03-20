// import React, { useState } from 'react';
// import { data } from './data.js';

// export const Summa = () => {
//     const [search, setSearch] = useState("");

//     return (
//         <div className="container mt-5">
//             <h2 className="text-primary">Filter the data</h2>
//             <form className="col-md-6">
//                 <input
//                 className="form-control"
//                     type="text"
//                     placeholder="Search..."
//                     onChange={(e) => setSearch(e.target.value.toLowerCase())}
//                 />
//             </form>

//             <table className="table  tabel-border mt-3 tabel-striped">
//                 <thead>
//                     <tr>
//                         <th>S NO</th>
//                         <th>First Name</th>
//                         <th>Last Name</th>
//                         <th>Email</th>
//                         <th>Gender</th>
//                         <th>Phone</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data
//                         .filter((item) =>{
//                             return search.toLowerCase()===""?item:
//                             item.first_name.toLowerCase().includes(search.toLowerCase())||
//                             item.last_name.toLowerCase().includes(search.toLowerCase())||
//                             item.gender.toLowerCase().includes(search.toLowerCase())||
//                             item.email.toLowerCase().includes(search.toLowerCase())||
//                             item.phone.includes(search);

//                         })

 
//                         .map((item, index) => (
//                             <tr key={index}>
//                                 <td>{index+1}</td>
//                                 <td>{item.first_name}</td>
//                                 <td>{item.last_name}</td>
//                                 <td>{item.email}</td>
//                                 <td>{item.gender}</td>
//                                 <td>{item.phone}</td>
//                             </tr>
//                         ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };


import React, { useState } from 'react';
import { data } from './data.js';

export const Summa = () => {
    const [search, setSearch] = useState("");

    return (
        <div className="container mt-5">
            {/* Header Section */}
            <h2 className="text-center text-white bg-primary py-3 rounded">
                Filter the Data
            </h2>

            {/* Search Form */}
            <form className="col-md-8 mx-auto mt-4">
                <input
                    className="form-control border-primary shadow-sm"
                    type="text"
                    placeholder="Search by name, email, gender, or phone..."
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                />
            </form>

            {/* Table Section */}
            <table className="table table-bordered table-hover mt-4">
                <thead className="table-dark text-center">
                    <tr>
                        <th>S. No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {data
                        .filter((item) => {
                            return search === "" || 
                                item.first_name.toLowerCase().includes(search) ||
                                item.last_name.toLowerCase().includes(search) ||
                                item.email.toLowerCase().includes(search) ||
                                item.gender.toLowerCase().includes(search) ||
                                item.phone.includes(search);
                        })
                        .map((item, index) => (
                            <tr
                                key={index}
                                className={index % 2 === 0 ? "table-primary" : "table-secondary"}
                            >
                                <td className="text-center fw-bold">{index + 1}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td>
                                <td className="text-capitalize">{item.gender}</td>
                                <td>{item.phone}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};
