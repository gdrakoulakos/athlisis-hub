export const sortByStatusAndDate = (data = []) => {
  return data.slice().sort((a, b) => {
    const statusOrder = ["Pending", "Acknowledged", "Completed", "Cancelled"];
    const statusComparison =
      statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status);
    if (statusComparison !== 0) {
      return statusComparison;
    }
    return new Date(a.date) - new Date(b.date);
  });
};

export const sortByDate = (data = []) => {
  return data.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
};
