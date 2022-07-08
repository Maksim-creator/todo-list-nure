export default function sleep(ms: number) {
  return new Promise(
    // eslint-disable-next-line no-promise-executor-return
    (resolve) => setTimeout(resolve, ms),
  );
}

export const toKebabCase = (str: string) => {
  if (str) {
    // @ts-ignore
    return str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map((x) => x.toLowerCase())
      .join('-');
  }
  return 'ordered-list';
};
