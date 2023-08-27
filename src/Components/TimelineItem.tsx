import { useState } from "react";
import ReactHtmlParser from "react-html-parser";

interface TimelineItemProps {
  start: string;
  end: string;
  title: string;
  subtitle: string;
  description: string;
  isRight: boolean;
}

interface DateComponentProps {
  end: string;
  start: string;
  isRight: boolean;
}

interface DataComponentProps {
  title: string;
  subtitle: string;
  description: string;
  isRight: boolean;
}

const DateComponent = ({ end, start, isRight }: DateComponentProps) => {
  return (
    <div
      className={`col-lg-6 col-md-6 col-sm-6${
        isRight ? "" : " order-sm-2 order-1"
      }`}
    >
      <div
        className={`duration border rounded p-2 pl-4 pr-4 position-relative shadow text-left ${
          isRight ? "date-label-left" : "duration-right"
        }`}
      >
        {start} - {end}
      </div>
    </div>
  );
};
const DataComponent = ({
  title,
  subtitle,
  description,
  isRight,
}: DataComponentProps) => {
  const [expandView, setExpandView] = useState(false);

  const toggleExpand = () => {
    setExpandView((expand) => !expand);
  };

  return (
    <div
      className={`col-lg-6 col-md-6 col-sm-6${
        isRight ? "" : " order-sm-1 order-2"
      }`}
    >
      <div
        className={`event rounded p-4 border float-left timeline-item ${
          isRight
            ? "text-left event-description-right"
            : "event-description-left text-right"
        } ${expandView ? "no-overlay" : "overlay-timeline-item"}`}
      >
        <h5 className="title mb-0 text-capitalize">{title}</h5>
        <small className="company">{subtitle}</small>
        <p className="timeline-subtitle mt-3 mb-0 text-muted">
          {ReactHtmlParser(description)}
        </p>
        <div className="btnExpandContainer">
          <button onClick={toggleExpand}>▲</button>
        </div>
      </div>
    </div>
  );
};

const TimelineItem = ({
  start,
  end,
  title,
  subtitle,
  description,
  isRight = true,
}: TimelineItemProps) => {
  return (
    <div className="timeline-item mt-4">
      <div className="row">
        {isRight ? (
          <>
            <DateComponent start={start} end={end} isRight={isRight} />
            <DataComponent
              title={title}
              subtitle={subtitle}
              description={description}
              isRight={isRight}
            />
          </>
        ) : (
          <>
            <DataComponent
              title={title}
              subtitle={subtitle}
              description={description}
              isRight={isRight}
            />
            <DateComponent start={start} end={end} isRight={isRight} />
          </>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
