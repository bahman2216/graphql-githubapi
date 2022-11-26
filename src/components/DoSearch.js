
import { gql,useQuery} from "@apollo/client";

export default function DoSearch() {
  const GET_REPOS = gql`
  query search($query: String!, $type: SearchType!, $numOfResults: Int!) {
    search(type: $type, query: $query, first: $numOfResults) {
      nodes {
        ... on Repository {
          name
          nameWithOwner
          description
          
      
        }
        }
      }
  }
  `;

  const { loading, error, data } = useQuery(GET_REPOS, {variables: {
    "query": "facebook/react",
    "type": "REPOSITORY",
    "numOfResults": 10
  }
   });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return data.repositories.map(({ id, name }) => (
    <div key={id}>
      <h3>{name}</h3>
    </div>
  ));
}
