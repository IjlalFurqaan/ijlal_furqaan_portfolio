import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';
import { timeline } from '../data/portfolioData';

const education = timeline.filter((item) => item.timelineType === 'education');

const Education: React.FC = () => {
  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">🎓 Education</h2>
      </div>
      <VerticalTimeline>
        {education.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--education"
            contentStyle={
              index === 0
                ? { background: 'rgb(229, 9, 20)', color: '#fff' }
                : { background: 'rgb(240, 240, 240)', color: '#fff' }
            }
            contentArrowStyle={{
              borderRight: index === 0 ? '7px solid rgb(229, 9, 20)' : '7px solid rgb(240, 240, 240)',
            }}
            date={item.dateRange}
            iconStyle={{ background: 'rgb(229, 9, 20)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <div style={{ color: index === 0 ? '#fff' : 'black' }}>
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
              <ul className="timeline-points">
                {item.summaryPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default Education;
