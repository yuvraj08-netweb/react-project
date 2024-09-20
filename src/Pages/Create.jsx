import AddUserForm from "../components/AddUserForm"
import Footer from "../components/Footer"
import PagesHeader from "../components/PagesHeader"

const Create = () => {
  return (
    <div>
        <PagesHeader headerText="Create A New User!"/>
        <AddUserForm/>
        <Footer/>
    </div>
  )
}

export default Create