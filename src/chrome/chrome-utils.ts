export const sendMessageToBackground = async <T = void>(
  message: string,
): Promise<T> => {
  const response = await chrome.runtime.sendMessage(message);
  return response;
};
