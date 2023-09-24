import { createContext, useContext, useState } from "react";

const MusicContext = createContext();

export function MusicProvider(props) {
  const { children } = props;

  const [selectedMusic, setMusic] = useState(null);

  return (
    <MusicContext.Provider value={{ selectedMusic, setMusic }}>
      {children}
    </MusicContext.Provider>
  );
}

// this is a hook that can use used in your compoent
// if you do not want to use this then in componet =>  useContext(MusicContext)

export function useMusic() {
  return useContext(MusicContext);
}
