const Shimmer = () => {
  return (
    <div className="shimmer-container" aria-label="Loading restaurants">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-img" />
            <div className="shimmer-body">
              <div className="shimmer-title" />
              <div className="shimmer-text" />
              <div className="shimmer-text small" />
              <div className="shimmer-text small" />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
