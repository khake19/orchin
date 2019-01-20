const searchFilter = options => {
  const limit = 5;
  const skip = (options.pageNumber - 1) * limit;

  const pagination = {
    filters: {
      searchTerm: options.search
    },
    pagination: {
      limit,
      skip,
      page: options.pageNumber
    }
  };
  return pagination;
};

export default searchFilter;
