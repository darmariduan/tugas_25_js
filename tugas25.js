function tugas25() {
  function awal() {
    var data = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16 ];
    data = data.toString();
    return data;
  }
    console.log("Sebelumnya:", awal());

    function asc() {
      var data = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16 ];
      data = data.sort();
      data = data.toString();
      return data;
    }
    console.log("Ascending:", asc());

    function desc() {
      var data = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16 ];
      data = data.sort();
      data = data.reverse();
      data = data.toString();
      return data;
    }
    console.log("Descending:", desc());

      function filter() {
      var data = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16 ];
      data = data.sort();
      data = data.reverse();
      data = data.filter(data => {
        return data > 10;
      })
      data = data.toString();
      return data;
  }
  console.log("Filter > 10 ",filter());
}
tugas25();
