export const task38 = () => {
  // This code demonstrates the use of optional chaining (`?.`)
  // and nullish coalescing (`??`) operators.
  // It checks if a value exists (is not `null` or `undefined`)
  // and provides a default value otherwise.
  // The first `console.log` may throw an error
  // because `document.data` is `undefined`,
  // and calling `.toDateString()` on `undefined` is not allowed
  // without the optional chaining operator (`?.`).
  type Document = {
    title: string;
    text: string;
    data?: Date;
  };

  const document: Document = {
    title: 'The main title',
    text: 'The  text',
    data: new Date(),
  };

  console.log(
    document.data?.toDateString() ?? '1-Oh man... There is nothing here.'
  );
};
