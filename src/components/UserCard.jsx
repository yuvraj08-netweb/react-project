/* eslint-disable react/prop-types */
const UserCard = ({dataById}) => {

  return (
    <>
         <div className="container mt-10">
            <div className="card border max-w-max p-3 mx-auto flex items-center">
              <div className="imageContainer">
                <img
                  src={dataById?.avatar}
                  alt="User Avatar"
                  className="mx-auto"
                />
              </div>
              <div className="info ml-5">
                <div className="name">
                  <div className="fname">
                    <p className="font-medium">
                      First Name : &nbsp;
                      <span className="font-normal text-sm">
                        {dataById?.first_name}
                      </span>
                    </p>
                  </div>
                  <div className="lname">
                    <p className="font-medium">
                      Last Name : &nbsp;
                      <span className="font-normal text-sm">
                        {dataById?.last_name}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="email-Id">
                  <p className="font-medium">
                    Email Id : &nbsp;
                    <span className="font-normal text-sm">
                      {dataById?.email}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>   
    </>
  )
}

export default UserCard