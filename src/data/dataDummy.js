export const hockeyWalesDummy = {
  id: "hockey-wales",
  name: "Hockey Wales",
  documentDate: "2025-03-15",

  frameworkAlignment: [
    {
      principleId: 1,
      principleName: "Organisational/Legal Compliance",
      focusAreaCount: 2,
      elements: ["1.1 Governing Document(s) and Review", "1.5 Comply with Legal Requirements"],
      implementationStatus: "In Progress",
      completionPercentage: 40,
      gipExcerpts: [
        "Full constitutional review scheduled for Q3 2025",
        "Legal compliance audit completed Q1 2025"
      ]
    },
    {
      principleId: 2,
      principleName: "People and Cultures",
      focusAreaCount: 3,
      elements: ["2.3 Organisational Culture and Behaviours", "2.6 Board Review and Evaluation", "2.7 Board and Employee Training & Development"],
      implementationStatus: "Not Started",
      completionPercentage: 10,
      gipExcerpts: [
        "New diversity and inclusion initiative planned"
      ]
    }
  ],

  developmentAreas: [
    {
      areaId: "DA-HW-01",
      areaTitle: "Governance Structure Modernization",
      cfMapping: {
        principleId: 1,
        principleName: "Organisational/Legal Compliance",
        elementId: "1.1",
        elementName: "Governing Document(s) and Review"
      },
      objective: "Update constitution and governance framework",
      actions: [
        "Form constitutional review working group",
        "Benchmark against Sport Wales guidelines",
        "Consult membership on proposed changes",
        "Submit revised constitution for AGM approval"
      ],
      progressStatus: "In Progress",
      progressDetails: "Working group formed, initial draft completed",
      timeframe: "2025 Q2 - 2026 Q1",
      leadPerson: "Chairperson - Gareth Thomas",
      startDate: "2025-04-01",
      endDate: "2026-01-31"
    },
    {
      areaId: "DA-HW-02",
      areaTitle: "Board Development Programme",
      cfMapping: {
        principleId: 2,
        principleName: "People and Cultures", 
        elementId: "2.7",
        elementName: "Board and Employee Training & Development"
      },
      objective: "Enhance board governance capabilities",
      actions: [
        "Conduct skills gap analysis",
        "Develop annual training plan",
        "Implement mentoring scheme",
        "Establish performance evaluation process"
      ],
      progressStatus: "Not Started",
      progressDetails: "",
      timeframe: "2025 Q3 - 2026 Q2",
      leadPerson: "Vice Chair - Sian Davies",
      startDate: "2025-07-01",
      endDate: "2026-06-30"
    }
  ],

  supportRequests: [
    {
      requestId: "SR-HW-001",
      supportArea: "Constitutional Review",
      cfMapping: {
        principleId: 1,
        elementId: "1.1",
        elementName: "Governing Document(s) and Review"
      },
      requestedTimeline: "2025-09",
      context: "Request legal support for constitutional amendments",
      status: "Requested",
      developmentArea: "DA-HW-01",
      gipExcerpt: "Seeking Sport Wales legal team input on proposed constitutional changes"
    },
    {
      requestId: "SR-HW-002",
      supportArea: "Board Training",
      cfMapping: {
        principleId: 2,
        elementId: "2.7",
        elementName: "Board and Employee Training & Development"
      },
      requestedTimeline: "2025-08",
      context: "Request access to governance training resources",
      status: "Requested",
      developmentArea: "DA-HW-02",
      gipExcerpt: "Need access to Sport Wales board development toolkit and training materials"
    }
  ],

  implementationTimeline: {
    timelinePeriod: "2025-04-01 to 2026-06-30",
    activities: [
      {
        activityId: "ACT-HW-01",
        areaTitle: "Governance Structure Modernization",
        activity: "Constitutional review working group formation",
        cfMapping: {
          principleId: 1,
          principleName: "Organisational/Legal Compliance"
        },
        startDate: "2025-04-01",
        endDate: "2025-05-15",
        timeframeOriginal: "Phase 1 - Setup",
        timeframeStandardized: {
          type: "quarter",
          startQuarter: "2025 Q2",
          endQuarter: "2025 Q2"
        },
        milestone: "Working group operational",
        milestoneDate: "2025-05-01",
        status: "Completed",
        statusPercentage: 100,
        leadPerson: "Chairperson - Gareth Thomas",
        dependencies: []
      },
      {
        activityId: "ACT-HW-02",
        areaTitle: "Governance Structure Modernization",
        activity: "Draft constitution consultation",
        cfMapping: {
          principleId: 1,
          principleName: "Organisational/Legal Compliance"
        },
        startDate: "2025-06-01",
        endDate: "2025-08-31",
        timeframeOriginal: "Phase 2 - Consultation",
        timeframeStandardized: {
          type: "range",
          startQuarter: "2025 Q2",
          endQuarter: "2025 Q3"
        },
        milestone: "Consultation report finalized",
        milestoneDate: "2025-09-15",
        status: "In Progress",
        statusPercentage: 30,
        leadPerson: "Company Secretary - Owen Rees",
        dependencies: ["ACT-HW-01"]
      }
    ]
  },

  gipExcerpts: [
    {
      areaTitle: "Governance Structure Modernization",
      text: "Constitutional review working group to include board members and external legal advisor",
      cfMapping: {
        principleId: 1,
        elementId: "1.1"
      },
      section: "Governance Improvement Plan Section 4.2",
      confidence: 0.95
    },
    {
      areaTitle: "Board Development Programme",
      text: "Annual training plan to include financial governance and strategic leadership modules",
      cfMapping: {
        principleId: 2,
        elementId: "2.7"
      },
      section: "Capability Development Priorities",
      confidence: 0.90
    }
  ]
};