# Sport Wales Governance Analysis System - Project Background

## 0. Background

Sport Wales oversees and supports approximately 70 partner organizations, primarily National Governing Bodies (NGBs), in their governance practices. Annually, these partners submit Governance Improvement Plans (GIPs). These GIPs detail the partners' self-assessment of their governance, highlighting areas of strength and areas requiring development or support.

The Sport Wales Governance Team undertakes the critical task of reviewing these 70 GIPs each year. Their process involves manually reading each report and comparing the information provided against the Sport Wales Capability Framework. This framework outlines 48 specific requirements and good practices across five key principles of governance (Organizational/Legal Compliance, People and Cultures, Insight/Engagement/Strategy, Effectively Run Organisation, and Finance).

The primary objective of this review is to extract key insights from the GIPs. These insights help the Governance Team understand the current state of governance across the partner network, identify common challenges and best practices, and determine how best to support and guide partners in meeting governance requirements and improving their overall effectiveness. This manual analysis, however, is extremely time-consuming and limits the team's ability to focus on proactive, strategic support initiatives based on the findings. The request for this project stems from the need to automate and enhance this analysis process through a dedicated software tool.

## 1. Problem Statement

The Sport Wales Governance Team is responsible for reviewing Governance Improvement Plans (GIPs) submitted annually by approximately 70 partner organizations (e.g., National Governing Bodies - NGBs). Manually analyzing these reports to extract insights, compare them against the Sport Wales Capability Framework (CF), and identify trends is a highly time-consuming and resource-intensive process. This manual effort limits the team's capacity to focus on strategic development and support activities based on the insights gathered.

## 2. Project Goal

To develop an AI-powered software tool/platform that automates the ingestion, analysis, and summarization of GIP documents. The system aims to:
- Streamline the review process for the Governance Team.
- Extract structured, actionable insights from the GIPs.
- Map partner improvement plans to the Capability Framework.
- Identify common themes, development needs, support requests, and anomalies across partners.
- Provide insightful reports, visualizations, and comparison capabilities to aid decision-making.
- Free up Governance Team capacity for higher-value strategic work.

## 3. Core Functionality Requirements

### 3.1. Document Ingestion and Processing
- Ability to upload and process GIP documents in various formats (e.g., DOCX, PDF).
- Extract structured data from tables and unstructured text within the GIPs.

### 3.2. Information Extraction and Analysis
- Identify key information:
    - Partner details
    - Specific improvement areas mentioned
    - Planned actions and steps
    - Timelines (start/end dates, milestones)
    - Lead responsibility (individuals/roles)
    - Progress status/markers
    - Requests for support from Sport Wales
- Utilize AI/ML models (NLP, entity recognition, classification) for extraction.

### 3.3. Capability Framework (CF) Mapping
- Map extracted improvement areas and actions to the relevant principles and elements of the Sport Wales Capability Framework.
- Handle both explicit references and implicit semantic connections between GIP content and CF elements.
- Maintain a knowledge base of the CF structure (5 principles, 48 elements).

### 3.4. Theme Identification and Comparison
- Identify common themes, development needs, and support requests across selected groups of partners.
- Detect unique or anomalous improvement areas specific to certain partners.
- Enable side-by-side comparison of multiple GIPs based on themes, concerns, and recommendations.

### 3.5. Filtering and Grouping
- Allow users to filter partners based on criteria like:
    - Investment level
    - Partner type
    - Specific themes or CF elements addressed
- Group results based on these filters.

### 3.6. Reporting and Visualization (Dashboard)
- Provide an interactive dashboard with:
    - **Partner Selection:** Interface to select single or multiple partners.
    - **Theme Analysis:** Visualizations (charts, heatmaps) showing common themes mapped to the CF.
    - **Support Request Analysis:** Summaries and timelines of support needed from Sport Wales.
    - **Development Area Analysis:** Tracking progress and details of specific improvement initiatives.
    - **CF Alignment Analysis:** Visualizations (spider charts, bar charts) showing how partner plans align with the framework and identifying gaps.
    - **Timeline Views:** Gantt charts and calendars showing planned activities and deadlines.
    - **Anomaly Detection:** Highlighting unique focus areas.
- Support both single-partner deep dives and multi-partner comparative views.
- Generate exportable reports (summaries, tables) in formats like PDF.

## 4. Key Inputs

### 4.1. Governance Improvement Plans (GIPs)
- Annual reports from ~70 partners.
- Typically structured documents (often tables) detailing improvement areas, actions, leads, timelines, support needs, and sometimes explicit CF mapping.

### 4.2. Capability Framework (CF)
- The core governance standard for Sport Wales partners.
- Comprises 5 Principles and 48 Elements:
    - **Principle 1:** Organizational/Legal Compliance (9 elements)
    - **Principle 2:** People and Cultures (12 elements)
    - **Principle 3:** Insight, Engagement & Strategy (7 elements)
    - **Principle 4:** Effectively Run Organisation (8 elements)
    - **Principle 5:** Finance (12 elements)
- The system needs to understand and map GIP content to this structure. (See Appendix A for details).

## 5. Project Scope

### In Scope:
- Analysis of all partner GIPs (~70).
- Mapping GIP content to the Capability Framework.
- Identifying themes, support needs, timelines, and anomalies.
- Grouping/filtering partners (e.g., by investment level).
- Developing the AI analysis engine and the user-facing dashboard.
- Exploring and potentially testing multiple AI systems/software.

### Out of Scope:
- (To be further defined, but likely excludes areas beyond GIP analysis).


## 6. Strategic Alignment (Sport Wales Intent)

- **Bring people together for the long-term:** Fosters a collaborative sector using collective insight.
- **Be a highly valued organisation:** Delivers first-class service, encourages innovation, adds value, and develops together.

## 7. Challenges and Opportunities

### Challenges:
- Short timeframe for development.
- Potential inconsistencies in GIP format and terminology.
- Accuracy of AI-driven mapping to the CF.
- Handling varying levels of detail in GIPs.
- IT cautious approach to AI.

### Opportunities:
- Develop and test new, efficient ways of working.
- Share learnings about AI application within the sector.
- Potential to apply the tool to other reporting areas (e.g., accountability reports).
- Enhance the Governance Team's strategic impact.

## 8. Technical Considerations

- Robust document processing pipeline (PDF, DOCX).
- AI/ML models for text classification, entity extraction, theme detection.
- Structured data storage with GIP-CF mapping.
- Interactive visualization framework supporting complex views.
- Focus on user experience and accessibility.

---

## Appendix A: Capability Framework Principles & Elements

*(Detailed breakdown of the 5 Principles and 48 Elements as provided in the context)*

### Principle 1 - Organizational/Legal Compliance (9 elements)
1. Governing Document(s) and Review
2. Safeguarding Children and Adults
3. Insurance
4. Complaints and Whistleblowing
5. Comply with Legal Requirements
6. Clean Sport / Anti-Doping
7. Welsh Language
8. Environmental Sustainability
9. Environmental, Social and Governance Framework

### Principle 2 - People and Cultures (12 elements)
1. Directors - Clear Understanding of Roles and Responsibilities
2. Chair
3. Directors Recruitment/Appointment
4. Organizational Culture and Behaviours
5. Board/Committee Terms of Office & Composition
6. Board Review and Evaluation
7. Board and Employee Training & Development
8. Independent Chair
9. Board Champions
10. Key Volunteer Management Including Succession Planning
11. Protect and Promote Physical and Mental Health & Wellbeing
12. Director Succession Planning

### Principle 3 - Insight, Engagement & Strategy (7 elements)
1. Strategic Plan
2. Operational/Business Plan
3. EDI (Equality, Diversity & Inclusion)
4. Engagement and Communications Strategy
5. Horizon Scanning and Future Trends
6. Mechanisms for Athlete, Participant and Member Feedback
7. Stakeholder Mapping

### Principle 4 - Effectively Run Organisation (8 elements)
1. Effective Meetings
2. Effective Board Decision-Making
3. Risk and Opportunity Management
4. Access to HR, Legal and Financial Expertise/Support
5. Crisis Management and Business Continuity
6. Transparent and Accessible Information
7. Business Development/USP/Sector Resilience
8. Policies and Procedures (Non-Legal)

### Principle 5 - Finance (12 elements)
1. Financial Compliance
2. Financial Procedures
3. Budgeting
4. Management Accounts
5. Reserves
6. Financial Governance
7. Financial Risk
8. Value to the Organisation
9. Variance Analysis
10. Management Accounts (Enhanced)
11. Long-term Financial Planning
12. Strategic Objectives

---

## Appendix B: Data Dictionary for Single Partner Analysis

*(Detailed data dictionary as provided in the context)*

**Core Partner Information**
- id: String
- name: String
- documentDate: String (YYYY-MM-DD)

**Framework Alignment**
- frameworkAlignment: Array of Objects
    - principleId: Integer (1-5)
    - principleName: String
    - focusAreaCount: Integer
    - elements: Array of Strings
    - implementationStatus: String ("Not Started", "In Progress", "Completed")
    - completionPercentage: Integer (0-100)
    - gipExcerpts: Array of Strings

**Development Areas**
- developmentAreas: Array of Objects
    - areaId: String
    - areaTitle: String
    - cfMapping: Object { principleId, principleName, elementId, elementName }
    - secondaryCfMapping: Object (Optional)
    - objective: String
    - actions: Array of Strings
    - progressStatus: String
    - progressDetails: String
    - timeframe: String
    - leadPerson: String
    - startDate: String (YYYY-MM)
    - endDate: String (YYYY-MM)

**Support Requests**
- supportRequests: Array of Objects
    - requestId: String
    - supportArea: String
    - cfMapping: Object { principleId, elementId, elementName }
    - requestedTimeline: String (YYYY-MM)
    - context: String
    - status: String ("Requested", "In Progress", "Completed")
    - developmentArea: String
    - gipExcerpt: String

**Implementation Timeline**
- implementationTimeline: Object
    - timelinePeriod: String ("YYYY-MM-DD to YYYY-MM-DD")
    - activities: Array of Objects
        - activityId: String
        - areaTitle: String
        - activity: String
        - cfMapping: Object { principleId, principleName }
        - startDate: String (YYYY-MM)
        - endDate: String (YYYY-MM)
        - timeframeOriginal: String
        - timeframeStandardized: Object { type, startQuarter, endQuarter }
        - milestone: String
        - milestoneDate: String (YYYY-MM-DD)
        - status: String
        - statusPercentage: Integer (0-100)
        - leadPerson: String
        - dependencies: Array of Strings

**GIP Excerpts**
- gipExcerpts: Array of Objects
    - areaTitle: String
    - text: String
    - cfMapping: Object { principleId, elementId }
    - secondaryCfMapping: Object (Optional)
    - section: String
    - confidence: Float (0.00-1.00)

## 10. Application Architecture Breakdown

### Core Application Structure
- **`app/layout.js`**
  Root layout component providing consistent structure (headers, navigation) across all pages.

- **`app/page.js`**
  Main landing page handling dashboard rendering and initial data loading.

### API Routes
- **`app/api/governance/analysis/route.js`**
  Next.js API route handling analysis processing requests and coordinating data operations.

### Context Management
- **`app/contexts/AnalysisContext.client.jsx`**
  Central state management system for the governance analysis application, handling:
  - **Core State Elements**:
    - Partner selections and GIP upload mappings
    - File-to-partner assignment tracking
    - Processing status and progress monitoring
    - Dashboard view configurations and filters
    - Cross-component communication and data flow
  
  **Key Functionality**:
  - Manages complex state transitions between upload/analysis/view modes
  - Coordinates data flow between upload components and dashboard visualizations
  - Maintains filters and selections across dashboard tabs
  - Handles bulk partner selection logic and category filtering
  - Provides memoized selectors for efficient data derivation
  
  **Implementation Features**:
  - React Context API with useReducer for scalable state management
  - Atomic updates to prevent unnecessary re-renders
  - State persistence handlers for user session continuity
  - Error boundary integration for fault-tolerant operations
  - Automated view mode transitions based on selection state

### Core Components
- **`app/components/governance/GovernanceAnalysis.client.jsx`**
  Primary analysis container coordinating data loading and subcomponent rendering.

### Dashboard Components
- **`app/components/governance/dashboard/AnalysisDashboard.client.jsx`**
  Main dashboard layout container managing view state and component organization.

- **`app/components/governance/dashboard/DashboardContent.client.jsx`**
  Content renderer handling conditional display of different analysis view modes.

- **`app/components/governance/dashboard/PrincipleSummary.client.jsx`**
  Specialized component visualizing capability framework principle compliance metrics.

- **`app/components/governance/dashboard/ProcessingOverlay.client.jsx`**
  Loading/status overlay component for analysis operations.

### Visualization Components
- **`app/components/governance/charts/PieChart.client.jsx`**
  Reusable chart component for displaying framework compliance distribution.

## 12. Context Management Architecture

### AnalysisContext.client.jsx
Central state management for the governance analysis system, handling:
- **Core State Elements**:
  - Partner selections and GIP upload mappings
  - Processing status and progress tracking
  - Dashboard view configurations and filters

**Key Functionality**:
- Manages complex state transitions between upload/analysis/view modes
- Coordinates data flow between upload components and dashboard visualizations
- Maintains filters and selections across dashboard tabs
- Handles bulk partner selection logic and category filtering

**Implementation Highlights**:
- Uses React Context API with useReducer for scalable state management
- Memoized selectors for efficient data derivation
- Atomic updates to prevent unnecessary re-renders
- State persistence logic for user session continuity
- Error boundary integration for fault-tolerant operations
## 11. Context Management Architecture

### AnalysisContext.client.jsx
Central state management for the governance analysis system, handling:
- **Core State Elements**:
  - Partner selections and GIP upload mappings
  - Processing status and progress tracking
  - Dashboard view configurations and filters

**Key Functionality**:
- Manages complex state transitions between upload/analysis/view modes
- Coordinates data flow between upload components and dashboard visualizations
- Maintains filters and selections across dashboard tabs
- Handles bulk partner selection logic and category filtering

**Implementation Highlights**:
- Uses React Context API with useReducer for scalable state management
- Memoized selectors for efficient data derivation
- Atomic updates to prevent unnecessary re-renders
- State persistence logic for user session continuity
- Error boundary integration for fault-tolerant operations

## 12. Dashboard Component Analysis

### Core Dashboard Components

1. **DashboardContent.client.jsx** (Core Router)
   - **Purpose**: Central dashboard router managing view states and data flow
   - **Key Functions**:
     - Handles view mode transitions (single partner vs comparative analysis)
     - Manages tab navigation between Overview/Principles/Support/Timeline
     - Coordinates data loading from AnalysisContext
     - Provides export/filter controls
     - Implements responsive layout transitions


2. **PrinciplesSummary.client.jsx** (Framework Analysis)
   - **Purpose**: Visualizes Capability Framework compliance
   - **Key Features**:
     - Interactive principle selector (5-button grid)
     - Dual-mode display (single partner details vs multi-partner heatmap)
     - Expandable element details with GIP excerpts
     - Progress status indicators (completed/in-progress/not started)
     - Automatic theme generation from partner data

3. **OverviewDashboard.client.jsx** (High-Level Metrics)
   - **Purpose**: Displays executive summary of governance health
   - **Key Metrics**:
     - Compliance percentage by principle
     - Support request trends
     - Timeline adherence rates
     - Anomaly detection highlights
     - Comparative performance benchmarks

4. **SupportAnalysis.client.jsx** (Partner Support Tracking)
   - **Purpose**: Manages and tracks support requests
   - **Key Features**:
     - Support type categorization (legal/HR/strategy)
     - Timeline visualization for request resolution
     - Status tracking (requested/in-progress/completed)
     - Contextual GIP excerpts for each request
     - Multi-partner comparison capabilities

5. **ProcessingOverlay.client.jsx** (System Feedback)
   - **Purpose**: Provides user feedback during operations
   - **States Handled**:
     - Document processing status
     - AI analysis progress
     - Data export generation
     - Error conditions
     - System health monitoring



# Understanding the Sport Wales Governance Analysis System: Data Extraction and Visualization

## Data Extraction Framework

The Sport Wales Governance Analysis System is designed to extract structured data from Governance Improvement Plans (GIPs) submitted by partner organizations. This extracted data is then used to create meaningful visualizations that help the Governance Team understand patterns, identify support needs, and make evidence-based decisions.

## GIP Document Structure

Governance Improvement Plans are structured documents submitted annually by Sport Wales partners (such as Angling Cymru and Badminton Wales). These documents typically contain:

1. **Areas for Improvement**: Specific governance areas the partner plans to enhance
2. **Lead Persons**: Individuals responsible for implementation
3. **Capability Framework References**: Direct or indirect references to the Sport Wales Governance Framework
4. **Improvement Objectives**: Clear goals for each improvement area
5. **Action Steps**: Specific tasks to achieve improvements
6. **Support Requirements**: External assistance needed
7. **Timelines**: Implementation schedules and milestones
8. **Progress Status**: Current state of implementation

While the exact format varies between partners, these core information elements are consistent across all GIPs.

## Data Extraction Process

The system extracts data from GIPs through several sophisticated processes:

### 1. Document Parsing
- Recognizes tabular structures in GIPs
- Identifies column headers and row relationships
- Handles variations in formatting between different partners

### 2. Content Extraction
- Maps table columns to standardized field names
- Preserves relationships between related information
- Identifies key concepts even when terminology varies
- Recognizes entity types (people, organizations, dates)

### 3. Framework Mapping
The system maps GIP content to the Capability Framework through:

#### Direct Mapping
- Identifies explicit references to CF principles or elements
- Example: When a GIP directly mentions "Principle 3" or "Strategic Plan"

#### Semantic Mapping
- Analyzes content to determine appropriate mappings when explicit references aren't present
- Example: Mapping "Transgender policy creation" to CF Element 3.3 (EDI)
- Creates primary and secondary mappings for multi-faceted improvement areas

### 4. Timeline Standardization
- Converts various date formats to standardized YYYY-MM format
- Normalizes timeframes into fiscal quarters (e.g., "Q2 2025-26")
- Identifies milestone dates from descriptive text

## Data Structure Design

The extracted data follows a comprehensive structure designed to capture all relevant information from GIPs:

### 1. Core Partner Information
- Unique identifier
- Organization name
- Document submission date

### 2. Framework Alignment
- Mapping to Capability Framework principles
- Number of focus areas within each principle
- Specific elements addressed
- Implementation status and completion percentage
- Key excerpts from the GIP related to each principle

### 3. Development Areas
- Detailed improvement areas with unique identifiers
- Primary and secondary mappings to CF principles and elements
- Objective statements and specific actions
- Progress status and timeline information
- Responsible persons or roles

### 4. Support Requests
- Specific support needs extracted from GIPs
- Mapping to relevant CF principles and elements
- Requested timelines
- Context and status information

### 5. Implementation Timeline
- Overall implementation period
- Specific activities with start/end dates
- Standardized timeframes and milestones
- Dependencies between activities
- Current status and completion percentages

### 6. GIP Excerpts
- Raw text extracts from original GIPs
- Mapping to CF principles and elements
- Source section information
- Confidence scores for mappings

## Content-First Analysis Approach

The system employs a content-first approach to data analysis and visualization, recognizing that context and actual content are crucial for the Governance Team:

### 1. Preserving Original Content
- Maintains exact wording from GIPs in the extracted data
- Uses confidence scores to indicate mapping reliability
- Provides full context for all insights and patterns

### 2. Evidence-Based Visualization
- Every visualization is based on actual GIP text
- Charts and metrics always link back to specific excerpts
- Allows drill-down from summaries to detailed content

### 3. Qualitative Comparison
- Enables side-by-side comparison of GIP content across partners
- Shows variations in approach to similar governance issues
- Highlights unique and common elements in improvement plans

### 4. Timeline Contextualization
- Presents activities in chronological sequence
- Shows dependencies between related actions
- Indicates milestone points and critical deadlines

## Data Transformation for Visualization

The data structure is specifically designed to enable powerful visualizations:

### 1. Principle-Based Analysis
- Aggregates focus areas by CF principle
- Shows distribution across partners
- Reveals alignment with governance priorities

### 2. Timeline Visualization
- Presents implementation schedules on interactive timelines
- Highlights peak periods for support needs
- Shows progress against planned milestones

### 3. Support Need Analysis
- Categorizes and quantifies support requests
- Maps requests to CF principles and elements
- Shows temporal distribution of support needs

### 4. Common Theme Identification
- Identifies recurring themes across partners
- Highlights unique or anomalous improvement areas
- Shows variations in approach to similar challenges

### 5. Progress Tracking
- Visualizes implementation status across partners
- Shows completion percentages for different principles
- Identifies at-risk activities and dependencies

## Example Extraction Process

To illustrate how this works in practice, consider these examples:

### Example 1: Angling Cymru
From their GIP table entry:
```
Area to be Improved: Organisational Strategy Development
Lead(s): CEO
Capability Framework Principles: Principle 3
Improvement Objective: Create a comprehensive, aligned, and forward-looking strategy
```

The system extracts:
- Development area: "Organisational Strategy Development"
- Maps to: Principle 3, Element 3.1 (Strategic Plan)
- Lead person: "CEO"
- Actions: 8 specific steps including "Formulate the Strategy Team" and "Conduct a SWOT analysis"
- Support needs: "Strategy consultant for initial stages", "Benchmarking reports", etc.
- Timeline: Start January 2025, end July 2025

### Example 2: Badminton Wales
From their GIP table entry:
```
Area to be Improved: Transgender policy to be created
Lead(s): EDI manager
Improvement Objective: (Actions listed as "All board and executive to engage and attend Guidance workshops", etc.)
Additional Support/Reference Required: Comms support from Sport Wales, Legal advice needed
```

The system extracts:
- Development area: "Transgender policy to be created"
- Maps to: Principle 3, Element 3.3 (EDI)
- Lead person: "EDI manager"
- Actions: 5 specific steps including "All board and executive to engage and attend Guidance workshops"
- Support needs: "Comms support from Sport Wales", "Legal advice needed"
- Timeline: Start May 2025, end February 2026

## Why This Data Structure Matters

The comprehensive data structure enables the Governance Team to:

1. **Make Informed Decisions**: By seeing exactly what partners are planning and what support they need
2. **Identify Patterns**: Recognizing common challenges and approaches across different partners
3. **Allocate Resources Efficiently**: Understanding when and where support is most needed
4. **Track Progress**: Monitoring implementation against planned timelines
5. **Drive Strategic Improvements**: Identifying common governance gaps across the sector

By maintaining this rich, contextual data structure, the system provides actionable insights rather than abstract metrics, ensuring the Governance Team can make evidence-based decisions grounded in the actual content of partner GIPs.