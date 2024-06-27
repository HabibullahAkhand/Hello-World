import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import bg from "../../assets/bg-login.jpg";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyList = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);
    const loaderData = useLoaderData();
    const [spots, setSpots] = useState(loaderData);
    const filteredData = spots.filter(spot => spot.email === user.email);

    // Loading state to indicate whether data is being loaded or not
    const [isLoading, setIsLoading] = useState(false);
    
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://hello-world-server.vercel.app/tourists/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = spots.filter(cof => cof._id !== _id);
                            setSpots(remaining);
                        }
                    })

            }
        })
    }


    return (
        <div className="hero min-h-screen flex justify-around bg-[#28A993] pb-20" style={{ backgroundImage: `url(${bg})` }}>
            <Helmet>
                <title>Home || My List</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className="container mx-auto">
                <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold pb-8 text-center">My All Tourists Spot Post</h1>

                {/* Conditional rendering for loading spinner */}

                    <div className=" pb-8">
                        {filteredData.length === 0 ? (
                            <Link to='/addTouristsSpots'>
                                <div className="min-h-screen">
                                    <h1 className="text-red-600 mb-8">You have no post</h1>
                                    <button className="btn btn-warning mx-auto">Add Tourists Spots Post</button>
                                </div>
                            </Link>
                        ) : (
                            isLoading ? (
                                <div className="flex justify-center items-center h-screen">
                                    <span className="loading loading-dots loading-lg"></span>
                                </div>
                            ) : (
                                <div className="overflow-x-auto bg-white rounded-lg mb-10">
                                    <table className="table">
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Spot Name</th>
                                                <th>Cost ($)</th>
                                                <th>Seasonality</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* row 1 */}
            
                                            {
                                                filteredData.map((spot, idx) => (
                                                    <tr key={idx}>
                                                        <th>{idx + 1}</th>
                                                        <td>{spot.SpotName}</td>
                                                        <td>{spot.cost}$</td>
                                                        <td>{spot.seasonality}</td>
                                                        <td className="space-x-5">
                                                            <Link to={`/update/${spot._id}`}>
                                                                <button className="btn btn-info mb-6">Update</button>
                                                            </Link>
                                                            <button onClick={() => handleDelete(spot._id)}
                                                                className="btn btn-error">Delete</button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
            
            
            
                                        </tbody>
                                    </table>
                                </div>
                            )
                        )}
                    </div>

            </div>
            <div className=""></div>
        </div>
    );
};

export default MyList;
