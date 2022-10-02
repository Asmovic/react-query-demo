import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import HomePage from "./components/Home.page";
import RQSuperHeroesPage from "./components/RQSuperHeroes.page";
import RQSuperHeroPage from "./components/RQSuperHero.page";
import SuperHeroesPage from "./components/SuperHeroes.page";
import ParallelQueriesPage from "./components/ParallelQueries.page";
import DynamicParallelQueriesPage from "./components/DynamicParallelQueries.page";
import DependentQueriesPage from "./components/DependentQueries.page";
import PaginatedQueriesPage from "./components/PaginatedQueries.page";
import InfiniteQueriesPage from "./components/InfiniteQueries.page";
/* import { ParallelQueriesPage } from './components/ParallelQueries.page'
import { DynamicParallelPage } from './components/DynamicParallel.page'
import { DependentQueriesPage } from './components/DependentQueries.page'
import { PaginatedQueriesPage } from './components/PaginatedQueries.page'
import { InfiniteQueriesPage } from './components/InfiniteQueries.page' */

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heroes">Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-super-heroes">RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/super-heroes" element={<SuperHeroesPage />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
          <Route
            path="/rq-super-heroes/:heroId"
            element={<RQSuperHeroPage />}
          />
          <Route path="/rq-parallel" element={<ParallelQueriesPage />} />
          <Route
            path="/rq-dy-parallel"
            element={<DynamicParallelQueriesPage heroIds={[1, 2, 3]} />}
          />
          <Route
            path="/rq-dependent"
            element={<DependentQueriesPage email="asogba@gmail.com" />}
          />
          <Route path="/rq-paginated" element={<PaginatedQueriesPage />} />
          <Route path="/rq-infinite" element={<InfiniteQueriesPage />} />

          <Route path="/" element={<HomePage />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
