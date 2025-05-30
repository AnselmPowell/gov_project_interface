// src/app/data/singlePartnerAnalysis.js

const singlePartnerAnalysis = {
  "angling-cymru": {
    id: "angling-cymru",
    name: "Angling Cymru",
    documentDate: "2025-01-15",
    
    // Framework alignment summary - shows mapping to Capability Framework principles
    frameworkAlignment: [
      {
        principleId: 3,
        principleName: "Insight, Engagement & Strategy",
        focusAreaCount: 1,
        elements: ["3.1 Strategic Plan"],
        implementationStatus: "In Progress",
        completionPercentage: 25,
        gipExcerpts: ["Create a comprehensive, aligned, and forward-looking strategy"],
        improvementTheme: "Strategic Planning"
      },
      {
        principleId: 1,
        principleName: "Organisational/Legal Compliance",
        focusAreaCount: 2,
        elements: ["1.1 Governing Document(s) and Review", "1.8 Policies and Procedures"],
        implementationStatus: "Not Started",
        completionPercentage: 0,
        gipExcerpts: ["Governing document fit for purpose", "New HR Manual compliant & current"],
        improvementTheme: "Governing Document Review"
      }
    ],
    
    // Detailed improvement areas from GIP
    developmentAreas: [
      {
        areaId: "strategic-planning",
        areaTitle: "Strategic Planning",
        improvementTheme: "Strategic Planning",
        cfMapping: {
          principleId: 3,
          principleName: "Insight, Engagement & Strategy",
          elementId: "3.1",
          elementName: "Strategic Plan"
        },
        objective: "Create a comprehensive, aligned, and forward-looking strategy",
        actions: [
          "Formulate the Strategy Team (include board members, executives, and department heads)",
          "Conduct a SWOT analysis to identify strengths, weaknesses, opportunities, and threats",
          "Define vision, mission, and strategic goals",
          "Outline KPIs and success metrics",
          "Gather input from stakeholders (staff, clients, partners)",
          "Draft the strategy document and circulate for feedback",
          "Finalize and approve by board",
          "Roll out the strategy with a communication plan"
        ],
        progressStatus: "In Progress",
        progressDetails: "Strategy fully approved and communicated throughout the organisation",
        timeframe: "July 2025",
        leadPerson: "CEO",
        startDate: "2025-01",
        endDate: "2025-07"
      },
      {
        areaId: "governing-document-review",
        areaTitle: "Governing Document Review",
        improvementTheme: "Governing Document Review",
        cfMapping: {
          principleId: 1,
          principleName: "Organisational/Legal Compliance",
          elementId: "1.1",
          elementName: "Governing Document(s) and Review"
        },
        objective: "Governing document fit for purpose",
        actions: [
          "Set up sub-group (SG) with Terms of Reference and appoint 3 people",
          "SG to mark-up required changes with reasons",
          "Board to review suggested changes",
          "Final document prepared and circulated to members for consultation",
          "AGM notice – special resolution"
        ],
        progressStatus: "Not Started",
        progressDetails: "Changes agreed by members and new governing document circulated",
        timeframe: "May 2025",
        leadPerson: "Company Secretary",
        startDate: "2025-02",
        endDate: "2025-05"
      },
      {
        areaId: "policy-review-development",
        areaTitle: "Policy Review & Development",
        improvementTheme: "Policy Review & Development",
        cfMapping: {
          principleId: 1,
          principleName: "Organisational/Legal Compliance",
          elementId: "1.8",
          elementName: "Policies and Procedures"
        },
        secondaryCfMapping: {
          principleId: 4,
          principleName: "Effectively Run Organisation",
          elementId: "4.8",
          elementName: "Policies and Procedures (Non-Legal)"
        },
        objective: "New HR Manual compliant & current",
        actions: [
          "Confirm person(s) undertaking review",
          "X-ref to new legislation",
          "Consult staff re new holiday process etc."
        ],
        progressStatus: "Not Started",
        progressDetails: "New HR Manual staff training complete",
        timeframe: "August 2025",
        leadPerson: "HR Director",
        startDate: "2025-05",
        endDate: "2025-08"
      }
    ],
    
    // Support requests extracted from GIP
    supportRequests: [
      {
        requestId: "external-consultancy-strategy",
        supportAreaTheme: "External Consultancy Services",
        supportArea: "Strategy consultant",
        cfMapping: {
          principleId: 3,
          elementId: "3.1",
          elementName: "Strategic Plan"
        },
        requestedTimeline: "2025-01",
        context: "External Consultancy Services for strategic planning",
        status: "Requested",
        developmentArea: "Strategic Planning",
        improvementTheme: "Strategic Planning",
        gipExcerpt: "External Consultancy Services"
      },
      {
        requestId: "benchmarking-best-practice-strategy",
        supportAreaTheme: "Benchmarking & Best Practice",
        supportArea: "Benchmarking & Best Practice",
        cfMapping: {
          principleId: 3,
          elementId: "3.1",
          elementName: "Strategic Plan"
        },
        requestedTimeline: "2025-01",
        context: "Benchmarking & Best Practice for strategic planning",
        status: "Requested",
        developmentArea: "Strategic Planning",
        improvementTheme: "Strategic Planning",
        gipExcerpt: "Benchmarking & Best Practice"
      },
      {
        requestId: "facilitation-services-strategy",
        supportAreaTheme: "Facilitation Services",
        supportArea: "Facilitation Services",
        cfMapping: {
          principleId: 3,
          elementId: "3.1",
          elementName: "Strategic Plan"
        },
        requestedTimeline: "2025-01",
        context: "Facilitation Services for strategic planning sessions",
        status: "Requested",
        developmentArea: "Strategic Planning",
        improvementTheme: "Strategic Planning",
        gipExcerpt: "Facilitation Services"
      },
      {
        requestId: "legal-constitutional-advice-gov",
        supportAreaTheme: "Legal & Constitutional Advice",
        supportArea: "Legal & Constitutional Advice",
        cfMapping: {
          principleId: 1,
          elementId: "1.1",
          elementName: "Governing Document(s) and Review"
        },
        requestedTimeline: "2025-02",
        context: "Legal & Constitutional Advice for governing document review",
        status: "Requested",
        developmentArea: "Governing Document Review",
        improvementTheme: "Governing Document Review",
        gipExcerpt: "Legal & Constitutional Advice"
      },
      {
        requestId: "sport-wales-direct-support-gov",
        supportAreaTheme: "Sport Wales Direct Support",
        supportArea: "Sport Wales Direct Support",
        cfMapping: {
          principleId: 1,
          elementId: "1.1",
          elementName: "Governing Document(s) and Review"
        },
        requestedTimeline: "2025-02",
        context: "Sport Wales Direct Support for governing document review",
        status: "Requested",
        developmentArea: "Governing Document Review",
        improvementTheme: "Governing Document Review",
        gipExcerpt: "Sport Wales Direct Support"
      },
      {
        requestId: "templates-toolkits-gov",
        supportAreaTheme: "Templates & Toolkits",
        supportArea: "Templates & Toolkits",
        cfMapping: {
          principleId: 1,
          elementId: "1.1",
          elementName: "Governing Document(s) and Review"
        },
        requestedTimeline: "2025-02",
        context: "Templates & Toolkits for governing document review",
        status: "Requested",
        developmentArea: "Governing Document Review",
        improvementTheme: "Governing Document Review",
        gipExcerpt: "Templates & Toolkits"
      },
      {
        requestId: "specialist-expertise-access-hr",
        supportAreaTheme: "Specialist Expertise Access",
        supportArea: "Specialist Expertise Access",
        cfMapping: {
          principleId: 1,
          elementId: "1.8",
          elementName: "Policies and Procedures"
        },
        requestedTimeline: "2025-05",
        context: "Specialist Expertise Access for HR policy development",
        status: "Requested",
        developmentArea: "Policy Review & Development",
        improvementTheme: "Policy Review & Development",
        gipExcerpt: "Specialist Expertise Access"
      },
      {
        requestId: "legal-constitutional-advice-hr",
        supportAreaTheme: "Legal & Constitutional Advice",
        supportArea: "Legal & Constitutional Advice",
        cfMapping: {
          principleId: 1,
          elementId: "1.8",
          elementName: "Policies and Procedures"
        },
        requestedTimeline: "2025-05",
        context: "Legal & Constitutional Advice for HR policy development",
        status: "Requested",
        developmentArea: "Policy Review & Development",
        improvementTheme: "Policy Review & Development",
        gipExcerpt: "Legal & Constitutional Advice"
      },
      {
        requestId: "templates-toolkits-hr",
        supportAreaTheme: "Templates & Toolkits",
        supportArea: "Templates & Toolkits",
        cfMapping: {
          principleId: 1,
          elementId: "1.8",
          elementName: "Policies and Procedures"
        },
        requestedTimeline: "2025-05",
        context: "Templates & Toolkits for HR policy development",
        status: "Requested",
        developmentArea: "Policy Review & Development",
        improvementTheme: "Policy Review & Development",
        gipExcerpt: "Templates & Toolkits"
      }
    ],
    
    // Implementation timeline with all activities
    implementationTimeline: {
      timelinePeriod: "2025-01-01 to 2025-08-31",
      activities: [
        {
          activityId: "strategy-1",
          areaTitle: "Strategic Planning",
          activity: "Formulate the Strategy Team",
          improvementTheme: "Strategic Planning",
          cfMapping: {
            principleId: 3,
            principleName: "Insight, Engagement & Strategy"
          },
          startDate: "2025-05",
          endDate: "2026-02",
          milestone: "Training to be complete by Sept 2025",
          milestoneDate: "2025-09-30",
          status: "Not Started",
          statusPercentage: 0,
          leadPerson: "EDI manager",
          dependencies: []
        }
      ]
    },
    
    gipExcerpts: [
      {
        areaTitle: "Board Diversity & Gender Parity",
        text: "Align and achieve Sport Wales' target of a gender parity of 60/40",
        improvementTheme: "Board Diversity & Gender Parity",
        cfMapping: {
          principleId: 2,
          elementId: "2.3"
        },
        section: "Improvement Objective",
        confidence: 0.98
      },
      {
        areaTitle: "EDI (Equality, Diversity & Inclusion)",
        text: "All board and executive to engage and attend Guidance workshops",
        improvementTheme: "EDI (Equality, Diversity & Inclusion)",
        cfMapping: {
          principleId: 3,
          elementId: "3.3"
        },
        section: "Improvement Objective",
        confidence: 0.95
      },
      {
        areaTitle: "Board Effectiveness",
        text: "Agenda format to be reviewed and revised",
        improvementTheme: "Board Effectiveness",
        cfMapping: {
          principleId: 4,
          elementId: "4.1"
        },
        section: "Improvement Objective",
        confidence: 0.92
      },
      {
        areaTitle: "Safeguarding Implementation",
        text: "Engage with CPSU to create action plan",
        improvementTheme: "Safeguarding Implementation",
        cfMapping: {
          principleId: 1,
          elementId: "1.2"
        },
        section: "Improvement Objective",
        confidence: 0.98
      }
    ]
  },
  "basketball-wales": {
  id: "basketball-wales",
  name: "Basketball Wales",
  documentDate: "2025-01-20",
  
  frameworkAlignment: [
    {
      principleId: 1,
      principleName: "Organizational/Legal Compliance",
      focusAreaCount: 2,
      elements: ["1.1 Articles of Association", "1.6 Welsh Language Compliance"],
      implementationStatus: "In Progress",
      completionPercentage: 40,
      gipExcerpts: ["Review and update the Articles", "Implement new Welsh Language policy"],
      improvementTheme: "Legal & Constitutional Review"
    },
    {
      principleId: 2,
      principleName: "People and Cultures",
      focusAreaCount: 2,
      elements: ["2.2 Board Composition", "2.4 Board Skills and Diversity"],
      implementationStatus: "In Progress",
      completionPercentage: 30,
      gipExcerpts: ["Update skills audit", "Conduct EDI training", "Board recruitment to be planned"],
      improvementTheme: "Board Development"
    },
    {
      principleId: 3,
      principleName: "Insight, Engagement & Strategy",
      focusAreaCount: 1,
      elements: ["3.1 Strategic Plan", "3.2 Vision and Mission"],
      implementationStatus: "In Progress",
      completionPercentage: 25,
      gipExcerpts: ["Set Vision, Mission and Strategy", "Create appropriate sub-committees"],
      improvementTheme: "Strategic Planning"
    },
    {
      principleId: 4,
      principleName: "Effectively Run Organisation",
      focusAreaCount: 1,
      elements: ["4.3 Risk and Opportunity Management"],
      implementationStatus: "Not Started",
      completionPercentage: 0,
      gipExcerpts: ["Risk Management Strategy to be reviewed and updated"],
      improvementTheme: "Risk Management"
    },
    {
      principleId: 5,
      principleName: "Finance",
      focusAreaCount: 1,
      elements: ["5.11 Long-term Financial Planning", "5.4 Management Accounts"],
      implementationStatus: "In Progress",
      completionPercentage: 35,
      gipExcerpts: ["Financial scenario planning to be explored"],
      improvementTheme: "Financial Planning"
    }
  ],
  
  developmentAreas: [
    {
      areaId: "articles-review-bw",
      areaTitle: "Articles of Association Review",
      improvementTheme: "Legal & Constitutional Review",
      cfMapping: {
        principleId: 1,
        principleName: "Organizational/Legal Compliance",
        elementId: "1.1",
        elementName: "Articles of Association"
      },
      objective: "Review and update the Articles of Association",
      actions: [
        "Produce a detailed review of the Articles",
        "Board to review and approve",
        "AGM to pass new Articles"
      ],
      progressStatus: "In Progress",
      progressDetails: "Board review process initiated, detailed analysis underway",
      timeframe: "By Dec 2026",
      leadPerson: "Chair/CEO",
      startDate: "2025-01",
      endDate: "2026-12"
    },
    {
      areaId: "welsh-language-policy-bw",
      areaTitle: "Welsh Language Policy Implementation",
      improvementTheme: "Legal & Constitutional Review",
      cfMapping: {
        principleId: 1,
        principleName: "Organizational/Legal Compliance",
        elementId: "1.6",
        elementName: "Welsh Language Compliance"
      },
      objective: "Implement new Welsh Language policy",
      actions: [
        "Staff to be upskilled on policy implementation",
        "Policy begin to be implemented",
        "Training may be required"
      ],
      progressStatus: "In Progress",
      progressDetails: "Policy approved, implementation phase beginning",
      timeframe: "By Sept 2025",
      leadPerson: "CEO",
      startDate: "2025-01",
      endDate: "2025-09"
    },
    {
      areaId: "board-skills-development-bw",
      areaTitle: "Board Skills and Diversity Development",
      improvementTheme: "Board Development",
      cfMapping: {
        principleId: 2,
        principleName: "People and Cultures",
        elementId: "2.4",
        elementName: "Board Skills and Diversity"
      },
      objective: "Update skills audit and enhance board diversity",
      actions: [
        "Update skills audit",
        "Conduct EDI training",
        "Board recruitment to be planned"
      ],
      progressStatus: "Planned",
      progressDetails: "Skills audit update scheduled, EDI training being arranged",
      timeframe: "Jun-25",
      leadPerson: "Chair",
      startDate: "2025-02",
      endDate: "2025-06"
    },
    {
      areaId: "board-recruitment-bw",
      areaTitle: "Board Recruitment Process",
      improvementTheme: "Board Development",
      cfMapping: {
        principleId: 2,
        principleName: "People and Cultures",
        elementId: "2.2",
        elementName: "Board Composition"
      },
      objective: "Advertise board roles and expand recruitment reach",
      actions: [
        "Utilise different platforms to expand the advertisements reach",
        "Engage with legal service for the advertisement to be checked",
        "Follow recruitment policy"
      ],
      progressStatus: "Planned",
      progressDetails: "AGM to sign off in July, recruitment process to follow",
      timeframe: "Aug-25",
      leadPerson: "Chair",
      startDate: "2025-07",
      endDate: "2025-08"
    },
    {
      areaId: "strategic-planning-bw",
      areaTitle: "Vision, Mission and Strategy Development",
      improvementTheme: "Strategic Planning",
      cfMapping: {
        principleId: 3,
        principleName: "Insight, Engagement & Strategy",
        elementId: "3.1",
        elementName: "Strategic Plan"
      },
      secondaryCfMapping: {
        principleId: 3,
        elementId: "3.2",
        elementName: "Vision and Mission"
      },
      objective: "Set Vision, Mission and Strategy",
      actions: [
        "Create appropriate sub-committees",
        "Engage in strategy away day",
        "Consult with membership"
      ],
      progressStatus: "In Progress",
      progressDetails: "Strategic planning process initiated, sub-committee structure under development",
      timeframe: "End of year",
      leadPerson: "CEO",
      startDate: "2025-01",
      endDate: "2025-12"
    },
    {
      areaId: "risk-management-bw",
      areaTitle: "Risk Management Strategy",
      improvementTheme: "Risk Management",
      cfMapping: {
        principleId: 4,
        principleName: "Effectively Run Organisation",
        elementId: "4.3",
        elementName: "Risk and Opportunity Management"
      },
      objective: "Review and update Risk Management Strategy",
      actions: [
        "Strategy to be reviewed and updated",
        "Board and exec to receive training from Sport Wales consultants",
        "Audit and Risk committee to advice and lead"
      ],
      progressStatus: "Planned",
      progressDetails: "To begin July 2025, Sport Wales consultant training arranged",
      timeframe: "Apr-26",
      leadPerson: "Chair and Audit and Risk Committee",
      startDate: "2025-07",
      endDate: "2026-04"
    },
    {
      areaId: "financial-planning-bw",
      areaTitle: "Financial Scenario Planning",
      improvementTheme: "Financial Planning",
      cfMapping: {
        principleId: 5,
        principleName: "Finance",
        elementId: "5.11",
        elementName: "Long-term Financial Planning"
      },
      secondaryCfMapping: {
        principleId: 5,
        elementId: "5.4",
        elementName: "Management Accounts"
      },
      objective: "Explore financial scenario planning",
      actions: [
        "Utilise support of WSA or Sport Wales to upskill finance sub-committee",
        "Implement robust financial scenario planning",
        "Utilise software if available (EG. XERO)",
        "Produce reports for each board meeting"
      ],
      progressStatus: "In Progress",
      progressDetails: "Finance sub-committee upskilling in progress, software evaluation underway",
      timeframe: "End of financial year",
      leadPerson: "Finance Director",
      startDate: "2025-01",
      endDate: "2025-12"
    }
  ],
  
  supportRequests: [
    {
      requestId: "legal-constitutional-advice-articles-bw",
      supportAreaTheme: "Legal & Constitutional Advice",
      supportArea: "Legal & Constitutional Advice",
      cfMapping: {
        principleId: 1,
        elementId: "1.1",
        elementName: "Articles of Association"
      },
      requestedTimeline: "2025-03",
      context: "Legal & Constitutional Advice for Articles of Association review and update",
      status: "Requested",
      developmentArea: "Articles of Association Review",
      improvementTheme: "Legal & Constitutional Review",
      gipExcerpt: "Board to review and approve AGM to pass new Articles"
    },
    {
      requestId: "training-workshops-welsh-language-bw",
      supportAreaTheme: "Training & Workshops",
      supportArea: "Training & Workshops",
      cfMapping: {
        principleId: 1,
        elementId: "1.6",
        elementName: "Welsh Language Compliance"
      },
      requestedTimeline: "2025-02",
      context: "Training & Workshops for Welsh Language policy implementation",
      status: "Requested",
      developmentArea: "Welsh Language Policy Implementation",
      improvementTheme: "Legal & Constitutional Review",
      gipExcerpt: "staff to be upskills and policy begin to be implemented. Training may be required"
    },
    {
      requestId: "training-workshops-edi-bw",
      supportAreaTheme: "Training & Workshops",
      supportArea: "Training & Workshops",
      cfMapping: {
        principleId: 2,
        elementId: "2.4",
        elementName: "Board Skills and Diversity"
      },
      requestedTimeline: "2025-04",
      context: "Training & Workshops for EDI board training",
      status: "Requested",
      developmentArea: "Board Skills and Diversity Development",
      improvementTheme: "Board Development",
      gipExcerpt: "Conduct EDI training"
    },
    {
      requestId: "legal-constitutional-advice-recruitment-bw",
      supportAreaTheme: "Legal & Constitutional Advice",
      supportArea: "Legal & Constitutional Advice",
      cfMapping: {
        principleId: 2,
        elementId: "2.2",
        elementName: "Board Composition"
      },
      requestedTimeline: "2025-07",
      context: "Legal & Constitutional Advice for board recruitment advertisements",
      status: "Requested",
      developmentArea: "Board Recruitment Process",
      improvementTheme: "Board Development",
      gipExcerpt: "Engage with legal service for the advertisement to be checked"
    },
    {
      requestId: "facilitation-services-strategy-bw",
      supportAreaTheme: "Facilitation Services",
      supportArea: "Facilitation Services",
      cfMapping: {
        principleId: 3,
        elementId: "3.1",
        elementName: "Strategic Plan"
      },
      requestedTimeline: "2025-06",
      context: "Facilitation Services for strategy away day and membership consultation",
      status: "Requested",
      developmentArea: "Vision, Mission and Strategy Development",
      improvementTheme: "Strategic Planning",
      gipExcerpt: "Engage in strategy away day Consult with membership"
    },
    {
      requestId: "specialist-expertise-access-risk-bw",
      supportAreaTheme: "Specialist Expertise Access",
      supportArea: "Specialist Expertise Access",
      cfMapping: {
        principleId: 4,
        elementId: "4.3",
        elementName: "Risk and Opportunity Management"
      },
      requestedTimeline: "2025-07",
      context: "Specialist Expertise Access through Sport Wales consultants for risk management training",
      status: "Requested",
      developmentArea: "Risk Management Strategy",
      improvementTheme: "Risk Management",
      gipExcerpt: "Board and exec to receive training from Sport Wales consultants"
    },
    {
      requestId: "training-workshops-financial-bw",
      supportAreaTheme: "Training & Workshops",
      supportArea: "Training & Workshops",
      cfMapping: {
        principleId: 5,
        elementId: "5.11",
        elementName: "Long-term Financial Planning"
      },
      requestedTimeline: "2025-03",
      context: "Training & Workshops for finance sub-committee upskilling in financial scenario planning",
      status: "Requested",
      developmentArea: "Financial Scenario Planning",
      improvementTheme: "Financial Planning",
      gipExcerpt: "Utilise support of WSA or Sport Wales to upskil finance sub-committee"
    },
    {
      requestId: "technology-digital-solutions-financial-bw",
      supportAreaTheme: "Technology & Digital Solutions",
      supportArea: "Technology & Digital Solutions",
      cfMapping: {
        principleId: 5,
        elementId: "5.4",
        elementName: "Management Accounts"
      },
      requestedTimeline: "2025-04",
      context: "Technology & Digital Solutions for financial software implementation (XERO)",
      status: "Requested",
      developmentArea: "Financial Scenario Planning",
      improvementTheme: "Financial Planning",
      gipExcerpt: "Utilise software if available (EG. XERO)"
    }
  ],
  
  implementationTimeline: {
    timelinePeriod: "2025-01-01 to 2026-12-31",
    activities: [
      {
        activityId: "articles-review-1-bw",
        areaTitle: "Articles of Association Review",
        activity: "Produce detailed review of Articles",
        improvementTheme: "Legal & Constitutional Review",
        cfMapping: {
          principleId: 1,
          principleName: "Organizational/Legal Compliance"
        },
        startDate: "2025-01",
        endDate: "2026-12",
        milestone: "Board review and AGM approval",
        milestoneDate: "2026-07-01",
        status: "In Progress",
        statusPercentage: 40,
        leadPerson: "Chair/CEO",
        dependencies: []
      },
      {
        activityId: "welsh-language-1-bw",
        areaTitle: "Welsh Language Policy Implementation",
        activity: "Staff upskilling and policy implementation",
        improvementTheme: "Legal & Constitutional Review",
        cfMapping: {
          principleId: 1,
          principleName: "Organizational/Legal Compliance"
        },
        startDate: "2025-01",
        endDate: "2025-09",
        milestone: "Staff training completion",
        milestoneDate: "2025-06-01",
        status: "In Progress",
        statusPercentage: 30,
        leadPerson: "CEO",
        dependencies: []
      },
      {
        activityId: "board-skills-1-bw",
        areaTitle: "Board Skills and Diversity Development",
        activity: "Update skills audit and conduct EDI training",
        improvementTheme: "Board Development",
        cfMapping: {
          principleId: 2,
          principleName: "People and Cultures"
        },
        startDate: "2025-02",
        endDate: "2025-06",
        milestone: "Skills audit completion",
        milestoneDate: "2025-04-01",
        status: "Planned",
        statusPercentage: 10,
        leadPerson: "Chair",
        dependencies: []
      },
      {
        activityId: "board-recruitment-1-bw",
        areaTitle: "Board Recruitment Process",
        activity: "Advertise board roles with expanded reach",
        improvementTheme: "Board Development",
        cfMapping: {
          principleId: 2,
          principleName: "People and Cultures"
        },
        startDate: "2025-07",
        endDate: "2025-08",
        milestone: "AGM sign-off and advertisement launch",
        milestoneDate: "2025-07-15",
        status: "Planned",
        statusPercentage: 0,
        leadPerson: "Chair",
        dependencies: ["board-skills-1-bw"]
      },
      {
        activityId: "strategic-planning-1-bw",
        areaTitle: "Vision, Mission and Strategy Development",
        activity: "Create sub-committees and strategy away day",
        improvementTheme: "Strategic Planning",
        cfMapping: {
          principleId: 3,
          principleName: "Insight, Engagement & Strategy"
        },
        startDate: "2025-01",
        endDate: "2025-12",
        milestone: "Strategy away day completion",
        milestoneDate: "2025-08-01",
        status: "In Progress",
        statusPercentage: 25,
        leadPerson: "CEO",
        dependencies: []
      },
      {
        activityId: "risk-management-1-bw",
        areaTitle: "Risk Management Strategy",
        activity: "Review and update risk management framework",
        improvementTheme: "Risk Management",
        cfMapping: {
          principleId: 4,
          principleName: "Effectively Run Organisation"
        },
        startDate: "2025-07",
        endDate: "2026-04",
        milestone: "Sport Wales consultant training",
        milestoneDate: "2025-09-01",
        status: "Planned",
        statusPercentage: 0,
        leadPerson: "Chair and Audit and Risk Committee",
        dependencies: []
      },
      {
        activityId: "financial-planning-1-bw",
        areaTitle: "Financial Scenario Planning",
        activity: "Upskill finance committee and implement planning",
        improvementTheme: "Financial Planning",
        cfMapping: {
          principleId: 5,
          principleName: "Finance"
        },
        startDate: "2025-01",
        endDate: "2025-12",
        milestone: "Finance committee training completion",
        milestoneDate: "2025-05-01",
        status: "In Progress",
        statusPercentage: 35,
        leadPerson: "Finance Director",
        dependencies: []
      }
    ]
  },
  
  gipExcerpts: [
    {
      areaTitle: "Articles of Association Review",
      text: "Review and update the Articles - Produce a detailed review of the Articles Board to review and approve AGM to pass new Articles",
      improvementTheme: "Legal & Constitutional Review",
      cfMapping: {
        principleId: 1,
        elementId: "1.1"
      },
      section: "Improvement Action",
      confidence: 0.98
    },
    {
      areaTitle: "Welsh Language Policy Implementation",
      text: "Implement new Welsh Language policy - staff to be upskills and policy begin to be implemented. Training may be required",
      improvementTheme: "Legal & Constitutional Review",
      cfMapping: {
        principleId: 1,
        elementId: "1.6"
      },
      section: "Improvement Action",
      confidence: 0.95
    },
    {
      areaTitle: "Board Skills and Diversity Development",
      text: "Update skills audit Conduct EDI training Board recruitment to be planned",
      improvementTheme: "Board Development",
      cfMapping: {
        principleId: 2,
        elementId: "2.4"
      },
      section: "Improvement Action",
      confidence: 0.94
    },
    {
      areaTitle: "Vision, Mission and Strategy Development",
      text: "Set Vision, Mission and Strategy Create appropriate sub-committees Engage in strategy away day Consult with membership",
      improvementTheme: "Strategic Planning",
      cfMapping: {
        principleId: 3,
        elementId: "3.1"
      },
      section: "Improvement Action",
      confidence: 0.96
    },
    {
      areaTitle: "Risk Management Strategy",
      text: "Risk Management Strategy to be reviewed and updated Board and exec to receive training from Sport Wales consultants",
      improvementTheme: "Risk Management",
      cfMapping: {
        principleId: 4,
        elementId: "4.3"
      },
      section: "Improvement Action",
      confidence: 0.97
    },
    {
      areaTitle: "Financial Scenario Planning",
      text: "Financial scenario planning to be explored. Utilise support of WSA or Sport Wales to upskil finance sub-committee",
      improvementTheme: "Financial Planning",
      cfMapping: {
        principleId: 5,
        elementId: "5.11"
      },
      section: "Improvement Action",
      confidence: 0.93
    }
  ]
},


  // hello

  "badminton-wales": {
    id: "badminton-wales",
    name: "Badminton Wales",
    documentDate: "2025-01-25",
    
    frameworkAlignment: [
      {
        principleId: 2,
        principleName: "People and Cultures",
        focusAreaCount: 1,
        elements: ["2.3 Directors Recruitment/Appointment", "2.5 Board/Committee Terms of Office & Composition"],
        implementationStatus: "Not Started",
        completionPercentage: 0,
        gipExcerpts: ["Align and achieve Sport Wales' target of a gender parity of 60/40"],
        improvementTheme: "Board Diversity & Gender Parity"
      },
      {
        principleId: 3,
        principleName: "Insight, Engagement & Strategy",
        focusAreaCount: 1,
        elements: ["3.3 EDI (Equality, Diversity & Inclusion)"],
        implementationStatus: "Not Started",
        completionPercentage: 0,
        gipExcerpts: ["All board and executive to engage and attend Guidance workshops"],
        improvementTheme: "EDI (Equality, Diversity & Inclusion)"
      },
      {
        principleId: 4,
        principleName: "Effectively Run Organisation",
        focusAreaCount: 1,
        elements: ["4.1 Effective Meetings"],
        implementationStatus: "Not Started",
        completionPercentage: 0,
        gipExcerpts: ["Agenda format to be reviewed and revised"],
        improvementTheme: "Board Effectiveness"
      },
      {
        principleId: 1,
        principleName: "Organisational/Legal Compliance",
        focusAreaCount: 1,
        elements: ["1.2 Safeguarding Children and Adults"],
        implementationStatus: "Not Started",
        completionPercentage: 0,
        gipExcerpts: ["Engage with CPSU to create action plan"],
        improvementTheme: "Safeguarding Implementation"
      }
    ],
    
    developmentAreas: [
      {
        areaId: "board-diversity-gender-parity",
        areaTitle: "Board Diversity & Gender Parity",
        improvementTheme: "Board Diversity & Gender Parity",
        cfMapping: {
          principleId: 2,
          principleName: "People and Cultures",
          elementId: "2.3",
          elementName: "Directors Recruitment/Appointment"
        },
        secondaryCfMapping: {
          principleId: 2,
          elementId: "2.5",
          elementName: "Board/Committee Terms of Office & Composition"
        },
        objective: "Align and achieve Sport Wales' target of a gender parity of 60/40, Conduct skills audit to ensure board is skilled, balanced and diverse, Review Articles to ensure recruitment and terms of board director are fit for purpose",
        actions: [
          "Align and achieve Sport Wales' target of a gender parity of 60/40",
          "Conduct skills audit to ensure board is skilled, balanced and diverse",
          "Review Articles to ensure recruitment and terms of board director are fit for purpose"
        ],
        progressStatus: "Not Started",
        progressDetails: "Board directors need to be engaged, CEO to facilitate",
        timeframe: "July 2025",
        leadPerson: "Chair",
        startDate: "2025-02",
        endDate: "2025-07"
      },
      {
        areaId: "edi-equality-diversity-inclusion",
        areaTitle: "EDI (Equality, Diversity & Inclusion)",
        improvementTheme: "EDI (Equality, Diversity & Inclusion)",
        cfMapping: {
          principleId: 3,
          principleName: "Insight, Engagement & Strategy",
          elementId: "3.3",
          elementName: "EDI (Equality, Diversity & Inclusion)"
        },
        objective: "All board and executive to engage and attend Guidance workshops, Consultation with members, Policy creation, Policy approval, Policy outreach",
        actions: [
          "All board and executive to engage and attend Guidance workshops",
          "Consultation with members",
          "Policy creation",
          "Policy approval",
          "Policy outreach"
        ],
        progressStatus: "Not Started",
        progressDetails: "Transgender policy to be created",
        timeframe: "February 2026",
        leadPerson: "EDI manager",
        startDate: "2025-05",
        endDate: "2026-02"
      },
      {
        areaId: "board-effectiveness",
        areaTitle: "Board Effectiveness",
        improvementTheme: "Board Effectiveness",
        cfMapping: {
          principleId: 4,
          principleName: "Effectively Run Organisation",
          elementId: "4.1",
          elementName: "Effective Meetings"
        },
        objective: "Agenda format to be reviewed and revised, Board directors to complete survey feedback, Reflective away day for board",
        actions: [
          "Agenda format to be reviewed and revised",
          "Board directors to complete survey feedback",
          "Reflective away day for board"
        ],
        progressStatus: "Not Started",
        progressDetails: "Board meetings to become more effective",
        timeframe: "September 2025",
        leadPerson: "Chair",
        startDate: "2025-03",
        endDate: "2025-09"
      },
      {
        areaId: "safeguarding-implementation",
        areaTitle: "Safeguarding Implementation",
        improvementTheme: "Safeguarding Implementation",
        cfMapping: {
          principleId: 1,
          principleName: "Organisational/Legal Compliance",
          elementId: "1.2",
          elementName: "Safeguarding Children and Adults"
        },
        objective: "Engage with CPSU to create action plan, Outreach action plan, Attend panel assessment",
        actions: [
          "Engage with CPSU to create action plan",
          "Outreach action plan",
          "Attend panel assessment"
        ],
        progressStatus: "Not Started",
        progressDetails: "Achieve Level 2 Safeguarding",
        timeframe: "March 2025",
        leadPerson: "Safeguarding lead",
        startDate: "2025-01",
        endDate: "2025-03"
      }
    ],
    
    supportRequests: [
      {
        requestId: "benchmarking-best-practice-board",
        supportAreaTheme: "Benchmarking & Best Practice",
        supportArea: "Benchmarking & Best Practice",
        cfMapping: {
          principleId: 2,
          elementId: "2.3",
          elementName: "Directors Recruitment/Appointment"
        },
        requestedTimeline: "2025-02",
        context: "Benchmarking & Best Practice for board diversity initiatives",
        status: "Requested",
        developmentArea: "Board Diversity & Gender Parity",
        improvementTheme: "Board Diversity & Gender Parity",
        gipExcerpt: "Benchmarking & Best Practice"
      },
      {
        requestId: "facilitation-services-board",
        supportAreaTheme: "Facilitation Services",
        supportArea: "Facilitation Services",
        cfMapping: {
          principleId: 2,
          elementId: "2.3",
          elementName: "Directors Recruitment/Appointment"
        },
        requestedTimeline: "2025-02",
        context: "Facilitation Services for board engagement sessions",
        status: "Requested",
        developmentArea: "Board Diversity & Gender Parity",
        improvementTheme: "Board Diversity & Gender Parity",
        gipExcerpt: "Facilitation Services"
      },
      {
        requestId: "legal-constitutional-advice-board",
        supportAreaTheme: "Legal & Constitutional Advice",
        supportArea: "Legal & Constitutional Advice",
        cfMapping: {
          principleId: 2,
          elementId: "2.3",
          elementName: "Directors Recruitment/Appointment"
        },
        requestedTimeline: "2025-02",
        context: "Legal & Constitutional Advice for articles review",
        status: "Requested",
        developmentArea: "Board Diversity & Gender Parity",
        improvementTheme: "Board Diversity & Gender Parity",
        gipExcerpt: "Legal & Constitutional Advice"
      },
      {
        requestId: "translation-communication-services-edi",
        supportAreaTheme: "Translation & Communication Services",
        supportArea: "Translation & Communication Services",
        cfMapping: {
          principleId: 3,
          elementId: "3.3",
          elementName: "EDI (Equality, Diversity & Inclusion)"
        },
        requestedTimeline: "2025-05",
        context: "Translation & Communication Services for EDI policy development",
        status: "Requested",
        developmentArea: "EDI (Equality, Diversity & Inclusion)",
        improvementTheme: "EDI (Equality, Diversity & Inclusion)",
        gipExcerpt: "Translation & Communication Services"
      },
      {
        requestId: "legal-constitutional-advice-edi",
        supportAreaTheme: "Legal & Constitutional Advice",
        supportArea: "Legal & Constitutional Advice",
        cfMapping: {
          principleId: 3,
          elementId: "3.3",
          elementName: "EDI (Equality, Diversity & Inclusion)"
        },
        requestedTimeline: "2025-05",
        context: "Legal & Constitutional Advice for EDI policy creation",
        status: "Requested",
        developmentArea: "EDI (Equality, Diversity & Inclusion)",
        improvementTheme: "EDI (Equality, Diversity & Inclusion)",
        gipExcerpt: "Legal & Constitutional Advice"
      },
      {
        requestId: "specialist-expertise-access-edi",
        supportAreaTheme: "Specialist Expertise Access",
        supportArea: "Specialist Expertise Access",
        cfMapping: {
          principleId: 3,
          elementId: "3.3",
          elementName: "EDI (Equality, Diversity & Inclusion)"
        },
        requestedTimeline: "2025-05",
        context: "Specialist Expertise Access for EDI guidance workshops",
        status: "Requested",
        developmentArea: "EDI (Equality, Diversity & Inclusion)",
        improvementTheme: "EDI (Equality, Diversity & Inclusion)",
        gipExcerpt: "Specialist Expertise Access"
      },
      {
        requestId: "templates-toolkits-board-effectiveness",
        supportAreaTheme: "Templates & Toolkits",
        supportArea: "Templates & Toolkits",
        cfMapping: {
          principleId: 4,
          elementId: "4.1",
          elementName: "Effective Meetings"
        },
        requestedTimeline: "2025-03",
        context: "Templates & Toolkits for agenda format review",
        status: "Requested",
        developmentArea: "Board Effectiveness",
        improvementTheme: "Board Effectiveness",
        gipExcerpt: "Templates & Toolkits"
      },
      {
        requestId: "facilitation-services-board-effectiveness",
        supportAreaTheme: "Facilitation Services",
        supportArea: "Facilitation Services",
        cfMapping: {
          principleId: 4,
          elementId: "4.1",
          elementName: "Effective Meetings"
        },
        requestedTimeline: "2025-06",
        context: "Facilitation Services for board away day",
        status: "Requested",
        developmentArea: "Board Effectiveness",
        improvementTheme: "Board Effectiveness",
        gipExcerpt: "Facilitation Services"
      },
      {
        requestId: "external-validation-assessment-board",
        supportAreaTheme: "External Validation & Assessment",
        supportArea: "External Validation & Assessment",
        cfMapping: {
          principleId: 4,
          elementId: "4.1",
          elementName: "Effective Meetings"
        },
        requestedTimeline: "2025-06",
        context: "External Validation & Assessment for board effectiveness review",
        status: "Requested",
        developmentArea: "Board Effectiveness",
        improvementTheme: "Board Effectiveness",
        gipExcerpt: "External Validation & Assessment"
      },
      {
        requestId: "specialist-expertise-access-safeguarding",
        supportAreaTheme: "Specialist Expertise Access",
        supportArea: "Specialist Expertise Access",
        cfMapping: {
          principleId: 1,
          elementId: "1.2",
          elementName: "Safeguarding Children and Adults"
        },
        requestedTimeline: "2025-01",
        context: "Specialist Expertise Access for CPSU engagement",
        status: "Requested",
        developmentArea: "Safeguarding Implementation",
        improvementTheme: "Safeguarding Implementation",
        gipExcerpt: "Specialist Expertise Access"
      },
      {
        requestId: "external-validation-assessment-safeguarding",
        supportAreaTheme: "External Validation & Assessment",
        supportArea: "External Validation & Assessment",
        cfMapping: {
          principleId: 1,
          elementId: "1.2",
          elementName: "Safeguarding Children and Adults"
        },
        requestedTimeline: "2025-03",
        context: "External Validation & Assessment for safeguarding panel assessment",
        status: "Requested",
        developmentArea: "Safeguarding Implementation",
        improvementTheme: "Safeguarding Implementation",
        gipExcerpt: "External Validation & Assessment"
      },
      {
        requestId: "training-workshops-safeguarding",
        supportAreaTheme: "Training & Workshops",
        supportArea: "Training & Workshops",
        cfMapping: {
          principleId: 1,
          elementId: "1.2",
          elementName: "Safeguarding Children and Adults"
        },
        requestedTimeline: "2025-01",
        context: "Training & Workshops for safeguarding implementation",
        status: "Requested",
        developmentArea: "Safeguarding Implementation",
        improvementTheme: "Safeguarding Implementation",
        gipExcerpt: "Training & Workshops"
      }
    ],
    
    implementationTimeline: {
      timelinePeriod: "2025-01-01 to 2026-02-28",
      activities: [
        {
          activityId: "safeguarding-1",
          areaTitle: "Safeguarding Implementation",
          activity: "Engage with CPSU and create action plan",
          improvementTheme: "Safeguarding Implementation",
          cfMapping: {
            principleId: 1,
            principleName: "Organisational/Legal Compliance"
          },
          startDate: "2025-01",
          endDate: "2025-03",
          milestone: "Panel to take place in Feb 2026",
          milestoneDate: "2026-02-15",
          status: "Not Started",
          statusPercentage: 0,
          leadPerson: "Safeguarding lead",
          dependencies: []
        },
        {
          activityId: "board-diversity-1",
          areaTitle: "Board Diversity & Gender Parity",
          activity: "Board engagement and skills audit",
          improvementTheme: "Board Diversity & Gender Parity",
          cfMapping: {
            principleId: 2,
            principleName: "People and Cultures"
          },
          startDate: "2025-02",
          endDate: "2025-07",
          milestone: "Board to engage in skills audit by 2 months",
          milestoneDate: "2025-04-30",
          status: "Not Started",
          statusPercentage: 0,
          leadPerson: "Chair",
          dependencies: []
        },
        {
          activityId: "board-effectiveness-1",
          areaTitle: "Board Effectiveness",
          activity: "Review agenda format and gather feedback",
          improvementTheme: "Board Effectiveness",
          cfMapping: {
            principleId: 4,
            principleName: "Effectively Run Organisation"
          },
          startDate: "2025-03",
          endDate: "2025-09",
          milestone: "Surveys to be complete by June 2025",
          milestoneDate: "2025-06-30",
          status: "Not Started",
          statusPercentage: 0,
          leadPerson: "Chair",
          dependencies: []
        },
        {
          activityId: "edi-1",
          areaTitle: "EDI (Equality, Diversity & Inclusion)",
          activity: "Board and executive guidance workshops",
          improvementTheme: "EDI (Equality, Diversity & Inclusion)",
          cfMapping: {
            principleId: 3,
            principleName: "Insight, Engagement & Strategy"
          },
          startDate: "2025-05",
          endDate: "2026-02",
          milestone: "Training to be complete by Sept 2025",
          milestoneDate: "2025-09-30",
          status: "Not Started",
          statusPercentage: 0,
          leadPerson: "EDI manager",
          dependencies: []
        }
      ]
    },
    
    gipExcerpts: [
      {
        areaTitle: "Board Diversity & Gender Parity",
        text: "Align and achieve Sport Wales' target of a gender parity of 60/40",
        improvementTheme: "Board Diversity & Gender Parity",
        cfMapping: {
          principleId: 2,
          elementId: "2.3"
        },
        section: "Improvement Objective",
        confidence: 0.98
      },
      {
        areaTitle: "EDI (Equality, Diversity & Inclusion)",
        text: "All board and executive to engage and attend Guidance workshops",
        improvementTheme: "EDI (Equality, Diversity & Inclusion)",
        cfMapping: {
          principleId: 3,
          elementId: "3.3"
        },
        section: "Improvement Objective",
        confidence: 0.95
      },
      {
        areaTitle: "Board Effectiveness",
        text: "Agenda format to be reviewed and revised",
        improvementTheme: "Board Effectiveness",
        cfMapping: {
          principleId: 4,
          elementId: "4.1"
        },
        section: "Improvement Objective",
        confidence: 0.92
      },
      {
        areaTitle: "Safeguarding Implementation",
        text: "Engage with CPSU to create action plan",
        improvementTheme: "Safeguarding Implementation",
        cfMapping: {
          principleId: 1,
          elementId: "1.2"
        },
        section: "Improvement Objective",
        confidence: 0.98
      }
    ]
  },

  "bowls-wales": {
  id: "bowls-wales",
  name: "Bowls Wales",
  documentDate: "2025-01-20",
  
  frameworkAlignment: [
    {
      principleId: 2,
      principleName: "People and Cultures",
      focusAreaCount: 2,
      elements: ["2.3 Directors Recruitment/Appointment", "2.5 Board/Committee Terms of Office & Composition"],
      implementationStatus: "In Progress",
      completionPercentage: 20,
      gipExcerpts: ["Transform board composition to reflect Wales' diverse communities and achieve 50/50 gender balance"],
      improvementTheme: "Board Diversity & Gender Parity"
    },
    {
      principleId: 4,
      principleName: "Effectively Run Organisation",
      focusAreaCount: 1,
      elements: ["4.7 Welsh Language"],
      implementationStatus: "In Progress",
      completionPercentage: 15,
      gipExcerpts: ["Establish comprehensive bilingual governance reflecting Wales' linguistic heritage"],
      improvementTheme: "Welsh Language Integration"
    },
    {
      principleId: 3,
      principleName: "Insight, Engagement & Strategy",
      focusAreaCount: 2,
      elements: ["3.6 Performance Monitoring", "3.7 Stakeholder Mapping"],
      implementationStatus: "In Progress",
      completionPercentage: 25,
      gipExcerpts: ["Establish evidence-based performance measurement framework", "Strengthen engagement with grassroots clubs"],
      improvementTheme: "Performance Monitoring"
    }
  ],
  
  developmentAreas: [
    {
      areaId: "board-diversity-gender-parity-bw",
      areaTitle: "Board Diversity & Gender Parity",
      improvementTheme: "Board Diversity & Gender Parity",
      cfMapping: {
        principleId: 2,
        principleName: "People and Cultures",
        elementId: "2.3",
        elementName: "Directors Recruitment/Appointment"
      },
      secondaryCfMapping: {
        principleId: 2,
        elementId: "2.5",
        elementName: "Board/Committee Terms of Office & Composition"
      },
      objective: "Transform board composition to reflect Wales' diverse communities and achieve 50/50 gender balance",
      actions: [
        "Conduct comprehensive demographic audit of current board",
        "Map community representation gaps across Wales",
        "Develop targeted recruitment strategy for underrepresented groups",
        "Review constitutional barriers to diverse participation",
        "Implement mentoring programme for emerging leaders",
        "Monitor progress against diversity targets"
      ],
      progressStatus: "In Progress",
      progressDetails: "Current board 71% male, 89% over 50. Community mapping initiated across all council areas.",
      timeframe: "October 2025",
      leadPerson: "CEO & Nominations Chair",
      startDate: "2025-01",
      endDate: "2025-10"
    },
    {
      areaId: "welsh-language-integration-bw",
      areaTitle: "Welsh Language Integration",
      improvementTheme: "Welsh Language Integration",
      cfMapping: {
        principleId: 4,
        principleName: "Effectively Run Organisation",
        elementId: "4.7",
        elementName: "Welsh Language"
      },
      objective: "Establish comprehensive bilingual governance reflecting Wales' linguistic heritage",
      actions: [
        "Audit current Welsh language provision in governance materials",
        "Assess board and committee Welsh language capacity",
        "Create bilingual governance documentation standards",
        "Recruit Welsh-speaking governance volunteers",
        "Develop Welsh language community engagement strategy",
        "Partner with Welsh-medium community groups"
      ],
      progressStatus: "In Progress",
      progressDetails: "Initial assessment shows 18% Welsh language governance content. Recruitment campaign planned for autumn.",
      timeframe: "December 2025",
      leadPerson: "Communications Manager & Board Champion",
      startDate: "2025-02",
      endDate: "2025-12"
    },
    {
      areaId: "performance-monitoring-bw",
      areaTitle: "Performance Monitoring",
      improvementTheme: "Performance Monitoring",
      cfMapping: {
        principleId: 3,
        principleName: "Insight, Engagement & Strategy",
        elementId: "3.6",
        elementName: "Performance Monitoring"
      },
      objective: "Establish evidence-based performance measurement framework aligned with Sport Wales priorities",
      actions: [
        "Define sport-specific governance performance indicators",
        "Create baseline measurements for all operational areas",
        "Develop quarterly reporting mechanisms",
        "Establish member satisfaction monitoring systems",
        "Link performance data to strategic decision-making",
        "Create public accountability reporting"
      ],
      progressStatus: "In Progress",
      progressDetails: "Performance framework workshop completed. Member satisfaction survey pilot launched with 34% response rate.",
      timeframe: "September 2025",
      leadPerson: "Performance Director & Company Secretary",
      startDate: "2025-01",
      endDate: "2025-09"
    },
    {
      areaId: "stakeholder-engagement-bw",
      areaTitle: "Stakeholder Engagement",
      improvementTheme: "Stakeholder Engagement",
      cfMapping: {
        principleId: 3,
        principleName: "Insight, Engagement & Strategy",
        elementId: "3.7",
        elementName: "Stakeholder Mapping"
      },
      objective: "Strengthen engagement with grassroots clubs and recreational participants across Wales",
      actions: [
        "Map all community stakeholder groups and interests",
        "Establish regional consultation mechanisms",
        "Create club representative advisory panels",
        "Develop digital engagement platforms",
        "Implement feedback and response protocols",
        "Build partnerships with local authorities"
      ],
      progressStatus: "In Progress",
      progressDetails: "47 clubs surveyed on governance needs. Regional meetings scheduled for Q2. Digital consultation platform procurement initiated.",
      timeframe: "November 2025",
      leadPerson: "Community Development Manager",
      startDate: "2025-02",
      endDate: "2025-11"
    }
  ],
  
  supportRequests: [
    {
      requestId: "specialist-expertise-access-board-diversity-bw",
      supportAreaTheme: "Specialist Expertise Access",
      supportArea: "Specialist Expertise Access",
      cfMapping: {
        principleId: 2,
        elementId: "2.3",
        elementName: "Directors Recruitment/Appointment"
      },
      requestedTimeline: "2025-02",
      context: "Specialist Expertise Access for demographic audit and diversity strategy",
      status: "Requested",
      developmentArea: "Board Diversity & Gender Parity",
      improvementTheme: "Board Diversity & Gender Parity",
      gipExcerpt: "Specialist Expertise Access"
    },
    {
      requestId: "benchmarking-best-practice-board-diversity-bw",
      supportAreaTheme: "Benchmarking & Best Practice",
      supportArea: "Benchmarking & Best Practice",
      cfMapping: {
        principleId: 2,
        elementId: "2.3",
        elementName: "Directors Recruitment/Appointment"
      },
      requestedTimeline: "2025-03",
      context: "Benchmarking & Best Practice for board diversity initiatives",
      status: "Requested",
      developmentArea: "Board Diversity & Gender Parity",
      improvementTheme: "Board Diversity & Gender Parity",
      gipExcerpt: "Benchmarking & Best Practice"
    },
    {
      requestId: "mentoring-peer-support-board-diversity-bw",
      supportAreaTheme: "Mentoring & Peer Support",
      supportArea: "Mentoring & Peer Support",
      cfMapping: {
        principleId: 2,
        elementId: "2.3",
        elementName: "Directors Recruitment/Appointment"
      },
      requestedTimeline: "2025-06",
      context: "Mentoring & Peer Support for emerging leaders programme",
      status: "Requested",
      developmentArea: "Board Diversity & Gender Parity",
      improvementTheme: "Board Diversity & Gender Parity",
      gipExcerpt: "Mentoring & Peer Support"
    },
    {
      requestId: "translation-communication-services-welsh-bw",
      supportAreaTheme: "Translation & Communication Services",
      supportArea: "Translation & Communication Services",
      cfMapping: {
        principleId: 4,
        elementId: "4.7",
        elementName: "Welsh Language"
      },
      requestedTimeline: "2025-02",
      context: "Translation & Communication Services for bilingual governance documentation",
      status: "Requested",
      developmentArea: "Welsh Language Integration",
      improvementTheme: "Welsh Language Integration",
      gipExcerpt: "Translation & Communication Services"
    },
    {
      requestId: "partnership-collaboration-welsh-bw",
      supportAreaTheme: "Partnership & Collaboration",
      supportArea: "Partnership & Collaboration",
      cfMapping: {
        principleId: 4,
        elementId: "4.7",
        elementName: "Welsh Language"
      },
      requestedTimeline: "2025-08",
      context: "Partnership & Collaboration for Welsh-medium community partnerships",
      status: "Requested",
      developmentArea: "Welsh Language Integration",
      improvementTheme: "Welsh Language Integration",
      gipExcerpt: "Partnership & Collaboration"
    },
    {
      requestId: "training-workshops-welsh-bw",
      supportAreaTheme: "Training & Workshops",
      supportArea: "Training & Workshops",
      cfMapping: {
        principleId: 4,
        elementId: "4.7",
        elementName: "Welsh Language"
      },
      requestedTimeline: "2025-04",
      context: "Training & Workshops for Welsh language governance capacity",
      status: "Requested",
      developmentArea: "Welsh Language Integration",
      improvementTheme: "Welsh Language Integration",
      gipExcerpt: "Training & Workshops"
    },
    {
      requestId: "research-data-services-performance-bw",
      supportAreaTheme: "Research & Data Services",
      supportArea: "Research & Data Services",
      cfMapping: {
        principleId: 3,
        elementId: "3.6",
        elementName: "Performance Monitoring"
      },
      requestedTimeline: "2025-01",
      context: "Research & Data Services for performance measurement framework",
      status: "Requested",
      developmentArea: "Performance Monitoring",
      improvementTheme: "Performance Monitoring",
      gipExcerpt: "Research & Data Services"
    },
    {
      requestId: "technology-digital-solutions-performance-bw",
      supportAreaTheme: "Technology & Digital Solutions",
      supportArea: "Technology & Digital Solutions",
      cfMapping: {
        principleId: 3,
        elementId: "3.6",
        elementName: "Performance Monitoring"
      },
      requestedTimeline: "2025-03",
      context: "Technology & Digital Solutions for performance reporting systems",
      status: "Requested",
      developmentArea: "Performance Monitoring",
      improvementTheme: "Performance Monitoring",
      gipExcerpt: "Technology & Digital Solutions"
    },
    {
      requestId: "templates-toolkits-performance-bw",
      supportAreaTheme: "Templates & Toolkits",
      supportArea: "Templates & Toolkits",
      cfMapping: {
        principleId: 3,
        elementId: "3.6",
        elementName: "Performance Monitoring"
      },
      requestedTimeline: "2025-02",
      context: "Templates & Toolkits for performance measurement frameworks",
      status: "Requested",
      developmentArea: "Performance Monitoring",
      improvementTheme: "Performance Monitoring",
      gipExcerpt: "Templates & Toolkits"
    },
    {
      requestId: "facilitation-services-stakeholder-bw",
      supportAreaTheme: "Facilitation Services",
      supportArea: "Facilitation Services",
      cfMapping: {
        principleId: 3,
        elementId: "3.7",
        elementName: "Stakeholder Mapping"
      },
      requestedTimeline: "2025-04",
      context: "Facilitation Services for regional consultation mechanisms",
      status: "Requested",
      developmentArea: "Stakeholder Engagement",
      improvementTheme: "Stakeholder Engagement",
      gipExcerpt: "Facilitation Services"
    },
    {
      requestId: "technology-digital-solutions-stakeholder-bw",
      supportAreaTheme: "Technology & Digital Solutions",
      supportArea: "Technology & Digital Solutions",
      cfMapping: {
        principleId: 3,
        elementId: "3.7",
        elementName: "Stakeholder Mapping"
      },
      requestedTimeline: "2025-06",
      context: "Technology & Digital Solutions for digital engagement platforms",
      status: "Requested",
      developmentArea: "Stakeholder Engagement",
      improvementTheme: "Stakeholder Engagement",
      gipExcerpt: "Technology & Digital Solutions"
    },
    {
      requestId: "partnership-collaboration-stakeholder-bw",
      supportAreaTheme: "Partnership & Collaboration",
      supportArea: "Partnership & Collaboration",
      cfMapping: {
        principleId: 3,
        elementId: "3.7",
        elementName: "Stakeholder Mapping"
      },
      requestedTimeline: "2025-09",
      context: "Partnership & Collaboration for local authority partnerships",
      status: "Requested",
      developmentArea: "Stakeholder Engagement",
      improvementTheme: "Stakeholder Engagement",
      gipExcerpt: "Partnership & Collaboration"
    }
  ],
  
  implementationTimeline: {
    timelinePeriod: "2025-01-01 to 2025-12-31",
    activities: [
      {
        activityId: "board-diversity-1-bw",
        areaTitle: "Board Diversity & Gender Parity",
        activity: "Conduct comprehensive demographic audit",
        improvementTheme: "Board Diversity & Gender Parity",
        cfMapping: {
          principleId: 2,
          principleName: "People and Cultures"
        },
        startDate: "2025-01",
        endDate: "2025-04",
        milestone: "3 months: Audit complete",
        milestoneDate: "2025-04-01",
        status: "In Progress",
        statusPercentage: 50,
        leadPerson: "CEO & Nominations Chair",
        dependencies: []
      },
      {
        activityId: "welsh-language-1-bw",
        areaTitle: "Welsh Language Integration",
        activity: "Audit Welsh language provision in governance",
        improvementTheme: "Welsh Language Integration",
        cfMapping: {
          principleId: 4,
          principleName: "Effectively Run Organisation"
        },
        startDate: "2025-02",
        endDate: "2025-06",
        milestone: "4 months: Language audit complete",
        milestoneDate: "2025-06-01",
        status: "In Progress",
        statusPercentage: 30,
        leadPerson: "Communications Manager & Board Champion",
        dependencies: []
      },
      {
        activityId: "performance-monitoring-1-bw",
        areaTitle: "Performance Monitoring",
        activity: "Define sport-specific performance indicators",
        improvementTheme: "Performance Monitoring",
        cfMapping: {
          principleId: 3,
          principleName: "Insight, Engagement & Strategy"
        },
        startDate: "2025-01",
        endDate: "2025-04",
        milestone: "3 months: KPIs defined",
        milestoneDate: "2025-04-01",
        status: "In Progress",
        statusPercentage: 60,
        leadPerson: "Performance Director & Company Secretary",
        dependencies: []
      },
      {
        activityId: "stakeholder-engagement-1-bw",
        areaTitle: "Stakeholder Engagement",
        activity: "Map community stakeholder groups",
        improvementTheme: "Stakeholder Engagement",
        cfMapping: {
          principleId: 3,
          principleName: "Insight, Engagement & Strategy"
        },
        startDate: "2025-02",
        endDate: "2025-06",
        milestone: "4 months: Stakeholder mapping complete",
        milestoneDate: "2025-06-01",
        status: "In Progress",
        statusPercentage: 40,
        leadPerson: "Community Development Manager",
        dependencies: []
      }
    ]
  },
  
  gipExcerpts: [
    {
      areaTitle: "Board Diversity & Gender Parity",
      text: "Transform board composition to reflect Wales' diverse communities and achieve 50/50 gender balance",
      improvementTheme: "Board Diversity & Gender Parity",
      cfMapping: {
        principleId: 2,
        elementId: "2.3"
      },
      section: "Improvement Objective",
      confidence: 0.98
    },
    {
      areaTitle: "Welsh Language Integration",
      text: "Establish comprehensive bilingual governance reflecting Wales' linguistic heritage",
      improvementTheme: "Welsh Language Integration",
      cfMapping: {
        principleId: 4,
        elementId: "4.7"
      },
      section: "Improvement Objective",
      confidence: 0.96
    },
    {
      areaTitle: "Performance Monitoring",
      text: "Establish evidence-based performance measurement framework aligned with Sport Wales priorities",
      improvementTheme: "Performance Monitoring",
      cfMapping: {
        principleId: 3,
        elementId: "3.6"
      },
      section: "Improvement Objective",
      confidence: 0.94
    },
    {
      areaTitle: "Stakeholder Engagement",
      text: "Strengthen engagement with grassroots clubs and recreational participants across Wales",
      improvementTheme: "Stakeholder Engagement",
      cfMapping: {
        principleId: 3,
        elementId: "3.7"
      },
      section: "Improvement Objective",
      confidence: 0.92
    }
  ]
},

  "canoe-wales": {
  id: "canoe-wales",
  name: "Canoe Wales",
  documentDate: "2025-01-20",
  
  frameworkAlignment: [
    {
      principleId: 1,
      principleName: "Organizational/Legal Compliance",
      focusAreaCount: 1,
      elements: ["1.8 Environmental Sustainability"],
      implementationStatus: "In Progress",
      completionPercentage: 30,
      gipExcerpts: ["Embed environmental stewardship throughout governance decision-making"],
      improvementTheme: "Environmental Sustainability Integration"
    },
    {
      principleId: 4,
      principleName: "Effectively Run Organisation",
      focusAreaCount: 2,
      elements: ["4.6 Digital Governance", "4.3 Risk and Opportunity Management"],
      implementationStatus: "In Progress",
      completionPercentage: 35,
      gipExcerpts: ["Modernize governance systems through digital technology", "Establish comprehensive risk management framework"],
      improvementTheme: "Digital Transformation"
    },
    {
      principleId: 3,
      principleName: "Insight, Engagement & Strategy",
      focusAreaCount: 1,
      elements: ["3.7 Stakeholder Mapping"],
      implementationStatus: "In Progress",
      completionPercentage: 70,
      gipExcerpts: ["Strengthen relationships with waterway authorities and communities"],
      improvementTheme: "Stakeholder Engagement"
    }
  ],
  
  developmentAreas: [
    {
      areaId: "environmental-sustainability-integration-cw",
      areaTitle: "Environmental Sustainability Integration",
      improvementTheme: "Environmental Sustainability Integration",
      cfMapping: {
        principleId: 1,
        principleName: "Organizational/Legal Compliance",
        elementId: "1.8",
        elementName: "Environmental Sustainability"
      },
      objective: "Embed environmental stewardship throughout governance decision-making for sustainable water sport development",
      actions: [
        "Develop environmental impact assessment protocols for all major decisions",
        "Create water quality monitoring governance framework",
        "Establish partnerships with environmental conservation organizations",
        "Implement sustainable event management governance standards",
        "Integrate climate adaptation planning into facility governance",
        "Create comprehensive environmental policies with board oversight"
      ],
      progressStatus: "In Progress",
      progressDetails: "Environmental committee established February 2025. Water quality monitoring partnerships negotiated with Natural Resources Wales.",
      timeframe: "18-month comprehensive programme starting March 2025",
      leadPerson: "Environmental Strategy Committee & CEO",
      startDate: "2025-03",
      endDate: "2026-09"
    },
    {
      areaId: "digital-transformation-cw",
      areaTitle: "Digital Transformation",
      improvementTheme: "Digital Transformation",
      cfMapping: {
        principleId: 4,
        principleName: "Effectively Run Organisation",
        elementId: "4.6",
        elementName: "Digital Governance"
      },
      objective: "Modernize governance systems and member engagement through digital technology platforms",
      actions: [
        "Upgrade membership management systems for improved governance tracking",
        "Implement digital board meeting capabilities with remote participation",
        "Create online member consultation and voting platforms",
        "Develop mobile applications for real-time governance communication",
        "Establish digital security and data protection protocols",
        "Review and update governing documents to reflect digital governance capabilities"
      ],
      progressStatus: "In Progress",
      progressDetails: "Technology requirements assessment 65% complete. Digital governance legal framework under review.",
      timeframe: "12-month implementation cycle starting April 2025",
      leadPerson: "Digital Innovation Working Group",
      startDate: "2025-04",
      endDate: "2026-04"
    },
    {
      areaId: "risk-management-cw",
      areaTitle: "Risk Management",
      improvementTheme: "Risk Management",
      cfMapping: {
        principleId: 4,
        principleName: "Effectively Run Organisation",
        elementId: "4.3",
        elementName: "Risk and Opportunity Management"
      },
      objective: "Establish comprehensive risk management framework addressing water sport-specific governance challenges",
      actions: [
        "Water safety governance protocols and oversight mechanisms",
        "Weather-related event cancellation and communication procedures",
        "Facility access and maintenance governance standards",
        "Insurance and liability management frameworks",
        "Climate change adaptation risk assessment",
        "Crisis management procedures for water-based emergency situations"
      ],
      progressStatus: "In Progress",
      progressDetails: "Risk register development 40% complete. Insurance governance review commissioned.",
      timeframe: "Framework implementation by August 2025",
      leadPerson: "Risk & Audit Committee",
      startDate: "2025-02",
      endDate: "2025-08"
    },
    {
      areaId: "stakeholder-engagement-cw",
      areaTitle: "Stakeholder Engagement",
      improvementTheme: "Stakeholder Engagement",
      cfMapping: {
        principleId: 3,
        principleName: "Insight, Engagement & Strategy",
        elementId: "3.7",
        elementName: "Stakeholder Mapping"
      },
      objective: "Strengthen relationships with waterway authorities, landowners, and local communities",
      actions: [
        "Formalize consultation protocols with waterway management authorities",
        "Establish community liaison governance structures",
        "Create conflict resolution and mediation procedures",
        "Develop access rights advocacy and negotiation frameworks",
        "Build collaborative governance with environmental groups",
        "Implement structured feedback mechanisms for participant and stakeholder input"
      ],
      progressStatus: "In Progress",
      progressDetails: "Stakeholder mapping exercise 70% complete. First community liaison meetings scheduled.",
      timeframe: "Stakeholder framework completion by December 2025",
      leadPerson: "Community Relations Manager",
      startDate: "2025-02",
      endDate: "2025-12"
    }
  ],
  
  supportRequests: [
    {
      requestId: "specialist-expertise-access-environmental-cw",
      supportAreaTheme: "Specialist Expertise Access",
      supportArea: "Specialist Expertise Access",
      cfMapping: {
        principleId: 1,
        elementId: "1.8",
        elementName: "Environmental Sustainability"
      },
      requestedTimeline: "2025-03",
      context: "Specialist Expertise Access for environmental impact assessment protocols",
      status: "Requested",
      developmentArea: "Environmental Sustainability Integration",
      improvementTheme: "Environmental Sustainability Integration",
      gipExcerpt: "Specialist Expertise Access"
    },
    {
      requestId: "partnership-collaboration-environmental-cw",
      supportAreaTheme: "Partnership & Collaboration",
      supportArea: "Partnership & Collaboration",
      cfMapping: {
        principleId: 1,
        elementId: "1.8",
        elementName: "Environmental Sustainability"
      },
      requestedTimeline: "2025-04",
      context: "Partnership & Collaboration with environmental conservation organizations",
      status: "Requested",
      developmentArea: "Environmental Sustainability Integration",
      improvementTheme: "Environmental Sustainability Integration",
      gipExcerpt: "Partnership & Collaboration"
    },
    {
      requestId: "external-consultancy-services-environmental-cw",
      supportAreaTheme: "External Consultancy Services",
      supportArea: "External Consultancy Services",
      cfMapping: {
        principleId: 1,
        elementId: "1.8",
        elementName: "Environmental Sustainability"
      },
      requestedTimeline: "2025-05",
      context: "External Consultancy Services for climate adaptation planning",
      status: "Requested",
      developmentArea: "Environmental Sustainability Integration",
      improvementTheme: "Environmental Sustainability Integration",
      gipExcerpt: "External Consultancy Services"
    },
    {
      requestId: "technology-digital-solutions-digital-cw",
      supportAreaTheme: "Technology & Digital Solutions",
      supportArea: "Technology & Digital Solutions",
      cfMapping: {
        principleId: 4,
        elementId: "4.6",
        elementName: "Digital Governance"
      },
      requestedTimeline: "2025-04",
      context: "Technology & Digital Solutions for membership management and digital platforms",
      status: "Requested",
      developmentArea: "Digital Transformation",
      improvementTheme: "Digital Transformation",
      gipExcerpt: "Technology & Digital Solutions"
    },
    {
      requestId: "training-workshops-digital-cw",
      supportAreaTheme: "Training & Workshops",
      supportArea: "Training & Workshops",
      cfMapping: {
        principleId: 4,
        elementId: "4.6",
        elementName: "Digital Governance"
      },
      requestedTimeline: "2025-05",
      context: "Training & Workshops for digital governance capabilities",
      status: "Requested",
      developmentArea: "Digital Transformation",
      improvementTheme: "Digital Transformation",
      gipExcerpt: "Training & Workshops"
    },
    {
      requestId: "legal-constitutional-advice-digital-cw",
      supportAreaTheme: "Legal & Constitutional Advice",
      supportArea: "Legal & Constitutional Advice",
      cfMapping: {
        principleId: 4,
        elementId: "4.6",
        elementName: "Digital Governance"
      },
      requestedTimeline: "2025-04",
      context: "Legal & Constitutional Advice for digital governance framework",
      status: "Requested",
      developmentArea: "Digital Transformation",
      improvementTheme: "Digital Transformation",
      gipExcerpt: "Legal & Constitutional Advice"
    },
    {
      requestId: "specialist-expertise-access-risk-cw",
      supportAreaTheme: "Specialist Expertise Access",
      supportArea: "Specialist Expertise Access",
      cfMapping: {
        principleId: 4,
        elementId: "4.3",
        elementName: "Risk and Opportunity Management"
      },
      requestedTimeline: "2025-03",
      context: "Specialist Expertise Access for water sport-specific risk management",
      status: "Requested",
      developmentArea: "Risk Management",
      improvementTheme: "Risk Management",
      gipExcerpt: "Specialist Expertise Access"
    },
    {
      requestId: "templates-toolkits-risk-cw",
      supportAreaTheme: "Templates & Toolkits",
      supportArea: "Templates & Toolkits",
      cfMapping: {
        principleId: 4,
        elementId: "4.3",
        elementName: "Risk and Opportunity Management"
      },
      requestedTimeline: "2025-04",
      context: "Templates & Toolkits for risk management frameworks",
      status: "Requested",
      developmentArea: "Risk Management",
      improvementTheme: "Risk Management",
      gipExcerpt: "Templates & Toolkits"
    },
    {
      requestId: "external-validation-assessment-risk-cw",
      supportAreaTheme: "External Validation & Assessment",
      supportArea: "External Validation & Assessment",
      cfMapping: {
        principleId: 4,
        elementId: "4.3",
        elementName: "Risk and Opportunity Management"
      },
      requestedTimeline: "2025-06",
      context: "External Validation & Assessment for risk management framework validation",
      status: "Requested",
      developmentArea: "Risk Management",
      improvementTheme: "Risk Management",
      gipExcerpt: "External Validation & Assessment"
    },
    {
      requestId: "legal-constitutional-advice-stakeholder-cw",
      supportAreaTheme: "Legal & Constitutional Advice",
      supportArea: "Legal & Constitutional Advice",
      cfMapping: {
        principleId: 3,
        elementId: "3.7",
        elementName: "Stakeholder Mapping"
      },
      requestedTimeline: "2025-03",
      context: "Legal & Constitutional Advice for consultation protocols and access rights",
      status: "Requested",
      developmentArea: "Stakeholder Engagement",
      improvementTheme: "Stakeholder Engagement",
      gipExcerpt: "Legal & Constitutional Advice"
    },
    {
      requestId: "facilitation-services-stakeholder-cw",
      supportAreaTheme: "Facilitation Services",
      supportArea: "Facilitation Services",
      cfMapping: {
        principleId: 3,
        elementId: "3.7",
        elementName: "Stakeholder Mapping"
      },
      requestedTimeline: "2025-05",
      context: "Facilitation Services for community liaison and conflict resolution",
      status: "Requested",
      developmentArea: "Stakeholder Engagement",
      improvementTheme: "Stakeholder Engagement",
      gipExcerpt: "Facilitation Services"
    },
    {
      requestId: "partnership-collaboration-stakeholder-cw",
      supportAreaTheme: "Partnership & Collaboration",
      supportArea: "Partnership & Collaboration",
      cfMapping: {
        principleId: 3,
        elementId: "3.7",
        elementName: "Stakeholder Mapping"
      },
      requestedTimeline: "2025-06",
      context: "Partnership & Collaboration with waterway authorities and environmental groups",
      status: "Requested",
      developmentArea: "Stakeholder Engagement",
      improvementTheme: "Stakeholder Engagement",
      gipExcerpt: "Partnership & Collaboration"
    }
  ],
  
  implementationTimeline: {
    timelinePeriod: "2025-02-01 to 2026-09-30",
    activities: [
      {
        activityId: "environmental-sustainability-1-cw",
        areaTitle: "Environmental Sustainability Integration",
        activity: "Develop environmental impact assessment protocols",
        improvementTheme: "Environmental Sustainability Integration",
        cfMapping: {
          principleId: 1,
          principleName: "Organizational/Legal Compliance"
        },
        startDate: "2025-03",
        endDate: "2025-08",
        milestone: "Environmental committee established",
        milestoneDate: "2025-02-01",
        status: "In Progress",
        statusPercentage: 30,
        leadPerson: "Environmental Strategy Committee & CEO",
        dependencies: []
      },
      {
        activityId: "digital-transformation-1-cw",
        areaTitle: "Digital Transformation",
        activity: "Upgrade membership management systems",
        improvementTheme: "Digital Transformation",
        cfMapping: {
          principleId: 4,
          principleName: "Effectively Run Organisation"
        },
        startDate: "2025-04",
        endDate: "2025-10",
        milestone: "Technology requirements assessment complete",
        milestoneDate: "2025-06-01",
        status: "In Progress",
        statusPercentage: 65,
        leadPerson: "Digital Innovation Working Group",
        dependencies: []
      },
      {
        activityId: "risk-management-1-cw",
        areaTitle: "Risk Management",
        activity: "Develop water safety governance protocols",
        improvementTheme: "Risk Management",
        cfMapping: {
          principleId: 4,
          principleName: "Effectively Run Organisation"
        },
        startDate: "2025-02",
        endDate: "2025-08",
        milestone: "Risk register development in progress",
        milestoneDate: "2025-06-01",
        status: "In Progress",
        statusPercentage: 40,
        leadPerson: "Risk & Audit Committee",
        dependencies: []
      },
      {
        activityId: "stakeholder-engagement-1-cw",
        areaTitle: "Stakeholder Engagement",
        activity: "Formalize consultation protocols with authorities",
        improvementTheme: "Stakeholder Engagement",
        cfMapping: {
          principleId: 3,
          principleName: "Insight, Engagement & Strategy"
        },
        startDate: "2025-02",
        endDate: "2025-12",
        milestone: "Stakeholder mapping 70% complete",
        milestoneDate: "2025-04-01",
        status: "In Progress",
        statusPercentage: 70,
        leadPerson: "Community Relations Manager",
        dependencies: []
      }
    ]
  },
  
  gipExcerpts: [
    {
      areaTitle: "Environmental Sustainability Integration",
      text: "Embed environmental stewardship throughout governance decision-making for sustainable water sport development",
      improvementTheme: "Environmental Sustainability Integration",
      cfMapping: {
        principleId: 1,
        elementId: "1.8"
      },
      section: "Improvement Objective",
      confidence: 0.96
    },
    {
      areaTitle: "Digital Transformation",
      text: "Modernize governance systems and member engagement through digital technology platforms",
      improvementTheme: "Digital Transformation",
      cfMapping: {
        principleId: 4,
        elementId: "4.6"
      },
      section: "Improvement Objective",
      confidence: 0.94
    },
    {
      areaTitle: "Risk Management",
      text: "Establish comprehensive risk management framework addressing water sport-specific governance challenges",
      improvementTheme: "Risk Management",
      cfMapping: {
        principleId: 4,
        elementId: "4.3"
      },
      section: "Improvement Objective",
      confidence: 0.98
    },
    {
      areaTitle: "Stakeholder Engagement",
      text: "Strengthen relationships with waterway authorities, landowners, and local communities",
      improvementTheme: "Stakeholder Engagement",
      cfMapping: {
        principleId: 3,
        elementId: "3.7"
      },
      section: "Improvement Objective",
      confidence: 0.92
    }
  ]
},

"commonwealth-games-wales": {
  id: "commonwealth-games-wales",
  name: "Commonwealth Games Wales",
  documentDate: "2025-01-22",
  
  frameworkAlignment: [
    {
      principleId: 3,
      principleName: "Insight, Engagement & Strategy",
      focusAreaCount: 3,
      elements: ["3.1 Strategic Plan", "3.6 Performance Monitoring", "3.7 Stakeholder Mapping"],
      implementationStatus: "In Progress",
      completionPercentage: 35,
      gipExcerpts: ["Develop 8-year strategic framework aligned with international competition cycles", "Establish integrated performance measurement across multiple sports"],
      improvementTheme: "Strategic Planning"
    },
    {
      principleId: 2,
      principleName: "People and Cultures",
      focusAreaCount: 1,
      elements: ["4.1 Effective Meetings", "2.6 Board Review and Evaluation"],
      implementationStatus: "In Progress",
      completionPercentage: 40,
      gipExcerpts: ["Enhance multi-sport representation and decision-making"],
      improvementTheme: "Board Effectiveness"
    },
    {
      principleId: 5,
      principleName: "Finance",
      focusAreaCount: 1,
      elements: ["5.3 Budgeting", "5.4 Management Accounts", "5.11 Long-term Financial Planning"],
      implementationStatus: "In Progress",
      completionPercentage: 50,
      gipExcerpts: ["Establish comprehensive budgeting processes aligned with strategic objectives"],
      improvementTheme: "Financial Governance"
    }
  ],
  
  developmentAreas: [
    {
      areaId: "strategic-planning-cgw",
      areaTitle: "Strategic Planning",
      improvementTheme: "Strategic Planning",
      cfMapping: {
        principleId: 3,
        principleName: "Insight, Engagement & Strategy",
        elementId: "3.1",
        elementName: "Strategic Plan"
      },
      objective: "Develop 8-year strategic framework aligned with international competition cycles",
      actions: [
        "Develop 8-year strategic framework aligned with international competition cycles",
        "Create athlete pathway integration governance",
        "Establish performance target-setting mechanisms",
        "Design legacy planning and community benefit frameworks",
        "Implement stakeholder alignment protocols across multiple sports",
        "Create operational business plans translating strategy into deliverable actions"
      ],
      progressStatus: "In Progress",
      progressDetails: "Long-term planning framework 30% developed. Multi-sport coordination protocols under review. Athlete pathway mapping initiated.",
      timeframe: "2025/2026",
      leadPerson: "Strategic Planning Director & CEO",
      startDate: "2025-01",
      endDate: "2026-12"
    },
    {
      areaId: "partnership-development-cgw",
      areaTitle: "Partnership Development",
      improvementTheme: "Stakeholder Engagement",
      cfMapping: {
        principleId: 3,
        principleName: "Insight, Engagement & Strategy",
        elementId: "3.7",
        elementName: "Stakeholder Mapping"
      },
      objective: "Formalize governance relationships with constituent sports organizations",
      actions: [
        "Formalize governance relationships with constituent sports organizations",
        "Establish shared services agreements and collective advocacy",
        "Create joint decision-making protocols for major competitions",
        "Develop resource pooling and efficiency frameworks",
        "Build international federation liaison governance",
        "Implement clear partnership communication strategies across all stakeholder groups"
      ],
      progressStatus: "In Progress",
      progressDetails: "Formal agreements with 15 constituent sports in development. Shared services pilot programme launched. International federation engagement protocols 50% complete.",
      timeframe: "Ongoing through 2026",
      leadPerson: "Partnership Development Manager",
      startDate: "2025-01",
      endDate: "2026-12"
    },
    {
      areaId: "performance-monitoring-cgw",
      areaTitle: "Performance Monitoring",
      improvementTheme: "Performance Monitoring",
      cfMapping: {
        principleId: 3,
        principleName: "Insight, Engagement & Strategy",
        elementId: "3.6",
        elementName: "Performance Monitoring"
      },
      objective: "Establish integrated performance measurement across multiple sports",
      actions: [
        "Establish integrated performance measurement across multiple sports",
        "Create athlete development tracking and governance oversight",
        "Develop competition outcome analysis and strategic learning",
        "Implement resource allocation evaluation frameworks",
        "Design public accountability and transparency reporting",
        "Create systematic horizon scanning processes for future sport development trends"
      ],
      progressStatus: "In Progress",
      progressDetails: "Multi-sport KPI framework design initiated. Athlete tracking systems procurement 40% complete. Resource allocation methodology under development.",
      timeframe: "January 2026",
      leadPerson: "Performance & Analytics Director",
      startDate: "2025-02",
      endDate: "2026-01"
    },
    {
      areaId: "board-effectiveness-cgw",
      areaTitle: "Board Effectiveness",
      improvementTheme: "Board Effectiveness",
      cfMapping: {
        principleId: 4,
        principleName: "Effectively Run Organisation",
        elementId: "4.1",
        elementName: "Effective Meetings"
      },
      secondaryCfMapping: {
        principleId: 2,
        elementId: "2.6",
        elementName: "Board Review and Evaluation"
      },
      objective: "Enhance multi-sport representation and decision-making",
      actions: [
        "Enhance multi-sport representation and decision-making",
        "Implement skills-based appointment processes",
        "Create conflict resolution and consensus-building protocols",
        "Establish independent oversight and audit capabilities",
        "Develop board evaluation and continuous improvement systems",
        "Review board meeting effectiveness and implement structured agenda management"
      ],
      progressStatus: "In Progress",
      progressDetails: "Board skills audit across all represented sports completed. Independent chair appointment process 70% developed. Evaluation framework design underway.",
      timeframe: "November 2025",
      leadPerson: "Chair & Governance Committee",
      startDate: "2025-01",
      endDate: "2025-11"
    },
    {
      areaId: "financial-governance-cgw",
      areaTitle: "Financial Governance",
      improvementTheme: "Financial Governance",
      cfMapping: {
        principleId: 5,
        principleName: "Finance",
        elementId: "5.3",
        elementName: "Budgeting"
      },
      secondaryCfMapping: {
        principleId: 5,
        elementId: "5.4",
        elementName: "Management Accounts"
      },
      objective: "Establish comprehensive budgeting processes aligned with strategic objectives",
      actions: [
        "Establish comprehensive budgeting processes aligned with strategic objectives",
        "Implement management accounts providing clear organizational position understanding",
        "Create financial risk assessment and mitigation frameworks",
        "Develop long-term financial planning considering multi-year competition cycles",
        "Establish reserves policy reflecting organizational sustainability requirements",
        "Create variance analysis procedures informing future strategic planning"
      ],
      progressStatus: "In Progress",
      progressDetails: "Financial governance framework 50% developed. Strategic budgeting alignment process initiated. Long-term planning methodology under review.",
      timeframe: "September 2025",
      leadPerson: "Finance Director & Audit Committee",
      startDate: "2025-01",
      endDate: "2025-09"
    }
  ],
  
  supportRequests: [
    {
      requestId: "external-consultancy-services-strategic-cgw",
      supportAreaTheme: "External Consultancy Services",
      supportArea: "External Consultancy Services",
      cfMapping: {
        principleId: 3,
        elementId: "3.1",
        elementName: "Strategic Plan"
      },
      requestedTimeline: "2025-02",
      context: "External Consultancy Services for 8-year strategic framework development",
      status: "Requested",
      developmentArea: "Strategic Planning",
      improvementTheme: "Strategic Planning",
      gipExcerpt: "External Consultancy Services"
    },
    {
      requestId: "benchmarking-best-practice-strategic-cgw",
      supportAreaTheme: "Benchmarking & Best Practice",
      supportArea: "Benchmarking & Best Practice",
      cfMapping: {
        principleId: 3,
        elementId: "3.1",
        elementName: "Strategic Plan"
      },
      requestedTimeline: "2025-02",
      context: "Benchmarking & Best Practice for international competition cycle planning",
      status: "Requested",
      developmentArea: "Strategic Planning",
      improvementTheme: "Strategic Planning",
      gipExcerpt: "Benchmarking & Best Practice"
    },
    {
      requestId: "research-data-services-strategic-cgw",
      supportAreaTheme: "Research & Data Services",
      supportArea: "Research & Data Services",
      cfMapping: {
        principleId: 3,
        elementId: "3.1",
        elementName: "Strategic Plan"
      },
      requestedTimeline: "2025-03",
      context: "Research & Data Services for athlete pathway mapping and analysis",
      status: "Requested",
      developmentArea: "Strategic Planning",
      improvementTheme: "Strategic Planning",
      gipExcerpt: "Research & Data Services"
    },
    {
      requestId: "legal-constitutional-advice-partnership-cgw",
      supportAreaTheme: "Legal & Constitutional Advice",
      supportArea: "Legal & Constitutional Advice",
      cfMapping: {
        principleId: 3,
        elementId: "3.7",
        elementName: "Stakeholder Mapping"
      },
      requestedTimeline: "2025-02",
      context: "Legal & Constitutional Advice for formal agreements with constituent sports",
      status: "Requested",
      developmentArea: "Partnership Development",
      improvementTheme: "Stakeholder Engagement",
      gipExcerpt: "Legal & Constitutional Advice"
    },
    {
      requestId: "facilitation-services-partnership-cgw",
      supportAreaTheme: "Facilitation Services",
      supportArea: "Facilitation Services",
      cfMapping: {
        principleId: 3,
        elementId: "3.7",
        elementName: "Stakeholder Mapping"
      },
      requestedTimeline: "2025-03",
      context: "Facilitation Services for joint decision-making protocols",
      status: "Requested",
      developmentArea: "Partnership Development",
      improvementTheme: "Stakeholder Engagement",
      gipExcerpt: "Facilitation Services"
    },
    {
      requestId: "templates-toolkits-partnership-cgw",
      supportAreaTheme: "Templates & Toolkits",
      supportArea: "Templates & Toolkits",
      cfMapping: {
        principleId: 3,
        elementId: "3.7",
        elementName: "Stakeholder Mapping"
      },
      requestedTimeline: "2025-02",
      context: "Templates & Toolkits for shared services agreements",
      status: "Requested",
      developmentArea: "Partnership Development",
      improvementTheme: "Stakeholder Engagement",
      gipExcerpt: "Templates & Toolkits"
    },
    {
      requestId: "research-data-services-performance-cgw",
      supportAreaTheme: "Research & Data Services",
      supportArea: "Research & Data Services",
      cfMapping: {
        principleId: 3,
        elementId: "3.6",
        elementName: "Performance Monitoring"
      },
      requestedTimeline: "2025-02",
      context: "Research & Data Services for multi-sport performance measurement framework",
      status: "Requested",
      developmentArea: "Performance Monitoring",
      improvementTheme: "Performance Monitoring",
      gipExcerpt: "Research & Data Services"
    },
    {
      requestId: "technology-digital-solutions-performance-cgw",
      supportAreaTheme: "Technology & Digital Solutions",
      supportArea: "Technology & Digital Solutions",
      cfMapping: {
        principleId: 3,
        elementId: "3.6",
        elementName: "Performance Monitoring"
      },
      requestedTimeline: "2025-04",
      context: "Technology & Digital Solutions for athlete tracking systems",
      status: "Requested",
      developmentArea: "Performance Monitoring",
      improvementTheme: "Performance Monitoring",
      gipExcerpt: "Technology & Digital Solutions"
    },
    {
      requestId: "benchmarking-best-practice-performance-cgw",
      supportAreaTheme: "Benchmarking & Best Practice",
      supportArea: "Benchmarking & Best Practice",
      cfMapping: {
        principleId: 3,
        elementId: "3.6",
        elementName: "Performance Monitoring"
      },
      requestedTimeline: "2025-03",
      context: "Benchmarking & Best Practice for performance measurement across multiple sports",
      status: "Requested",
      developmentArea: "Performance Monitoring",
      improvementTheme: "Performance Monitoring",
      gipExcerpt: "Benchmarking & Best Practice"
    },
    {
      requestId: "benchmarking-best-practice-board-cgw",
      supportAreaTheme: "Benchmarking & Best Practice",
      supportArea: "Benchmarking & Best Practice",
      cfMapping: {
        principleId: 4,
        elementId: "4.1",
        elementName: "Effective Meetings"
      },
      requestedTimeline: "2025-02",
      context: "Benchmarking & Best Practice for multi-sport board effectiveness",
      status: "Requested",
      developmentArea: "Board Effectiveness",
      improvementTheme: "Board Effectiveness",
      gipExcerpt: "Benchmarking & Best Practice"
    },
    {
      requestId: "facilitation-services-board-cgw",
      supportAreaTheme: "Facilitation Services",
      supportArea: "Facilitation Services",
      cfMapping: {
        principleId: 4,
        elementId: "4.1",
        elementName: "Effective Meetings"
      },
      requestedTimeline: "2025-04",
      context: "Facilitation Services for conflict resolution and consensus-building",
      status: "Requested",
      developmentArea: "Board Effectiveness",
      improvementTheme: "Board Effectiveness",
      gipExcerpt: "Facilitation Services"
    },
    {
      requestId: "mentoring-peer-support-board-cgw",
      supportAreaTheme: "Mentoring & Peer Support",
      supportArea: "Mentoring & Peer Support",
      cfMapping: {
        principleId: 4,
        elementId: "4.1",
        elementName: "Effective Meetings"
      },
      requestedTimeline: "2025-05",
      context: "Mentoring & Peer Support for board development and skills enhancement",
      status: "Requested",
      developmentArea: "Board Effectiveness",
      improvementTheme: "Board Effectiveness",
      gipExcerpt: "Mentoring & Peer Support"
    },
    {
      requestId: "templates-toolkits-financial-cgw",
      supportAreaTheme: "Templates & Toolkits",
      supportArea: "Templates & Toolkits",
      cfMapping: {
        principleId: 5,
        elementId: "5.3",
        elementName: "Budgeting"
      },
      requestedTimeline: "2025-02",
      context: "Templates & Toolkits for comprehensive budgeting processes",
      status: "Requested",
      developmentArea: "Financial Governance",
      improvementTheme: "Financial Governance",
      gipExcerpt: "Templates & Toolkits"
    },
    {
      requestId: "external-consultancy-services-financial-cgw",
      supportAreaTheme: "External Consultancy Services",
      supportArea: "External Consultancy Services",
      cfMapping: {
        principleId: 5,
        elementId: "5.3",
        elementName: "Budgeting"
      },
      requestedTimeline: "2025-03",
      context: "External Consultancy Services for financial governance framework",
      status: "Requested",
      developmentArea: "Financial Governance",
      improvementTheme: "Financial Governance",
      gipExcerpt: "External Consultancy Services"
    },
    {
      requestId: "training-workshops-financial-cgw",
      supportAreaTheme: "Training & Workshops",
      supportArea: "Training & Workshops",
      cfMapping: {
        principleId: 5,
        elementId: "5.3",
        elementName: "Budgeting"
      },
      requestedTimeline: "2025-04",
      context: "Training & Workshops for financial governance and budgeting skills",
      status: "Requested",
      developmentArea: "Financial Governance",
      improvementTheme: "Financial Governance",
      gipExcerpt: "Training & Workshops"
    }
  ],
  
  implementationTimeline: {
    timelinePeriod: "2025-01-01 to 2026-12-31",
    activities: [
      {
        activityId: "strategic-planning-1-cgw",
        areaTitle: "Strategic Planning",
        activity: "Develop 8-year strategic framework",
        improvementTheme: "Strategic Planning",
        cfMapping: {
          principleId: 3,
          principleName: "Insight, Engagement & Strategy"
        },
        startDate: "2025-01",
        endDate: "2026-12",
        milestone: "Long-term planning framework 30% developed",
        milestoneDate: "2025-06-01",
        status: "In Progress",
        statusPercentage: 30,
        leadPerson: "Strategic Planning Director & CEO",
        dependencies: []
      },
      {
        activityId: "partnership-development-1-cgw",
        areaTitle: "Partnership Development",
        activity: "Formalize governance relationships with constituent sports",
        improvementTheme: "Stakeholder Engagement",
        cfMapping: {
          principleId: 3,
          principleName: "Insight, Engagement & Strategy"
        },
        startDate: "2025-01",
        endDate: "2026-12",
        milestone: "Formal agreements with 15 constituent sports in development",
        milestoneDate: "2025-08-01",
        status: "In Progress",
        statusPercentage: 45,
        leadPerson: "Partnership Development Manager",
        dependencies: []
      },
      {
        activityId: "performance-monitoring-1-cgw",
        areaTitle: "Performance Monitoring",
        activity: "Establish integrated performance measurement",
        improvementTheme: "Performance Monitoring",
        cfMapping: {
          principleId: 3,
          principleName: "Insight, Engagement & Strategy"
        },
        startDate: "2025-02",
        endDate: "2026-01",
        milestone: "Multi-sport KPI framework design initiated",
        milestoneDate: "2025-05-01",
        status: "In Progress",
        statusPercentage: 35,
        leadPerson: "Performance & Analytics Director",
        dependencies: []
      },
      {
        activityId: "board-effectiveness-1-cgw",
        areaTitle: "Board Effectiveness",
        activity: "Enhance multi-sport representation and decision-making",
        improvementTheme: "Board Effectiveness",
        cfMapping: {
          principleId: 4,
          principleName: "Effectively Run Organisation"
        },
        startDate: "2025-01",
        endDate: "2025-11",
        milestone: "Board skills audit completed",
        milestoneDate: "2025-04-01",
        status: "In Progress",
        statusPercentage: 60,
        leadPerson: "Chair & Governance Committee",
        dependencies: []
      },
      {
        activityId: "financial-governance-1-cgw",
        areaTitle: "Financial Governance",
        activity: "Establish comprehensive budgeting processes",
        improvementTheme: "Financial Governance",
        cfMapping: {
          principleId: 5,
          principleName: "Finance"
        },
        startDate: "2025-01",
        endDate: "2025-09",
        milestone: "Financial governance framework 50% developed",
        milestoneDate: "2025-05-01",
        status: "In Progress",
        statusPercentage: 50,
        leadPerson: "Finance Director & Audit Committee",
        dependencies: []
      }
    ]
  },
  
  gipExcerpts: [
    {
      areaTitle: "Strategic Planning",
      text: "Develop 8-year strategic framework aligned with international competition cycles",
      improvementTheme: "Strategic Planning",
      cfMapping: {
        principleId: 3,
        elementId: "3.1"
      },
      section: "Improvement Objective",
      confidence: 0.98
    },
    {
      areaTitle: "Partnership Development",
      text: "Formalize governance relationships with constituent sports organizations",
      improvementTheme: "Stakeholder Engagement",
      cfMapping: {
        principleId: 3,
        elementId: "3.7"
      },
      section: "Improvement Objective",
      confidence: 0.94
    },
    {
      areaTitle: "Performance Monitoring",
      text: "Establish integrated performance measurement across multiple sports",
      improvementTheme: "Performance Monitoring",
      cfMapping: {
        principleId: 3,
        elementId: "3.6"
      },
      section: "Improvement Objective",
      confidence: 0.96
    },
    {
      areaTitle: "Board Effectiveness",
      text: "Enhance multi-sport representation and decision-making",
      improvementTheme: "Board Effectiveness",
      cfMapping: {
        principleId: 4,
        elementId: "4.1"
      },
      section: "Improvement Objective",
      confidence: 0.92
    },
    {
      areaTitle: "Financial Governance",
      text: "Establish comprehensive budgeting processes aligned with strategic objectives",
      improvementTheme: "Financial Governance",
      cfMapping: {
        principleId: 5,
        elementId: "5.3"
      },
      section: "Improvement Objective",
      confidence: 0.95
    }
  ]
},

"cricket-wales": {
  id: "cricket-wales",
  name: "Cricket Wales",
  documentDate: "2025-01-22",
  
  frameworkAlignment: [
    {
      principleId: 2,
      principleName: "People and Cultures",
      focusAreaCount: 2,
      elements: ["2.2 Board Composition", "2.4 Board Skills and Diversity", "2.8 Stakeholder Engagement"],
      implementationStatus: "In Progress",
      completionPercentage: 25,
      gipExcerpts: ["Transform board composition to reflect Wales' diverse communities", "Strengthen engagement with grassroots clubs"],
      improvementTheme: "Board Diversity & Stakeholder Engagement"
    },
    {
      principleId: 4,
      principleName: "Effectively Run Organisation",
      focusAreaCount: 1,
      elements: ["4.6 Welsh Language Integration"],
      implementationStatus: "In Progress",
      completionPercentage: 18,
      gipExcerpts: ["Establish comprehensive bilingual governance reflecting Wales' linguistic heritage"],
      improvementTheme: "Welsh Language Integration"
    },
    {
      principleId: 3,
      principleName: "Insight, Engagement & Strategy",
      focusAreaCount: 1,
      elements: ["3.6 Performance Monitoring"],
      implementationStatus: "In Progress",
      completionPercentage: 40,
      gipExcerpts: ["Establish evidence-based performance measurement framework aligned with Sport Wales priorities"],
      improvementTheme: "Performance Monitoring"
    }
  ],
  
  developmentAreas: [
    {
      areaId: "board-diversity-cw",
      areaTitle: "Board Diversity & Gender Parity",
      improvementTheme: "Board Diversity & Inclusion",
      cfMapping: {
        principleId: 2,
        principleName: "People and Cultures",
        elementId: "2.4",
        elementName: "Board Skills and Diversity"
      },
      secondaryCfMapping: {
        principleId: 2,
        elementId: "2.2",
        elementName: "Board Composition"
      },
      objective: "Transform board composition to reflect Wales' diverse communities and achieve 50/50 gender balance",
      actions: [
        "Conduct comprehensive demographic audit of current board",
        "Map community representation gaps across Wales",
        "Develop targeted recruitment strategy for underrepresented groups",
        "Review constitutional barriers to diverse participation",
        "Implement mentoring programme for emerging leaders",
        "Monitor progress against diversity targets"
      ],
      progressStatus: "In Progress",
      progressDetails: "Current board 71% male, 89% over 50. Community mapping initiated across all council areas.",
      timeframe: "October 2025",
      leadPerson: "CEO & Nominations Chair",
      startDate: "2025-01",
      endDate: "2025-10"
    },
    {
      areaId: "welsh-language-integration-cw",
      areaTitle: "Welsh Language Integration",
      improvementTheme: "Welsh Language Integration",
      cfMapping: {
        principleId: 4,
        principleName: "Effectively Run Organisation",
        elementId: "4.6",
        elementName: "Welsh Language Integration"
      },
      objective: "Establish comprehensive bilingual governance reflecting Wales' linguistic heritage",
      actions: [
        "Audit current Welsh language provision in governance materials",
        "Assess board and committee Welsh language capacity",
        "Create bilingual governance documentation standards",
        "Recruit Welsh-speaking governance volunteers",
        "Develop Welsh language community engagement strategy",
        "Partner with Welsh-medium community groups"
      ],
      progressStatus: "In Progress",
      progressDetails: "Initial assessment shows 18% Welsh language governance content. Recruitment campaign planned for autumn.",
      timeframe: "December 2025",
      leadPerson: "Communications Manager & Board Champion",
      startDate: "2025-01",
      endDate: "2025-12"
    },
    {
      areaId: "performance-monitoring-cw",
      areaTitle: "Performance Monitoring",
      improvementTheme: "Performance Monitoring",
      cfMapping: {
        principleId: 3,
        principleName: "Insight, Engagement & Strategy",
        elementId: "3.6",
        elementName: "Performance Monitoring"
      },
      objective: "Establish evidence-based performance measurement framework aligned with Sport Wales priorities",
      actions: [
        "Define sport-specific governance performance indicators",
        "Create baseline measurements for all operational areas",
        "Develop quarterly reporting mechanisms",
        "Establish member satisfaction monitoring systems",
        "Link performance data to strategic decision-making",
        "Create public accountability reporting"
      ],
      progressStatus: "In Progress",
      progressDetails: "Performance framework workshop completed. Member satisfaction survey pilot launched with 34% response rate.",
      timeframe: "September 2025",
      leadPerson: "Performance Director & Company Secretary",
      startDate: "2025-01",
      endDate: "2025-09"
    },
    {
      areaId: "stakeholder-engagement-cw",
      areaTitle: "Stakeholder Engagement",
      improvementTheme: "Stakeholder Engagement",
      cfMapping: {
        principleId: 2,
        principleName: "People and Cultures",
        elementId: "2.8",
        elementName: "Stakeholder Engagement"
      },
      objective: "Strengthen engagement with grassroots clubs and recreational participants across Wales",
      actions: [
        "Map all community stakeholder groups and interests",
        "Establish regional consultation mechanisms",
        "Create club representative advisory panels",
        "Develop digital engagement platforms",
        "Implement feedback and response protocols",
        "Build partnerships with local authorities"
      ],
      progressStatus: "In Progress",
      progressDetails: "Stakeholder mapping underway, regional consultation framework being developed",
      timeframe: "Ongoing",
      leadPerson: "Community Development Manager",
      startDate: "2025-01",
      endDate: "2025-12"
    }
  ],
  
  supportRequests: [
    {
      requestId: "specialist-expertise-access-diversity-cw",
      supportAreaTheme: "Specialist Expertise Access",
      supportArea: "Specialist Expertise Access",
      cfMapping: {
        principleId: 2,
        elementId: "2.4",
        elementName: "Board Skills and Diversity"
      },
      requestedTimeline: "2025-02",
      context: "Specialist Expertise Access for board diversity transformation and demographic audit",
      status: "Requested",
      developmentArea: "Board Diversity & Gender Parity",
      improvementTheme: "Board Diversity & Inclusion",
      gipExcerpt: "Specialist Expertise Access"
    },
    {
      requestId: "benchmarking-best-practice-diversity-cw",
      supportAreaTheme: "Benchmarking & Best Practice",
      supportArea: "Benchmarking & Best Practice",
      cfMapping: {
        principleId: 2,
        elementId: "2.4",
        elementName: "Board Skills and Diversity"
      },
      requestedTimeline: "2025-03",
      context: "Benchmarking & Best Practice for diverse board composition strategies",
      status: "Requested",
      developmentArea: "Board Diversity & Gender Parity",
      improvementTheme: "Board Diversity & Inclusion",
      gipExcerpt: "Benchmarking & Best Practice"
    },
    {
      requestId: "mentoring-peer-support-diversity-cw",
      supportAreaTheme: "Mentoring & Peer Support",
      supportArea: "Mentoring & Peer Support",
      cfMapping: {
        principleId: 2,
        elementId: "2.4",
        elementName: "Board Skills and Diversity"
      },
      requestedTimeline: "2025-06",
      context: "Mentoring & Peer Support for emerging leaders programme",
      status: "Requested",
      developmentArea: "Board Diversity & Gender Parity",
      improvementTheme: "Board Diversity & Inclusion",
      gipExcerpt: "Mentoring & Peer Support"
    },
    {
      requestId: "translation-communication-services-welsh-cw",
      supportAreaTheme: "Translation & Communication Services",
      supportArea: "Translation & Communication Services",
      cfMapping: {
        principleId: 4,
        elementId: "4.6",
        elementName: "Welsh Language Integration"
      },
      requestedTimeline: "2025-02",
      context: "Translation & Communication Services for bilingual governance documentation",
      status: "Requested",
      developmentArea: "Welsh Language Integration",
      improvementTheme: "Welsh Language Integration",
      gipExcerpt: "Translation & Communication Services"
    },
    {
      requestId: "partnership-collaboration-welsh-cw",
      supportAreaTheme: "Partnership & Collaboration",
      supportArea: "Partnership & Collaboration",
      cfMapping: {
        principleId: 4,
        elementId: "4.6",
        elementName: "Welsh Language Integration"
      },
      requestedTimeline: "2025-08",
      context: "Partnership & Collaboration with Welsh-medium community groups",
      status: "Requested",
      developmentArea: "Welsh Language Integration",
      improvementTheme: "Welsh Language Integration",
      gipExcerpt: "Partnership & Collaboration"
    },
    {
      requestId: "training-workshops-welsh-cw",
      supportAreaTheme: "Training & Workshops",
      supportArea: "Training & Workshops",
      cfMapping: {
        principleId: 4,
        elementId: "4.6",
        elementName: "Welsh Language Integration"
      },
      requestedTimeline: "2025-04",
      context: "Training & Workshops for Welsh language governance capacity building",
      status: "Requested",
      developmentArea: "Welsh Language Integration",
      improvementTheme: "Welsh Language Integration",
      gipExcerpt: "Training & Workshops"
    },
    {
      requestId: "research-data-services-performance-cw",
      supportAreaTheme: "Research & Data Services",
      supportArea: "Research & Data Services",
      cfMapping: {
        principleId: 3,
        elementId: "3.6",
        elementName: "Performance Monitoring"
      },
      requestedTimeline: "2025-02",
      context: "Research & Data Services for sport-specific governance performance indicators",
      status: "Requested",
      developmentArea: "Performance Monitoring",
      improvementTheme: "Performance Monitoring",
      gipExcerpt: "Research & Data Services"
    },
    {
      requestId: "technology-digital-solutions-performance-cw",
      supportAreaTheme: "Technology & Digital Solutions",
      supportArea: "Technology & Digital Solutions",
      cfMapping: {
        principleId: 3,
        elementId: "3.6",
        elementName: "Performance Monitoring"
      },
      requestedTimeline: "2025-05",
      context: "Technology & Digital Solutions for quarterly reporting mechanisms and member satisfaction monitoring",
      status: "Requested",
      developmentArea: "Performance Monitoring",
      improvementTheme: "Performance Monitoring",
      gipExcerpt: "Technology & Digital Solutions"
    },
    {
      requestId: "templates-toolkits-performance-cw",
      supportAreaTheme: "Templates & Toolkits",
      supportArea: "Templates & Toolkits",
      cfMapping: {
        principleId: 3,
        elementId: "3.6",
        elementName: "Performance Monitoring"
      },
      requestedTimeline: "2025-03",
      context: "Templates & Toolkits for performance measurement framework and reporting",
      status: "Requested",
      developmentArea: "Performance Monitoring",
      improvementTheme: "Performance Monitoring",
      gipExcerpt: "Templates & Toolkits"
    },
    {
      requestId: "facilitation-services-stakeholder-cw",
      supportAreaTheme: "Facilitation Services",
      supportArea: "Facilitation Services",
      cfMapping: {
        principleId: 2,
        elementId: "2.8",
        elementName: "Stakeholder Engagement"
      },
      requestedTimeline: "2025-04",
      context: "Facilitation Services for regional consultation mechanisms and advisory panels",
      status: "Requested",
      developmentArea: "Stakeholder Engagement",
      improvementTheme: "Stakeholder Engagement",
      gipExcerpt: "Facilitation Services"
    },
    {
      requestId: "technology-digital-solutions-stakeholder-cw",
      supportAreaTheme: "Technology & Digital Solutions",
      supportArea: "Technology & Digital Solutions",
      cfMapping: {
        principleId: 2,
        elementId: "2.8",
        elementName: "Stakeholder Engagement"
      },
      requestedTimeline: "2025-06",
      context: "Technology & Digital Solutions for digital engagement platforms",
      status: "Requested",
      developmentArea: "Stakeholder Engagement",
      improvementTheme: "Stakeholder Engagement",
      gipExcerpt: "Technology & Digital Solutions"
    },
    {
      requestId: "partnership-collaboration-stakeholder-cw",
      supportAreaTheme: "Partnership & Collaboration",
      supportArea: "Partnership & Collaboration",
      cfMapping: {
        principleId: 2,
        elementId: "2.8",
        elementName: "Stakeholder Engagement"
      },
      requestedTimeline: "2025-07",
      context: "Partnership & Collaboration for building partnerships with local authorities",
      status: "Requested",
      developmentArea: "Stakeholder Engagement",
      improvementTheme: "Stakeholder Engagement",
      gipExcerpt: "Partnership & Collaboration"
    }
  ],
  
  implementationTimeline: {
    timelinePeriod: "2025-01-01 to 2025-12-31",
    activities: [
      {
        activityId: "board-diversity-1-cw",
        areaTitle: "Board Diversity & Gender Parity",
        activity: "Conduct demographic audit and develop recruitment strategy",
        improvementTheme: "Board Diversity & Inclusion",
        cfMapping: {
          principleId: 2,
          principleName: "People and Cultures"
        },
        startDate: "2025-01",
        endDate: "2025-10",
        milestone: "Audit complete",
        milestoneDate: "2025-04-01",
        status: "In Progress",
        statusPercentage: 25,
        leadPerson: "CEO & Nominations Chair",
        dependencies: []
      },
      {
        activityId: "welsh-language-1-cw",
        areaTitle: "Welsh Language Integration",
        activity: "Audit language provision and create bilingual standards",
        improvementTheme: "Welsh Language Integration",
        cfMapping: {
          principleId: 4,
          principleName: "Effectively Run Organisation"
        },
        startDate: "2025-01",
        endDate: "2025-12",
        milestone: "Language audit complete",
        milestoneDate: "2025-05-01",
        status: "In Progress",
        statusPercentage: 18,
        leadPerson: "Communications Manager & Board Champion",
        dependencies: []
      },
      {
        activityId: "performance-monitoring-1-cw",
        areaTitle: "Performance Monitoring",
        activity: "Define KPIs and establish baseline measurements",
        improvementTheme: "Performance Monitoring",
        cfMapping: {
          principleId: 3,
          principleName: "Insight, Engagement & Strategy"
        },
        startDate: "2025-01",
        endDate: "2025-09",
        milestone: "KPIs defined",
        milestoneDate: "2025-04-01",
        status: "In Progress",
        statusPercentage: 40,
        leadPerson: "Performance Director & Company Secretary",
        dependencies: []
      },
      {
        activityId: "stakeholder-engagement-1-cw",
        areaTitle: "Stakeholder Engagement",
        activity: "Map stakeholder groups and establish consultation mechanisms",
        improvementTheme: "Stakeholder Engagement",
        cfMapping: {
          principleId: 2,
          principleName: "People and Cultures"
        },
        startDate: "2025-01",
        endDate: "2025-12",
        milestone: "Stakeholder mapping complete",
        milestoneDate: "2025-06-01",
        status: "In Progress",
        statusPercentage: 30,
        leadPerson: "Community Development Manager",
        dependencies: []
      }
    ]
  },
  
  gipExcerpts: [
    {
      areaTitle: "Board Diversity & Gender Parity",
      text: "Transform board composition to reflect Wales' diverse communities and achieve 50/50 gender balance",
      improvementTheme: "Board Diversity & Inclusion",
      cfMapping: {
        principleId: 2,
        elementId: "2.4"
      },
      section: "Improvement Objective",
      confidence: 0.98
    },
    {
      areaTitle: "Welsh Language Integration",
      text: "Establish comprehensive bilingual governance reflecting Wales' linguistic heritage",
      improvementTheme: "Welsh Language Integration",
      cfMapping: {
        principleId: 4,
        elementId: "4.6"
      },
      section: "Improvement Objective",
      confidence: 0.97
    },
    {
      areaTitle: "Performance Monitoring",
      text: "Establish evidence-based performance measurement framework aligned with Sport Wales priorities",
      improvementTheme: "Performance Monitoring",
      cfMapping: {
        principleId: 3,
        elementId: "3.6"
      },
      section: "Improvement Objective",
      confidence: 0.96
    },
    {
      areaTitle: "Stakeholder Engagement",
      text: "Strengthen engagement with grassroots clubs and recreational participants across Wales",
      improvementTheme: "Stakeholder Engagement",
      cfMapping: {
        principleId: 2,
        elementId: "2.8"
      },
      section: "Improvement Objective",
      confidence: 0.95
    }
  ]
},

"faw": {
  id: "faw",
  name: "Football Association of Wales",
  documentDate: "2025-01-22",
  
  frameworkAlignment: [
    {
      principleId: 2,
      principleName: "People and Cultures",
      focusAreaCount: 2,
      elements: ["2.3 Directors Recruitment/Appointment", "2.5 Board/Committee Terms of Office & Composition"],
      implementationStatus: "In Progress",
      completionPercentage: 20,
      gipExcerpts: ["Transform board composition to reflect Wales' diverse communities and achieve 50/50 gender balance"],
      improvementTheme: "Board Diversity & Gender Parity"
    },
    {
      principleId: 2,
      principleName: "People and Cultures",
      focusAreaCount: 1,
      elements: ["4.1 Effective Meetings", "2.6 Board Review and Evaluation"],
      implementationStatus: "In Progress",
      completionPercentage: 40,
      gipExcerpts: ["Enhance multi-sport representation and decision-making"],
      improvementTheme: "Board Effectiveness"
    },
    {
      principleId: 5,
      principleName: "Finance",
      focusAreaCount: 1,
      elements: ["5.3 Budgeting", "5.4 Management Accounts", "5.11 Long-term Financial Planning"],
      implementationStatus: "In Progress",
      completionPercentage: 50,
      gipExcerpts: ["Establish comprehensive budgeting processes aligned with strategic objectives"],
      improvementTheme: "Financial Governance"
    }
  ],
  
  developmentAreas: [
    {
      areaId: "strategic-planning-cgw",
      areaTitle: "Strategic Planning",
      improvementTheme: "Strategic Planning",
      cfMapping: {
        principleId: 3,
        principleName: "Insight, Engagement & Strategy",
        elementId: "3.1",
        elementName: "Strategic Plan"
      },
      objective: "Develop 8-year strategic framework aligned with international competition cycles",
      actions: [
        "Develop 8-year strategic framework aligned with international competition cycles",
        "Create athlete pathway integration governance",
        "Establish performance target-setting mechanisms",
        "Design legacy planning and community benefit frameworks",
        "Implement stakeholder alignment protocols across multiple sports",
        "Create operational business plans translating strategy into deliverable actions"
      ],
      progressStatus: "In Progress",
      progressDetails: "Long-term planning framework 30% developed. Multi-sport coordination protocols under review. Athlete pathway mapping initiated.",
      timeframe: "2025/2026",
      leadPerson: "Strategic Planning Director & CEO",
      startDate: "2025-01",
      endDate: "2026-12"
    },
    {
      areaId: "partnership-development-cgw",
      areaTitle: "Partnership Development",
      improvementTheme: "Stakeholder Engagement",
      cfMapping: {
        principleId: 3,
        principleName: "Insight, Engagement & Strategy",
        elementId: "3.7",
        elementName: "Stakeholder Mapping"
      },
      objective: "Formalize governance relationships with constituent sports organizations",
      actions: [
        "Formalize governance relationships with constituent sports organizations",
        "Establish shared services agreements and collective advocacy",
        "Create joint decision-making protocols for major competitions",
        "Develop resource pooling and efficiency frameworks",
        "Build international federation liaison governance",
        "Implement clear partnership communication strategies across all stakeholder groups"
      ],
      progressStatus: "In Progress",
      progressDetails: "Formal agreements with 15 constituent sports in development. Shared services pilot programme launched. International federation engagement protocols 50% complete.",
      timeframe: "Ongoing through 2026",
      leadPerson: "Partnership Development Manager",
      startDate: "2025-01",
      endDate: "2026-12"
    },
    {
      areaId: "performance-monitoring-cgw",
      areaTitle: "Performance Monitoring",
      improvementTheme: "Performance Monitoring",
      cfMapping: {
        principleId: 3,
        principleName: "Insight, Engagement & Strategy",
        elementId: "3.6",
        elementName: "Performance Monitoring"
      },
      objective: "Establish integrated performance measurement across multiple sports",
      actions: [
        "Establish integrated performance measurement across multiple sports",
        "Create athlete development tracking and governance oversight",
        "Develop competition outcome analysis and strategic learning",
        "Implement resource allocation evaluation frameworks",
        "Design public accountability and transparency reporting",
        "Create systematic horizon scanning processes for future sport development trends"
      ],
      progressStatus: "In Progress",
      progressDetails: "Multi-sport KPI framework design initiated. Athlete tracking systems procurement 40% complete. Resource allocation methodology under development.",
      timeframe: "January 2026",
      leadPerson: "Performance & Analytics Director",
      startDate: "2025-02",
      endDate: "2026-01"
    },
    {
      areaId: "board-effectiveness-cgw",
      areaTitle: "Board Effectiveness",
      improvementTheme: "Board Effectiveness",
      cfMapping: {
        principleId: 4,
        principleName: "Effectively Run Organisation",
        elementId: "4.1",
        elementName: "Effective Meetings"
      },
      secondaryCfMapping: {
        principleId: 2,
        elementId: "2.6",
        elementName: "Board Review and Evaluation"
      },
      objective: "Enhance multi-sport representation and decision-making",
      actions: [
        "Enhance multi-sport representation and decision-making",
        "Implement skills-based appointment processes",
        "Create conflict resolution and consensus-building protocols",
        "Establish independent oversight and audit capabilities",
        "Develop board evaluation and continuous improvement systems",
        "Review board meeting effectiveness and implement structured agenda management"
      ],
      progressStatus: "In Progress",
      progressDetails: "Board skills audit across all represented sports completed. Independent chair appointment process 70% developed. Evaluation framework design underway.",
      timeframe: "November 2025",
      leadPerson: "Chair & Governance Committee",
      startDate: "2025-01",
      endDate: "2025-11"
    },
    {
      areaId: "financial-governance-cgw",
      areaTitle: "Financial Governance",
      improvementTheme: "Financial Governance",
      cfMapping: {
        principleId: 5,
        principleName: "Finance",
        elementId: "5.3",
        elementName: "Budgeting"
      },
      secondaryCfMapping: {
        principleId: 5,
        elementId: "5.4",
        elementName: "Management Accounts"
      },
      objective: "Establish comprehensive budgeting processes aligned with strategic objectives",
      actions: [
        "Establish comprehensive budgeting processes aligned with strategic objectives",
        "Implement management accounts providing clear organizational position understanding",
        "Create financial risk assessment and mitigation frameworks",
        "Develop long-term financial planning considering multi-year competition cycles",
        "Establish reserves policy reflecting organizational sustainability requirements",
        "Create variance analysis procedures informing future strategic planning"
      ],
      progressStatus: "In Progress",
      progressDetails: "Financial governance framework 50% developed. Strategic budgeting alignment process initiated. Long-term planning methodology under review.",
      timeframe: "September 2025",
      leadPerson: "Finance Director & Audit Committee",
      startDate: "2025-01",
      endDate: "2025-09"
    }
  ],
  
  supportRequests: [
    {
      requestId: "external-consultancy-services-strategic-cgw",
      supportAreaTheme: "External Consultancy Services",
      supportArea: "External Consultancy Services",
      cfMapping: {
        principleId: 3,
        elementId: "3.1",
        elementName: "Strategic Plan"
      },
      requestedTimeline: "2025-02",
      context: "External Consultancy Services for 8-year strategic framework development",
      status: "Requested",
      developmentArea: "Strategic Planning",
      improvementTheme: "Strategic Planning",
      gipExcerpt: "External Consultancy Services"
    },
    {
      requestId: "benchmarking-best-practice-strategic-cgw",
      supportAreaTheme: "Benchmarking & Best Practice",
      supportArea: "Benchmarking & Best Practice",
      cfMapping: {
        principleId: 3,
        elementId: "3.1",
        elementName: "Strategic Plan"
      },
      requestedTimeline: "2025-02",
      context: "Benchmarking & Best Practice for international competition cycle planning",
      status: "Requested",
      developmentArea: "Strategic Planning",
      improvementTheme: "Strategic Planning",
      gipExcerpt: "Benchmarking & Best Practice"
    },
    {
      requestId: "research-data-services-strategic-cgw",
      supportAreaTheme: "Research & Data Services",
      supportArea: "Research & Data Services",
      cfMapping: {
        principleId: 3,
        elementId: "3.1",
        elementName: "Strategic Plan"
      },
      requestedTimeline: "2025-03",
      context: "Research & Data Services for athlete pathway mapping and analysis",
      status: "Requested",
      developmentArea: "Strategic Planning",
      improvementTheme: "Strategic Planning",
      gipExcerpt: "Research & Data Services"
    },
    {
      requestId: "legal-constitutional-advice-partnership-cgw",
      supportAreaTheme: "Legal & Constitutional Advice",
      supportArea: "Legal & Constitutional Advice",
      cfMapping: {
        principleId: 3,
        elementId: "3.7",
        elementName: "Stakeholder Mapping"
      },
      requestedTimeline: "2025-02",
      context: "Legal & Constitutional Advice for formal agreements with constituent sports",
      status: "Requested",
      developmentArea: "Partnership Development",
      improvementTheme: "Stakeholder Engagement",
      gipExcerpt: "Legal & Constitutional Advice"
    },
    {
      requestId: "facilitation-services-partnership-cgw",
      supportAreaTheme: "Facilitation Services",
      supportArea: "Facilitation Services",
      cfMapping: {
        principleId: 3,
        elementId: "3.7",
        elementName: "Stakeholder Mapping"
      },
      requestedTimeline: "2025-03",
      context: "Facilitation Services for joint decision-making protocols",
      status: "Requested",
      developmentArea: "Partnership Development",
      improvementTheme: "Stakeholder Engagement",
      gipExcerpt: "Facilitation Services"
    },
    {
      requestId: "templates-toolkits-partnership-cgw",
      supportAreaTheme: "Templates & Toolkits",
      supportArea: "Templates & Toolkits",
      cfMapping: {
        principleId: 3,
        elementId: "3.7",
        elementName: "Stakeholder Mapping"
      },
      requestedTimeline: "2025-02",
      context: "Templates & Toolkits for shared services agreements",
      status: "Requested",
      developmentArea: "Partnership Development",
      improvementTheme: "Stakeholder Engagement",
      gipExcerpt: "Templates & Toolkits"
    },
    {
      requestId: "research-data-services-performance-cgw",
      supportAreaTheme: "Research & Data Services",
      supportArea: "Research & Data Services",
      cfMapping: {
        principleId: 3,
        elementId: "3.6",
        elementName: "Performance Monitoring"
      },
      requestedTimeline: "2025-02",
      context: "Research & Data Services for multi-sport performance measurement framework",
      status: "Requested",
      developmentArea: "Performance Monitoring",
      improvementTheme: "Performance Monitoring",
      gipExcerpt: "Research & Data Services"
    },
    {
      requestId: "technology-digital-solutions-performance-cgw",
      supportAreaTheme: "Technology & Digital Solutions",
      supportArea: "Technology & Digital Solutions",
      cfMapping: {
        principleId: 3,
        elementId: "3.6",
        elementName: "Performance Monitoring"
      },
      requestedTimeline: "2025-04",
      context: "Technology & Digital Solutions for athlete tracking systems",
      status: "Requested",
      developmentArea: "Performance Monitoring",
      improvementTheme: "Performance Monitoring",
      gipExcerpt: "Technology & Digital Solutions"
    },
    {
      requestId: "benchmarking-best-practice-performance-cgw",
      supportAreaTheme: "Benchmarking & Best Practice",
      supportArea: "Benchmarking & Best Practice",
      cfMapping: {
        principleId: 3,
        elementId: "3.6",
        elementName: "Performance Monitoring"
      },
      requestedTimeline: "2025-03",
      context: "Benchmarking & Best Practice for performance measurement across multiple sports",
      status: "Requested",
      developmentArea: "Performance Monitoring",
      improvementTheme: "Performance Monitoring",
      gipExcerpt: "Benchmarking & Best Practice"
    },
    {
      requestId: "benchmarking-best-practice-board-cgw",
      supportAreaTheme: "Benchmarking & Best Practice",
      supportArea: "Benchmarking & Best Practice",
      cfMapping: {
        principleId: 4,
        elementId: "4.1",
        elementName: "Effective Meetings"
      },
      requestedTimeline: "2025-02",
      context: "Benchmarking & Best Practice for multi-sport board effectiveness",
      status: "Requested",
      developmentArea: "Board Effectiveness",
      improvementTheme: "Board Effectiveness",
      gipExcerpt: "Benchmarking & Best Practice"
    },
    {
      requestId: "facilitation-services-board-cgw",
      supportAreaTheme: "Facilitation Services",
      supportArea: "Facilitation Services",
      cfMapping: {
        principleId: 4,
        elementId: "4.1",
        elementName: "Effective Meetings"
      },
      requestedTimeline: "2025-04",
      context: "Facilitation Services for conflict resolution and consensus-building",
      status: "Requested",
      developmentArea: "Board Effectiveness",
      improvementTheme: "Board Effectiveness",
      gipExcerpt: "Facilitation Services"
    },
    {
      requestId: "mentoring-peer-support-board-cgw",
      supportAreaTheme: "Mentoring & Peer Support",
      supportArea: "Mentoring & Peer Support",
      cfMapping: {
        principleId: 4,
        elementId: "4.1",
        elementName: "Effective Meetings"
      },
      requestedTimeline: "2025-05",
      context: "Mentoring & Peer Support for board development and skills enhancement",
      status: "Requested",
      developmentArea: "Board Effectiveness",
      improvementTheme: "Board Effectiveness",
      gipExcerpt: "Mentoring & Peer Support"
    },
    {
      requestId: "templates-toolkits-financial-cgw",
      supportAreaTheme: "Templates & Toolkits",
      supportArea: "Templates & Toolkits",
      cfMapping: {
        principleId: 5,
        elementId: "5.3",
        elementName: "Budgeting"
      },
      requestedTimeline: "2025-02",
      context: "Templates & Toolkits for comprehensive budgeting processes",
      status: "Requested",
      developmentArea: "Financial Governance",
      improvementTheme: "Financial Governance",
      gipExcerpt: "Templates & Toolkits"
    },
    {
      requestId: "external-consultancy-services-financial-cgw",
      supportAreaTheme: "External Consultancy Services",
      supportArea: "External Consultancy Services",
      cfMapping: {
        principleId: 5,
        elementId: "5.3",
        elementName: "Budgeting"
      },
      requestedTimeline: "2025-03",
      context: "External Consultancy Services for financial governance framework",
      status: "Requested",
      developmentArea: "Financial Governance",
      improvementTheme: "Financial Governance",
      gipExcerpt: "External Consultancy Services"
    },
    {
      requestId: "training-workshops-financial-cgw",
      supportAreaTheme: "Training & Workshops",
      supportArea: "Training & Workshops",
      cfMapping: {
        principleId: 5,
        elementId: "5.3",
        elementName: "Budgeting"
      },
      requestedTimeline: "2025-04",
      context: "Training & Workshops for financial governance and budgeting skills",
      status: "Requested",
      developmentArea: "Financial Governance",
      improvementTheme: "Financial Governance",
      gipExcerpt: "Training & Workshops"
    }
  ],
  
  implementationTimeline: {
    timelinePeriod: "2025-01-01 to 2026-12-31",
    activities: [
      {
        activityId: "strategic-planning-1-cgw",
        areaTitle: "Strategic Planning",
        activity: "Develop 8-year strategic framework",
        improvementTheme: "Strategic Planning",
        cfMapping: {
          principleId: 3,
          principleName: "Insight, Engagement & Strategy"
        },
        startDate: "2025-01",
        endDate: "2026-12",
        milestone: "Long-term planning framework 30% developed",
        milestoneDate: "2025-06-01",
        status: "In Progress",
        statusPercentage: 30,
        leadPerson: "Strategic Planning Director & CEO",
        dependencies: []
      },
      {
        activityId: "partnership-development-1-cgw",
        areaTitle: "Partnership Development",
        activity: "Formalize governance relationships with constituent sports",
        improvementTheme: "Stakeholder Engagement",
        cfMapping: {
          principleId: 3,
          principleName: "Insight, Engagement & Strategy"
        },
        startDate: "2025-01",
        endDate: "2026-12",
        milestone: "Formal agreements with 15 constituent sports in development",
        milestoneDate: "2025-08-01",
        status: "In Progress",
        statusPercentage: 45,
        leadPerson: "Partnership Development Manager",
        dependencies: []
      },
      {
        activityId: "performance-monitoring-1-cgw",
        areaTitle: "Performance Monitoring",
        activity: "Establish integrated performance measurement",
        improvementTheme: "Performance Monitoring",
        cfMapping: {
          principleId: 3,
          principleName: "Insight, Engagement & Strategy"
        },
        startDate: "2025-02",
        endDate: "2026-01",
        milestone: "Multi-sport KPI framework design initiated",
        milestoneDate: "2025-05-01",
        status: "In Progress",
        statusPercentage: 35,
        leadPerson: "Performance & Analytics Director",
        dependencies: []
      },
      {
        activityId: "board-effectiveness-1-cgw",
        areaTitle: "Board Effectiveness",
        activity: "Enhance multi-sport representation and decision-making",
        improvementTheme: "Board Effectiveness",
        cfMapping: {
          principleId: 4,
          principleName: "Effectively Run Organisation"
        },
        startDate: "2025-01",
        endDate: "2025-11",
        milestone: "Board skills audit completed",
        milestoneDate: "2025-04-01",
        status: "In Progress",
        statusPercentage: 60,
        leadPerson: "Chair & Governance Committee",
        dependencies: []
      },
      {
        activityId: "financial-governance-1-cgw",
        areaTitle: "Financial Governance",
        activity: "Establish comprehensive budgeting processes",
        improvementTheme: "Financial Governance",
        cfMapping: {
          principleId: 5,
          principleName: "Finance"
        },
        startDate: "2025-01",
        endDate: "2025-09",
        milestone: "Financial governance framework 50% developed",
        milestoneDate: "2025-05-01",
        status: "In Progress",
        statusPercentage: 50,
        leadPerson: "Finance Director & Audit Committee",
        dependencies: []
      }
    ]
  },
  
  gipExcerpts: [
    {
      areaTitle: "Strategic Planning",
      text: "Develop 8-year strategic framework aligned with international competition cycles",
      improvementTheme: "Strategic Planning",
      cfMapping: {
        principleId: 3,
        elementId: "3.1"
      },
      section: "Improvement Objective",
      confidence: 0.98
    },
    {
      areaTitle: "Partnership Development",
      text: "Formalize governance relationships with constituent sports organizations",
      improvementTheme: "Stakeholder Engagement",
      cfMapping: {
        principleId: 3,
        elementId: "3.7"
      },
      section: "Improvement Objective",
      confidence: 0.94
    },
    {
      areaTitle: "Performance Monitoring",
      text: "Establish integrated performance measurement across multiple sports",
      improvementTheme: "Performance Monitoring",
      cfMapping: {
        principleId: 3,
        elementId: "3.6"
      },
      section: "Improvement Objective",
      confidence: 0.96
    },
    {
      areaTitle: "Board Effectiveness",
      text: "Enhance multi-sport representation and decision-making",
      improvementTheme: "Board Effectiveness",
      cfMapping: {
        principleId: 4,
        elementId: "4.1"
      },
      section: "Improvement Objective",
      confidence: 0.92
    },
    {
      areaTitle: "Financial Governance",
      text: "Establish comprehensive budgeting processes aligned with strategic objectives",
      improvementTheme: "Financial Governance",
      cfMapping: {
        principleId: 5,
        elementId: "5.3"
      },
      section: "Improvement Objective",
      confidence: 0.95
    }
  ]
},











};





export default singlePartnerAnalysis;