import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonCardDoctor = (props) => (
  <ContentLoader
    speed={2}
    width={1200}
    height={266}
    viewBox="0 0 1200 266"
    backgroundColor="#c2c1c1"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="0" y="0" rx="16" ry="16" width="264" height="266" />
    <rect x="288" y="60" rx="5" ry="5" width="200" height="15" />
    <rect x="288" y="104" rx="5" ry="5" width="178" height="9" />
    <rect x="288" y="164" rx="5" ry="5" width="104" height="8" />
    <rect x="419" y="164" rx="5" ry="5" width="104" height="8" />
    <rect x="288" y="195" rx="5" ry="5" width="400" height="50" />
    <rect x="288" y="9" rx="5" ry="5" width="400" height="20" />
    <rect x="1045" y="36" rx="5" ry="5" width="64" height="19" />
    <rect x="1037" y="66" rx="5" ry="5" width="80" height="12" />
    <rect x="952" y="170" rx="8" ry="8" width="240" height="70" />
    <rect x="1000" y="9" rx="5" ry="5" width="148" height="20" />
  </ContentLoader>
);

export default SkeletonCardDoctor;
