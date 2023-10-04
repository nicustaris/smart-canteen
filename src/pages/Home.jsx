import { useState, useEffect, useContext } from "react";
import { SearchContext } from "../App";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/ItemBlock/Skeleton";
import ItemBlock from "../components/ItemBlock";

import Pagination from "../components/Pagination";

const Home = () => {
  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState({
    name: "Popular",
    sortProperty: "rating",
  });

  useEffect(() => {
    setIsLoading(true);

    // FETCH PARAMETERS
    const categoryParam = categoryId > 0 ? `&category=${categoryId}` : "";
    const searchParam = searchValue ? `&search=${searchValue}` : "";
    const sortParam = `&sortBy=${sortType.sortProperty}`;
    const pageParam = `page=${currentPage}&limit=8`;

    fetch(
      `https://64ce62b40c01d81da3eec457.mockapi.io/items?${pageParam}${sortParam}${categoryParam}${searchParam}`
    ).then((res) =>
      res
        .json()
        .then((json) => {
          setItems(json);
        })
        .finally(() => {
          setIsLoading(false);
        })
    );
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  return (
    <>
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(i) => setCategoryId(i)}
        />
        <Sort value={sortType} onChangeSort={(obj) => setSortType(obj)} />
      </div>
      <h2 className="content__title">Offer of the Day</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items
              .filter((obj) =>
                obj.name.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((obj, i) => <ItemBlock key={obj.id} {...obj} />)}
      </div>
      <Pagination setCurrentPage={setCurrentPage} />
    </>
  );
};

export default Home;
