import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

interface Props {
  width: number;
}

export const NewsSkeletonLoader: React.FC<Props> = ({width}) => {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <SkeletonPlaceholder.Item
        flexDirection="column"
        alignItems="center"
        width={width}
        paddingHorizontal={16}>
        <SkeletonPlaceholder.Item
          width={'100%'}
          height={width / 2}
          borderRadius={8}
        />
        <SkeletonPlaceholder.Item
          width={width}
          marginTop={10}
          paddingHorizontal={16}>
          <SkeletonPlaceholder.Item width={'90%'} height={20} />
          <SkeletonPlaceholder.Item width={'80%'} height={20} marginTop={6} />
          <SkeletonPlaceholder.Item width={'100%'} height={20} marginTop={6} />
          <SkeletonPlaceholder.Item width={'90%'} height={20} marginTop={6} />
          <SkeletonPlaceholder.Item width={'80%'} height={20} marginTop={6} />
          <SkeletonPlaceholder.Item width={'100%'} height={20} marginTop={6} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};
