/* eslint-disable react/prop-types */
const UserCard = ({ dataById }) => {
  return (
    <>
      <div className="pb-52">
        {dataById.map((element, idx) => {
          return (
            <div className="" key={idx}>
              <div className="container mt-10" key={idx}>
                <div className="card border max-w-max p-3 mx-auto flex sm:flex-row flex-col items-center gap-5">
                  <div className="imageContainer">
                    <img
                      src={element?.avatar}
                      alt="User Avatar"
                      className="mx-auto"
                    />
                  </div>
                  <div className="info">
                    <div className="name">
                      <div className="fname">
                        <p className="font-medium">
                          First Name : &nbsp;
                          <span className="font-normal text-sm">
                            {element?.first_name}
                          </span>
                        </p>
                      </div>
                      <div className="lname">
                        <p className="font-medium">
                          Last Name : &nbsp;
                          <span className="font-normal text-sm">
                            {element?.last_name}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="email-Id">
                      <p className="font-medium">
                        Email Id : &nbsp;
                        <span className="font-normal text-sm">
                          {element?.email}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UserCard;
