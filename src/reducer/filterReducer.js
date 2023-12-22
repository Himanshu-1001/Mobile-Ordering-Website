const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((curElem) => curElem.price);
      let maxPrice = Math.max(...priceArr);
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice:maxPrice,price:maxPrice},
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text, type, processor, memory,OS, price} = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
      }

      if (type !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => {return curElem.type === type;});
      }

      if (processor !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.processor.toLowerCase() === processor.toLowerCase()
        );
      }

      if (memory !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.memory.toLowerCase() === memory.toLowerCase()
        );
      }
      if (OS !== "all") {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => curElem.OS.toLowerCase() === OS.toLowerCase()
        );
      }

      if (price === 0) {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => {
            const pr = parseInt(curElem.price,10);
            const p = parseInt(price,10)
            return pr == p;
          });
      } else {
        tempFilterProduct = tempFilterProduct.filter(
          (curElem) => {
            const pr = parseInt(curElem.price,10);
            const p = parseInt(price,10)
            return pr <= p
          });
      }
      return {
        ...state,
        filter_products: tempFilterProduct,
      };

    default:
      return state;
  }
};

export default filterReducer;
