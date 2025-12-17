export const composeProviders = (providers) => {
  return providers.reduce(
    (Prev, Curr) => {
      return ({ children }) => (
        <Prev>
          <Curr>{children}</Curr>
        </Prev>
      );
    },
    ({ children }) => <>{children}</>
  );
};
