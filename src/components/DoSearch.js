
import { gql,useQuery} from "@apollo/client";

export default function DoSearch() {
  const GET_REPOS = gql`
  query
          repositories {
            nodes {
              name
            }
         
        }
      }
  `;

  const { loading, error, data } = useQuery(GET_REPOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return data.repositories.map(({ id, name }) => (
    <div key={id}>
      <h3>{name}</h3>
    </div>
  ));
}
