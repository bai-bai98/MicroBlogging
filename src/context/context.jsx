import { createContext, useState, useContext, useMemo } from "react";
export const Context = createContext({
  tweet: "",
  setTweet: () => {},
});

export function ContextProvider({ children }) {
  const [tweets, setTweets] = useState([]);
  const value = useMemo(() => ({ tweets, setTweets }), [tweets]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
