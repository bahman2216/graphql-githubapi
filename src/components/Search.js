import React, { useState } from "react";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { gql,useQuery} from "@apollo/client";
import DoSearch from "./DoSearch";

export default function Search() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    DoSearch();
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label>Search term</label>
        <input
          className="input"
          placeholder="Search in repositories: 'facebook/react' or '*react*' "
          id="repo"
          name="repo"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn">Search</button>
      </form>
    </div>
  );
}
