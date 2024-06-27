import { Helmet } from "react-helmet";
import bg from "../../assets/bg-login.jpg";
import Swal from 'sweetalert2'


const handleAddSpot = event => {
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

    const newTourists = { photo, SpotName, country, location, description, cost, seasonality, travelTime, totalVisitorsPerYear, email, userName }

    console.log(newTourists);

    // send data to the server
    fetch('https://hello-world-server.vercel.app/tourists', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newTourists)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Spot Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'

                })
                form.reset();
            }
        })
}

const AddTouristsSpot = () => {
    return (
        <div>
            <Helmet>
                <title>Home || Add Tourists Spot</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <div className="hero min-h-screen flex justify-around " style={{ backgroundImage: `url(${bg})` }}>
                <div className="md:w-2/3 container mx-auto bg-[#6EA0D5] p-5 md:p-20 bg-opacity-30 my-20 ">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl md:mb-6 mb-4 text-center font-extrabold">Add Tourists Spot</h2>
                    <form onSubmit={handleAddSpot}>
                        {/* form Photo url row */}
                        <div className="md:mb-8">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" required name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
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
                                    <input type="text" required name="SpotName" placeholder="Tourists Spot Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="label-text">Country Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" required name="country" placeholder="Country Name" className="input input-bordered w-full" />
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
                                    <input type="text" required name="location" placeholder="Location Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="label-text">Short Description</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" required name="description" placeholder="Short Description" className="input input-bordered w-full" />
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
                                    <input type="number" required name="cost" placeholder="Average Cost" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="label-text">Seasonality</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" required name="seasonality" placeholder="Seasonality" className="input input-bordered w-full" />
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
                                    <input type="text" required name="travelTime" placeholder="Travel Time (days)" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="label-text">Total Visitors Per Year</span>
                                </label>
                                <label className="input-group">
                                    <input type="number" required name="totalVisitorsPerYear" placeholder="Total Visitors Per Year" className="input input-bordered w-full" />
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
                                    <input type="email" required name="email" placeholder="User Email" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="name" required name="userName" placeholder="User Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>

                        <input type="submit" value="Add Spot" className="btn mt-4 md:mt-6 btn-secondary border-none w-full" />

                    </form>
                </div>
                <div className=""></div>
            </div>
        </div>
    );
};

export default AddTouristsSpot;