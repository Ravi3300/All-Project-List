const HigherOrderLoading = (WrappedComponent) => {
  return () => {
    return (
      <div>
        <p>This is an added message from HOC 👋</p>
        <WrappedComponent />
      </div>
    );
  };
};

export default HigherOrderLoading;
