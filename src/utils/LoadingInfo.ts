const loadProgressInfo: (url: string, loaded: number, total: number) => void = (
  url: string,
  loaded: number,
  total: number,
) => {
  console.log(
    `| ${url} | ${loaded} of ${total} | ${((loaded / total) * 100).toFixed(
      0,
    )} % |`,
  );
};
const loadCompleteInfo: (key: string) => void = (key: string) => {
  console.log(`${key.toUpperCase()} LOAD COMPLETE`);
};
const loadStartInfo: (key: string) => void = (key: string) => {
  console.log(`${key.toUpperCase()} LOAD START`);
};
const loadErrorInfo: (url: string) => void = (url: string) => {
  console.error(`LOAD FAILED on [${url}]`);
};
//
export { loadStartInfo, loadProgressInfo, loadCompleteInfo, loadErrorInfo };
