import _ from "lodash";

export const debounce =
  (wait: number, lodashOptions = { leading: false, trailing: true }) =>
  (target: any, key: any, descriptor: any) => {
    const callback = descriptor.value;
    if (typeof callback !== "function") {
      throw new SyntaxError("Only functions can be debounced!");
    }
    const fn = _.debounce(callback, wait, lodashOptions);
    return {
      ...descriptor,
      value(...args: any[]) {
        fn.call(this, ...args);
      },
    };
  };
