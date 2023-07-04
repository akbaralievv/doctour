import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonCardClinic = (props) => (
  <ContentLoader
    speed={2}
    width={1200}
    height={266}
    viewBox="0 0 1200 266"
    backgroundColor="#c2c1c1"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="0" y="0" rx="16" ry="16" width="264" height="266" />
    <rect x="282" y="100" rx="5" ry="5" width="250" height="25" />
    <rect x="282" y="16" rx="11" ry="11" width="400" height="30" />
    <rect x="282" y="150" rx="11" ry="11" width="500" height="85" />
    <rect x="900" y="20" rx="11" ry="11" width="188" height="21" />
    <rect x="900" y="60" rx="11" ry="11" width="188" height="21" />
    <rect x="900" y="100" rx="11" ry="11" width="188" height="21" />
    <rect x="900" y="140" rx="11" ry="11" width="188" height="21" />
  </ContentLoader>
);

export default SkeletonCardClinic;
