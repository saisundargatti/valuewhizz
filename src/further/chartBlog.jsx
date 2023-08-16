/* eslint-disable react/prop-types */
import chartPatterns from "./chartpatterns.js";

const ChartBlogTemplate = ({
  pattern,
  implications,
  description,
  chartDescription,
  imageUrl,
  characteristics,
  tradingConsiderations,
  criteriaSupport,
  criteriaRefute,
}) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-md max-w-screen-md mx-auto ">
      <h1 className="text-2xl font-semibold mb-2">{pattern}</h1>
      <p className="text-gray-600 mb-2">{implications}</p>
      <p className="text-gray-600 mb-2">{description}</p>
      <img src={imageUrl} alt={pattern} className="w-full h-auto mb-4" />
      <p className="text-gray-600 mb-2">{chartDescription}</p>
      <h4>Characteristics</h4>
      <ul className="list-disc pl-6">
        {characteristics.map((eachItem, index) => (
          <li key={index} className="text-gray-600 mb-2 ">
            {eachItem}
          </li>
        ))}
      </ul>
      <h4>TradingConsiderations</h4>
      <ul className="list-disc pl-6">
        {tradingConsiderations.map((eachItem, index) => (
          <li key={index} className="text-gray-600 mb-2 ">
            {eachItem}
          </li>
        ))}
      </ul>
      <h4>Criteria Support</h4>
      <ul className="list-disc pl-6">
        {criteriaSupport.map((eachItem, index) => (
          <li key={index} className="text-gray-600 mb-2 ">
            {eachItem}
          </li>
        ))}
      </ul>
      <h4>Criteria Refute</h4>
      <ul className="list-disc pl-6">
        {criteriaRefute.map((eachItem, index) => (
          <li key={index} className="text-gray-600 mb-2">
            {eachItem}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ChartBlog = () => {
  return (
    <div>
      {chartPatterns.map((eachObject, index) => (
        <ChartBlogTemplate
          key={index}
          pattern={eachObject.pattern}
          implications={eachObject.implication}
          description={eachObject.description}
          chartDescription={eachObject.chartDescription}
          imageUrl={eachObject.imageUrl}
          characteristics={eachObject.characteristics}
          tradingConsiderations={eachObject.tradingConsiderations}
          criteriaSupport={eachObject.criteriaSupport}
          criteriaRefute={eachObject.criteriaRefute}
        />
      ))}
    </div>
  );
};

export default ChartBlog;
