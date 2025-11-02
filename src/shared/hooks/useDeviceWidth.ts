'use client';

import { useCallback, useEffect, useState } from 'react';

type DeviceSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const DEVICE_WITH_WIDTH: Record<DeviceSize, number> = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1200,
};

const getDeviceSize = (deviceWidth: number) => {
  let deviceSize: DeviceSize = 'xs';

  Object.entries(DEVICE_WITH_WIDTH).forEach(([title, size]) => {
    if (deviceWidth >= size) {
      deviceSize = title as DeviceSize;
    }
  });

  return deviceSize;
};

export const useDeviceWidth = () => {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const [deviceSize, setDeviceSize] = useState<DeviceSize>(
    getDeviceSize(window.innerWidth),
  );

  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => setDeviceSize(getDeviceSize(deviceWidth)), [deviceWidth]);

  const isWidthGreaterThan = useCallback(
    (size: DeviceSize) => {
      return deviceWidth >= DEVICE_WITH_WIDTH[size];
    },
    [deviceWidth],
  );

  return { deviceWidth, deviceSize, isWidthGreaterThan } as const;
};
