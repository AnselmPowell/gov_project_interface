# Improved DevelopmentAreasDetailContent Component

```jsx
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';
import { useAnalysis } from '../../contexts/AnalysisContext.client';
S
const DevelopmentAreasDetailContent = ({ details }) => {
  const { viewMode, data } = details;
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedPrinciple, setSelectedPrinciple] = useState('all');
  const [selectedElement, setSelectedElement] = useState('all');
  const [expandedExcerpts, setExpandedExcerpts] = useState(new Set());

  // Format dates and get framework names
  const formatDate = (dateStr) => dateStr ? new Date(dateStr).toLocaleDateString('en-GB') : 'N/A';
  const getPrincipleName = (id) => data?.frameworkAlignment?.find(p => p.principleId === id)?.principleName || '';
  const getElementName = (principleId, elementId) => 
    data?.frameworkAlignment?.find(p => p.principleId === principleId)
      ?.elements.find(e => e.startsWith(`${elementId}:`))?.split(': ')[1] || '';

  // Toggle excerpt visibility
  const toggleExcerpt = (id) => {
    setExpandedExcerpts(prev => new Set(
      prev.has(id) ? [...prev].filter(x => x !== id) : [...prev, id]
    ));
  };

  if (viewMode === 'single') {
    const areas = data?.developmentAreas || [];
    const principles = [...new Set(areas.map(a => a.cfMapping.principleId))];
    const elements = [...new Set(areas.flatMap(a => 
      a.cfMapping.elementId ? `${a.cfMapping.principleId}-${a.cfMapping.elementId}` : []
    ))];

    return (
      <div className="space-y-6 p-4">
        {/* Header Section */}
        <div className="sw-bg-blue/5 p-6 rounded-xl border-l-4 border-sw-blue">
          <h2 className="text-2xl font-bold sw-text-blue mb-2">
            Development Areas Analysis
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <StatBlock title="Total Areas" value={areas.length} color="sw-blue" />
            <StatBlock title="Completed" 
              value={areas.filter(a => a.progressStatus === 'Completed').length} 
              color="sw-green" />
            <StatBlock title="In Progress" 
              value={areas.filter(a => a.progressStatus === 'In Progress').length} 
              color="sw-blue" />
          </div>
        </div>

        {/* Filter Controls */}
        <div className="bg-white p-4 rounded-lg shadow-sm grid grid-cols-3 gap-4">
          <FilterSelect 
            label="Status"
            options={['all', 'Completed', 'In Progress', 'Not Started']}
            value={selectedStatus}
            onChange={setSelectedStatus}
          />
          <FilterSelect
            label="Principle"
            options={principles.map(p => ({
              value: p,
              label: `Principle ${p}: ${getPrincipleName(p)}`
            }))}
            value={selectedPrinciple}
            onChange={setSelectedPrinciple}
          />
          <FilterSelect
            label="Element"
            options={elements.map(e => {
              const [pId, elId] = e.split('-');
              return {
                value: e,
                label: `Element ${elId}: ${getElementName(pId, elId)}`
              };
            })}
            value={selectedElement}
            onChange={setSelectedElement}
          />
        </div>

        {/* Areas List */}
        <div className="space-y-4">
          {areas
            .filter(area => {
              const statusMatch = selectedStatus === 'all' || 
                area.progressStatus === selectedStatus;
              const principleMatch = selectedPrinciple === 'all' || 
                area.cfMapping.principleId === parseInt(selectedPrinciple);
              const elementMatch = selectedElement === 'all' || 
                `${area.cfMapping.principleId}-${area.cfMapping.elementId}` === selectedElement;
              return statusMatch && principleMatch && elementMatch;
            })
            .map((area, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-sw-blue/10">
                {/* Area Header */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold sw-text-blue">
                    {area.areaTitle}
                  </h3>
                  <StatusBadge status={area.progressStatus} />
                </div>

                {/* CF Mapping */}
                <div className="sw-bg-blue/5 p-3 rounded-md mb-3">
                  <p className="text-sm sw-text-blue">
                    {getPrincipleName(area.cfMapping.principleId)} > {area.cfMapping.elementName}
                  </p>
                </div>

                {/* Excerpt Preview */}
                {data?.gipExcerpts?.some(e => e.areaTitle === area.areaTitle) && (
                  <ExcerptSection 
                    excerpts={data.gipExcerpts.filter(e => e.areaTitle === area.areaTitle)}
                    expanded={expandedExcerpts}
                    toggle={toggleExcerpt}
                  />
                )}

                {/* Metadata Grid */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <MetaItem label="Timeline" value={`${formatDate(area.startDate)} - ${formatDate(area.endDate)}`} />
                  <MetaItem label="Lead" value={area.leadPerson} />
                  <MetaItem label="Objective" value={area.objective} />
                  <MetaItem label="Actions" value={area.actions?.join(', ')} />
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }

  // Comparison view implementation would follow similar patterns
  return null; 
};

// Helper Components
const StatBlock = ({ title, value, color }) => (
  <div className={`bg-${color}/10 p-4 rounded-lg text-center`}>
    <div className={`text-3xl font-bold text-${color}`}>{value}</div>
    <div className="text-sm text-secondary mt-1">{title}</div>
  </div>
);

const FilterSelect = ({ label, options, value, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-secondary mb-1">{label}</label>
    <select
      className="w-full p-2 border border-sw-blue/20 rounded-md bg-white"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map(opt => (
        <option key={opt.value || opt} value={opt.value || opt}>
          {opt.label || opt}
        </option>
      ))}
    </select>
  </div>
);

const StatusBadge = ({ status }) => (
  <span className={`px-3 py-1 rounded-full text-sm ${
    status === 'Completed' ? 'sw-bg-green text-white' :
    status === 'In Progress' ? 'sw-bg-blue text-white' :
    'sw-bg-red/10 sw-text-red'
  }`}>
    {status || 'Not Started'}
  </span>
);

const ExcerptSection = ({ excerpts, expanded, toggle }) => (
  <div className="sw-bg-yellow/5 p-3 rounded-md border-l-4 border-sw-yellow">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium sw-text-yellow">GIP Excerpts</span>
      <button 
        className="sw-text-yellow hover:sw-text-yellow/70"
        onClick={() => toggle(excerpts[0].id)}
      >
        {expanded.has(excerpts[0].id) ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
    </div>
    {expanded.has(excerpts[0].id) && excerpts.map((excerpt, i) => (
      <div key={i} className="mt-2">
        <p className="text-sm italic text-secondary">"{excerpt.text}"</p>
        <div className="text-xs text-secondary mt-1">
          Confidence: {Math.round(excerpt.confidence * 100)}% | Section: {excerpt.section}
        </div>
      </div>
    ))}
  </div>
);

const MetaItem = ({ label, value }) => (
  <div className="bg-tertiary/5 p-2 rounded-md">
    <div className="text-xs font-medium text-secondary">{label}</div>
    <div className="text-sm text-secondary truncate">{value || 'Not specified'}</div>
  </div>
);

export default DevelopmentAreasDetailContent;