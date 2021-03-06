/**
 * Bind This
 * @author Irfan Andriansyah <irfan@99.co>
 * @description decorator for bind this
 * @since 2021.02.20
 */
export const bind = (
  _: unknown,
  __: string | symbol,
  descriptor: TypedPropertyDescriptor<any>
) => {
  const fn = descriptor.value;

  return {
    configurable: true,
    /**
     * Getter descriptor
     * @returns {fn}
     */
    get() {
      const boundFn = fn.bind(this);
      return (...args: any[]) => boundFn.call(this, ...args);
    }
  };
};
