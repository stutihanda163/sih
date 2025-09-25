import React, { useState } from 'react';

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
  defaultTab?: string;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({ items, defaultTab, className = '' }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || items[0]?.id);

  return (
    <div className={className}>
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-6">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex-1 px-4 py-2 rounded-md font-medium transition-all duration-200 ${
              activeTab === item.id
                ? 'bg-white text-green-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
            role="tab"
            aria-selected={activeTab === item.id}
            aria-controls={`tabpanel-${item.id}`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {items.map((item) => (
        <div
          key={item.id}
          id={`tabpanel-${item.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${item.id}`}
          className={activeTab === item.id ? 'block' : 'hidden'}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default Tabs;