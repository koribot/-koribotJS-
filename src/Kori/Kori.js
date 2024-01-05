
export const Kori = (() => {

  const states = {}
  const scripts = {}
  const track = {}
  const routes = []



  const setState = (stateName, _states) => {

    states[stateName] = {
      ...states[stateName],
      ..._states
    }
    if (track.start)
      track.start()
  }

  const setScript = (scriptName, _scripts) => {
    scripts[scriptName] = {
      ...scripts[scriptName],
      ..._scripts
    }
  }

  const visitedPaths = new Set();

  function router(event, path) {
    let absolutePath = path


    if (event) event.preventDefault();

    if (path !== window.location.pathname) {
      visitedPaths.add(path);
      if (absolutePath.charAt(0) !== "/") {
        window.history.pushState(null, null, "/" + path);
      } else {
        window.history.pushState(null, null, path);
      }


      Kori.track.start()
    }
    // navigateTo(path);
  }


  function navigate() {

  }

  // function navigateTo(path) {
  //   // Perform custom logic based on the path
  //   console.log('Navigating to:', path);

  //   // Simulate loading content based on the path
  //   const contentElement = document.getElementById('test');
  //   contentElement.innerHTML = getContent(path);
  // }

  // Handle initial route when the page loads
  // window.addEventListener('load', () => {

  //   const initialPath = window.location.pathname;
  //   Kori.track.start();
  //   // navigateTo(initialPath);
  // });

  window.addEventListener('popstate', () => {
    const currentPath = window.location.pathname;
    if (visitedPaths.length > 0) {

      Kori.track.start()
    }
    Kori.track.start()
    // navigateTo(currentPath);
  });


  return {
    track,
    states,
    scripts,
    router,
    setState,
    setScript,
  }
})()

export const { states, setState, setScript, router } = Kori

export default Kori