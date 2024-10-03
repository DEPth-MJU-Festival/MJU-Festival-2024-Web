import TimetableImg from '@images/timetable/Timetable.png';
import BoothTimeTable from './BoothTimeTable';
import { forwardRef } from 'react';

const TimeTableTab = forwardRef<HTMLDivElement, { preloadImage: string }>(
  ({ preloadImage }, ref) => {
    return (
      <div ref={ref}>
        <div
          style={{ position: 'relative', width: '100%', paddingTop: '106.67%' }}
        >
          <img
            src={preloadImage}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        <BoothTimeTable />
        <img src={TimetableImg} width="100%" />
      </div>
    );
  },
);

export default TimeTableTab;
