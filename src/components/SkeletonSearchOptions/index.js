import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonSearchOptions = (props) => (
  <ContentLoader
    speed={2}
    width={960}
    height={47}
    viewBox="0 0 973 47"
    backgroundColor="#c2c1c1"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="24" y="10" rx="4" ry="4" width="400" height="20" />
  </ContentLoader>
);

export default SkeletonSearchOptions;
