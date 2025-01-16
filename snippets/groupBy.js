function groupBy(array, property) {
    return array.reduce((acc, obj) => {
      const key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }
  
  const data = [
    { name: "Alice", group: "A" },
    { name: "Bob", group: "B" },
    { name: "Charlie", group: "A" },
  ];
  
  console.log(groupBy(data, "group"));
  // Output: { A: [{ name: 'Alice', group: 'A' }, { name: 'Charlie', group: 'A' }], B: [{ name: 'Bob', group: 'B' }] }
  