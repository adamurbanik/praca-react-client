const useSingleton = (() => {
  let count = 0;

  const incrementCount = () => {
    count++
  } 

  const getCount = () => {
    return count;
  }

  return {
    incrementCount,
    getCount
  }

})()

const { incrementCount, getCount }  = useSingleton

export { incrementCount, getCount }



const useSingleton2 = () => {
  let instance;
  
  const createInstance = () => {
    const myObject = { name: 'adamski' }
    return myObject;
  }

  const getInstance = () => {
    if(!instance) {
      instance = createInstance()
    }

    return instance;

  }

  return {
     getInstance
  }
}

export { useSingleton2 }
