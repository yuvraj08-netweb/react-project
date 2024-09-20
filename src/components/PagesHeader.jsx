/* eslint-disable react/prop-types */
import Button from "./Button"
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

const PagesHeader = ({headerText=""}) => {
  return (
    <>
 <div className="mt-6"></div>
      <Button
        btnText={
          <>
            <ArrowCircleLeftIcon /> Home
          </>
        }
        path={"/"}
      />
       <h1 className="text-4xl font-bold font-serif text-center mt-10">
        {headerText}
        </h1>

    </>
  )
}

export default PagesHeader