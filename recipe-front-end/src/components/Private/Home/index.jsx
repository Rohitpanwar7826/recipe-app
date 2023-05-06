import { GET_CATEGORIS } from "../../gql/CategoreState";
import Loader from "../../shared/Loader";
import { useQuery } from "@apollo/client";
import RandomRecipie from "./RandomRecipie";
import LiveMakeSection from "./LiveMakeSection";
import Heading from "../../shared/Heading";
import { errorMessageDark } from "../../ToasterType";
import DisplayCategories from "./Category/DisplayCategories";


// interface propTypes {
//   title?: string
// }

function Home(props) {
  const { data, error, loading } = useQuery(GET_CATEGORIS)

  if (loading) < Loader />
  if (error) errorMessageDark(error.message)

  return (
    <>
      < Heading title="RANDOM RECEIPIES..." />
      < RandomRecipie />
      < Heading title="Live RECEIPIES..." />
      < LiveMakeSection />
      < Heading title="ALL RECEIPIES CATEGORIES..." />
      < DisplayCategories categoriesData={data?.categories}/>
    </>
  )
}


export default Home