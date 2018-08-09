const mistake = (message: string): never => {
  throw new Error(message);
};
mistake('A Devastating Error Message');

