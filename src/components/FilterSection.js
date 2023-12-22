import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import FormatPrice from "../Helpers/FormatPrice";
import { Button } from "../styles/Button";
const FilterSection = () => {
  const {
    filters: { text, type, price, maxPrice, minPrice },
    updateFilterValue,
    all_products,
  } = useFilterContext();

  // get the unique values of each property
  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });

    return (newVal = ["all", ...new Set(newVal)]);
  };

  // we need to have the individual data of each in an array format
  const typeData = getUniqueData(all_products, "type");
  const processorData = getUniqueData(all_products, "processor");
  const memoryData = getUniqueData(all_products, "memory");
  const OSData = getUniqueData(all_products,"OS")
  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={updateFilterValue}
          />
        </form>
      </div>

      <div className="filter-category">
        <h3>Type</h3>
        <div>
          {typeData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="type"
                id = "type"
                value={curElem}
                className={curElem === type ? "active" : ""}
                onClick={updateFilterValue}>
                  {curElem}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter-company">
        <h3>Processor</h3>

        <form action="#">
          <select
            name="processor"
            id="processor"
            className="filter-company--select"
            onClick={updateFilterValue}>
            {processorData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="processor">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      
      <div className="filter-company">
        <h3>Memory</h3>

        <form action="#">
          <select
            name="memory"
            id="memory"
            className="filter-company--select"
            onClick={updateFilterValue}>
            {memoryData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="memory">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <div className="filter-company">
        <h3>OS</h3>

        <form action="#">
          <select
            name="OS"
            id="OS"
            className="filter-company--select"
            onClick={updateFilterValue}>
            {OSData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="OS">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>
     
  

      <div className="filter_price">
        <h3>Price</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
`;

export default FilterSection;
