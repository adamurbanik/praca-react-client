function repo() {
  let call = 0;

  function saveCall() {
    call++;
    // console.log('repo saved another call', call)
  }

  return {
    saveCall
  }
}

export default repo()




// const { saveCall } = repo();
// export { saveCall }

