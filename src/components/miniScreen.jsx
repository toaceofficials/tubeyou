const MiniView = () => {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        setIsVisible(true);
        console.log(true);
      } else {
        setIsVisible(false);
        console.log(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup function
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
  return (
    <div className={`mini-screen ${isVisible ? "hidden" : "visible"}`}>
      {/* Content for mini screen goes here */} <h1>hello</h1>
    </div>
  );
};
