import React from "react";
import "./viewmodal.scss";

//userrows, columns and slug can be used later

const ViewModal = ({ slug, userColumns, userRows, setOpen }) => {
  return (
    <div className="viewModal">
      <div className="addViewModal">
        <span className="close" onClick={() => setOpen(false)}>
          X
        </span>
        <h1 className="title">Additional Information</h1>
        <form>
          <div className="modal">
            <div className="modalItem">
              <img
                className="ItemImg"
                src="https://media.istockphoto.com/id/640274128/photo/barber-using-scissors-and-comb.jpg?s=612x612&w=0&k=20&c=mjdP6NhDA40WBorr8kyyI69waMs1EyzLkSmT6lQRvGU="
                alt="HairCut"
              />
              <div className="details">
                <h3 className="itemTitle">Awais Raza</h3>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">awais@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">0312345678</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Age:</span>
                  <span className="itemValue">25</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">National Textile University</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">City:</span>
                  <span className="itemValue">Faisalabad</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ViewModal;
