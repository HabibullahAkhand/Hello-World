import { Link, useLoaderData, useParams ,useNavigate } from "react-router-dom";
import bg from "../../assets/bg-login.jpg";
import Swal from 'sweetalert2'


const Update = () => {

    const propertes = useLoaderData();
    const { _id } = useParams();
    const navigate = useNavigate();
    console.log(_id);
    const property = propertes.find(property => property._id === _id);
    const { photo, SpotName, country, location, description, cost, seasonality, travelTime, totalVisitorsPerYear, email, userName } = property;


    const handleUpdateSpot = event => {

        event.preventDefault();

        const form = event.target;

        const photo = form.photo.value;
        const SpotName = form.SpotName.value;
        const country = form.country.value;
        const location = form.location.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const email = form.email.value;
        const userName = form.userName.value;

        const updatedTourists = { photo, SpotName, country, location, description, cost, seasonality, travelTime, totalVisitorsPerYear, email, userName }

        console.log(updatedTourists);

        // send data to the server
        fetch(`https://hello-world-server.vercel.app/tourists/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTourists)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Spot Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    navigate('/myList');
                }
            })
            
    }




    return (
        <div>

            <div className="hero min-h-screen flex justify-around " style={{ backgroundImage: `url(${bg})` }}>
                <div className="md:w-2/3 container mx-auto bg-[#6EA0D5] p-6 md:p-20 bg-opacity-30 my-20 ">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl md:mb-6 mb-4 text-center font-extrabold">Update Tourists Spot</h2>
                    <Link to='/myList'><button className="btn btn-secondary">Back</button></Link>
                    <form onSubmit={handleUpdateSpot}>
                        {/* form Photo url row */}
                        <div className="md:mb-8">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" required name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/* tourists_spot_name and country_Name */}
                        <div className="md:flex md:mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label " >
                                    <span className="label-text ">Tourists Spot Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" required name="SpotName" defaultValue={SpotName} placeholder="Tourists Spot Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="label-text">Country Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" required name="country" defaultValue={country} placeholder="Country Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/* location and short description */}
                        <div className="md:flex md:mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Location Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" required name="location" defaultValue={location} placeholder="Location Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="label-text">Short Description</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" required name="description" defaultValue={description} placeholder="Short Description" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/* average_cost and seasonality - like summer, winter */}
                        <div className="md:flex md:mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Average Cost</span>
                                </label>
                                <label className="input-group">
                                    <input type="number" required name="cost" defaultValue={cost} placeholder="Average Cost" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="label-text">Seasonality</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" required name="seasonality" defaultValue={seasonality} placeholder="Seasonality" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/* Travel Time and Total Visitors Per Year*/}
                        <div className="md:flex md:mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Travel Time</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" required name="travelTime" defaultValue={travelTime} placeholder="Travel Time (days)" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="label-text">Total Visitors Per Year</span>
                                </label>
                                <label className="input-group">
                                    <input type="number" required name="totalVisitorsPerYear" defaultValue={totalVisitorsPerYear} placeholder="Total Visitors Per Year" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/* User Email and seasonality - like summer, winter */}
                        <div className="md:flex md:mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">User Email</span>
                                </label>
                                <label className="input-group">
                                    <input type="email" required name="email" defaultValue={email} placeholder="User Email" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="name" required name="userName" defaultValue={userName} placeholder="User Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>

                        <input type="submit" value="Update" className="btn mt-4 md:mt-6 btn-block border-none hover:bg-[#A06ED5] bg-[#D56E9B]" />
                        
                    </form>
                </div>
                <div className=""></div>
            </div>
        </div>
    );
};

export default Update;
