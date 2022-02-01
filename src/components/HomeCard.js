import Image from "../assets/get-started-colored-.png"
const HomeCard = () => {
  return(
    <>
      <div className="px-16 text-center">
        <h2 className="text-2xl text-indigo-900 mb-2 font-semibold">
          Hello there!
        </h2>
        <h5 className="text-xl text-indigo-400 leading-tight">
          Click below to start setting up your profile.
        </h5>
      </div>
      <div className="flex flex-col items-center">
        <img src={Image} width="320px" alt="Feature" />
      </div>
      <div id="actions" className="flex flex-row justify-center my-16">
        <div className="bg-orange-500 inline text-white px-6 py-3 rounded-full">
          Get Started
        </div>
      </div>
    </>
  )
}

export default HomeCard