import React from "react";
import { useSelector } from "react-redux";
import { BsGraphUp, BsGraphDown, BsExclamationTriangle, BsExclamationCircle, BsPlusLg, BsExclamationCircleFill, BsCircle } from "react-icons/bs";
import "../styles/Dashboard.css";
import Card from "../components/Card";

const getPriorityIcon = (priority) => {
  switch (priority) {
    case 0:
      return <BsCircle />;
    case 1:
      return <BsGraphDown />;
    case 2:
      return <BsExclamationTriangle />;
    case 3:
      return <BsExclamationCircle />;
    default:
      return <BsExclamationCircleFill/>;
  }
};

const Dashboard = () => {
  const { dataSelected, user } = useSelector((state) => state.dataSelectSlice);

  return (
    dataSelected && (
      <div className="container" style={{ justifyContent: "space-evenly" }}>
        {dataSelected.map((element, index) => {
          return (
            <div
              key={index}
              className="dashboard"
              style={{ backgroundColor: "whitesmoke" }}
            >
              <div className="cardHeading1">
                <div
                  className="sideView1"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  {!user ? (
                    getPriorityIcon(index)
                  ) : (
                    <>
                      <div className="image">
                        <img
                          src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"
                          alt="User"
                        />
                      </div>
                    </>
                  )}
                  <span className="addSpace">
                    {element[index]?.title}{" "}
                    <span className="number">{element[index]?.value?.length}</span>
                  </span>
                </div>
                <div className="sideView2">
                  <BsPlusLg />
                  <span style={{ letterSpacing: "2px" }}>...</span>
                </div>
              </div>
              <div className="selectList">
                {element[index]?.value?.map((element, ind) => {
                  return (
                    <Card id={element.id} title={element.title} tags={element.tag} />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default Dashboard;
