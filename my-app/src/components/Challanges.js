import React from 'react'
import carbonNotebookImage from '../assets/icons/carbon_notebook-reference.svg'
import vectorImage from '../assets/icons/Vector.svg'
import robotImage from '../assets/icons/Robot.svg'
import IdentificationImage from '../assets/icons/IdentificationCard.svg'
import './challanges.css'


function Challanges() {
  return (
    <div className="container my-5 ">
      <div className="row align-items-center">
        <h1 className="text-center font-weight-bold my-5 display-2">
          Why Participate in{" "}
          <span className="text-success">AI Challenges?</span>
        </h1>
        <div className="col-md-6 mb-4" style={{ lineHeight: "1.8" }}>
          <div className="box bg-light p-20 h-100">
            <img src={carbonNotebookImage} alt="" />
            <h3 className="font-bold display-4">Prove your skills</h3>
            <p>
              Gain substantial experience by solving real-world problems
              <br /> and pit against others to come up with innovative
              solutions.
            </p>
          </div>
        </div>
        <div className="col-md-6 mb-4" style={{ lineHeight: "1.8" }}>
          <div className="box bg-light p-20">
            <img src={vectorImage} alt="" />
            <h3 className="font-bold display-4">Learn from community</h3>
            <p>
              One can look and analyze the solutions submitted by the other Data
              Scientists in the community and learn from them.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-4" style={{ lineHeight: "1.8" }}>
          <div className="box bg-light p-20">
            <img src={robotImage} alt="" />
            <h3 className="font-weight-bold display-4">Challenge yourself</h3>
            <p className='p-6'>
              There is nothing for you to lose by participating in a challenge.
              You can fail safe, learn out of the entire experience and bounce
              back harder.
            </p>
          </div>
        </div>
        <div className="col-md-6 mb-4" style={{ lineHeight: "1.8" }}>
          <div className="box bg-light p-20">
            <img src={IdentificationImage} alt="" />
            <h3 className="font-bold display-4">Earn recognition</h3>
            <p>
              You will stand out from the crowd if you do well in AI challenges,
              it not only helps you shine in the community but also earns
              rewards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Challanges;
