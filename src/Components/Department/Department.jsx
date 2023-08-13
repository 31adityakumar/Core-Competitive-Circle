//  import React from "react";
import React, { useState } from "react";
import "./Department.scss";

const Department = () => {
  const [showFullDescription1, setShowFullDescription1] = useState(false);
  const toggleDescription1 = () => {
    setShowFullDescription1(!showFullDescription1);
  };

  const [showFullDescription2, setShowFullDescription2] = useState(false);
  const toggleDescription2 = () => {
    setShowFullDescription2(!showFullDescription2);
  };

  return (
    <div className="department">
      <h1 className="dept-header"> DEPARTMENTS </h1>
      <div className="first-dept">
        <div className="dept-img">
          <img
            src="https://res.cloudinary.com/dbp3cjyyy/image/upload/v1680705659/Background_sponsor_e4lhlv.webp"
            alt=""
          />
        </div>
        <div className="dept1-detail">
          <h2 className="dept-name">CIVIL ENGINEERING</h2>
          <p className="dept-content ">
            {showFullDescription1 ? (
              <>
                The Department of Civil Engineering started its journey in 1977.
                Ever since the inception, it has been imparting quality
                education to under graduate students. The Department presently
                fosters five PG courses. A good number of research scholars are
                carrying out research in various fields. There are about a dozen
                laboratories with various research and testing facilities. The
                faculty consists of eminent specialists from diverse fields and
                there is commendable research ambience in the Department The
                mission of the Department of Civil Engineering is to create
                knowledge resources and to educate and train youths in the
                latest technologies in Civil Engineering, to imbibe in them
                human values, self confidence and independent thinking in
                tackling diverse problems in the field of Civil Engineering so
                that they can serve the country and the human society at large.
                
                <div className=" dept-contact">
                  <span> Dr. Arjun Sil</span>
                  <br />
                  <span>HoD, Department of Civil Engineering</span>
                  <br />
                  <span>Email: hod@civil.nits.ac.in</span>
                </div>


                <button
                  className="read-more-button read-less-button"
                  onClick={toggleDescription1}
                >
                  Read less
                </button>
              </>
            ) : (
              <>
                The Department of Civil Engineering started its journey in 1977.
                Ever since the inception, it has been imparting quality
                education to under graduate students. The Department presently
                fosters five PG courses. There are about a dozen
                laboratories with various research and testing facilities. The
                faculty consists of eminent specialists from diverse fields and
                there is commendable research ambience in the Department.The
                vision of the Department of Civil Engineering is to achieve
                unique identity by development of knowledge resources and highly
                competent Civil Engineers in various fields of Civil Engineering
                to meet local, national, and global economic and social needs.
                <button
                  className="read-more-button"
                  onClick={toggleDescription1}
                >
                  Read more
                </button>
              </>
            )}
          </p>
        </div>

      </div>




      <div className="second-dept">
        <div className="dept2-detail">
          <h2 className="dept-name"> MECHANICAL ENGINEERING</h2>
          <p className="dept-content">
            {showFullDescription2 ? (
              <>
                The department was established in 1967 in the institute with the
                academic activities starting on 2nd November 1977. The
                Department is one of the oldest as well as finest in the zone
                and carries a rich legacy from thereon. From the very onset, the
                main objective of the department is to strengthen the academic
                and technical knowledge of the students through various
                world-class technologies, teaching-learning, and research
                activities. Over these glorious years of its journey, the
                department is keeping itself up to date with the latest
                technological and sustainable developments and trends in the
                field and with a dedicated faculty of highly qualified and
                experienced members in all streams of mechanical engineering.
                The curriculum is revised continuously with the active
                involvement of industry, alumni, research organizations, and
                other stakeholders, and UG and 03 numbers of PG programs are
                accredited by the National Board of Accreditation (NBA). The
                department offers 04 years B. Tech. in Mechanical Engineering,
                02 years M. Tech. in Thermal Engineering, Design and
                Manufacturing, CAD CAM and Automation, Materials and
                Manufacturing Technology, and Renewable Energy and Ph.D. in
                different fields of Mechanical Engineering.
                <div className=" dept-contact">
                  <span> Dr. Sukumar Pati</span>
                  <br />
                  <span>HoD, Department of Mechanical Engineering</span>
                  <br />
                  <span>Email: hod@mech.nits.ac.in</span>
                </div>
                <button
                  className="read-more-button  read-less-button"
                  onClick={toggleDescription2}
                >
                  Read less
                </button>
              </>
            ) : (
              <>
                The department was established in 1967 in the institute with the
                academic activities starting on 2nd November 1977. From the very onset, the
                main objective of the department is to strengthen the academic
                and technical knowledge of the students through various
                world-class technologies, teaching-learning, and research
                activities. Over these glorious years of its journey, the
                department is keeping itself up to date with the latest
                technological and sustainable developments and trends in the
                field and with a dedicated faculty of highly qualified and
                experienced members in all streams of mechanical engineering.
                <button
                  className="read-more-button"
                  onClick={toggleDescription2}
                >
                  Read more
                </button>
              </>
            )}
          </p>
        </div>

        <div className="dept-img ">
          <img
            src="https://res.cloudinary.com/dbp3cjyyy/image/upload/v1680705659/Background_sponsor_e4lhlv.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Department;
