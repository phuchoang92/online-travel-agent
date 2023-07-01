import Sidebar from "../../../components/adminPage/sidebar/Sidebar";
import Navbar from "../../../components/adminPage/navbar/Navbar";
import "./home.scss";
import Widget from "../../../components/adminPage/widget/Widget";
import Featured from "../../../components/adminPage/featured/Featured";
import Chart from "../../../components/adminPage/chart/Chart";
import Table from "../../../components/adminPage/table/Table";


const AdminHome = () => {
  return (
    <div className="homeAdmin">
      {/*<NewRoomModal/>*/}
      <Sidebar />
      <div className="homeAdmin__container">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
