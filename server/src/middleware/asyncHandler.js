/** Opakowuje async handlery — przekazuje błędy do globalnego error handlera */
export const asyncHandler = (fn) => (req, res, next) => {
  console.log('%c [asyncHandler] Przechwytywanie błędu...', 'color: orange');
  Promise.resolve(fn(req, res, next)).catch(next);
};
