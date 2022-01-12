import Pagination from "./Pagination"
import MovieCard from "components/MovieCard"

export default function Landing() {
  return(
    <div>
      <Pagination />

      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <MovieCard />
          </div>
        </div>
      </div>
    </div>
  )
}