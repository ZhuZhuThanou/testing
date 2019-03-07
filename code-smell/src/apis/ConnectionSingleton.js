const ConnectionSingleton = (function(){
  let instance;

  function init(){
           
    function query(sql){
      console.log('run query:', sql);
      return [];
    }

    function insert(sql) {
      console.log('run insert:', sql);
      return 1;
    }

    function update(sql) {
      console.log('run update:', sql);
      return 1;
    }

    return {insert,
            query,
            update};
  }

  return {
    getInstance: function(){
      if(!instance){
        instance = init();
      }

      return instance;
    }
  }

})();

export default ConnectionSingleton;