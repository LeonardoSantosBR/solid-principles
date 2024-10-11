export const paginationHelper = (
  page: number,
  limit: number,
  count: number,
) => ({
  page: page ? Number(page) : 1,
  lastPage: limit ? Math.ceil(count / 1) : 1,
  totalQuantity: count,
});
