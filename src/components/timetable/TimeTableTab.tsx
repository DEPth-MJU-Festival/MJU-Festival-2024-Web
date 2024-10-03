import TimetableImg from '@images/timetable/Timetable.png';
import BoothTimeTable from './BoothTimeTable';
import { forwardRef, useState } from 'react';

const TimeTableTab = forwardRef<HTMLDivElement, { preloadImage: string }>(
  ({ preloadImage }, ref) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
      <div ref={ref}>
        <div
          style={{ position: 'relative', width: '100%', paddingTop: '106.67%' }}
        >
          <img
            src={preloadImage}
            onLoad={() => setIsLoaded(true)}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.8s ease-in-out',
            }}
          />
        </div>
        <BoothTimeTable />
        <div
          style={{ position: 'relative', width: '100%', paddingTop: '212.82%' }}
        >
          <img
            src={TimetableImg}
            onLoad={() => setIsLoaded(true)}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.8s ease-in-out',
            }}
          />
        </div>
      </div>
    );
  },
);

export default TimeTableTab;
