import {algoliasearch} from "algoliasearch";
import { InstantSearch, SearchBox, Hits, Pagination } from "react-instantsearch-dom"; // Updated to react-instantsearch-dom
import "./App.css";

const appId = import.meta.env.VITE_REACT_APP_APPLICATION_ID;
const apiKey = import.meta.env.VITE_REACT_APP_SEARCH_API_KEY;

const searchClient = algoliasearch(appId, apiKey);

function Hit({ hit }) {
  return (
    <article>
      <p>{hit.categories ? hit.categories[0] : "No Category"}</p>
      <h1>{hit.name}</h1>
      <p>${hit.price}</p>
    </article>
  );
}

const App = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName="ecommerce">
      <SearchBox className="searchbox" placeholder="Search..." />
      <Hits hitComponent={Hit} />
      <Pagination />
    </InstantSearch>
  );
};

export default App;
