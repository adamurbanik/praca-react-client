import { memo } from "react";


let countRender = 0;

const GreetingUseCallbackComponent = ({ onSubmit }) => {
  return (
    <>
      <br />
      <div>GreetingUseCallback component</div>
      <br />
      GreetingUseCallback render count: {(countRender = countRender + 1)}
      <br />
      <br />
      <button onClick={() => onSubmit()}>handle submit</button>
    </>
  );
};

const checkIfTheSame = (prevProps, nextProps) => {
  // console.log('Object.is', Object.is(prevProps.onSubmit, nextProps.onSubmit))
  // console.log(prevProps.onSubmit)
  // console.log(nextProps.onSubmit)

  if(Object.is(prevProps.onSubmit, nextProps.onSubmit)) {
    return true;
  }

  return false;
}

const GreetingUseCallback = memo(GreetingUseCallbackComponent, checkIfTheSame);
export { GreetingUseCallback }