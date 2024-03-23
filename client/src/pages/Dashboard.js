import logo from "../assets/IITBBSlogo.png";
const Dashboard = ({props}) => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-blue-200 p-1 gap-1">
      <div className="flex w-full h-20 bg-black">
        <div className="hidden sm:w-[60px] sm:flex justify-center items-center">
          <img className="object-contain" src={logo} alt="IIT BBS" />
        </div>
        <div></div>
      </div>
      <div className="flex w-full h-full gap-1">
        <div className="flex flex-col justify-start items-center w-1/5 h-full bg-blue-800 "></div>
        <div className="flex flex-col justify-start items-start w-4/5 h-full bg-blue-800 ">
            {props}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
