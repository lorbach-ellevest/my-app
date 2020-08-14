import React, { useLayoutEffect, useState, createContext, useContext} from 'react'

const labels = {
  SM: 'mobile', // { isMobile: true, isTablet: false, isDesktop: false }
  MD: 'tablet', // { isMobile: false, isTablet: true, isDesktop: false }
  LG: 'desktop',// { isMobile: false, isTablet: true, isDesktop: true }
}

/*
 * React Context ===========================
 * Context provides a way to share values like these between components without having to
 * explicitly pass a prop through every level of the tree.
 * const MyContext = React.createContext(defaultValue)
 * When we create a context object we get:
 * MyContext.Provide:
 * React component that allows consuming components to subscribe to context changes.
 * MyContext.Consumer:
 *  lets you read the context and subscribe to its changes.
 * You still need a <MyContext.Provider> above in the tree t
 * MyContext.Consumer === useContext(MyContext) === static contextType = MyContext
 * (functional components)   (with hooks)              (class components)

*/

/*
 * Note on MediaQueryList ===========================
 * MediaQueryList (MQL) object stores information on a media query applied to a document
 * It is the result of callign window.matchMedia(query)
 * It handles sending notifications to listeners when the media query state changes
 * MQL.matches => boolean
 * MQL.addListener() => invoked whenever the media query status
 * MQL.removeListener()
 *
*/

// create custom context
const defaultValue = {}
const MediaContext = createContext(defaultValue)

export const MediaProvider = ({ children, breakpoints }) => {
  const [mediaQuery, setMediaQuery] = useState(); // -> mediaQuery = mobile, tablet, desktop

  // Similar to useEffect - triggered before render
  useLayoutEffect(() => {
      // Object to keep the MQL object of all the breakpoints
      const mql = {}
      const resolutions = Object.keys(breakpoints)

      // handles event listener
      const handleMediaListener = ({ matches, media}) => {
        const resolution = resolutions.find(r => breakpoints[r] === media)
        if (matches) {
          const key = labels[resolution]
          setMediaQuery(key)
        }
      }

      // Sets mql object for all breakpoints + initial query
      resolutions.forEach(resolution => {
        const query =  breakpoints[resolution]
        const key = labels[resolution]

        // creates MQL for resolution
        mql[resolution] = window.matchMedia(query)
        // adds event listener for resolution. listener will be called when matches value changes
        mql[resolution].addListener(handleMediaListener)
        // if resolution matches => set state
        if (mql[resolution].matches) setMediaQuery(key)
      });

      // return clean-up function
      return () => {
        resolutions.forEach(resolution => mql[resolution].removeListener(handleMediaListener))
      }
    }, [breakpoints]); // <- passing an array of values that the effect depends on to prevent unnecessary renders

  return (
    <MediaContext.Provider value={mediaQuery}>
      {children}
    </MediaContext.Provider>
  )

}

export const useMediaQuery = () => useContext(MediaContext);
